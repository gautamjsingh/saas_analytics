cube(`audit_logs`, {
  sql_table: `public.audit_logs`,
  
  data_source: `default`,
  
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    
    tenant_user: {
      sql: `${CUBE}.tenant_user_id = ${tenant_user}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    action_type: {
      sql: `action_type`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    tenant_user_id: {
      sql: `tenant_user_id`,
      type: `string`
    },
    
    log_content: {
      sql: `log_content`,
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
