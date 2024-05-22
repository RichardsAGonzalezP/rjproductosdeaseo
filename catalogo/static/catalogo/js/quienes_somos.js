document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".main-title", {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".main-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
    });

    gsap.from(".description-text", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".description-text",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
    });

    gsap.from(".card", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
    });
});
