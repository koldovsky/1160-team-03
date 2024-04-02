const coffeeMachines = await fetch('api/machines.json');
const articles = await coffeeMachines.json();;

function renderCoffeeMachines(coffeeMachinesList){
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

renderCoffeeMachines(coffeeMachines);