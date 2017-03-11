define([
	'./config/states-config',
	'text!../data/config/app-config.json',
	'./services/StageCreateService',
	
	'./services/UIRouterStatesService',
	'ui-router'
], function(statesConfig, appConfigJson, StageCreateService, UIRouterStateService){
	const appConfig = JSON.parse(appConfigJson);
	let stateRegister = function($stateProvider){
		statesConfig.forEach(state => {
			$stateProvider.state(state);
		});
	};
	stateRegister.$inject = ['$stateProvider'];
	
	const homeState = statesConfig[0];
	
	return angular.module('learning-threejs', ['ui.router', appConfig.commonModuleName])
			.config(stateRegister)
			.factory('StageCreateService', StageCreateService)
			.factory('UIRouterStateService', UIRouterStateService)
			.run(['$state', function($state){
				//$state.go(homeState);
		}]);
;
});