cube(`tenant_license_expense_transaction`, {
  sql_table: `public.tenant_license_expense_transaction`,
  data_source: `default`,
  joins: {
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`
    },
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    currency: {
      sql: `${CUBE}.currency_id = ${currency}.id`,
      relationship: `many_to_one`
    },
    payment_mode: {
      sql: `${CUBE}.payment_mode_id = ${payment_mode}.id`,
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
    identified_by: {
      sql: `identified_by`,
      type: `string`
    },
    amount: {
      sql: `amount`,
      type: `string`
    },
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    payment_mode_id: {
      sql: `payment_mode_id`,
      type: `string`
    },
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    date: {
      sql: `date`,
      type: `time`
    },
    dateDisplay: {
      sql: `date`,
      type: `time`
    }
  },
  measures: {
    count: {
      type: `count`
    },
    sum: {
      sql: `amount`,
      type: `sum`
    }
  },
  pre_aggregations: {// Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});