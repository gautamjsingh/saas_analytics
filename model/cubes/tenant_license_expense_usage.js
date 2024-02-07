cube(`tenant_license_expense_usage`, {
  sql: `
        SELECT (coalesce(to_char(date, 'YYYY-MM') , '') || cast(application_id as varchar) || cast(tenant_id as varchar)) month_id, DATE_TRUNC('month', date) month_date, application_id, tenant_id, amount  
         FROM public.tenant_license_expense_transaction 
      `,
  joins: {
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`
    },
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    tenant_license_usage : {
      sql: `${CUBE}.month_id = ${tenant_license_usage}.month_id`,
      relationship: `one_to_one`
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
    amount: {
      sql: `amount`,
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
    totalSpend: {
      sql: `amount`,
      type: `sum`
    },
    byMonth: {
      sql: `month_id`,
      type: `count`
    },
    wastage : {
      sql: `(${amount}/${tenant_license_usage.total_licenses})* (${tenant_license_usage.total_licenses}-${tenant_license_usage.active_licenses})`,
      type: `sum`
    }
  },

  pre_aggregations: {
    main: {
      type: `original_sql`,
    },
  }
})
