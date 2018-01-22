(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('UserlistController', userlistController);

  /** @ngInject */
  function userlistController($location, userlistService) {
    var vm = this;
	
	vm.existResults = false;
		
	vm.getUsers = function(){
		
		console.log('[userlistController] obteniendo usuarios');
		
		userlistService.obtainListUsers().then(function(response){
		  vm.existResults = true;
		  vm.userListResult =  response[0].data;
		});
		
	}
	
	vm.getUsers();
	
	vm.onAddClicked = function(){
		$location.path('/users/add');
	}
	
	vm.onEditClicked = function(userId){
		$location.path('/users/edit/' + userId);
	}
  }
  
})();

