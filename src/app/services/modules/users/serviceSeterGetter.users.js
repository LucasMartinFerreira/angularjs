angular
  .module('angularjs')
  .service('serviceGetterAndSetterUsers', function () {
    'use strict';

    var listUsers;

    var userToEdit;

    return {

      set: function (list) {
       listUsers = list;
      },

      get: function () {
        return listUsers
      },

      setUserToEdit: function(userData){
        this.userToEdit = userData;
      },

      getUserToEdit : function(){
        return this.userToEdit;
      }

    }
  });
