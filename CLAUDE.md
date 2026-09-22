# Note operative per Claude Code

## Hosting e case-sensitivity degli URL

Il sito è statico e pubblicato su Cloudflare Pages, con la root del repo come sito. Cartelle e
file sono case-sensitive (es. `Offerte/Atalanta/`), quindi un URL digitato con un case diverso
darebbe normalmente 404.

Per evitare questo, `functions/_middleware.js` è una Cloudflare Pages Function che intercetta i
404 e, se l'URL corrisponde a un file/pagina esistente ignorando maiuscole/minuscole, reindirizza
(301) al percorso corretto. Il mapping usato è `functions/_case-manifest.js`, un elenco
"percorso minuscolo → percorso reale" generato da `scripts/generate-case-manifest.mjs`.

**Il manifest è aggiornato automaticamente**: il workflow
`.github/workflows/update-case-manifest.yml` gira ad ogni push, rilancia lo script e, se il
manifest risulta cambiato (nuove pagine, file rinominati/spostati), committa e pusha la nuova
versione sullo stesso branch. Non serve quindi rigenerarlo a mano dopo aver aggiunto una pagina —
basta pushare le modifiche.

Se lavori offline o vuoi verificare subito il risultato senza aspettare l'action, puoi comunque
rilanciarlo manualmente:

```
node scripts/generate-case-manifest.mjs
```

`_redirects` resta utile per alias/scorciatoie URL intenzionali (es. `/atalanta` →
`/Offerte/Atalanta/`), non per il fallback case-insensitive, che è generico e copre già tutto.
