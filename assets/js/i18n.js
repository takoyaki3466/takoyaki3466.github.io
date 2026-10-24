'use strict';
(function () {
  const getValue = (object, path) => path.split('.').reduce((value, key) => value && value[key], object);
  const apply = (dictionary) => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18n);
      if (typeof value === 'string') element.textContent = value;
      else console.warn(`Missing translation: ${element.dataset.i18n}`);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18nAriaLabel);
      if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
  };
  const source = document.body.dataset.i18nBase;
  if (!source) return;
  fetch(source).then((response) => {
    if (!response.ok) throw new Error(`Translation request failed: ${response.status}`);
    return response.json();
  }).then(apply).catch((error) => console.warn('Japanese fallback text is in use.', error));
}());
