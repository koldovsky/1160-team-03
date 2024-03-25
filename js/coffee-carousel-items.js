const coffeeProducts = [
    {
        "image": "img/coffee-classico-pack.png", 
        "title": "Classico", 
        "price": "4,50USD"
    },
    {
        "image": "img/coffee-intenso-pack.png", 
        "title": "Intenso", 
        "price": "5,00USD"
    },
    {
        "image": "img/coffee-espresso-pack.png", 
        "title": "Espresso", 
        "price": "4,50USD"
    },
    {
        "image": "img/coffee-decaf-pack.png", 
        "title": "Decaf", 
        "price": "4,50USD"
    },
    {
        "image": "img/coffee-mocha-pack.png", 
        "title": "Mocha", 
        "price": "5,00USD"
    }
];

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
}

renderCoffeeItems(coffeeProducts);