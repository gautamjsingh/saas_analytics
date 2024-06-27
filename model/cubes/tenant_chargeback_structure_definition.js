cube(`tenant_chargeback_structure_definition`, {
  sql_table: `public.tenant_chargeback_structure_definition`,
  
  data_source: `default`,
  
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    
    tenant_chargeback_structure: {
      sql: `${CUBE}.tenant_chargeback_structure_id = ${tenant_chargeback_structure}.id`,
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
    
    parent_id: {
      sql: `parent_id`,
      type: `string`
    },
    
    tenant_chargeback_structure_id: {
      sql: `tenant_chargeback_structure_id`,
      type: `string`
    },
    
    cost_centre_id: {
      sql: `cost_centre_id`,
      type: `string`
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    updated_on: {
      sql: `updated_on`,
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
