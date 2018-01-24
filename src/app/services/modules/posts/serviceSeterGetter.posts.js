angular
  .module('angularjs')
  .service('serviceGetterAndSetterPost', function () {
    'use strict';

    var listPost;

    return {

      setListPost: function (list) {
       listPost = list;
      },

      getListPost: function () {
        return listPost
      }

    }
  });
