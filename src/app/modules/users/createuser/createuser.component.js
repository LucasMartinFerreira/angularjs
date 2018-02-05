(function (angular) {
    'use strict';

    angular
        .module('angularjs')
        .component('createUser', createUser());


        function createUser(){

            var component = {
                templateUrl: '/app/modules/users/createuser/createuser.html',
                controller: CreateUserController,
                controllerAs: 'createUserController',
                bindings: {
                  $dismiss: '&'
                }
            };
    
            return component;
        };

        CreateUserController.$inject = [
            'serviceGetterAndSetterUsers',
            'usersService',
            '$state',
            'toastr'    
    
        ];


        function CreateUserController(serviceGetterAndSetterUsers,usersService,$state,toastr){

            var vm = this;

            vm.$onInit = onInit;

            function onInit() {
    
                //modelo donde almacenamos los datos del formulario.            
                vm.user = {};

            };

            /**
            * Función que es llamada cuando el usuario pulsa el botón de "añadir"
            **/
            vm.addUser = function () {

                console.log('[CreateUserController] Inicio funcion addUser ');

                //realizamos la llamada al servicio.
                usersService.addUser(vm.user).then(function (response) {

                    //respondemos con el resultado de la peticion y se lo enviamos al listado.
                    var objUser = response[0].data;
                    console.log('Respuesta creación de usuario: ', objUser);

                    //enviamos el resultado al listado.
                    $state.transitionTo($state.current, { objectUser: objUser, action: 'add' }, { reload: true })
                    toastr.success('Usuario creado correctamente');

                    //cerramos el modal.
                    vm.closeModal();

                }).catch(function (err) {

                    console.log('Error buscando el usuario por id: ', response[0].err);

                    vm.closeModal();

                });

                console.log('[CreateUserController] Fin funcion addUser ');
            };

            //Funcion para cerrar el modal.
            vm.closeModal = function () {
                vm.$dismiss({
                    reason: 'close'
                });
            };



        };


        

})(window.angular);