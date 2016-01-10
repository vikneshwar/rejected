'use stricit';

module.exports = {
	'/': {
		get: {
			controller: 'MainController',
			method: 'getRejectList'
		}
	},
	'/add' : {
		get: {
			controller: 'AddController',
			method: 'getForm'
		},
		post: {
			controller: 'AddController',
			method: 'submitForm'
		}
	}
}
