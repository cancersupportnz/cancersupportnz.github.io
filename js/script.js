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
  
storeScroll();