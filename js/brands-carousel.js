const slides = [
  `<div><img src="img/brands-carousel-lavazza.png" alt="Lavazza"></div>`,
  `<div><img src="img/brands-carousel-folgers.png" alt="Folgers"></div>`,
  `<div><img src="img/brands-carousel-frontier.png" alt="Frontier"></div>`,
  `<div><img src="img/brands-carousel-melitta.png" alt="Melitta"></div>`,
  `<div><img src="img/brands-carousel-green_mountain.png" alt="Green Mountain"></div>`,
  `<div><img src="img/brands-carousel-monarch.png" alt="Monarch"></div>`,
  `<div><img src="img/brands-carousel-costa.png" alt="Costa"></div>`,
];

let currentSlideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".brands-carousel__slides");
  slideContainer.innerHTML = slides[currentSlideIdx];
  if (window.matchMedia("(min-width:480px)").matches) {
    const secondSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width:767px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
      if (window.matchMedia("(min-width:991px)").matches) {
        const forthSlideIdx =
          thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
        slideContainer.innerHTML += slides[forthSlideIdx];
        const fiveSlideIdx =
          forthSlideIdx + 1 >= slides.length ? 0 : forthSlideIdx + 1;
        slideContainer.innerHTML += slides[fiveSlideIdx];
        const sixSlideIdx =
          fiveSlideIdx + 1 >= slides.length ? 0 : fiveSlideIdx + 1;
        slideContainer.innerHTML += slides[sixSlideIdx];
      }
    }
  }
}

function nextSlide() {
  currentSlideIdx =
    currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx =
    currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
  renderSlide();
}

setInterval(nextSlide, 3000);
renderSlide();

const btnNext = document.querySelector(".brands-carousel__btn-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".brands-carousel__btn-prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
