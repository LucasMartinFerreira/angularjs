(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('UserlistController', ['$scope', UserlistController]);

  /** @ngInject */
  function UserlistController($scope, $window) {
    var vm = this;
	
	$scope.buttonvisible = true;
	
	this.getUsers = function(){
		fetch('https://jsonplaceholder.typicode.com/users')
	  .then(status)
	  .then(function(response){
		  return response.json()
	  })
	  .then(function(data) {
		$scope.existResults = true;
		$scope.userListResult = data;
	  })
	  .catch(function(error) {
		console.log('Fetch Error :-S', error);
	  });
	}
	
	this.getUsers();
	
	
	this.onAddClicked = function(){
		window.location.href = '/#/users/add';
	}
  }
  
  function status(response) {
	  if (response.status >= 200 && response.status < 300) {
		return response
	  } else {
		return Promise.reject(new Error(response.statusText))
	  }
	}

})();

