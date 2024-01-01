cube(`application`, {
  sql_table: `public.application`,
  
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
    
    subcategory_id: {
      sql: `subcategory_id`,
      type: `string`
    },
    
    application_name: {
      sql: `application_name`,
      type: `string`
    },
    
    logo: {
      sql: `logo`,
      type: `string`
    },
    
    url: {
      sql: `url`,
      type: `string`
    },
    
    about: {
      sql: `about`,
      type: `string`
    },
    
    transaction_entity_name: {
      sql: `transaction_entity_name`,
      type: `string`
    },
    
    modulename: {
      sql: `modulename`,
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
