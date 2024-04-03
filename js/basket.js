// basket.js

// Масив для зберігання товарів у корзині
let cart = [];

// Функція для додавання товару у корзину
function addToCart(machineIndex) {
    const machine = coffeeMachines[machineIndex];
    cart.push(machine);
    updateCartUI();
}

// Функція для видалення товару з корзини за індексом
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Функція для оновлення відображення корзини на сторінці
function updateCartUI() {
    const cartContainer = document.querySelector('.modal-body .container');
    let cartDomString = '';
    cart.forEach((item, index) => {
        cartDomString += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h6>${item.title}</h6>
                    <p>${item.price}</p>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });
    cartContainer.innerHTML = cartDomString;
}

// Функція для обробки оформлення замовлення
function checkout() {
    // Тут можна додати логіку для оформлення замовлення, наприклад, відправка даних на сервер
    // Після успішного оформлення можна очистити корзину і відобразити відповідне повідомлення
    cart = [];
    updateCartUI();
    alert('Your order has been placed successfully!');
}

// Обробник події для кнопки "Оформити замовлення"
const checkoutButton = document.querySelector('.modal-footer .btn-primary');
checkoutButton.addEventListener('click', checkout);

// Обробник події для кнопок "Add to Cart"
const addToCartButtons = document.querySelectorAll('.coffee-machine__button');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(index);
    });
});
