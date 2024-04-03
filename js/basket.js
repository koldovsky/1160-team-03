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
    });
    cartItemDetails.appendChild(removeButton);

    cartItem.appendChild(cartItemDetails);

    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.appendChild(cartItem);
}

// Функція для видалення товару з корзини
function removeFromCart(cartItem) {
    cartItem.remove();
}

// Функція для оформлення замовлення
function checkout() {
    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.innerHTML = ''; // Очищення корзини

    // Додавання загальної ціни
    const totalPrice = document.createElement('p');
    totalPrice.textContent = 'Total Price: '; // Потрібно додати логіку для обчислення загальної ціни
    cartContainer.appendChild(totalPrice);

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

    const surnameLabel = document.createElement('label');
    surnameLabel.textContent = 'Surname:';
    orderForm.appendChild(surnameLabel);

    const surnameInput = document.createElement('input');
    surnameInput.type = 'text';
    surnameInput.name = 'surname';
    orderForm.appendChild(surnameInput);

    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone:';
    orderForm.appendChild(phoneLabel);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    orderForm.appendChild(phoneInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Place Order';
    orderForm.appendChild(submitButton);

    cartContainer.appendChild(orderForm);
}

// Додавання обробника події для кнопки "Оформити замовлення"
const checkoutButton = document.querySelector('.modal-footer .btn-primary');
if (checkoutButton) {
    checkoutButton.addEventListener('click', checkout);
}
