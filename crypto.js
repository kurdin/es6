var crypto = require('crypto');

function generateToken() {
	// return crypto.randomBytes(10).toString('base64');
	return crypto.randomBytes(10).toString('hex');
}

var x = 0;

while(x++ < 10) {
	console.error(generateToken());
}