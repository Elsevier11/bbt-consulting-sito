/* Comportamenti comuni del sito in stile Ribo: menu, sottomenu, frasi che scorrono, contatori, video di testata. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Menu su telefono */
  var toggle = document.querySelector(".menu-toggle"), menu = document.getElementById("menu");
  function chiudiMenu(focus) {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Apri il menu");
    menu.classList.remove("open"); if (focus) toggle.focus();
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var aperto = toggle.getAttribute("aria-expanded") === "true";
      if (aperto) chiudiMenu(); else { toggle.setAttribute("aria-expanded", "true"); toggle.setAttribute("aria-label", "Chiudi il menu"); menu.classList.add("open"); }
    });
  }

  /* Sottomenu Soluzioni / Servizi */
  var bottoni = document.querySelectorAll(".menu [data-sub]");
  function chiudiSub(eccetto) {
    bottoni.forEach(function (b) { if (b !== eccetto) { b.setAttribute("aria-expanded", "false"); document.getElementById(b.dataset.sub).classList.remove("open"); } });
  }
  bottoni.forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      var sub = document.getElementById(b.dataset.sub), aperto = b.getAttribute("aria-expanded") === "true";
      chiudiSub(b); b.setAttribute("aria-expanded", String(!aperto)); sub.classList.toggle("open", !aperto);
    });
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".menu")) chiudiSub(); });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var apertoSub = document.querySelector(".menu [data-sub][aria-expanded='true']");
    if (apertoSub) { chiudiSub(); apertoSub.focus(); } else if (toggle && toggle.getAttribute("aria-expanded") === "true") chiudiMenu(true);
  });

  /* Frasi che scorrono nella testata della home (come su ribo.it) */
  var rot = document.querySelector(".rotating [data-frasi]");
  if (rot) {
    var frasi = JSON.parse(rot.dataset.frasi), i = 0;
    if (reduce) { rot.textContent = frasi[0]; }
    else {
      var scrivi = function (testo, n) {
        rot.textContent = testo.slice(0, n);
        if (n < testo.length) setTimeout(function () { scrivi(testo, n + 1); }, 55);
        else setTimeout(function () { cancella(testo, testo.length); }, 1800);
      };
      var cancella = function (testo, n) {
        rot.textContent = testo.slice(0, n);
        if (n > 0) setTimeout(function () { cancella(testo, n - 1); }, 22);
        else { i = (i + 1) % frasi.length; setTimeout(function () { scrivi(frasi[i], 0); }, 300); }
      };
      scrivi(frasi[0], 0);
    }
  }

  /* Contatori: il valore finale è già nell'HTML; l'animazione parte quando entrano nello schermo */
  var numeri = document.querySelectorAll("[data-conta]");
  if (numeri.length && !reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (!v.isIntersecting) return;
        io.unobserve(v.target);
        var el = v.target, da = +el.dataset.da || 0, a = +el.dataset.conta, t0 = null;
        var passo = function (t) {
          if (!t0) t0 = t;
          var p = Math.min(1, (t - t0) / 1600), e = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(da + (a - da) * e);
          if (p < 1) requestAnimationFrame(passo);
        };
        requestAnimationFrame(passo);
      });
    }, { threshold: .5 });
    numeri.forEach(function (n) { io.observe(n); });
  }

  /* Video di testata (YouTube senza cookie), solo con movimento non ridotto e schermi larghi */
  var hv = document.querySelector(".hero-video[data-youtube]");
  if (hv && !reduce && window.matchMedia("(min-width: 761px)").matches) {
    var id = hv.dataset.youtube;
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&mute=1&loop=1&playlist=" + id + "&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&disablekb=1";
    f.title = "Video di sfondo"; f.setAttribute("aria-hidden", "true"); f.tabIndex = -1;
    f.allow = "autoplay; encrypted-media";
    hv.appendChild(f);
  }
})();
