// ==UserScript==
// @name        Find image source clicker
// @namespace   https://github.com/gslin/find-image-source-clicker
// @match       https://lens.google.com/search*
// @grant       none
// @version     0.20240307.0
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Click "Find image source" automatically
// @license     MIT
// ==/UserScript==

(() => {
  'use strict';

  document.querySelectorAll('button:has(svg)').forEach(el => {
    if (el.innerText === "Find image source") {
      el.click();
    }
  });
})();
