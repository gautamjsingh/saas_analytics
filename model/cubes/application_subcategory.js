cube(`application_subcategory`, {
  sql_table: `public.application_subcategory`,
  
  data_source: `default`,
  
  joins: {
    application_category : {
      sql: `${CUBE}.category_id = ${application_category}.id`,
      relationship: `many_to_one`
    },
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    category_id: {
      sql: `category_id`,
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
    },
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
