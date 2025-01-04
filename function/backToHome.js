// Select the backToHomeDiv element
const backToHomeDiv = document.querySelector('.backToHomeDiv');

// Set initial state for the backToHomeDiv
backToHomeDiv.style.opacity = '0'; // Initially hidden
backToHomeDiv.style.transition = 'opacity 0.5s ease'; // Smooth transition for fade effect

// Function to handle scroll behavior
const handleScroll = () => {
  if (window.scrollY > 200) { // Show when scrolled down 200px or more
    backToHomeDiv.style.opacity = '1'; // Fade in
  } else {
    backToHomeDiv.style.opacity = '0'; // Fade out
  }
};

// Add scroll event listener to the window
window.addEventListener('scroll', handleScroll);

// Add click event listener to backToHomeDiv
backToHomeDiv.addEventListener('click', function () {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll animation
  });
});
