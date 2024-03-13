cube(`application_tags`, {
  sql_table: `public.application_tags`,
  
  data_source: `default`,
  
  joins: {
    tag: {
      sql: `${CUBE}.tag_id = ${tag}.id`,
      relationship: `many_to_one`
    },
    
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`
    },
    
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    tag_id: {
      sql: `tag_id`,
      type: `string`
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
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
