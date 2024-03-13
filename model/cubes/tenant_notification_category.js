cube(`tenant_notification_category`, {
  sql_table: `public.tenant_notification_category`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    notification_type_id: {
      sql: `notification_type_id`,
      type: `string`
    },
    
    notification_category_id: {
      sql: `notification_category_id`,
      type: `string`
    },
    
    template_id: {
      sql: `template_id`,
      type: `string`
    },
    
    rules: {
      sql: `rules`,
      type: `string`
    },
    
    values: {
      sql: `values`,
      type: `string`
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
