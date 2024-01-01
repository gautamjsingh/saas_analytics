cube(`tenant`, {
  sql_table: `public.tenant`,
  
  data_source: `default`,
  
  joins: {
    tax_id_type: {
      sql: `${CUBE}.tax_id_type_id = ${tax_id_type}.id`,
      relationship: `many_to_one`
    },
    
    currency: {
      sql: `${CUBE}.currency_id = ${currency}.id`,
      relationship: `many_to_one`
    },
    
    country: {
      sql: `${CUBE}.country_id = ${country}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    tax_id_type_id: {
      sql: `tax_id_type_id`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    country_id: {
      sql: `country_id`,
      type: `string`
    },
    
    tenant_name: {
      sql: `tenant_name`,
      type: `string`
    },
    
    tenant_code: {
      sql: `tenant_code`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    tax_id: {
      sql: `tax_id`,
      type: `string`
    },
    
    billing_address: {
      sql: `billing_address`,
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
