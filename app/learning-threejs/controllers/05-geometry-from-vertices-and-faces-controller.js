define(['angular', 'THREE', 'jquery'], function(angular, THREE, jquery){
	'use strict';
	
	const {
		Vector3,
		Face3,
		Geometry,
		MeshLambertMaterial,
		Mesh,
		AmbientLight,
		SpotLight
	} = THREE;
	
	let fn = function(StageCreateService, $scope, $window){
		let {
			scene,
			camera,
			renderer
		} = StageCreateService.createNewScene({
			canvas: {
				width: window.innerWidth,
				height: window.innerHeight
			}
		});
		
		
		let vertices = [
			new Vector3(1, 3, 1),
			new Vector3(1, 3, -1),
			new Vector3(1, -1, 1),
			new Vector3(1, -1, -1),
			new Vector3(-1, 3, -1),
			new Vector3(-1, 3, 1),
			new Vector3(-1, -1, -1),
			new Vector3(-1, -1, 1)
		];
		let faces = [
			new Face3(0, 2, 1),
			new Face3(2, 3, 1),
			new Face3(4, 6, 5),
			new Face3(6, 7, 5),
			new Face3(4, 5, 1),
			new Face3(5, 0, 1),
			new Face3(7, 6, 2),
			new Face3(6, 3, 2),
			new Face3(5, 7, 0),
			new Face3(7, 2, 0),
			new Face3(1, 3, 4),
			new Face3(3, 6, 4)
		];
		
		let geom = new Geometry();
		geom.vertices = vertices;
		geom.faces = faces;
		geom.computeFaceNormals();
		
		let geomMaterial = new MeshLambertMaterial({
			color: 0xffff00
		});
		let geomMesh = new Mesh(geom, geomMaterial);
		
		
		
		let ambientLight = new AmbientLight(0x333333);
		let spotLight = new SpotLight(0xEEEEEE);
		spotLight.position.set(-40, 60, -10);
		
		[geomMesh, ambientLight, spotLight].forEach(obj => scene.add(obj));
		renderScene();
		
		function renderScene(){
			
			renderer.render(scene, camera);
			$window.requestAnimationFrame(renderScene);
		}
		
	};
	fn.$inject = ['StageCreateService', '$scope', '$window'];
	
	return fn;
});