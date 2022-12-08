document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("menu-mobile");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  // navMenu.addEventListener("focusout", (event) => {
  //   hamburger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // });
});
