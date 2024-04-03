export function addToCart(machineIndex) {
    const machine = coffeeMachines[machineIndex];

function addToCart(machine) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const cartItemImg = document.createElement('img');
    cartItemImg.src = machine.image;
    cartItemImg.alt = machine.title;
    cartItem.appendChild(cartItemImg);

    const cartItemDetails = document.createElement('div');
    cartItemDetails.classList.add('cart-item-details');

    const cartItemTitle = document.createElement('h6');
    cartItemTitle.textContent = machine.title;
    cartItemDetails.appendChild(cartItemTitle);

    const cartItemPrice = document.createElement('p');
    cartItemPrice.textContent = machine.price;
    cartItemDetails.appendChild(cartItemPrice);

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


function removeFromCart(cartItem) {
    cartItem.remove();
}

function checkout() {
 
    const cartContainer = document.querySelector('.modal-body .container');
    cartContainer.innerHTML = ''; // Очистити корзину
    alert('Your order has been placed successfully!');
}

const checkoutButton = document.querySelector('.modal-footer .btn-primary');
if (checkoutButton) {
    checkoutButton.addEventListener('click', checkout);
}}
