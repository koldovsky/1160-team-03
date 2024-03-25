const coffeeCarousel = document.querySelector(".coffee__carousel-slides");
const coffeeItems = Array.from(document.getElementsByClassName("coffee__carousel-slide"));
// const coffeeItems = document.getElementsByClassName("coffee__carousel-slide");
const nextButton = document.querySelector(".coffee__carousel__button--right");
const prevButton = document.querySelector(".coffee__carousel__button--left");

let currentCoffeeSlideIdx = 0;

function renderCoffeeSlide() {
    coffeeCarousel.innerHTML = ""; 
    coffeeCarousel.appendChild(coffeeItems[currentCoffeeSlideIdx]);
    if (window.matchMedia("(min-width:768px)").matches) {
      const secondCoffeeSlideIdx = (currentCoffeeSlideIdx + 1) % coffeeItems.length;
      coffeeCarousel.appendChild(coffeeItems[secondCoffeeSlideIdx]);
      if (window.matchMedia("(min-width:1024px)").matches) {
        const thirdCoffeeSlideIdx = (currentCoffeeSlideIdx + 2) % coffeeItems.length;
        coffeeCarousel.appendChild(coffeeItems[thirdCoffeeSlideIdx]);
        const fourthCoffeeSlideIdx = (currentCoffeeSlideIdx + 3) % coffeeItems.length;
        coffeeCarousel.appendChild(coffeeItems[fourthCoffeeSlideIdx]);
      }
    }
}


function nextSlide() {
  currentCoffeeSlideIdx = (currentCoffeeSlideIdx + 1) % coffeeItems.length;
  renderCoffeeSlide();
}
  
function prevSlide() {
  currentCoffeeSlideIdx = (currentCoffeeSlideIdx - 1 + coffeeItems.length) % coffeeItems.length;
  renderCoffeeSlide();
}

renderCoffeeSlide();

nextButton.addEventListener('click', nextSlide); 
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderCoffeeSlide);