'use strict';

module.exports = function(message) {

	if (NODE_ENV == 'development') {
		console.log(message);
	}
	console.log("Version: " + VERSION);
	alert(`Welcome ${message}`);
};