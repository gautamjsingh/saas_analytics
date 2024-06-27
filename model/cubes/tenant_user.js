cube(`tenant_user`, {
  sql_table: `public.tenant_user`,
  
  data_source: `default`,
  
  joins: {
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
    
    is_active: {
      sql: `is_active`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    role_id: {
      sql: `role_id`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    first_name: {
      sql: `first_name`,
      type: `string`
    },
    
    middle_name: {
      sql: `middle_name`,
      type: `string`
    },
    
    last_name: {
      sql: `last_name`,
      type: `string`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    
    activated_on: {
      sql: `activated_on`,
      type: `time`
    },
    
    deactivated_on: {
      sql: `deactivated_on`,
      type: `time`
    },
    
    last_accessed_on: {
      sql: `last_accessed_on`,
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
