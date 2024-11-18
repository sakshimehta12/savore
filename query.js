//Hero section
let currentSlide = 0;
const slideInterval = 4000; 

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

showSlide(currentSlide);

// Auto-slide functionality
setInterval(() => {
    moveSlide(1); // Automatically move to the next slide
}, slideInterval);

// Slogan Section 
const slogan = document.querySelector('.slogan');
if (slogan) {
    const sloganObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    slogan.classList.add('animate');
                }
            });
        },
        { threshold: 0.5 } 
    );

    sloganObserver.observe(slogan);
}

// Review Section
const reviewSection = document.querySelector('.review-carousel');
if (reviewSection) {
    const reviewSlides = document.querySelectorAll('.review-slide');
    if (reviewSlides.length > 0) {
        const observerOptions = {
            root: null, 
            threshold: 0.5 
        };

        const reviewObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const slide = entry.target;
                    slide.classList.add('animated');
                }
            });
        };

        const reviewObserver = new IntersectionObserver(reviewObserverCallback, observerOptions);

        reviewSlides.forEach(slide => {
            reviewObserver.observe(slide);
        });
    }
}
