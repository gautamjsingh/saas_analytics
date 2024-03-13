cube(`tenant_application_license`, {
  sql_table: `public.tenant_application_license`,
  
  data_source: `default`,
  
  joins: {
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`
    },
    
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
    
    tenant_application_license_status_id: {
      sql: `tenant_application_license_status_id`,
      type: `string`
    },
    
    usage: {
      sql: `usage`,
      type: `string`
    },
    
    added_by: {
      sql: `added_by`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    note: {
      sql: `note`,
      type: `string`
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    original_currency_multiplier: {
      sql: `original_currency_multiplier`,
      type: `string`
    },
    
    is_paid_license: {
      sql: `is_paid_license`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    is_fetched_via_api: {
      sql: `is_fetched_via_api`,
      type: `string`
    },
    
    annual_cost_per_license: {
      sql: `annual_cost_per_license`,
      type: `number`
    },
    
    license_type: {
      sql: `license_type`,
      type: `string`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    
    conversion_date: {
      sql: `conversion_date`,
      type: `time`
    },
    
    transaction_date: {
      sql: `transaction_date`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    total_amount: {
      sql: `annual_cost_per_license`,
      type: `sum`,
    },
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
