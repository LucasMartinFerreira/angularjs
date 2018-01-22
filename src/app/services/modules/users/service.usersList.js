(function() {
  'use strict';

  angular.module('angularjs')
    .factory('userlistService', function(HttpSrv, URL, headersService, $q) {

		/**
       * Prepara
       * @returns {*}
       */
      function getUsers(){
        var configuration = headersService.headerGetUsers();
        return HttpSrv.get(configuration);
      }
	
      function obtainListUsers() {

        console.log('[userlistService] Inicio función userlistService.');
		
		var deferred = $q.defer();

        var promises = [getUsers()];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);
        }, function(msg) {
          deferred.reject(msg);
        });

        return deferred.promise;

      };

    //Retorno del servicio.
    return {
        obtainListUsers : obtainListUsers
      }


    });

})();

