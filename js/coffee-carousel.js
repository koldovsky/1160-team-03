const response = await fetch('api/coffee.json');
const coffeeProducts = await response.json();
const coffeeCarousel = document.querySelector(".coffee__carousel-slides");
let coffeeItemsC;
const nextButton = document.querySelector(".coffee__carousel__button--right");
const prevButton = document.querySelector(".coffee__carousel__button--left");


function renderCoffeeItems(coffeeItems){
  let coffeeDomString = ``;
  for (const coffeeItem of coffeeItems) {
      coffeeDomString += `
      <article class="coffee__carousel-slide">
          <a href="#" class="coffee__carousel-link-img">
            <img src="${coffeeItem.image}" alt="Coffee ${coffeeItem.title}" />
          </a>
          <a href="#" class="coffee__carousel-link-title">
            <h3 class="coffee__carousel-title">${coffeeItem.title}</h3>
          </a>
          <p class="coffee__carouser-text-price">${coffeeItem.price}</p>
          <button class="coffee__carousel-button primary-accent-button">
            Add to Cart
          </button>
        </article>
      `
  }
  const productsContainer = document.querySelector('.coffee__carousel-slides');
  productsContainer.innerHTML = coffeeDomString;
  coffeeItemsC = Array.from(document.getElementsByClassName("coffee__carousel-slide"));
}

renderCoffeeItems(coffeeProducts);

let currentCoffeeSlideIdx = 0;


function renderCoffeeSlide() {
    coffeeCarousel.innerHTML = ""; 
    coffeeCarousel.appendChild(coffeeItemsC[currentCoffeeSlideIdx]);
    if (window.matchMedia("(min-width:768px)").matches) {
      const secondCoffeeSlideIdx = (currentCoffeeSlideIdx + 1) % coffeeItemsC.length;
      coffeeCarousel.appendChild(coffeeItemsC[secondCoffeeSlideIdx]);
      if (window.matchMedia("(min-width:1024px)").matches) {
        const thirdCoffeeSlideIdx = (currentCoffeeSlideIdx + 2) % coffeeItemsC.length;
        coffeeCarousel.appendChild(coffeeItemsC[thirdCoffeeSlideIdx]);
        const fourthCoffeeSlideIdx = (currentCoffeeSlideIdx + 3) % coffeeItemsC.length;
        coffeeCarousel.appendChild(coffeeItemsC[fourthCoffeeSlideIdx]);
      }
    }
}


function nextSlide() {
  currentCoffeeSlideIdx = (currentCoffeeSlideIdx + 1) % coffeeItemsC.length;
  renderCoffeeSlide();
}
  
function prevSlide() {
  currentCoffeeSlideIdx = (currentCoffeeSlideIdx - 1 + coffeeItemsC.length) % coffeeItemsC.length;
  renderCoffeeSlide();
}


renderCoffeeSlide();

nextButton.addEventListener('click', nextSlide); 
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderCoffeeSlide);