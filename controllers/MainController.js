var logger = require('../utils/logger.js');
var path = require("path");

function getRejectList(req,res) {
	res.sendFile(path.join(__dirname,"/../www/view/index.html"));
}

module.exports = {
	getRejectList: getRejectList
};