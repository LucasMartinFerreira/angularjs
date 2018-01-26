(function() {
  'use strict';

  angular.module('angularjs')
    .factory('usersService', function($http, DOMAIN, headersService, $q,HttpSrv) {


      function addUserMethod(userJson){

        var configuration = headersService.headerAddUser(userJson);
         return HttpSrv.post(configuration);
      };


      function updateUserMethod(userJson, userId){
        var configuration = headersService.headerUpdateUser(userJson, userId);
         return HttpSrv.put(configuration);
      }


      function findUserByIdMethod(userId){
        var configuration = headersService.headerUser(userId);
         return HttpSrv.get(configuration);
      }

      /**
      * Función que crea un usuario a partir de los datos de entrada.
      * @param información del usuario.
      **/
      function addUser(dataUser) {

        console.log('[usersService] Inicio función addUser.');

        var deferred = $q.defer();

        var promises = [addUserMethod(getFieldData(dataUser))];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);

        }, function(msg) {
          deferred.reject(msg);
        });

        console.log('[usersService] Fin función addUser.');

        return deferred.promise;

      };

      
      /**
      * Función que actualiza un usuario a partir de los datos de entrada.
      * @param información del usuario.
      **/
      function updateUser(dataUser) {

        console.log('[usersService] Inicio función updateUser.');

        var deferred = $q.defer();

        var promises =  [updateUserMethod(getFieldData(dataUser), dataUser.id)];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);

        }, function(msg) {
          deferred.reject(msg);
        });



        console.log('[usersService] Fin función updateUser.');

        return deferred.promise;

      };


      /**
      * Función que obtiene la información de un usuario por su id
      * @param identificador del usuario
      **/
      function findUserById(userId) {

        console.log('[usersService] Inicio función findUserById.');

        
        var deferred = $q.defer();

        var promises =  [findUserByIdMethod(userId)];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);

        }, function(msg) {
          deferred.reject(msg);
        });


        console.log('[usersService] Fin función findUserById.');

         return deferred.promise;

      };



    /**
    * Validamos que todos los campos esten informados antes de realizar la petición.
    * @return boolean
    **/
    function validateUserFields(data){

      console.log('Validando campos...');

      var valid = true;

      if(undefined===data.name || undefined===data.username || undefined==data.email || undefined===data.phone){
        valid = false
      }

      console.log('Campos validados. Son correctos? ', valid);

      return valid;
    };



    //Retorno del servicio.
    return {
        addUser : addUser,
        validateUserFields:validateUserFields,
        updateUser:updateUser,
        findUserById:findUserById
      }


    });

})();


/**************
 
 FUNCIONES PRIVADAS

**************/


 /**
* Función que obtiene los datos del usuario informados en el formulario
* @param modelo del usuario.
**/
function getFieldData(userModel){


  return JSON.stringify(
        {
          name: userModel.name,
          username: userModel.username,
          email: userModel.email,
          phone: userModel.phone
        }
      );
};