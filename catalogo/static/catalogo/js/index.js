document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    const welcomeBox = document.querySelector('.welcome-box');
    if (welcomeBox) {
        welcomeBox.addEventListener('mouseenter', () => {
            welcomeBox.style.transform = 'translateY(-10px)';
            welcomeBox.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        welcomeBox.addEventListener('mouseleave', () => {
            welcomeBox.style.transform = 'translateY(0)';
            welcomeBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const priceField = document.querySelector('input[name="precio"]');
    if (priceField) {
        priceField.addEventListener('input', function() {
            let value = parseFloat(priceField.value);
            if (isNaN(value) || value < 0) {
                priceField.value = 0;
            } else {
                priceField.value = value.toFixed(0);
            }
        });
    }

    const clearButton = document.querySelector('button[name="imagen-clear"]');
    const fileInput = document.querySelector('input[name="imagen"]');
    if (clearButton && fileInput) {
        clearButton.addEventListener('click', function() {
            fileInput.value = '';
        });
    }
});
