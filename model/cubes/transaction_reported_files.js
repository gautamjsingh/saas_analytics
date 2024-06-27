cube(`transaction_reported_files`, {
  sql_table: `public.transaction_reported_files`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    reported_by: {
      sql: `reported_by`,
      type: `string`
    },
    
    file_attribute_match: {
      sql: `file_attribute_match`,
      type: `string`
    },
    
    source_file_link: {
      sql: `source_file_link`,
      type: `string`
    },
    
    file_name: {
      sql: `file_name`,
      type: `string`
    },
    
    reported_on: {
      sql: `reported_on`,
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
