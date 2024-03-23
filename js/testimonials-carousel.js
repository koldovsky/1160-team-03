const slideContainer = document.querySelector('.testimonials__carousel');
// const slides = document.querySelectorAll('.testimonials__carousel-item');
const slides = [
    `<article class="testimonials__carousel-item">
        <div class="testimonials_carousel-item-image">
          <img src="../img/testimonials/testimonials-person-1.webp" alt="Photo of Josh Mendel">
        </div>
        <p class="testimonials__carousel-item-name">Josh Mendel</p>
        <p class="testimonials__carousel-item-feedback">I really love to drink coffee in the morning, but I hate making it. Therefore, I decided to rent a coffee machine from this company. I am very pleased with the service - everything was done quickly, they brought and set up the coffee machine.”</p>
        <p class="testimonials__carousel-item-date">December 15, 2021</p>
      </article>`,
      `<article class="testimonials__carousel-item">
        <div class="testimonials_carousel-item-image">
          <img src="../img/testimonials/testimonials-person-2.webp" alt="Photo of Jessica Malacks">
        </div>
        <p class="testimonials__carousel-item-name">Jessica Malacks</p>
        <p class="testimonials__carousel-item-feedback">“We have renovated the office kitchen and decided to delight our employees with automatic coffee machines. However, such equipment is very expensive. So, we simply rented coffee machines from this company and were completely satisfied.”</p>
        <p class="testimonials__carousel-item-date">February 10, 2022</p>
      </article>`,
      `<article class="testimonials__carousel-item">
        <div class="testimonials_carousel-item-image">
          <img src="../img/testimonials/testimonials-person-3.webp" alt="Photo of Daniella Williamson">
        </div>
        <p class="testimonials__carousel-item-name">Daniella Williamson</p>
        <p class="testimonials__carousel-item-feedback">“When I opened a coffee shop, I couldn't find an affordable coffee machine. Finally, I found this company and I am grateful for their excellent advice. They helped with the choice of the coffee machine and regularly deliver coffee beans and cups.”</p>
        <p class="testimonials__carousel-item-date">March 04, 2022</p>
      </article>`,
      `<article class="testimonials__carousel-item">
        <div class="testimonials_carousel-item-image">
          <img src="../img/testimonials/testimonials-person-4.webp" alt="Photo of Dean Steinberg">
        </div>
        <p class="testimonials__carousel-item-name">Dean Steinberg</p>
        <p class="testimonials__carousel-item-feedback">“We have been cooperating with this company for 2 years already, and during this time, not a single problem situation has arisen. The service is fast, the coffee is delivered without delay, the prices for coffee machine rental are very low.”</p>
        <p class="testimonials__carousel-item-date">March 22, 2022</p>
      </article>`,
];
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

let currentSlideIndex = 0;

function renderSlide() {
    // slides[currentSlideIndex].style.display = 'block';
    slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.matchMedia('(min-width:768px)').matches) {
        const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
        // slides[secondSlideIndex].style.display = 'block';
        slideContainer.innerHTML += slides[secondSlideIndex];
        if (window.matchMedia('(min-width:991px)').matches) {
            const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
            // slides[thirdSlideIndex].style.display = 'block';
            slideContainer.innerHTML += slides[thirdSlideIndex];
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