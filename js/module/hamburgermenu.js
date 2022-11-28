const toggle = document.getElementsByClassName("hamburger-toggle")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const navBarSticky = document.getElementsByClassName("nav-background-bottom")[0];
let navBarTop = navBarSticky.offsetTop;
function navbartop() {
  if (window.scrollY >= navBarTop && window.innerWidth <= 1200) {
    navBarSticky.classList.add("navBarSticky");
  } else {
    navBarSticky.classList.remove("navBarSticky");
  }
}
window.addEventListener("scroll", navbartop);

let scrollPosition = window.pageYOffset;
window.onscroll = function () {
  let updatedScrollPosition = window.pageYOffset;
  if (scrollPosition > updatedScrollPosition) {
    navBarSticky.style.top = "0";
  } else {
    navBarSticky.style.top = "-150px";
  }
  scrollPosition = updatedScrollPosition;
};
