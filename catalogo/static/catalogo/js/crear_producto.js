// archivo: static/catalogo/js/crear_productos.js
document.addEventListener('DOMContentLoaded', function() {
    const precioInput = document.querySelector('input[name="precio"]');

    precioInput.addEventListener('input', function() {
        if (precioInput.value < 0) {
            precioInput.value = 0;
        }
    });
});
