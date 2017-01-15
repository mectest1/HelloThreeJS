'use structi';

require.config({
	paths: {
		'THREE': '../bower_components/three.js',
		'text': '../bower_components/text'
	},
	shim: {
		'THREE': {
			exports: 'THREE'
		}
	}
});


