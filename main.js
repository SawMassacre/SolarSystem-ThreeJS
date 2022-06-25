import './style.css'
import * as THREE from 'three'
import {MapControls, OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from '/node_modules/three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from '/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass';
import { Vector3 } from 'three';
'use strict';

const scene  = new THREE.Scene();
 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,4000);
 
const renderer = new THREE.WebGLRenderer({
 canvas: document.querySelector('#bg'),
});
 
let pluto, moon, asteroids, sun, star, papich, mercury, venus, earth, jupiter, mars, uranus, neptune, saturn, asteroids2, uranusRing, saturnRing, sphereBackground;
let roja = new Boolean(false);
let angle = 0;
let plutoCheck = new Boolean(false);

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.set(500,500,500);
camera.lookAt(0,0,0);

const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass();
bloomPass.threshold = 0;
bloomPass.strength = 1.2;
bloomPass.radius = 1.5;
const bloomComposer = new EffectComposer(renderer);
bloomComposer.setSize(window.innerWidth, window.innerHeight);
bloomComposer.renderToScreen = true;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

function init() {
    drawSun();
    drawMercury();
    drawVenus();
    drawEarth();
    drawJupiter();
    drawMars();
    drawUranus();
    drawNeptune();
    drawSaturn();
    drawStars();
    drawAsteroids();
    setAmbientLight();
    drawBackground();
    drawAsteroids2();
    drawMoon();
}

function drawSun() {
    const sunGeometry = new THREE.SphereGeometry(70, 32, 32);
    const sunTexture = new THREE.TextureLoader().load('sun.jpg')
    const sunMaterial = new THREE.MeshPhongMaterial({map: sunTexture, side: THREE.FrontSide})
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    
    scene.add(sun);
}

function drawSunPapich() {
    const papichGeometry = new THREE.SphereGeometry(71, 32, 32);
    const papichTexture = new THREE.TextureLoader().load('papich.jpg')
    const papichMaterial = new THREE.MeshPhongMaterial({map: papichTexture, side: THREE.FrontSide})
    papich = new THREE.Mesh(papichGeometry, papichMaterial);
    scene.add(papich);
}

function drawMercury() {
    const mercuryGeometry = new THREE.SphereGeometry(10, 32, 32);
    const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg');
    const mercuryMaterial = new THREE.MeshPhongMaterial({map: mercuryTexture, side: THREE.FrontSide});
    mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercury.position.set(-100,0,-100)
    scene.add(mercury);
}

function drawVenus() {
    const venusGeometry = new THREE.SphereGeometry(13, 32, 32);
    const venusTexture = new THREE.TextureLoader().load('venus.jpg');
    const venusMaterial = new THREE.MeshPhongMaterial({map: venusTexture, side: THREE.FrontSide})
    venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(120,0,120)
    scene.add(venus);
}

function drawEarth() {
    //moon
    const earthGeometry = new THREE.SphereGeometry(16, 32, 32);
    const earthTexture = new THREE.TextureLoader().load('earth.jpg');
    const earthMaterial = new THREE.MeshPhongMaterial({map: earthTexture, side: THREE.FrontSide})
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(-220,5,-120)
    scene.add(earth);
}

function drawMars() {
    const marsGeometry = new THREE.SphereGeometry(14, 32, 32);
    const marsTexture = new THREE.TextureLoader().load('mars.jpg');
    const marsMaterial = new THREE.MeshPhongMaterial({map: marsTexture, side: THREE.FrontSide})
    mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.set(230,1,-220)
    scene.add(mars);
}

function drawJupiter() {
    const jupiterGeometry = new THREE.SphereGeometry(26, 32, 32);
    const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
    const jupiterMaterial = new THREE.MeshPhongMaterial({map: jupiterTexture, side: THREE.FrontSide})
    jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiter.position.set(320,-2,30) 
    scene.add(jupiter);
}

function drawUranus() {
    const uranusGeometry = new THREE.SphereGeometry(23, 32, 32);
    const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
    const uranusMaterial = new THREE.MeshPhongMaterial({map: uranusTexture, side: THREE.FrontSide})
    uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranus.position.set(180,3,-420) 
    scene.add(uranus);
    //uranus ring
    const uranusRingGeometry = new THREE.RingGeometry(26, 50, 30, 30);
    const uranusRingTexture = new THREE.TextureLoader().load('uranus ring.png');
    const uranusRingMaterial = new THREE.MeshPhongMaterial({map: uranusRingTexture, side: THREE.DoubleSide});
    uranusRingMaterial.opacity = 3;
    uranusRingMaterial.transparent = true;
    uranusRing = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);
    uranusRing.position.set(180,5,-420) 
    uranusRing.rotation.x = Math.PI / 2;
    uranusRing.rotation.y = Math.PI / 15;
    scene.add(uranusRing);
}

function drawSaturn() {
    const saturnGeometry = new THREE.SphereGeometry(25, 32, 32);
    const saturnTexture = new THREE.TextureLoader().load('saturn.jpg');
    const saturnMaterial = new THREE.MeshPhongMaterial({map: saturnTexture, side: THREE.FrontSide})
    saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturn.position.set(-240,-5,320)   
    scene.add(saturn);
    //saturn ring
    const saturnRingGeometry = new THREE.RingGeometry(30, 50, 30, 30);
    const saturnRingTexture = new THREE.TextureLoader().load('saturn ring.png');
    const saturnRingMaterial = new THREE.MeshPhongMaterial({map: saturnRingTexture, side: THREE.DoubleSide});
    saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
    saturnRing.position.set(-240,-10,320) 
    saturnRing.rotation.x = Math.PI / 2;
    saturnRing.rotation.y = Math.PI / -15;
    scene.add(saturnRing);
}

function drawNeptune() {
    const neptuneGeometry = new THREE.SphereGeometry(22, 32, 32);
    const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');
    const neptuneMaterial = new THREE.MeshPhongMaterial({map: neptuneTexture, side: THREE.FrontSide})
    neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptune.position.set(-90,10,450)
    scene.add(neptune);
}

function drawMoon() {
    const moonGeometry = new THREE.SphereGeometry(6, 32, 32);
    const moonTexture = new THREE.TextureLoader().load('moon.jpg');
    const moonMaterial = new THREE.MeshPhongMaterial({map: moonTexture, side: THREE.FrontSide})
    moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(-220,5,-180)
    scene.add(moon);
}

function drawBackground() {
  const spaceTexture = new THREE.TextureLoader().load('galaxies.png');
  sphereBackground =  new THREE.Mesh(
  new THREE.SphereGeometry(3000,32,32),
  new THREE.MeshStandardMaterial({map: spaceTexture, side: THREE.BackSide})
  );

  scene.add(sphereBackground);
}

function drawStars() {
    star = new THREE.Group();
    scene.add(star);
    const geometry = new THREE.TetrahedronGeometry(2, 3);
    for (let i = 0; i < 400; i ++) {
    const material = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      shading: THREE.FlatShading
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set((Math.random() - 0.5) * 5000,
                      (Math.random() - 0.5) * 5000,
                      (Math.random() - 0.5) * 5000);
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    star.add(mesh);
  }
}

function drawAsteroids() {
  asteroids = new THREE.Group();
  scene.add(asteroids);
  const geometry = new THREE.TetrahedronGeometry(2, 3);
  for (let i = 0; i < 20; i ++) {
    const material = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      shading: THREE.FlatShading
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set((Math.random() - 0.5) * 2500,
                      (Math.random() - 0.5) * 2500,
                      (Math.random() - 0.5) * 2500);
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    asteroids.add(mesh);
  }
}

function drawAsteroids2() {
    asteroids2 = new THREE.Group();
    scene.add(asteroids2);
    const geometry2 = new THREE.TetrahedronGeometry(2, 3);
    for (let i = 0; i < 20; i ++) {
      const material = new THREE.MeshPhongMaterial({
        color: 0xFFFFFF,
        shading: THREE.FlatShading
      });
      const mesh = new THREE.Mesh(geometry2, material);
      mesh.position.set((Math.random() - 0.5) * 2500,
                        (Math.random() - 0.5) * 2500,
                        (Math.random() - 0.5) * 2500);
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      asteroids2.add(mesh);
    }
}

function drawPluto() {
    const plutoGeometry = new THREE.SphereGeometry(12, 32, 32);
    const plutoTexture = new THREE.TextureLoader().load('pluto.jpg');
    const plutoMaterial = new THREE.MeshPhongMaterial({map: plutoTexture, side: THREE.FrontSide})
    pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
    pluto.position.set(-180,10,520)
    scene.add(pluto);
}

function setAmbientLight() {
    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    bloomComposer.render();
    asteroids2.rotation.x -= 0.004;
    asteroids2.rotation.y -= 0.002;
    asteroids.rotation.x += 0.004;
    asteroids.rotation.y += 0.002;

    sun.rotation.y += 0.004;
    earth.rotation.y += 0.005;
    mercury.rotation.y += 0.006;
    jupiter.rotation.y += 0.0009;
    uranus.rotation.y += 0.003;
    neptune.rotation.y += 0.0008;
    saturn.rotation.y += 0.005;
    venus.rotation.y += 0.004;
    mars.rotation.y += 0.004;

    star.rotation.y += 0.0004;
    sphereBackground.rotation.y += 0.0004;

    angle += Math.PI/180;
    moon.rotation.y += 0.0009;
    moon.position.x +=1*Math.cos(angle);
    moon.position.z +=1*Math.sin(angle);

    uranusRing.rotation.z += 0.004;
    saturnRing.rotation.z += 0.004;
    if (saturnRing) {
        saturnRing.rotation.y = Math.sin(Date.now() * 0.0008) * Math.PI * -0.05;
    }
    if (uranusRing) {
        uranusRing.rotation.y = Math.sin(Date.now() * 0.0012) * Math.PI * -0.05;
    }
    if (roja == true)
        papich.rotation.y += 0.004;
    if (plutoCheck == true)
        pluto.rotation.y += 0.004;
}

function pixelate() {
    renderer.setPixelRatio(0.2);
}

init(); 
animate();

let controls = new OrbitControls(camera, renderer.domElement);
//controls.enable = true;
controls.maxPolarAngle = Math.PI / 2;
controls.maxDistance = 1000;
controls.minDistance = 250;
controls.zoomSpeed = 0.4;
controls.rotateSpeed = 0.5;
controls.enablePan = false; 

document.addEventListener('keydown', (event) => {
    //Event keys:
    //"K" - draws klenin's face, "L" - removes klenin's face
    //"+" - increases bloomPass, "-" - decreases bloomPass, "0" - sets bloompass back to default 
    var name = event.key;
    if (name == '=') {
        bloomPass.radius += 0.05;
    }
    else if (name == '-') {
        bloomPass.radius -= 0.05;
    }
    else if (name == '0') {
        bloomPass.radius = 1.5;
    }
    else if (name == 'k' && roja == false) {
        drawSunPapich();
        roja = true;
    }
    else if (name == 'l') {
        scene.remove(papich);
        roja = false;
    }
    else if (name == 'i' && plutoCheck == false) {
        drawPluto();
        plutoCheck = true;
    }
    else if (name == 'o') {
        scene.remove(pluto);
        plutoCheck = false;
    }
    else if (name == 'p') {
        pixelate();
        const sample = document.getElementById("text");
        sample.style.visibility = 'visible';
        const sample1 = document.getElementById("text1");
        sample1.style.visibility = 'visible';
        const sample2 = document.getElementById("text2");
        sample2.style.visibility = 'visible';
    }
  }, false);
//СДЕЛАТЬ ПЛОУТРОН И ЛУНУ

//POST PROCESSING BLOOM ETC
//Земля: https://riptutorial.com/three-js/example/28900/creating-a-model-earth
//https://www.google.com/search?q=how+to+make+object+rotate+three+js&ei=1SWmYvevGOSWjgaKyaL4Dw&ved=0ahUKEwi37q22u6j4AhVki8MKHYqkCP8Q4dUDCA4&uact=5&oq=how+to+make+object+rotate+three+js&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIFCCEQoAEyBQghEKABMggIIRAeEBYQHTIICCEQHhAWEB06BwgAEEcQsAM6CAgAEB4QCBANOgcIIRAKEKABSgQIQRgASgQIRhgAUKIFWN4MYKUNaAJwAXgAgAHzAYgB6gmSAQUwLjEuNZgBAKABAcgBCMABAQ&sclient=gws-wiz#kpvalbx=_2CWmYvLxM-yPwPAP3IuLiAo26