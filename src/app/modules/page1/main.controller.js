(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

	this.getPosts = function(){
		
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(status)
		  .then(function(response){
			  return response.json()
		  })
		  .then(function(data) {
			console.log(data);
		  })
		  .catch(function(error) {
			console.log('Fetch Error :-S', error);
		  });
		
	}
  }
  
  function status(response) {
	  if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	  } else {
		return Promise.reject(new Error(response.statusText))
	  }
	}

})();
