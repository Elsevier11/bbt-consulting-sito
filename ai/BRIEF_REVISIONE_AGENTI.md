# brief di revisione — pagina "agenti AI" (bbtconsulting.it/ai/agents)

## contesto

Questa cartella contiene la pagina "Agenti AI per funzione aziendale" del sito BBT Consulting: una collezione di 8 system prompt in italiano (SalesPrep, RinnovoCliente, ColloquioPrep, FinancePitch/BudgetDefense, ProjectApproval, PitchInterno, ChangePrep, NegoziazioneContratto), ciascuno con tagline, descrizione, conversation starters e prompt completo. I dati degli agenti sono in un array JavaScript `const AGENTS = [...]` dentro l'HTML della pagina (verifica se nel frattempo la struttura è cambiata o se i dati sono in file separati).

Tutti gli 8 agenti seguono lo stesso template in 4 fasi: discovery → audit → playbook obiezioni → simulazione in roleplay, con parole-chiave di transizione ("Ottimizza", "Prepara", "Procedi", "Salta").

Il template è solido e va PRESERVATO. Gli interventi richiesti correggono difetti specifici emersi da un'analisi esperta, elencati sotto in ordine di priorità.

## regole generali

- Prima di modificare qualsiasi cosa, esplora la cartella, individua dove vivono i prompt e presentami un piano; attendi la mia conferma prima di applicare le modifiche.
- Ogni modifica ai prompt deve essere applicata in modo COERENTE a tutti gli 8 agenti, adattando la formulazione al dominio di ciascuno.
- Non allungare i prompt oltre il necessario: restare indicativamente sotto i 4.500 caratteri per prompt (limiti di piattaforma e leggibilità).
- Lingua: italiano professionale. Evitare maiuscole non necessarie (parole come "fase", "audit", "analisi" vanno in minuscolo salvo inizio frase).
- Non toccare CSS, layout e struttura della pagina se non dove indicato.
- Al termine, produrre un riepilogo delle modifiche file per file.

## interventi sui prompt (in ordine di priorità)

### 1. de-hardcodare le obiezioni della fase 3 (tutti gli agenti tranne SalesPrep)

Problema: in 7 prompt su 8 le "3 obiezioni più probabili per questo contesto specifico" sono in realtà scritte fisse nel prompt. Il modello si ancora a quelle invece di derivarle dalla discovery della fase 1, vanificando la personalizzazione.

Correzione: riformulare la fase 3 così che il modello DERIVI le 3 obiezioni/reazioni/resistenze/tattiche dal contesto specifico emerso nelle fasi 1-2. Le obiezioni attualmente hardcodate vanno mantenute ma degradate a esempi di categoria, con formulazione tipo:

> Identifica le 3 obiezioni più probabili PER QUESTO interlocutore specifico, basandoti su quanto emerso nelle fasi precedenti. Categorie tipiche da considerare (usale come ispirazione, non come lista fissa): [obiezioni attuali]. Se il contesto della fase 1 suggerisce obiezioni diverse da queste categorie, dai priorità a quelle.

Mantenere invariata la struttura di risposta per ciascuna obiezione (cosa dirà / trappola da evitare / strategia con script verbale): è un punto di forza.

### 2. irrobustire il simulatore della fase 4 (tutti gli agenti)

Problema: "dopo 2-3 scambi" è troppo poco, e manca l'istruzione anti-capitolazione — i modelli in roleplay avversariale tendono a farsi convincere alla prima risposta decente, dando un falso senso di preparazione.

Correzione, per ogni fase 4:
- Portare la durata a "4-6 scambi" (o "almeno 4 scambi, fino a un massimo di 6").
- Aggiungere un'istruzione anti-capitolazione, adattata al dominio, sul modello di: "Resta nel personaggio con coerenza. Non farti convincere facilmente: concedi terreno solo di fronte ad argomenti concreti e specifici. Se ricevi una risposta vaga o debole, incalza con una domanda di approfondimento invece di accettarla."
- Aggiungere calibrazione della difficoltà: prima della simulazione chiedere "Livello di difficoltà: 1 (interlocutore collaborativo), 2 (scettico ma corretto), 3 (ostile e pressante)?".
- Mantenere l'uscita dal personaggio con "pagella di feedback"; specificare che la pagella deve contenere massimo 3 punti di forza e massimo 3 aree di miglioramento, ciascuna con riferimento a un momento specifico della simulazione.

### 3. ancorare la valutazione della fase 2 (tutti gli agenti)

Problema: i voti da 1 a 10 senza ancore producono punteggi arbitrari, quasi sempre compressi tra 6 e 8 per accondiscendenza del modello.

Correzione (scegliere UNA delle due opzioni e applicarla a tutti):
- Opzione A (preferita): sostituire la scala 1-10 con tre livelli definiti — 🔴 critico (compromette il risultato, va sistemato prima dell'incontro), 🟡 migliorabile (funziona ma lascia punti sul tavolo), 🟢 solido (tenere così) — e OBBLIGARE il modello a identificare sempre il singolo punto più debole, anche quando tutto è 🟢.
- Opzione B: mantenere 1-10 ma con ancore esplicite (1-4 critico, 5-6 insufficiente, 7-8 buono con riserve, 9-10 solido) e istruzione esplicita: "usa l'intera scala; non assegnare voti di cortesia".

### 4. gestire il percorso senza documento (FinancePitch, ProjectApproval, PitchInterno, SalesPrep)

Problema: questi agenti permettono di procedere senza caricare un documento, ma la fase 2 audita comunque "il documento", con comportamento indefinito.

Correzione: aggiungere alla fase 2 un ramo esplicito, sul modello di ColloquioPrep e RinnovoCliente: "Se non è stato fornito alcun documento, l'audit valuta la preparazione e la strategia raccontata dall'utente, con gli stessi criteri adattati; segnala esplicitamente che l'analisi sarà più precisa con il documento reale."

### 5. gestione degli imprevisti conversazionali (tutti gli agenti)

Problema: la macchina a stati con parole-chiave è fragile se l'utente risponde in modo naturale ("sì dai, vai"), chiede di saltare fasi o incolla un documento fuori sequenza.

Correzione: aggiungere in coda alle istruzioni di flusso un paragrafo unico, identico per tutti:

> Gestione delle deviazioni: se l'utente esprime l'intento con parole diverse dalle parole-chiave, interpreta l'intento e procedi senza chiedere di ripetere la parola esatta. Se chiede di saltare a una fase successiva, accontentalo segnalando in una riga cosa si perde saltando. Se fornisce un documento in qualsiasi momento, integralo nell'analisi senza ricominciare il flusso.

### 6. guardrail su dati e allucinazioni

- In TUTTI i prompt aggiungere una riga: "Lavora esclusivamente sui dati e sui numeri forniti dall'utente: non inventare mai cifre, nomi, statistiche o riferimenti."
- In NegoziazioneContratto aggiungere: "Non citare articoli di legge, norme o giurisprudenza specifica; resta sul piano strategico-negoziale." (il disclaimer legale già presente va mantenuto).
- Nella PAGINA (non nei prompt), nella sezione istruzioni di attivazione, aggiungere una nota breve sulla riservatezza: chi usa gli agenti caricherà contratti, CV, dati economici — ricordare di verificare le policy sui dati della piattaforma scelta e di non caricare dati personali non necessari.

### 7. correzioni puntuali

- Refuso in RinnovoCliente: "nella rinnovo" → "nel rinnovo".
- Refuso in PitchInterno, fase 4: "usale domande concrete" → "usa domande concrete".
- Incoerenza di naming: la descrizione della sezione Finance sulla pagina parla di "BudgetDefense AI" ma l'agente si chiama "FinancePitch AI" (id `budgetdefense`). Allineare: chiedimi quale nome preferisco prima di scegliere.
- Istruzioni Gemini sulla pagina: "Crea una Gemma" → la funzione si chiama "Gem" (anche in italiano); "Gemma" è il nome dei modelli open di Google e genera confusione. Correggere in "Crea un Gem".
- Istruzioni Claude sulla pagina: i Progetti di Claude non hanno un campo per i conversation starters; precisare che gli starter vanno copiati e incollati manualmente all'avvio di ogni chat (o salvati come primo messaggio).

### 8. posizionamento (solo testi di pagina, da discutere prima di applicare)

Gli 8 "agenti" sono tecnicamente assistenti conversazionali strutturati (nessun tool use, nessuna autonomia): tutti implementano lo stesso pattern "preparazione a una conversazione ad alto rischio". Proposta: rafforzare nel copy della pagina il posizionamento onesto e differenziante di "simulatori di conversazioni ad alto rischio" / "coach di preparazione", senza necessariamente rinunciare alla parola "agenti" nel titolo. NON applicare modifiche di copy su questo punto senza prima propormi 2-3 alternative di formulazione.

## criteri di accettazione

- Tutti gli 8 prompt contengono: fase 3 con obiezioni derivate dal contesto, fase 4 irrobustita con anti-capitolazione e difficoltà, fase 2 con valutazione ancorata, paragrafo di gestione delle deviazioni, riga anti-invenzione dati.
- I 4 agenti indicati hanno il ramo "senza documento" nella fase 2.
- Nessun prompt supera indicativamente i 4.500 caratteri.
- I refusi e le incoerenze del punto 7 sono corretti.
- La pagina si apre correttamente nel browser e il JavaScript è valido (validare il JSON/JS dopo le modifiche, attenzione all'escaping delle stringhe nell'array AGENTS).
- Riepilogo finale delle modifiche per file, con diff leggibile.
