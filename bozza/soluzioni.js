/* Elenco delle soluzioni BBT: unica fonte per la home (e, in seguito, per il catalogo /soluzioni/).
   Per aggiungere una soluzione basta aggiungere un oggetto a questo array e caricare i suoi media.
   media.tipo: "video" (loop muto + poster, opzionale demo completa) oppure "anteprima" (interfaccia
   dimostrativa in HTML, usata finché il video non è pronto). */
window.BBT_SOLUZIONI = [
  {
    id: "mesbeat",
    nome: "MesBeat",
    area: "Produzione",
    promessa: "Il piano di produzione si compone da solo. Lo controlla chi conosce il reparto.",
    problema: "Schede cartacee, tempi poco visibili e dati di produzione ricopiati in ufficio.",
    cambia: [
      "Il pianificatore vede subito quali macchine lavorano, quali sono ferme e cosa è in ritardo.",
      "Gli operatori registrano attrezzaggio, produzione e pause dal tablet di macchina.",
      "Il consuntivo arriva in Arca Evolution senza ricopiare nulla."
    ],
    siCollega: "Arca Evolution e SQL Server",
    ottenete: "Piano, avanzamento e consuntivo di produzione nel gestionale",
    media: {
      tipo: "video",
      loop: "media/mesbeat-loop.mp4",
      poster: "media/mesbeat-poster.jpg",
      demo: { src: "media/mesbeat-demo.mp4", durata: "1:48" },
      descrizione: "Estratto della demo MesBeat: piano di produzione, monitor di reparto, tablet dell’operatore e statistiche."
    },
    scheda: "../soluzioni/arca-rileva.html"
  },
  {
    id: "fatturato",
    nome: "Fatturato Monitor",
    area: "Finanza e controllo",
    promessa: "La proiezione del mese, senza aprire cinque sezioni del gestionale.",
    problema: "Fatture, contratti, prefatture, documenti di trasporto e ordini da consultare uno per uno.",
    cambia: [
      "Le cinque fonti del gestionale confluiscono in una sola vista.",
      "La proiezione di fine mese è sempre confrontata con il budget.",
      "La direzione legge i numeri senza chiedere un estratto all’amministrazione."
    ],
    siCollega: "Gestionale su SQL Server",
    ottenete: "Dashboard con proiezione del mese e budget",
    media: { tipo: "anteprima", vista: "fatturato" },
    scheda: "../soluzioni/fatturato-monitor.html"
  },
  {
    id: "nis2",
    nome: "NIS2 Platform",
    area: "Conformità e sicurezza",
    promessa: "Requisiti, evidenze e scadenze in un unico posto, pronti per la verifica.",
    problema: "Requisiti, documenti e responsabilità sparsi tra fogli di calcolo e cartelle condivise.",
    cambia: [
      "Il perimetro si configura su 87 requisiti per i soggetti importanti o 116 per gli essenziali.",
      "Ogni requisito ha un responsabile, una scadenza e le sue evidenze.",
      "Il quadro per la direzione e per le verifiche si esporta in PDF."
    ],
    siCollega: "Portale dedicato con accessi per ruolo",
    ottenete: "Evidenze, scadenze e report PDF",
    media: { tipo: "anteprima", vista: "nis2" },
    scheda: "../soluzioni/nis2-compliance.html"
  }
];
