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















const buttons = document.querySelectorAll('.homeButtons button');
const image2 = document.querySelectorAll('.sketchImg, .digitalImg, .pubmatImg, .projectImg');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.toLowerCase();
        image2.forEach(img => {
            img.style.display = img.classList.contains(`${category}Img`) ? 'block' : 'none';
        });
    });
});



// Function to handle button click and toggle image2
function handleButtonClick(buttonClass, imageClass) {
    // Remove the active style from all buttons
    const buttons = document.querySelectorAll('.homeButtons button');
    buttons.forEach(button => {
        button.style.background = 'white';
        button.style.color = '#1da7ff';
    });

    // Apply the active style to the clicked button
    const clickedButton = document.querySelector(`.${buttonClass}`);
    clickedButton.style.background = 'linear-gradient(180deg, rgb(37, 204, 255) 5%, rgba(14,174,255,1) 98%)';
    clickedButton.style.color = 'white';

    // Hide all image2
    const allimage2 = document.querySelectorAll('.sketchImg, .digitalImg, .pubmatImg, .projectImg');
    allimage2.forEach(image => {
        image.style.display = 'none';
    });

    // Show image2 for the selected category
    const selectedimage2 = document.querySelectorAll(`.${imageClass}`);
    selectedimage2.forEach(image => {
        image.style.display = 'block';
    });
}

// Add event listeners to buttons
document.querySelector('.button1').addEventListener('click', () => handleButtonClick('button1', 'digitalImg'));
document.querySelector('.button2').addEventListener('click', () => handleButtonClick('button2', 'sketchImg'));
document.querySelector('.button3').addEventListener('click', () => handleButtonClick('button3', 'pubmatImg'));
document.querySelector('.button4').addEventListener('click', () => handleButtonClick('button4', 'projectImg'));

// Initialize with the default state
document.addEventListener('DOMContentLoaded', () => {
    handleButtonClick('button1', 'digitalImg');
});









// Select the back button
const backButton = document.querySelector('.back');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Adjust the opacity to make the fade-out faster (lower threshold)
    const fadeOutOpacity = Math.max(1 - scrollPosition / 50, 0); // Now fades out over 150px scroll
    backButton.style.opacity = fadeOutOpacity.toString();
});




  