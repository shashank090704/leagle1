const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let currentIndex = 0;
const intervalTime = 5000; // Time between slides in milliseconds (3 seconds)
let autoSlideInterval;

// Function to change slide
function changeSlide() {
    slides[currentIndex].classList.remove('slide-active'); // Remove active class from current slide
    currentIndex = (currentIndex + 1) % slideCount; // Move to next slide
    slides[currentIndex].classList.add('slide-active'); // Add active class to new slide

    // Update slider position
    const offset = -currentIndex * (100 / slideCount);
    slider.style.transform = `translateX(${offset}%)`;
}

// Function to start the automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(changeSlide, intervalTime);
}

// Initialize slider
slides[currentIndex].classList.add('slide-active');
startAutoSlide(); // Start automatic sliding
