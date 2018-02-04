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

            /**
            * al usar un servicio dummy, no se borran realmente los datos, para que se refleje en la pantalla los eliminamos del listado local
            */
            vm.deleteUserFromTemporalData = function(userId){
                var temporalUserList = serviceGetterAndSetterUsers.get();
                var index = -1;
                for(var i=0; i<temporalUserList.length; i++){
                    var user = temporalUserList[i];
                    if(user.id == userId){
                        index = i;
                        break;
                    }
                }
                if(index >= 0){
                    vm.showRefreshUserListButton = true;
                    temporalUserList.remove(index);
                }
                serviceGetterAndSetterUsers.set(temporalUserList);
                vm.userListResult =  temporalUserList;
            }
          
      }

    
  })();
  
  