cube(`cloud_expense`, {
  sql_table: `public.cloud_expense`,
  data_source: `default`,
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`
    }
  },
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    amount: {
      sql: `amount`,
      type: `string`
    },
    account_name: {
      sql: `account_name`,
      type: `string`
    },
    cost_centre_id: {
      sql: `cost_centre_id`,
      type: `string`
    },
    raw_response_data: {
      sql: `raw_response_data`,
      type: `string`
    },
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    cloud_service_type_id: {
      sql: `cloud_service_type_id`,
      type: `string`
    },
    resource_id: {
      sql: `resource_id`,
      type: `string`
    },
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    account_id: {
      sql: `account_id`,
      type: `string`
    },
    usage_date: {
      sql: `usage_date`,
      type: `time`
    }
  },
  measures: {
    count: {
      type: `count`
    },
    total_amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  pre_aggregations: {// Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});