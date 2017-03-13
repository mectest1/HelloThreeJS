define(['angular', 'THREE', 'jquery', 
	'text!../views/control-panel-directive-view.html'
], function(angular, THREE, jquery, 
	directiveView){
	'use strict';
	
	let fn = function(){
		
		return {
			restrict: 'AE',
			template: directiveView,
			scope: {
				
			},
			controller: ['$scope', function($scope){
					
			}]
		};
	};
	fn.$inject = [];
	
	return fn;
	
});