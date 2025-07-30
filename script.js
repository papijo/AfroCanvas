document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("main-nav");
  const navLinks = navMenu.querySelectorAll("a"); // Get all navigation links

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // Toggle body scroll lock to prevent scrolling when menu is open
    document.body.classList.toggle("no-scroll");
  });

  // Close menu when a navigation link is clicked (for smoother UX)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // Optional: Add a class to body to prevent scrolling when the menu is open
  // This CSS needs to be added to your styles.css:
  // body.no-scroll {
  //   overflow: hidden;
  // }

  // Reveal animation logic (from your previous code)
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150; // Adjust as needed

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible"); // Optional: remove visible on scroll back up
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on load in case elements are already in view
});
