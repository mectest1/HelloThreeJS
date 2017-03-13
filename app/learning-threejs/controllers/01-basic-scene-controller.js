define(['angular', 'THREE', 'jquery'], function(angular, THREE, jquery){
	'use strict';
	
	const {
		Scene,
		PerspectiveCamera,
		PlaneGeometry,
		MeshLambertMaterial,
		Mesh,
		AmbientLight,
		SpotLight,
		WebGLRenderer
	} = THREE;
	
	let fn = function(StageCreateService, $window){
		const {
			scene,
			camera,
			renderer
		} = StageCreateService.createNewScene();
	};
	fn.$inject = ['StageCreateService', '$window'];
	
	return fn;
});