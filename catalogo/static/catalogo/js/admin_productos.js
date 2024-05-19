document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
        row.classList.add('animate__animated', 'animate__fadeInUp');
        row.style.animationDelay = `${index * 0.1}s`;
    });

    const buttons = document.querySelectorAll('a, form button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('animate__animated', 'animate__pulse');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('animate__animated', 'animate__pulse');
        });
    });
});
