# BBT Sito

La versione live del sito e il file [index.html](/c:/Users/Paolo%20Pedron/OneDrive%20-%20ZEROBYTE%20SRL/Dev/BBT_Sito/index.html).

## Struttura

- `index.html`: pagina statica attualmente pubblicata.
- `Favicon/`: asset favicon usati dalla pagina live.
- `legacy-spa/`: archivio della precedente SPA React/Vite. Non e piu il target di deploy.

## Deploy

Il repository viene pubblicato su Cloudflare Pages usando la root del progetto come sito statico, senza build della SPA legacy.

Per i percorsi custom e i rewrite lato hosting, usa [`_redirects`](/c:/Users/Paolo%20Pedron/OneDrive%20-%20ZEROBYTE%20SRL/Dev/BBT_Sito/_redirects).

## Nota operativa

Per modifiche future al sito live, lavora su `index.html`.
