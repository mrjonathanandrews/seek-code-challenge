import * as THREE from 'https://unpkg.com/three@0.137.5/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.137.5/examples/jsm/loaders/GLTFLoader.js?module';

const canvas = document.getElementById('GLTFLoader-scene-container');

const scene = new THREE.Scene();

const loader = new GLTFLoader();
loader.load('assets/wraith.glb', function(glb) {
    console.log(glb);
    const root = glb.scene;
    scene.add(root);
    root.scale.set(0.025,0.025,0.025);
}, function(xhr) {
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, undefined, function (error) {
    console.error(error);
});

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2,2,5);
scene.add(light);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100);
camera.position.set(0,1,2);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();