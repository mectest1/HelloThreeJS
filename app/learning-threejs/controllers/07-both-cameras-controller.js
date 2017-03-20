define(['angular', 'THREE', 'jquery'], 
	function(angular, THREE, jquery){
	'use strict';
	
	const {
		OrthographicCamera,
		PerspectiveCamera,
		
		BoxGeometry,
		SphereGeometry,
		MeshLambertMaterial,
		Mesh,
		
		SpotLight,
		AmbientLight
	} = THREE;
	
	//
	let fn = function(StageCreateService, $scope, $window){
		let {
			scene,
			camera,
			renderer,
			
			plane,
			cube,
			sphere
		} = StageCreateService.createNewStage();
		[cube, sphere].forEach(obj => scene.remove(obj));
		
		let ambientLight = new AmbientLight(0xffffff);
		let spotLight = new SpotLight(0xffffff);
		[
			ambientLight, 
			spotLight].forEach(obj => scene.add(obj));
		
		function addCube(cubeSize = 1, positionOffset = {
			x: 0,
			y: 0,
			z: 0
		}){
			//let cubeSize = Math.ceil((Math.random() * 3));
			let cubeGeometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
			let cubeMaterial = new MeshLambertMaterial({
				color: Math.random() * 0xffffff
			});
			let cube = new Mesh(cubeGeometry, cubeMaterial);
			cube.castShadow = true;
			cube.name = 'cube-' + scene.children.length;
			cube.position.x = positionOffset.x - plane.geometry.parameters.width / 2 + 15 + cubeSize / 2;
			cube.position.y = positionOffset.y + cubeSize / 2;
			cube.position.z = positionOffset.z - plane.geometry.parameters.height / 2;
			//
			scene.add(cube);
		}
		
		for(let i = 0; i < plane.geometry.parameters.width; i = i + 2){
			for(let j = 0; j < plane.geometry.parameters.height; j = j + 2){
				addCube(1, {
					x: i,
					y: 0,
					z: j
				});
			}
		}
		
		const {
			perspectiveCamera,
			orthographicCamera
		} = getCameras();
		
		let currentCamera = perspectiveCamera;
		let isCameraRotating = false;
		$scope.actions = [
			{
				label: 'Switch Camera',
				onclick: () => {
					if(perspectiveCamera === currentCamera){
						currentCamera = orthographicCamera;
					}else{
						currentCamera = perspectiveCamera;
					}
				}
			},
			{
				label: 'Toggle Camera Rotation',
				onclick: () => {
					if(isCameraRotating){
						isCameraRotating = false;
					}else{
						isCameraRotating = true;
					}
				}
			}
		];
		
//		let rotateSphereGeometry = new SphereGeometry(1, 20, 20);
//		let rotateSphereMaterial = new MeshLambertMaterial({
//			color: 0xff0000
//		});
//		const rotateSphere = new Mesh(rotateSphereGeometry, rotateSphereMaterial);
//		rotateSphere.position.set(20, 0, 0);
//		[rotateSphere].forEach(obj => scene.add(obj));
		
		//
		StageCreateService.updateCanvasOnResize();
		renderScene();
		
		function renderScene(){
			renderer.render(scene, currentCamera);
			
			if(isCameraRotating){
				currentCamera.rotation.z += 0.02;
				//currentCamera.lookAt(scene.position);
			}
			
//			if(2 * Math.PI < rotateSphere.rotation.y){
//				rotateSphere.rotation.y = 0;
//			}
//			rotateSphere.rotation.y += 0.02;
			
			$window.requestAnimationFrame(renderScene);
		}
		
		function getCameras(){
//			let orthographicCamera = new OrthographicCamera($window.innerWidth / -16, $window.innerWidth / 16,
//				$window.innerHeight / 16, $window.innerHeight / -16, -200, 500);
			let orthographicCamera = new OrthographicCamera($window.innerWidth / -32, $window.innerWidth / 32,
				$window.innerHeight / 32, $window.innerHeight / -32, -200, 500);
//			orthographicCamera.position.x = 60;	
//			orthographicCamera.position.y = 10;	
//			orthographicCamera.position.z = 180;	
			orthographicCamera.position.set(-30, 40, 30);
			orthographicCamera.lookAt(scene.position);
			
			let perspectiveCamera = new PerspectiveCamera(45, $window.innerWidth / $window.innerHeight, 0.1, 1000);
//			perspectiveCamera.position.x = 120;
//			perspectiveCamera.position.y = 60;
//			perspectiveCamera.position.z = 180;
			perspectiveCamera.position.set(-30, 40, 30);
			
			perspectiveCamera.lookAt(scene.position);
			
			return {
				orthographicCamera,
				perspectiveCamera
			};
		}
	};
	fn.$inject = ['StageCreateService', '$scope', '$window'];
	return fn;
});