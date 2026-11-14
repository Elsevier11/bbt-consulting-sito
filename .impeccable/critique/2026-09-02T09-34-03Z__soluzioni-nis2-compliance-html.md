---
target: "confronto attrattività landing NIS2 integrata rispetto al manufatto C:\\Dev\\Landing_NIS2"
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-09-02T09-34-03Z
slug: soluzioni-nis2-compliance-html
---
Method: dual-agent (A: /root/critique_a · B: /root/critique_b)

## Verdetto

La landing integrata conserva circa il 70–75% dell'attrattività del manufatto di riferimento. Guadagna in credibilità B2B, chiarezza, accessibilità e coerenza con BBT, ma perde carattere tipografico, tensione editoriale, memorabilità e parte della desiderabilità. Non è un peggioramento assoluto: è uno scambio sbilanciato verso fiducia e ordine.

## Design Health Score

| # | Euristica | Score | Punto chiave |
|---|---|---:|---|
| 1 | Visibilità dello stato | 3 | Tab e navigazione leggibili; i passaggi esterni hanno poco feedback. |
| 2 | Corrispondenza col mondo reale | 3 | Tono concreto, con alcuni termini specialistici. |
| 3 | Controllo e libertà | 3 | Anchor e menu funzionano; i link esterni spezzano il contesto. |
| 4 | Coerenza e standard | 4 | Sistema BBT applicato con grande coerenza. |
| 5 | Prevenzione degli errori | 3 | Dati demo e limiti legali sono qualificati correttamente. |
| 6 | Riconoscimento anziché memoria | 3 | Struttura scansionabile; l'assoggettamento viene chiarito tardi. |
| 7 | Flessibilità ed efficienza | n/a | Non significativa per una landing Persuade. |
| 8 | Estetica e minimalismo | 3 | Pulita, ma il minimalismo diventa ripetizione. |
| 9 | Recupero dagli errori | 2 | Nessuna alternativa se Bookings o la piattaforma esterna non sono disponibili. |
| 10 | Aiuto e documentazione | n/a | Non significativa come euristica completa per questa landing. |
| **Totale** | | **24/32** | **Good** |

## Design Specificity Verdict

La finestra prodotto è specifica per NIS2; gran parte del resto potrebbe essere riutilizzata per una landing B2B su ERP, qualità o privacy cambiando testi e icone. Il riferimento aveva una firma immediata — serif editoriale, corsivo, dark, griglia tecnica e rosa radiale — mentre la nuova pagina usa il vocabolario più comune di SaaS e consulenza contemporanea: Manrope, bianco, blu, righe sottili.

La scansione deterministica ha rilevato 38 advisory: 10 colori, 26 dimensioni tipografiche e 2 raggi fuori dai token di DESIGN.md. Nessun falso positivo certo. Il punto più sostanziale è la presenza nella demo di microtesti tra circa 9,9 e 13,1 px, sotto la soglia di 14 px prevista per la Product Window. Il browser integrato non era disponibile; la verifica headless ha confermato nessun overflow, nessun errore console e interazioni corrette. Non è disponibile un overlay affidabile nel browser utente.

## Impressione complessiva

Il risultato è più credibile e più vendibile come parte di BBT, ma meno magnetico come manufatto autonomo. Il riferimento prometteva controllo attraverso una tensione emotiva forte; la nuova pagina spiega il controllo in modo competente. La principale opportunità è recuperare una firma memorabile compatibile con il sistema luminoso BBT, senza tornare al dark o a claim non verificati.

## Cosa funziona

- La finestra prodotto conserva la concretezza del riferimento ed è più leggibile.
- Disclaimer, dati dimostrativi e riferimenti qualificati aumentano nettamente la fiducia.
- La pagina sembra parte del sito BBT, non un microsito acquisito e incollato.

## Priority Issues

### [P1] Perdita della firma editoriale

La pagina è competente ma meno riconoscibile. Serve una firma BBT-NIS2: composizione più asimmetrica, una trama tecnica proprietaria o un walkthrough requisito→owner→evidenza→report. Comando: `/impeccable bolder`.

### [P1] Promessa meno urgente e memorabile

“Processo visibile” descrive il prodotto ma non rende concreto il costo dell'inazione come “non rincorrete le scadenze”. Serve una tensione direzionale onesta su responsabilità scoperte, evidenze disperse e decisioni senza quadro. Comando: `/impeccable clarify`.

### [P1] Fiducia senza prova commerciale

Rimuovere testimonianze e risultati inventati era necessario, ma ora manca una prova di maturità. Servono schermate reali, cosa accade nei 30 minuti, ruoli coinvolti e caratteristiche verificabili di sicurezza, hosting e supporto. Comando: `/impeccable shape`.

### [P2] Ritmo troppo uniforme

Dopo il secondo scroll si ripete lo schema titolo grande + testo + righe. Creare due o tre picchi distinti con walkthrough annotato, sequenza temporale e caso operativo. Comando: `/impeccable layout`.

### [P2] Hero e mobile troppo densi

Su desktop la fascia prove resta fuori dai primi 800 px; su mobile la pagina arriva a circa 8.710 px e la demo usa microtesti troppo piccoli. Ridurre l'altezza del hero, correggere il breadcrumb sovrascritto da `.hero-copy > p`, semplificare la demo mobile e inserire una CTA intermedia. Comando: `/impeccable adapt`.

## Persona Red Flags

- **Jordan, primo accesso:** “assessment”, “evidenze” e i due tipi di soggetto richiedono conoscenza preliminare; “Accedi alla piattaforma” può sembrare disponibile senza credenziali.
- **Riley, verificatore:** apprezza i disclaimer ma cercherà sicurezza dati, hosting, controllo accessi, esportazione e supporto, oggi assenti.
- **Casey, mobile:** pulsanti buoni, ma scroll molto lungo e demo minuta; manca un percorso breve “capisci se fa per te → prenota”.
- **Dirigente PMI:** vede un buon software, ma non ancora prove sufficienti di un partner a cui affidare il percorso.

## Osservazioni minori

- Il breadcrumb viene ingrandito dal selettore `.hero-copy > p`, aumentando inutilmente il hero.
- Il logo BBT ha meno presenza del wordmark CyberCompass del riferimento.
- I cerchi decorativi non hanno la specificità semantica della grafica radiale originale.
- Tre azioni competono nel primo viewport: CTA nav, scoperta prodotto e accesso piattaforma.
