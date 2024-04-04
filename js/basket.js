// basket.js
export function addToCart(machine) {
    const existingCartItem = document.querySelector('.cart-item h6');
    
    if (existingCartItem && existingCartItem.textContent === machine.title) {
        const quantityInput = existingCartItem.parentElement.querySelector('input[type="number"]');
        const currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;

        showAlert('Товар додано до корзини!');
    } else {
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

        showAlert('Товар додано до корзини!');
    }

    updateTotalPrice(); // Оновлюємо загальну ціну після додавання товару
}

// Функція для видалення товару з корзини
export function removeFromCart(cartItem) {
    cartItem.remove();
    updateTotalPrice(); // Оновлюємо загальну ціну після видалення товару
}

// Функція для оновлення загальної ціни
export function updateTotalPrice() {
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

// Функція для виведення повідомлення
function showAlert(message) {
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert', 'alert-success');
    alertMessage.textContent = message;

    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.insertBefore(alertMessage, cartContainer.firstChild);

    // Через 3 секунди прибираємо повідомлення
    setTimeout(function() {
        alertMessage.remove();
    }, 3000);
}
