cube(`tenant_contract`, {
  sql_table: `public.tenant_contract`,
  
  data_source: `default`,
  
  joins: {
    tenant: {
      sql: `${CUBE}.tenant_id = ${tenant}.id`,
      relationship: `many_to_one`
    },
    
    application: {
      sql: `${CUBE}.application_id = ${application}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    tenant_contract_status_id: {
      sql: `tenant_contract_status_id`,
      type: `string`
    },
    
    added_by: {
      sql: `added_by`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    contract_owner_id: {
      sql: `contract_owner_id`,
      type: `string`
    },
    
    contract_value: {
      sql: `contract_value`,
      type: `number`
    },
    
    optional_field_data: {
      sql: `optional_field_data`,
      type: `string`
    },
    
    currency_id: {
      sql: `currency_id`,
      type: `string`
    },
    
    application_id: {
      sql: `application_id`,
      type: `string`
    },
    
    last_updated_on: {
      sql: `last_updated_on`,
      type: `time`
    },
    
    added_on: {
      sql: `added_on`,
      type: `time`
    },
    
    start_date: {
      sql: `start_date`,
      type: `time`
    },
    
    end_date: {
      sql: `end_date`,
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
