cube(`role_permissions`, {
  sql_table: `public.role_permissions`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    role_id: {
      sql: `role_id`,
      type: `string`
    },
    
    permission_id: {
      sql: `permission_id`,
      type: `string`
    },
    
    permission_value: {
      sql: `permission_value`,
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
