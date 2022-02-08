import * as THREE from 'https://unpkg.com/three@0.137.5/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.137.5/examples/jsm/loaders/GLTFLoader.js?module';
import { OrbitControls } from 'https://unpkg.com/three@0.137.5/examples/jsm/controls/OrbitControls.js?module';

const canvas = document.getElementById('barbarian-scene-container');

const scene = new THREE.Scene();

const loader = new GLTFLoader();
loader.load('barbarian.glb', function(gltf) {
    
    gltf.scene.position.x = 0; 
    gltf.scene.position.y = 0;
    gltf.scene.position.z = -2;

    const root = gltf.scene;
    scene.add(root);
    root.scale.set(5,5,5);
}, function(xhr) {
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, undefined, function (error) {
    console.error(error);
});

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2,2,5);
light.target.position.set(0, 0, 0)

scene.add(light);
scene.add(light.target);

const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(-2,2,5);
light2.target.position.set(0, 0, 0)

scene.add(light2);
scene.add(light2.target);

const light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.set(-2,2,-5);
light3.target.position.set(0, 0, 0)

scene.add(light3);
scene.add(light3.target);

const light4 = new THREE.DirectionalLight(0xffffff, 1);
light4.position.set(2 ,2,-5);
light4.target.position.set(0, 0, 0)

scene.add(light4);
scene.add(light4.target);

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

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

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