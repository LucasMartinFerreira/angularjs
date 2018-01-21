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



      /**
       * Return functions
       */
      return {
        getAllPosts : getAllPosts
      }
    });
})();
