// Allows the navbar to function without JS
// Disables hamburger icon and shows the navbar when JS is disabled
document.querySelector(".js-disable").classList.remove("js-disable");
document.querySelector(".collapse").classList.remove("show");

// Side nav highlight on scroll
// https://codepen.io/malsu/pen/VwKzoPG
const navSection = document.querySelectorAll(".section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Look through sections to get height, top and ID values for each
  navSection.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".side-nav a[href*=" + sectionId + "]").classList.add("side-nav-active");
    } else {
      document.querySelector(".side-nav a[href*=" + sectionId + "]").classList.remove("side-nav-active");
    }
  });
}

// hides particles-js when scroll past 450
var scrollThreshold = 450;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (scrollThreshold > currentScrollPos) {
    // document.getElementById("particles-js").style.opacity = "0.3";
    document.getElementById("particles-js").classList.add("bg-show");
    document.getElementById("particles-js").classList.remove("bg-hidden");
  }
  else {
    document.getElementById("particles-js").classList.add("bg-hidden");
    document.getElementById("particles-js").classList.remove("bg-show");
  }
}


