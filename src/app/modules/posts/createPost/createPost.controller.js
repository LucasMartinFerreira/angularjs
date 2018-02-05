

(function() {
  'use strict';

  angular
    .module('commentPost',[])
    .directive('commentPost', function(){
      return{
        templateUrl: 'app/modules/posts/createPost/createPost.html',
        controller: createPostController,
        controllerAs: 'createPost'
      }
    });

    function createPostController(){
      var vm = this;

      vm.showInputs = false;
      vm.showInputCreate = true;
      vm.showInputAddPost = false;

      vm.showForm = function(){
        console.log('Mostramos las cajas para rellenar')
        vm.showInputCreate = false;
        vm.showInputAddPost = true;
      }

    }


})();
