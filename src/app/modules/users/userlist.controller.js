(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('UserlistController', userlistController);

  /** @ngInject */
  function userlistController($location, userlistService, ModalsService) {
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
		console.log('Userlist: Añadir nuevo User')
		ModalsService.viewModalAddUser();
	}
	
	vm.onEditClicked = function(userId){
	
	  console.log('Userlist: Editamos el User con Id:', userId)
	  var data ={
		id : userId
	  }
	  ModalsService.viewModalEditUser(data)
		
	}
	
	vm.onDeleteClicked = function(userId){
		console.log('Userlist: Borramos el User con Id:', userId)
		userlistService.deleteUser(userId).then(function(response){
			console.log("Userlist: usuario borrado")
		});
	}
  }
  
})();

