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
				statesList: '=statesList'
			},
			controller: ['$scope', function($scope){
				let orgStates = $scope.statesList;
				let stateNames = [];
				orgStates.forEach(state => {
					if(!angular.isString(state)){
						//Normalize the stateList info: only state name is required here.
						stateNames.push(state.name);
					}else{
						stateNames.push(state);
					}
				});
				$scope.stateNames = stateNames;
			}]
		};
	};
	fn.$inject = [];
	
	return fn;

});