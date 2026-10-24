'use strict';
const curriculumReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(window.AOS) window.AOS.init({duration:700,once:true,offset:70,easing:'ease-out-cubic',disable:curriculumReduced});
const visitedCurriculumScreens=new Set(['dash_board_gui.png']);
let curriculumTourComplete=false;
document.querySelectorAll('[data-curriculum-shot]').forEach((button)=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-curriculum-shot]').forEach((item)=>item.setAttribute('aria-selected','false'));
  button.setAttribute('aria-selected','true');
  const image=document.querySelector('[data-shot-image]');
  const caption=document.querySelector('[data-shot-caption]');
  image.src=`../../assets/images/curriculum/${button.dataset.curriculumShot}`;
  image.alt=button.dataset.alt;
  caption.textContent=button.dataset.caption;
  visitedCurriculumScreens.add(button.dataset.curriculumShot);
  if(visitedCurriculumScreens.size===3&&!curriculumTourComplete){curriculumTourComplete=true;caption.textContent+=' — 画面ツアー完了！';window.firePortfolioConfetti?.(['#3079bd','#8fc9ff','#ffffff']);}
}));
document.querySelector('[data-deadline-mode]')?.addEventListener('click',()=>{
  const active=document.body.classList.toggle('focus-mode');
  document.querySelector('[data-deadline-status]').textContent=active?'締切前モード：夜更かしではなく、残り単位を確認中。':'今学期も、計画的に。';
  document.querySelector('[data-deadline-mode]').textContent=active?'通常モードへ':'締切前モード';
  if(window.AOS) window.AOS.refresh();
});
