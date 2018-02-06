(function() {
  'use strict';

  angular
    .module('createPost',[])
    .component('createPost', createPost())


    function createPost(){
      var component = {
        templateUrl: 'app/modules/posts/createPost/createPost.html',
        controller: createPostController,
        controllerAs: 'createPost',
        bindings :{
          edit : '<'
        }
      }
      return component;
    };

    createPostController.$inject = [
      'HttpSrv',
      'toastr',
      'headersService',
      '$state'
    ];


   function createPostController(HttpSrv,toastr,headersService,$state){
      var vm = this;


      vm.showInputs = false;
      vm.showInputCreate = true;
      vm.showInputAddPost = false;

      vm.showForm = function(){
        vm.showInputCreate = false;
        vm.showInputAddPost = true;
      };

      vm.addNewPost = function (){
        vm.showInputCreate = true;
        vm.showInputAddPost = false;

        var objPost = {
          body : vm.edit.body,
          title :vm.edit.title,
          userId : 1
        };

        console.log('***', objPost)

        var configuration = headersService.headerCreatePost(objPost);
        HttpSrv.post(configuration)
          .success(function (response) {
            $state.transitionTo($state.current, {objectPost: response, action: 'newPost'}, { reload: true})
            toastr.success('Post Creado correctamente');
          }).error(function () {
          alert('Error');
        });
      }


      vm.editPost = function(){
        //vm.editValueBody = '';
        //vm.editValueTitle = vm.edit.title;
        var objPost = {
          id : vm.edit.id,
          body : vm.edit.body,
          title :vm.edit.title,
          userId : vm.edit.userId
        };

        var configuration = headersService.headerSaveEditPost(objPost);
        HttpSrv.put(configuration)
          .success(function () {
            $state.transitionTo($state.current, {objectPost: objPost, action: 'edit'}, { reload: true})
            toastr.success('Post editado correctamente');
          }).error(function () {
          alert('Error');
        });
      }

    }



})();

//
//(function (angular) {
//  'use strict';
//
//  angular
//    .module('app.core')
//    .component('filter', filter());
//
//  function filter() {
//    var component = {
//      templateUrl: 'app/core/filter/filter.component.html',
//      controller: FilterController,
//      bindings: {
//        filter: '<',
//        options: '<',
//        onOrderBy: '&',
//        onFilter: '&'
//      }
//    };
//    return component;
//  }
//
//  function FilterController() { }
//})(window.angular);
