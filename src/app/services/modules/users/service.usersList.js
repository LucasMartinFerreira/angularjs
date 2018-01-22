(function() {
  'use strict';

  angular.module('angularjs')
    .factory('userlistService', function($http, DOMAIN, headersService, $q) {

      function obtainListUsers() {

        console.log('[userlistService] Inicio función userlistService.');

      };

    //Retorno del servicio.
    return {
        obtainListUsers : obtainListUsers
      }


    });

})();

