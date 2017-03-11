define(['angular', 'THREE', 'jquery', 
	'text!../views/states-list-directive-view.html'
	], 
	function(angular, THREE, jquery, statesListDirectiveView){
	'use strict';

	let fn = function(){
		return {
			template: statesListDirectiveView,
			restrict: 'AE',
			scope: {
				statesList: '='
			},
			controller: ['$scope', function($scope){
					
			}]
		};
	};
	fn.$inject = [];
	
	return fn;

});