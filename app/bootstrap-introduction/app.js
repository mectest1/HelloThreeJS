define(['angular', 'THREE', 'jquery',
	'./config/states-config',
	'text!../../data/config/app-config.json',
	'./services/UIRouterStatesServices',
	'ui-router'
	], function(angular, THREE, jquery, states, appConfigJson, UIRouterStatesService){
	'use strict';
	
	const appConfig = JSON.parse(appConfigJson);
	let initStates = function($stateProvider){
		states.forEach(state => {
			$stateProvider.state(state);
		});
	};
	initStates.$inject = ['$stateProvider'];
	
	return angular.module('bootstrap-introduction', ['ui.router', appConfig.commonModuleName])
			.factory('UIRouterStatesService', UIRouterStatesService)
			.config(initStates)
			;
	
});