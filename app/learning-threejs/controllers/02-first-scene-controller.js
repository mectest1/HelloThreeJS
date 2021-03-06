define(['angular', 'THREE', 'jquery'], 
	function(angular, THREE, jquery){
	
	const config = {
		canvasId: 'main-canvas'
	};
	
	var fn  = function($scope, StageCreateService){
//		const {Scene, PerspectiveCamera, WebGLRenderer, AxisHelper,
//				PlaneGeometry, MeshBasicMaterial, Mesh,
//				BoxGeometry, SphereGeometry} = THREE;	
//		const CANVAS_WIDTH = window.innerWidth;
//		const CANVAS_HEIGHT = window.innerHeight;
//		const {canvasId} = config;
//		const canvasEle = jquery('#' + canvasId);
//		
//		function createNewStage(){
//			let scene = new Scene();
//			let camera = new PerspectiveCamera(45, CANVAS_WIDTH/CANVAS_HEIGHT, 
//									0.1, 1000);
//			
//			let renderer = new WebGLRenderer();
//			renderer.setClearColor(0xEEEEEE);
//			renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
//			
//			let axes = new AxisHelper(20);
//			scene.add(axes);
//			
//			let planeGeometry = new PlaneGeometry(60, 20, 1, 1);
//			let planeMaterial = new MeshBasicMaterial({
//				color: 0xCCCCCC
//			});
//			let plane = new Mesh(planeGeometry, planeMaterial);
//			
////			plane.rotation = {
////				x: -0.5 * Math.PI
////			};
//			plane.rotation.x = -0.5 * Math.PI;
////			plane.position = {
////				x: 15, y: 0, z: 0
////			};
//			plane.position.x = 15;
//			plane.position.y = 0;
//			plane.position.z = 0;
//			
//			scene.add(plane);
//			
//			let cubeGeometry = new BoxGeometry(4, 4, 4);
//			let cubeMaterial = new MeshBasicMaterial({
//				color: 0xFF0000,
//				wireframe: true
//			});
//			let cube = new Mesh(cubeGeometry, cubeMaterial);
//			
////			cube.position = {
////				x: -4, y: 3, z: 0
////			};
//			cube.position.x = -4;
//			cube.position.y = 3;
//			cube.position.z = 3;
//			
//			scene.add(cube);
//			
//			let sphereGeometry = new SphereGeometry(4, 20, 20);
//			let sphereMaterial = new MeshBasicMaterial({
//				color: 0x7777FF,
//				wireframe: true
//			});
//			let sphere = new Mesh(sphereGeometry, sphereMaterial);
//			
////			sphere.position = {
////				x: 20,
////				y: 4,
////				z: 2
////			};
//			sphere.position.x = 20;
//			sphere.position.y = 4;
//			sphere.position.z = 2;
//			
//			scene.add(sphere);
//			
////			camera.position = {
////				x: -30, y: 40, z: 30
////			};
//			camera.position.x = -30;
//			camera.position.y = 40;
//			camera.position.z = 30;
//			
//			$scope.camera = camera;
//			camera.lookAt(scene.position);
//			
//		
//			canvasEle.append(renderer.domElement);
//			renderer.render(scene, camera);
//			
//			return {
//				scene: scene,
//				camera: camera,
//				renderer: renderer
//			};
//		}
//		
//		createNewStage();
		const {
			scene,
			camera,
			renderer
		} = StageCreateService.createNewStage({
			canvas: {
				width: window.innerWidth,
				height: window.innerHeight,
				id: 'main-canvas'
			}
		});
		renderer.render(scene, camera);
	};
	fn.$inject = ['$scope', 'StageCreateService'];
	
	return fn;
	
});