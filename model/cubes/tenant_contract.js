cube(`tenant_contract`, {
  sql_table: `public.tenant_contract`,
  
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
    tenant_user: {
      sql: `${CUBE}.contract_owner_id = ${tenant_user}.id`,
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
    
    tenant_contract_status_id: {
      sql: `tenant_contract_status_id`,
      type: `string`
    },
    
    connection_id: {
      sql: `connection_id`,
      type: `string`
    },
    
    contract_value: {
      sql: `contract_value`,
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
    
    contract_owner_id: {
      sql: `contract_owner_id`,
      type: `string`
    },
    
    optional_field_data: {
      sql: `optional_field_data`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    last_updated_on: {
      sql: `last_updated_on`,
      type: `time`
    },
    
    start_date: {
      sql: `start_date`,
      type: `time`
    },
    
    end_date: {
      sql: `end_date`,
      type: `time`
    },
    
    added_on: {
      sql: `added_on`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    total_contract_value : {
      sql: `contract_value`,
      type: `sum`,
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
