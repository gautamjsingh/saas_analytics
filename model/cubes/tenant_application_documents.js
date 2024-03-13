cube(`tenant_application_documents`, {
  sql_table: `public.tenant_application_documents`,
  
  data_source: `default`,
  
  joins: {
    tenant_application_license: {
      sql: `${CUBE}.tenant_application_license_id = ${tenant_application_license}.id`,
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
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    link: {
      sql: `link`,
      type: `string`
    },
    
    tenant_application_license_id: {
      sql: `tenant_application_license_id`,
      type: `string`
    },
    
    tenant_id: {
      sql: `tenant_id`,
      type: `string`
    },
    
    tenent_application_document_type_id: {
      sql: `tenent_application_document_type_id`,
      type: `string`
    },
    
    added_by: {
      sql: `added_by`,
      type: `string`
    },
    
    updated_at: {
      sql: `updated_at`,
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
