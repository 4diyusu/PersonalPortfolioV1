document.addEventListener("DOMContentLoaded", () => {
  // --- Contact Form --- //
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for reaching out, Kevin will get back to you soon!");
      form.reset();
    });
  }

  // --- Scroll Highlight --- //
  const navItems = document.querySelectorAll("nav ul li a");
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 110;

    navItems.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // --- Hamburger Menu --- //
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-links");

  if (hamburger && navMenu) {
    // Toggle on click
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    // Auto-hide after selecting a link (mobile UX)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });
  }
});


// --- Nickname Typing Effect --- //
const nicknames = ["Kevs", "Kebs", "Enerio"];
const typed = document.getElementById("typed-nickname");

let i = 0; 
let j = 0; 
let current = "";
let isDeleting = false;

function typeEffect() {
  current = nicknames[i];

  if (!isDeleting) {
    // typing forward
    typed.textContent = current.substring(0, j + 1);
    j++;

    if (j === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); 
      return;
    }
  } else {
    // deleting backward
    typed.textContent = current.substring(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % nicknames.length; 
    }
  }

  const speed = isDeleting ? 80 : 120; 
  setTimeout(typeEffect, speed);
}

typeEffect();