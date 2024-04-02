const carouselInner = document.querySelector('.coffee-machines__carousel-inner');
const prevButton = document.querySelector('.coffee-machines__carousel-prev');
const nextButton = document.querySelector('.coffee-machines__carousel-next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

function showSlide(index) {
  const slides = document.querySelectorAll('.coffee-machines__carousel-item');
  const totalSlides = slides.length;

  index = (index + totalSlides) % totalSlides;

  currentIndex = index;

  // Відміна попередньої трансформації перед оновленням, щоб уникнути здвигу при перемиканні.
  carouselInner.style.transition = 'none';
  carouselInner.style.transform = `translateX(-${index * 100}%)`;

  // Задержка для анімації переходу
  setTimeout(() => {
    carouselInner.style.transition = ''; // Повертаємо стандартну анімацію
  }, 50);
}

// Render your coffee machines dynamically here
async function fetchAndRenderCoffeeMachines() {
    try {
        const response = await fetch('api/machines.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const coffeeMachines = await response.json();
        renderCoffeeMachines(coffeeMachines);
    } catch (error) {
        console.error('Error fetching coffee machines:', error);
    }
}

function renderCoffeeMachines(coffeeMachinesList) {
    let machinesDomString = ``;
    for (const machine of coffeeMachinesList) {
        machinesDomString += `
            <div class="coffee-machines__carousel-item">
                <div class="coffee-machines__coffee-machine">
                    <a href="#" class="coffee-machines__coffee-machine-link">
                        <img class="coffee-machines__coffee-machine-img" src="${machine.image}" alt="${machine.title}">
                        <h6 class="coffee-machines__coffee-machine-title">${machine.title}</h6>
                    </a>
                    <p class="coffee-machines__coffee-machine-price">${machine.price}</p>
                    <button class="coffee-machines__coffee-machine-button">Add to Cart</button>
                </div>
            </div>
        `;
    }
    carouselInner.innerHTML = machinesDomString.repeat(3); // Повторюємо елементи, щоб забезпечити циклічність
    showSlide(coffeeMachinesList.length); // Показуємо перший елемент з середини, щоб мати можливість рухатися в обидва боки без зазору
}

fetchAndRenderCoffeeMachines();
