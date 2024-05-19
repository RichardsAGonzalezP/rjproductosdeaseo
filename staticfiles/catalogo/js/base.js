// base.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link, .btn-link");
    const container = document.querySelector(".container");
    const navbar = document.querySelector(".navbar");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");
            container.classList.add("page-transition-leave");
            navbar.classList.add("header-slide-up");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    window.addEventListener("pageshow", () => {
        container.classList.remove("page-transition-leave");
        container.classList.add("page-transition-enter");
        navbar.classList.remove("header-slide-up");
        navbar.classList.add("header-slide-down");
    });
});
