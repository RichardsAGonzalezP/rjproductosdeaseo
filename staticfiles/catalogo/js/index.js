// index.js
$(document).ready(function(){
    // Animación para mostrar los productos uno a uno
    $(".product-item").hide().each(function(index) {
        $(this).delay(index * 500).fadeIn(1000);
    });
});
