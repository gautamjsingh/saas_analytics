cube(`tenant_chargeback_strategy_configuration`, {
  sql_table: `public.tenant_chargeback_strategy_configuration`,
  
  data_source: `default`,
  
  joins: {
    tenant_chargeback_structure: {
      sql: `${CUBE}.tenant_chargeback_structure_id = ${tenant_chargeback_structure}.id`,
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
    
    tenant_chargeback_structure_id: {
      sql: `tenant_chargeback_structure_id`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    chargeback_strategy_id: {
      sql: `chargeback_strategy_id`,
      type: `string`
    },
    
    configuration: {
      sql: `configuration`,
      type: `string`
    },
    
    updated_by: {
      sql: `updated_by`,
      type: `string`
    },
    
    updated_on: {
      sql: `updated_on`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
