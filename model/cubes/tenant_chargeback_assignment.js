cube(`tenant_chargeback_assignment`, {
  sql_table: `public.tenant_chargeback_assignment`,
  
  data_source: `default`,
  
  joins: {
    tenant_chargeback_strategy_configuration: {
      sql: `${CUBE}.tenant_chargeback_strategy_configuration_id = ${tenant_chargeback_strategy_configuration}.id`,
      relationship: `many_to_one`
    },
    
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
    
    license_type: {
      sql: `license_type`,
      type: `string`
    },
    
    tenant_chargeback_strategy_configuration_id: {
      sql: `tenant_chargeback_strategy_configuration_id`,
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
    
    cost_centre_id: {
      sql: `cost_centre_id`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    assignment_date: {
      sql: `assignment_date`,
      type: `time`
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
    total_amoun: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
