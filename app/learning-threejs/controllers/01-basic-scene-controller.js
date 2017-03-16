define(['angular', 'THREE', 'jquery'], function(angular, THREE, jquery){
	'use strict';
	
	const {
		Scene,
		PerspectiveCamera,
		PlaneGeometry,
		BoxGeometry,
		MeshLambertMaterial,
		Mesh,
		AmbientLight,
		SpotLight,
		WebGLRenderer, 
		Fog,
		FogExp2
	} = THREE;
	
	let fn = function($scope, StageCreateService, $window){
		const {
			scene,
			camera,
			renderer
		} = StageCreateService.createNewScene();
		$scope.scene = scene;
		
		//
		let planeGeometry = new PlaneGeometry(60, 40, 1, 1);
		let planeMaterial = new MeshLambertMaterial({
			color: 0xffffff
		});
		let plane = new Mesh(planeGeometry, planeMaterial);
		StageCreateService.transformPlane(plane, {
			rotation: {
				x: -0.5 * Math.PI
			},
			position: {
				x: 5
			}
		});
		//
		let ambientLight = new AmbientLight(0x0c0c0c);
		let spotLight = new SpotLight(0x99EE00);
		spotLight.position.set(-40, 60, -10);
		//
		[plane, ambientLight, spotLight].forEach(obj => {
			if(obj === plane){
				obj.receiveShadow = true;
			}else if(obj === spotLight){
				obj.castShadow = true;
			}
			scene.add(obj);
		});
		//renderer.shadowMapEnabled = true;
		renderer.shadowMap.enabled = true;
		StageCreateService.updateCanvasOnResize();
		renderScene();
		
		function renderScene(){
			if(shouldRotateCubes){
				scene.traverse(obj => {
					let amount = Math.random();
					if(obj instanceof Mesh && obj !== plane){
						obj.rotation.x += 0.05 * amount
						obj.rotation.y += 0.05 * amount;
						obj.rotation.z += 0.05 * amount;
					}
				})
				
			}
			
			
			renderer.render(scene, camera);
			
			$window.requestAnimationFrame(renderScene);
		}
		
		
		//
		var shouldRotateCubes = false;
		const fog = new Fog(0xffffff, 0.015, 100);
		const fog2 = new FogExp2(0xffffff, 0.01);
		const overrideMaterial = new MeshLambertMaterial({
			color: 0xffffff
		});
		const numItem = {
			label: 'Number of objects in scene',
			value: scene.children.length
		};
		$scope.dispItem = [
			numItem, 
//			{
//				label: 'Fog',
//				value: scene.fog ? 'On' : 'Off'
//			}
		];
		$scope.actions = [{
			label: 'Add Cube',
			onclick: () => {
				let cubeSize = Math.ceil((Math.random() * 3));
				let cubeGeometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
				let cubeMaterial = new MeshLambertMaterial({
					color: Math.random() * 0xffffff
				});
				let cube = new Mesh(cubeGeometry, cubeMaterial);
				cube.castShadow = true;
				cube.name = 'cube-' + scene.children.length;
				cube.position.x = -30 + Math.round(Math.random() * planeGeometry.parameters.width);
				cube.position.y = Math.round(Math.random() * 5);
				cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));
				//
				scene.add(cube);
				numItem.value = scene.children.length;
			}
		}, {
			label: 'Remove Cube',
			onclick: () => {
				let allChildren = scene.children;
				let lastObject = allChildren[allChildren.length - 1];
				if(lastObject instanceof Mesh && lastObject !== plane){
					scene.remove(lastObject);
					numItem.value = scene.children.length;
				}
			}
		}, {
			label: 'Output Objects (to Console)',
			onclick: () => {
				console.log(scene.children);
			}
		}, {
			label: 'Toggle Cubes Rotation',
			onclick: () => {
				shouldRotateCubes = !shouldRotateCubes;
			}
		}, {
			label: 'Toggle Fog', 
			onclick: () => {
				if(scene.fog){
					scene.fog = null;
				}else{
					scene.fog = fog;
				}
			}
		}, {
			label: 'Toggle Override Material', 
			onclick: () => {
				if(scene.overrideMaterial){
					scene.overrideMaterial = null;
				}else{
					scene.overrideMaterial = overrideMaterial;
				}
			}
		}];
	};
	fn.$inject = ['$scope', 'StageCreateService', '$window'];
	
	return fn;
});