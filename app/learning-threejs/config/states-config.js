define([
	'../controllers/home-controller',
	'../controllers/02-first-scene-controller',
	'../controllers/03-materials-light-controller',
	'../controllers/04-materials-light-animation-controller',
	//'text!../views/02-first-scene-view.html'
	'text!../views/home-view.html',
	'text!../views/simple-canvas-scene-view.html',
	'text!../views/04-materials-light-animation-view.html'
], function(
		homeController,
		_02FirstSceneController,
		_03MaterialsLightController,
		_04MaterialsLightAnimationController,
		//_02FirstSceneView
		homeView,
		simpleCanvasSceneView,
		_04MaterialsLightAnimationView
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
		}
	];
	
	return states;
});