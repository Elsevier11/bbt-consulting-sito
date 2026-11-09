/* Pulsante "Parla con Giulia": apre l'assistente vocale di BBT (giulia.bbtconsulting.it) in una finestra accanto
   al sito. Autonomo: stili isolati (Shadow DOM), nessuna dipendenza. Includere con
   <script src="/giulia.js" defer></script>. I link con l'attributo data-giulia aprono la stessa finestra. */
(function () {
  "use strict";
  var URL_GIULIA = "https://giulia.bbtconsulting.it/";
  if (window.__giuliaWidget) return;
  window.__giuliaWidget = true;

  function apri(ev) {
    if (ev) ev.preventDefault();
    var w = 440, h = Math.min(780, (screen.availHeight || 800) - 40);
    var largo = window.matchMedia("(min-width: 760px) and (pointer: fine)").matches;
    var win = null;
    if (largo) {
      var left = (window.screenX || 0) + Math.max(0, (window.outerWidth || w) - w - 24);
      var top = (window.screenY || 0) + 40;
      win = window.open(URL_GIULIA, "giulia_bbt",
        "popup=yes,width=" + w + ",height=" + h + ",left=" + left + ",top=" + top);
    }
    if (!win) win = window.open(URL_GIULIA, "_blank");          // telefono o popup bloccati: nuova scheda
    if (!win) location.href = URL_GIULIA;
    else try { win.focus(); } catch (e) {}
  }

  function monta() {
    document.querySelectorAll("a[data-giulia]").forEach(function (a) { a.addEventListener("click", apri); });

    var host = document.createElement("div");
    host.id = "giulia-widget";
    host.style.cssText = "position:fixed;right:0;bottom:0;z-index:2147483000;";
    var root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;
    root.innerHTML =
      '<style>' +
      ':host{all:initial}' +
      '.g{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));' +
      'display:flex;align-items:center;gap:10px;padding:10px 18px 10px 10px;border:0;border-radius:999px;cursor:pointer;' +
      'background:#2563eb;color:#fff;font:600 15px/1.2 Manrope,system-ui,-apple-system,"Segoe UI",sans-serif;' +
      'box-shadow:0 10px 30px rgba(17,24,39,.28),0 0 0 1px rgba(255,255,255,.12) inset;' +
      'transition:transform .2s cubic-bezier(.22,1,.36,1),background .2s}' +
      '.g:hover{background:#1749b8;transform:translateY(-2px)}' +
      '.g:focus-visible{outline:3px solid #fff;outline-offset:3px;box-shadow:0 0 0 6px #2563eb}' +
      '.ic{position:relative;width:34px;height:34px;border-radius:50%;background:#fff;color:#2563eb;' +
      'display:grid;place-items:center;flex:none}' +
      '.ic svg{width:18px;height:18px}' +
      '.ic::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(255,255,255,.55);' +
      'animation:onda 2.4s cubic-bezier(.22,1,.36,1) 3}' +
      '@keyframes onda{0%{transform:scale(.85);opacity:1}100%{transform:scale(1.35);opacity:0}}' +
      '.t{display:flex;flex-direction:column;align-items:flex-start}' +
      '.t small{font-weight:500;font-size:12px;opacity:.85;margin-top:2px}' +
      '@media (max-width:480px){.t small{display:none}.g{padding:8px 16px 8px 8px}}' +
      '@media (prefers-reduced-motion:reduce){.g{transition:none}.ic::after{animation:none;opacity:0}}' +
      '@media print{.g{display:none}}' +
      '</style>' +
      '<button class="g" type="button" aria-label="Parla con Giulia, l’assistente vocale di BBT (si apre in una nuova finestra)">' +
      '<span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/>' +
      '<path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></span>' +
      '<span class="t">Parla con Giulia<small>Assistente vocale · risponde subito</small></span></button>';
    root.querySelector("button").addEventListener("click", apri);
    document.body.appendChild(host);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", monta);
  else monta();
})();
