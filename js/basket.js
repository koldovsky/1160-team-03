// Функція для додавання товару в корзину
function addToCart(machine) {
    const cartItemsContainer = document.querySelector('.modal-body .container');
    const totalPriceElement = document.querySelector('.modal-footer .total-price');

    // Додати товар в список корзини
    const cartItem = document.createElement('div');
    cartItem.classList.add('row', 'mb-2');
    cartItem.innerHTML = `
        <div class="col-8">${machine.title}</div>
        <div class="col-4 text-right">${machine.price}</div>
    `;
    cartItemsContainer.appendChild(cartItem);

    // Оновити загальну суму
    const totalPrice = parseFloat(totalPriceElement.textContent) + parseFloat(machine.price);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Додати обробник подій для кнопок "Add to Cart"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('coffee-machine__button')) {
        const machineIndex = event.target.dataset.index;
        addToCart(coffeeMachinesList[machineIndex]);
    }
});

// Перемістити код для показу/приховування модального вікна поза цим файлом, оскільки він вже є в HTML-файлі.
