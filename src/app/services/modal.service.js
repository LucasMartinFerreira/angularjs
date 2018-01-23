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
    return {
      viewModalEditPost : viewModalEditPost
    }
  });
