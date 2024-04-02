async function fetchCoffeeMachines() {
    try {
        const response = await fetch('api/machines.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const coffeeMachines = await response.json();
        renderCoffeeMachines(coffeeMachines);
        initializeCarousel(); // Додаємо ініціалізацію каруселі після завантаження даних
    } catch (error) {
        console.error('Error fetching coffee machines:', error);
    }
}

function renderCoffeeMachines(coffeeMachinesList) {
    let machinesDomString = ``;
    for (const machine of coffeeMachinesList) {
        machinesDomString += `
            <div class="coffee-machine__item">
                <a href="#">
                    <img class="coffee-machine__img" src="${machine.image}" alt="${machine.title}">
                    <h6>${machine.title}</h6>
                </a>
                <p>${machine.price}</p>
                <button class="coffee-machine__button">Add to Cart</button>
            </div>
        `;
    }
    const machinesContainer = document.querySelector('.coffee-machines__items-container');
    machinesContainer.innerHTML = machinesDomString;
}

async function initializeCarousel() {
    try {
        const response = await fetch('api/coffee.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const coffeeProducts = await response.json();
        const coffeeCarousel = document.querySelector(".coffee__carousel-slides");
        let coffeeItemsC;
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
                `;
            }
            coffeeCarousel.innerHTML = coffeeDomString;
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

        const nextButton = document.querySelector(".coffee__carousel__button--right");
        const prevButton = document.querySelector(".coffee__carousel__button--left");

        nextButton.addEventListener('click', nextSlide); 
        prevButton.addEventListener('click', prevSlide);

        window.addEventListener('resize', renderCoffeeSlide);

    } catch (error) {
        console.error('Error fetching coffee products:', error);
    }
}

fetchCoffeeMachines();
