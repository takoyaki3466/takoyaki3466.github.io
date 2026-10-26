'use strict';
(function () {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gsap = window.gsap;
    if (gsap && !reduced) {
        gsap.registerPlugin(window.ScrollTrigger);
        gsap.timeline().from('.mtk-intro > *', {
            y: 28, opacity: 0, duration: .55, stagger: .09, ease: 'power2.out'
        }).from('.mtk-hero-shot', {x: 70, rotation: 6, opacity: 0, duration: .8, ease: 'back.out(1.2)'}, '-=.45');
        gsap.from('.item-chip', {
            scrollTrigger: {trigger: '.item-rail', start: 'top 80%'},
            x: -55,
            opacity: 0,
            duration: .6,
            stagger: .11,
            ease: 'power2.out'
        });
        gsap.from('.block-card', {
            scrollTrigger: {trigger: '#blocks', start: 'top 72%'},
            y: 45,
            opacity: 0,
            duration: .65,
            stagger: .12,
            ease: 'power2.out'
        });
        gsap.from('.dev-card', {
            scrollTrigger: {trigger: '.dev-grid', start: 'top 82%'},
            y: 42,
            opacity: 0,
            duration: .6,
            stagger: .1,
            ease: 'power2.out'
        });
        gsap.from('.debug-console', {
            scrollTrigger: {trigger: '.debug-console', start: 'top 86%'},
            scale: .96,
            opacity: 0,
            duration: .65,
            ease: 'back.out(1.15)'
        });
        gsap.utils.toArray('.mtk-shot').forEach((shot, index) => gsap.from(shot, {
            scrollTrigger: {
                trigger: shot, start: 'top 86%'
            }, y: 50, rotation: index % 2 ? 2 : -2, opacity: 0, duration: .72, ease: 'power2.out'
        }));
        gsap.to('.chaos-image img', {
            scrollTrigger: {
                trigger: '.chaos-stage', start: 'top bottom', end: 'bottom top', scrub: .6
            }, scale: 1.08, yPercent: 4, ease: 'none'
        });
    }
    let chaosLevel = 0;
    document.querySelectorAll('[data-balance-break]').forEach((button) => button.addEventListener('click', () => {
        chaosLevel = Math.min(6, chaosLevel + 1);
        const multiplier = 4 ** chaosLevel;
        document.querySelector('[data-chaos-message]').textContent = '警告：ゲームバランスは、いま楽しく壊れました。';
        const count = document.querySelector('[data-chaos-count]');
        if (count) count.textContent = `×${multiplier}`;
        const status = document.querySelector('[data-chaos-stage-status]');
        if (status) status.textContent = chaosLevel >= 6 ? 'GOD級：バランスという概念がログアウトしました。' : `出力上昇中：×${multiplier}`;
        if (gsap && !reduced) {
            gsap.timeline().to('.mtk-hero-shot,.chaos-image', {
                rotation: -2, scale: 1.035, duration: .16
            }).to('.mtk-hero-shot,.chaos-image', {
                rotation: 0, scale: 1, duration: .55, ease: 'elastic.out(1,.3)'
            }).fromTo('.warning', {backgroundColor: '#fff4b9'}, {
                backgroundColor: '#ffd65a', duration: .2, yoyo: true, repeat: 3
            }, 0);
            gsap.fromTo('[data-chaos-count]', {scale: .35, opacity: .2}, {
                scale: 1, opacity: 1, duration: .6, ease: 'back.out(2)'
            });
        }
        window.firePortfolioConfetti?.(['#93c94d', '#ffe56b', '#ffffff']);
        if (button.closest('.project-hero')) document.querySelector('#gallery')?.scrollIntoView({behavior: reduced ? 'auto' : 'smooth'});
    }));
    const debugEntries = [['Slot 1024 not in valid range - [0,1024)', '内部データとGUI上の見せ方を分離し、境界を一つずつ確認しました。'], ['MTKChestEntity cannot be cast to Container', 'ContainerとForgeのIItemHandlerは似ていても別物。責務を整理するきっかけになりました。'], ['Capability state: client ≠ server', 'キー入力、パケット、サーバー処理、同期の順に追い、状態の持ち主を明確にしました。'], ['Furnace progress: 0 / ?', '総精錬時間と保存先を一元化し、GUI表示と実処理の二重管理を見直しました。']];
    let debugIndex = 0;
    document.querySelector('[data-debug-next]')?.addEventListener('click', () => {
        debugIndex = (debugIndex + 1) % debugEntries.length;
        document.querySelector('[data-debug-line]').textContent = debugEntries[debugIndex][0];
        document.querySelector('[data-debug-lesson]').textContent = debugEntries[debugIndex][1];
        if (gsap && !reduced) gsap.fromTo('.debug-console code', {x: -16, opacity: 0}, {
            x: 0, opacity: 1, duration: .4, ease: 'power2.out'
        });
    });
}());
