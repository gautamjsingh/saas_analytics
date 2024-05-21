cube(`tenant_chargeback_assignment`, {
  sql_table: `public.tenant_chargeback_assignment`,
  
  data_source: `default`,
  
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    
    license_type: {
      sql: `${CUBE}.license_type_id = ${license_type}.id`,
      relationship: `many_to_one`
    },
    tenant_application_connection: {
      sql: `${CUBE}.connection_id = ${tenant_application_connection}.id`,
      relationship: `one_to_many`,
    },
    
    tenant_chargeback_strategy_configuration: {
      sql: `${CUBE}.tenant_chargeback_strategy_configuration_id = ${tenant_chargeback_strategy_configuration}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    cost_centre_id: {
      sql: `cost_centre_id`,
      type: `string`
    },
    
    connection_id: {
      sql: `connection_id`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `string`
    },
    
    license_type_id: {
      sql: `license_type_id`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    tenant_chargeback_strategy_configuration_id: {
      sql: `tenant_chargeback_strategy_configuration_id`,
      type: `string`
    },
    
    assignment_date: {
      sql: `assignment_date`,
      type: `time`
    },
    is_most_current : {
      sql: `is_most_current`,
      type: `boolean`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    license_count: {
      sql: `license_count`,
      type: `sum`
    },
    
    total_user_count: {
      sql: `total_user_count`,
      type: `sum`
    },
    total_amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
