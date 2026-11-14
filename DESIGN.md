---
name: "BBT Consulting"
description: "Sobrietà da società di consulenza e prodotti mostrati in azione: un ponte tra i sistemi che l'azienda ha già e le decisioni di ogni giorno."
colors:
  navy: "#1A3A6B"
  navy-deep: "#12294D"
  cyan: "#00AEEF"
  grey-brand: "#6B7280"
  bg: "#F6F8FB"
  surface: "#FFFFFF"
  ink: "#0F2242"
  text: "#33425A"
  muted: "#56647A"
  line: "#D9E0EA"
  line-strong: "#B9C5D6"
  cyan-wash: "#E4F5FC"
  on-navy: "#DCE6F3"
  on-navy-soft: "#C3D1E4"
  status-ok: "#0F7545"
  status-ok-bg: "#E3F3EA"
  status-warn: "#8A5A00"
  status-warn-bg: "#FBEFD9"
  status-danger: "#A4262C"
  shadow-media: "0 1px 0 rgba(15, 34, 66, .04), 0 24px 48px -28px rgba(15, 34, 66, .35)"
  edge-media: "rgba(15, 34, 66, .08)"
  scrim: "rgba(15, 34, 66, .78)"
  backdrop: "rgba(8, 18, 36, .72)"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.6rem, 1.5rem + 4.4vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.4rem + 2.6vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  product-name:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2rem, 1.5rem + 1.6vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  promise:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.2rem, 1.1rem + .4vw, 1.4rem)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  pill: "999px"
  media: "14px"
  small: "4px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1200px"
  section: "clamp(72px, 10vw, 136px)"
  section-head: "clamp(48px, 7vw, 96px)"
  solution-gap: "clamp(72px, 10vw, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    height: "48px"
  media-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.media}"
---

# Design System: BBT Consulting

> Riferimento vivo: `bozza/index.html` (nuova home approvata il 2026-11-10). Il sito pubblico `index.html` usa ancora il sistema precedente finché la bozza non viene promossa.

## Overview

**Creative North Star: "Il Ponte"**

Il marchio BBT è un ponte e il sistema lo prende alla lettera: da una parte i sistemi che l'azienda ha già (Arca Evolution, SQL Server, ERP, Excel), dall'altra le decisioni di ogni giorno; in mezzo lo strumento su misura costruito e seguito da BBT. Il ponte compare come disegno a linee nell'apertura, nella sezione Chi siamo e nella chiusura del contatto; non è decorazione, è la spiegazione del lavoro.

Due registri convivono. La parte che racconta BBT ha la sobrietà di una società di consulenza: titoli con grazie, molto spazio, linee sottili, nessuna fotografia di repertorio. La parte che presenta i prodotti segue la logica delle pagine prodotto: un prodotto alla volta, il video protagonista, poco testo e tutto concreto.

**Key Characteristics:**

- Luminoso e calmo: fondo bianco tinto verso il blu del marchio, mai crema o beige.
- Navy per testi e azioni, ciano solo per linee e dettagli del ponte.
- Titoli con grazie (Source Serif 4), testo e interfaccia in Inter.
- Prodotti con nome proprio, mostrati in video o in anteprima d'interfaccia dichiarata come dimostrativa.
- Superfici piatte separate da linee da 1px; un'unica ombra, riservata alle cornici dei media.

## Colors

I colori ufficiali vengono dalle Brand Guidelines BBT (navy #1A3A6B, ciano #00AEEF, grigio #6B7280). Attorno a questi il sistema usa neutri tinti verso il navy.

### Primary

- **Navy BBT** (`navy`): pulsanti primari, link, numeri dei passi, fondo della sezione contatto.
- **Navy profondo** (`navy-deep`): solo stato hover delle azioni.

### Accent

- **Ciano del ponte** (`cyan`): cavi e tiranti del ponte, trattino delle aree prodotto, linea del metodo. Contrasto 2,5:1 su bianco: **mai per il testo**.
- **Velo ciano** (`cyan-wash`): fondo dei chip informativi.

### Neutral

- **Inchiostro** (`ink`): titoli. **Testo** (`text`): paragrafi (9,6:1 sul fondo). **Attenuato** (`muted`): metadati e didascalie (5,6:1).
- **Fondo** (`bg`) e **superficie** (`surface`): le sezioni alternano i due per dare ritmo.
- **Linea** e **linea forte**: separatori, bordi dei pulsanti secondari.
- **Su navy** (`on-navy`, `on-navy-soft`): testi nella sezione contatto (9,0:1 e 7,3:1).

### Status

Verde, ambra e rosso compaiono solo dentro le anteprime d'interfaccia per stati reali (Conforme, Da completare, Fermo), mai come colori di marca.

### Named Rules

**The Cyan Is Structure Rule.** Il ciano disegna, non scrive: linee, cavi, trattini. Ogni testo è navy, inchiostro o bianco.

**The Cool Paper Rule.** Il fondo è bianco tinto verso il navy; i fondi caldi (crema, sabbia, avorio) sono esclusi.

## Typography

**Display e titoli:** Source Serif 4 (600; 500 per le promesse), fallback Georgia.
**Testo e interfaccia:** Inter (400–600), fallback system-ui. Coerente con le Brand Guidelines aggiornate il 2026-11-10.

### Hierarchy

- **Display** (600, `clamp(2.6rem, …, 5.25rem)`, 1.02): solo la frase d'apertura; seconda riga in navy.
- **Headline** (600, `clamp(2.1rem, …, 3.5rem)`, 1.06): aperture di sezione, a sinistra; la frase di supporto sta a destra, allineata in basso.
- **Product name** (600, `clamp(2rem, …, 2.75rem)`): nome del prodotto.
- **Promise** (500, serif, ~1.3rem): la promessa del prodotto in una frase.
- **Title** (600, 1.35rem): passi del metodo, principi.
- **Body** (Inter 400, 17px, 1.6; 16px su telefono): righe tra 45 e 75 caratteri.
- **Label** (Inter 600, 14px, minuscolo): area del prodotto, preceduta da un trattino ciano. Nessuna etichetta maiuscola spaziata.

### Named Rules

**The 14px Floor Rule.** Nessun testo leggibile sotto i 14px (eccetto i dati decorativi dentro le anteprime, marcate `aria-hidden`).

**The Typographic Apostrophe Rule.** Nel testo italiano si usano apostrofi e virgolette tipografiche (’ « »).

## Layout

Contenitore massimo 1200px con margine `clamp(16px, 4vw, 40px)`. Sezioni da `clamp(72px, 10vw, 136px)`. Le intestazioni di sezione usano una griglia 7/5: titolo a sinistra, frase di supporto a destra in basso.

I blocchi prodotto usano una griglia 7/5 (media/testo) che si alterna a sinistra e a destra; tra un prodotto e l'altro c'è uno stacco ampio. Sotto 960px tutto passa a una colonna con il media sopra il testo; il menu diventa un pannello sotto 820px. A 375px nessun elemento esce dallo schermo.

**The One Product Per View Rule.** Un prodotto occupa una "scena": media, nome, promessa, prima/dopo, con cosa si collega, cosa ottenete, demo e scheda. Niente griglie di card con più prodotti affiancati.

## Elevation & Depth

Piatto per impostazione predefinita. L'unica ombra (`shadow-media`) appartiene alle cornici dei media prodotto. L'intestazione sticky acquista una linea inferiore dopo lo scorrimento.

## Shapes

Pulsanti a capsula (999px), cornici media a 14px, piccole barre a 4px. Pannelli e liste usano linee, non card. I cerchi compaiono solo per i numeri dei passi, i nodi del ponte e i controlli dei video.

## Components

### Buttons

- **Primario:** capsula navy, testo bianco Inter 600 15px, altezza minima 48px; hover navy profondo.
- **Secondario (ghost):** trasparente, testo navy, bordo `line-strong`; in hover il bordo diventa navy.
- **Chiaro:** bianco su navy, per la sezione contatto.
- **Link con freccia:** navy 600, la freccia scorre di 3px in hover.
- Focus: contorno 2px navy (bianco sul fondo navy), offset 3px.

### Solution block

Fonte unica: `bozza/soluzioni.js`. Ogni voce ha `id, nome, area, promessa, problema, cambia[3], siCollega, ottenete, media, scheda`. `media.tipo` è `video` (loop muto + poster + demo opzionale) oppure `anteprima` (interfaccia HTML dimostrativa con etichetta "Video demo in preparazione"). Aggiungere un prodotto = aggiungere una voce.

### Media frame

Cornice 16:9 a 14px con `shadow-media`. Il loop parte solo quando è visibile per almeno il 35%, si ferma fuori schermo, ha un pulsante pausa/riproduci da 44px e non parte da solo con `prefers-reduced-motion`. Didascalia sotto: "Estratto della demo · dati dimostrativi" o "Anteprima dell’interfaccia · dati dimostrativi".

### Demo dialog

`<dialog>` nativo con video completo e controlli; la chiusura (pulsante, clic sullo sfondo, Esc) ferma sempre il video.

### Bridge

SVG con impalcato e pilone navy, cavi e tiranti ciano. Nell'apertura si disegna al caricamento (statico con movimento ridotto) con tre didascalie HTML: i sistemi che avete già, lo strumento su misura, le decisioni di ogni giorno.

### About mark ("Perché un ponte")

Al posto di una foto del team (non disponibile, nessuna foto finta): pannello chiaro con il ponte, il significato del marchio e tre fatti verificabili (sede, sistemi, referente).

### Navigation

Logo ufficiale (versione principale) alto 58px (48px su telefono), tre voci e il pulsante "Prenota 30 minuti". Sotto 820px pulsante menu da 44px e pannello verticale.

### Giulia

Pulsante flottante da `giulia.js` con `data-tema="bbt"` (navy, Inter).

## Video standard

- **Loop:** 20–30 s, muto, 1280×720 H.264, ≤ 2 MB, zoom sulle zone chiave, nessuna scritta dentro il video.
- **Demo:** 60–120 s, con voce, ≤ 6 MB, sottotitoli preferibilmente in file `.vtt`.
- **Struttura:** problema (5 s) → una scena per ruolo → cosa cambia → invito al contatto. Registrare con zoom del browser al 125–150%.

## Do's and Don'ts

### Do:

- **Do** dare del "voi" in tutti i testi; frasi brevi, risultato prima della tecnologia.
- **Do** dichiarare sempre come dimostrativi i dati di interfaccia.
- **Do** usare il ponte come unica immagine di marca, a linee.
- **Do** mostrare i prodotti in azione (video o anteprima) prima di spiegarli.

### Don't:

- **Don't** usare foto di repertorio, foto finte del team, cervelli AI, robot, laptop mockup.
- **Don't** usare il ciano per il testo, gradienti, glassmorphism, tema dark.
- **Don't** mettere etichette maiuscole spaziate sopra ogni sezione o numerare sezioni che non sono una sequenza.
- **Don't** usare "innovativo", "trasformazione digitale", "soluzioni all'avanguardia".
- **Don't** inventare clienti, testimonianze, percentuali o tempi di progetto.
