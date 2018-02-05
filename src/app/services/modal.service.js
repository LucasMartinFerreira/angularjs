angular.module('angularjs')
  .factory('ModalsService', function ($uibModal) {


    var viewModalEditPost = function(data, controller){
      $uibModal.open({
        templateUrl: 'app/modules/posts/editPost/editPost.html',
        controller: controller,
        controllerAs: 'modal',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          items: function () {
            return data;
          }
        }
      });
    };


    //Modal creación de usuario.
    var viewModalCreateUser = function(){

      $uibModal.open({
        template: '<create-user $dismiss="$dismiss(reason)"></create-user>',
        component:'createUser',
        backdrop: 'static',
        keyboard: false
      });
    };

    //Modal actualización de usuario.
    var viewModalUpdateUser = function(){

      $uibModal.open({
        template: '<update-user $dismiss="$dismiss(reason)"></update-user>',
        component:'updateUser',
        backdrop: 'static',
        keyboard: false
      });
    };

    return {
      viewModalEditPost : viewModalEditPost,
      viewModalCreateUser:viewModalCreateUser,
      viewModalUpdateUser:viewModalUpdateUser
    }
  });
