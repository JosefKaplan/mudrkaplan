document.addEventListener("DOMContentLoaded", function () {
  var navbarMenu = document.getElementById("collapseNavbarToggle");

  navbarMenu.querySelectorAll(".nav-link").forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // only the phone layout has the menu in the opened ("show") state
      if (navbarMenu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
      }
    });
  });
});
