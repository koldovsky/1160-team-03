function init() {
    import('./header.js');
    import('./hero.js');
    import('./brands-carousel.js');
    import('./testimonials-render-articles.js');
    import('./testimonials-carousel.js');
    import('./coffee-carousel-items.js');
    import('./coffee-carousel.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});