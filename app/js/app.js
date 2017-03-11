'use structi';

require.config({
	paths: {
		'THREE': '../bower_components/three.js/three',
		'text': '../bower_components/text/text',
		'jquery': '../bower_components/jquery/dist/jquery',
		'angular': '../bower_components/angular/angular',
		'ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
		'stats': '../bower_components/threejs-stats/Stats'
	},
	shim: {
		'THREE': {
			exports: 'THREE'
		},
		'angular': {
			exports: 'angular'
		},
		'ui-router': {
			deps: ['angular']
		},
		'stats': {
			exports: 'Stats'
		}
	}
});

//require(['./components/create-scene'], function(createScene){
require(['angular', './components/module-main'], function(angular, mainApp){
	angular.bootstrap(document, [mainApp.name]);
});

