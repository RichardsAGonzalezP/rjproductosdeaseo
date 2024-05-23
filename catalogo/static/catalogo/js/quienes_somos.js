document.addEventListener('DOMContentLoaded', function() {
    // Desactivar la posición de desplazamiento en la recarga
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    AOS.init({
        duration: 2000,
        once: true,
        easing: 'ease-in-out',
    });

    // GSAP animations
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.from('.logo', { opacity: 0, scale: 0, duration: 1 });
    timeline.from('.animate__fadeInDown', { y: -20, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.animate__fadeInUp', { y: 20, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.mission', { x: -50, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.vision', { x: 50, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.value-box', { scale: 0.8, opacity: 0, stagger: 0.2, duration: 1 }, "-=0.5");

    // Animación constante para el logo
    gsap.to('.logo', {
        y: -5,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    // Efecto suave en las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(card, { scale: 1.03, duration: 0.5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' });
        });
        card.addEventListener('mouseleave', function() {
            gsap.to(card, { scale: 1, duration: 0.5, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' });
        });
    });
});
