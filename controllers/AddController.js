var logger = require('../utils/logger.js');
var path = require("path");

function getForm(req,res) {
	res.sendFile(path.join(__dirname,"/../www/view/yourStory.html"));
}

function submitForm() {
	//logger.debug('inside AddController - submitForm');

}

module.exports = {
	getForm: getForm,
	submitForm: submitForm

};