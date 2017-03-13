define(['angular', 'THREE', 'jquery'], 
	function(angular, THREE, jquery){
	'use strict';
	
	const {Scene, PerspectiveCamera, WebGLRenderer, AxisHelper,
			PlaneGeometry, MeshBasicMaterial, Mesh,
			BoxGeometry, SphereGeometry} = THREE;
	const DEFAULT_CANVAS_ID = 'main-canvas';
	
	let fn = function($window){
		
		
		let camera;
		let renderer;
		
		function createNewStage($scope, config = {
			canvas: {
				width: window.innerHeight,
				height: window.innerHeight,
				id: DEFAULT_CANVAS_ID
			}
		}){
			
//			const CANVAS_WIDTH = window.innerWidth;
//			const CANVAS_HEIGHT = window.innerHeight;
//			const {canvasId} = config;
			
			const {
				width: CANVAS_WIDTH = window.innerWidth,
				height: CANVAS_HEIGHT = window.innerHeight,
				id: canvasId = DEFAULT_CANVAS_ID
			} = config.canvas;
			const canvasEle = jquery('#' + canvasId);
			
			let scene = new Scene();
			camera = new PerspectiveCamera(45, CANVAS_WIDTH/CANVAS_HEIGHT, 
									0.1, 1000);
			
			renderer = new WebGLRenderer();
			renderer.setClearColor(0xEEEEEE);
			renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
			
			let axes = new AxisHelper(20);
			scene.add(axes);
			
			let planeGeometry = new PlaneGeometry(60, 20, 1, 1);
			let planeMaterial = new MeshBasicMaterial({
				color: 0xCCCCCC
			});
			let plane = new Mesh(planeGeometry, planeMaterial);
			
			plane.rotation.x = -0.5 * Math.PI;
			plane.position.x = 15;
			plane.position.y = 0;
			plane.position.z = 0;
			
			scene.add(plane);
			
			let cubeGeometry = new BoxGeometry(4, 4, 4);
			let cubeMaterial = new MeshBasicMaterial({
				color: 0xFF0000,
				wireframe: true
			});
			let cube = new Mesh(cubeGeometry, cubeMaterial);
			
			cube.position.x = -4;
			cube.position.y = 3;
			cube.position.z = 3;
			
			scene.add(cube);
			
			let sphereGeometry = new SphereGeometry(4, 20, 20);
			let sphereMaterial = new MeshBasicMaterial({
				color: 0x7777FF,
				wireframe: true
			});
			let sphere = new Mesh(sphereGeometry, sphereMaterial);
			
			sphere.position.x = 20;
			sphere.position.y = 4;
			sphere.position.z = 2;
			
			scene.add(sphere);
			
			camera.position.x = -30;
			camera.position.y = 40;
			camera.position.z = 30;
			
			$scope.camera = camera;
			camera.lookAt(scene.position);
			
		
			canvasEle.append(renderer.domElement);
			//renderer.render(scene, camera);
			
			return {
				scene: scene,
				camera: camera,
				renderer: renderer,
				//
				plane: plane,
				cube: cube,
				sphere: sphere
			};
			
		};
		
		function createNewScene(config = {
			canvas: {
				width: window.innerWidth,
				height: window.innerHeight
			}
		}){
			let {
				scene,
				camera,
				renderer,
				plane,
				cube,
				sphere
			} = createNewStage(config);
			
			[plane, cube, sphere].forEach(obj => scene.remove(obj));
			
			return {
				scene,
				camera,
				renderer
			};
		}
		
		
		function transformObject(obj, translationConfig = {
			rotation: {	//rotate
				x: 0,
				y: 0,
				z: 0
			},
			position: {	//translation
				x: 0,
				y: 0,
				z: 0
			}			
//			,scale: {	//scale
//				
//			}
		}){
			var newVal;
			Object.keys(translationConfig).forEach(aspect => {
				
				['x', 'y', 'z'].forEach(axis => {
					newVal = translationConfig[aspect][axis];
					if(angular.isDefined(newVal)){
						obj[aspect][axis] = translationConfig[aspect][axis];
					}
				});
			});
		}
		
		function transformPlane(plane, translationConfig = {
				rotation: {
					x: -0.5 * Math.PI
				},
				position: {
					x: 15
				}
			}){
			transformObject(plane, translationConfig);
		}
		
		function translateCube(cube, translationConfig = {
			position: {
				x: -4,
				y: 3,
				z: 3
			}
		}){
			transformObject(cube, translationConfig)
		}
		
		function translateSphere(sphere, translationConfig = {
			position: {
				x: 20,
				y: 4,
				z: 2
			}
		}){
			transformObject(sphere, translationConfig);
		}
		
		function translateCamera(camera, translationConfig = {
			position: {
				x: -30,
				y: 40,
				z: 30
			}
		}){
			translateObject(camera, translationConfig);
		}
		
		function updateCanvasOnResize(option = {
			camera,
			renderer
		}){
			let cameraArg = option && option.camera;
			let rendererArg = option && option.renderer;
			
			$window.addEventListener('resize', event => {
				cameraArg.aspect = $window.innerWidth / $window.innerHeight;
				cameraArg.updateProjectionMatrix();
				rendererArg.setSize($window.innerWidth, $window.innerHeight);
			});
		}
		
		return {
//			createNewStage: createNewStage,
//			createNewScene: createNewScene
			createNewStage,
			createNewScene,
			
			//translateObject,
			//translateCamera,
			transformPlane,
			translateCube,
			translateSphere,
			
			updateCanvasOnResize,
			derp: 'derp'
		};
	};
	fn.$inject = ['$window'];
	
	
	return fn;
	
});