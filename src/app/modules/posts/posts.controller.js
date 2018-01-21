(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('PostsController', PostsController);

  /** @ngInject */
  function PostsController(postService) {
    var vm = this;

    /**
     * Obtenemos el listado de posts
     */
    postService.getAllPosts().then(function(response){
      vm.listPosts =  response[0].data;
    });

    /**
     * Editamos el Post
     * @param idPost
     */
    vm.editPost = function(idPost){
      console.log('Editamos el Post Id:', idPost)
    }

    /**
     * Borramos el Post
     * @param idPost
       */
    vm.deletePost = function(idPost){
      console.log('Eliminamos el Post Id', idPost)
    }
  }
})();
