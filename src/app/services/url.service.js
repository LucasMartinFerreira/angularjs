(function() {
  'use strict';
  angular
    .module('angularjs')
    .value('URL',{
      'getListPosts' : '/posts',
      'addUser' : '/users/',
      'updateUser' : '/users/',
	  'getListUsers' : '/users'
    })
})();
