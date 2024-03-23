const articles = [
    {
        "image": "../img/testimonials/testimonials-person-1.webp",
        "title": "Josh Mendel",
        "description": "I really love to drink coffee in the morning, but I hate making it. Therefore, I decided to rent a coffee machine from this company. I am very pleased with the service - everything was done quickly, they brought and set up the coffee machine.”",
        "date": "December 15, 2021"
    },
    {
        "image": "../img/testimonials/testimonials-person-2.webp",
        "title": "Jessica Malacks",
        "description": "“We have renovated the office kitchen and decided to delight our employees with automatic coffee machines. However, such equipment is very expensive. So, we simply rented coffee machines from this company and were completely satisfied.”",
        "date": "February 10, 2022"
    },
    {
        "image": "../img/testimonials/testimonials-person-3.webp",
        "title": "Daniella Williamson",
        "description": "“When I opened a coffee shop, I couldn't find an affordable coffee machine. Finally, I found this company and I am grateful for their excellent advice. They helped with the choice of the coffee machine and regularly deliver coffee beans and cups.”",
        "date": "March 04, 2022"
    },
    {
        "image": "../img/testimonials/testimonials-person-4.webp",
        "title": "Dean Steinberg",
        "description": "“We have been cooperating with this company for 2 years already, and during this time, not a single problem situation has arisen. The service is fast, the coffee is delivered without delay, the prices for coffee machine rental are very low.”",
        "date": "March 22, 2022"
    }
]

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