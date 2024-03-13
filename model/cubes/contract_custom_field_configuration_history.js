cube(`contract_custom_field_configuration_history`, {
  sql_table: `public.contract_custom_field_configuration_history`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    config_data: {
      sql: `config_data`,
      type: `string`
    },
    
    updated_by: {
      sql: `updated_by`,
      type: `string`
    },
    
    configuration_id: {
      sql: `configuration_id`,
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
