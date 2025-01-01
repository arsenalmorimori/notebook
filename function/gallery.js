const images = document.querySelectorAll('.sketch img');
const viewer = document.getElementById('fullscreenViewer');
const viewerImage = document.getElementById('viewerImage');
const closeButton = document.getElementById('closeButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

let currentIndex = 0;

function updateImage(direction) {
    viewerImage.classList.remove('slide-in', 'slide-out');
    viewerImage.classList.add('slide-out');

    setTimeout(() => {
        currentIndex =
            direction === 'next'
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;
        viewerImage.src = images[currentIndex].src;
        viewerImage.classList.remove('slide-out');
        viewerImage.classList.add('slide-in');
    }, 300);
}

// Open viewer
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        viewerImage.src = img.src;
        viewer.style.display = 'flex';
        viewerImage.classList.add('slide-in');
    });
});

// Close viewer
closeButton.addEventListener('click', () => {
    viewer.style.display = 'none';
});

// Navigation buttons
nextButton.addEventListener('click', () => updateImage('next'));
prevButton.addEventListener('click', () => updateImage('prev'));
