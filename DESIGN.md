---
name: "BBT Consulting"
description: "Un sistema B2B luminoso e prodotto-centrico per rendere visibili strumenti, processi e risultati operativi."
colors:
  ink: "#111827"
  text-muted: "#536074"
  primary: "#2563EB"
  primary-deep: "#1749B8"
  surface-soft: "#F3F6FA"
  border: "#DBE2EC"
  status-success: "#168A55"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "7px"
  content: "8px"
  card: "10px"
  panel: "12px"
  product-window: "13px"
  pill: "999px"
spacing:
  xs: "10px"
  sm: "14px"
  md: "22px"
  lg: "28px"
  xl: "40px"
  xxl: "64px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 19px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 19px"
    height: "48px"
  case-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
  product-window:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.product-window}"
---

# Design System: BBT Consulting

## Overview

**Creative North Star: "La Finestra Operativa"**

Il sistema presenta BBT come un interlocutore B2B concreto: luminoso, ordinato e vicino al linguaggio visivo degli strumenti che la direzione usa ogni giorno. La metafora guida è una finestra operativa aperta sui processi aziendali: ogni superficie deve far capire cosa si controlla, quale passaggio viene semplificato e dove si trova il valore.

La densità è misurata. Ampi margini e titoli netti danno autorevolezza; linee fredde, tabelle, stati e piccoli pannelli portano la concretezza del prodotto. La tecnologia rimane visibile nei meccanismi, non diventa decorazione. Sono esclusi tono dark, gradienti, glassmorphism, glow, immagini stock e metafore visive sull'intelligenza artificiale.

**Key Characteristics:**

- B2B luminoso, ordinato e rassicurante.
- Prodotto e processi reali prima della decorazione.
- Gerarchia tipografica decisa con un'unica famiglia sans serif.
- Blu usato per azioni, selezioni e avanzamento; verde riservato agli stati positivi.
- Superfici quasi piatte, separate da linee sottili e ombre rare.

## Colors

La palette combina carta bianca, inchiostro blu-nero e grigi freddi; il blu operativo concentra l'attenzione sulle azioni e sugli stati attivi.

### Primary

- **Blu operativo:** azioni primarie, link attivi, indicatori di avanzamento e accenti nelle dimostrazioni di prodotto.
- **Blu operativo profondo:** stato hover delle azioni principali, usato solo come variazione funzionale.

### Tertiary

- **Verde di conferma:** stati completati o positivi; non è un secondo colore di marca.

### Neutral

- **Inchiostro direzionale:** testo principale e titoli ad alto contrasto.
- **Ardesia descrittiva:** paragrafi, metadati e informazioni secondarie.
- **Carta bianca:** fondo dominante, navigazione, schede e finestre applicative.
- **Nebbia fredda:** fasce alternate, barre di browser e campi di supporto.
- **Linea fredda:** separatori, bordi dei pannelli e struttura delle tabelle.

### Named Rules

**The One Operational Blue Rule.** Il blu è l'unico accento di marca: non introdurre colori diversi per distinguere servizi o pagine.

**The Status Is Evidence Rule.** Il verde compare solo quando comunica uno stato positivo reale dell'interfaccia, mai come riempitivo decorativo.

## Typography

**Display Font:** Manrope (con fallback sans-serif)

**Body Font:** Manrope (con fallback sans-serif)

**Character:** Una sola famiglia geometrica e leggibile tiene insieme linguaggio consulenziale e interfacce operative. Il peso, la scala e lo spazio creano la gerarchia senza richiedere un secondo carattere decorativo.

### Hierarchy

- **Display** (800, `clamp(3rem, 5vw, 4.5rem)`, 1.02): promessa principale della home; massimo circa 12 caratteri medi per riga.
- **Headline** (800, `clamp(2.25rem, 5vw, 4.8rem)`, 1.02): aperture di sezione con andamento compatto.
- **Title** (700, 1.4rem, 1.2): nomi dei casi e titoli dei blocchi principali.
- **Body** (400, 16px, 1.6): testo descrittivo; mantenere le righe tra circa 48 e 72 caratteri quando possibile.
- **Label** (800, 0.76rem, 0.08em, maiuscolo): categorie, risultati, metadati e piccoli segnali di orientamento.

### Named Rules

**The One Voice Rule.** Tutta la comunicazione pubblica usa Manrope; la differenza tra marketing e prodotto nasce dalla gerarchia, non dal cambio di font.

**The Short Headline Rule.** I titoli principali restano brevi, compatti e leggibili in due o tre righe; non ridurre la scala per contenere testi prolissi.

## Layout

La home usa un contenitore centrale largo al massimo 1180px, con 20px di margine laterale minimo. Il ritmo verticale principale è ampio (112px per sezione); il hero accosta promessa e finestra prodotto in due colonne, mentre elenchi e casi usano griglie orizzontali con separatori netti.

Le pagine di dettaglio restringono il contenuto editoriale a circa 900-960px e mantengono dimostrazioni di prodotto a tutta larghezza del contenitore. Sotto 1020px il hero passa a una colonna; sotto 760px navigazione, prove, servizi, casi, metodo e CTA diventano flussi verticali. A 390px la composizione deve restare interamente contenuta senza scorrimento orizzontale.

**The Show, Then Explain Rule.** Nella prima schermata testo e dimostrazione operativa hanno lo stesso peso: non sostituire la finestra prodotto con fotografia, illustrazione astratta o solo testo.

## Elevation & Depth

Il sistema è piatto per impostazione predefinita. La profondità nasce da fondi tonali, linee da 1px e sovrapposizione controllata; l'ombra diffusa principale appartiene alla finestra prodotto. Pulsanti e casi acquistano una piccola elevazione solo in hover.

### Shadow Vocabulary

- **Finestra operativa** (`0 18px 48px rgba(17,24,39,.1)`): unica ombra ambientale persistente, usata per la dimostrazione prodotto principale.
- **Azione in hover** (`0 10px 24px rgba(37,99,235,.18)`): conferma interattiva del pulsante primario.
- **Caso in hover** (`0 14px 32px rgba(17,24,39,.07)`): sollevamento leggero delle righe cliccabili.

### Named Rules

**The Flat-by-Default Rule.** Le superfici a riposo sono piatte; l'ombra permanente è riservata alla finestra operativa che dimostra il prodotto.

## Shapes

Gli angoli sono moderatamente curvi: controlli compatti a 7-8px, schede a 10px e pannelli principali a 12-13px. I bordi sottili restano visibili e strutturali. Il raggio pieno è ammesso solo per stati, piccoli indicatori e pulsanti circolari; non trasforma i contenitori in capsule.

**The Rectangular Utility Rule.** La forma dominante è rettangolare e operativa; le capsule sono micro-componenti, non una grammatica di layout.

## Components

### Buttons

- **Shape:** rettangolo compatto con angoli moderati (7px) e altezza minima di 48px.
- **Primary:** blu operativo con testo bianco, bordo dello stesso colore e padding orizzontale contenuto (12px 19px).
- **Hover / Focus:** traslazione verticale di 2px, blu più profondo e ombra blu diffusa; focus visibile con anello blu traslucido da 3px e offset da 4px.
- **Secondary:** fondo trasparente, testo e bordo blu; in hover riceve un fondo azzurro molto chiaro.

### Chips

- **Style:** etichette piccole, maiuscole e semibold; fondo bianco o azzurro molto chiaro, bordo freddo e raggio pieno.
- **State:** la variante evidenziata usa il blu operativo per testo e bordo; le etichette non rappresentano nuove categorie cromatiche di marca.

### Cards / Containers

- **Corner Style:** 10px per i casi, 12-13px per pannelli e finestre applicative.
- **Background:** bianco; i pannelli interni possono usare la nebbia fredda.
- **Shadow Strategy:** nessuna ombra a riposo per i casi; ombra ambientale solo sulla finestra prodotto.
- **Border:** linea fredda da 1px.
- **Internal Padding:** 28px per i casi, 14-18px per i pannelli applicativi compatti.

### Navigation

- **Style:** barra bianca sticky alta 78px, separatore inferiore da 1px, logo a sinistra e azione primaria a destra.
- **Typography and states:** link semibold sobri; il blu appare in hover. Sotto 760px un pulsante quadrato da 44px apre un pannello verticale bianco.

### Product Window

La finestra prodotto è il componente firma. Usa cornice fredda, testata browser tenue, tre tab e moduli applicativi compatti. A desktop mostra contemporaneamente le tre aree Fatturato, Produzione e NIS2; su mobile i tab selezionano un pannello alla volta. I dati dimostrativi devono sempre essere dichiarati come esempi.

### Case Rows

I casi sono righe cliccabili, non collezioni di card promozionali. Categoria, nome, problema e risultato dichiarabile convivono nella stessa griglia; una freccia circolare chiude la riga e il sollevamento in hover segnala l'azione.

## Do's and Don'ts

### Do:

- **Do** mostrare interfacce, flussi, stati e integrazioni reali prima di introdurre spiegazioni tecnologiche.
- **Do** usare fondo bianco, nebbia fredda e linee sottili per organizzare contenuti densi senza appesantirli.
- **Do** mantenere un solo blu di marca per azioni e selezioni e il verde per stati positivi verificabili.
- **Do** usare titoli brevi e una gerarchia Manrope decisa per parlare alla direzione di una PMI.
- **Do** dichiarare come dimostrativi tutti i numeri di interfaccia che non sono risultati commerciali documentati.

### Don't:

- **Don't** usare tema dark, gradienti, glassmorphism, glow o fondi neri.
- **Don't** sostituire la concretezza del prodotto con immagini stock, laptop mockup, cervelli AI, robot o oggetti 3D.
- **Don't** creare arcobaleni di accenti per servizi diversi o riempire la pagina di card grandi e molto arrotondate.
- **Don't** inventare loghi cliente, testimonianze, percentuali, ricavi o tempi di progetto non verificati.
- **Don't** presentare l'AI come promessa visiva principale quando il valore risiede nel processo operativo risolto.
