document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons();

  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mainNav = document.getElementById("main-nav");
  const body = document.body;

  // Hamburger menu toggle
  hamburgerIcon.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  // Close nav when a nav link is clicked (for mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        hamburgerIcon.classList.remove("active");
        body.classList.remove("no-scroll");
      }
    });
  });

  // Reveal sections on scroll
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight - 100) {
        // Adjust 100px as needed for when the animation triggers
        element.classList.add("visible");
      } else {
        element.classList.remove("visible"); // Optionally remove on scroll back up
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on load to reveal elements already in view

  // --- Scroll to Top Button Functionality ---
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
  const heroSection = document.getElementById("hero"); // Get your hero section

  // Show/hide button based on scroll position
  const toggleScrollToTopButton = () => {
    // Show button if scrolled past the hero section (or a certain pixel value)
    if (window.scrollY > heroSection.offsetHeight / 2) {
      // Show after scrolling half of hero
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  };

  // Smooth scroll to top when button is clicked
  scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor jump behavior
    window.scrollTo({
      top: 0, // Scroll to the very top of the page
      behavior: "smooth", // Smooth scroll animation
    });
  });

  // Attach the scroll event listener
  window.addEventListener("scroll", toggleScrollToTopButton);
  // Run once on load in case the page is already scrolled
  toggleScrollToTopButton();
});
