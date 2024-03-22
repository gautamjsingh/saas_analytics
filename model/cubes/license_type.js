cube(`license_type`, {
  sql_table: `public.license_type`,
  
  data_source: `default`,
  
  joins: {
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`,
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    updated_at: {
      sql: `updated_at`,
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
