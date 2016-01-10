var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());


//execption handling and 404 routes

app.use(function (req,res,next){
	//handle 404 here
});

app.use(function (err,req,res,next){
	//handle errors here
});

var server = app.listen(port,function(){
	
});