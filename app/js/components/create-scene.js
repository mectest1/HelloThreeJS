define(['THREE'], function(THREE){
	'use strict';
	//ref: https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene
	
	return {
		init: () => {
			let scene = new THREE.Scene();
			let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			
			let renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);
			
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