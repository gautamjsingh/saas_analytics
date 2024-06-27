cube(`connection_raw_data`, {
  sql_table: `public.connection_raw_data`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    connection_id: {
      sql: `connection_id`,
      type: `string`
    },
    
    raw_response: {
      sql: `raw_response`,
      type: `string`
    },
    
    request_details: {
      sql: `request_details`,
      type: `string`
    },
    
    is_processed: {
      sql: `is_processed`,
      type: `string`
    },
    
    processed_on: {
      sql: `processed_on`,
      type: `time`
    },
    
    fetched_on: {
      sql: `fetched_on`,
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
