const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#navMenu");

if (menuToggle && navMenu) {
  menuToggle.onclick = function () {
    navMenu.classList.toggle("active");
  };
}