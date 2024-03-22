cube(`license_history`, {
  sql_table: `public.license_history`,
  
  data_source: `default`,
  
  joins: {
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`,
    },
    
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`,
    },

    global_constants: {
      sql: `${CUBE}.license_status_id = ${global_constants}.id`,
      relationship: `many_to_one`,
    },

    tau_to_al_mapping: {
      sql: `${CUBE}.id = ${tau_to_al_mapping}.tenant_application_license_id`,
      relationship: `one_to_many`,
    },
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    annual_cost_per_license: {
      sql: `annual_cost_per_license`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    added_by: {
      sql: `added_by`,
      type: `string`
    },
    
    original_currency_multiplier: {
      sql: `original_currency_multiplier`,
      type: `string`
    },
    
    is_fetched_via_api: {
      sql: `is_fetched_via_api`,
      type: `string`
    },
    
    is_paid_license: {
      sql: `is_paid_license`,
      type: `string`
    },
    
    usage: {
      sql: `usage`,
      type: `string`
    },
    
    tenant_application_license_status_id: {
      sql: `tenant_application_license_status_id`,
      type: `string`
    },
    
    note: {
      sql: `note`,
      type: `string`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    
    transaction_date: {
      sql: `transaction_date`,
      type: `time`
    },
    
    conversion_date: {
      sql: `conversion_date`,
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
