/*
 * Injects the site header. Include this as the FIRST thing in <body>,
 * as a plain (non-async, non-defer) <script src=".../js/header.js"></script>.
 * The header's relative path (../../ for pages/*, empty for the root
 * index.html) is derived from that script tag's own src, so this file
 * works unmodified at any folder depth.
 */
(() => {
  const thisScript = document.currentScript;
  const root = thisScript.getAttribute('src').replace(/js\/header\.js.*$/, '');
  const home = root || '.';

  thisScript.insertAdjacentHTML('beforebegin', `
    <header>
      <a href="${home}" class="header-title">Andy Yu</a>
      <div class="header-buttons">
        <button class="icon-button glass" onclick="window.open('https://www.github.com/eleguap', '_blank');" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </button>
        <button class="icon-button glass" onclick="window.open('https://www.linkedin.com/in/andyyu132/', '_blank');" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </button>
        <button class="icon-button glass" onclick="window.location.href='mailto:andyyu132@gmail.com';" aria-label="Email">
          <i class="fa-solid fa-envelope"></i>
        </button>
      </div>
    </header>
  `);
})();
