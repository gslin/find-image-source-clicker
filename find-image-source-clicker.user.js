// ==UserScript==
// @name        Find image source clicker on lens.google.com
// @namespace   https://github.com/gslin/find-image-source-clicker
// @match       https://lens.google.com/search*
// @grant       none
// @version     0.20240308.0
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Click "Find image source" on lens.google.com automatically
// @license     MIT
// @run-at      document-idle
// ==/UserScript==

(() => {
  'use strict';

  document.querySelectorAll('button:has(svg)').forEach(el => {
    if (el.innerText === "Find image source") {
      el.click();
    }
  });
})();
