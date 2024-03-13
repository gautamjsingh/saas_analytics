cube(`benchmark_license_cost`, {
  sql_table: `public.benchmark_license_cost`,
  
  data_source: `default`,
  
  joins: {
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`
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
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    benchmark_cost: {
      sql: `benchmark_cost`,
      type: `string`
    },
    
    last_updated_on: {
      sql: `last_updated_on`,
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
