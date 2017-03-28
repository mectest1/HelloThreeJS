define(['angular', 'THREE', 'jquery'], function(angular, THREE, jquery){
	'use strict';
	
	let fn = function(UIRouterStatesService, $scope){
		let [homeState, ...states] = UIRouterStatesService.statesName;
		
		$scope.states = states;
	};
	fn.$inject = ['UIRouterStatesService', '$scope'];
	
	return fn;
});