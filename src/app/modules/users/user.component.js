(function (angular) {
    'use strict';

    angular
        .module('angularjs')
        .component('userInfo', userInfo());

    function userInfo() {

        var component = {
            templateUrl: '/app/modules/users/user.html',
            controller: UserController,
            controllerAs: 'userController'
        };

        return component;
    }

    UserController.$inject = [
        'serviceGetterAndSetterUsers',
        'usersService',
        '$state',
        'toastr',

    ];


    function UserController(serviceGetterAndSetterUsers,usersService,$state,toastr) {

        console.log('[UserController] Inicio controlador:  UserController');

        var vm = this;
        vm.$onInit = onInit;

        function onInit() {

            vm.showAdd = false;
            vm.showUpdate = false;

            //modelo donde almacenamos los datos del formulario.
            vm.user = {};

            var data = serviceGetterAndSetterUsers.getUserToEdit();

            if (undefined === data || "" === data) {
                console.log('Añadir nuevo usuario.');

                vm.showAdd = true;

            } else if (undefined !== data && "" !== data) {
                console.log('Actualizar usuario.');
                vm.showUpdate = true;

                //seteamos el usuario para precargarlo en el modal.
                vm.user = data;

            }


        };

        //Funcion para cerrar el modal.
        vm.closeModal = function () {
            $uibModalInstance.dismiss();
        }

        /**
        * Función que es llamada cuando el usuario pulsa el botón de "añadir"
        **/
        vm.addUser = function () {

            console.log('[UserController] Inicio funcion addUser ');

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

            console.log('[UserController] Fin funcion addUser ');
        };


        /**
   * Función que se llama cuando el usuario pulsa el boton de "actualizar"
   **/
        vm.updateUser = function () {

            console.log('[UserController] Inicio funcion updateUser ');

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

            console.log('[UserController] Fin funcion updateUser ');
        };

        console.log('[UserController] Fin controlador:  UserController');
    }
})(window.angular);