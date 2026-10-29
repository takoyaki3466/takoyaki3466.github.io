'use strict';
(function () {
    const gsap = window.gsap;
    const scrollTrigger = window.ScrollTrigger;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!gsap || reducedMotion) return;

    if (scrollTrigger) gsap.registerPlugin(scrollTrigger);

    const intro = gsap.timeline({defaults: {ease: 'power3.out'}});
    const entrances = [
        {x: -105, y: -82}, {x: 0, y: 120}, {x: 100, y: -72},
        {x: -125, y: 0}, {x: 88, y: 90}, {x: 0, y: -115},
        {x: 120, y: 0}, {x: -82, y: 94}, {x: 96, y: -105},
        {x: -112, y: -38}, {x: 70, y: 116}
    ];
    intro.from('.home-eyebrow', {y: 18, autoAlpha: 0, duration: .6})
        .from('.home-title-char-inner', {
            x: (index) => entrances[index % entrances.length].x,
            y: (index) => entrances[index % entrances.length].y,
            rotationX: (index) => entrances[index % entrances.length].y < 0 ? -110 : 110,
            rotationY: (index) => entrances[index % entrances.length].x < 0 ? -105 : 105,
            scale: .64,
            autoAlpha: 0,
            duration: .78,
            stagger: {each: .075, from: 'center'},
            transformOrigin: '50% 50%',
            ease: 'back.out(2)'
        }, '-=.12')
        .from('.home-hero-description, .home-cta, .home-hero-meta', {y: 20, autoAlpha: 0, duration: .6, stagger: .1}, '-=.45');

    if (scrollTrigger) {
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.from(card, {
                y: 44,
                autoAlpha: 0,
                duration: .75,
                delay: (index % 3) * .08,
                ease: 'power3.out',
                scrollTrigger: {trigger: card, start: 'top 90%', once: true}
            });
        });

        gsap.from('.home-about-card', {
            x: 55,
            autoAlpha: 0,
            duration: .8,
            ease: 'power3.out',
            scrollTrigger: {trigger: '.home-about-section', start: 'top 90%', once: true}
        });
    }
}());

