'use structi';

require.config({
	paths: {
		'THREE': '../bower_components/three.js/three',
		'text': '../bower_components/text',
		'jquery': '../bower_components/jquery/dist/jquery',
		'angular': '../bower_components/angular/angular'
	},
	shim: {
		'THREE': {
			exports: 'THREE'
		},
		'angular': {
			exports: 'angular'
		}
	}
});

//require(['./components/create-scene'], function(createScene){
require(['angular', './components/module-main'], function(angular, mainApp){
	angular.bootstrap(document, [mainApp.name]);
});

