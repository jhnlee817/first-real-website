window.onload = (Event) => {
  console.log("hello world");


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

console.log(openMenu);

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

