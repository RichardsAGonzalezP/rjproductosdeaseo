document.getElementById('nav-toggle').onclick = function() {
    var navContent = document.getElementById('nav-content');
    navContent.classList.toggle('hidden');
    navContent.classList.toggle('flex');
}

document.getElementById('close-nav').onclick = function() {
    var navContent = document.getElementById('nav-content');
    navContent.classList.add('hidden');
    navContent.classList.remove('flex');
}

document.querySelectorAll('#nav-content .nav-link').forEach(link => {
    link.onclick = function() {
        var navContent = document.getElementById('nav-content');
        navContent.classList.add('hidden');
        navContent.classList.remove('flex');
    }
});

// Cambiar entre el menú de hamburguesa y el menú normal basado en el tamaño de la ventana
function checkWindowSize() {
    var navContent = document.getElementById('nav-content');
    var mainNav = document.getElementById('main-nav');
    if (window.innerWidth >= 1024) {
        navContent.classList.add('hidden');
        navContent.classList.remove('flex');
        mainNav.classList.remove('hidden');
    } else {
        mainNav.classList.add('hidden');
    }
}

window.onresize = checkWindowSize;
window.onload = checkWindowSize;
