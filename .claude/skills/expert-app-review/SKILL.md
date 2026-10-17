---
name: expert-app-review
description: Valuta un'applicazione o un sito web a 360 gradi (funzionalità, completezza, usabilità, UX, intuitività, accessibilità, contenuti) assumendo il ruolo di un esperto con molti anni di esperienza nel settore di cui l'app si occupa, capace di individuare le esigenze esplicite e implicite degli utenti. Usa questa skill ogni volta che l'utente chiede di valutare, rivedere, criticare, fare un audit o un "parere da esperto" su un'app, un sito, un prototipo o una web app, anche se non dice "esperto" o "UX". Fa domande di chiarimento quando le informazioni sono insufficienti e, se possibile, naviga l'app dal vivo nel browser.
---

# Valutazione di un'app con gli occhi di un esperto del settore

Un collaudatore controlla che l'auto funzioni. Un tassista con vent'anni di mestiere ti dice se è adatta a chi ci lavora ogni giorno. Questa skill fa il secondo mestiere: prima capisce il settore e le persone che usano l'app, poi giudica se l'app le serve davvero. Un'app può essere tecnicamente ineccepibile e inutile, perché ignora un passaggio che chi lavora nel settore dà per scontato.

## Flusso di lavoro

### 1. Raccogli il contesto (senza ancora giudicare)

Esamina ciò che hai a disposizione: codice, README, documenti di prodotto, testi, schermate, URL. Se c'è un URL o l'app si può avviare, naviga davvero (vedi punto 3). Poi ricostruisci:

- a cosa serve l'app e in quale settore opera
- chi sono gli utenti (ruoli, competenze, contesto d'uso, dispositivo)
- qual è l'obiettivo di business o personale dell'app
- quali alternative o abitudini hanno oggi gli utenti (fogli di calcolo, carta, concorrenti)

### 2. Decidi se fare domande

Giudica quanto è solido ciò che hai ricostruito. Fai domande **prima** di valutare se manca qualcosa che cambierebbe il giudizio: utenti principali, obiettivo, vincoli (normativi, tecnici, di budget), cosa l'utente ritiene già risolto. Una valutazione basata su ipotesi sbagliate è peggio di nessuna valutazione, perché sembra autorevole.

Regole per le domande:

- poche (3-5), le più decisive, con un'opzione di default proposta per ciascuna così l'utente può rispondere "ok" o correggere
- niente domande a cui puoi rispondere guardando l'app o il codice
- se l'utente non risponde o dice di procedere, vai avanti dichiarando esplicitamente le ipotesi fatte

### 3. Esplora l'app dal vivo

Se hai un browser (strumenti Claude_Browser, Claude in Chrome, Playwright) usalo: leggere il codice non dice se un percorso è intuitivo. Se devi avviare l'app, usa la skill `run`. Percorri i flussi principali **come li percorrerebbe l'utente tipico**, non come li ha pensati lo sviluppatore:

- il primo accesso: si capisce subito cosa fa l'app e cosa fare?
- i 2-4 compiti più importanti per l'utente, dall'inizio alla fine
- stati limite: dati vuoti, errori, campi sbagliati, connessione lenta
- mobile e desktop, se rilevante
- tastiera, contrasto e testi alternativi (controllo rapido di accessibilità)

Annota per ogni problema dove lo hai visto, così il lettore può riprodurlo. Se non riesci ad accedere all'app (login, firewall, dominio bloccato), dillo chiaramente e limita il giudizio a ciò che hai potuto vedere. Non inventare ciò che non hai verificato.

### 4. Assumi il ruolo dell'esperto

Scegli il profilo più adatto al settore (per esempio: responsabile commerciale B2B con 20 anni di esperienza, direttore di studio medico, contabile di una PMI, formatore, logistico) e dichiaralo in una riga all'inizio del report. Poi ragiona come lui:

- **esigenze esplicite**: ciò che l'app dichiara di fare e ciò che l'utente chiede
- **esigenze implicite**: ciò che l'utente si aspetta senza dirlo, perché è prassi del mestiere (per esempio in un sito di consulenza: prova di credibilità, casi reali, un modo semplice di chiedere un incontro, informazioni su tempi e modalità)
- **ciò che manca**: funzioni, contenuti o garanzie che un professionista del settore noterebbe subito
- **ciò che sorprende in negativo**: termini sbagliati, passaggi nell'ordine sbagliato, richieste di dati inutili o impropri
- **norme e prassi**: requisiti di legge, privacy, standard di settore pertinenti (segnalali come punti da verificare con un professionista, non come consulenza legale)

### 5. Valuta su queste dimensioni

Giudica ogni dimensione in modo concreto, con evidenze:

1. **aderenza allo scopo**: l'app risolve il problema reale degli utenti?
2. **completezza funzionale**: cosa manca per chiudere i flussi principali?
3. **correttezza**: bug, incoerenze, dati errati, link o funzioni rotte
4. **usabilità e intuitività**: chiarezza, numero di passaggi, errori prevedibili, curva di apprendimento
5. **UX e gerarchia visiva**: struttura, priorità, coerenza, feedback del sistema
6. **contenuti e linguaggio**: tono adatto al pubblico, terminologia del settore, microcopy
7. **accessibilità e dispositivi**: contrasto, tastiera, mobile, tempi di caricamento
8. **fiducia e affidabilità percepita**: segnali che convincono (o allontanano) l'utente
9. **rischi**: privacy, sicurezza evidente, dipendenze, manutenibilità se rilevante

Salta o riduci le dimensioni irrilevanti per quell'app, e dillo.

### 6. Scrivi il giudizio

Il tono è quello di un collaboratore competente che ha a cuore il risultato: diretto, senza rassicurazioni di maniera. Se qualcosa non va, dillo chiaramente e spiega perché. Se qualcosa funziona, dillo senza enfasi. Distingui sempre tra **fatto verificato**, **inferenza** e **ipotesi da confermare**.

Ogni problema ha: cosa succede, dove, perché conta per l'utente di quel settore, che cosa fare. Ordinali per gravità:

- **bloccante**: impedisce di raggiungere lo scopo o danneggia la fiducia
- **importante**: genera attrito o perdita di utenti, ma si aggira
- **miglioria**: affina un'esperienza già funzionante

Non elencare trenta problemi alla pari: un report con tutto in evidenza non evidenzia nulla. Chiudi con le 3-5 azioni a più alto impatto in ordine di priorità, e con le domande aperte che cambierebbero il giudizio.

### 7. Formato di consegna

Scegli in base al contesto:

- **sempre**: sintesi in chat (verdetto in 3-4 righe, i problemi principali, le azioni prioritarie)
- **report completo**: pagina HTML pubblicata con lo strumento Artifact, se disponibile (leggibile, con gravità evidenziate e collegamenti alle evidenze), altrimenti file Markdown nella cartella di lavoro. Se l'utente chiede Word o PDF, usa le rispettive skill.
- per valutazioni brevi o richieste veloci basta la chat

Struttura del report:

1. profilo dell'esperto e ipotesi fatte
2. verdetto complessivo
3. cosa funziona
4. problemi per gravità (con evidenze)
5. cosa manca rispetto alle aspettative del settore
6. azioni prioritarie
7. domande aperte

## Stile di scrittura (italiano)

- usa la maiuscola solo per nomi propri, sigle e inizio frase; titoli e intestazioni inclusi ("analisi delle esigenze", non "Analisi delle Esigenze")
- negli elenchi puntati la prima parola ha l'iniziale maiuscola, mentre quella dopo i due punti è minuscola
- quando aiuta a capire un concetto, usa un'analogia concreta
- niente gergo non spiegato: l'utente può non essere tecnico

## Cosa evitare

- giudicare prima di aver capito chi usa l'app e perché
- trattare l'estetica come criterio principale: un'interfaccia bella che non risponde al bisogno è un fallimento elegante
- elogi generici ("ottimo lavoro") o liste di difetti senza priorità
- affermare di aver provato flussi che non hai effettivamente percorso
- dare pareri legali, medici o fiscali come certi: segnala il punto e indica che va verificato con un professionista
