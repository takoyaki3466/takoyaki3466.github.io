'use strict';
if (window.ScrollReveal && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveal=window.ScrollReveal({distance:'44px',duration:720,interval:90,reset:false});
  reveal.reveal('.tier',{origin:'bottom'}); reveal.reveal('.reveal-left',{origin:'left'}); reveal.reveal('.reveal-right',{origin:'right'}); reveal.reveal('.loader',{origin:'bottom'});
}
