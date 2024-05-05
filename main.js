// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = "eye";

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth / 3, window.innerHeight / 4);

//Add the renderer to the DOM
document.getElementById("second-element").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "eye" ? 3 : 500;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500); //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(
  0x333333,
  objToRender === "eye" ? 5 : 1
);
scene.add(ambientLight);

//Render the scene
function animate() {
  requestAnimationFrame(animate);
  //Here we could add some code to update the scene, adding some automatic movement

  //Make the eye move
  if (object && objToRender === "eye") {
    object.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
}

//Start the 3D rendering
animate();

//------------------gsap area start --------------------------------------

// Register the ScrollTrigger plugin

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".center",
    start: "0 95%",
    end: "150% 50%",
    scrub: 2,
    // markers: true,
  },
});

tl.to("#first-element", {
  top: "60%",
  left: "23%",
});
tl.to("#second-element", {
  width: "15%",
  top: "60%",
  right: "10%",
});
tl.to("#third-element", {
  top: "60%",
  rotate: "130deg",
  right: "30%",
});

const Span = document.querySelector(".hover-btn");
const OverLay = document.querySelector(".two");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);
  gsap.to(OverLay, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.3,
    ease: "sine.out",
  });
});

Span.addEventListener("click", () => {
  OverLay.classList.toggle("is-open");
});

//-- second section ------------------------

gsap.registerPlugin(ScrollTrigger);

var tll = gsap.timeline({
  scrollTrigger: {
    trigger: ".loader-txt-contain",
    start: "top center",
    end: "+=1000", // Adjust the end value based on your content's height
    scrub: 1, // Smoothly animates the timeline as you scroll
  },
});

tll
  .to(".loader-txt-contain", {
    marginTop: "0vh",
    duration: 0.8,
  })
  .to(".loader-txt-contain", {
    marginTop: "-15vh",
    duration: 0.8,
  })
  .to(".loader-txt-contain", {
    marginTop: "-29vh",
    duration: 0.8,
  })
  .to(".loader-txt-contain", {
    marginTop: "-45vh",
    duration: 0.8,
  })
  .to(".loader-txt-contain", {
    marginTop: "-58vh",
    duration: 0.8,
  })
  .to(".loader-txt-contain", {
    marginTop: "-72vh",
    duration: 0.8,
  })
  .to(".loader-txt-contain", {
    marginTop: "-87vh",
    duration: 0.8,
  })
  .to(".loader-txt-contain", {
    marginTop: "-116vh",
    duration: 0.5,
  })
  .to(".loader-txt-contain", {
    marginTop: "-130vh",
    duration: 0.5,
  });

var MOOUSE = document.querySelector("#loader");
var tilt = 0;
var diff = 0;
MOOUSE.addEventListener("mousemove", function (details) {
  diff = details.clientX - tilt;
  tilt = details.clientX;
  gsap.to("#MouseCurosr", {
    ease: Power1,
    top: details.clientY,
    left: details.clientX,
    xPercent: -50,
    yPercent: -8,
    rotate: gsap.utils.clamp(-80, 80, diff * 0.4),
  });
});

/* audio area */
const audio = new Audio();
audio.src = "/Audio/sound.mp3";

const SoundBtn = document.querySelector("#sound");

SoundBtn.addEventListener("click", () => {
  audio.play();
});
