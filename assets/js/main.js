'use strict';

/** フッターの年を現在年に更新します。 */
function updateCopyrightYear() {
    const currentYear = String(new Date().getFullYear());
    document.querySelectorAll('[data-current-year]').forEach((element) => {
        element.textContent = currentYear;
    });
}

updateCopyrightYear();

let confettiPromise;

function loadPortfolioConfetti() {
    if (window.confetti) return Promise.resolve(window.confetti);
    if (confettiPromise) return confettiPromise;
    confettiPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js';
        script.onload = () => resolve(window.confetti);
        script.onerror = reject;
        document.head.append(script);
    });
    return confettiPromise;
}

window.firePortfolioConfetti = async (colors = ['#ffffff', '#64ffa5', '#52c8ff']) => {
    try {
        const fire = await loadPortfolioConfetti();
        fire({
            particleCount: 150,
            spread: 95,
            startVelocity: 46,
            origin: {y: .62},
            colors,
            disableForReducedMotion: true,
            zIndex: 80
        });
    } catch (error) {
        console.warn('Confetti effect could not be loaded.', error);
    }
};
