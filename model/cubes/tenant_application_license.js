cube(`tenant_application_license`, {
  sql_table: `public.tenant_application_license`,
  
  data_source: `default`,
  
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    tenant_application_connection: {
      sql: `${CUBE}.connection_id = ${tenant_application_connection}.id`,
      relationship: `one_to_many`,
    },
    global_constants: {
      sql: `${CUBE}.license_status_id = ${global_constants}.id`,
      relationship: `many_to_one`,
    },
    tau_to_al_mapping: {
      sql: `${CUBE}.id = ${tau_to_al_mapping}.tenant_application_license_id`,
      relationship: `one_to_many`,
    },
    license_type: {
      sql: `${CUBE}.license_type_id = ${license_type}.id`,
      relationship: `one_to_many`,
    },
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    connection_id: {
      sql: `connection_id`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    license_type_id: {
      sql: `license_type_id`,
      type: `string`
    },
    
    annual_cost_per_license: {
      sql: `annual_cost_per_license`,
      type: `number`
    },
    total_licenses: {
      sql: `total_licenses`,
      type: `number`,
    },
    active_licenses: {
      sql: `active_licenses`,
      type: `number`,
    },
    inactive_licenses: {
      sql: `inactive_licenses`,
      type: `number`,
    },
    unassigned_licenses: {
      sql: `unassigned_licenses`,
      type: `number`,
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

    is_most_recent: {
      sql: `is_most_recent`,
      type: `boolean`
    },
    usage: {
      sql: `usage`,
      type: `string`
    },
    
    license_status_id: {
      sql: `license_status_id`,
      type: `string`
    },
    
    custom_data: {
      sql: `custom_data`,
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
    },
    total_amount: {
      sql: `annual_cost_per_license`,
      type: `sum`,
    },
    total_licenses_sum: {
      sql: `total_licenses`,
      type: `sum`,
    },
    total_unassigned_licenses: {
      sql: `unassigned_licenses`,
      type: `sum`,
    },
    total_active_licenses: {
      sql: `active_licenses`,
      type: `sum`,
    },
    total_licenses_count: {
      sql: `total_licenses`,
      type: `sum`,
    },
    total_inactive_licenses: {
      sql: `inactive_licenses`,
      type: `sum`,
    },
    unmapped_license_value: {
      sql: `${unassigned_licenses} * ${annual_cost_per_license}`,
      type: `sum`,
    },
    utilization: {
      sql: `${total_unassigned_licenses} * 100/ ${total_licenses_count}`,
      type: `number`,
      format: `percent`,
    },
    total_expenses: {
      sql: `${total_licenses} * ${annual_cost_per_license}`,
      type: `sum`,
    },
    most_recent: {
      sql: `transaction_date`,
      type: `max`,
    },
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
