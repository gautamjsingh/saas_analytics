cube(`cloud_service_mapping`, {
  sql_table: `public.cloud_service_mapping`,
  
  data_source: `default`,
  
  joins: {
    cloud_service_family: {
      sql: `${CUBE}.cloud_service_family_id = ${cloud_service_family}.id`,
      relationship: `many_to_one`
    },
    
    cloud_provider_specific_service: {
      sql: `${CUBE}.cloud_provider_specific_service_id = ${cloud_provider_specific_service}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    cloud_service_family_id: {
      sql: `cloud_service_family_id`,
      type: `string`
    },
    
    cloud_provider_id: {
      sql: `cloud_provider_id`,
      type: `string`
    },
    
    cloud_provider_specific_service_id: {
      sql: `cloud_provider_specific_service_id`,
      type: `string`
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
