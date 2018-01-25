angular
  .module('angularjs')
  .service('serviceGetterAndSetterUsers', function () {
    'use strict';

    var listUsers;

    return {

      set: function (list) {
       listUsers = list;
      },

      get: function () {
        return listUsers
      }

    }
  });
