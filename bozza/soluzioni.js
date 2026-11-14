/* Elenco delle soluzioni BBT: unica fonte per la home (e, in seguito, per il catalogo /soluzioni/).
   Per aggiungere una soluzione basta aggiungere un oggetto a questo array e caricare i suoi media.
   Campi di testo, nell'ordine in cui il visitatore li legge:
   - definizione: che cos'è, in parole comuni (es. "Il MES che…"); niente nomi di prodotti di terzi;
   - promessa: cosa cambia, in una frase, detto dal punto di vista di chi legge;
   - scena: la situazione di oggi, descritta in modo che il lettore ci si riconosca;
   - cambia: tre risultati concreti, ciascuno con un soggetto e un verbo;
   - siCollega / ottenete: i fatti, brevi.
   Dopo ogni modifica a questo file aggiornare il parametro ?v= nel tag script di index.html.
   media.tipo: "video" (loop muto + poster, opzionale demo completa) oppure "anteprima" (interfaccia
   dimostrativa in HTML, usata finché il video non è pronto). */
window.BBT_SOLUZIONI = [
  {
    id: "mesbeat",
    nome: "MesBeat",
    area: "Produzione",
    definizione: "Il MES che si adatta al vostro reparto",
    promessa: "Il piano di produzione si compone da solo. L’ultima parola resta a chi conosce il reparto.",
    scena: "Le schede di lavoro girano su carta, a fine turno qualcuno le ricopia nel gestionale e, quando una macchina si ferma, in ufficio lo si scopre a cose fatte.",
    cambia: [
      "Ogni mattina il pianificatore vede, macchina per macchina, cosa lavora, cosa è fermo e cosa è in ritardo.",
      "Gli operatori segnano attrezzaggio, produzione e pause con un tocco sul tablet di macchina.",
      "Il consuntivo entra nell’ERP da solo: nessuno ricopia più nulla."
    ],
    siCollega: "Il vostro ERP",
    ottenete: "Piano, avanzamento e consuntivo di produzione, già nel gestionale",
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
    definizione: "Il cruscotto del fatturato per la direzione",
    promessa: "Come chiuderà il mese, in una schermata. Senza aspettare l’amministrazione.",
    scena: "Per sapere come sta andando il mese bisogna aprire fatture, contratti, prefatture, documenti di trasporto e ordini, uno alla volta, e poi sommare a mano.",
    cambia: [
      "Le cinque fonti del gestionale finiscono in una sola vista, sempre aggiornata.",
      "La proiezione di fine mese compare accanto al budget: lo scostamento si vede subito.",
      "Non serve più chiedere un estratto all’amministrazione: il numero è già lì."
    ],
    siCollega: "Il vostro ERP",
    ottenete: "Una dashboard con proiezione del mese e confronto con il budget",
    media: { tipo: "anteprima", vista: "fatturato" },
    scheda: "../soluzioni/fatturato-monitor.html"
  },
  {
    id: "nis2",
    nome: "NIS2 Platform",
    area: "Conformità e sicurezza",
    definizione: "La piattaforma per gestire la conformità NIS2",
    promessa: "Sapere in ogni momento a che punto siete con la NIS2. E poterlo dimostrare.",
    scena: "Requisiti in un foglio di calcolo, documenti sparsi tra cartelle condivise, scadenze affidate alla memoria di qualcuno. E la verifica arriva sempre nel momento sbagliato.",
    cambia: [
      "Il perimetro si imposta sui requisiti che vi riguardano: 87 per i soggetti importanti, 116 per gli essenziali.",
      "Ogni requisito ha un responsabile, una scadenza e le prove allegate.",
      "Il quadro per la direzione e per chi vi controlla si esporta in PDF."
    ],
    siCollega: "Portale dedicato, con accessi per ruolo",
    ottenete: "Evidenze ordinate, scadenze sotto controllo, report pronti",
    media: { tipo: "anteprima", vista: "nis2" },
    scheda: "../soluzioni/nis2-compliance.html"
  }
];
