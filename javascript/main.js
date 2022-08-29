// dark mode =======================================
let darkButt = document.querySelector(".dark");
let body = document.body;
darkButt.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("isDarkMode", true);
  } else {
    localStorage.setItem("isDarkMode", false);
  }
});
if (localStorage.getItem("isDarkMode") === "true") {
  body.classList.toggle("dark-mode");
} else {
  localStorage.setItem("isDarkMode", false);
}
// nav===============================================
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
  menu.classList.toggle("fa-xmark");
});

// landing video===============================================
let videoButt = document.querySelector(".open-video");
let video = document.querySelector(".landing .video");
let videoplayer = document.querySelector(".landing .video video");
var exit = document.querySelector(".landing .video i");
videoButt.addEventListener("click", function () {
  video.style.display = "block";
  body.classList.add("add-layout-on-body");
  videoplayer.play();
});
exit.addEventListener("click", function () {
  video.style.display = "none";
  body.classList.remove("add-layout-on-body");
});
//cursor============================================================
const circle = document.getElementById('circle');
const circleStyle = circle.style;

document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    circleStyle.top = `${ e.clientY - circle.offsetHeight/2 }px`;
    circleStyle.left = `${ e.clientX - circle.offsetWidth/2 }px`;
  });
});