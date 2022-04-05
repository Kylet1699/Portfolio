// Side nav highlight on scroll
// https://codepen.io/malsu/pen/VwKzoPG
const navSection = document.querySelectorAll(".section[id]");
console.log(navSection);

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

const hamburger = document.querySelector(".js-disable");
hamburger.classList.remove("js-disable");

document.querySelector(".collapse").classList.remove("show");