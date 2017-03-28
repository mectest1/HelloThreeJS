define(['angular', 'THREE', 'jquery'], 
function(angular, THREE, jquery){
	'use strict';
	
	const {
		Scene,
		PerspectiveCamera,
		
		AxisHelper,
		CameraHelper,
		WebGLRenderer,
		
		BoxGeometry,
		PlaneGeometry,
		SphereGeometry,
		
		MeshLambertMaterial,
		MeshBasicMaterial,
		
		
		AmbientLight,
		PointLight,
		AreaLight,
		
		
		SpotLight,
		DirectionalLight,
		
		HemisphereLight,
		LensFlare,
		
		Mesh,
		Light,
		Color,
		
//		BasicShadowMap,
//		PCFShadowMap,
//		PCFSoftShadowMap,
		
		ImageUtils,
		
		NoBlending,
		NormalBlending,
		AdditiveBlending,
		SubtractiveBlending,
		MultiplyBLending,
		CustomBlending
	} = THREE;
	
	let fn = function($scope, $window, StageCreateService){
//		let {
//			scene,
//			camera,
//			renderer,
//			
//			plane,
//			cube,
//			sphere
//		} = StageCreateService.createNewStage();
		const CANVAS_ID = 'main-canvas';
		const canvasEle = document.getElementById(CANVAS_ID);
		
		const scene = new Scene();
		const renderer = new WebGLRenderer();
		renderer.setClearColor(0xeeeeee);
		renderer.setSize($window.innerWidth, $window.innerHeight);
		
		let planeGeo = new PlaneGeometry(60, 40, 1, 1);
		let planeMat = new MeshLambertMaterial({
			color: 0xcccccc
		});
		let plane = new Mesh(planeGeo, planeMat);
		plane.rotation.set(-0.5 * Math.PI, 0, 0);
		plane.position.set(15, 0, 0);
		
		let camera = new PerspectiveCamera(45, $window.innerWidth/$window.innerHeight, 0.1, 1000);
		camera.position.set(-30, 40, 30);
		camera.lookAt(scene.position);
		
		let cubeGeometry = new BoxGeometry(4, 4, 4);
		let cubeMaterial = new MeshBasicMaterial({
			color: 0xFF0000,
			wireframe: true
		});
		let cube = new Mesh(cubeGeometry, cubeMaterial);

//			cube.position.x = -4;
//			cube.position.y = 3;
//			cube.position.z = 3;
		cube.position.set(-4, 3, 3);

		scene.add(cube);

		let sphereGeometry = new SphereGeometry(4, 20, 20);
		let sphereMaterial = new MeshBasicMaterial({
			color: 0x7777FF,
			wireframe: true
		});
		let sphere = new Mesh(sphereGeometry, sphereMaterial);
		
		
		//[cube, sphere].forEach(obj => scene.remove(obj));
		//scene.children = scene.children.filter(obj => !(obj instanceof Light));
		cube.material = new MeshLambertMaterial({
			color: 0xff0000
		});
		sphere.material = new MeshLambertMaterial({
			color: 0x00ff00
		});
		plane.material = new MeshLambertMaterial({
			color: 0xcccccc
		});
		plane.receiveShadow = true;
		
		StageCreateService.translateCube(cube);
		StageCreateService.translateSphere(sphere);
		
		let axisHelper = new AxisHelper(20);
		[plane, cube, sphere, axisHelper].forEach(obj => scene.add(obj));
		canvasEle.appendChild(renderer.domElement);
		StageCreateService.updateCanvasOnResize({
			camera, renderer
		});
		
		
		
		const textureFlare = ImageUtils.loadTexture('../../assets/textures/lensflare/lensflare0.png');
		const flareColor = new Color(0xffaacc);
		const lensFlare = new LensFlare(textureFlare, 350, 0, AdditiveBlending, flareColor);
		const config = {
			lights: {
				ambient: null,
				point: null,
				spot: null,
				directinoal: null,
				hemisphere: null,
				area: null,
				lens: null
			},
			castShadow: false,
			lensFlare: false
		};
		//const shadowMaps = [BasicShadowMap, PCFShadowMap, PCFSoftShadowMap];
		$scope.actions = [
			{
				'label': 'Ambient Light',
				onclick: () => {
					if(config.lights.ambient){
						config.lights.ambient = null;
					}else{
						config.lights.ambient = new AmbientLight({
							//color: 0xffffff
							color: 0x333333
						});
					}
				}
			},
			{
				'label': 'Point Light',
				onclick: () => {
					if(config.lights.point){
						config.lights.point = null;
					}else{
						let pointLight = new PointLight(0xccffcc);
						pointLight.position.set(10, 10, 10);
						pointLight.distance = 50;
						pointLight.intensity = 1.5;
						config.lights.point = pointLight;
					}
				}
			},
			{
				'label': 'Spot Light',
				onclick: () => {
					if(config.lights.spot){
						config.lights.spot = null;
					}else{
						let spotLight = new SpotLight(0x999999);
						spotLight.position.set(-40, 60, -10);
						spotLight.shadow.mapSize.set(2048, 2048);
						config.lights.spot = spotLight;
					}
				}
			},
			{
				'label': 'Directional Light',
				onclick: () => {
					if(config.lights.directional){
						config.lights.directional = null;
					}else{
						let directional = new DirectionalLight(0x999999);
						directional.position.set(30, 20, -5);
						config.lights.directional = directional;
					}
				}
			},
			{
				'label': 'Hemisphere Light',
				onclick: () => {
					if(config.lights.hemisphere){
						config.lights.hemisphere = null;
					}else{
						let hemisphere = new HemisphereLight(0x0000ff, 0x00ff00, 0.3);
						config.lights.hemisphere = hemisphere;
					}
					
				}
			},
//			{
//				'label': 'Area Light',
//				onclick: () => {
//					
//				}
//			},
			{
				'label': 'Lens Flare -- not working',
				onclick: () => {
					config.lensFlare = !config.lensFlare;
					if(config.lensFlare){
//						if(config.lights.spot){
//							lensFlare.position.set(config.lights.spot.position);
//						}
						//lensFlare.position.set(0, 10, 0);
						scene.add(lensFlare);
						renderer.alpha = true;
					}else{
						scene.remove(lensFlare);
						renderer.alpha = false;
					}
					
					
				}
			},
//			{
//				label: 'Cycle Render Shadow Map',
//				onclick: () => {
//					let shadowMap = renderer.shadowMap.type;
//					let currentIndex = shadowMaps.indexOf(shadowMap);
//					++currentIndex;
//					if(shadowMaps.length <= currentIndex){
//						currentIndex = 0;
//					}
//					renderer.shadowMap.type = shadowMaps[currentIndex];
//				}
//			},
			{
				label: 'Toggle Shadow',
				onclick: () => {
					config.castShadow = !config.castShadow;
					scene.traverse(obj => {
						if((obj instanceof Light
							&& !(obj instanceof AmbientLight)
							//&& !(obj instanceof AmbientLight)
								) || 
							(obj instanceof Mesh && plane !== obj)){
							obj.castShadow = config.castShadow;
						}
					});
				}
			}
			
		];
		
		function resetLights(){
			scene.children = scene.children.filter(obj => !(obj instanceof Light || obj instanceof CameraHelper));
			let light = null;
			let cameraHelper = null;
			Object.keys(config.lights).forEach(key => {
				light = config.lights[key];
				if(light){
					scene.add(light);
					if(config.castShadow && !(light instanceof AmbientLight)){
						light.castShadow = config.castShadow;
						if(light.shadow){
							scene.add(cameraHelper);
							cameraHelper = new CameraHelper(light.shadow.camera);
						}
					}
					
				}
			});
		}
		
		function renderScene(){
			resetLights();
			
			renderer.render(scene, camera);
			
			
			
			$window.requestAnimationFrame(renderScene);
		}
		renderer.shadowMap.enabled = true;
		renderScene();
	};
	fn.$inject = ['$scope', '$window', 'StageCreateService'];
	
	return fn;
});