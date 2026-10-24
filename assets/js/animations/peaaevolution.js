'use strict';
(function(){
  const buttons=[...document.querySelectorAll('[data-grade]')]; const panels=[...document.querySelectorAll('[data-grade-panel]')];
  const show=(grade)=>{buttons.forEach((button)=>button.setAttribute('aria-selected',String(button.dataset.grade===grade)));panels.forEach((panel)=>{panel.hidden=panel.dataset.gradePanel!==grade;});if(window.anime&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){window.anime({targets:`[data-grade-panel="${grade}"]`,opacity:[0,1],translateY:[18,0],duration:520,easing:'easeOutCubic'});}};
  buttons.forEach((button)=>button.addEventListener('click',()=>show(button.dataset.grade))); show('mk1');
}());
