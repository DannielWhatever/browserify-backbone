/*jshint node:true*/

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// start server on the specified port and binding host
app.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP,function() {
  console.log("server starting on " + appEnv.url);
});
