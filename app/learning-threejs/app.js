define([
	'./config/states-config',
	'text!../data/config/app-config.json',
	'ui-router'
], function(statesConfig, appConfigJson){
	const appConfig = JSON.parse(appConfigJson);
	let stateRegister = function($stateProvider){
		statesConfig.forEach(state => {
			$stateProvider.state(state);
		});
	};
	stateRegister.$inject = ['$stateProvider'];
	
	return angular.module('learning-threejs', ['ui.router'])
			.config(stateRegister);
});