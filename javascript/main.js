// dark mode =======================================
let darkButt = document.querySelector(".dark");
let body = document.body;
if (darkButt) {
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
}
//loader =============================================
let loader = document.querySelector(".loader");
window.onload = function () {
  loader.style.display = "none";
};
// nav===============================================
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");

if (menu && nav) {
  menu.addEventListener("click", function () {
    nav.classList.toggle("active");
    menu.classList.toggle("fa-xmark");
  });
  menu.addEventListener(
    "click",
    (toggle_scrolling_state = () => {
      body.classList.toggle("no-scroll");
    })
  );
}

//cursor============================================================
const circle = document.getElementById("circle");
const circleStyle = circle.style;

document.addEventListener("mousemove", (e) => {
  window.requestAnimationFrame(() => {
    circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
    circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
  });
});
document.onmouseleave = function () {
  circle.style.display = "none";
};
document.onmouseenter = function () {
  circle.style.display = "flex";
};
// landing video===============================================
let videoButt = document.querySelector(".open-video");
let video = document.querySelector(".landing .video");
let videoplayer = document.querySelector(".landing .video video");
var exit = document.querySelector(".landing .video i");
if (videoButt) {
  videoButt.addEventListener("click", function () {
    video.style.display = "block";
    body.classList.add("add-layout-on-body");
    videoplayer.play();
  });
  exit.addEventListener("click", function () {
    video.style.display = "none";
    body.classList.remove("add-layout-on-body");
  });
}
//up ==========================================================
let up = document.querySelector(".up");
window.onscroll = function () {
  if (scrollY > 500) {
    up.style.right = "25px";
  } else {
    up.style.right = "-80px";
  }
};
up.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
// captcha =============================================================
// let captcha = document.getElementById("captcha");
// let submit = document.getElementById("submit");
// if (captcha && submit) {
//   let first = Math.floor(Math.random() * 10) + 1;
//   let second = Math.floor(Math.random() * 10) + 1;
//   captcha.setAttribute("placeholder", `${first} + ${second} ?`);
//   submit.onclick = function (e) {
//     if (+captcha.value === first + second) {
//     } else {
//       e.preventDefault();
//       //put error
//     }
//   };
// }
