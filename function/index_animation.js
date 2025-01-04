// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Add the fade-in class to elements that are in the viewport
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add("fade-in");
            }
        });
    });

    // Trigger the fade-in effect for elements that are already in the viewport on page load
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add("fade-in");
        }
    });
});
