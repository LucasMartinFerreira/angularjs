(function() {
  'use strict';

  angular.module('angularjs')
    .factory('postService', function(HttpSrv, URL, headersService, $q) {

      /**
       * Prepara
       * @returns {*}
       */
      function getPosts(){
        var configuration = headersService.headerGetListPosts();
        return HttpSrv.get(configuration);
      }


      /**
       * Retorna todos los Posts
       *
       * @returns {Function}
       */
      var getAllPosts = function() {

        var deferred = $q.defer();

        var promises = [getPosts()];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);
        }, function(msg) {
          deferred.reject(msg);
        });

        return deferred.promise;

      };



      var getCommentsPosts = function(idPost){
        var configuration = headersService.headerGetCommentsListPosts(idPost);
        return HttpSrv.get(configuration);
      }

      /**
       * Retorna todos los  comentarios de un Post
       *
       * @returns {Function}
       */
      var getCommentsIdPosts = function(idPost) {

        var deferred = $q.defer();

        var promises = [getCommentsPosts(idPost)];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);
        }, function(msg) {
          deferred.reject(msg);
        });

        return deferred.promise;

      };

      var getInfoPost = function(idPost){
        var configuration = headersService.headerGetInfoPost(idPost);
        return HttpSrv.get(configuration);
      }

      /**
       * Retorna la información de un post a través de su id
       *
       * @returns {Function}
       */
      var getEditPosts = function(idPost) {

        var deferred = $q.defer();

        var promises = [getInfoPost(idPost)];

        $q.all(promises).then(function(values) {

          deferred.resolve(values);
        }, function(msg) {
          deferred.reject(msg);
        });

        return deferred.promise;

      };

      /**
       * Return functions
       */
      return {
        getAllPosts : getAllPosts,
        getCommentsIdPosts : getCommentsIdPosts,
        getEditPosts : getEditPosts
      }
    });
})();
