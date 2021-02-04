if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/sw-test/sw.js', {scope: '/sw-test/'})
	.then((reg) => {
		if(reg.installing) {
			console.log('Service worker installing');
		} else if(reg.waiting) {
			console.log('Service worker installed');
		} else if(reg.active) {
			console.log('Service worker active');
		}
		console.log('Registration succeeded. Scope is ' + reg.scope);
	}).catch(function(error) {
		// registration failed
		console.error('Registration failed with ' + error);
	});
} else{
	console.log('serviceWorker is not in navigator');
}

(() => {
	loadImages('sw-test/alaindeloin.jpg')
	.then(res => {
		let img = document.createElement('img');
		img.src= window.URL.createObjectURL(res);
		document.body.appendChild(img);
	})
	.catch(err => {
		console.error(err);
	})
})();
function loadImages(url){
	return new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'blob';

		request.onload = function() {
			if (request.status === 200) {
				resolve(request.response);
			} else {
				reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
			}
		};

		request.onerror = function() {
			reject(Error('There was a network error.'));
		};

		// Send the request
		request.send();
	});
}
