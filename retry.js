var Promise = require('bluebird');
var retry = require('bluebird-retry');

var count = 0;

function myfunc() {
	console.log('myfunc called ' + (++count) + ' times');
	
	if (count < 7) {
		return Promise.reject(new Error('fail the first two times'));
	} else {
		return Promise.resolve('succeed the third time');
	}
}

retry(myfunc, {interval: 500})
.then(function(result) {
	console.log(result);
}).catch((err) => {
	console.error('max_retries catched: ', err);
});