'use strict';

const imageBase = '../../../assets/images/mojibattleex/characters/';

const mainCharacters = [{
    id: 'kabushiki',
    name: '株式会社',
    image: 'kabushiki.png',
    description: '会社を増やし、時間をかけて必殺技を強くする成長型。',
    accent: '#64ffa5',
    glyph: '㍿'
}, {
    id: 'hiragana-i',
    name: 'い',
    image: 'hiragana-i.png',
    description: '低めの単発火力と引き換えに、広い範囲を制圧します。',
    accent: '#52c8ff',
    glyph: 'い'
}, {
    id: 'integral',
    name: '積分',
    image: 'integral.png',
    description: '数式攻撃を連続で展開し、必殺技を徐々に蓄積します。',
    accent: '#b58cff',
    glyph: '∫'
}, {
    id: 'one',
    name: '1',
    image: 'one.png',
    description: 'HPを消費して高火力を出し、瀕死になるほど強くなる上級者向けです。',
    accent: '#ff5b58',
    glyph: '1'
}, {
    id: 'd',
    name: 'D',
    image: 'd.png',
    description: '高速移動と素早い弾、敵をスタンさせる車で主導権を取ります。',
    accent: '#52c8ff',
    glyph: 'D'
}, {
    id: 'kilometer',
    name: 'キロ',
    image: 'kilometer.png',
    description: '一気に距離を詰め、八方向への攻撃で乱戦を崩します。',
    accent: '#ffb13d',
    glyph: '㌔'
}, {
    id: 'short',
    name: '短',
    image: 'short.png',
    description: '狭いスタン攻撃から巨大な落下攻撃へつなぐ技巧型です。',
    accent: '#ff803d',
    glyph: '短'
}, {
    id: 'star-struck',
    name: 'スター',
    image: 'star-struck.png',
    description: '短いクールタイムと大量の隕石で手数を押しつけます。',
    accent: '#ffe45d',
    glyph: '★'
}, {
    id: 'a',
    name: 'A',
    image: 'a.png',
    description: '全方向攻撃と、必殺技で増え続ける家族を使う召喚型です。',
    accent: '#64ffa5',
    glyph: 'A'
}, {
    id: 'biang',
    name: 'ビャン',
    image: 'biang.png',
    description: '麺の拘束から巨大スプーンへつなぎ、継続ダメージも狙います。',
    accent: '#ffb13d',
    glyph: '𰻞'
}, {
    id: 'ha',
    name: 'は',
    image: 'ha.png',
    description: '自己強化から防御無視の寿司連射へつなぐ必殺重視型です。',
    accent: '#ff6f91',
    glyph: 'は'
}, {
    id: 'heisei',
    name: '平成',
    image: 'heisei.png',
    description: '敵味方へ相場効果を起こし、蓄積した札束をまとめて爆発させます。',
    accent: '#ffe45d',
    glyph: '㍻'
}, {
    id: 'zan',
    name: '斬',
    image: 'zan.png',
    description: '敵を中央へ集め、全体斬撃と領域「天」で戦場を制圧します。',
    accent: '#ff5b58',
    glyph: '斬'
}, {
    id: 'beast',
    name: '獣',
    image: 'beast.png',
    description: '吸血しながら近距離で暴れ、累計ダメージに応じて進化します。',
    accent: '#e96cff',
    glyph: '獣'
}, {
    id: 'east',
    name: '東',
    image: 'east.png',
    description: '位置交換と点対称転移で敵の配置を崩す、座標操作型です。',
    accent: '#52c8ff',
    glyph: '東'
}, {
    id: 'crab',
    name: '蟹',
    image: 'crab.png',
    description: '横方向の奇襲、位置交換、会心弾幕を使う変則型です。',
    accent: '#ff803d',
    glyph: '蟹'
}];

const supportCharacters = [{
    id: 't', name: 'T', image: 't.png', description: '攻撃力と会心率を高める攻撃支援。', accent: '#ff5b58', glyph: 'T'
}, {
    id: 'zero',
    name: '0',
    image: 'zero.png',
    description: '回復と弱体解除を持つ防御支援。',
    accent: '#52c8ff',
    glyph: '0'
}, {
    id: 'slash',
    name: '/',
    image: 'slash.png',
    description: '追加ダメージと広域斬撃を与える火力支援。',
    accent: '#ff803d',
    glyph: '/'
}, {
    id: 'right',
    name: '右',
    image: 'right.png',
    description: '減速と右方向への転移で位置を制御します。',
    accent: '#52c8ff',
    glyph: '右'
}, {
    id: 'matsu',
    name: '松',
    image: 'matsu.png',
    description: '引き寄せ、クールダウン短縮、交通オブジェクトで戦場を乱します。',
    accent: '#64ffa5',
    glyph: '松'
}, {
    id: 'maki',
    name: '薪',
    image: 'maki.png',
    description: '高速列車と全員集合で、戦況を強制的に動かします。',
    accent: '#ffb13d',
    glyph: '薪'
}, {
    id: 'south',
    name: '南',
    image: 'south.png',
    description: '次の被ダメージを増やす印と、点対称転移を使います。',
    accent: '#b58cff',
    glyph: '南'
}, {
    id: 'flower',
    name: '花',
    image: 'flower.png',
    description: '継続回復と攻撃速度上昇を提供する持久戦向け支援です。',
    accent: '#ff6f91',
    glyph: '花'
}];

const stage = document.querySelector('.selector-stage');
const stageCharacter = document.querySelector('[data-stage-character]');
const stageImage = document.querySelector('[data-stage-image]');
const stageName = document.querySelector('[data-stage-name]');
const stageDescription = document.querySelector('[data-stage-description]');
const stageType = document.querySelector('[data-stage-type]');
const stageNumber = document.querySelector('[data-stage-number]');
const stageWatermark = document.querySelector('[data-stage-watermark]');
let activeType = 'main';
let activeIndex = 0;

const lists = {main: mainCharacters, support: supportCharacters};
const rosterElements = {
    main: document.querySelector('[data-roster="main"]'), support: document.querySelector('[data-roster="support"]')
};

function renderRoster(type) {
    const roster = rosterElements[type];
    lists[type].forEach((character, index) => {
        const button = document.createElement('button');
        button.className = 'character-card';
        button.type = 'button';
        button.dataset.character = character.id;
        button.dataset.index = String(index);
        button.style.setProperty('--card-accent', character.accent);
        button.setAttribute('aria-label', `${character.name}を選択`);
        button.innerHTML = `<img src="${imageBase}${character.image}" alt=""><span class="character-name"><strong>${character.name}</strong><small>${String(index + 1).padStart(2, '0')}</small></span>`;
        button.addEventListener('click', () => selectCharacter(type, index, true));
        roster.append(button);
    });
}

function selectCharacter(type, index, updateHash = false) {
    const characters = lists[type];
    const character = characters[index];
    if (!character) return;
    activeType = type;
    activeIndex = index;
    document.querySelectorAll('.character-card').forEach((card) => card.classList.remove('is-selected'));
    const selected = rosterElements[type].querySelector(`[data-index="${index}"]`);
    selected?.classList.add('is-selected');
    stage.style.setProperty('--stage-accent', character.accent);
    stage.style.setProperty('--stage-hue', `${index * 17}deg`);
    stageImage.src = imageBase + character.image;
    stageImage.alt = character.name;
    stageName.textContent = character.name;
    stageDescription.textContent = character.description;
    stageType.textContent = type === 'main' ? 'MAIN CHARACTER' : 'SUPPORT CHARACTER';
    stageNumber.textContent = `${String(index + 1).padStart(2, '0')} / ${String(characters.length).padStart(2, '0')}`;
    stageWatermark.textContent = character.glyph;
    stageCharacter.classList.remove('is-entering');
    requestAnimationFrame(() => stageCharacter.classList.add('is-entering'));
    if (updateHash) history.replaceState(null, '', `#${character.id}`);
}

function activateTab(type, focusTab = false) {
    activeType = type;
    document.querySelectorAll('.roster-tab').forEach((tab) => {
        const active = tab.dataset.tab === type;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        if (active && focusTab) tab.focus();
    });
    Object.entries(rosterElements).forEach(([name, element]) => {
        element.hidden = name !== type;
    });
    selectCharacter(type, 0);
}

renderRoster('main');
renderRoster('support');
selectCharacter('main', 0);

document.querySelectorAll('.roster-tab').forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
    tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        activateTab(tab.dataset.tab === 'main' ? 'support' : 'main', true);
    });
});

document.querySelector('.roster-panel').addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key) || event.target.classList.contains('roster-tab')) return;
    event.preventDefault();
    const columns = window.innerWidth <= 760 ? 4 : (window.innerWidth <= 1050 ? 8 : 4);
    const delta = {ArrowLeft: -1, ArrowRight: 1, ArrowUp: -columns, ArrowDown: columns}[event.key];
    const next = Math.max(0, Math.min(lists[activeType].length - 1, activeIndex + delta));
    selectCharacter(activeType, next, true);
    rosterElements[activeType].querySelector(`[data-index="${next}"]`)?.focus();
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    stage.addEventListener('pointermove', (event) => {
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        stageCharacter.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${y * -6}deg) translate(${x * 8}px, ${y * 8}px)`;
    });
    stage.addEventListener('pointerleave', () => {
        stageCharacter.style.transform = '';
    });

    document.querySelectorAll('.character-card').forEach((card) => {
        card.addEventListener('pointermove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - .5;
            const y = (event.clientY - rect.top) / rect.height - .5;
            card.style.transform = `perspective(500px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-2px)`;
        });
        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
        });
    });
}

const revealTargets = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, revealObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        });
    }, {threshold: .13, rootMargin: '0px 0px -6%'});
    revealTargets.forEach((target) => observer.observe(target));
} else {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
}

const board = document.querySelector('.versus-board');
const drawButton = document.querySelector('[data-draw-team]');
const mainTeamImage = document.querySelector('[data-team-main-image]');
const supportTeamImage = document.querySelector('[data-team-support-image]');
const mainTeamName = document.querySelector('[data-team-main-name]');
const supportTeamName = document.querySelector('[data-team-support-name]');
let drawTimer;

function showTeam(main, support) {
    mainTeamImage.src = imageBase + main.image;
    mainTeamName.textContent = main.name;
    supportTeamImage.src = imageBase + support.image;
    supportTeamName.textContent = support.name;
}

drawButton.addEventListener('click', () => {
    clearInterval(drawTimer);
    board.classList.remove('is-result');
    board.classList.add('is-drawing');
    drawButton.disabled = true;
    let ticks = 0;
    drawTimer = setInterval(() => {
        showTeam(mainCharacters[Math.floor(Math.random() * mainCharacters.length)], supportCharacters[Math.floor(Math.random() * supportCharacters.length)]);
        ticks += 1;
        if (ticks < 13) return;
        clearInterval(drawTimer);
        board.classList.remove('is-drawing');
        board.classList.add('is-result');
        drawButton.disabled = false;
    }, 85);
});

const requestedId = location.hash.slice(1);
const mainHashIndex = mainCharacters.findIndex((character) => character.id === requestedId);
const supportHashIndex = supportCharacters.findIndex((character) => character.id === requestedId);
if (mainHashIndex >= 0) selectCharacter('main', mainHashIndex);
if (supportHashIndex >= 0) {
    activateTab('support');
    selectCharacter('support', supportHashIndex);
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
});
