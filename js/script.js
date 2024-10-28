var navbarSticky = document.getElementById("navbar-sticky");
var navbarBody = document.getElementById("navbarBody");
show = false

function openPage() {
  window.open('https://www.buymeacoffee.com/creator754915');
}

function showNavbar() {
  if (show === true) {
    navbarSticky.style.visibility = "visible";
    navbarBody.style.height = 281;
    show = false;
  }
  else {
    navbarSticky.style.visibility = "hidden";
    navbarBody.style.height = 68;
    show = true;
  }
}