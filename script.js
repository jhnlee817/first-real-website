window.onload = (Event) => {

const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden")
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});

document.getElementById("menu").addEventListener("click", openMenu);

// console.log(`menu: ${document.getElementById("menu")}`);

function openMenu() {
  document.getElementById("dropdown").classList.toggle("active");
}
  
const backToTopButton = document.querySelector("#arrow-up");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      backToTopButton.style.display = "none";
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}

};

// const menu = document.querySelector(".menu-btn");
// const navToggle = document.querySelector(".nav__link");

// navToggle.addEventListener("click", () => {
//   const visibility = menu.getAttribute("data-visible");

//   if (visibility === "false") {
//     menu.setAttribute("data-visible", true);
//   } else if (visibility === "true") {
//     menu.setAttribute("data-visible", false)
//   }

// });

// const backToTopButton = document.querySelector("#arrow-up");

// window.addEventListener("Scroll", scrollFunction);

// function scrollFunction() {
//   if (window.pageYOffset > 300) {
//     backToTopButton.style.display = "block";
//   } else {
//     backToTopButton.style.display = "none";
//   }
// }
  
