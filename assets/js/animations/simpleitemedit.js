import {animate, inView, stagger} from 'https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const editorImage = document.querySelector('[data-editor-image]');
const editorCaption = document.querySelector('[data-editor-caption]');
document.querySelectorAll('[data-edit]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-edit]').forEach((item) => item.setAttribute('aria-selected', 'false'));
    button.setAttribute('aria-selected', 'true');
    editorImage.src = `../../assets/images/simpleitemedit/${button.dataset.image}`;
    editorImage.alt = button.dataset.alt;
    editorCaption.textContent = button.dataset.preview;
    if (!reduced) animate(editorImage, {opacity: [.35, 1], scale: [.96, 1]}, {duration: .38});
}));
document.querySelectorAll('[data-compare-image]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-compare-image]').forEach((item) => item.setAttribute('aria-selected', 'false'));
    button.setAttribute('aria-selected', 'true');
    const image = document.querySelector('[data-compare-preview]');
    image.src = `../../assets/images/simpleitemedit/${button.dataset.compareImage}`;
    image.alt = button.dataset.alt;
    document.querySelector('[data-compare-caption]').textContent = button.dataset.caption;
    if (!reduced) animate(image, {opacity: [.3, 1], x: [18, 0]}, {duration: .4});
}));
document.querySelector('[data-combine-demo]')?.addEventListener('click', () => {
    document.querySelector('[data-combine-status]').textContent = '合成成功：同じ本が1段階上の本になりました。結果は設定上限も確認します。';
    if (!reduced) animate('[data-book-result]', {
        scale: [1, 1.16, 1], rotate: [0, -3, 0], opacity: [.5, 1]
    }, {duration: .65});
    window.firePortfolioConfetti?.(['#2b8da5', '#65d8ef', '#ffffff']);
});
if (!reduced) {
    animate('.project-hero .container > *', {opacity: [0, 1], y: [28, 0]}, {duration: .62, delay: stagger(.1)});
    inView('.motion-reveal', (element) => {
        animate(element, {opacity: [0, 1], y: [35, 0]}, {duration: .55});
    }, {amount: .18});
    inView('.enchant-flow', (element) => {
        animate(element.querySelectorAll('li'), {opacity: [0, 1], y: [28, 0]}, {duration: .48, delay: stagger(.1)});
    }, {amount: .25});
    inView('.enchant-grid', (element) => {
        animate(element.querySelectorAll('.enchant-card'), {opacity: [0, 1], scale: [.96, 1]}, {
            duration: .5, delay: stagger(.12)
        });
    }, {amount: .2});
}
