"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92],{4328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(5893),s=t(1151),a=t(4866),l=t(5162);const i={sidebar_position:5,title:"Async API"},o=void 0,d={id:"elide/clientapis/asyncapi",title:"Async API",description:"Overview",source:"@site/docs/elide/clientapis/asyncapi.mdx",sourceDirName:"elide/clientapis",slug:"/elide/clientapis/asyncapi",permalink:"/astraios/zh-cn/docs/elide/clientapis/asyncapi",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/elide/clientapis/asyncapi.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Async API"},sidebar:"tutorialSidebar",previous:{title:"GraphQL Subscriptions",permalink:"/astraios/zh-cn/docs/elide/clientapis/subscriptions"},next:{title:"OpenAPI",permalink:"/astraios/zh-cn/docs/elide/openapi"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Design",id:"design",level:2},{value:"API",id:"api",level:3},{value:"Threading",id:"threading",level:3},{value:"Async After",id:"async-after",level:3},{value:"Background Cleaner",id:"background-cleaner",level:3},{value:"TableExport Results Download",id:"tableexport-results-download",level:3},{value:"Supported Query Types",id:"supported-query-types",level:3},{value:"Supported Result Types",id:"supported-result-types",level:3},{value:"Query Status",id:"query-status",level:3},{value:"Security",id:"security",level:2},{value:"Enable the Async API",id:"enable-the-async-api",level:2},{value:"Additional Configuration",id:"additional-configuration",level:3},{value:"Running",id:"running",level:2},{value:"Submitting query",id:"submitting-query",level:4},{value:"Retrieving status and result",id:"retrieving-status-and-result",level:3},{value:"Downloading the TableExport results",id:"downloading-the-tableexport-results",level:3},{value:"Overriding the AsyncApiDao",id:"overriding-the-asyncapidao",level:2},{value:"Overriding the ResultStorageEngine",id:"overriding-the-resultstorageengine",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Elide APIs are designed for synchronous request and response behavior. The time allowed to service a synchronous\nresponse can be limited by proxy servers and gateways. Analytic queries can often take longer than these limits and\nresult in a server timeout. Elide's asynchronous API decouples the submission of a request and the delivery of the\nresponse into separate client calls. Some of the features available are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Queries are run in a background thread that posts the results into a persistence store."}),"\n",(0,r.jsx)(n.li,{children:"Results can be retrieved as an embedded response or URL for downloading later."}),"\n",(0,r.jsx)(n.li,{children:"Supported downloading formats - CSV and JSON."}),"\n",(0,r.jsx)(n.li,{children:"Queries can be configured to execute synchronously before switching to asynchronous mode if not finished by a client\nprovided threshold."}),"\n",(0,r.jsx)(n.li,{children:"Queries that are interrupted due to an application crash/reboot are automatically flagged as TIMEDOUT."}),"\n",(0,r.jsx)(n.li,{children:"Persisted queries and results are deleted after a configurable threshold."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"design",children:"Design"}),"\n",(0,r.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"The Async API supports two different query abstractions built using standard Elide models (AsyncQuery and TableExport):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Any read-only API request in JSON-API or GraphQL can be submitted by creating an AsyncQuery object. After creation,\nthe client can poll the AsyncQuery object asynchronously for status updates. Once complete, the AsyncQuery object\nstores the query result as an embedded attribute."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For large response bodies, Elide supports a streaming abstraction called TableExport. It works similarly to the\nAsyncQuery model but with three important differences:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TableExport can only be leveraged when:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The query is a simple read."}),"\n",(0,r.jsx)(n.li,{children:"The model being queried has no relationships."}),"\n",(0,r.jsx)(n.li,{children:"Only one model is being queried in the request."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Upon successful completion, the TableExport model includes a separate URL attribute that references the query\nresults for streaming downloads."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The results of the GraphQL or JSON-API query are converted into a simple, flat JSON or CSV format."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example API requests and responses can be found ",(0,r.jsx)(n.a,{href:"asyncapi#running",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"threading",children:"Threading"}),"\n",(0,r.jsxs)(n.p,{children:["Each Elide instance runs a scheduler that is responsible for executing these requests in background threads. New async\nrequests are initially marked in the QUEUED state. The requests are picked for execution as the threads become\navailable. Upon completion, the background thread posts the query status and results to a persistent store. The size of\nthe thread pool can be configured as mentioned ",(0,r.jsx)(n.a,{href:"asyncapi#additional-configuration",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"async-after",children:"Async After"}),"\n",(0,r.jsxs)(n.p,{children:["The Async requests can be configured to execute synchronously before switching to asynchronous mode. The requests not\nfinished synchronously by the client provided threshold are handed off to a separate thread for posting the results once\ncomplete. The default value for ",(0,r.jsx)(n.code,{children:"async-after"})," is 10 seconds. Setting ",(0,r.jsx)(n.code,{children:"async-after"})," to 0 will execute the request in\nasynchronous mode upon submission."]}),"\n",(0,r.jsx)(n.h3,{id:"background-cleaner",children:"Background Cleaner"}),"\n",(0,r.jsx)(n.p,{children:"Each Elide instance will also run a scheduler for maintenance and cleanup."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It cleans up requests and results stored in the persistent store."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It scans and flags the queries that failed due to an application crash/reboot automatically as TIMEDOUT."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It is responsible for the graceful cancellation of async requests."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The user can update the status of the async requests to CANCELLED. The cleaner polls the AsyncQuery and TableExport\nmodels to find any new requests that were CANCELLED and tries to terminate the transaction associated with that\nexecution and change the status to CANCEL_COMPLETE."}),"\n",(0,r.jsx)(n.li,{children:"Long-running transactions that exceed the run time threshold are terminated. Any background thread executing the\noriginal request is interrupted."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The retention, polling interval, and max run time thresholds can be configured during application startup."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This scheduler can be disabled by setting ",(0,r.jsx)(n.code,{children:"cleanup.enabled"})," to false as mentioned\n",(0,r.jsx)(n.a,{href:"asyncapi#enable-the-async-api",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"tableexport-results-download",children:"TableExport Results Download"}),"\n",(0,r.jsx)(n.p,{children:"Elide has built-in support for streaming the results of a TableExport request through the export endpoint. Upon\nsuccessful completion, the TableExport model includes a separate URL attribute where results can be downloaded from."}),"\n",(0,r.jsxs)(n.p,{children:["Enabling the end-point, timeouts, path, download attachment extensions, etc. can be configured during application\nstartup as mentioned ",(0,r.jsx)(n.a,{href:"asyncapi#additional-configuration",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"supported-query-types",children:"Supported Query Types"}),"\n",(0,r.jsx)(n.p,{children:"Below are the supported values for query type in asynchronous calls:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GRAPHQL_V1_0"}),"\n",(0,r.jsx)(n.li,{children:"JSONAPI_V1_0"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"supported-result-types",children:"Supported Result Types"}),"\n",(0,r.jsxs)(n.p,{children:["Elide can transform the results into a pre-selected format while persisting them via the\n",(0,r.jsx)(n.a,{href:"asyncapi#overriding-the-resultstorageengine",children:"ResultStorageEngine"}),". Below are the supported formats for Table Export\nresults:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JSON"}),"\n",(0,r.jsx)(n.li,{children:"CSV"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"query-status",children:"Query Status"}),"\n",(0,r.jsx)(n.p,{children:"Below are the different states of an asynchronous request:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QUEUED"}),(0,r.jsx)(n.td,{children:"Request is submitted and waiting to be picked up for execution."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PROCESSING"}),(0,r.jsx)(n.td,{children:"Request has been picked up for execution."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COMPLETE"}),(0,r.jsx)(n.td,{children:"Request has completed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CANCELLED"}),(0,r.jsx)(n.td,{children:"The client has requested to cancel a running request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TIMEDOUT"}),(0,r.jsx)(n.td,{children:"Request did not finish within the configured maximum run time."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FAILURE"}),(0,r.jsx)(n.td,{children:"Request not completed due to one or more failures encountered by the scheduler."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CANCEL_COMPLETE"}),(0,r.jsx)(n.td,{children:"Request has been canceled by the background cleaner."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Malformed or invalid queries provided in the Async request will finish with COMPLETE status and the actual error message\nwill be available in the ",(0,r.jsx)(n.code,{children:"result"})," property of AsyncQuery and TableExport models."]}),"\n",(0,r.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,r.jsxs)(n.p,{children:["The Async API models (AsyncQuery and TableExport) have a simple permission model: Only the principal who submitted a\nquery and principals which belong to an administrative role are allowed to retrieve its status or results. Principals\ncan be assigned roles when constructing the Elide ",(0,r.jsx)(n.a,{href:"security#user",children:"user"})," object."]}),"\n",(0,r.jsx)(n.h2,{id:"enable-the-async-api",children:"Enable the Async API"}),"\n",(0,r.jsxs)(n.p,{children:["By default the async API is disabled. The elide models (AsyncQuery and TableExport) needed to support the Async API are\nJPA ",(0,r.jsx)(n.a,{href:"asyncapi#enable-the-async-api",children:"models"})," that are mapped to a specific database schema. This schema must be created in our target\ndatabase. Feel free to modify the query/result column sizes if needed."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.enabled"})}),(0,r.jsx)(n.td,{children:"Enable the Async API feature."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.cleanup.enabled"})}),(0,r.jsx)(n.td,{children:"Enable cleaning up of Async API requests history, update the status of interrupted/timedout requests, and cancel requests."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"additional-configuration",children:"Additional Configuration"}),"\n",(0,r.jsx)(n.p,{children:"These additional configuration settings control timeouts, cleanup, export end-point, resultStorageEngine and the sizes of thread pools."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.enabled"})}),(0,r.jsx)(n.td,{children:"Whether or not the async feature is enabled."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.thread-pool-size"})}),(0,r.jsx)(n.td,{children:"Default thread pool size."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.max-async-after"})}),(0,r.jsx)(n.td,{children:"Default maximum permissible time to wait synchronously for the query to complete before switching to asynchronous mode."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10s"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.cleanup.enabled"})}),(0,r.jsx)(n.td,{children:"Whether or not the cleanup is enabled."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.cleanup.query-max-run-time"})}),(0,r.jsx)(n.td,{children:"Maximum query run time."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"3600s"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.cleanup.query-retention-duration"})}),(0,r.jsx)(n.td,{children:"Retention period of async query and results before being cleaned up."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"7d"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.cleanup.query-cancellation-interval"})}),(0,r.jsx)(n.td,{children:"Polling interval to identify async queries that should be canceled."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"300s"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.export.enabled"})}),(0,r.jsx)(n.td,{children:"Whether or not the controller is enabled."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.export.path"})}),(0,r.jsx)(n.td,{children:"The URL path prefix for the controller."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/export"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.export.append-file-extension"})}),(0,r.jsx)(n.td,{children:"Enable Adding Extension to table export attachments."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.export.storage-destination"})}),(0,r.jsx)(n.td,{children:"Storage engine destination."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/tmp"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elide.async.export.format.csv.write-header"})}),(0,r.jsx)(n.td,{children:"Generates the header in a CSV formatted export."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"exportAsyncResponseTimeout"})}),(0,r.jsx)(n.td,{children:"Default timeout for TableExport's result download end-point."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"30s"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"exportAsyncResponseExecutor"})}),(0,r.jsx)(n.td,{children:"Executor for executing TableExport's result download request asynchronously."}),(0,r.jsx)(n.td,{children:"A java.util.concurrent.ExecutorService instance"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,r.jsxs)(n.p,{children:["After configuring and starting our service, the following commands illustrate how to make asynchronous requests. Don't\nforget to change ",(0,r.jsx)(n.code,{children:"localhost:8080"})," accordingly. The example below makes use of the models and sample data that the\nliquibase migrations added through our example is ",(0,r.jsx)(n.a,{href:"asyncapi#running",children:"available here"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"submitting-query",children:"Submitting query"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"asyncquery-json-api",label:"AsyncQuery JSON-API",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -X POST http://localhost:8080/api/v1/asyncQuery/ \\\n    -H"Content-Type: application/vnd.api+json" -H"Accept: application/vnd.api+json" \\\n    -d\'{\n            "data": {\n                       "type": "asyncQuery",\n                       "id": "ba31ca4e-ed8f-4be0-a0f3-12088fa9263d",\n                       "attributes": {\n                                       "query": "/group?sort=commonName&fields%5Bgroup%5D=commonName,description",\n                                       "queryType": "JSONAPI_V1_0",\n                                       "status": "QUEUED"\n                                     }\n                    }\n        }\'\n'})})}),(0,r.jsx)(l.Z,{value:"asyncquery-graphql",label:"AsyncQuery GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -g -X POST -H"Content-Type: application/json" \\\n    -H"Accept: application/json" "http://localhost:8080/graphql/api/v1" \\\n    -d\'{\n            "query" : "mutation { asyncQuery(op: UPSERT, data: {id: \\"bb31ca4e-ed8f-4be0-a0f3-12088fb9263e\\", query: \\"{\\\\\\"query\\\\\\":\\\\\\"{ group { edges { node { name } } } }\\\\\\",\\\\\\"variables\\\\\\":null}\\", queryType: GRAPHQL_V1_0, status: QUEUED}) { edges { node { id query queryType status result {completedOn responseBody contentLength httpStatus recordCount} } } } }"\n       }\'\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-json-api",label:"TableExport JSON-API",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -X POST http://localhost:8080/api/v1/tableExport/ \\\n    -H"Content-Type: application/vnd.api+json" -H"Accept: application/vnd.api+json" \\\n    -d\'{\n            "data": {\n                       "type": "tableExport",\n                       "id": "ba31ca4e-ed8f-4be0-a0f3-12088fa9263f",\n                       "attributes": {\n                                       "query": "/group?sort=commonName&fields%5Bgroup%5D=commonName,description",\n                                       "queryType": "JSONAPI_V1_0",\n                                       "status": "QUEUED",\n                                       "resultType": "CSV"\n                                     }\n                    }\n        }\'\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-graphql",label:"TableExport GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -g -X POST -H"Content-Type: application/json" \\\n    -H"Accept: application/json" "http://localhost:8080/graphql/api/v1" \\\n    -d\'{\n            "query" : "mutation { tableExport(op: UPSERT, data: {id: \\"bb31ca4e-ed8f-4be0-a0f3-12088fb9263g\\", query: \\"{\\\\\\"query\\\\\\":\\\\\\"{ group { edges { node { name } } } }\\\\\\",\\\\\\"variables\\\\\\":null}\\", queryType: GRAPHQL_V1_0, resultType: CSV, status: QUEUED}) { edges { node { id query queryType resultType status result {completedOn url message httpStatus recordCount} } } } }"\n       }\'\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"Here are the respective responses:"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"asyncquery-json-api",label:"AsyncQuery JSON-API",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "type":"asyncQuery",\n        "id":"ba31ca4e-ed8f-4be0-a0f3-12088fa9263d",\n        "attributes":{\n            "asyncAfterSeconds":10,\n            "principalName":null,\n            "createdOn":"2020-04-08T23:29Z",\n            "query":"/group?sort=commonName&fields%5Bgroup%5D=commonName,description",\n            "queryType":"JSONAPI_V1_0",\n            "status":"COMPLETE",\n            "updatedOn":"2020-04-08T23:29Z",\n            "result":{\n                "recordCount":2,\n                "httpStatus":200,\n                "completedOn":"2020-04-08T23:29Z",\n                "contentLength":282,\n                "responseBody":"{\\"data\\":[{\\"type\\":\\"group\\",\\"id\\":\\"com.yahoo.elide\\",\\"attributes\\":{\\"commonName\\":\\"Elide\\",\\"description\\":\\"The magical library powering this project\\"}},{\\"type\\":\\"group\\",\\"id\\":\\"com.example.repository\\",\\"attributes\\":{\\"commonName\\":\\"Example Repository\\",\\"description\\":\\"The code for this project\\"}}]}"\n            }\n        }\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"asyncquery-graphql",label:"AsyncQuery GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "asyncQuery":{\n            "edges":[\n                {\n                    "node":{\n                        "id":"bb31ca4e-ed8f-4be0-a0f3-12088fb9263e",\n                        "query":"{\\"query\\":\\"{ group { edges { node { name } } } }\\",\\"variables\\":null}",\n                        "queryType":"GRAPHQL_V1_0",\n                        "status":"COMPLETE",\n                        "result":{\n                            "completedOn":"2020-04-08T21:25Z",\n                            "responseBody":"{\\"data\\":{\\"group\\":{\\"edges\\":[{\\"node\\":{\\"name\\":\\"com.example.repository\\"}},{\\"node\\":{\\"name\\":\\"com.yahoo.elide\\"}},{\\"node\\":{\\"name\\":\\"elide-demo\\"}}]}}}",\n                            "contentLength":109,\n                            "httpStatus":200,\n                            "recordCount":2\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-json-api",label:"TableExport JSON-API",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "type":"tableExport",\n        "id":"ba31ca4e-ed8f-4be0-a0f3-12088fa9263f",\n        "attributes":{\n            "asyncAfterSeconds":10,\n            "principalName":null,\n            "createdOn":"2020-04-08T23:29Z",\n            "query":"/group?sort=commonName&fields%5Bgroup%5D=commonName,description",\n            "queryType":"JSONAPI_V1_0",\n            "resultType":"CSV",\n            "status":"COMPLETE",\n            "updatedOn":"2020-04-08T23:29Z",\n            "result":{\n                "recordCount":2,\n                "httpStatus":200,\n                "completedOn":"2020-04-08T23:29Z",\n                "url":"http://localhost:8080/export/ba31ca4e-ed8f-4be0-a0f3-12088fa9263f",\n                "message":null\n            }\n        }\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-graphql",label:"TableExport GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "asyncQuery":{\n            "edges":[\n                {\n                    "node":{\n                        "id":"bb31ca4e-ed8f-4be0-a0f3-12088fb9263g",\n                        "query":"{\\"query\\":\\"{ group { edges { node { name } } } }\\",\\"variables\\":null}",\n                        "queryType":"GRAPHQL_V1_0",\n                        "resultType":"CSV",\n                        "status":"COMPLETE",\n                        "result":{\n                            "completedOn":"2020-04-08T21:25Z",\n                            "url":"http://localhost:8080/export/bb31ca4e-ed8f-4be0-a0f3-12088fb9263g",\n                            "message":null,\n                            "httpStatus":200,\n                            "recordCount":2\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"retrieving-status-and-result",children:"Retrieving status and result"}),"\n",(0,r.jsxs)(n.p,{children:["Long-running queries in the QUEUED or PROCESSING state may not return with the ",(0,r.jsx)(n.code,{children:"result"})," property populated in the\nresponses above. The client can poll the AsyncQuery and TableExport objects asynchronously for status updates."]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"asyncquery-json-api",label:"AsyncQuery JSON-API",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -X GET http://localhost:8080/api/v1/asyncQuery/ba31ca4e-ed8f-4be0-a0f3-12088fa9263d \\\n    -H"Content-Type: application/vnd.api+json" -H"Accept: application/vnd.api+json"\n'})})}),(0,r.jsx)(l.Z,{value:"asyncquery-graphql",label:"AsyncQuery GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -g -X POST -H"Content-Type: application/json" -H"Accept: application/json" \\\n    "http://localhost:8080/graphql/api/v1" \\\n    -d\'{\n           "query" : "{ asyncQuery (ids: \\"bb31ca4e-ed8f-4be0-a0f3-12088fb9263e\\") { edges { node { id query queryType status result {completedOn responseBody contentLength httpStatus recordCount}} } } }"\n      }\'\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-json-api",label:"TableExport JSON-API",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -X GET http://localhost:8080/api/v1/tableExport/ba31ca4e-ed8f-4be0-a0f3-12088fa9263f \\\n    -H"Content-Type: application/vnd.api+json" -H"Accept: application/vnd.api+json"\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-graphql",label:"TableExport GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-curl",children:'curl -g -X POST -H"Content-Type: application/json" -H"Accept: application/json" \\\n    "http://localhost:8080/graphql/api/v1" \\\n    -d\'{\n           "query" : "{ tableExport (ids: \\"bb31ca4e-ed8f-4be0-a0f3-12088fb9263g\\") { edges { node { id query queryType resultType status result {completedOn url message httpStatus recordCount}} } } }"\n      }\'\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"Here are the respective responses:"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"asyncquery-json-api",label:"AsyncQuery JSON-API",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "type":"asyncQuery",\n        "id":"ba31ca4e-ed8f-4be0-a0f3-12088fa9263d",\n        "attributes":{\n            "asyncAfterSeconds":10,\n            "principalName":null,\n            "createdOn":"2020-04-08T21:25Z",\n            "query":"/group?sort=commonName&fields%5Bgroup%5D=commonName,description",\n            "queryType":"JSONAPI_V1_0",\n            "status":"COMPLETE",\n            "updatedOn":"2020-04-08T21:25Z",\n            "result":{\n                "recordCount":2,\n                "httpStatus":200,\n                "completedOn":"2020-04-08T23:29Z",\n                "contentLength":282,\n                "responseBody":"{\\"data\\":[{\\"type\\":\\"group\\",\\"id\\":\\"com.yahoo.elide\\",\\"attributes\\":{\\"commonName\\":\\"Elide\\",\\"description\\":\\"The magical library powering this project\\"}},{\\"type\\":\\"group\\",\\"id\\":\\"com.example.repository\\",\\"attributes\\":{\\"commonName\\":\\"Example Repository\\",\\"description\\":\\"The code for this project\\"}}]}"\n            }\n        }\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"asyncquery-graphql",label:"AsyncQuery GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "asyncQuery":{\n            "edges":[\n                {\n                    "node":{\n                        "id":"bb31ca4e-ed8f-4be0-a0f3-12088fb9263e",\n                        "query":"{\\"query\\":\\"{ group { edges { node { name } } } }\\",\\"variables\\":null}",\n                        "queryType":"GRAPHQL_V1_0",\n                        "status":"COMPLETE",\n                        "result":{\n                            "completedOn":"2020-04-08T21:25Z",\n                            "responseBody":"{\\"data\\":{\\"group\\":{\\"edges\\":[{\\"node\\":{\\"name\\":\\"com.example.repository\\"}},{\\"node\\":{\\"name\\":\\"com.yahoo.elide\\"}},{\\"node\\":{\\"name\\":\\"elide-demo\\"}}]}}}",\n                            "contentLength":109,\n                            "httpStatus":200,\n                            "recordCount":2\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-json-api",label:"TableExport JSON-API",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "type":"tableExport",\n        "id":"ba31ca4e-ed8f-4be0-a0f3-12088fa9263f",\n        "attributes":{\n            "asyncAfterSeconds":10,\n            "principalName":null,\n            "createdOn":"2020-04-08T21:25Z",\n            "query":"/group?sort=commonName&fields%5Bgroup%5D=commonName,description",\n            "queryType":"JSONAPI_V1_0",\n            "resultType":"CSV",\n            "status":"COMPLETE",\n            "updatedOn":"2020-04-08T21:25Z",\n            "result":{\n                "recordCount":2,\n                "httpStatus":200,\n                "completedOn":"2020-04-08T23:29Z",\n                "url":"http://localhost:8080/export/ba31ca4e-ed8f-4be0-a0f3-12088fa9263f",\n                "message":null\n            }\n        }\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"tableexport-graphql",label:"TableExport GraphQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "asyncQuery":{\n            "edges":[\n                {\n                    "node":{\n                        "id":"bb31ca4e-ed8f-4be0-a0f3-12088fb9263e",\n                        "query":"{\\"query\\":\\"{ group { edges { node { name } } } }\\",\\"variables\\":null}",\n                        "queryType":"GRAPHQL_V1_0",\n                        "resultType":"CSV",\n                        "status":"COMPLETE",\n                        "result":{\n                            "completedOn":"2020-04-08T21:25Z",\n                            "url":"http://localhost:8080/export/bb31ca4e-ed8f-4be0-a0f3-12088fb9263g",\n                            "message":null,\n                            "httpStatus":200,\n                            "recordCount":2\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"downloading-the-tableexport-results",children:"Downloading the TableExport results"}),"\n",(0,r.jsx)(n.p,{children:"The TableExport request will return a URL to download the results as shown in the example response below."}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"table-export-result",label:"TableExport Result",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "result":{\n        "completedOn":"2020-04-08T21:25Z",\n        "url":"http://localhost:8080/export/bb31ca4e-ed8f-4be0-a0f3-12088fb9263g",\n        "message":null,\n        "httpStatus":200,\n        "recordCount":2\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"json",label:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "commonName":"Elide",\n        "description":"The magical library powering this project"\n    },\n    {\n        "commonName":"Example Repository",\n        "description":"The code for this project"\n    }\n]\n'})})}),(0,r.jsx)(l.Z,{value:"csv",label:"CSV",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csv",children:'"commonName", "description"\n"Elide", "The magical library powering this project"\n"Example Repository", "The code for this project"\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"overriding-the-asyncapidao",children:"Overriding the AsyncApiDao"}),"\n",(0,r.jsxs)(n.p,{children:["The Async API interacts with the persistence layer through an abstraction - the AsyncApiDao, for status updates, query\ncleanup, etc. This can be customized by providing our own implementation. Elide provides a default implementation of\n",(0,r.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-async/src/main/java/com/yahoo/elide/async/service/dao/DefaultAsyncApiDao.java",children:"AsyncApiDao"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"overriding-the-resultstorageengine",children:"Overriding the ResultStorageEngine"}),"\n",(0,r.jsxs)(n.p,{children:["Table exports leverage a reactive abstraction (ResultStorageEngine) for streaming results to and from a persistence\nbackend. This can be customized by providing our own implementation. Elide provides default implementation of\n",(0,r.jsx)(n.a,{href:"https://github.com/yahoo/elide/blob/master/elide-async/src/main/java/com/yahoo/elide/async/service/storageengine/FileResultStorageEngine.java",children:"ResultStorageEngine"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var r=t(6010);const s={tabItem:"tabItem_Ymn6"};var a=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(7294),s=t(6010),a=t(2466),l=t(6550),i=t(469),o=t(1980),d=t(7392),c=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=x({queryString:t,groupId:s}),[y,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=d??y;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(d(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=y(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(f,{...e,...n})]})}function T(e){const n=(0,j.Z)();return(0,m.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(7294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);