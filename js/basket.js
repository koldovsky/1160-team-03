// Функція для додавання товару в корзину
function addToCart(machine) {
    const cartItemsContainer = document.querySelector('.modal-body .container');
    const totalPriceElement = document.querySelector('.modal-footer .total-price');
    const alertContainer = document.querySelector('.alert-container');

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

    // Відобразити вспливаюче повідомлення
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show');
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
        Товар <strong>${machine.title}</strong> успішно доданий до корзини!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    `;
    alertContainer.appendChild(alert);

    // Прибрати повідомлення через деякий час
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Додати обробник подій для кнопок "Add to Cart"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('coffee-machine__button')) {
        const machineIndex = event.target.dataset.index;
        addToCart(coffeeMachinesList[machineIndex]);
    }
});

// Додати обробник події показу модального вікна корзини
$('#cartModal').on('show.bs.modal', function () {
    $('body').addClass('modal-open-noscroll');
});

// Додати обробник події приховування модального вікна корзини
$('#cartModal').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open-noscroll');
});
