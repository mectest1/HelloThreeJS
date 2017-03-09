define(['angular', 'THREE', 'jquery'], 
	function(angular, THREE, jquery){
	'use strict';
	
	const {SpotLight, PlaneGeometry,
		MeshLambertMaterial, Mesh,
		BoxGeometry, SphereGeometry, Color} = THREE;
	
	let fn = function($scope, StageCreateService){
		let {
			scene,
			camera,
			renderer,
			plane,
			cube,
			sphere
		} = StageCreateService.createNewStage($scope, {
			canvas: {
				width: window.innerWidth,
				height: window.innerHeight
			}
		});
	
		//
	
//		[plane, cube, sphere].forEach(scene.remove);
		[plane, cube, sphere].forEach(obj => scene.remove(obj));
//		scene.remove(cube);
//		scene.remove(plane);
//		scene.remove(sphere);
		
		//
		let planeGeometry = new PlaneGeometry(60, 20, 1, 1);
		let planeMaterial = new MeshLambertMaterial({
			color: 0xffffff
		});
		let plane2 = new Mesh(planeGeometry, planeMaterial);
		plane2.rotation.x = -0.5 * Math.PI;
		plane2.position.x = 15;
		plane2.position.y = 0;
		plane2.position.z = 0;
		
		
		let cubeGeometry = new BoxGeometry(4, 4, 4);
		let cubeMaterial = new MeshLambertMaterial({
			color: 0xff0000
		});
		let cube2 = new Mesh(cubeGeometry, cubeMaterial);
		cube2.position.x = -4;
		cube2.position.y = 3;
		cube2.position.z = 3;
		
		let sphereGeometry = new SphereGeometry(4, 20, 20);
		let sphereMaterial =  new MeshLambertMaterial({
			color: 0x7777ff
		});
		let sphere2 = new Mesh(sphereGeometry, sphereMaterial);
		sphere2.position.x = 20;
		sphere2.position.y = 4;
		sphere2.position.z = 2;
		
		//[plane2, cube2, sphere2].forEach(scene.add);
		[plane2, cube2, sphere2].forEach(obj => scene.add(obj));
		
			
		//
		let spotLight = new SpotLight(0xffffff);
		spotLight.position.set(-40, 60, -10);
		scene.add(spotLight);
		
		//cast shadows
//		renderer.setClearColor(new Color(0xEEEEEE, 1.0));
//		renderer.setSize(window.innerSize, window.innerHeight);
		renderer.shadowMapEnabled = true;
		plane2.receiveShadow = true;
		[cube2, sphere2, spotLight].forEach(obj => obj.castShadow = true);
		
		
		renderer.render(scene, camera);
	};
	fn.$inject = ['$scope', 'StageCreateService'];
	
	return fn;
});