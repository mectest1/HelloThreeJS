define(['angular', 'jquery',
	//	'./create-scene', 
		'text!../../data/config/app-config.json',
		'../../learning-threejs/app',
		'../../bootstrap-introduction/app',
		'./module-common',
		//'../services/UIRouterStateService',
		
		'../../learning-threejs/config/states-config',
		'../../bootstrap-introduction/config/states-config',
		'ui-router'], 
	function(angular, jquery, 
		//createScene, 
		appConfigJson,
		learningThreeJs,
		bootstrapIntroduction,
		commonModule,
		ThreeJSStates,
		BootstrapStates
		//UIRouterStateService
			){
	'use strict';
	
//	return angular.module('threeJsApp', ['ui.router'])
	const appConfig = JSON.parse(appConfigJson);
	
	
	return angular.module(appConfig.mainAppName, 
		[learningThreeJs.name,
		bootstrapIntroduction.name,
		commonModule.name, 'ui.router'])
//	.constant('config', {
//		canvasWrapperId: '#mainCanvas'		
//	}).run(['config', function(config){
//		let canvasWrapper = jquery(config.canvasWrapperId);
//		createScene.init({canvasWrapper: canvasWrapper});
//	}])
//	.factory('UIRouterStateService', UIRouterStateService)
	.controller('defaultCtrl', ['$scope', function($scope){
		//$scope.states = statesService.getAllUIRouterStates();
		let homeStates = [];
		[ThreeJSStates, BootstrapStates].forEach(states => {
//			homeStates.push(states[0].name);
			homeStates.push(states[0]);
		});
		$scope.states = homeStates;
	}])
	;
});