const response = await fetch('api/testimonials.json');
const articles = await response.json();
const slideContainer = document.querySelector('.testimonials__carousel');
const slides = document.getElementsByClassName('testimonials__carousel-item');
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');

function renderArticles(articles) {
  let articlesDomString = ``;
  for (const article of articles) {
    articlesDomString += `
    <article class="testimonials__carousel-item">
      <div class="testimonials_carousel-item-image">
        <img src="${article.image}" alt="Photo of ${article.title}">
      </div>
      <p class="testimonials__carousel-item-name">${article.title}</p>
      <p class="testimonials__carousel-item-feedback">${article.description}</p>
      <p class="testimonials__carousel-item-date">${article.date}</p>
    </article>`
  }
  const articlesContainer = document.querySelector('.testimonials__carousel');
  articlesContainer.innerHTML = articlesDomString;
}

renderArticles(articles);

function hideSlides(slides) {
  for (const slide of slides) {
    slide.classList.add('hidden');
  }
}

function renderSlides() {
  hideSlides(slides);
  slides[0].classList.remove('hidden');
  if (window.matchMedia('(min-width: 768px)').matches) {
    slides[1].classList.remove('hidden');
  }
  if (window.matchMedia('(min-width: 991px)').matches) {
    slides[2].classList.remove('hidden');
  }
}

function nextSlide() {
  slideContainer.appendChild(slides[0]);
  renderSlides();
}

function prevSlide() {
  slideContainer.insertBefore(slides[slides.length - 1], slides[0]);
  renderSlides();
}

renderSlides();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlides);
