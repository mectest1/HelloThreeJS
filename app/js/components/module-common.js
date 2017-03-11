define(['angular', 'THREE', 'jquery', 
	'text!../../data/config/app-config.json',
	'../directives/StatesListDirective'], 
	function(angular, THREE, jquery, appConfigStr, StatesListDirective){
	'use strict';
	
	const appConfig = JSON.parse(appConfigStr);
	const commonModuleName = appConfig.commonModuleName;
	
	return angular.module(commonModuleName, [])
			.directive('statesList', StatesListDirective)
		;
	
});