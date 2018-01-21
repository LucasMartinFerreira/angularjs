(function() {
  'use strict';

  angular.module('angularjs')
    .factory('usersService', function($http, DOMAIN, headersService, $q) {

      /**
      * Función que crea un usuario a partir de los datos de entrada.
      * @param json con la información del usuario.
      **/
      function addUserRequest(userJson){

        console.log('[usersService] Inicio función addUserRequest.');

        //obtenemos las cabeceras de la aplicación.
        var headers = getHeaders();

        //creamos la configuración para enviar en la petición http.
        var config={
          header: headers,
          method:"POST",
          url: DOMAIN.domain+'/users/',
          data:userJson
        }
     
        //realizamos la petición para crear un usuario.   
        $http(config).success(function(data, status, headers, config) {
              
            console.log('Creación del usuario OK. Status = ', status)

            //si ha sido exitosa la petición, retornamos el json con la información, así, 
            // la podemos añadir al listado de nuestra aplicación.
            return data;

        }).error(function(data, status, headers, config) {
            console.log('Creación del usuario KO. Status = ', status);

            //si se ha producido algún error, retornamos un json vacio.
            return JSON.stringify({});
        }); 

         console.log('[usersService] Fin función addUserRequest.');

      };

      var addUserMethod = function(userJson) {

        console.log('[usersService] Inicio función addUserMethod.');

        var deferred = $q.defer();

        var promises = [addUserRequest(userJson)];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);
        }, function(msg) {
          deferred.reject(msg);
        });

        console.log('[usersService] Fin función addUserMethod.');

        return deferred.promise;

      };


      return {
        addUser : addUserMethod
      }


    });

})();


/**************
 
 FUNCIONES PRIVADAS

**************/


/**
* Función que compone las cabeceras necesarias para añadir usuario.
* @return objeto con las cabeceras.
**/
function getHeaders(){

  var header = 
      {
        'Content-type' : 'application/json; charset=UTF-8'
    };
  
  return header;
};