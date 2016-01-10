var logger = require('../utils/logger.js');

function getForm() {
	logger.debug('inside AddController - getForm');
}

function submitForm() {
	logger.debug('inside AddController - submitForm');

}

module.exports = {
	getForm: getForm,
	submitForm: submitForm

};