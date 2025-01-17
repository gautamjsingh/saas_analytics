cube(`license_type_count`, {
  sql_table: `public.license_type_count`,
  
  data_source: `default`,
  
  joins: {
    tenant_application_connection: {
      sql: `${CUBE}.connection_id = ${tenant_application_connection}.id`,
      relationship: `many_to_one`,
    },
    license_type: {
      sql: `${CUBE}.license_type_id = ${license_type}.id`,
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
    
    connection_id: {
      sql: `connection_id`,
      type: `string`
    },
    
    license_type_id: {
      sql: `license_type_id`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    count: {
      sql: `count`,
      type: `string`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    },
    
    transaction_date: {
      sql: `transaction_date`,
      type: `time`
    }
  },
  
  measures: {
    license_count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
