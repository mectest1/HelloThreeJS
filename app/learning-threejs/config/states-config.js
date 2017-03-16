define([
	'../controllers/home-controller',
	'../controllers/02-first-scene-controller',
	'../controllers/03-materials-light-controller',
	'../controllers/04-materials-light-animation-controller',
	'../controllers/01-basic-scene-controller',
	'../controllers/05-geometry-from-vertices-and-faces-controller',
	//'text!../views/02-first-scene-view.html'
	'text!../views/home-view.html',
	'text!../views/simple-canvas-scene-view.html',
	'text!../views/04-materials-light-animation-view.html',
	'text!../views/01-basic-scene-view.html'
], function(
		homeController,
		_02FirstSceneController,
		_03MaterialsLightController,
		_04MaterialsLightAnimationController,
		_01BasicSceneController,
		_05GeometryFromVerticesAndFacesController,
		//_02FirstSceneView
		homeView,
		simpleCanvasSceneView,
		_04MaterialsLightAnimationView,
		_01BasicSceneView
		){
	const homeState = {
		name: 'learning-threejs',
		url: '/learning-threejs',
		controller: homeController,
		template: homeView
	};
	let states = [
		homeState,
		{
			name: '02-first-scene',
			parent: homeState,
			url: '/02-first-scene',
			//template: _02FirstSceneView,
			template: simpleCanvasSceneView,
			controller: _02FirstSceneController
		},
		{
			name: '03-materials-light',
			parent: homeState,
			url: '/03-materials-light',
			//parent: '',
			controller: _03MaterialsLightController,
			template: simpleCanvasSceneView
		},
		{
			name: '04-materials-light-animation',
			parent: homeState,
			url: '/04-materials-light-animation',
			//template: simpleCanvasSceneView,
			template: _04MaterialsLightAnimationView,
			controller: _04MaterialsLightAnimationController
		},
		{
			name: '01-basic-scene',
			parent: homeState,
			url: '/01-basic-scene',
			template: _01BasicSceneView,
			controller: _01BasicSceneController
		},
		{
			name: '05-geometry-from-vertices-and-faces',
			parent: homeState,
			url: '/05-geometry-from-vertices-and-faces',
			template: simpleCanvasSceneView,
			controller: _05GeometryFromVerticesAndFacesController
		}
	];
	
	return states;
});