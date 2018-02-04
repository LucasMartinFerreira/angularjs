(function() {
    'use strict';
  
    angular
      .module('angularjs')
          .component('userRowComponent', userRow());
  
          function userRow() {
              var component = {
                  templateUrl: '/app/modules/users/userrow.html',
                  controller: UserRowController,
                  bindings: {
                      user: '<',
                      filter: '<'
                  },
                  controllerAs: 'rowcontroller'
              };
              return component;
          }
  
        
      function UserRowController($location, userlistService, serviceGetterAndSetterUsers, ModalsService,$stateParams) {
          console.log("componente user")
          
          var vm = this;
      
          vm.onAddClicked = function(){
              console.log('Userlist: Añadir nuevo User')
              ModalsService.viewModalAddUser();
          }
          
          vm.onEditClicked = function(user){
              
              var copiedUser = $.extend({}, user);
              console.log('Userlist: Editamos el User con Id:', copiedUser.id)
              var data ={
              user : copiedUser
              }
              ModalsService.viewModalEditUser(copiedUser)
              
          }
          
          vm.onDeleteClicked = function(userId){
              console.log('Userlist: Borramos el User con Id:', userId)
              userlistService.deleteUser(userId).then(function(response){
                  console.log("Userlist: usuario borrado del servicio");
                  vm.deleteUserFromTemporalData(userId);
              }).catch(function(err){
                  console.log(err);
      
                  vm.deleteUserFromTemporalData(userId);
      
              });
          }
          
      }
    
  })();
  
  