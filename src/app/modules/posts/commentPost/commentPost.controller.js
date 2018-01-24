(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('commentPostController', CommentPostController);

  /** @ngInject */
  function CommentPostController($stateParams, postService,$state) {
    var vm = this;

    var idPost = $stateParams.idPost;
     /**
     * Obtenemos el listado de posts
     */
    postService.getCommentsIdPosts(idPost).then(function(response){
      vm.commentListPosts =  response[0].data;
    });

    /**
     * Volvemos a la lista de Posts
     */
    vm.goListPost = function(){
      $state.go('home')
    };

  }
})();
