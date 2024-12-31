const images = document.querySelectorAll('.sketch img');
const viewer = document.getElementById('fullscreenViewer');
const viewerImage = document.getElementById('viewerImage');
const closeButton = document.getElementById('closeButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

let currentIndex = 0;

// Function to update the image with animations
function updateImage(direction) {
    // Add outgoing animation
    viewerImage.classList.remove('slide-in-right', 'slide-in-left');
    viewerImage.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');

    // Wait for the animation to complete before changing the image
    setTimeout(() => {
        currentIndex =
            direction === 'next'
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;
        viewerImage.src = images[currentIndex].src;

        // Add incoming animation
        viewerImage.classList.remove('slide-out-left', 'slide-out-right');
        viewerImage.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
    }, 500); // Matches animation duration
}

// Show fullscreen viewer
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        viewerImage.src = img.src;
        viewer.style.display = 'flex';
        viewerImage.classList.add('slide-in-right'); // Initial animation
    });
});

// Close fullscreen viewer
closeButton.addEventListener('click', () => {
    viewer.style.display = 'none';
});

// Show next image
nextButton.addEventListener('click', () => {
    updateImage('next');
});

// Show previous image
prevButton.addEventListener('click', () => {
    updateImage('prev');
});
