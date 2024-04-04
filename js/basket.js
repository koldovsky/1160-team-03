// basket.js
export function addToCart(machine) {
    const existingCartItem = document.querySelector('.cart-item h6');
    
    if (existingCartItem && existingCartItem.textContent === machine.title) {
        const quantityInput = existingCartItem.parentElement.querySelector('input[type="number"]');
        const currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
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

// Додаємо форму для вводу інформації покупця
function addCustomerInfoForm() {
    const customerInfoForm = document.createElement('form');
    customerInfoForm.id = 'customer-info-form';

    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Ім\'я:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameLabel.appendChild(nameInput);
    customerInfoForm.appendChild(nameLabel);

    const lastNameLabel = document.createElement('label');
    lastNameLabel.for = 'last-name';
    lastNameLabel.textContent = 'Прізвище:';
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.id = 'last-name';
    lastNameLabel.appendChild(lastNameInput);
    customerInfoForm.appendChild(lastNameLabel);

    const phoneLabel = document.createElement('label');
    phoneLabel.for = 'phone';
    phoneLabel.textContent = 'Номер телефону:';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.id = 'phone';
    phoneLabel.appendChild(phoneInput);
    customerInfoForm.appendChild(phoneLabel);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Замовити';
    customerInfoForm.appendChild(submitButton);

    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.appendChild(customerInfoForm);
}

addCustomerInfoForm(); // Викликаємо функцію для додавання форми
