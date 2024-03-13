cube(`notifications`, {
  sql_table: `public.notifications`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    notification_type_id: {
      sql: `notification_type_id`,
      type: `string`
    },
    
    template_id: {
      sql: `template_id`,
      type: `string`
    },
    
    sent_to: {
      sql: `sent_to`,
      type: `string`
    },
    
    values: {
      sql: `values`,
      type: `string`
    },
    
    sent_at: {
      sql: `sent_at`,
      type: `time`
    },
    
    added_on: {
      sql: `added_on`,
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
