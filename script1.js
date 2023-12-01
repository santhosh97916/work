alert('hello')
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('home');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});