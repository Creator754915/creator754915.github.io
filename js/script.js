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

const button = document.getElementById('spotlight-button');

button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
});

button.addEventListener('click', (e) => {
    const rect = button.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    button.style.setProperty('--click-x', `${clickX}px`);
    button.style.setProperty('--click-y', `${clickY}px`);
});
