document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("menu-mobile");

  hamburger.addEventListener("click", mobileMenu);

  function check(event) {
    if (
      !navMenu.classList.contains("active") ||
      event.target.isEqualNode(navMenu) ||
      navMenu.contains(event.target) ||
      hamburger.contains(event.target)
    ) {
      return;
    }
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.removeEventListener("click", check);
  }

  function mobileMenu() {
    const action = hamburger.classList.contains("active") ? "remove" : "add";

    if (action === "add") {
      hamburger.classList[action]("active");
      navMenu.classList[action]("active");
      document.addEventListener("click", check);
    } else {
      hamburger.classList[action]("active");
      navMenu.classList[action]("active");
      document[`${action}EventListener`]("click", check);
    }
  }
});
