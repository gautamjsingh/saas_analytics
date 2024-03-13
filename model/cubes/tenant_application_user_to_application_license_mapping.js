cube(`tenant_application_user_to_application_license_mapping`, {
  sql_table: `public.tenant_application_user_to_application_license_mapping`,
  
  data_source: `default`,
  
  joins: {
    tenant_application_license: {
      sql: `${CUBE}.tenant_application_license_id = ${tenant_application_license}.id`,
      relationship: `many_to_one`
    },
    
    tenant_application_user: {
      sql: `${CUBE}.tenant_application_user_id = ${tenant_application_user}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    user_app_usage_status_id: {
      sql: `user_app_usage_status_id`,
      type: `string`
    },
    
    tenant_application_license_id: {
      sql: `tenant_application_license_id`,
      type: `string`
    },
    
    tenant_application_user_id: {
      sql: `tenant_application_user_id`,
      type: `string`
    },
    
    added_by: {
      sql: `added_by`,
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
