(function (angular) {
  'use strict';

  angular
    .module('angularjs')
    .component('filter', filterinit());

		function filterinit() {
			var component = {
			  templateUrl: 'app/components/filter/filter.html',
			  controller: FilterController,
			  bindings: {
				filter: '<',
				onFilter: '&'
			  },
			  controllerAs: 'filterctrl'
			};
			return component;
		  }


  function FilterController() {
	}
})(window.angular);

