cube(`tenant_application_license_transaction`, {
  sql_table: `public.tenant_application_license`,
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
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
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
    updated_date: {
      sql: `updated_date`,
      type: `time`
    },
    date: {
      sql: `date`,
      type: `time`
    }
  },
  measures: {
    

  },
  pre_aggregations: {// Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});