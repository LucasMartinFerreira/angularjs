(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('editPostController', EditPostController);

  /** @ngInject */
  function EditPostController(items,$uibModalInstance,postService, $state, toastr, HttpSrv,headersService) {
    var vm = this;
    vm.id= items.id;
    vm.title = '';


    postService.getEditPosts(items.id).then(function(response){
      vm.post =  response[0].data;
      vm.title = vm.post.title;
      vm.body = vm.post.body;
      vm.userId = vm.post.userId;
    });


    /**Guardamos los cambios **/
    vm.savePost = function(){

      var objPost = {
        id : vm.id,
        body : vm.body,
        title :vm.title,
        userId : vm.userId
      };

      var configuration = headersService.headerSaveEditPost(objPost);
      HttpSrv.put(configuration)
        .success(function () {
          $state.transitionTo($state.current, {objectPost: objPost, action: 'edit'}, { reload: true})
          toastr.success('Post editado correctamente');
          $uibModalInstance.dismiss();
        }).error(function () {
        alert('Error');
      });
    };

    /** Cerramos el modal **/
    vm.closeModal = function(){
      $uibModalInstance.dismiss();
    }
  }
})();
