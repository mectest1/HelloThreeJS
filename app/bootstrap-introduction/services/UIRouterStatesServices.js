define(['angular', 'THREE', 'jquery',
	'../config/states-config'
	], function(angular, THREE, jquery, states){
	'use strict';
	
	let fn = function(){
		
		return {
			get statesName(){
				return states.map(s => s.name);
			}
		};
	};
	fn.$inject = [];
	
	return fn;
});