function init() {
    import('./header.js');
    import('./basket.js');
    import('./hero.js');
    import('./brands-carousel.js');
    import('./coffee-machines-carousel.js');
    import('./services.js');
    import('./testimonials-carousel.js');
    import('./coffee-carousel.js');
    import('./footer.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});