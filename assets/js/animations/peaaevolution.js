'use strict';
(function () {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const anime = window.anime;
    if (anime && !reduced) {
        anime.timeline({easing: 'easeOutExpo'}).add({
            targets: '.anime-hero > *', translateY: [28, 0], opacity: [0, 1], delay: anime.stagger(90), duration: 700
        }).add({
            targets: '.anime-hero-image', translateX: [70, 0], rotate: [4, 0], opacity: [0, 1], duration: 850
        }, '-=650');
        const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            anime({targets: entry.target, translateY: [35, 0], opacity: [0, 1], duration: 650, easing: 'easeOutCubic'});
            observer.unobserve(entry.target);
        }), {threshold: .12});
        document.querySelectorAll('.anime-reveal').forEach((element) => observer.observe(element));
    }
    const buttons = [...document.querySelectorAll('[data-grade]')];
    const panels = [...document.querySelectorAll('[data-grade-panel]')];
    const show = (grade) => {
        buttons.forEach((button) => button.setAttribute('aria-selected', String(button.dataset.grade === grade)));
        panels.forEach((panel) => {
            panel.hidden = panel.dataset.gradePanel !== grade;
        });
        if (anime && !reduced) anime({
            targets: `[data-grade-panel="${grade}"]`,
            opacity: [0, 1],
            translateX: [24, 0],
            duration: 520,
            easing: 'easeOutCubic'
        });
    };
    buttons.forEach((button) => button.addEventListener('click', () => show(button.dataset.grade)));
    show('mk1');
    let charge = 0;
    document.querySelector('[data-energy-pulse]')?.addEventListener('click', () => {
        charge = charge >= 100 ? 0 : Math.min(100, charge + 25);
        document.querySelector('[data-energy-status]').textContent = charge === 100 ? 'EMC CHARGE 100% — Ultimate AEGU、起動。' : `EMC CHARGE ${charge}% — もう一度クリック`;
        if (anime && !reduced) {
            anime({targets: '[data-energy-fill]', width: `${charge}%`, duration: 520, easing: 'easeOutCubic'});
            anime({
                targets: ['.grade-selector button', '.hero-shot'],
                scale: [1, 1.045, 1],
                filter: ['brightness(1)', 'brightness(1.25)', 'brightness(1)'],
                delay: anime.stagger(60),
                duration: 620,
                easing: 'easeInOutSine'
            });
        } else document.querySelector('[data-energy-fill]').style.width = `${charge}%`;
        if (charge === 100) window.firePortfolioConfetti?.(['#7551b2', '#d693ff', '#ffffff']);
    });
}());
