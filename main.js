// gsap animation elements  movement

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".center",
    start: "-900 1%",
    end: "50% 50%",
    scrub: 1,
    // markers: true,
  },
  // Callback function to start the animation when the page loads
  onLoad: function () {
    tl.play(); // Start the timeline
  },
});
tl.to(
  "#orange-cut",
  {
    top: "40%",
    left: "40%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "40%",
    right: "30%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "40%",
    rotate: "130deg",
    left: "20%",
  },
  "orange"
);
//-----------------------------------------------------------------------------

//Awesome Mouse Spotlight Effect

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
