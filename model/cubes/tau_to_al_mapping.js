cube(`tau_to_al_mapping`, {
  sql_table: `public.tau_to_al_mapping`,
  
  data_source: `default`,
  
  joins: {
    tenant_application_user: {
      sql: `${CUBE}.tenant_application_user_id = ${tenant_application_user}.id`,
      relationship: `many_to_one`
    },
    
    tenant_application_license: {
      sql: `${CUBE}.tenant_application_license_id = ${tenant_application_license}.id`,
      relationship: `many_to_one`
    },
    
    license_type: {
      sql: `${CUBE}.license_type_id = ${license_type}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    tenant_application_user_id: {
      sql: `tenant_application_user_id`,
      type: `string`
    },
    
    tenant_application_license_id: {
      sql: `tenant_application_license_id`,
      type: `string`
    },
    
    added_by: {
      sql: `added_by`,
      type: `string`
    },
    
    user_app_usage_status_id: {
      sql: `user_app_usage_status_id`,
      type: `string`
    },
    
    license_type_id: {
      sql: `license_type_id`,
      type: `string`
    },
    
    usage: {
      sql: `usage`,
      type: `string`
    },
    
    added_on: {
      sql: `added_on`,
      type: `time`
    },
    
    last_recorded_usage: {
      sql: `last_recorded_usage`,
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
