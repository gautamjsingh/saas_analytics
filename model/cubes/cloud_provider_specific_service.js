cube(`cloud_provider_specific_service`, {
  sql_table: `public.cloud_provider_specific_service`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    identifier_strings: {
      sql: `identifier_strings`,
      type: `string`
    },
    
    cloud_provider_id: {
      sql: `cloud_provider_id`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
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
