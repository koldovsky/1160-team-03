import { addToCart } from './basket.js';

async function fetchCoffeeMachines() {
    try {
        const response = await fetch('api/machines.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const coffeeMachines = await response.json();
        renderCoffeeMachines(coffeeMachines);
        initAddToCartButtons(coffeeMachines); // Передаємо дані про кавоварки у функцію
    } catch (error) {
        console.error('Error fetching coffee machines:', error);
    }
}

function renderCoffeeMachines(coffeeMachinesList) {
    let machinesDomString = ``;
    for (let i = 0; i < coffeeMachinesList.length; i++) {
        const machine = coffeeMachinesList[i];
        machinesDomString += `
            <div class="coffee-machine__item">
                <a href="#">
                    <img class="coffee-machine__img" src="${machine.image}" alt="${machine.title}">
                    <h6>${machine.title}</h6>
                </a>
                <p>${machine.price}</p>
                <button class="coffee-machine__button" data-index="${i}">Add to Cart</button>
            </div>
        `;
    }
    const machinesContainer = document.querySelector('.coffee-machines__items-container');
    machinesContainer.innerHTML = machinesDomString;
}

function initAddToCartButtons(coffeeMachines) { // Додаємо параметр coffeeMachines
    const addToCartButtons = document.querySelectorAll('.coffee-machine__button');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(coffeeMachines[index]); // Передаємо об'єкт кавоварки
        });
    });
}

fetchCoffeeMachines();
