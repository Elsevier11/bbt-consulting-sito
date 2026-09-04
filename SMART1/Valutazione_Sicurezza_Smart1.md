# Smart.1 — Valutazione preliminare di sicurezza

Data: 4 settembre 2026  
Tipo: revisione statica del codice sorgente  
Ambito: contenuto disponibile in `C:\SMART`  
Esclusioni: penetration test, verifica runtime, infrastruttura IIS/reverse proxy, database, librerie Ribo esterne non presenti

## Sintesi esecutiva

Il rischio complessivo rilevato è **alto**. La revisione ha identificato problemi immediatamente azionabili in autenticazione, gestione dei segreti, accesso agli allegati, endpoint legacy, notifiche realtime e rendering HTML.

I primi interventi non devono attendere un refactoring generale:

1. ruotare tutte le credenziali e chiavi presenti nella copia del sorgente;
2. disabilitare o proteggere download allegati e rimozione upload legacy;
3. rimuovere il bypass basato su `Debugger.IsAttached`;
4. sostituire i token legacy cifrati con token firmati e validati standard;
5. autenticare e autorizzare l'hub SignalR;
6. correggere i punti di stored XSS;
7. aggiornare l'External API da .NET 6 a una versione supportata.

Questa valutazione non prova che un ambiente sia già stato compromesso. Indica che, se il codice analizzato corrisponde a quello distribuito e gli endpoint sono raggiungibili, esistono percorsi plausibili di accesso non autorizzato e divulgazione dei dati.

## Riepilogo dei rilievi

| ID | Severità | Rilievo | Stato |
| --- | --- | --- | --- |
| SEC-01 | Critica | credenziali e segreti inclusi nel sorgente/configurazioni | confermato |
| SEC-02 | Critica | token legacy riproducibili usando chiavi statiche note | confermato |
| SEC-03 | Critica | download allegati legacy senza autenticazione/autorizzazione | confermato nel codice; esposizione runtime da verificare |
| SEC-04 | Alta | rimozione di stream temporanei senza attributo di autorizzazione | confermato nel codice; binding runtime da verificare |
| SEC-05 | Alta | bypass completo dell'autenticazione External API in presenza del debugger | confermato |
| SEC-06 | Alta | hub SignalR anonimo capace di trasmettere a tutti i client | confermato |
| SEC-07 | Alta | stored XSS tramite costruzione diretta di HTML con dati applicativi | confermato; sfruttabilità da verificare |
| SEC-08 | Alta | token e dati delle richieste possono finire nei log | confermato |
| SEC-09 | Alta | External API basata su .NET 6 fuori supporto | confermato |
| SEC-10 | Media | deserializzazione Newtonsoft con `TypeNameHandling.All` | confermato; richiede modifica dei file locali |
| SEC-11 | Media | caricamento automatico di DLL PERS senza verifica d'integrità | confermato |
| SEC-12 | Media | Swagger sempre esposto e HTTPS non imposto dall'app | confermato; proxy da verificare |
| SEC-13 | Media | upload caricato interamente in memoria e validato solo per dimensione | confermato |
| SEC-14 | Media | esecuzione di programmi e argomenti letti dalla configurazione database | confermato; privilegi DB da verificare |
| SEC-15 | Bassa | chiave Firebase incorporata nell'app Android | confermato; restrizioni cloud da verificare |

## Rilievi dettagliati

### SEC-01 — Credenziali e segreti nel sorgente

**Severità: critica**

Sono presenti stringhe di connessione con credenziali SQL, credenziali usate dagli script di build e valori sensibili nelle configurazioni dei job. Le evidenze principali sono:

- `Ribo.Smart.Server.WebApi/Web.config`, righe 16–18;
- `Ribo.Smart.Server.Desk/appsettings.json`, righe 16–19;
- `Ribo.Smart.Server.ExternalApi/appsettings.json`, righe 16–24;
- `Ribo.Smart.Job/App.config`, incluse le righe 15–29;
- `Ribo.Smart.JobScheduler/App.config`, incluse le righe 10–19;
- `Build/GetDomainUserCred.bat`, righe 3–8;
- `Build/GetUserCred.bat`, righe 3–8;
- `Build/ReinstallSmart1Test.ps1`.

Il report non riproduce intenzionalmente i valori trovati. Anche credenziali indicate come sviluppo o test devono essere considerate compromesse dopo l'inclusione in una copia distribuibile del sorgente.

**Impatto:** accesso ai database, movimento laterale nell'infrastruttura, alterazione o esfiltrazione dei dati.

**Correzione:** ruotare immediatamente tutti i valori; rimuoverli anche dagli archivi e dalla cronologia del repository originale; usare un secret store; fornire nei file versionati solo placeholder; preferire identità gestite o autenticazione integrata quando possibile.

### SEC-02 — Token legacy riproducibili

**Severità: critica**

`Ribo.Smart.Server.Common/Helpers/Smart1TokenHelper.cs` contiene due chiavi Rijndael statiche alle righe 11 e 13. Il token contiene sostanzialmente UID dell'account e data, cifrati con queste chiavi. Chi dispone del sorgente può quindi produrre token accettati dall'API legacy.

Inoltre, la verifica alla riga 40 controlla solo che la data sia più recente della soglia minima; non rifiuta esplicitamente date future. Un token costruito con una data futura può quindi estendere ulteriormente la validità.

La password AES globale usata in più aree è anch'essa statica in `Ribo.Smart.Common/PrivateConstants.cs`, riga 9. Questo indebolisce la protezione di API key, licenze e altri valori cifrati con la stessa password.

**Impatto:** impersonificazione di account, accesso alle API e decifratura di valori protetti dall'applicazione.

**Correzione:** sostituire il formato proprietario con JWT/OIDC firmato, validando issuer, audience, lifetime e algoritmo; usare chiavi protette e ruotabili; introdurre revoca/versione delle credenziali; invalidare tutti i token legacy dopo la migrazione.

### SEC-03 — Download allegati senza controllo d'accesso

**Severità: critica**

La rotta `downloads/downloadAttachment/{EntityName}/{Id}` è registrata in `Ribo.Smart.Server.WebApi/App_Start/RouteConfig.cs`, riga 20. `AttachmentDownloadHandler` recupera l'allegato usando direttamente il GUID ricevuto, senza verificare sessione, token, ruolo o relazione dell'utente con l'entità.

Il parametro `EntityName` non viene utilizzato per una verifica autorizzativa. La risposta viene inoltre marcata come cache pubblica per 30 giorni (`AttachmentDownloadHandler.cs`, righe 51 e 59).

**Impatto:** divulgazione di documenti e allegati aziendali o personali a chi conosca o ottenga un identificativo.

**Correzione:** rimuovere la route legacy o inserire autenticazione obbligatoria e controllo object-level; verificare tenant/azienda/entità; usare `private, no-store` per contenuti sensibili; registrare accessi e dinieghi senza dati sensibili.

### SEC-04 — Rimozione upload non autorizzata

**Severità: alta**

`Ribo.Smart.Server.WebApi/Controllers/UploadController.cs` protegge `Save` con `Smart1AuthorizeAttribute`, ma il metodo pubblico `Remove` alla riga 95 non presenta lo stesso attributo né una restrizione esplicita del verbo HTTP. Il metodo elimina gli stream temporanei indicati dai GUID forniti dal chiamante.

**Impatto:** cancellazione non autorizzata di upload temporanei, interferenza con altri utenti e possibili richieste state-changing via GET.

**Correzione:** applicare autenticazione e autorizzazione a livello di controller; accettare solo `POST` o `DELETE`; verificare ownership e azienda per ogni UID; aggiungere protezione CSRF se usa cookie; rendere l'operazione idempotente e tracciata.

### SEC-05 — Bypass dell'External API con debugger

**Severità: alta**

In `Ribo.Smart.Server.ExternalApi.Common/Helpers/AuthenticationMiddleware.cs`, dalla riga 85, se un debugger è collegato non viene validato alcun token: viene selezionato un account con username codificato nel sorgente e ne vengono caricati i permessi.

Il controllo riguarda lo stato del processo, non l'ambiente `Development`. Un debugger collegato per diagnosi a un processo raggiungibile abilita quindi il bypass.

**Impatto:** accesso all'API con l'identità e i permessi dell'account incorporato.

**Correzione:** eliminare il ramo; usare credenziali di test reali in un ambiente isolato; impedire che configurazioni di sviluppo vengano pubblicate; aggiungere un test automatico che richieda sempre un token valido, anche sotto debugger.

### SEC-06 — Hub SignalR anonimo e broadcast globale

**Severità: alta**

`Ribo.Smart.Server.Desk/Startup.cs`, riga 40, mappa `/pushHub` con `AllowAnonymous`. Il metodo `PushReceived` in `Ribo.Smart.Server.Desk/SignalRHubs/PushSignalR.cs` accetta dati dal chiamante e li inoltra a `Clients.All`.

**Impatto:** un client non autenticato può tentare di inviare notifiche arbitrarie a tutti gli utenti collegati, causando spoofing, disturbo operativo o social engineering.

**Correzione:** richiedere autenticazione; autorizzare solo un ruolo/servizio emittente; separare il metodo server-to-client da quelli invocabili dal client; usare gruppi per azienda/utente; validare dimensione e schema del messaggio; introdurre rate limiting.

### SEC-07 — Stored XSS nel frontend

**Severità: alta**

Il popup della mappa clienti costruisce stringhe HTML con valori provenienti dai DTO e le assegna direttamente a `innerHTML` in `crud-customer-map-pinpoints.component.ts`, in particolare alle righe 348 e 408. Campi come descrizione, codice, matricola e sede non risultano codificati prima dell'inserimento.

Esistono inoltre diversi template che inseriscono `persData[...]` tramite `[innerHTML] | keepHtml`. L'implementazione della pipe appartiene probabilmente a una libreria esterna non disponibile, quindi la sua sanitizzazione non è stata verificata.

**Impatto:** esecuzione di JavaScript nel browser di operatori autenticati se un valore malevolo arriva nel database tramite import, API o integrazione.

**Correzione:** creare elementi DOM e assegnare `textContent`; evitare concatenazione HTML; mantenere la sanitizzazione Angular; consentire HTML solo con allowlist server/client; testare payload XSS sui campi provenienti da API e PERS.

### SEC-08 — Token e dati sensibili nei log

**Severità: alta**

`Smart1AuthorizeApiAttribute.cs`, riga 67, registra il token non valido insieme al messaggio d'errore. Altri controller serializzano l'intera request nelle eccezioni, e `AuthenticationMiddleware.cs`, riga 194, registra l'intera catena dell'eccezione.

Le request possono includere dati personali, documenti, identificativi, password o API key. I log vengono inoltrati anche al sistema FirstAid configurato dall'applicazione.

**Impatto:** riutilizzo di token, esposizione di dati personali e segreti a operatori o sistemi con accesso ai log.

**Correzione:** non registrare mai token, password, connection string o payload completi; introdurre redazione centralizzata; usare ID di correlazione; definire retention e accessi; bonificare i log storici.

### SEC-09 — Runtime fuori supporto

**Severità: alta**

`Ribo.Smart.Server.ExternalApi.csproj` usa `net6.0` e pacchetti ASP.NET Core 6.0.6. Secondo la [policy ufficiale Microsoft](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core), .NET 6 è fuori supporto dal 12 novembre 2024 e non riceve più aggiornamenti di sicurezza.

**Impatto:** vulnerabilità del runtime o framework non più corrette dal produttore.

**Correzione:** migrare almeno a una versione LTS supportata e installare sempre l'ultima patch di servicing. Verificare contestualmente tutte le dipendenze NuGet.

### SEC-10 — Deserializzazione con tipi arbitrari

**Severità: media**

`Ribo.Smart.App.ViewModel/Helpers/SerializationHelper.cs`, righe 95, 126, 149 e 169, usa Newtonsoft.Json con `TypeNameHandling.All` senza un binder restrittivo. I dati sono letti da file JSON locali dell'app.

**Impatto:** in ambienti dove un aggressore riesca a modificare quei file, la deserializzazione può istanziare tipi non previsti e ampliare l'impatto della compromissione locale.

**Correzione:** deserializzare direttamente nel tipo generico `T`; usare `TypeNameHandling.None`; se il polimorfismo è indispensabile, usare un binder con allowlist chiusa.

### SEC-11 — Plugin PERS caricati senza verifica

**Severità: media**

`Ribo.Smart.Server.ExternalApi/Program.cs`, riga 35, carica tramite `Assembly.LoadFrom` ogni DLL trovata nella cartella `Pers`. Non è visibile una verifica di firma, hash o allowlist.

**Impatto:** chi ottiene scrittura sulla directory di pubblicazione può conseguire esecuzione di codice con l'identità del servizio.

**Correzione:** rendere la directory non scrivibile dal processo e dagli utenti non amministrativi; usare allowlist di assembly e hash/firma; distribuire plugin tramite pipeline firmata; registrare versione e impronta caricata.

### SEC-12 — Swagger sempre disponibile e HTTPS non imposto

**Severità: media**

`Ribo.Smart.Server.ExternalApi/Program.cs`, righe 102–103, abilita Swagger e Swagger UI senza condizione sull'ambiente. Non è presente `UseHttpsRedirection` nell'applicazione.

**Impatto:** maggiore esposizione della superficie API e rischio di trasporto non cifrato se IIS/reverse proxy non applica HTTPS.

**Correzione:** pubblicare Swagger solo su rete amministrativa o dietro autenticazione; abilitarlo per ambiente; imporre HTTPS e HSTS a livello applicativo o proxy verificato; disabilitare HTTP esterno.

### SEC-13 — Upload e consumo di memoria

**Severità: media**

`UploadController.Save` copia ogni file interamente in un `MemoryStream` prima dell'inserimento nel database (`UploadController.cs`, righe 74–76). Il limite IIS arriva a circa 1 GB nel `Web.config`, mentre il controllo applicativo dipende da una configurazione nel database. Non sono visibili validazione del contenuto, allowlist delle estensioni o scansione antimalware.

**Impatto:** esaurimento memoria, file malevoli archiviati e incremento della superficie di attacco sui sistemi che aprono gli allegati.

**Correzione:** imporre limiti bassi anche sul web server; usare streaming; limitare numero e dimensione cumulativa; verificare MIME tramite contenuto; allowlist; scansione antimalware; isolare storage e download.

### SEC-14 — Esecuzione di processi configurata dal database

**Severità: media**

`Ribo.Smart.JobScheduler/ServiceScheduler.cs`, righe 664–698, costruisce `ProcessStartInfo` usando eseguibile e argomenti derivati dalla configurazione dei job. `UseShellExecute=false` riduce il rischio di interpretazione da parte della shell, ma un percorso eseguibile modificabile rimane un meccanismo di esecuzione di codice.

**Impatto:** compromissione del servizio se un account capace di modificare job o database può puntare a un eseguibile non autorizzato.

**Correzione:** allowlist di azioni ed eseguibili; directory firmata e non scrivibile; eliminare percorsi arbitrari dal database; account di servizio con privilegi minimi; proteggere rigidamente le procedure di gestione job.

### SEC-15 — Chiave Firebase incorporata

**Severità: bassa**

Una API key Firebase è inclusa in `Ribo.Smart.App.Droid.Net/Services/MyFirebaseInit.cs`, riga 20. Le chiavi client Firebase non sono sempre segrete, ma devono essere ristrette a package, firma e API necessarie.

**Correzione:** verificare le restrizioni nella console Google/Firebase, App Check e le regole di accesso dei servizi; ruotare la chiave se priva di restrizioni o già abusata.

## Controlli positivi osservati

- Le query esaminate nell'External API usano parametri per UID, date, offset e valori applicativi.
- I metodi CRUD base dell'External API applicano un filtro autorizzativo e un filtro di validazione.
- La validazione JWT dell'External API controlla firma e scadenza con `ClockSkew` impostato a zero.
- Il caricamento legacy usa `Path.GetFileName`, riducendo il rischio di path traversal dal nome originario.
- Le eccezioni dell'External API restituiscono normalmente un ID di correlazione invece dello stack trace completo al client.

Questi aspetti non annullano i rilievi, ma sono buone basi da preservare durante le correzioni.

## Piano di intervento consigliato

### Entro 24–72 ore

- Inventariare e ruotare credenziali SQL, account di build, API key e chiavi applicative.
- Limitare in rete gli endpoint legacy fino alla correzione.
- Disabilitare la route anonima degli allegati e `Upload/Remove`.
- Rimuovere il bypass debugger.
- Proteggere `/pushHub` e impedire chiamate client al broadcast globale.
- Cercare nei log token e credenziali già registrati e revocarli.

### Entro due settimane

- Migrare i token legacy verso uno standard firmato.
- Correggere tutti i sink `innerHTML` e verificare la pipe `keepHtml` nelle librerie esterne.
- Rimuovere `TypeNameHandling.All`.
- Rendere Swagger e HTTPS coerenti con la configurazione di produzione.
- Limitare e scansionare gli upload.
- Definire allowlist e ACL per plugin ed eseguibili dei job.

### Entro uno–due mesi

- Migrare l'External API da .NET 6.
- Integrare secret scanning, SAST e dependency scanning nella build.
- Aggiungere test automatici negativi di autenticazione, autorizzazione object-level, XSS e upload.
- Eseguire un penetration test autorizzato su un ambiente rappresentativo.
- Rivedere i privilegi degli account SQL e dei servizi Windows.

## Verifiche automatiche non completate

- `dotnet list package --vulnerable` non è stato eseguito perché l'SDK `dotnet` non è disponibile nell'ambiente corrente.
- `npm audit` non ha ricevuto risposta dal registry entro il tempo operativo ed è stato interrotto senza modificare il progetto.
- Gitleaks, TruffleHog e Semgrep non sono installati.
- La soluzione contiene riferimenti a repository Ribo esterni non presenti, quindi l'analisi non copre i relativi filtri, helper e componenti condivisi.

## Criterio di chiusura

Un rilievo dovrebbe essere chiuso solo dopo:

1. modifica del codice o della configurazione;
2. test automatico che riproduca il caso negativo;
3. verifica su ambiente di test;
4. rotazione/revoca dei segreti coinvolti;
5. controllo dei log e degli accessi precedenti, quando pertinente.

Questa è una valutazione preliminare difensiva e non include tentativi di sfruttamento contro sistemi attivi.
