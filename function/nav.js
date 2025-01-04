const menuToggle = document.getElementById("menu-toggle");
const navP = document.querySelector(".navP");

menuToggle.addEventListener("click", () => {
    navP.classList.toggle("active");
});

// Hide the navigation menu and menu toggle when scrolling down
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll down, fade out and hide both menu and toggle
        navP.classList.add("hidden");
        navP.classList.remove("show");
        menuToggle.classList.add("hidden");
        menuToggle.classList.remove("show");
    } else if (currentScroll === 0) {
        // Scroll up and at the top, fade in and show both menu and toggle
        navP.classList.remove("hidden");
        navP.classList.add("show");
        menuToggle.classList.remove("hidden");
        menuToggle.classList.add("show");
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});


// Wait for the entire page (images, fonts, etc.) to load before hiding the loading screen
window.addEventListener('load', function() {
  // Add a class to fade out the loading screen
  document.body.classList.add('loaded');
});






// Select all anchor links
const links = document.querySelectorAll('.navP a');

// Add click event listener for each link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent the default anchor click behavior
        e.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from href

        // Get the target element by ID
        const targetElement = document.getElementById(targetId);

        // If the target element exists, smoothly scroll to it
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Align the top of the section to the top of the viewport
            });
        }
    });
});



// Select the backToHomeDiv element
const backToHomeDiv = document.querySelector('.backToHomeDiv');

// Add click event listener
backToHomeDiv.addEventListener('click', function() {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Smooth scroll animation
  });
});






// Select the elements
const aboutPage = document.getElementById('aboutPage');
const skillPage = document.getElementById('skillPage');
const projectPage = document.getElementById('projectPage');

// Set initial state for the backToHomeDiv
backToHomeDiv.style.opacity = '0'; // Initially hidden
backToHomeDiv.style.transition = 'opacity 0.5s ease'; // Smooth transition for fade effect

// Function to handle visibility change
const handleVisibilityChange = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      backToHomeDiv.style.opacity = '1'; // Fade in when the page is in view
    } else {
      backToHomeDiv.style.opacity = '0'; // Fade out when it's not in view
    }
  });
};

// Set up IntersectionObserver for each page
const observer = new IntersectionObserver(handleVisibilityChange, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe the pages
observer.observe(aboutPage);
observer.observe(skillPage);
observer.observe(projectPage);

// Scroll to the top when backToHomeDiv is clicked
backToHomeDiv.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
