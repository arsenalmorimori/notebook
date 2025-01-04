// Select the back button
const backButton = document.querySelector('.back');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Adjust the opacity based on the scroll position
    const fadeOutOpacity = Math.max(1 - scrollPosition / 300, 0); // Fades out over 300px scroll
    backButton.style.opacity = fadeOutOpacity.toString();
});
