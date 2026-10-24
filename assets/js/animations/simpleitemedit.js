import {animate} from 'https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm';
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-edit]').forEach((button)=>button.addEventListener('click',()=>{document.querySelectorAll('[data-edit]').forEach((item)=>item.setAttribute('aria-selected','false'));button.setAttribute('aria-selected','true');const preview=document.querySelector('.preview-item');preview.querySelector('strong').textContent=button.dataset.preview; if(!reduced) animate(preview,{scale:[.92,1],opacity:[.45,1]},{duration:.35});}));
if(!reduced) document.querySelectorAll('.compare-card').forEach((card,index)=>animate(card,{opacity:[0,1],x:[index?35:-35,0]},{duration:.55,delay:.12*index}));
