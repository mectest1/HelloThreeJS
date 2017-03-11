define(['angular', 'jquery',
	//	'./create-scene', 
		'text!../../data/config/app-config.json',
		'../../learning-threejs/app',
		'./module-common',
		//'../services/UIRouterStateService',
		'ui-router'], 
	function(angular, jquery, 
		//createScene, 
		appConfigJson,
		learningThreeJs,
		commonModule
		//UIRouterStateService
			){
	'use strict';
	
//	return angular.module('threeJsApp', ['ui.router'])
	const appConfig = JSON.parse(appConfigJson);
	return angular.module(appConfig.mainAppName, 
		[learningThreeJs.name, commonModule.name, 'ui.router'])
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