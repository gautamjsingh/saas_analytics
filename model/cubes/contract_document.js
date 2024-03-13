cube(`contract_document`, {
  sql_table: `public.contract_document`,
  
  data_source: `default`,
  
  joins: {
    tenant_contract: {
      sql: `${CUBE}.tenant_contract_id = ${tenant_contract}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    link: {
      sql: `link`,
      type: `string`
    },
    
    tenant_contract_id: {
      sql: `tenant_contract_id`,
      type: `string`
    },
    
    uploaded_by: {
      sql: `uploaded_by`,
      type: `string`
    },
    
    uploaded_on: {
      sql: `uploaded_on`,
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
