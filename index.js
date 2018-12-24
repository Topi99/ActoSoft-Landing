const menuIcon = document.querySelector(".nav-icon");
const menuBar = document.querySelector("aside");

menuIcon.addEventListener("click", e => {
  menuBar.classList.toggle("open");
});