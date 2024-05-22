// GSAP animations for the index page
document.addEventListener('DOMContentLoaded', function() {
    gsap.from('.home-banner img', { duration: 1, opacity: 0, scale: 0.5, ease: 'back' });
    gsap.from('.home-banner h1', { duration: 1, opacity: 0, y: -50, delay: 0.5, ease: 'power2' });
    gsap.from('.home-banner p', { duration: 1, opacity: 0, y: 50, delay: 0.7, ease: 'power2' });
    gsap.from('.product-card', {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 1,
        stagger: 0.2,
        ease: 'power2'
    });
});
