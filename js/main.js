const burger_menu = document.getElementById("hamburger");
const nav_links = document.querySelector(".nav__links");
console.log(burger_menu);

burger_menu.addEventListener("click", () => {
  nav_links.classList.toggle("show");
});
window.addEventListener("load", () => {
  console.log("linked");
});
