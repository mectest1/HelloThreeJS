define([
	'../../learning-threejs/config/states-config'
], function(learningThreeStates){
	'use strict';
	
	let fn = function(){
		function getAllUIRouterStates(){
			let retval = [];
			
			[learningThreeStates].forEach(statesConfig => {
				let statesNameList = statesConfig.map(s => s.name);
				retval = retval.concat(statesNameList);
			});
			
			
			return retval;
		}
		
		return {
			getAllUIRouterStates: getAllUIRouterStates
		};
		
	};
	
	fn.$inject = [];
	return fn;
});