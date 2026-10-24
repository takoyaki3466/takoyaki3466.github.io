'use strict';

/** フッターの年を現在年に更新します。 */
function updateCopyrightYear() {
  const currentYear = String(new Date().getFullYear());
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = currentYear;
  });
}

updateCopyrightYear();
