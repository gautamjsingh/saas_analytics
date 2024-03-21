cube(`tenant_license_expense_transaction`, {
  sql_table: `public.tenant_license_expense_transaction`,
  
  data_source: `default`,
  
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    
    tenant_user: {
      sql: `${CUBE}.tenant_user_id = ${tenant_user}.id`,
      relationship: `many_to_one`
    },
    application: {
      sql: `${CUBE}.matched_application_id = ${application}.id`,  
      relationship: `many_to_one`  
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    last_updated_by: {
      sql: `last_updated_by`,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    transaction_reporting_mode_id: {
      sql: `transaction_reporting_mode_id`,
      type: `string`
    },
    
    matching_status_id: {
      sql: `matching_status_id`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `number`
    },
    
    matched_application_id: {
      sql: `matched_application_id`,
      type: `string`
    },
    
    payment_mode_id: {
      sql: `payment_mode_id`,
      type: `string`
    },
    
    transaction_file_id: {
      sql: `transaction_file_id`,
      type: `string`
    },
    
    expense_transaction_status_id: {
      sql: `expense_transaction_status_id`,
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
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    is_archived: {
      sql: `is_archived`,
      type: `string`
    },
    
    transaction_reporting_app_id: {
      sql: `transaction_reporting_app_id`,
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
    
    added_at: {
      sql: `added_at`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    total_transaction_amount :{
      sql: `amount`,
      type: `sum`,
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
