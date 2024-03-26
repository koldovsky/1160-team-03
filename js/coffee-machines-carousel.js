const coffeeMachines = [
    {
        "image": "img/coffeemachines0.png", 
        "title": "SMIK Coffe machines", 
        "price": "199,00USD"
    },
    {
        "image": "img/coffeemachines1.png", 
        "title": "La Spezia Coffee Machine", 
        "price": "499,00USD"
    },
    {
        "image": "img/coffeemachines2.png", 
        "title": "FROST Coffee Machine", 
        "price": "199,00USD"
    },
    {
        "image": "img/coffeemachines3.png", 
        "title": "SMIK 2 Coffee Machine", 
        "price": "299,00USD"
    }
];

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