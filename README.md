# BBT Sito

La versione live del sito e il file [index.html](/c:/Users/Paolo%20Pedron/OneDrive%20-%20ZEROBYTE%20SRL/Dev/BBT_Sito/index.html).

## Struttura

- `index.html`: pagina statica attualmente pubblicata.
- `Favicon/`: asset favicon usati dalla pagina live.
- `legacy-spa/`: archivio della precedente SPA React/Vite. Non e piu il target di deploy.

## Deploy

Il repository viene pubblicato su Cloudflare Pages usando la root del progetto come sito statico, senza build della SPA legacy.

Per i percorsi custom e i rewrite lato hosting, usa [`_redirects`](/c:/Users/Paolo%20Pedron/OneDrive%20-%20ZEROBYTE%20SRL/Dev/BBT_Sito/_redirects).

Le cartelle e i file sono case-sensitive per natura (filesystem), ma `functions/_middleware.js`
intercetta i 404 e, se l'URL corrisponde a una pagina esistente ignorando maiuscole/minuscole,
reindirizza (301) al percorso corretto. Il mapping usato dal middleware è in
`functions/_case-manifest.js`, generato da `scripts/generate-case-manifest.mjs`: rilanciare
questo script (`node scripts/generate-case-manifest.mjs`) ogni volta che si aggiungono,
rinominano o spostano pagine/cartelle, poi committare il file rigenerato.

## Nota operativa

Per modifiche future al sito live, lavora su `index.html`.
