// premium.js — à charger après script.js. Indépendant de ta logique existante.
(function () {
    // Header : se compacte légèrement dès qu'on scrolle
    var top = document.querySelector('.top');
    if (top) {
        var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 30); };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Apparition douce des sections
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(
        '.sermons-top, .sermons-grid, .join, .about-content, .programme, .galerie, .bio'
    ).forEach(function (el) {
        el.classList.add('reveal');
        io.observe(el);
    });
})();
