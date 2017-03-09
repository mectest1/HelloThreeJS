define([
	'../controllers/02-first-scene-controller',
	'text!../views/02-first-scene-view.html'
], function(
		_02FirstSceneController,
		_02FirstSceneView
		){
	let states = [
		{
			name: '02-first-scene',
			url: '/02-first-scene',
			template: _02FirstSceneView,
			controller: _02FirstSceneController
		}
	];
	
	return states;
});