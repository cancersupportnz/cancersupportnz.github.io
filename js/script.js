const menuIcon = document.querySelector("#line-menu");
const navbar = document.querySelector(".mobile-navbar-links");
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("nav-opened")
    line1.classList.toggle("nav-opened")
    line2.classList.toggle("nav-opened")
});

const debounce = (fn) => {

    let frame;
    return (...params) => {
        if (frame) { 
            cancelAnimationFrame(frame);
        }
  
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
  
    } 
  };
  
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

window.onload = function() {
    document.getElementById("front-text").className = "fade in";
    document.getElementById("front-subtext").className = "fade in";
    document.getElementById("front-button").className = "fade in";
};

document.addEventListener('scroll', debounce(storeScroll), { passive: true });
 function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

storeScroll();

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})