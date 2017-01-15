'use structi';

require.config({
	paths: {
		'THREE': '../bower_components/three.js/three',
		'text': '../bower_components/text'
	},
	shim: {
		'THREE': {
			exports: 'THREE'
		}
	}
});

require(['./components/create-scene'], function(createScene){
	createScene.init();
});

