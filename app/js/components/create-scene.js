define(['THREE', 'jquery'], function(THREE, jquery){
	'use strict';
	//ref: https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene
	
	return {
		init: (config) => {
			const canvasWrapper = config && config.convasWrapper || jquery(document.body);
			const canvasWidth = config && config.width || window.innerWidth;
			const canvasHeight = config && config.height || window.innerHeight;
			
			let scene = new THREE.Scene();
			let camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);
			
			let renderer = new THREE.WebGLRenderer();
			renderer.setSize(canvasWidth, canvasHeight);
			//document.body.appendChild(renderer.domElement);
			canvasWrapper.append(renderer.domElement);
			
			let geometry = new THREE.BoxGeometry(1, 1, 1);
			let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
			var cube = new THREE.Mesh(geometry, material);
			scene.add(cube);
			
			//
			camera.position.z = 5;
			
			function render(){
				window.requestAnimationFrame(render);
				renderer.render(scene, camera);
				
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.05;
			}
			render();
			
		}
	};
});