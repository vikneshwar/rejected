var _ = require('underscore');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('./utils/logger.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

_.each(require("./routes"),function(urlObj,urlKey){
	_.each(urlObj,function(def, reqMethod){
		var method = require("./controllers/"+ def.controller)[def.method];
		if (!method) {
            throw new Error(def.method + " is undefined");
        }

        app[reqMethod](urlKey,method)
	});
});
/* Define fallback route */
app.use(function(req, res, next) {//jshint ignore:line
    res.status(404).json({
        error: "Route not found"
    });
});

/* Define error handler */
app.use(function (err, req, res, next) {//jshint ignore:line
    // logger.logFullError(err, req.method + " " + req.url);
    res.status(err.httpStatus || 500).json({
        error: err.message
    });
});

app.listen(9002, function() {
    logger.info('Express server listening on 9002');
});