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
	
	var viewModalEditUser = function(data){
      $uibModal.open({
        templateUrl: 'app/modules/users/user.html',
        controller: 'UserController',
        controllerAs: 'modal',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          userId: function () {
            return data;
          }
        }
      });
    };
	
	var viewModalAddUser = function(){
      $uibModal.open({
        templateUrl: 'app/modules/users/user.html',
        controller: 'UserController',
        controllerAs: 'modal',
        backdrop: 'static',
        keyboard: false
      });
    };
	
    return {
      viewModalEditUser : viewModalEditUser,
	  viewModalEditPost : viewModalEditPost,
	  viewModalAddUser	: viewModalAddUser
    }
  });
