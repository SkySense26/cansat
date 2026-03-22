import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ----- CONTENITORE HTML -----
const container = document.getElementById("viewer3d");

// ----- SCENA -----
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f5f5);

// ----- CAMERA -----
const camera = new THREE.PerspectiveCamera(
75,
container.clientWidth / container.clientHeight,
0.1,
1000
);

camera.position.set(0, 50, 125);    // distanza osservatore (da modificare (sono rispettivamente x, y, z))

// ----- RENDERER -----
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// ----- LUCI -----

const light1 = new THREE.DirectionalLight(0xffffff, 3);
light1.position.set(5, 5, 5);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(-5, 5, -5);
scene.add(light2);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// ----- CONTROLLI MOUSE -----

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

// ----- CARICAMENTO MODELLO STL -----

const loader = new STLLoader();

let satellite;

loader.load(

'modello.stl',

function (geometry) {

const material = new THREE.MeshPhongMaterial({
color: 0x3498db,
specular: 0x111111,
shininess: 200
});

satellite = new THREE.Mesh(geometry, material);
satellite.scale.set(1, 1, 1);       // dimensioni del modello (da modificare)

// centra il modello
geometry.center();

// orientamento
satellite.rotation.x = -Math.PI / 2;

scene.add(satellite);

},

function (xhr) {

console.log((xhr.loaded / xhr.total * 100) + '% caricato');

},

function (error) {

console.error("Errore nel caricamento del modello:", error);

}

);

// ----- ANIMAZIONE -----

function animate() {

requestAnimationFrame(animate);

if (satellite) {

satellite.rotation.z += 0.002;

}

controls.update();

renderer.render(scene, camera);

}

animate();

// ----- RESPONSIVE -----

window.addEventListener("resize", () => {

camera.aspect = container.clientWidth / container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(container.clientWidth, container.clientHeight);

});