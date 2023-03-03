$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    center: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
      0: {
        items: 1.5,
        margin: 10,
      },
      768: {
        items: 2,
        autoWidth: true,
        margin: 20,
      },
      992: {
        items: 4,
        autoWidth: false,
        margin: 20,
      },
      1280: {
        items: 6,
        margin: 20,
      },
    },
  });
});

const navbar = document.getElementById("navbarDesktop");

// OnScroll event handler
const onScroll = () => {
  // Get scroll value
  const scroll = document.documentElement.scrollTop;

  // If scroll value is more than 0 - add class
  if (scroll > 150) {
    navbar.classList.add("fixedNav");
    navbar.classList.add("realativeNavDefault");
  } else {
    navbar.classList.remove("fixedNav");
    navbar.classList.remove("realativeNavDefault");
    
  }
};

// Use the function
window.addEventListener("scroll", onScroll);
