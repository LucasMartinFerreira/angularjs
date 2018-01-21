(function() {
  'use strict';
  angular
    .module('angularjs')
    .value('URL',{
      'getListPosts' : '/posts',
      'addUser' : '/users/add',
      'updateUser' : '/users/update'
    })
})();
