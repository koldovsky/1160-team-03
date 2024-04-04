// Функція для додавання товару у корзину
export function addToCart(machine) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const cartItemDetails = document.createElement('div');
    cartItemDetails.classList.add('cart-item-details');

    const cartItemTitle = document.createElement('h6');
    cartItemTitle.textContent = machine.title;
    cartItemDetails.appendChild(cartItemTitle);

    const cartItemPrice = document.createElement('p');
    cartItemPrice.textContent = machine.price;
    cartItemDetails.appendChild(cartItemPrice);

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.min = '1';
    quantityInput.value = '1'; // Початкова кількість товару
    cartItemDetails.appendChild(quantityInput);

    const removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        removeFromCart(cartItem);
        updateTotalPrice(); // Оновлюємо загальну ціну після видалення товару
    });
    cartItemDetails.appendChild(removeButton);

    cartItem.appendChild(cartItemDetails);

    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.appendChild(cartItem);

    updateTotalPrice(); // Оновлюємо загальну ціну після додавання товару
}

// Функція для видалення товару з корзини
function removeFromCart(cartItem) {
    cartItem.remove();
}

// Функція для оновлення загальної ціни
function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    cartItems.forEach(cartItem => {
        const priceElement = cartItem.querySelector('.cart-item-details p');
        const price = parseFloat(priceElement.textContent); // Перетворюємо ціну у число
        const quantityInput = cartItem.querySelector('input[type="number"]');
        const quantity = parseInt(quantityInput.value); // Отримуємо кількість товару

        totalPrice += price * quantity; // Додаємо вартість товару до загальної ціни
    });

    const totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.textContent = 'Total Price: ' + totalPrice.toFixed(2); // Виводимо загальну ціну з двома знаками після коми
}

function checkout() {
    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.innerHTML = ''; // Очищення корзини

    // Додавання форми для інформації про замовлення
    const orderForm = document.createElement('form');
    orderForm.classList.add('order-form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    orderForm.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    orderForm.appendChild(nameInput);
    
    orderForm.appendChild(document.createElement('br')); // Додаємо абзаци після Name

    const surnameLabel = document.createElement('label');
    surnameLabel.textContent = 'Surname:';
    orderForm.appendChild(surnameLabel);

    const surnameInput = document.createElement('input');
    surnameInput.type = 'text';
    surnameInput.name = 'surname';
    orderForm.appendChild(surnameInput);

    orderForm.appendChild(document.createElement('br')); // Додаємо абзаци після Surname

    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone:';
    orderForm.appendChild(phoneLabel);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    orderForm.appendChild(phoneInput);

    orderForm.appendChild(document.createElement('br')); // Додаємо абзаци після Phone

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Place Order';
    orderForm.appendChild(submitButton);

    cartContainer.appendChild(orderForm);
}
