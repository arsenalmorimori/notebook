document.addEventListener('DOMContentLoaded', () => {
    // Function to fade in elements one by one with a delay
    function fadeInElements(selector, delay = 200) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((element, index) => {
            // Initially set opacity to 0
            element.style.opacity = 0;

            // Create an observer to check when the element comes into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = 1; // Fade-in the element
                        }, index * delay); // Delay each element by the index * delay
                    }
                });
            }, { threshold: 0.5 }); // 50% of the element should be visible

            observer.observe(element); // Observe the element
        });
    }

    // Fade in elements for homePage when they come into view
    fadeInElements('.homePage img, .homePage h1, .homePage h2');

    // Fade in elements for aboutPage when they come into view
    fadeInElements('.aboutPage img, .aboutPic, .aboutPage h1, .aboutPage h2, .aboutIconWrapper');

    // Fade in elements for skillPage when they come into view
    fadeInElements('.skillPage img, .skillPage h1, .skillPage p');

    // Fade in elements for projectPage when they come into view
    fadeInElements('.projectPage img, .projectPage h1, .projectPage h2, .projectLeft, .projectPic');
});
