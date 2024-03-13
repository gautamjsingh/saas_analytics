cube(`platform_subscription`, {
  sql_table: `public.platform_subscription`,
  
  data_source: `default`,
  
  joins: {
    license_definition: {
      sql: `${CUBE}.license_definition_id = ${license_definition}.id`,
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
    
    billing_information: {
      sql: `billing_information`,
      type: `string`
    },
    
    platform_subscription_status_id: {
      sql: `platform_subscription_status_id`,
      type: `string`
    },
    
    license_definition_id: {
      sql: `license_definition_id`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    plan_id: {
      sql: `plan_id`,
      type: `string`
    },
    
    expiry_date: {
      sql: `expiry_date`,
      type: `time`
    },
    
    end_on: {
      sql: `end_on`,
      type: `time`
    },
    
    started_on: {
      sql: `started_on`,
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
