# Smart.1 — Guida funzionale e tecnica ricavata dal codice

Versione documento: 1.0  
Data analisi: 4 settembre 2026  
Origine: analisi statica del contenuto di `C:\SMART`

## 1. Scopo e attendibilità

Smart.1 è una piattaforma gestionale modulare orientata alla gestione di clienti, assistenza, impianti, manutenzioni, prodotti, documenti, magazzino, produzione e attività operative sul campo.

Questa guida è stata ricostruita dal codice sorgente, dalle rotte del frontend, dai controller server, dai ViewModel mobile e dai processi schedulati. Descrive quindi con buona attendibilità le funzionalità previste dal software, ma non sostituisce ancora una verifica sull'applicazione in esecuzione.

Indicazioni usate nel documento:

- **Confermato**: comportamento o modulo esplicitamente presente nel codice.
- **Da verificare**: dettaglio dipendente da configurazione, licenza, database o personalizzazione cliente.
- **PERS**: estensione o personalizzazione caricata separatamente per uno specifico cliente/installazione.

## 2. Utenti e canali di accesso

La piattaforma espone più canali applicativi:

| Canale | Destinatari | Funzione principale |
| --- | --- | --- |
| Smart.1 Desk | operatori amministrativi e responsabili | back-office completo via browser |
| App mobile | tecnici, agenti e personale sul campo | consultazione e operatività anche locale/offline |
| External API | software terzi e integrazioni | accesso controllato ai dati aziendali |
| Web API legacy/Portal API | client storici e portali | servizi applicativi delle installazioni precedenti |
| Job Scheduler | amministratori di sistema | esecuzione automatica di import, notifiche, report e sincronizzazioni |

L'effettiva disponibilità delle funzioni dipende da licenza, moduli attivi, ruolo dell'utente e configurazione della singola installazione.

## 3. Accesso e navigazione

### 3.1 Autenticazione

Il Desk supporta almeno tre modalità previste dagli script di sviluppo:

- autenticazione tramite form;
- autenticazione Windows;
- autenticazione Microsoft Entra ID.

Nel codice analizzato il server Desk viene inizializzato con autenticazione a form. Le altre modalità dipendono dalla configurazione e dalle librerie comuni esterne.

Il frontend prevede:

- accesso standard;
- accesso alternativo;
- recupero password;
- cambio password;
- controllo della licenza;
- pagina dedicata agli errori di licenza.

### 3.2 Menu e permessi

Il menu è dinamico. Ruoli e gruppi di menu stabiliscono quali funzioni siano visibili e utilizzabili. La sola conoscenza di un indirizzo applicativo non garantisce l'accesso: le operazioni devono essere protette anche lato server.

Il Desk adotta prevalentemente schermate di tipo CRUD:

- ricerca e filtri;
- elenco dei risultati;
- visualizzazione dettaglio;
- inserimento;
- modifica;
- eliminazione, quando consentita;
- operazioni specialistiche per il modulo.

## 4. Moduli funzionali

### 4.1 Configurazione generale

Funzioni confermate:

- aziende e unità operative;
- nazioni, province e zone;
- agenti;
- progetti e categorie di progetto;
- tariffe;
- impostazioni applicative;
- importazioni e relative code;
- report e coda di generazione;
- definizione e monitoraggio dei job.

Queste anagrafiche costituiscono la base condivisa dagli altri moduli.

### 4.2 Utenti, ruoli e competenze

Funzioni confermate:

- gestione account;
- ruoli e autorizzazioni;
- associazione dei menu ai ruoli;
- competenze o skill degli operatori;
- impostazioni Desk specifiche per account;
- account autorizzati a usare l'External API;
- storico delle sincronizzazioni degli account.

Il sistema distingue i permessi relativi al Desk da quelli relativi all'app mobile.

### 4.3 Clienti e fornitori

Funzioni confermate:

- anagrafica clienti;
- anagrafica fornitori;
- destinazioni/sedi di clienti e fornitori;
- contatti e tipologie di contatto;
- contratti;
- stati del cliente;
- definizioni e campi configurabili;
- visualizzazione geografica su mappa;
- note e gruppi cliente tramite API esterna.

Una destinazione rappresenta una sede operativa collegata al soggetto principale. Diversi flussi, tra cui ticket, impianti, documenti e manutenzioni, possono riferirsi al cliente oppure a una sua destinazione.

### 4.4 Ticket e assistenza

Nel codice il ticket è denominato **Issue**.

Funzioni confermate:

- apertura, ricerca e modifica dei ticket;
- dettaglio e storico;
- categorie, priorità, stati e fonti;
- definizioni configurabili per categoria;
- transizioni ammesse tra stati;
- lookup e campi aggiuntivi;
- assegnazione a operatori;
- collegamento a clienti, destinazioni, progetti e impianti;
- pianificazione;
- allegati e partecipanti/guest;
- regole di notifica;
- modifica massiva di assegnatario, stato e altri attributi;
- vista calendario;
- procedure applicative specifiche.

Flusso tipico da verificare sull'ambiente:

1. Creazione del ticket e selezione del cliente o della destinazione.
2. Scelta di categoria, priorità e origine.
3. Assegnazione dell'operatore o del gruppo competente.
4. Pianificazione dell'intervento.
5. Registrazione delle attività e degli allegati.
6. Avanzamento attraverso gli stati consentiti.
7. Chiusura e generazione delle eventuali notifiche.

### 4.5 Impianti e manutenzione

Funzioni confermate:

- anagrafica impianti;
- tipi, sottotipi, modelli e produttori;
- proprietà dell'impianto;
- definizioni e campi configurabili;
- contatori e relative tipologie;
- gruppi di lookup;
- pianificazione delle manutenzioni;
- tipologie di manutenzione e intervento;
- sessioni di manutenzione;
- cicli di manutenzione;
- risultati della manutenzione;
- ricambi e modelli di ricambio;
- consuntivazione dei tempi;
- trasferimento degli impianti;
- storico impianto esposto anche tramite External API;
- collegamento tra impianti, ticket, clienti e destinazioni.

Flusso tipico da verificare:

1. Censimento dell'impianto presso cliente/destinazione.
2. Definizione del piano o ciclo di manutenzione.
3. Generazione o pianificazione dell'attività.
4. Esecuzione sul campo tramite Desk o app.
5. Registrazione di tempi, contatori, esito, ricambi e allegati.
6. Aggiornamento dello storico e della prossima scadenza.

### 4.6 Prodotti, listini e promozioni

Funzioni confermate:

- prodotti;
- marchi;
- lotti;
- alias prodotto;
- unità di misura;
- immagini e attributi prodotto;
- classi e gruppi gerarchici;
- stati e definizioni configurabili;
- listini e prezzi;
- promozioni basate su combinazioni di prodotti, clienti e gruppi;
- promozioni avanzate nell'app mobile;
- kit nell'app mobile.

### 4.7 Documenti e magazzino

Funzioni confermate:

- documenti e righe documento;
- tipologie e definizioni documento;
- valori aggiuntivi;
- spedizioni;
- causali di trasporto;
- vettori e modalità di trasporto;
- aspetto dei beni;
- magazzini e ubicazioni;
- quantità e movimenti di magazzino;
- lotti;
- gestione operativa di prodotti e impianti a magazzino tramite app;
- lettura e visualizzazione di codici QR/barcode;
- stampa tramite stampanti Bluetooth o cloud, ove configurata.

### 4.8 Produzione

Funzioni confermate:

- pianificazione della produzione;
- fasi di produzione;
- postazioni di lavoro;
- causali/tipologie di pausa;
- rilevazione e controllo dei tempi di produzione;
- modalità distinta per controllo produzione e consultazione dei timesheet.

### 4.9 Presenze

Funzioni confermate:

- inserimento delle presenze;
- righe e dettaglio presenza;
- ricerca e consultazione dal Desk;
- inserimento e consultazione dall'app mobile.

### 4.10 Allegati, posta, notifiche e report

Funzioni confermate:

- allegati collegabili alle entità applicative;
- schemi configurabili degli allegati;
- generazione automatica delle miniature;
- template e immagini per e-mail;
- coda di invio e-mail;
- notifiche generate dagli eventi dei ticket;
- notifiche push verso l'app;
- definizione dei report;
- coda e generazione asincrona dei report;
- raccolta e invio dei warning log.

### 4.11 Scadenze e pagamenti

Funzioni confermate, soprattutto via app ed External API:

- pagamenti;
- rate/scadenze di pagamento;
- periodi fiscali;
- tipologie di spesa;
- consultazione delle scadenze da pagare.

## 5. App mobile

L'app mobile condivide modelli e ViewModel multipiattaforma e dispone di un progetto Android moderno, oltre a progetti storici iOS e UWP.

Funzioni mobile confermate dai ViewModel:

- login, cambio e recupero password;
- sincronizzazione e stato locale;
- clienti, prospect, contatti e mappe;
- ticket, dettaglio e modifica;
- impianti, contatori, pianificazione e trasferimenti;
- sessioni e cicli di manutenzione;
- prodotti, immagini, categorie commerciali e kit;
- documenti;
- gestione del magazzino;
- presenze;
- progetti;
- allegati e note;
- scadenze di pagamento;
- QR code e lettura barcode;
- notifiche push;
- selezione stampante Bluetooth;
- supporto e impostazioni.

Il database SQLite locale e le schermate di sincronizzazione indicano un funzionamento almeno parzialmente offline. Le regole precise di conflitto e sincronizzazione devono essere verificate con database e servizi disponibili.

## 6. API e integrazioni

### 6.1 External API

L'External API è un'applicazione ASP.NET Core 6 con:

- documentazione Swagger/OpenAPI;
- autenticazione Bearer/JWT tramite middleware;
- account e permessi dedicati;
- caricamento di controller personalizzati dalla cartella `Pers`;
- serializzazione JSON basata su Newtonsoft.Json;
- logging applicativo FirstAid.

Le aree esposte includono clienti, destinazioni, contatti, prodotti, listini, promozioni, documenti, pagamenti, scadenze, magazzini, movimenti, impianti e manutenzioni.

L'inventario completo delle operazioni e dei payload richiede una guida API separata, generabile dai controller e dai DTO oppure dallo Swagger di un'istanza avviata.

### 6.2 Altre integrazioni

Integrazioni confermate:

- Algoma;
- Arca Web Harbor;
- AWSyncManager;
- servizi di geocodifica Google;
- notifiche push;
- stampa cloud/Bluetooth;
- importazione da file Excel;
- sistemi di reportistica Ribo.

Endpoint, credenziali e frequenze dipendono dalla configurazione dell'installazione.

## 7. Processi automatici

Il Job Scheduler legge dal database i job da eseguire, ne controlla pianificazione, licenza e moduli richiesti, quindi avvia le azioni configurate. Gestisce inoltre:

- azioni esclusive;
- prevenzione delle esecuzioni duplicate;
- esecuzione forzata;
- timeout e processi non rispondenti;
- ordine delle azioni;
- registrazione dell'esito;
- monitoraggio tramite SignalR/AWSyncManager.

Azioni applicative individuate:

- sincronizzazione Arca Web Harbor;
- sincronizzazione Algoma;
- invio notifiche push;
- invio warning log;
- generazione report;
- generazione miniature degli allegati;
- geocodifica;
- esecuzione di query configurate;
- invio e-mail;
- generazione notifiche dei ticket;
- importazione dati e feedback degli import;
- importazione di impianti.

## 8. Architettura tecnica

| Componente | Tecnologia rilevata |
| --- | --- |
| Desk server | ASP.NET Core 8, hosting Kestrel/IIS |
| Desk client | Angular 20, TypeScript 5.8, RxJS 7.8, Telerik Kendo UI 19 |
| External API | ASP.NET Core 6, Swagger/OpenAPI, JWT |
| Web API storica | ASP.NET Framework 4.8 |
| Android | .NET 9 per Android 35 |
| App condivisa | librerie .NET Standard 2.0 con pattern Model/ViewModel |
| Client storici | iOS e UWP |
| Persistenza server | SQL Server tramite Data Layer dedicati |
| Persistenza mobile | SQLite |
| Comunicazione realtime | SignalR |
| Job | eseguibili/servizi Windows .NET Framework 4.8 |

Separazione logica principale:

1. **DTO**: contratti e oggetti trasferiti tra componenti.
2. **Data Layer**: accesso a SQL Server, suddiviso per area applicativa.
3. **Server/API**: autorizzazione, servizi e controller.
4. **Frontend Desk**: moduli Angular caricati in lazy loading.
5. **App**: modelli, interfacce e ViewModel condivisi tra piattaforme.
6. **Job**: elaborazioni asincrone e schedulate.
7. **PERS**: personalizzazioni caricate come plugin.

## 9. Configurazione e avvio per sviluppatori

### 9.1 Prerequisiti rilevati

- Windows e Visual Studio compatibile con .NET Framework e .NET moderno;
- SDK .NET 6, 8 e 9;
- workload Android se si compila l'app;
- Node.js 22.12 per il frontend;
- SQL Server con database e stored procedure Smart.1;
- accesso ai progetti Ribo condivisi referenziati dalla soluzione;
- configurazioni e licenze valide per l'ambiente.

### 9.2 Limite importante della copia analizzata

`Ribo.Smart.sln` contiene 58 progetti applicativi/librerie, ma almeno 14 riferimenti puntano a repository fratelli fuori da `C:\SMART`. La soluzione non è quindi garantita compilabile isolatamente.

Tra le dipendenze esterne figurano librerie comuni Ribo per DTO, Data Layer, helper, logging, Desk, report e sincronizzazione.

### 9.3 Configurazioni

I server usano file `appsettings.json` con sezioni per:

- logging;
- host consentiti;
- stringhe di connessione;
- impostazioni applicative;
- logging FirstAid.

I job legacy usano `App.config` e `ConfigurationManager`.

Non copiare configurazioni di produzione negli ambienti di sviluppo. Stringhe di connessione, token, chiavi e password devono essere fornite tramite un archivio segreti o variabili protette.

### 9.4 Frontend Desk

Gli script disponibili prevedono:

- `npm run build` per la build di produzione;
- `npm test` per i test Angular;
- avvii distinti per Forms, Windows ed Entra ID;
- collegamento locale delle librerie condivise `dto`, `core` e `controls` tramite `npm link`.

Gli script contengono parametri legati all'ambiente di sviluppo originale; indirizzi host e proxy devono essere adattati prima dell'uso.

## 10. Test attualmente individuati

La copertura automatica appare limitata rispetto alla dimensione della soluzione.

Sono presenti test browser per:

- login;
- nazioni;
- province;
- zone;
- impostazioni;
- tipi di impianto.

È presente anche un progetto di test dell'app, ma questa analisi non conferma una copertura significativa dei flussi critici. Le prime aree da coprire dovrebbero essere autenticazione/autorizzazione, ticket, manutenzioni, documenti, magazzino, sincronizzazione e job.

## 11. Glossario essenziale

| Termine nel codice | Significato funzionale |
| --- | --- |
| Account | utente applicativo |
| Customer | cliente/controparte |
| Customer Destination | sede o destinazione del cliente |
| Issue | ticket, richiesta o anomalia |
| Plant | impianto o bene manutenuto |
| Maintenance Session | intervento/sessione di manutenzione |
| Spare Part | ricambio |
| Attendance | presenza o registrazione di attività |
| Desk | applicazione web di back-office |
| PERS | personalizzazione specifica di installazione |
| DTO | oggetto usato per scambiare dati tra moduli |
| Job | elaborazione automatica schedulata |

## 12. Elementi ancora da verificare

Per trasformare questo documento in un manuale operativo definitivo servono:

- avvio del Desk su un ambiente di test;
- elenco dei moduli coperti dalla licenza;
- account dimostrativi per i diversi ruoli;
- database di test rappresentativo;
- inventario delle personalizzazioni PERS effettivamente distribuite;
- verifica delle schermate e acquisizione delle immagini;
- conferma dei flussi approvativi e delle regole aziendali;
- verifica delle procedure di installazione, backup e ripristino;
- generazione dello Swagger dell'External API;
- conferma della piattaforma mobile oggi effettivamente supportata.

## 13. Tracciabilità delle fonti principali

Le conclusioni derivano soprattutto da:

- soluzione `Ribo.Smart.sln`;
- rotte Angular in `Ribo.Smart.Server.Desk/ClientApp/projects/app/src/app/app-routing.module.ts`;
- controller in `Ribo.Smart.Server.Desk/Controllers`;
- controller in `Ribo.Smart.Server.ExternalApi/Controllers`;
- ViewModel in `Ribo.Smart.App.ViewModel/ViewModels`;
- avvio server in `Ribo.Smart.Server.Desk/Program.cs` e `Startup.cs`;
- avvio External API in `Ribo.Smart.Server.ExternalApi/Program.cs`;
- processi in `Ribo.Smart.Job` e `Ribo.Smart.JobScheduler`;
- file progetto e dipendenze NuGet/npm.

---

Documento iniziale generato tramite analisi statica. Le parti operative devono essere validate su un'istanza autorizzata di test prima della distribuzione agli utenti finali.
