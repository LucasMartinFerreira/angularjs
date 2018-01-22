(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('editPostController', EditPostController);

  /** @ngInject */
  function EditPostController(items,$uibModalInstance) {
    var vm = this;
    console.log('Controlador del modal editar')
    console.log('El id del post a trabajar es: ', items.id)
    vm.id= items.id;


    vm.closeModal = function(){
      $uibModalInstance.dismiss();
    }
  }
})();
