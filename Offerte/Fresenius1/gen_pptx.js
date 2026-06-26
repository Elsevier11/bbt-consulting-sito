'use strict';
const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'Copilot in Microsoft 365 — Percorso Formativo Fresenius Kabi';
pres.author = 'Zerobyte';

const C = {
  ink:    '0D1B2A',
  accent: '2F7FD4',
  sage:   '4A7C6F',
  base:   'F7F8FA',
  soft:   'EFF2F6',
  border: 'E2E5EA',
  muted:  '6B7280',
  white:  'FFFFFF',
  onDark: 'C8D6E8',
};

const mkShadow = () => ({ type: 'outer', color: '000000', blur: 8, offset: 3, angle: 45, opacity: 0.10 });
const mkCardShadow = () => ({ type: 'outer', color: '000000', blur: 6, offset: 2, angle: 45, opacity: 0.08 });

// ─── SLIDE 1 — Titolo ───────────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  // Label piccola
  sl.addText('PERCORSO FORMATIVO · COPILOT IN MICROSOFT 365', {
    x: 0.6, y: 0.55, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  // Titolo grande
  sl.addText('Copilot è già disponibile.', {
    x: 0.6, y: 0.95, w: 8.8, h: 1.1,
    fontFace: 'Cambria', fontSize: 44, bold: true, color: C.white, align: 'left',
  });

  // Divider accent
  sl.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.1, w: 0.55, h: 0.055,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  // Sottotitolo italic
  sl.addText('La domanda è come farlo usare davvero.', {
    x: 0.6, y: 2.22, w: 8.8, h: 0.5,
    fontFace: 'Cambria', fontSize: 20, italic: true, color: C.onDark, align: 'left',
  });

  // Corpo
  sl.addText(
    'Avere le licenze non basta. Serve che le persone capiscano cosa possono fare — nei propri contesti, con i propri documenti, nelle proprie giornate.',
    {
      x: 0.6, y: 2.88, w: 8.3, h: 0.85,
      fontFace: 'Calibri', fontSize: 15, color: C.onDark, align: 'left',
    }
  );

  // Footer
  sl.addText('Zerobyte x Fresenius Kabi Italia', {
    x: 0.6, y: 5.18, w: 8.8, h: 0.3,
    fontFace: 'Calibri', fontSize: 10, color: C.muted, align: 'right',
  });
}

// ─── SLIDE 2 — Il problema ───────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.base };

  sl.addText('IL PROBLEMA', {
    x: 0.6, y: 0.42, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText(
    '"Una sessione generalista su Copilot funziona come uno spettacolo di magia: lascia impressionati, ma con la consapevolezza che sia appunto magia — qualcosa che non entra nei processi quotidiani."',
    {
      x: 0.6, y: 0.82, w: 8.8, h: 2.1,
      fontFace: 'Cambria', fontSize: 22, italic: true, color: C.ink, align: 'left',
    }
  );

  // Pill sinistra — rossastra
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 3.25, w: 4.1, h: 1.6,
    fill: { color: 'FEE2E2' }, line: { color: 'FCA5A5', width: 1 }, rectRadius: 0.12,
    shadow: mkCardShadow(),
  });
  sl.addText('Sessione generalista', {
    x: 0.75, y: 3.38, w: 3.8, h: 0.3,
    fontFace: 'Calibri', fontSize: 13, bold: true, color: '991B1B', align: 'left',
  });
  sl.addText('Crea consapevolezza, ma genera poca adozione nei processi quotidiani.', {
    x: 0.75, y: 3.7, w: 3.8, h: 0.95,
    fontFace: 'Calibri', fontSize: 12, color: '7F1D1D', align: 'left',
  });

  // Pill destra — verdina
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 3.25, w: 4.3, h: 1.6,
    fill: { color: 'D1FAE5' }, line: { color: '6EE7B7', width: 1 }, rectRadius: 0.12,
    shadow: mkCardShadow(),
  });
  sl.addText('Base comune + verticali', {
    x: 5.25, y: 3.38, w: 3.95, h: 0.3,
    fontFace: 'Calibri', fontSize: 13, bold: true, color: '065F46', align: 'left',
  });
  sl.addText('Porta Copilot nell\'uso reale, dentro i processi specifici di ogni funzione.', {
    x: 5.25, y: 3.7, w: 3.95, h: 0.95,
    fontFace: 'Calibri', fontSize: 12, color: '064E3B', align: 'left',
  });
}

// ─── SLIDE 3 — Fase 1 intro ──────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  sl.addText('FASE 1', {
    x: 0.6, y: 1.45, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('La sessione comune.', {
    x: 0.6, y: 1.85, w: 8.8, h: 1.1,
    fontFace: 'Cambria', fontSize: 44, bold: true, color: C.white, align: 'left',
  });

  sl.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.02, w: 0.55, h: 0.055,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  sl.addText(
    'Stessa base per tutti — indipendentemente dalla sede, dal ruolo, dalla funzione. Tre ore a testa, in due slot non consecutivi.',
    {
      x: 0.6, y: 3.18, w: 8.3, h: 0.85,
      fontFace: 'Calibri', fontSize: 16, color: C.onDark, align: 'left',
    }
  );
}

// ─── SLIDE 4 — Le sedi ───────────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.base };

  sl.addText('FASE 1 · LE SEDI', {
    x: 0.6, y: 0.32, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('~580 persone. 5 sedi. 12 giornate.', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.7,
    fontFace: 'Cambria', fontSize: 30, bold: true, color: C.ink, align: 'left',
  });

  const sedi = [
    { num: '~120', nome: 'Verona', det: '3 giornate · in presenza' },
    { num: '~100', nome: 'Isola della Scala', det: '2 giornate · in presenza' },
    { num: '~100', nome: 'Mirandola', det: '2 giornate · in presenza' },
    { num: '~200', nome: 'Villadose', det: '4 giornate · in presenza' },
    { num: '~60',  nome: 'Forza vendita', det: '1 giornata · da definire' },
  ];

  const cardW = 1.7;
  const cardGap = 0.17;
  const startX = 0.45;
  const cardY = 1.6;
  const cardH = 2.8;

  sedi.forEach((s, i) => {
    const cx = startX + i * (cardW + cardGap);
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: cardY, w: cardW, h: cardH,
      fill: { color: C.white }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
      shadow: mkCardShadow(),
    });
    sl.addText(s.num, {
      x: cx + 0.08, y: cardY + 0.18, w: cardW - 0.16, h: 1.1,
      fontFace: 'Cambria', fontSize: 36, bold: true, color: C.accent, align: 'center',
    });
    sl.addText(s.nome, {
      x: cx + 0.08, y: cardY + 1.35, w: cardW - 0.16, h: 0.75,
      fontFace: 'Calibri', fontSize: 12, bold: true, color: C.ink, align: 'center',
    });
    sl.addText(s.det, {
      x: cx + 0.08, y: cardY + 2.18, w: cardW - 0.16, h: 0.5,
      fontFace: 'Calibri', fontSize: 10, color: C.muted, align: 'center',
    });
  });

  sl.addText('~580 persone coinvolte · 12 giornate totali · date da definire', {
    x: 0.6, y: 5.18, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 10, italic: true, color: '9CA3AF', align: 'left',
  });
}

// ─── SLIDE 5 — La giornata tipo ─────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.soft };

  sl.addText('COME FUNZIONA UNA GIORNATA', {
    x: 0.6, y: 0.32, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Tre ore a testa. Non di più.', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.62,
    fontFace: 'Cambria', fontSize: 28, bold: true, color: C.ink, align: 'left',
  });

  // Tabella timeline
  const tableData = [
    [
      { text: '', options: { fill: { color: C.soft } } },
      { text: '9:00–10:30', options: { bold: true, color: C.ink, fill: { color: C.soft }, fontSize: 12 } },
      { text: '11:00–12:30', options: { bold: true, color: C.ink, fill: { color: C.soft }, fontSize: 12 } },
      { text: '14:00–15:30', options: { bold: true, color: C.ink, fill: { color: C.soft }, fontSize: 12 } },
      { text: '16:00–17:30', options: { bold: true, color: C.ink, fill: { color: C.soft }, fontSize: 12 } },
    ],
    [
      { text: 'Gruppo A', options: { bold: true, color: C.ink, fill: { color: 'EFF2F6' }, fontSize: 12 } },
      { text: 'Capire Copilot', options: { bold: true, color: C.accent, fill: { color: 'DBEAFE' }, fontSize: 12 } },
      { text: '', options: { fill: { color: 'F3F4F6' } } },
      { text: 'Copilot in azione', options: { bold: true, color: C.sage, fill: { color: 'D1FAE5' }, fontSize: 12 } },
      { text: '', options: { fill: { color: 'F3F4F6' } } },
    ],
    [
      { text: 'Gruppo B', options: { bold: true, color: C.ink, fill: { color: 'EFF2F6' }, fontSize: 12 } },
      { text: '', options: { fill: { color: 'F3F4F6' } } },
      { text: 'Capire Copilot', options: { bold: true, color: C.accent, fill: { color: 'DBEAFE' }, fontSize: 12 } },
      { text: '', options: { fill: { color: 'F3F4F6' } } },
      { text: 'Copilot in azione', options: { bold: true, color: C.sage, fill: { color: 'D1FAE5' }, fontSize: 12 } },
    ],
  ];

  sl.addTable(tableData, {
    x: 0.55, y: 1.52, w: 8.9, h: 2.8,
    border: { pt: 1, color: C.border },
    colW: [1.4, 1.875, 1.875, 1.875, 1.875],
    rowH: [0.55, 1.05, 1.05],
    valign: 'middle',
    align: 'center',
    fontFace: 'Calibri',
  });

  sl.addText('Orari indicativi · le date vengono stabilite in accordo con il cliente', {
    x: 0.6, y: 5.2, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 10, italic: true, color: '9CA3AF', align: 'left',
  });
}

// ─── SLIDE 6 — Slot 1: Capire Copilot ───────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.base };

  sl.addText('SLOT 1 · 90 MINUTI', {
    x: 0.6, y: 0.42, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Capire Copilot', {
    x: 0.6, y: 0.82, w: 8.8, h: 0.65,
    fontFace: 'Cambria', fontSize: 32, bold: true, color: C.ink, align: 'left',
  });

  const bullets = [
    'Cos\'è Copilot e perché è diverso da ChatGPT e altri strumenti gratuiti',
    'Come funziona: logica conversazionale, contesto, memoria di sessione',
    'Cosa Copilot vede e cosa non vede nei tuoi file',
    'Perché usare lo strumento aziendale invece di quelli esterni',
    'Anatomia di un buon prompt: R·C·C·E·V — Ruolo, Contesto, Compito, Esempi, Vincoli di formattazione',
    'Verifica umana: perché rimane sempre necessaria',
  ];

  const items = bullets.map((b, i) => ({
    text: b,
    options: { bullet: true, breakLine: i < bullets.length - 1, fontSize: 15.5, color: C.ink, fontFace: 'Calibri', paraSpaceAfter: 20 },
  }));

  sl.addText(items, {
    x: 0.7, y: 1.55, w: 8.5, h: 3.82,
    valign: 'middle',
  });
}

// ─── SLIDE 7 — Slot 2: Copilot in azione ────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.soft };

  sl.addText('SLOT 2 · 90 MINUTI', {
    x: 0.6, y: 0.42, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.sage,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Copilot in azione', {
    x: 0.6, y: 0.82, w: 8.8, h: 0.65,
    fontFace: 'Cambria', fontSize: 32, bold: true, color: C.ink, align: 'left',
  });

  const rows = [
    { app: 'Outlook', desc: '— sintesi thread, risposte, cambio tono, estrazione azioni' },
    { app: 'Teams', desc: '— riepilogo riunione, action items, Q&A su trascrizioni' },
    { app: 'Word', desc: '— bozze, riscrittura, adattamento del registro' },
    { app: 'Excel', desc: '— commento a tabelle, lettura dati in linguaggio naturale' },
    { app: 'PowerPoint', desc: '— sintesi di presentazioni ricevute, estrazione contenuti' },
    { app: 'Domande aperte', desc: 'e casi portati dai partecipanti' },
  ];

  const richItems = [];
  rows.forEach((r, i) => {
    richItems.push({ text: r.app, options: { bold: true, fontSize: 15.5, color: C.ink, fontFace: 'Calibri', bullet: true } });
    richItems.push({ text: ' ' + r.desc, options: { bold: false, fontSize: 15.5, color: '4B5563', fontFace: 'Calibri', breakLine: i < rows.length - 1, paraSpaceAfter: 22 } });
  });

  sl.addText(richItems, {
    x: 0.7, y: 1.58, w: 8.5, h: 3.75,
    valign: 'top',
  });
}

// ─── SLIDE 8 — Demo intro ────────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  sl.addText('DEMO', {
    x: 0.6, y: 0.55, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Copilot al lavoro —\nesempi concreti.', {
    x: 0.6, y: 0.95, w: 8.8, h: 1.7,
    fontFace: 'Cambria', fontSize: 42, bold: true, color: C.white, align: 'left',
  });

  sl.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.72, w: 0.55, h: 0.055,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  sl.addText('Prompt reali, output reali. Ambientati nei contesti di lavoro di Fresenius Kabi.', {
    x: 0.6, y: 2.88, w: 8.3, h: 0.65,
    fontFace: 'Calibri', fontSize: 16, color: C.onDark, align: 'left',
  });
}

// ─── SLIDE 9 — Demo: Outlook ─────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  // Sinistra — prompt (sfondo ink già impostato)
  sl.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4.5, h: 5.625,
    fill: { color: C.ink }, line: { color: C.ink, width: 0 },
  });

  sl.addText('PROMPT', {
    x: 0.5, y: 0.5, w: 3.7, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.onDark, charSpacing: 2,
  });

  sl.addText(
    'Ho una catena di mail con il distributore di Verona che va avanti da tre settimane. Ci sono almeno 12 messaggi. Riassumimi i punti chiave, le richieste ancora aperte e il tono complessivo.',
    {
      x: 0.5, y: 0.95, w: 3.75, h: 3.5,
      fontFace: 'Cambria', fontSize: 14, italic: true, color: C.white, align: 'left', valign: 'top',
    }
  );

  // Destra — risposta
  sl.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 0, w: 5.5, h: 5.625,
    fill: { color: C.white }, line: { color: C.white, width: 0 },
  });

  sl.addText('RISPOSTA DI COPILOT', {
    x: 4.85, y: 0.5, w: 4.85, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent, charSpacing: 2,
  });

  sl.addText('Riepilogo thread — Distributore Verona', {
    x: 4.85, y: 0.92, w: 4.85, h: 0.4,
    fontFace: 'Calibri', fontSize: 14, bold: true, color: C.ink, align: 'left',
  });

  const outItems = [
    { text: 'Punti chiave', options: { bold: true, fontSize: 13, color: C.ink, fontFace: 'Calibri', bullet: true, breakLine: true } },
    { text: 'Discussione aperta su tempistiche di consegna e aggiornamento listini 2026.', options: { fontSize: 12, color: '374151', fontFace: 'Calibri', breakLine: true, paraSpaceAfter: 6 } },
    { text: 'Accordo di massima su modalità di pagamento; dettagli ancora da formalizzare.', options: { fontSize: 12, color: '374151', fontFace: 'Calibri', breakLine: true, paraSpaceAfter: 10 } },
    { text: 'Richieste aperte', options: { bold: true, fontSize: 13, color: C.ink, fontFace: 'Calibri', bullet: true, breakLine: true } },
    { text: '1. Conferma disponibilità SKU prioritari per Q3.', options: { fontSize: 12, color: '374151', fontFace: 'Calibri', breakLine: true, paraSpaceAfter: 4 } },
    { text: '2. Proposta scritta per rinnovo contratto annuale.', options: { fontSize: 12, color: '374151', fontFace: 'Calibri', breakLine: true, paraSpaceAfter: 10 } },
    { text: 'Tono complessivo', options: { bold: true, fontSize: 13, color: C.ink, fontFace: 'Calibri', bullet: true, breakLine: true } },
    { text: 'Collaborativo, con segnali di leggera impazienza sul versante del distributore.', options: { fontSize: 12, color: '374151', fontFace: 'Calibri' } },
  ];

  sl.addText(outItems, {
    x: 4.85, y: 1.45, w: 4.75, h: 3.7, valign: 'top',
  });
}

// ─── SLIDE 10 — Demo: Word ───────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  sl.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4.5, h: 5.625,
    fill: { color: C.ink }, line: { color: C.ink, width: 0 },
  });

  sl.addText('PROMPT', {
    x: 0.5, y: 0.5, w: 3.7, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.onDark, charSpacing: 2,
  });

  sl.addText(
    'Ho questi bullet point con i risultati del progetto pilota sulla nutrizione parenterale. Trasformali in un paragrafo di sintesi per la relazione trimestrale al management — tono formale, massimo 120 parole.',
    {
      x: 0.5, y: 0.95, w: 3.75, h: 3.5,
      fontFace: 'Cambria', fontSize: 14, italic: true, color: C.white, align: 'left', valign: 'top',
    }
  );

  sl.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 0, w: 5.5, h: 5.625,
    fill: { color: C.white }, line: { color: C.white, width: 0 },
  });

  sl.addText('RISPOSTA DI COPILOT', {
    x: 4.85, y: 0.5, w: 4.85, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent, charSpacing: 2,
  });

  sl.addText('Paragrafo generato', {
    x: 4.85, y: 0.92, w: 4.85, h: 0.4,
    fontFace: 'Calibri', fontSize: 14, bold: true, color: C.ink, align: 'left',
  });

  sl.addText(
    'Il progetto pilota sulla nutrizione parenterale, avviato nel primo trimestre, ha registrato risultati in linea con gli obiettivi prefissati. L\'aderenza al protocollo ha raggiunto il 94% nei centri coinvolti, con una riduzione delle complicanze correlate del 18% rispetto al periodo di confronto. I dati raccolti confermano l\'efficacia del percorso clinico adottato e supportano l\'estensione del programma alle strutture ancora escluse dalla fase sperimentale. Si raccomanda di procedere con la pianificazione della seconda fase entro il prossimo trimestre.',
    {
      x: 4.85, y: 1.45, w: 4.75, h: 3.7,
      fontFace: 'Calibri', fontSize: 13, color: '374151', align: 'left', valign: 'top',
    }
  );
}

// ─── SLIDE 11 — Fase 2 intro ─────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  sl.addText('FASE 2', {
    x: 0.6, y: 1.28, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('I percorsi verticali.', {
    x: 0.6, y: 1.68, w: 8.8, h: 1.1,
    fontFace: 'Cambria', fontSize: 44, bold: true, color: C.white, align: 'left',
  });

  sl.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.85, w: 0.55, h: 0.055,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  sl.addText(
    'Dopo la sessione comune, moduli di mezza giornata costruiti sui processi reali di ciascuna funzione.',
    {
      x: 0.6, y: 3.02, w: 8.3, h: 0.7,
      fontFace: 'Calibri', fontSize: 16, color: C.onDark, align: 'left',
    }
  );

  sl.addText(
    'I contenuti vengono definiti insieme ai responsabili di funzione — prima di progettare qualsiasi modulo.',
    {
      x: 0.6, y: 3.85, w: 8.3, h: 0.55,
      fontFace: 'Calibri', fontSize: 13, italic: true, color: C.onDark, align: 'left',
    }
  );
}

// ─── SLIDE 12 — Le funzioni ──────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.base };

  sl.addText('FASE 2 · AREE', {
    x: 0.6, y: 0.32, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Quattro aree prioritarie.', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.65,
    fontFace: 'Cambria', fontSize: 30, bold: true, color: C.ink, align: 'left',
  });

  const funzioni = [
    {
      icona: 'AMMIN.',
      titolo: 'Amministrazione e gestione documentale',
      desc: 'Sintesi di contratti, estrazione dati da documenti, redazione di comunicazioni formali.',
      prompt: '"Leggi questo contratto e segnalami le clausole che si discostano dalle nostre condizioni standard."',
    },
    {
      icona: 'MKT.',
      titolo: 'Marketing e comunicazione',
      desc: 'Adattamento di testi per canali diversi, sintesi di brief, riscrittura di materiali promozionali.',
      prompt: '"Adatta questo comunicato stampa per LinkedIn, mantenendo il tono istituzionale ma rendendolo più diretto."',
    },
    {
      icona: 'SALES',
      titolo: 'Vendite e supporto commerciale',
      desc: 'Preparazione visite, analisi offerte, gestione obiezioni, simulazione trattative.',
      prompt: '"Preparami un\'analisi dei punti di forza e debolezza di questa offerta rispetto al competitor."',
    },
    {
      icona: 'CTRL.',
      titolo: 'Controllo di gestione e analisi dati',
      desc: 'Commento a report, lettura di tabelle in linguaggio naturale, sintesi per il management.',
      prompt: '"Leggi questi dati di budget e dimmi dove ci sono gli scostamenti più significativi rispetto al piano."',
    },
  ];

  const cols = [0.5, 5.25];
  const rows = [1.52, 3.4];
  const cw = 4.35;
  const ch = 1.7;

  funzioni.forEach((f, i) => {
    const cx = cols[i % 2];
    const cy = rows[Math.floor(i / 2)];

    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: C.white }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
      shadow: mkCardShadow(),
    });

    // Icona badge
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx + 0.18, y: cy + 0.18, w: 0.78, h: 0.38,
      fill: { color: C.accent }, line: { color: C.accent, width: 0 }, rectRadius: 0.06,
    });
    sl.addText(f.icona, {
      x: cx + 0.18, y: cy + 0.18, w: 0.78, h: 0.38,
      fontFace: 'Calibri', fontSize: 8, bold: true, color: C.white, align: 'center', valign: 'middle', margin: 0,
    });

    sl.addText(f.titolo, {
      x: cx + 1.05, y: cy + 0.18, w: cw - 1.2, h: 0.38,
      fontFace: 'Calibri', fontSize: 12, bold: true, color: C.ink, align: 'left', valign: 'middle',
    });

    sl.addText(f.desc, {
      x: cx + 0.18, y: cy + 0.65, w: cw - 0.36, h: 0.45,
      fontFace: 'Calibri', fontSize: 11, color: C.muted, align: 'left',
    });

    sl.addText([
      { text: 'Esempio: ', options: { bold: true, fontSize: 10, color: C.ink } },
      { text: f.prompt, options: { italic: true, fontSize: 10, color: C.muted } },
    ], {
      x: cx + 0.18, y: cy + 1.14, w: cw - 0.36, h: 0.46,
      align: 'left', valign: 'top',
    });
  });
}

// ─── SLIDE 13 — Funzioni regolamentate ──────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.soft };

  sl.addText('FUNZIONI REGOLAMENTATE', {
    x: 0.6, y: 0.52, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.sage,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Un percorso dedicato per le funzioni soggette a vincoli normativi.', {
    x: 0.6, y: 0.92, w: 8.8, h: 0.9,
    fontFace: 'Cambria', fontSize: 26, bold: true, color: C.ink, align: 'left',
  });

  // Box callout — centrato verticalmente
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.08, w: 8.6, h: 2.85,
    fill: { color: C.white }, line: { color: C.sage, width: 2 }, rectRadius: 0.12,
    shadow: mkShadow(),
  });

  sl.addText(
    'Per Regulatory Affairs, Quality Assurance, Medical Affairs e Pharmacovigilance sono previsti percorsi dedicati, con contenuti calibrati sui vincoli normativi specifici.\n\nModalità e argomenti vengono definiti congiuntamente dopo il workshop di analisi dei bisogni.',
    {
      x: 1.1, y: 2.35, w: 7.8, h: 2.4,
      fontFace: 'Calibri', fontSize: 15, color: C.ink, align: 'left', valign: 'middle',
    }
  );
}

// ─── SLIDE 14 — Cosa è incluso ───────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.base };

  sl.addText('MATERIALI E SUPPORTO', {
    x: 0.6, y: 0.32, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Quello che è incluso.', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.65,
    fontFace: 'Cambria', fontSize: 30, bold: true, color: C.ink, align: 'left',
  });

  const items = [
    { n: '01', title: 'Slide della sessione in PDF', desc: 'Materiale di riferimento per tutti i partecipanti.' },
    { n: '02', title: 'Scheda "Anatomia di un buon prompt"', desc: 'Il modello R·C·C·E·V in formato tascabile.' },
    { n: '03', title: 'Raccolta prompt per applicativo', desc: 'Prompt pronti all\'uso per Outlook, Teams, Word, Excel, PowerPoint.' },
    { n: '04', title: 'Guida all\'uso corretto di Copilot', desc: 'Consigli pratici, limiti da conoscere, buone abitudini.' },
    { n: '05', title: 'Prima di inviare, tre domande', desc: 'Checklist rapida per la verifica umana degli output.' },
    { n: '06', title: 'Assistenza post-formazione', desc: '30 giorni via mail + 2 sessioni Q&A da remoto.' },
  ];

  const cols = [0.5, 5.15];
  const rowH = 1.22;
  const startY = 1.52;

  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = cols[col];
    const cy = startY + row * rowH;
    const cw = 4.4;
    const ch = 1.08;

    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: C.white }, line: { color: C.border, width: 1 }, rectRadius: 0.1,
      shadow: mkCardShadow(),
    });

    sl.addText(it.n, {
      x: cx + 0.18, y: cy + 0.1, w: 0.5, h: 0.38,
      fontFace: 'Cambria', fontSize: 18, bold: true, color: C.accent, align: 'left',
    });

    sl.addText(it.title, {
      x: cx + 0.72, y: cy + 0.1, w: cw - 0.88, h: 0.38,
      fontFace: 'Calibri', fontSize: 12, bold: true, color: C.ink, align: 'left', valign: 'middle',
    });

    sl.addText(it.desc, {
      x: cx + 0.18, y: cy + 0.55, w: cw - 0.36, h: 0.44,
      fontFace: 'Calibri', fontSize: 10.5, color: C.muted, align: 'left',
    });
  });
}

// ─── SLIDE 15 — Prossimi passi ───────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.soft };

  sl.addText('PROSSIMI PASSI', {
    x: 0.6, y: 0.32, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.accent,
    charSpacing: 2, align: 'left',
  });

  sl.addText('Da qui a un\'organizzazione che usa Copilot davvero.', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.8,
    fontFace: 'Cambria', fontSize: 26, bold: true, color: C.ink, align: 'left',
  });

  const steps = [
    { n: '1', label: 'Allineamento', desc: 'Incontro conoscitivo, chiarimento obiettivi, date per sede', active: true },
    { n: '2', label: 'Fase 1', desc: 'Sessioni comuni nelle 5 sedi. 2 Q&A nelle settimane successive', active: false },
    { n: '3', label: 'Workshop', desc: 'Incontro con responsabili di funzione per progettare i verticali', active: false },
    { n: '4', label: 'Fase 2', desc: 'Moduli verticali per area aziendale', active: false },
    { n: '5', label: 'Oltre Copilot', desc: 'Agenti AI personalizzati', active: false, future: true },
  ];

  const stepW = 1.72;
  const startX = 0.42;
  const stepY = 1.72;
  const circleY = 1.82;
  const circleR = 0.38;
  const connY = circleY + circleR - 0.03;

  // Connettori (linee)
  for (let i = 0; i < steps.length - 1; i++) {
    const x1 = startX + i * stepW + circleR * 2 + 0.02;
    const x2 = startX + (i + 1) * stepW - 0.02;
    sl.addShape(pres.shapes.LINE, {
      x: x1, y: connY, w: x2 - x1, h: 0,
      line: { color: C.border, width: 1.5 },
    });
  }

  steps.forEach((s, i) => {
    const cx = startX + i * stepW;
    const circleFill = s.future ? C.soft : (s.active ? C.accent : C.white);
    const circleLine = s.future ? C.muted : (s.active ? C.accent : C.border);
    const numColor = s.future ? C.muted : (s.active ? C.white : C.ink);

    sl.addShape(pres.shapes.OVAL, {
      x: cx, y: circleY, w: circleR * 2, h: circleR * 2,
      fill: { color: circleFill },
      line: { color: circleLine, width: s.future ? 1 : 2 },
    });

    sl.addText(s.n, {
      x: cx, y: circleY, w: circleR * 2, h: circleR * 2,
      fontFace: 'Cambria', fontSize: 16, bold: true, color: numColor,
      align: 'center', valign: 'middle', margin: 0,
    });

    sl.addText(s.label, {
      x: cx - 0.12, y: circleY + circleR * 2 + 0.14, w: stepW - 0.05, h: 0.35,
      fontFace: 'Calibri', fontSize: 12, bold: true,
      color: s.future ? C.muted : C.ink, align: 'center',
    });

    sl.addText(s.desc + (s.future ? '\n(orizzonte futuro)' : ''), {
      x: cx - 0.12, y: circleY + circleR * 2 + 0.55, w: stepW - 0.05, h: 1.2,
      fontFace: 'Calibri', fontSize: 10,
      color: s.future ? '7B8A99' : C.muted, align: 'center', italic: !!s.future,
    });
  });
}

// ─── SLIDE 16 — L'agente tutor ───────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  sl.addText('UN ESEMPIO GIÀ REALE', {
    x: 0.6, y: 0.38, w: 8.8, h: 0.28,
    fontFace: 'Calibri', fontSize: 9, bold: true, color: C.sage,
    charSpacing: 2, align: 'left',
  });

  sl.addText('L\'agente tutor per la forza vendita.', {
    x: 0.6, y: 0.75, w: 8.8, h: 0.85,
    fontFace: 'Cambria', fontSize: 30, bold: true, color: C.white, align: 'left',
  });

  sl.addText('Uno strumento calibrato sul contesto di Fresenius Kabi. Il commerciale lo apre prima di una visita e gli chiede:', {
    x: 0.6, y: 1.65, w: 8.5, h: 0.5,
    fontFace: 'Calibri', fontSize: 13, color: C.onDark, align: 'left',
  });

  const prompts = [
    'Preparami a presentare un\'offerta commerciale per un cliente B2B',
    'Analizza questa offerta e dimmi come renderla più convincente',
    'Prepara le risposte alle objezioni più probabili del cliente',
    'Simuliamo una trattativa con CFO, Direttore Tecnico o CEO',
  ];

  const cardW = 4.3;
  const cardH = 0.88;
  const gapX = 0.3;
  const gapY = 0.22;
  const startX = 0.55;
  const startY = 2.3;

  prompts.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = startX + col * (cardW + gapX);
    const cy = startY + row * (cardH + gapY);

    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: cy, w: cardW, h: cardH,
      fill: { color: C.white, transparency: 92 },
      line: { color: C.white, width: 1, transparency: 85 },
      rectRadius: 0.1,
    });

    sl.addText('"' + p + '"', {
      x: cx + 0.18, y: cy + 0.08, w: cardW - 0.36, h: cardH - 0.16,
      fontFace: 'Cambria', fontSize: 12.5, italic: true, color: C.onDark,
      align: 'left', valign: 'middle',
    });
  });

  sl.addText('La formazione è il prerequisito: chi non sa usare Copilot non costruirà mai un agente utile.', {
    x: 0.6, y: 5.1, w: 8.8, h: 0.38,
    fontFace: 'Calibri', fontSize: 12, bold: true, color: C.white, align: 'left',
  });
}

// ─── SLIDE 17 — Chiusura ────────────────────────────────────────────────────
{
  const sl = pres.addSlide();
  sl.background = { color: C.ink };

  sl.addText('Zerobyte', {
    x: 1, y: 1.6, w: 8, h: 1.4,
    fontFace: 'Cambria', fontSize: 60, bold: true, color: C.white, align: 'center',
  });

  sl.addText('x Fresenius Kabi Italia', {
    x: 1, y: 3.0, w: 8, h: 0.55,
    fontFace: 'Cambria', fontSize: 22, color: C.onDark, align: 'center',
  });

  // Divider accent centrato
  sl.addShape(pres.shapes.RECTANGLE, {
    x: 4.47, y: 3.68, w: 1.05, h: 0.06,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  sl.addText('Documento riservato · Giugno 2026', {
    x: 1, y: 3.92, w: 8, h: 0.35,
    fontFace: 'Calibri', fontSize: 10, color: '8BA4C2', align: 'center',
  });
}

// Scrivi file
pres.writeFile({ fileName: 'C:\\Dev\\BBT_Sito\\Offerte\\Fresenius1\\Fresenius1.pptx' })
  .then(() => { console.log('PPTX generato con successo.'); })
  .catch(err => { console.error('Errore:', err); process.exit(1); });
