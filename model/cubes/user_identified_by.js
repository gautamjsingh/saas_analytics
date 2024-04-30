cube(`user_identified_by`, {
  sql_table: `public.user_identified_by`,
  
  data_source: `default`,
  
  joins: {
    tenant_application_user: {
      sql: `${CUBE}.tenant_application_user_id = ${tenant_application_user}.id`,
      relationship: `many_to_one`
    },
    application: {
      sql: `${CUBE}.app_id = ${application}.id`,
      relationship: `many_to_one`,
    },
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    app_id: {
      sql: `app_id`,
      type: `string`
    },
    
    user_identification_source_type_id: {
      sql: `user_identification_source_type_id`,
      type: `string`
    },
    
    tenant_application_user_id: {
      sql: `tenant_application_user_id`,
      type: `string`
    },
    
    identified_on: {
      sql: `identified_on`,
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
