document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Hide loading spinner and show content when page is fully loaded
    window.addEventListener('load', function() {
        document.getElementById('loading-spinner').style.display = 'none';
        document.querySelector('.main-content').classList.remove('hidden');
    });

    // Load content with AJAX
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            loadContent(this.getAttribute('href'));
        });
    });

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                document.getElementById('main-content').innerHTML = doc.getElementById('main-content').innerHTML;
                AOS.refresh();
                window.history.pushState('', '', url);
            })
            .catch(error => console.error('Error loading content:', error));
    }
});
