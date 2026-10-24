'use strict';
(function(){
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(window.ScrollReveal&&!reduced){
    const reveal=window.ScrollReveal({distance:'46px',duration:760,interval:90,reset:false,easing:'cubic-bezier(.2,.7,.2,1)'});
    reveal.reveal('.reveal-left',{origin:'left'}); reveal.reveal('.reveal-right',{origin:'right'});
    reveal.reveal('.tier',{origin:'bottom',interval:65}); reveal.reveal('.reveal-shot-left',{origin:'left'}); reveal.reveal('.reveal-shot-right',{origin:'right'});
    reveal.reveal('.reveal-loader',{origin:'bottom',interval:100}); reveal.reveal('.reveal-detail',{origin:'bottom',interval:90});
    reveal.reveal('.architecture-lab',{origin:'bottom'}); reveal.reveal('.architecture-cards .card',{origin:'bottom',interval:90});
  }
  const tiers=[...document.querySelectorAll('[data-tier]')];
  const select=(button)=>{tiers.forEach((item)=>item.setAttribute('aria-selected',String(item===button)));document.querySelector('[data-tier-name]').textContent=button.dataset.tier;document.querySelector('[data-tier-value]').textContent=button.dataset.multiplier;};
  tiers.forEach((button)=>button.addEventListener('click',()=>select(button))); if(tiers[0]) select(tiers[0]);
  const routes=[...document.querySelectorAll('[data-loader-route]')];
  const visitedRoutes=new Set();
  let allRoutesConnected=false;
  const routeCopy={Forge:'Forge固有の登録処理とイベントへ接続します。',Fabric:'Fabric APIのCallbackやRegistryへ橋渡しします。',NeoForge:'DeferredRegisterなどNeoForge固有の入口へ接続します。'};
  const selectRoute=(button)=>{routes.forEach((item)=>item.setAttribute('aria-selected',String(item===button)));document.querySelector('[data-loader-target]').textContent=`${button.dataset.loaderRoute}実装`;document.querySelector('[data-loader-copy]').textContent=routeCopy[button.dataset.loaderRoute];visitedRoutes.add(button.dataset.loaderRoute);if(visitedRoutes.size===3&&!allRoutesConnected){allRoutesConnected=true;document.querySelector('[data-loader-copy]').textContent='3ローダー接続完了。共通化しても、違いは違いとして扱います。';window.firePortfolioConfetti?.(['#ff9550','#ffd2ad','#ffffff']);}};
  routes.forEach((button)=>button.addEventListener('click',()=>selectRoute(button))); if(routes[0]) selectRoute(routes[0]);
}());
