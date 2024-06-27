cube(`tenant_chargeback_report`, {
  sql_table: `public.tenant_chargeback_report`,
  
  data_source: `default`,
  
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
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
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    cost_centre_id: {
      sql: `cost_centre_id`,
      type: `string`
    },
    
    total_amount: {
      sql: `total_amount`,
      type: `string`
    },
    
    license_count: {
      sql: `license_count`,
      type: `string`
    },
    
    license_type_id: {
      sql: `license_type_id`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
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
