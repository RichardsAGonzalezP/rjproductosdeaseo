document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clear-image-btn').addEventListener('click', function() {
        document.getElementById('id_imagen-clear').checked = true;
        document.getElementById('id_imagen').value = '';
        document.getElementById('id_imagen').style.display = 'block';
    });
});
