define(['angular', 'THREE', 'jquery',
	//'../config/states-config',	//nope -- Circular Dependency here;
	//'text!../../data/config/app-config.json'
	], 
	function(angular, THREE, jquery){
	'use strict';
	
	let fn = function($scope, UIRouterStateService){
		//let statesNameList = statesConfig.map(state => state.name);
		let [homeStateName, ...statesNameList] = UIRouterStateService.getStatesNameList();
		
		$scope.states = statesNameList;
	};
	fn.$inject = ['$scope', 'UIRouterStateService'];
	
	return fn;
});