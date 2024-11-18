let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide on load
showSlide(currentSlide);

// Select the slogan section
const slogan = document.querySelector('.slogan');

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the animation class when in view
        slogan.classList.add('animate');
        // Stop observing the element to prevent future triggers
        observer.unobserve(slogan);
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

// Observe the slogan section
observer.observe(slogan);

// Create an Intersection Observer to watch the review section
const reviewSection = document.querySelector('.review-carousel');
const reviewSlides = document.querySelectorAll('.review-slide');

const observerOptions = {
  root: null, // viewport as the root
  threshold: 0.5 // When 50% of the section is visible
};

// Function to add the 'animated' class to review slides when they are in view
const reviewObserverCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const slide = entry.target;
      slide.classList.add('animated');
    }
  });
};

// Create the observer and attach it to the review section
const ob = new IntersectionObserver(reviewObserverCallback, observerOptions);

// Observe each review slide
reviewSlides.forEach(slide => {
  ob.observe(slide);
});
