function StatusPoller(t,o,r,s,l){this.assetId=t,this.pollDuration=r,this.pollErrorCount=0,this.maxErrorPolls=o,this.successCallback=s,this.errorCallback=l}StatusPoller.prototype.startPollingForStatus=function(t){this.pingId=t,this.pollTimeout=(new Date).getTime()/1e3+this.pollDuration,this.pingForUploadStatus()},StatusPoller.prototype.pingForUploadStatus=function(){if((new Date).getTime()/1e3>this.pollTimeout)return console.log("status poll, pollTimeout"),void APIClient.logData(this.assetId,"statuspoller","poll timeout");if(console.log("statd pinging",this.pingId),void 0!=this.pingId){var t=this;APIClient.statusOf(this.pingId,function(o){console.log("ping status",o),"error"==o.status?t.handleError(o):50==o.status?setTimeout(function(){t.pingForUploadStatus()},3e3):51!=o.status&&52!=o.status||setTimeout(function(){t.pingForUploadStatus()},3e3),("error"==o.status&&t.pollErrorCount>4||54==o.status)&&(APIClient.logData(t.assetId,"statuspoller","error for the operation"+o),t.errorCallback(o)),53==o.status&&t.successCallback(o)},function(o){t.handleError()})}},StatusPoller.prototype.handleError=function(t){var o=this;this.pollErrorCount++,this.pollErrorCount<=this.maxErrorPolls?(setTimeout(function(){o.pingForUploadStatus()},3e3),console.warn("StatusPoller error. retrying in 3 seconds..")):(console.error("StatusPoller discontinued due to error!!!"),APIClient.logData(this.assetId,"statuspoller","poll discontinued due to error"),o.errorCallback(t)),console.silentError("StatusPoller error!!!")};