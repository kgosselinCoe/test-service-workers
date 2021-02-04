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

})();
