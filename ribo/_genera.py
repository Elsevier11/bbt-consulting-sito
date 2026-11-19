"""Genera le pagine del sito in stile Ribo da un unico modello (menu e piè di pagina identici ovunque).

Uso, dalla cartella del repository:  py ribo/_genera.py
Produce: index.html (home, nella radice) e ribo/{gestionali,app-software,sistemistica,communication}.html
I testi sono quelli di ribo.it (forniti/autorizzati da Ribo S.r.l.).
"""
import json
from html import escape
from pathlib import Path

RADICE = Path(__file__).resolve().parent.parent
GIULIA_VERSIONE = "20261119"

RIBO = "https://www.ribo.it"
CUR = ' aria-current="page"'
FRASI = [
    "Far crescere il fatturato dell’azienda", "Aprire nuovi canali di vendita", "Acquisire nuovi clienti",
    "Migliorare l’immagine aziendale", "Gestire e automatizzare i processi", "Prendere decisioni data-driven",
    "Tenere sotto controllo i costi", "Garantire la continuità operativa", "Salvaguardare il valore aziendale",
]

AREE = [
    {"slug": "gestionali", "menu": "Gestionali", "titolo": "Business Solutions", "box": "bu-gestionali.jpg", "hub": "hub-gestionali.jpg",
     "frase": "Scopri il software sartoriale completo per PMI", "sito": "https://gestionali.ribo.it/",
     "meta": "Software gestionale personalizzato per PMI: Arca Evolution, soluzioni verticali e servizi di integrazione.",
     "intro_titolo": "Ribo: per lo sviluppo del tuo software gestionale personalizzato",
     "intro": [
         "Il software gestionale aziendale come cuore del sistema informativo aziendale: Ribo ha come principale obiettivo la fornitura ai propri clienti di servizi d’integrazione di dati, di sviluppo di applicazioni e di consulenze professionali per l’evoluzione del sistema informativo aziendale. Ogni singolo modulo dei nostri software gestionali aziendali nasce come applicativo completamente integrato con il gestionale aziendale, per avere un’unica base dati integrata.",
         "Il nostro cuore è Arca Evolution, il software gestionale di Artel, brand di Wolters Kluwer Italia specializzato nello sviluppo di soluzioni gestionali per aziende di piccole e medie dimensioni.",
     ],
     "punti_titolo": "Un software gestionale semplice, per operare subito", "punti": ["Completo", "Adattabile", "Semplice", "Coerente"],
     "servizi_titolo": "Perché sceglierci?",
     "servizi": [
         ("Arca Evolution", "Arca Evolution è il software gestionale di Artel, brand di Wolters Kluwer Italia specializzato nello sviluppo di soluzioni gestionali per aziende di piccole e medie dimensioni.", "ges-arca.jpg", "https://gestionali.ribo.it/arca-evolution"),
         ("Smart.1", "Le nostre soluzioni verticali: Maintenance, Fireproof, Beverage, Delivery, Agent, Ceramio, Fashion sono alcune delle tante proposte possibili. Scopri di più sui nostri prodotti.", "ges-prodotti.jpg", "https://gestionali.ribo.it/prodotti-gestionale"),
         ("Servizi", "Le nostre soluzioni software si adattano ai tuoi processi aziendali, per un sistema dati integrato ed efficiente. Migrazione dal gestionale, integrazione con Office, Business Intelligence… Scopri tutti i servizi!", "ges-servizi.jpg", "https://gestionali.ribo.it/servizi-gestionale"),
     ]},
    {"slug": "app-software", "menu": "App & Software", "titolo": "App & Software", "box": "bu-app.jpg", "hub": "hub-app.jpg",
     "frase": "Distinguiti: rendi il tuo business mobile", "sito": "https://app.ribo.it/",
     "meta": "App aziendali e software su misura: Smart.1 porta il gestionale fuori ufficio in tutta sicurezza.",
     "intro_titolo": "App aziendali, per un mondo sempre più mobile",
     "intro": [
         "Il successo del mobile è evidente ed in continua crescita visti i concreti vantaggi che derivano dal suo utilizzo. È in quest’ottica che Ribo oggi si dedica allo sviluppo di app aziendali personalizzate: per trasferire i benefici del mobile anche al mondo business, ottimizzare il lavoro di tutti i giorni e distinguersi dalla concorrenza attraverso la realizzazione di un progetto altamente tecnologico.",
         "Attraverso un attento ascolto, il team di sviluppatori di Ribo comprende le tue esigenze e realizza la tua app business su misura, perfettamente rispondente alle tue necessità, anche latenti.",
     ],
     "servizi_titolo": "I nostri servizi",
     "servizi": [
         ("App", "Le nostre App possono essere utilizzate da piccole e grandi aziende, per facilitare il lavoro di tutti i giorni e ottimizzare i risultati attraverso uno strumento ad oggi fondamentale. Scopri tutti i vantaggi delle nostre App.", "app-vantaggi.jpg", "https://app.ribo.it/vantaggi-delle-nostre-app"),
         ("Smart.1", "Smart.1 è la soluzione app modulare e personalizzabile che consente di portare con sé il gestionale fuori ufficio in tutta sicurezza. La soluzione dispone di diverse declinazioni a seconda delle specifiche attività.", "app-smart1.jpg", "https://app.ribo.it/smart-1"),
         ("Software", "Interfaccia grafica semplice e intuitiva, perfetta sincronizzazione dei dati, dati sempre aggiornati in tempo reale, sono solo alcuni dei vantaggi dei nostri software gestionali. Scopri questo e molto altro!", "app-software.jpg", "https://app.ribo.it/vantaggi-dei-nostri-software"),
     ]},
    {"slug": "sistemistica", "menu": "Sistemistica", "titolo": "IT Solutions", "box": "bu-sistemistica.jpg", "hub": "hub-sistemistica.jpg",
     "frase": "Vuoi un’infrastruttura IT zero pensieri?", "sito": "https://sistemistica.ribo.it/",
     "meta": "Gestione, manutenzione e sicurezza dei sistemi informatici aziendali: infrastrutture, disaster recovery, IT security.",
     "intro_titolo": "Un team per la tua rete aziendale",
     "intro": [
         "Ribo si prende carico della gestione, della manutenzione, della progettazione e dell’aggiornamento dei tuoi sistemi informatici, in modo da garantirne il perfetto funzionamento e la massima operatività.",
         "Assistenza pre-vendita, attività sistemistica, hardware, software, sistemi operativi, software sistemistici, networking, sicurezza e storage, formazione e assistenza post-vendita: Ribo si occupa con professionalità delle necessità strutturali a livello informatico, quanto del perfezionamento di sistemi specifici.",
     ],
     "servizi_titolo": "I nostri servizi",
     "servizi": [
         ("Infrastrutture", "Ribo si prende carico della gestione, della manutenzione, della progettazione e dell’aggiornamento dei tuoi sistemi informatici, in modo da garantirne il perfetto funzionamento e la massima operatività delle infrastrutture aziendali.", None, "https://sistemistica.ribo.it/-infrastrutture"),
         ("Disaster recovery", "Il disaster recovery è un settore dell’IT che ha lo scopo di proteggere un’azienda dai danni causati da eventi distruttivi come un cortocircuito o calamità naturali. Scopri tutte le soluzioni che aiutano l’azienda a ripristinare l’intera infrastruttura.", None, "https://sistemistica.ribo.it/disaster-recovery"),
         ("IT security", "Garantire la sicurezza della rete aziendale è un fattore imprescindibile per le aziende. Alcuni elementi rimangono gli stessi per molto tempo, ma altri hanno bisogno di manutenzione costante per poter garantire la massima sicurezza. Scopri come avere una rete aziendale sicura.", None, "https://sistemistica.ribo.it/-it-security"),
     ]},
    {"slug": "communication", "menu": "Comunicazione", "titolo": "Communication", "box": "bu-comunicazione.jpg", "hub": "hub-comunicazione.jpg",
     "frase": "Hai una strategia di marketing vincente?", "sito": "https://web.ribo.it/",
     "meta": "Web agency e comunicazione integrata: marketing, servizi digitali e comunicazione offline.",
     "intro_titolo": "Oltre la solita web agency",
     "intro": [
         "Siamo più di una web agency. Siamo un team di professionisti, animati da passione ed energia creativa, pronti a mettersi alla prova e a dare il meglio di sé. Le nostre competenze trasversali rendono ogni progetto un lavoro unico, originale e personalizzato.",
         "Ascoltare, interpretare e applicare. Questi sono i nostri imperativi! Il nostro obiettivo è quello di dare la giusta forma comunicativa ai tuoi pensieri e al tuo valore, per realizzare la tua identità aziendale e rendere riconoscibile il tuo Brand.",
         "La nostra mission? Condurti per mano nel mondo della comunicazione integrata e aiutare il tuo business a crescere oltre le aspettative.",
     ],
     "servizi_titolo": "I nostri servizi",
     "servizi": [
         ("Marketing", "Mettiamo in campo la migliore strategia di Marketing per la tua azienda. Lead Generation, Ricerche di mercato, Marketing Strategico, Content Marketing e molto altro. Tutto per migliorare la tua Brand Awareness, esplorare nuovi canali commerciali ed aumentare i tuoi Clienti.", "com-marketing.jpg", "https://web.ribo.it/marketing"),
         ("Servizi", "La tua comunicazione gestita da professionisti degli strumenti Digitali: scopri tutti i servizi legati al mondo online e aumenta la visibilità del tuo brand attraverso attività di Social Media, SEO, Siti Web, Shop Online, Videoproduzione e molto altro. Scegliamo insieme il progetto su misura per te.", "com-servizi.jpg", "https://web.ribo.it/servizi"),
         ("Offline", "La comunicazione non è solo online: la tua Brand Reputation passa anche attraverso Branding, Corporate Image, Company Profile, Brochure, Packaging, Advertising e Fiere. Allinea il tuo brand alla comunicazione digitale, fallo conoscere al tuo pubblico e aumenta le tue performance.", "com-offline.jpg", "https://web.ribo.it/offline"),
     ]},
]

SERVIZI_MENU = [
    ("Finanza d’impresa", "https://gestionali.ribo.it/servizi/finanza-d-impresa"),
    ("Business intelligence", "https://gestionali.ribo.it/servizi/business-intelligence"),
    ("Industria 4.0", "https://gestionali.ribo.it/servizi/industria-4-0"),
    ("Consulenza hardware", "https://sistemistica.ribo.it/servizi/consulenza-hardware"),
    ("Assistenza informatica aziendale", "https://sistemistica.ribo.it/servizi/assistenza-hardware-assistenza-remoto"),
    ("Office 365", "https://sistemistica.ribo.it/servizi/office-365"),
]

CASI = [
    ("case-eletric.png", "Realizzazione sito web aziendale, nuovo design", "realizzazione-sito-web-aziendale-nuovo-design"),
    ("case-yooki.png", "La creazione di un nuovo fantastico brand: Yoooki", "la-creazione-di-un-nuovo-fantastico-brand-yoooki"),
    ("case-travel.png", "Sito per tour operator: Travel Design Studio", "sito-per-tour-operator-travel-design-studio"),
    ("case-ceresoli.png", "Progetto di restyling del sito web: Ceresoli Utensili", "progetto-di-restyling-del-sito-web-ceresoli-utensili"),
    ("case-sinistro-aiuto.png", "Gestionale per assicurazioni e sito web", "gestionale-per-assicurazioni-e-sito-web"),
    ("case-arco.png", "Realizzazione sito ecommerce internazionale", "realizzazione-sito-ecommerce-internazionale"),
    ("case-fdermo.png", "Lancio di un nuovo marchio nella Cosmesi solida", "il-lancio-di-un-nuovo-marchio-nella-cosmesi-solida"),
]

NEWS = [
    ("news-analisi-dati.jpg", "Gestionali", "2025-06-17", "Giugno 17, 2025", "Arca Evolution e l’analisi dei dati: il gestionale che guida la crescita consapevole della tua impresa", "Nel panorama attuale, dove le aziende si trovano ad affrontare una crescente complessità gestionale, l’utilizzo di un software…"),
    ("news-programmatic.jpg", "Comunicazione", "2025-06-13", "Giugno 13, 2025", "Programmatic advertising: perché è strategico per le aziende", "Negli ultimi anni, il digital advertising ha vissuto una profonda trasformazione grazie all’introduzione del programmatic advertising, un sistema…"),
    ("news-documentale.jpg", "Gestionali", "2025-06-09", "Giugno 9, 2025", "Software per la gestione documentale: digitalizza, semplifica, migliora", "La gestione dei documenti aziendali è una delle attività più critiche per garantire efficienza, sicurezza e conformità normativa…"),
]

ICONE = {
    "facebook": '<path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.2-.6.6-.6z"/>',
    "instagram": '<path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM17.3 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>',
    "linkedin": '<path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 6h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.4 2.6 4.4 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z"/>',
    "youtube": '<path d="M22 8.2c-.2-1.6-1-2.7-2.6-2.9C17 5 12 5 12 5s-5 0-7.4.3C3 5.5 2.2 6.6 2 8.2 1.8 9.6 1.8 12 1.8 12s0 2.4.2 3.8c.2 1.6 1 2.7 2.6 2.9C7 19 12 19 12 19s5 0 7.4-.3c1.6-.2 2.4-1.3 2.6-2.9.2-1.4.2-3.8.2-3.8s0-2.4-.2-3.8zM10 15V9l5.2 3z"/>',
}
SOCIAL = [
    ("facebook", "Facebook", "https://www.facebook.com/RiboSrl/"),
    ("instagram", "Instagram", "https://www.instagram.com/ribo_beyondexpectations/"),
    ("linkedin", "LinkedIn", "https://it.linkedin.com/company/ribo-soluzioni-informatiche-srl"),
    ("youtube", "YouTube", "https://www.youtube.com/channel/UCqdnd-WpJHSrjrlkeSdvPtg/videos"),
]


def e(t):
    return escape(t, quote=True)


def ext(href, testo, cls=""):
    c = f' class="{cls}"' if cls else ""
    return f'<a{c} href="{e(href)}" target="_blank" rel="noopener">{testo}</a>'


def social():
    voci = "".join(f'<li><a href="{u}" target="_blank" rel="noopener" aria-label="Ribo su {n}"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONE[k]}</svg></a></li>' for k, n, u in SOCIAL)
    return f'<ul class="social">{voci}</ul>'


def testa(titolo, descr, p, attiva=None):
    """p = prefisso per raggiungere la radice ('' dalla home, '../' dalle pagine d'area)."""
    r = f"{p}ribo/" if p == "" else ""
    sub_aree = "".join(
        f'<li><a href="{r}{a["slug"]}.html"{CUR if a["slug"] == attiva else ""}>{e(a["menu"])}<small>{e(a["frase"])}</small></a></li>'
        for a in AREE)
    sub_servizi = "".join(f'<li>{ext(u, e(n))}</li>' for n, u in SERVIZI_MENU)
    return f"""<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>{e(titolo)}</title>
  <meta name="description" content="{e(descr)}">
  <link rel="icon" href="{r}img/favicon-32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="{r}img/favicon-180.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{r}ribo.css?v={GIULIA_VERSIONE}">
</head>
<body>
  <a class="skip" href="#contenuto">Vai al contenuto</a>
  <div class="topbar">
    <div class="wrap">
      {social()}
      <ul class="contacts">
        <li><a href="mailto:info@ribo.it"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>info@ribo.it</a></li>
        <li><a href="tel:+390354251092"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>035 42 51 092</a></li>
        <li><a href="https://goo.gl/maps/FAG2WPMRY5SkWGmNA" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>Via Portico 55b, 24050 Orio al Serio - Bergamo</a></li>
      </ul>
    </div>
  </div>
  <header class="site-header">
    <nav class="wrap nav" aria-label="Navigazione principale">
      <a class="brand" href="{p or './'}" aria-label="Ribo, home"><img src="{r}img/logo-ribo.png" alt="Ribo Beyond Expectations" width="432" height="144"></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu" aria-label="Apri il menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      <ul class="menu" id="menu">
        <li><button type="button" data-sub="sub-soluzioni" aria-expanded="false" aria-controls="sub-soluzioni">Soluzioni</button><ul class="sub" id="sub-soluzioni">{sub_aree}</ul></li>
        <li><button type="button" data-sub="sub-servizi" aria-expanded="false" aria-controls="sub-servizi">Servizi</button><ul class="sub" id="sub-servizi">{sub_servizi}</ul></li>
        <li>{ext(RIBO + "/case-study/", "Case study")}</li>
        <li>{ext(RIBO + "/blog/", "Blog")}</li>
        <li>{ext(RIBO + "/contatti/", "Contatti")}</li>
        <li>{ext(RIBO + "/lavora-con-noi/", "Unisciti a noi!", "cta")}</li>
      </ul>
    </nav>
  </header>
"""


def fascia_contatti():
    return f"""  <section class="contact-band" aria-label="Contatti rapidi">
    <div class="wrap">
      <a href="tel:+390354251092">Tel: +39 035 4251092</a>
      <a href="mailto:marketing@ribo.it">marketing@ribo.it</a>
      {ext(RIBO + "/contatti/", "Richiedi informazioni", "btn btn-bianco")}
    </div>
  </section>
"""


def piede(p):
    r = f"{p}ribo/" if p == "" else ""
    return f"""  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <img class="logo-neg" src="{r}img/logo-ribo-negativo.png" alt="Ribo Beyond Expectations" width="768" height="284">
          <p class="about">Siamo “Beyond Expectations” perché amiamo andare oltre le aspettative, perché vogliamo stupire i nostri clienti, perché siamo il partner che non ti aspetti.<br>Da oltre 20 anni abbiamo a cuore il tuo business, grazie a un team di 40 professionisti con competenze variegate ma complementari. Siamo capaci di proporti soluzioni concrete, efficienti, personalizzate ed integrate, per garantire sempre il meglio.</p>
          <p class="company"><strong>RIBO S.R.L.</strong>Via Portico, 55b – 24050 Orio al Serio (BG)<br>P.I. 02667750166<br>Capitale sociale i.v. 60.000 Euro<br>Email: <a href="mailto:marketing@ribo.it">marketing@ribo.it</a><br>Tel: <a href="tel:+390354251092">+390354251092</a><br>Fax: +39035951447</p>
          {social()}
        </div>
        <div>
          <h2>Azienda</h2>
          <ul>
            <li>{ext(RIBO + "/case-study/", "Case Study")}</li>
            <li>{ext(RIBO + "/contatti/", "Contatti")}</li>
            <li>{ext(RIBO + "/blog/", "Blog")}</li>
            <li>{ext(RIBO + "/lavora-con-noi/", "Unisciti a noi!")}</li>
            <li>{ext(RIBO + "/privacy-policy/", "Privacy policy")}</li>
            <li>{ext(RIBO + "/cookie-policy/", "Cookie Policy")}</li>
            <li>{ext(RIBO + "/wp-content/uploads/2026/09/01-MOD-520-A-POLITICA.pdf", "Politica ISO 27001:2022")}</li>
            <li>{ext(RIBO + "/wp-content/uploads/2026/10/CERT_CI_10416-IT.pdf", "Certificato ISO 27001:2022")}</li>
          </ul>
          <h2 style="margin-top:28px">Servizi</h2>
          <ul>{"".join(f"<li>{ext(u, e(n))}</li>" for n, u in SERVIZI_MENU)}</ul>
        </div>
        <div class="badges">
          <div><h2>Certificazioni</h2><div class="badge"><img src="{r}img/iso-27001.png" alt="ISO/IEC 27001:2022 Certified Company" width="255" height="255"></div></div>
          <div><h2>Partnership</h2><div class="badge"><img src="{r}img/confindustria.png" alt="Aderente a Confindustria Bergamo" width="350" height="198"></div></div>
        </div>
      </div>
      <p class="legal">© Ribo S.r.l. · P.I. 02667750166 · Giulia, l’assistente vocale di questo sito, è un servizio di BBT S.r.l.: <a href="{r}privacy-giulia.html">informativa sull’assistente vocale</a>.</p>
    </div>
  </footer>
  <script src="{r}ribo.js?v={GIULIA_VERSIONE}" defer></script>
  <script src="{p}giulia.js?v={GIULIA_VERSIONE}" data-tema="ribo" defer></script>
</body>
</html>
"""


def home():
    p = ""
    r = "ribo/"
    perche = [
        ("icona-fatturato.png", "Ottimizzare i processi aziendali", "Gestire e rendere efficienti le attività aziendali utilizzando i migliori <strong>software gestionali</strong> ERP italiani"),
        ("icona-clienti.png", "Realizzare software su misura", "Realizzare <strong>soluzioni software</strong> su misura per soddisfare le esigenze della tua azienda"),
        ("icona-processi.png", "Proteggere l’infrastruttura IT", "Aumentare la sicurezza informatica e salvaguardare il tuo patrimonio informativo aziendale"),
        ("icona-business.png", "Aumentare le vendite online", "Far crescere il tuo business con una comunicazione aziendale efficace e innovativa"),
    ]
    html = testa("Azienda informatica Bergamo - Ribo Beyond Expectations",
                 "Ribo dal 1999 affianca le aziende in un percorso di innovazione per il miglioramento dei processi di gestione e comunicazione.", p)
    html += f"""  <main id="contenuto">
    <section class="hero" style="background-image:url('{r}img/hero-home.jpg')" aria-labelledby="hero-titolo">
      <div class="hero-video" data-youtube="SaRXlx4_b2M"></div>
      <div class="hero-text">
        <h1 id="hero-titolo"><span class="lead">Possiamo aiutare la tua azienda a</span>
        <span class="rotating"><span data-frasi='{e(json.dumps(FRASI, ensure_ascii=False))}'>{e(FRASI[0])}</span><span class="caret" aria-hidden="true"></span></span></h1>
      </div>
    </section>

    <section class="section bg-blu" aria-labelledby="chi-siamo">
      <div class="wrap">
        <p class="kicker">Chi siamo</p>
        <h2 class="section-title" id="chi-siamo">Ribo Beyond Expectations</h2>
        <div class="counters">
          <div><strong data-conta="800" data-da="110">800</strong><span>Clienti attivi</span></div>
          <div><strong data-conta="380" data-da="180">380</strong><span>Progetti</span></div>
          <div><strong data-conta="25" data-da="3">25</strong><span>Anni di esperienza</span></div>
        </div>
      </div>
    </section>

    <section class="section bg-nero" aria-labelledby="perche">
      <div class="wrap">
        <div class="section-head"><p class="kicker">Cosa facciamo</p><h2 class="section-title" id="perche">Perché sceglierci?</h2></div>
        <div class="why">{"".join(f'<article class="why-card"><img src="{r}img/{i}" alt="" width="80" height="80" loading="lazy"><h3>{e(t)}</h3><p>{d}</p></article>' for i, t, d in perche)}</div>
      </div>
    </section>

    <section class="section bg-blu" aria-labelledby="test">
      <div class="wrap test">
        <img src="{r}img/grafico-pentagono.png" alt="Grafico a pentagono con le aree organizzazione, sicurezza, marketing, gestione clienti e vendite" width="428" height="338" loading="lazy">
        <div>
          <h2 id="test">Quali aree della tua azienda sono migliorabili?</h2>
          <p>Scopri subito le tue principali criticità e ottieni consigli su come risolverle</p>
          {ext("https://h4xphgi3fx1.typeform.com/to/e4HYsdt4", "Fai subito il test", "btn btn-bianco")}
        </div>
      </div>
    </section>

    <section class="section bg-nero" aria-labelledby="bu">
      <div class="wrap">
        <div class="section-head"><p class="kicker">Con cosa lo facciamo</p><h2 class="section-title" id="bu">Le nostre business units</h2></div>
        <div class="bu-grid">{"".join(f'<a class="bu-card" href="{r}{a["slug"]}.html"><img src="{r}img/{a["box"]}" alt="" width="564" height="300" loading="lazy"><div><h3>{e(a["menu"])}</h3><p>{e(a["frase"])}</p></div></a>' for a in AREE)}</div>
      </div>
    </section>

    <section class="section bg-antracite" aria-labelledby="casi">
      <div class="wrap">
        <div class="section-head"><p class="kicker">Case study</p><h2 class="section-title" id="casi">Chi ci ha già scelto</h2></div>
        <div class="cases" tabindex="0" aria-label="Case study, scorri in orizzontale">{"".join(f'<article class="case"><img src="{r}img/{i}" alt="" width="307" height="359" loading="lazy"><div><h3>{e(t)}</h3>{ext(RIBO + "/case-study/" + s + "/", "Leggi tutto", "btn btn-bianco")}</div></article>' for i, t, s in CASI)}</div>
        <p class="cases-foot">{ext(RIBO + "/category/case-study/", "Visualizza tutti i case study", "link-riga")}</p>
      </div>
    </section>

    <section class="section bg-nero" aria-labelledby="news">
      <div class="wrap">
        <div class="section-head"><h2 class="section-title" id="news">Ultime news</h2></div>
        <div class="news">{"".join(f'<a class="news-card" href="{RIBO}/blog/" target="_blank" rel="noopener"><div class="img"><img src="{r}img/{i}" alt="" width="800" height="1000" loading="lazy"><span class="tag">{e(c)}</span></div><div class="body"><time datetime="{dt}">{e(d)}</time><h3>{e(t)}</h3><p>{e(x)}</p></div></a>' for i, c, dt, d, t, x in NEWS)}</div>
        <p class="cases-foot">{ext(RIBO + "/blog/", "Visualizza tutte le news", "link-riga")}</p>
      </div>
    </section>

    <section class="section bg-antracite" aria-labelledby="unisciti">
      <div class="wrap">
        <div class="section-head"><h2 class="section-title" id="unisciti">Unisciti a noi!</h2></div>
        <div class="join">
          <img src="{r}img/lavora-con-noi.jpg" alt="" width="1024" height="576" loading="lazy">
          <div><p>Ribo è un ambiente davvero giovane, dinamico e stimolante.<br>Siamo sempre alla ricerca di nuovi talenti motivati ed ambiziosi da inserire nel nostro team!<br>Sei pronto a metterti alla prova e dare il meglio di te?</p>{ext(RIBO + "/lavora-con-noi/", "Invia il tuo CV", "btn btn-bianco")}</div>
        </div>
      </div>
    </section>
  </main>
"""
    html += fascia_contatti() + piede(p)
    (RADICE / "index.html").write_text(html, encoding="utf-8")


def area(a):
    p = "../"
    html = testa(f"{a['titolo']} – Ribo srl", a["meta"], p, attiva=a["slug"])
    subnav = "".join(f'<li><a href="{x["slug"]}.html"{CUR if x["slug"] == a["slug"] else ""}>{e(x["menu"])}</a></li>' for x in AREE)
    servizi = ""
    for titolo, testo, img, url in a["servizi"]:
        if img:
            servizi += f'<article class="service"><div class="service-img"><img src="img/{img}" alt="" width="1920" height="1080" loading="lazy"></div><div><h3>{e(titolo)}</h3><p>{e(testo)}</p>{ext(url, "Esplora", "btn btn-blu")}</div></article>'
        else:
            servizi += f'<article class="service-plain"><h3>{e(titolo)}</h3><p>{e(testo)}</p>{ext(url, "Esplora", "btn btn-blu")}</article>'
    punti = ""
    if a.get("punti"):
        punti = f'<h3 class="section-title" style="font-size:1.4rem;margin-top:44px">{e(a["punti_titolo"])}</h3><ul class="features">{"".join(f"<li>{e(x)}</li>" for x in a["punti"])}</ul>'
    html += f"""  <main id="contenuto">
    <section class="hub" style="background-image:url('img/{a["hub"]}')" aria-labelledby="titolo">
      <div class="wrap">
        <div><h1 id="titolo">{e(a["titolo"])}</h1><p class="payoff">Beyond Expectations</p></div>
        <a class="down" href="#intro">Leggi tutto <span aria-hidden="true">↓</span></a>
      </div>
    </section>

    <section class="section bg-nero" id="intro" aria-labelledby="intro-titolo">
      <div class="wrap">
        <ul class="subnav" aria-label="Business units">{subnav}</ul>
        <div class="intro" style="margin-top:56px">
          <h2 id="intro-titolo">{e(a["intro_titolo"])}</h2>
          {"".join(f"<p>{e(x)}</p>" for x in a["intro"])}
          {punti}
        </div>
      </div>
    </section>

    <section class="section bg-antracite" aria-labelledby="servizi">
      <div class="wrap">
        <div class="section-head"><h2 class="section-title" id="servizi">{e(a["servizi_titolo"])}</h2></div>
        <div class="services">{servizi}</div>
        <p class="cases-foot bu-other">{ext(a["sito"], "Visita il sito " + e(a["menu"]) + " di Ribo", "link-riga")}</p>
      </div>
    </section>

    <section class="section bg-blu" aria-labelledby="domande">
      <div class="wrap" style="text-align:center">
        <h2 class="section-title" id="domande">Hai domande? Contattaci.</h2>
        <p style="margin-top:12px">Scrivici o chiedi subito a Giulia, la nostra assistente vocale.</p>
        <p style="margin-top:22px">{ext(RIBO + "/contatti/", "Richiedi informazioni", "btn btn-bianco")}</p>
      </div>
    </section>
  </main>
"""
    html += piede(p)
    (RADICE / "ribo" / f"{a['slug']}.html").write_text(html, encoding="utf-8")


if __name__ == "__main__":
    home()
    for a in AREE:
        area(a)
    print("Generate: index.html +", ", ".join(f"ribo/{a['slug']}.html" for a in AREE))
