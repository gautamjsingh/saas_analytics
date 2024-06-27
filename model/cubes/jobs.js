cube(`jobs`, {
  sql_table: `public.jobs`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    payload: {
      sql: `payload`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    error: {
      sql: `error`,
      type: `string`
    },
    
    added_on: {
      sql: `added_on`,
      type: `time`
    },
    
    started_on: {
      sql: `started_on`,
      type: `time`
    },
    
    completed_on: {
      sql: `completed_on`,
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
