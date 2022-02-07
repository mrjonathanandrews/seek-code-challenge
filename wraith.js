import * as THREE from 'https://unpkg.com/three@0.137.5/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.137.5/examples/jsm/loaders/GLTFLoader.js?module';

const canvas = document.getElementById('wraith-scene-container');

const scene = new THREE.Scene();
// scene.background= new THREE.Color(0x91929e);

const loader = new GLTFLoader();
loader.load('wraith-gltf/wraith.gltf', function(gltf) {
    const root = gltf.scene;
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
    width: 0.625 * window.innerWidth,
    height: 0.625 * window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100);
camera.position.set(0,1,2);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer({
    alpha: true,
    canvas: canvas
});

renderer.setClearColor( 0x000000, 0 );
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();