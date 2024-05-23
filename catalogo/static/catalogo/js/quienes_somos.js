document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 2000,
        once: true,
        easing: 'ease-in-out',
    });

    // GSAP animations
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.from('.animate__animated.animate__zoomIn', { opacity: 0, scale: 0, duration: 1 });
    timeline.from('.animate__animated.animate__fadeInDown', { y: -50, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.animate__animated.animate__fadeInUp', { y: 50, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.mission', { x: -100, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.vision', { x: 100, opacity: 0, duration: 1 }, "-=0.5");
    timeline.from('.value-box', { scale: 0.5, opacity: 0, stagger: 0.2, duration: 1 }, "-=0.5");

    // Efecto 3D en las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(card, { rotationY: 15, rotationX: 15, z: 10, duration: 0.3, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)' });
        });
        card.addEventListener('mouseleave', function() {
            gsap.to(card, { rotationY: 0, rotationX: 0, z: 0, duration: 0.3, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' });
        });
    });
});
