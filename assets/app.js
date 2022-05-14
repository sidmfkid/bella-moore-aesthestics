const menuButton = document.getElementById("menuButton");
const navList = document.querySelector(".nav__list");

menuButton.addEventListener("click", openMobileMenu.bind(this));

function openMobileMenu(e) {
  e.preventDefault();
  menuButton.classList.toggle("open");
  navList.classList.toggle("open");
  console.log(e);
}
