document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("menu-mobile");

  hamburger.addEventListener("click", mobileMenu);

  function check(event) {
    if (
      navMenu.classList.contains("active") &&
      !event.target.isEqualNode(navMenu) &&
      !navMenu.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.removeEventListener("click", check);
    }
  }

  function mobileMenu() {
    if (!hamburger.classList.contains("active")) {
      hamburger.classList.add("active");
      navMenu.classList.add("active");
      document.addEventListener("click", check);
    } else {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.removeEventListener("click", check);
    }
  }
});
