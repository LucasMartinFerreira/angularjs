(function (angular) {
  'use strict';

  angular
    .module('angularjs')
    .component('filter', filter());

		function filter() {
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


  function FilterController() { }
})(window.angular);

