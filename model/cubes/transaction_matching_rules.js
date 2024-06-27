cube(`transaction_matching_rules`, {
  sql_table: `public.transaction_matching_rules`,
  
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
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    added_by: {
      sql: `added_by`,
      type: `string`
    },
    
    last_updated_by: {
      sql: `last_updated_by`,
      type: `string`
    },
    
    rule_definition: {
      sql: `rule_definition`,
      type: `string`
    },
    
    matching_rule_type_id: {
      sql: `matching_rule_type_id`,
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
