async function fetchCoffeeMachines() {
    try {
        const response = await fetch('api/machines.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const coffeeMachines = await response.json();
        renderCoffeeMachines(coffeeMachines);
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

fetchCoffeeMachines();
