(function() {
  'use strict';

  angular.module('angularjs')
    .factory('userlistService', function(HttpSrv, URL, headersService, $q) {

      function getUsers(){
        var configuration = headersService.headerGetUsers();
        return HttpSrv.get(configuration);
      }
	  
	  function deleteUserServ(userId){
        var configuration = headersService.headerUser(userId);
        return HttpSrv._delete(configuration);
      }
	
      function obtainListUsers() {

        console.log('[userlistService] Inicio función obtainListUsers.');
		
		var deferred = $q.defer();

        var promises = [getUsers()];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);
        }, function(msg) {
          deferred.reject(msg);
        });

        return deferred.promise;

      };
	  
	  
	  function deleteUser(userId){
		  
		console.log('[userlistService] Inicio función deleteUser.');
		  
		 var deferred = $q.defer();

		var promises = [deleteUserServ(userId)];

		$q.all(promises).then(function(values) {
		  deferred.resolve(values);
		}, function(msg) {
		  deferred.reject(msg);
		});

		return deferred.promise;
		  
	  }

    //Retorno del servicio.
    return {
        obtainListUsers : obtainListUsers,
		deleteUser		: deleteUser
      }


    });

})();

