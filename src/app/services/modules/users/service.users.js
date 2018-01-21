(function() {
  'use strict';

  angular.module('angularjs')
    .factory('usersService', function($http, DOMAIN, headersService, $q) {

      /**
      * Función que crea un usuario a partir de los datos de entrada.
      * @param información del usuario.
      **/
      function addUser(dataUser) {

        console.log('[usersService] Inicio función addUser.');

        //obtenemos las cabeceras de la aplicación.
        var headers = getHeaders();

        //componemos el json a enviar en la petición.
        var userJson = getFieldData(dataUser);

        //creamos la configuración para enviar en la petición http.
        var config={
          header: headers,
          method:"POST",
          url: DOMAIN.domain+'/users/',
          data:userJson
        }

        var defered = $q.defer();
        var promise = defered.promise;

     
        //realizamos la petición para crear un usuario.   
        $http(config).success(function(data, status) {
              
            console.log('Creación del usuario OK. Status = ', status)

            //si ha sido exitosa la petición, retornamos el json con la información, así, 
            // la podemos añadir al listado de nuestra aplicación.
           defered.resolve(data);

        }).error(function(data, status) {
            console.log('Creación del usuario KO. Status = ', status);

            //si se ha producido algún error, retornamos un json vacio.
            defered.resolve(JSON.stringify({}));
        }); 


        console.log('[usersService] Fin función addUser.');

        return promise;

      };

      
      /**
      * Función que actualiza un usuario a partir de los datos de entrada.
      * @param información del usuario.
      **/
      function updateUser(dataUser) {

        console.log('[usersService] Inicio función updateUser.');

        //obtenemos las cabeceras de la aplicación.
        var headers = getHeaders();

        //componemos el json a enviar en la petición.
        var userJson = getFieldData(dataUser);

        //creamos la configuración para enviar en la petición http.
        var config={
          header: headers,
          method:"PATCH",
          url: DOMAIN.domain+'/users/'+dataUser.id,
          data:userJson
        }

        var defered = $q.defer();
        var promise = defered.promise;

     
        //realizamos la petición para actualizar un usuario.   
        $http(config).success(function(data, status) {
              
            console.log('Actualización del usuario OK. Status = ', status)

            //si ha sido exitosa la petición, retornamos el json con la información, así, 
            // la podemos añadir al listado de nuestra aplicación.
           defered.resolve(data);

        }).error(function(data, status) {
            console.log('Actualización del usuario KO. Status = ', status);

            //si se ha producido algún error, retornamos un json vacio.
            defered.resolve(JSON.stringify({}));
        }); 


        console.log('[usersService] Fin función updateUser.');

        return promise;

      };


      /**
      * Función que obtiene la información de un usuario por su id
      * @param identificador del usuario
      **/
      function findUserById(userId) {

        console.log('[usersService] Inicio función findUserById.');

        //obtenemos las cabeceras de la aplicación.
        var headers = getHeaders();

        //creamos la configuración para enviar en la petición http.
        var config={
          header: headers,
          method:"GET",
          url: DOMAIN.domain+'/users/'+userId
        }

        var defered = $q.defer();
        var promise = defered.promise;

     
        //realizamos la petición
        $http(config).success(function(data, status) {
              
            console.log('Usuario encontrado OK. Status = ', status)

            //si ha sido exitosa la petición, retornamos el json con la información.
           defered.resolve(data);

        }).error(function(data, status) {
            console.log('Usuario encontrado KO. Status = ', status);

            //si se ha producido algún error, retornamos un json vacio.
            defered.resolve(JSON.stringify({}));
        }); 


        console.log('[usersService] Fin función findUserById.');

        return promise;

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