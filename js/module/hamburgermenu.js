const toggle = document.getElementsByClassName("hamburger-toggle")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];
console.log(toggle);

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
