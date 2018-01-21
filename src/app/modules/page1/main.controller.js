(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('MainController', ['$scope', MainController]);

  /** @ngInject */
  function MainController($scope, $window) {
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
		$scope.userList = data;
	  })
	  .catch(function(error) {
		console.log('Fetch Error :-S', error);
	  });
	}
	
	this.getUsers();
	
	
	this.onAddClicked = function(){
		window.location.href = '/#/add';
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

