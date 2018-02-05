(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('PostsController', PostsController);

  /** @ngInject */
  function PostsController(postService,ModalsService, $filter, $state, $stateParams, serviceGetterAndSetterPost,headersService,HttpSrv,toastr) {
    var vm = this;
    vm.newListPost =[];

    /** Objecto de elementos por los cuales se va a realizar al búsqueda **/
    vm.fields = {
      title: ''
    };

    vm.search = function(filter){
        vm.filter = filter;
    };

    vm.addNewPost = function(post){
      console.log('Añadimos nuevo post', post)
    }

    var objectPost = $stateParams.objectPost;

    /** Esta variable nos dice si venimos de editar o eleminar **/
    var action = $stateParams.action;

    /**
     * Función para crear un array auxiliar con los elementos que se editan
     */

    var createArrayForEditListPost = function(){
      var listEdit = serviceGetterAndSetterPost.getListPost()
      if(listEdit === null || listEdit === "" || angular.isUndefined(listEdit)) {
        postService.getAllPosts().then(function (response) {
          vm.listPosts = response[0].data;
          angular.forEach(vm.listPosts, function (post) {
            if (post.id === objectPost.id) {
              vm.newListPost.push(objectPost)
            } else {
              vm.newListPost.push(post)
            }
          });
          serviceGetterAndSetterPost.setListPost(vm.newListPost);
          vm.listPosts = vm.newListPost;
        });
      }else{
        angular.forEach(listEdit, function (post) {
          if (post.id === objectPost.id) {
            vm.newListPost.push(objectPost)
          } else {
            vm.newListPost.push(post)
          }
        });
        serviceGetterAndSetterPost.setListPost(vm.newListPost);
        vm.listPosts = vm.newListPost;
      }
    };

    /** Función que Elimina y crea un array Aux con los elementos no borrados.**/

    var deleteArrayForListPost = function(){
      var listEdit = serviceGetterAndSetterPost.getListPost();
      if(listEdit === null || listEdit === "" || angular.isUndefined(listEdit)) {
        postService.getAllPosts().then(function (response) {
          vm.listPosts = response[0].data;
          angular.forEach(vm.listPosts, function (post) {
            if (post.id !== objectPost.id) {
              vm.newListPost.push(post)
            }
          });
          serviceGetterAndSetterPost.setListPost(vm.newListPost);
          vm.listPosts = vm.newListPost;
        });
      }else{
        angular.forEach(listEdit, function (post) {
          if (post.id !== objectPost.id) {
            vm.newListPost.push(post)
          }
        });
        serviceGetterAndSetterPost.setListPost(vm.newListPost);
        vm.listPosts = vm.newListPost;
      }
    };


    var addNewPost = function(newPost){

      vm.newListPost.push(newPost);

      postService.getAllPosts().then(function (response) {
        vm.listPosts = response[0].data;
        angular.forEach(vm.listPosts, function (post) {
            vm.newListPost.push(post)
        });



        vm.listPosts = vm.newListPost;
      });
    }


    /**
     * Obtenemos el listado de posts
     */

    if(objectPost === null){
      postService.getAllPosts().then(function(response){
        vm.listPosts =  response[0].data;
      });
    }else{
      console.log('Action', action)
      if(action === 'newPost'){
        addNewPost(objectPost);
      }else if(action ==='edit'){
        createArrayForEditListPost();
      }else{
        deleteArrayForListPost();
      }
    };

    /**
     * Editamos el Post
     * @param idPost
     */
    vm.editPost = function(idPost,post){

      var data ={
        id : idPost
      }
      ModalsService.viewModalEditPost(data, 'editPostController')
    };



    vm.editPostComponent = function(post){
      vm.editDataPost= post;
    };

    /**
     * Borramos el Post
     * @param idPost
       */
    vm.deletePost = function(objectPost){
      var configuration = headersService.headerDeletePost(objectPost);
      HttpSrv._delete(configuration)
        .success(function () {
          $state.transitionTo($state.current, {objectPost: objectPost, action:'delete'}, { reload: true})
          toastr.success('Post Borrado correctamente');
        }).error(function () {
        alert('Error');
      });
    };

    /**
     * Pintamos los comentarios de ese post
     * @param idPost
     */
    vm.viewComments = function(idPost){
      $state.go('commentPost', {idPost: idPost})
    }
  }
})();
