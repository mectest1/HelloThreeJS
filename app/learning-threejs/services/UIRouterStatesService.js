define(['angular', '../config/states-config'], function(angular, states){
	'use strict';
	
	let fn = function(){
		
		function getStatesNameList(){
			let retval = states.map(state => state.name);
			return angular.copy(retval);
		};
		
		return {
//			getStatesNameList: getStatesNameList
			getStatesNameList
		};
	};
	fn.$inject = [];
	
	return fn;
});