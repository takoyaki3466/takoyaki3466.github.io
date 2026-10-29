'use strict';
(function () {
    const anime = window.anime;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const motionEnabled = Boolean(anime && !reducedMotion);

    if (motionEnabled) {
        anime.timeline({easing: 'easeOutExpo'})
            .add({
                targets: '.anime-hero .profile-eyebrow, .hero-line, .anime-hero-lead, .hero-actions, .hero-meta',
                translateY: [32, 0], opacity: [0, 1], delay: anime.stagger(75), duration: 780
            })
            .add({
                targets: '.anime-hero-visual', translateX: [50, 0], rotate: [3, 0], scale: [.94, 1],
                opacity: [0, 1], duration: 950
            }, '-=700');

        anime({targets: '.engine-arc-a', rotate: 360, duration: 26000, loop: true, easing: 'linear'});
        anime({targets: '.engine-arc-b', rotate: -360, duration: 34000, loop: true, easing: 'linear'});
        anime({targets: '.engine-arc-c', rotate: 360, duration: 19000, loop: true, easing: 'linear'});
        anime({targets: '.engine-node', scale: [.75, 1.45], opacity: [.65, 1], delay: anime.stagger(320), duration: 1100, direction: 'alternate', loop: true, easing: 'easeInOutSine'});

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const direction = entry.target.dataset.motion || 'left';
                const x = direction.includes('right') ? 58 : direction.includes('left') ? -58 : 0;
                const flip = direction.includes('flip');
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [x, 0],
                    translateZ: flip ? [-110, 0] : [-36, 0],
                    rotateY: flip ? [direction === 'flip-left' ? -58 : 58, 0] : [direction === 'right' ? 8 : -8, 0],
                    rotateX: flip ? [7, 0] : [0, 0],
                    duration: flip ? 1050 : 820,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            });
        }, {threshold: .16});
        document.querySelectorAll('.motion-card, .section-label, .display-heading, .intro-copy').forEach((element) => observer.observe(element));
    }

    const cells = [...document.querySelectorAll('.signal-grid span')];
    const playButton = document.querySelector('[data-play-motion]');
    const status = document.querySelector('[data-playground-status]');
    playButton?.addEventListener('click', () => {
        status.textContent = 'MOTION COMPLETE / 16 NODES';
        if (!motionEnabled) return;
        anime.remove(cells);
        anime({
            targets: cells,
            scale: [.55, 1.12, .88],
            rotateZ: [0, 45, 0],
            backgroundColor: ['rgba(20, 25, 13, .08)', '#11150d', 'rgba(20, 25, 13, .08)'],
            delay: anime.stagger(55, {grid: [4, 4], from: 'center'}),
            duration: 720,
            easing: 'easeOutElastic(1, .65)'
        });
    });
}());
