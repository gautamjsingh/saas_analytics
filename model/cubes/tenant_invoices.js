cube(`tenant_invoices`, {
  sql_table: `public.tenant_invoices`,
  
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
    
    link: {
      sql: `link`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    payment_mode_id: {
      sql: `payment_mode_id`,
      type: `string`
    },
    
    transaction_date: {
      sql: `transaction_date`,
      type: `string`
    },
    
    transaction_id: {
      sql: `transaction_id`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `number`
    },
    
    billed_month: {
      sql: `billed_month`,
      type: `time`
    },
    
    generated_on: {
      sql: `generated_on`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    total_invoice_amount : {
      sql: `amount`,
      type: `sum`,
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
