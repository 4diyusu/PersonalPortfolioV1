document.addEventListener("DOMContentLoaded", () => {
  /* ================================
     CONTACT FORM (FormSubmit)
  ================================ */
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thank you for reaching out! Kevin will get back to you soon.");
    });
  }

  /* ================================
     NAVIGATION: Scroll Highlight
  ================================ */
  const navItems = document.querySelectorAll("nav ul li a");
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 110;

    navItems.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) {
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  });

  /* ================================
     NAVIGATION: Hamburger Menu (Mobile)
  ================================ */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-links");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navMenu.classList.remove("show"));
    });
  }

  /* ================================
     NICKNAME TYPING EFFECT
  ================================ */
  const nicknames = ["Kevs", "Kebs", "Enerio"];
  const typed = document.getElementById("typed-nickname");

  if (typed) {
    let i = 0;
    let j = 0;
    let isDeleting = false;

    function typeEffect() {
      const current = nicknames[i];

      if (!isDeleting) {
        typed.textContent = current.substring(0, j + 1);
        j++;

        if (j === current.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1500); 
          return;
        }
      } else {
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
  }
});


  /* ================================
     HIDE EXTRA PROJECTS
  ================================ */
document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("show-more");
    const hiddenProjects = document.querySelectorAll(".project-item.hidden");

    showMoreBtn.addEventListener("click", () => {
      hiddenProjects.forEach(project => {
        project.classList.remove("hidden");
      });
      showMoreBtn.style.display = "none"; 
    });
  });