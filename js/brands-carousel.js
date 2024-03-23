const slides = [
    `<div><img src="img/coffee-carousel-lavazza.png" alt="Lavazza"></div>`,
    `<div><img src="img/coffee-brands-folgers.webp" alt="Folgers"></div>`,
    `<div><img src="img/coffee-brands-frontier.webp" alt="Frontier"></div>`,
    `<div><img src="img/coffee-brands-melitta.webp" alt="Melitta"></div>`,
    `<div><img src="img/coffee-brands-green_mountain.webp" alt="Green Mountain"></div>`,
    `<div><img src="img/coffee-brands-monarch.webp" alt="Monarch"></div>`,
    `<div><img src="img/coffee-brands-costa.webp" alt="Costa"></div>`,
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.brands-carousel__slides');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width:480px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width:767px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            if (window.matchMedia('(min-width:980px)').matches) {
                const forthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                slideContainer.innerHTML += slides[forthSlideIdx];
            }
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

const btnNext = document.querySelector('.brands-carousel__btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.brands-carousel__btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);