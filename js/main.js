document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-vintage-cream/95', 'backdrop-blur-sm', 'shadow-md', 'py-2', 'scrolled');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('bg-vintage-cream/95', 'backdrop-blur-sm', 'shadow-md', 'py-2', 'scrolled');
            navbar.classList.add('py-4');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate will be added here as we build more sections
    document.querySelectorAll('.fade-on-scroll').forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(el);
    });
});
