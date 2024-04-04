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
        quantityInput.value = '1';
        cartItemDetails.appendChild(quantityInput);

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeFromCart(cartItem);
            updateTotalPrice();
        });
        cartItemDetails.appendChild(removeButton);

        cartItem.appendChild(cartItemDetails);

        const cartContainer = document.querySelector('.modal-body .container');
        cartContainer.appendChild(cartItem);
    }

    updateTotalPrice();
}

export function removeFromCart(cartItem) {
    cartItem.remove();
    updateTotalPrice();
}

export function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    cartItems.forEach(cartItem => {
        const priceElement = cartItem.querySelector('.cart-item-details p');
        const price = parseFloat(priceElement.textContent);
        const quantityInput = cartItem.querySelector('input[type="number"]');
        const quantity = parseInt(quantityInput.value);

        totalPrice += price * quantity;
    });

    const totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.textContent = 'Total Price: ' + totalPrice.toFixed(2);
}

export function showAlert(message) {
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('alert', 'alert-success');
    alertMessage.textContent = message;

    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.insertBefore(alertMessage, cartContainer.firstChild);

    setTimeout(function() {
        alertMessage.remove();
    }, 3000);
}

function submitOrder(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === '' || lastName === '' || phone === '') {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    clearCart();
}

function addCustomerInfoForm() {
    const customerInfoForm = document.createElement('form');
    customerInfoForm.id = 'customer-info-form';
    customerInfoForm.addEventListener('submit', submitOrder);

    customerInfoForm.appendChild(document.createElement('br'));

    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Ім\'я:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameLabel.appendChild(nameInput);
    customerInfoForm.appendChild(nameLabel);

    customerInfoForm.appendChild(document.createElement('br'));

    const lastNameLabel = document.createElement('label');
    lastNameLabel.for = 'last-name';
    lastNameLabel.textContent = 'Прізвище:';
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.id = 'last-name';
    lastNameLabel.appendChild(lastNameInput);
    customerInfoForm.appendChild(lastNameLabel);

    customerInfoForm.appendChild(document.createElement('br'));

    const phoneLabel = document.createElement('label');
    phoneLabel.for = 'phone';
    phoneLabel.textContent = 'Номер телефону:';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.id = 'phone';
    phoneLabel.appendChild(phoneInput);
    customerInfoForm.appendChild(phoneLabel);

    customerInfoForm.appendChild(document.createElement('br'));

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Замовити';
    customerInfoForm.appendChild(submitButton);

    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.appendChild(customerInfoForm);
}

addCustomerInfoForm();

function clearCart() {
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(cartItem => {
        cartItem.remove();
    });

    updateTotalPrice();
}
