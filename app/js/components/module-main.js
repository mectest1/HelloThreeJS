define(['angular', 'jquery', './create-scene'], function(angular, jquery, createScene){
	'use strict';
	
	return angular.module('threeJsApp', [])
	.constant('config', {
		canvasWrapperId: '#mainCanvas'		
	}).run(['config', function(config){
		let canvasWrapper = jquery(config.canvasWrapperId);
		createScene.init({canvasWrapper: canvasWrapper});
	}]).controller('defaultCtrl', ['$scope', function($scope){
					
	}]);
});