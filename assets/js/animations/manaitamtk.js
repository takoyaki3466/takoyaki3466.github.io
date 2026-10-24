'use strict';
if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.gsap.registerPlugin(window.ScrollTrigger);
  window.gsap.from('.item-chip',{scrollTrigger:{trigger:'.item-rail',start:'top 78%'},x:70,opacity:0,duration:.65,stagger:.12,ease:'power2.out'});
  window.gsap.from('.loadout .media-placeholder',{scrollTrigger:{trigger:'.loadout',start:'top 74%'},scale:.92,opacity:0,duration:.8,ease:'back.out(1.25)'});
}
