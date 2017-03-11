define(['angular', 'THREE', 'jquery', 'stats'], function(angular, THREE, jquery, Stats){
	'use strict';
	
	let fn = function(StageCreateService){
		const STATUS_ID = 'status-output';
		
		const {
			SpotLight,
			
			PlaneGeometry,
			BoxGeometry,
			SphereGeometry,
			
			MeshLambertMaterial,
			
			Mesh,
			Color
		} = THREE;
		
		const {
			scene,
			camera,
			renderer
		} = StageCreateService.createNewScene({
			canvas: {
				width: window.innerWidth,
				height: window.innerHeight
			}
		});
		
		//
		let planeGeometry = new PlaneGeometry(60, 20, 1, 1);
		let planeMaterial = new MeshLambertMaterial({
			color: 0xffffff
		});
		let plane = new Mesh(planeGeometry, planeMaterial);
		StageCreateService.translatePlane(plane, {
			rotation: {
				x: -0.5 * Math.PI
			},
			position: {
				x: 15
			}
		});
		
		let cubeGeometry = new BoxGeometry(4, 4, 4);
		let cubeMaterial = new MeshLambertMaterial({
			color: 0xff0000
		});
		let cube = new Mesh(cubeGeometry, cubeMaterial);
		StageCreateService.translateCube(cube);
		
		let sphereGeometry = new SphereGeometry(4, 20, 20);
		let sphereMaterial = new MeshLambertMaterial({
			color: 0x7777ff
		});
		let sphere = new Mesh(sphereGeometry, sphereMaterial);
		StageCreateService.translateSphere(sphere);
		
		let spotLight = new SpotLight(0xffffff);
		spotLight.position.set(-40, 60, -10);
		
		[plane, cube, sphere, spotLight].forEach(obj => scene.add(obj));
		[cube, sphere, spotLight].forEach(obj => obj.castShadow = true);
		plane.receiveShadow = true;
		renderer.shadowMapEnabled = true;
		
		let stats = new Stats();
		jquery('#' + STATUS_ID).append(stats.domElement);
		
		
		renderScene();
		
		function renderScene(){
			stats.update();
			rotate(cube, {
				x: 0.02,
				y: 0.02,
				z: 0.02
			});
			
			
			self.requestAnimationFrame(renderScene);
			renderer.render(scene, camera);
		}
		
		
		function rotate(c, amount= {
			x: 0.02,
			y: 0.02,
			z: 0.02
		}){
			let r = c.rotation;
//			['x', 'y', 'z'].forEach(axis => {
			Object.keys(amount).forEach(axis => {
				amount[axis] && (r[axis] += amount[axis]);
			});
		}
		
	};
	fn.$inject=['StageCreateService'];
	
	return fn;
});