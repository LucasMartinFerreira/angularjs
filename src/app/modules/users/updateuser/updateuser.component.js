(function (angular) {
    'use strict';

    angular
        .module('angularjs')
        .component('updateUser', updateUser());


    function updateUser() {

        var component = {
            templateUrl: '/app/modules/users/updateuser/updateuser.html',
            controller: UpdateUserController,
            controllerAs: 'updateUserController',
            bindings: {
                $dismiss: '&'
            }
        };

        return component;
    };

    UpdateUserController.$inject = [
        'serviceGetterAndSetterUsers',
        'usersService',
        '$state',
        'toastr'

    ];


    function UpdateUserController(serviceGetterAndSetterUsers, usersService, $state, toastr) {

        var vm = this;

        vm.$onInit = onInit;

        function onInit() {

            //modelo donde almacenamos los datos del formulario.            
            vm.user = {};

            var data = serviceGetterAndSetterUsers.getUserToEdit();

            if (undefined !== data && "" !== data) {
                console.log('Actualizar usuario.');
               
                //seteamos el usuario para precargarlo en el formulario.
                vm.user = data;

            }

        };

        /**
        * Función que se llama cuando el usuario pulsa el boton de "actualizar"
        **/
        vm.updateUser = function () {

            console.log('[UpdateUserController] Inicio funcion updateUser ');

            //realizamos la llamada al servicio.
            usersService.updateUser(vm.user).then(function (response) {

                //respuesta de la api
                var objUser = response[0].data;

                console.log('Respuesta actualización', objUser);

                //enviamos la respuesta.
                $state.transitionTo($state.current, { objectUser: objUser, action: 'edit' }, { reload: true })
                toastr.success('Usuario actualizado correctamente');

                vm.closeModal();

            }).catch(function (err) {
                console.log('Error buscando el usuario por id: ', err);

                $state.transitionTo($state.current, { objectUser: vm.user, action: 'edit' }, { reload: true })

                vm.closeModal();

            });

            console.log('[UpdateUserController] Fin funcion updateUser ');
        };

        //Funcion para cerrar el modal.
        vm.closeModal = function () {
            vm.$dismiss({
                reason: 'close'
            });
        };



    };




})(window.angular);