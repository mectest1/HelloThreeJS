define([
	'../controllers/home-controller',
	'../controllers/02-first-scene-controller',
	'../controllers/03-materials-light-controller',
	//'text!../views/02-first-scene-view.html'
	'text!../views/home-view.html',
	'text!../views/simple-canvas-scene-view.html'
], function(
		homeController,
		_02FirstSceneController,
		_03MaterialsLightController,
		//_02FirstSceneView
		homeView,
		simpleCanvasSceneView
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
		}
	];
	
	return states;
});