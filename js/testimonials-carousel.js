const slideContainer = document.querySelector('.testimonials__carousel');
const slides = document.querySelectorAll('.testimonials__carousel-item');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

function hideSlides(slides) {
  for (const slide of slides) {
    slide.classList.add("hidden");
  }
}

// hideSlides(slides);

let currentSlideIndex = 0;

function renderSlide() {
    hideSlides(slides);
    slides[currentSlideIndex].classList.remove("hidden");
    // slides[currentSlideIndex].style.display = 'block';
    // slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.matchMedia('(min-width:768px)').matches) {
        const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
        slides[secondSlideIndex].classList.remove("hidden");
        // slides[secondSlideIndex].style.display = 'block';
        // slideContainer.innerHTML += slides[secondSlideIndex];
        if (window.matchMedia('(min-width:991px)').matches) {
            const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
            slides[thirdSlideIndex].classList.remove("hidden");
            // slides[thirdSlideIndex].style.display = 'block';
            // slideContainer.innerHTML += slides[thirdSlideIndex];
        }
    }
}

function nextSlide() {
    currentSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIndex = currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
    renderSlide();
}

// setInterval(nextSlide, 3000);
renderSlide();

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

window.addEventListener('resize', renderSlide);