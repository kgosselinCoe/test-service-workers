(() =>{
	if('serviceWorker' in navigator){
		navigator.serviceWorker.register('/sw-test/sw.js', {scope: '/'})
		.then((reg) => {
			console.log('Registration succeeded. Scope is ' + reg.scope);
		}).catch(function(error) {
			// registration failed
			console.error('Registration failed with ' + error);
		});
	} else{
		console.log('serviceWorker is not in navigator');
	}
})();
