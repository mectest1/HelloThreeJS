define(['angular', 'jquery',
	//	'./create-scene', 
		'text!../../data/config/app-config.json',
		'../../learning-threejs/app',
		//'../services/UIRouterStateService',
		'ui-router'], 
	function(angular, jquery, 
		//createScene, 
		appConfigJson,
		learningThreeJs
		//UIRouterStateService
			){
	'use strict';
	
//	return angular.module('threeJsApp', ['ui.router'])
	const appConfig = JSON.parse(appConfigJson);
	return angular.module(appConfig.mainAppName, [learningThreeJs.name, 'ui.router'])
//	.constant('config', {
//		canvasWrapperId: '#mainCanvas'		
//	}).run(['config', function(config){
//		let canvasWrapper = jquery(config.canvasWrapperId);
//		createScene.init({canvasWrapper: canvasWrapper});
//	}])
//	.factory('UIRouterStateService', UIRouterStateService)
	.controller('defaultCtrl', ['$scope', function($scope){
		//$scope.states = statesService.getAllUIRouterStates();
	}])
	;
});