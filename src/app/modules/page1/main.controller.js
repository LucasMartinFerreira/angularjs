(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('MainController', ['$scope', MainController]);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;
	
	$scope.buttonvisible = true;
	
	this.getPosts = function(){
		
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(status)
		  .then(function(response){
			  return response.json()
		  })
		  .then(function(data) {
			$scope.userList = data;
			
			$scope.buttonvisible = false;
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

