function _parse(o){var e=o.length;switch(msg="",props={},e){case 1:msg=o[0];break;case 2:msg=o[0],props=o[1]}var i={};for(var g in props)props.hasOwnProperty(g)&&(i[g]="stats"!=g?JSON.stringify(props[g]):props[g]);return{msg:msg,props:i}}var LoggingUtils={},MAX_BUFFER_SIZE=20,Has_Untracted_Log=!1,MAX_FAILED_BUFFER_SIZE=200,FAILED_LOG_RETRY_INTERVAL=2e4;LoggingUtils.Severity={INFO:"INFO",ERROR:"ERROR",DEBUG:"DEBUG",TRACE:"TRACE",WARN:"WARN",SILENT:"SILENT"};var Severity=LoggingUtils.Severity;LoggingUtils.Constants={APP_NAME:"app_name",TENANT_ID:"tenant_id",API_TOTAL_TIME:"api_total_time",VIEW_TIME:"view_time",REQUEST_TIME:"req_time",METHOD_NAME:"method_name",LINE_NUMBER:"line_num",LOG_LEVEL:"log_level",DATE_TIME:"datetime",USER_ID:"user_id",REQUEST_ID:"request_id",REQUEST_PATH:"req_path",REQUEST_METHOD:"req_method",REQUEST_METHOD_NAME:"req_action",REQUEST_QUERY_PARAMS:"req_query_params",REQUEST_PARAMETERS:"req_params",REQUEST_PATH_PARAMETERS:"req_path_params",REQUEST_REFERER:"req_referer",IS_REQUEST:"is_req",MESSAGE:"msg",REQUEST_IP:"request_ip",LOG_SOURCE:"log_source",ERROR_TRACE:"error_trace",LOG_TYPE:"log_type",EVENT_NAME:"event_name",METRIC_NAME:"metric_name",METRIC_TYPE:"metric_Type",METRIC_VALUE:"metric_value",ASSET_ID:"asset_id",EXTENSION_VERSION:"extension_version",INITIATOR:"initiator",RECORD_ID:"record_id",ENCRYPTED:"encrypted",FAILED_LOG_COUNT:"failed_log_count",USER_EMAIL:"email",SESSION_ID:"session_id",FLOW_ID:"flow_id"},LoggingUtils.VERBOSE=!0,LoggingUtils.clientLogsAssetId,LoggingUtils.userEmailId,LoggingUtils.userId;var _log=console.log;Object.keys(Severity).forEach(function(o){console[o.toLowerCase()]=function(){LoggingUtils.log(Severity[o],arguments)}}),LoggingUtils.log=function(o,arguments){var e=_parse(arguments),i=LoggingUtils.Constants,g=e.props;g[i.FLOW_ID]=LoggingUtils.recordinguuid,g[i.MESSAGE]=e.msg,g[i.LOG_SOURCE]="EXTENSION",g[i.APP_NAME]="EXTENSION",g[i.LOG_TYPE]=o,g[i.DATE_TIME]=getZuluTimeInUTC(),LoggingUtils.userEmailId&&(g[i.USER_EMAIL]=LoggingUtils.userEmailId),LoggingUtils.userId&&(g[i.USER_ID]=LoggingUtils.userId),g[i.EXTENSION_VERSION]=chrome.runtime.getManifest().version,g[i.ASSET_ID]=g[i.ASSET_ID]||LoggingUtils.clientLogsAssetId,o!=LoggingUtils.Severity.DEBUG&&o!=LoggingUtils.Severity.TRACE||(g[i.ERROR_TRACE]=(new Error).stack.replace("Error","Trace")),LoggingUtils.VERBOSE&&_log.call(console,arguments[0],arguments[1]),o!=LoggingUtils.Severity.SILENT&&chrome.storage.sync.get(["wizAuthToken"],function(o){o.wizAuthToken&&o.wizAuthToken.length>0?(pushLogRecord(g),Has_Untracted_Log&&(Has_Untracted_Log=!1,chrome.storage.local.get("hippo_logs",function(o){var e=[];void 0!=o.hippo_logs&&(e=JSON.parse(o.hippo_logs));var i=[];e.forEach(function(o){i.push({Data:"_"+getZuluTimeInUTC+"_\t"+JSON.stringify(o)})}),i.length>0&&pushLogRecordInBatch(i),chrome.storage.local.remove("hippo_logs")}))):LoggingUtils.pushLogToServer([g])})},LoggingUtils.pushLogToServer=function(o){Has_Untracted_Log=!0,chrome.storage.local.get("hippo_logs",function(e){var i=[];void 0!=e.hippo_logs&&(i=JSON.parse(e.hippo_logs)),i=i.concat(o),i.length>=MAX_BUFFER_SIZE&&(i=i.splice(MAX_BUFFER_SIZE)),chrome.storage.local.set({hippo_logs:JSON.stringify(i)})})},LoggingUtils.saveFailedLog=function(o){chrome.storage.local.get("hippo_offline_logs",function(e){var i=[];e.hippo_offline_logs&&e.hippo_offline_logs.length>0&&(i=e.hippo_offline_logs),i.length<=MAX_FAILED_BUFFER_SIZE&&(i.push(o.Record),chrome.storage.local.set({hippo_offline_logs:i},function(){}))})},setInterval(function(){chrome.storage.local.get("hippo_offline_logs",function(o){o.hippo_offline_logs&&o.hippo_offline_logs.length>0&&pushLogRecordInBatch(o.hippo_offline_logs,function(o,e){o||chrome.storage.local.remove("hippo_offline_logs")})})},FAILED_LOG_RETRY_INTERVAL);