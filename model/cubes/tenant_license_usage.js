cube(`tenant_license_usage`, {

  sql: `
  SELECT (coalesce(to_char(date, 'YYYY-MM') , '') || cast(application_id as varchar) || cast(tenant_id as varchar)) month_id, DATE_TRUNC('month', date) month_date, application_id, tenant_id, total_licenses, active_licenses
   FROM public.tenant_application_license 
`,
    data_source: `default`,
    joins: {
      application: {
        sql: `${CUBE}.application_id = ${application}.id`,
        relationship: `many_to_one`
      },
      tenant: {
        sql: `${CUBE}.tenant_id = ${tenant}.id`,
        relationship: `many_to_one`
      }
    },
    dimensions: {
      application_id: {
        sql: `application_id`,
        type: `string`
      },
      tenant_id: {
        sql: `tenant_id`,
        type: `string`
      },
      total_licenses: {
        sql: `total_licenses`,
        type: `number`
      },
      active_licenses: {
        sql: `active_licenses`,
        type: `number`
      },
      inactive_licenses: {
        sql: `inactive_licenses`,
        type: `number`
      },
      unassigned_licenses: {
        sql: `unassigned_licenses`,
        type: `number`
      },
      month_id: {
        sql: `month_id`,
        type: `string`,
        primary_key: true
      },
      month_date: {
        sql: `month_date`,
        type: `time`
      }
    },
    measures: {
      totalLicenses: {
        sql: `total_licenses`,
        type: `sum`
      },
      unassignedLicenses: {
        sql: `unassigned_licenses`,
        type: `sum`
      },
      activeLicenses: {
        sql: `active_licenses`,
        type: `sum`
      },
      utilization: {
        sql: `100.0 * ${activeLicenses} / ${totalLicenses}`,
        type: `number`,
        format: `percent`,
      },
  
    },
    pre_aggregations: {// Pre-aggregation definitions go here.
      // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
      main: {
        type: `original_sql`,
      },
    }
});
