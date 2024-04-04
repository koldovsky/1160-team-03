export function addToCart(machine) {
    const cartItemTitles = document.querySelectorAll('.cart-item h6');
    let itemExists = false;

    cartItemTitles.forEach(cartItemTitle => {
        if (cartItemTitle.textContent === machine.title) {
            const quantityInput = cartItemTitle.parentElement.parentElement.querySelector('input[type="number"]');
            const currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;
            itemExists = true;
        }
    });

    if (!itemExists) {
        // Додати новий товар у кошик
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

// Функція для виведення повідомлення
export function showAlert(message) {
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

// Функція для відправки замовлення
function submitOrder(event) {
    event.preventDefault(); // Зупиняємо стандартну дію подачі форми

    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value.trim(); // Отримуємо значення з поля імені та видаляємо зайві пробіли
    const lastName = lastNameInput.value.trim(); // Отримуємо значення з поля прізвища та видаляємо зайві пробіли
    const phone = phoneInput.value.trim(); // Отримуємо значення з поля номера телефону та видаляємо зайві пробіли

    if (name === '' || lastName === '' || phone === '') {
        alert('Будь ласка, заповніть усі поля.'); // Виводимо повідомлення про те, що усі поля мають бути заповненими
        return; // Перериваємо відправку форми, якщо хоча б одне поле порожнє
    }

    // Якщо всі поля заповнені, можна відправити замовлення на сервер або виконати інші необхідні дії
    // Наприклад, ви можете зібрати дані з корзини, інформацію про покупця та відправити замовлення на сервер
    // Або здійснити інші необхідні дії, які ви хочете виконати при оформленні замовлення

    // Наприклад, очистити корзину після успішного замовлення:
    clearCart();
}

// Додаємо форму для вводу інформації покупця
function addCustomerInfoForm() {
    const customerInfoForm = document.createElement('form');
    customerInfoForm.id = 'customer-info-form';
    customerInfoForm.addEventListener('submit', submitOrder); // Додаємо обробник подачі форми

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

    // Переназначаємо кнопки
    const closeButton = document.querySelector('.btn-close');
    closeButton.addEventListener('click', function() {
        // Закрити модальне вікно
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    });
}
