var winston = require('winston');
winston.emitErrs=true;

var logger = new winston.Logger({
	transports: [
		new winston.transports.File({
			level:'info',
			filename: './logs/all-logs.log',
			handleException: true,
			json: true,
			maxize: 5242800,
			maxFiles: 5,
			colorize: true
		}),
		new winston.transports.Console({
			level: 'debug',
			handleException: true,
			json: false,
			colorize: true
		})
	],
	exitOnError: false
});

module.exports = logger;
