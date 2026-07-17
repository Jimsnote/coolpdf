export const it = {
  site: {
    name: 'CoolPDF',
    description: 'Strumenti PDF gratuiti che rispettano la tua privacy',
  },
  nav: {
    home: 'Home',
    tools: 'Strumenti',
    about: 'Chi siamo',
    faq: 'FAQ',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
  },
  languageSwitcher: {
    label: 'Lingua',
  },
  footer: {
    pillars:
      'Elaborazione 100% lato client · I tuoi file non lasciano mai il tuo dispositivo · Nessuna registrazione richiesta',
    pagesHeading: 'Pagine',
    about: 'Chi siamo',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini di servizio',
    faq: 'FAQ',
    github: 'GitHub',
    copyright: '© {year} CoolPDF. Tutti i diritti riservati.',
  },
  common: {
    comingSoon: 'Prossimamente',
  },
  home: {
    metaTitle: 'Strumenti PDF gratuiti che rispettano la tua privacy | CoolPDF',
    metaDescription:
      'Unisci, dividi, comprimi e proteggi i PDF direttamente nel tuo browser. Elaborazione 100% lato client: nessun caricamento, nessuna registrazione, gratis per sempre.',
    hero: {
      title: 'Strumenti PDF gratuiti che rispettano la tua privacy',
      subtitle:
        'Unisci, dividi, comprimi e proteggi i PDF direttamente nel tuo browser. Nessun caricamento. Nessuna registrazione. Nessun server. I tuoi file vengono elaborati localmente sul tuo dispositivo: non toccano mai Internet.',
      cta: 'Esplora gli strumenti',
    },
    pillars: {
      heading: 'Strumenti PDF senza compromessi sulla privacy',
      items: [
        {
          title: 'Nessun caricamento',
          description:
            'I tuoi file non lasciano mai il tuo dispositivo. Ogni strumento funziona localmente nel tuo browser, quindi nulla viene mai inviato a un server.',
        },
        {
          title: 'Nessuna registrazione',
          description:
            'Nessun account, nessun indirizzo email, nessuna attesa. Apri la pagina e inizia subito a lavorare.',
        },
        {
          title: 'Gratis per sempre',
          description:
            'Ogni strumento è completamente gratuito, senza limiti di utilizzo, senza filigrane e senza livelli premium.',
        },
      ],
    },
    toolsSection: {
      heading: 'Gli strumenti',
      subheading:
        'Dodici strumenti PDF essenziali, ognuno dei quali funziona interamente sul tuo dispositivo.',
    },
    why: {
      heading: 'Perché l’elaborazione locale è importante',
      paragraphs: [
        'La maggior parte degli strumenti PDF online ti chiede di caricare i file sui propri server prima che accada qualsiasi cosa. Se ci pensi, è uno scambio strano: per ruotare una pagina o unire due documenti, consegni il file stesso. E i PDF raramente sono banali: sono contratti, dichiarazioni dei redditi, cartelle cliniche, estratti conto e documenti d’identità. Una volta caricato, un file viaggia attraverso un’infrastruttura che non controlli: server web, code, archivi temporanei, backup. Non hai modo di verificare quando viene davvero eliminato, né chi può accedervi nel frattempo.',
        'CoolPDF adotta l’approccio opposto. Invece di inviare il file all’elaborazione, portiamo l’elaborazione al file. I browser moderni sono straordinariamente potenti e WebAssembly ci consente di eseguire motori PDF di livello industriale direttamente nella scheda del browser, a una velocità quasi nativa. Quando usi uno strumento CoolPDF, il documento viene letto dal tuo dispositivo, trasformato da codice in esecuzione nel tuo browser e salvato di nuovo sul tuo disco. In nessun momento un singolo byte del file attraversa la rete.',
        'Questo approccio è migliore sotto ogni aspetto che conta. È più privato, perché non c’è alcun caricamento da intercettare o da cui possano verificarsi fughe di dati. È più veloce, perché non c’è alcun andirivieni verso un server né alcuna coda. È più affidabile, perché gli strumenti continuano a funzionare anche con una connessione instabile. Ed è più economico da gestire, ed è per questo che CoolPDF può essere davvero gratuito e senza limiti di utilizzo.',
        'Pensiamo che gli strumenti per documenti avrebbero dovuto funzionare così fin dall’inizio. I tuoi file appartengono al tuo dispositivo, ed è esattamente lì che CoolPDF li conserva.',
      ],
    },
    proof: {
      heading: 'Non fidarti solo delle nostre parole',
      items: [
        {
          title: 'Vai offline',
          description:
            'Disconnettiti da Internet dopo il caricamento di questa pagina: ogni strumento continua a funzionare.',
        },
        {
          title: 'Osserva la rete',
          description:
            'Apri gli strumenti per sviluppatori (F12) → scheda Rete mentre usi uno strumento: zero caricamenti di file.',
        },
        {
          title: 'Verifica il codice',
          description:
            'Il nostro codice è open source (AGPL-3.0): verificalo tu stesso su GitHub.',
        },
      ],
    },
  },
  tools: {
    'merge-pdf': {
      name: 'Unisci PDF',
      description: 'Combina più PDF in un unico file, nell’ordine che preferisci.',
    },
    'split-pdf': {
      name: 'Dividi PDF',
      description: 'Estrai un intervallo di pagine o dividi un PDF in documenti separati.',
    },
    'compress-pdf': {
      name: 'Comprimi PDF',
      description: 'Riduci le dimensioni del file mantenendo la qualità che ti serve.',
    },
    'rotate-pdf': {
      name: 'Ruota PDF',
      description: 'Ruota singole pagine o un intero documento in pochi secondi.',
    },
    'organize-pdf': {
      name: 'Organizza PDF',
      description: 'Riordina, elimina e disponi le pagine con il trascinamento.',
    },
    'pdf-to-jpg': {
      name: 'PDF in JPG',
      description: 'Trasforma ogni pagina del PDF in un’immagine JPG di alta qualità.',
    },
    'jpg-to-pdf': {
      name: 'JPG in PDF',
      description: 'Converti le immagini JPG in un documento PDF pulito e condivisibile.',
    },
    'protect-pdf': {
      name: 'Proteggi PDF',
      description: 'Aggiungi la crittografia con password per mantenere privato il tuo PDF.',
    },
    'unlock-pdf': {
      name: 'Sblocca PDF',
      description: 'Rimuovi la protezione con password dai PDF di tua proprietà.',
    },
    'watermark-pdf': {
      name: 'Filigrana PDF',
      description: 'Applica testo o un’immagine su ogni pagina del documento.',
    },
    'page-numbers': {
      name: 'Numeri di pagina',
      description: 'Aggiungi i numeri di pagina al tuo PDF, esattamente dove li vuoi.',
    },
    'pdf-to-markdown': {
      name: 'PDF in Markdown',
      description: 'Estrai Markdown pulito e strutturato da qualsiasi PDF.',
    },
  },
  about: {
    metaTitle: 'Chi siamo | CoolPDF',
    metaDescription:
      'CoolPDF è un toolkit PDF gratuito e open source che elabora ogni file localmente nel tuo browser. Scopri perché l’abbiamo costruito così.',
    heading: 'Informazioni su CoolPDF',
    sections: [
      {
        title: 'La nostra missione',
        paragraphs: [
          'CoolPDF esiste per rendere il lavoro quotidiano con i PDF — unire, dividere, comprimere, proteggere — gratuito, istantaneo e privato per tutti. Crediamo che non dovresti mai dover scambiare i tuoi documenti per comodità, quindi abbiamo creato un toolkit in cui i file restano con te e gli strumenti arrivano nel tuo browser.',
        ],
      },
      {
        title: 'Perché l’abbiamo costruito così',
        paragraphs: [
          'La maggior parte degli strumenti PDF online richiede di caricare i file su un server prima che accada qualsiasi cosa. Ciò significa che contratti, dichiarazioni dei redditi, documenti d’identità e cartelle cliniche passano attraverso un’infrastruttura che non controlli: server, code e backup gestiti da qualcun altro, secondo informative sulla privacy che poche persone leggono.',
          'I browser moderni sono abbastanza potenti da rendere tutto questo non più necessario. CoolPDF compila motori PDF di livello industriale in WebAssembly e li esegue direttamente sul tuo dispositivo. Il file non lascia mai il tuo computer, perché non c’è alcun posto dove possa andare: CoolPDF non ha affatto server di caricamento.',
        ],
      },
      {
        title: 'Non fidarti solo delle nostre parole',
        paragraphs: [
          'Le affermazioni sulla privacy sono facili da fare e difficili da verificare, quindi abbiamo reso CoolPDF verificabile per progettazione:',
        ],
        list: [
          'Disconnettiti da Internet dopo il caricamento di una pagina: ogni strumento continua a funzionare, perché nulla dipende da un server.',
          'Apri gli strumenti per sviluppatori del browser (F12) e osserva la scheda Rete mentre usi uno strumento: vedrai zero caricamenti di file.',
          'Leggi il codice sorgente. CoolPDF è open source con licenza AGPL-3.0, quindi chiunque può verificare esattamente cosa succede a un file.',
        ],
      },
      {
        title: 'Cosa non facciamo',
        paragraphs: ['L’elenco delle cose che CoolPDF non fa è importante quanto quello delle cose che fa:'],
        list: [
          'Non carichiamo i tuoi file: non esiste alcun backend che possa riceverli.',
          'Non archiviamo i tuoi file: chiudere la scheda elimina ogni traccia.',
          'Non analizziamo il contenuto dei tuoi documenti.',
          'Non richiediamo un account, un indirizzo email né alcuna informazione personale.',
          'Non imponiamo limiti di utilizzo, filigrane o livelli premium.',
        ],
      },
      {
        title: 'Open source',
        paragraphs: [
          'CoolPDF è software libero, rilasciato sotto la GNU Affero General Public License v3.0 (AGPL-3.0). Il codice sorgente completo è disponibile su GitHub: ispezionalo, verificalo o contribuisci.',
        ],
      },
      {
        title: 'Contatti',
        paragraphs: [
          'Domande, commenti o segnalazioni di bug? Scrivici a support@getcoolpdf.com. I messaggi vengono recapitati tramite Cloudflare Email Routing.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Informativa sulla privacy | CoolPDF',
    metaDescription:
      'CoolPDF elabora tutti i file localmente nel tuo browser: non riceviamo, non archiviamo e non accediamo mai ai tuoi documenti. Leggi la nostra informativa sulla privacy.',
    heading: 'Informativa sulla privacy',
    lastUpdated: 'Ultimo aggiornamento: luglio 2026',
    tldr: {
      title: 'TL;DR',
      items: [
        'I tuoi file vengono elaborati al 100% localmente nel tuo browser. Non li riceviamo, non li archiviamo e non li tocchiamo nemmeno.',
        'Nessun account, nessun indirizzo email, nessuna informazione personale. Mai.',
        'Utilizziamo Cloudflare Web Analytics, uno strumento di statistiche senza cookie e rispettoso della privacy.',
        'Mostriamo annunci di Google AdSense per mantenere CoolPDF gratuito. Google può utilizzare cookie per annunci personalizzati, e puoi disattivarli.',
      ],
    },
    sections: [
      {
        title: '1. I file che elabori',
        paragraphs: [
          'Questa è la nostra promessa principale: tutta l’elaborazione avviene localmente nel tuo browser tramite WebAssembly e JavaScript. I tuoi file non vengono mai trasmessi ai nostri server, né archiviati su di essi o resi accessibili a essi. Non abbiamo alcuna capacità tecnica di visualizzare, copiare o conservare i file che elabori: non esiste alcun backend che possa riceverli. Chiudere la scheda del browser elimina ogni traccia dei tuoi documenti.',
        ],
      },
      {
        title: '2. Informazioni che non raccogliamo',
        paragraphs: [
          'CoolPDF non ha account, quindi non raccogliamo indirizzi email, password né dati di profilo. Non raccogliamo metadati dei file e non conserviamo registri di elaborazione: senza un backend, questi dati non avrebbero semplicemente dove andare. Non chiediamo, e non vogliamo, le tue informazioni personali.',
        ],
      },
      {
        title: '3. Statistiche',
        paragraphs: [
          'Utilizziamo Cloudflare Web Analytics per comprendere il traffico aggregato, ad esempio quali pagine sono popolari e da dove provengono approssimativamente i visitatori. Non utilizza cookie, non traccia i singoli utenti e non raccoglie dati personali. Non può vedere i file che elabori, perché non possiamo vederli nemmeno noi.',
        ],
      },
      {
        title: '4. Pubblicità — Google AdSense',
        paragraphs: [
          'CoolPDF è finanziato dalla pubblicità erogata tramite Google AdSense. Google e i suoi partner possono utilizzare cookie per mostrarti annunci personalizzati in base alla tua cronologia di navigazione. Puoi disattivare la pubblicità personalizzata in qualsiasi momento tramite Google Ads Settings (adssettings.google.com). I visitatori dello Spazio economico europeo e del Regno Unito vedranno una richiesta di consenso prima che vengano mostrati annunci personalizzati. Per i dettagli, consulta le Norme sulla privacy di Google all’indirizzo policies.google.com/privacy.',
        ],
      },
      {
        title: '5. Sicurezza e conservazione dei dati',
        paragraphs: [
          'Poiché non riceviamo mai i tuoi file, una violazione della nostra infrastruttura non può esporli: la sicurezza dei dati più forte è quella dei dati che non abbiamo. L’intero sito è servito tramite HTTPS e tutta l’elaborazione avviene all’interno della sandbox del tuo browser.',
        ],
      },
      {
        title: '6. Modifiche a questa informativa',
        paragraphs: [
          'Se modifichiamo questa informativa, pubblicheremo la versione aggiornata su questa pagina con una data revisionata. Le modifiche sostanziali saranno evidenziate sul sito.',
        ],
      },
      {
        title: '7. Contattaci',
        paragraphs: [
          'Domande su questa informativa? Scrivi a support@getcoolpdf.com.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Termini di servizio | CoolPDF',
    metaDescription:
      'I termini di servizio di CoolPDF: strumenti PDF gratuiti, basati sul browser, senza account e senza caricamenti.',
    heading: 'Termini di servizio',
    lastUpdated: 'Ultimo aggiornamento: luglio 2026',
    sections: [
      {
        title: '1. Accettazione dei termini',
        paragraphs: [
          'Utilizzando CoolPDF, accetti questi termini. Se non sei d’accordo, semplicemente non utilizzare il sito.',
        ],
      },
      {
        title: '2. Descrizione del servizio',
        paragraphs: [
          'CoolPDF fornisce strumenti PDF gratuiti che funzionano interamente nel tuo browser. Il servizio è fornito "così com’è" e "come disponibile", gratuitamente, senza account e senza limiti di utilizzo.',
        ],
      },
      {
        title: '3. Responsabilità dell’utente',
        paragraphs: [
          'Sei l’unico responsabile dei file che elabori e del possesso del diritto legale di utilizzarli. Accetti di non utilizzare CoolPDF per scopi illeciti.',
        ],
      },
      {
        title: '4. Proprietà intellettuale',
        paragraphs: [
          'Il codice sorgente di CoolPDF è open source sotto la GNU Affero General Public License v3.0 (AGPL-3.0). I tuoi file restano interamente tuoi: non rivendichiamo alcun diritto su ciò che elabori.',
        ],
      },
      {
        title: '5. Esclusione di garanzie',
        paragraphs: [
          'CoolPDF è fornito senza garanzie di alcun tipo, espresse o implicite, comprese quelle di commerciabilità, idoneità per uno scopo particolare e non violazione. Conserva sempre una copia di backup dei documenti importanti.',
        ],
      },
      {
        title: '6. Limitazione di responsabilità',
        paragraphs: [
          'Nella misura massima consentita dalla legge, CoolPDF e i suoi collaboratori non sono responsabili per danni indiretti, incidentali o consequenziali derivanti dall’utilizzo del servizio.',
        ],
      },
      {
        title: '7. Modifiche a questi termini',
        paragraphs: [
          'Potremmo aggiornare questi termini di volta in volta. La versione corrente è sempre pubblicata su questa pagina e l’uso continuato del sito costituisce accettazione.',
        ],
      },
      {
        title: '8. Contatti',
        paragraphs: ['Domande su questi termini? Scrivi a support@getcoolpdf.com.'],
      },
    ],
  },
  faq: {
    metaTitle: 'Domande frequenti | CoolPDF',
    metaDescription:
      'CoolPDF è davvero gratuito? I file vengono caricati? Funziona offline? Risposte alle domande più comuni su CoolPDF.',
    heading: 'Domande frequenti',
    items: [
      {
        question: 'CoolPDF è davvero gratuito?',
        answer:
          'Sì. Ogni strumento è completamente gratuito, senza limiti di utilizzo, senza filigrane e senza livelli premium. Sono gli annunci discreti a mantenere CoolPDF gratuito per tutti.',
      },
      {
        question: 'Devo creare un account o registrarmi?',
        answer:
          'No. CoolPDF non chiede mai un account, un indirizzo email né alcuna informazione personale. Apri il sito e inizia a lavorare: è tutto qui il processo di avvio.',
      },
      {
        question: 'I miei file vengono caricati sui vostri server?',
        answer:
          'No. CoolPDF elabora ogni file localmente nel tuo browser utilizzando WebAssembly. I tuoi file non lasciano mai il tuo dispositivo: non esistono caricamenti di alcun tipo, perché non c’è un server che possa riceverli.',
      },
      {
        question: 'CoolPDF può vedere, archiviare o accedere ai miei documenti?',
        answer:
          'No. Non esiste un backend, quindi non abbiamo alcuna capacità tecnica di vedere, archiviare o accedere ai tuoi file. Puoi verificarlo tu stesso: apri gli strumenti per sviluppatori del browser (F12) e osserva la scheda Rete mentre usi uno strumento: zero caricamenti di file. Il nostro codice è inoltre open source, quindi chiunque può verificarlo.',
      },
      {
        question: 'CoolPDF funziona offline?',
        answer:
          'Sì. Una volta caricata una pagina, ogni strumento funziona interamente sul tuo dispositivo, quindi gli strumenti continuano a funzionare anche se ti disconnetti da Internet. La memorizzazione nella cache offline dell’intero sito tramite un service worker è nella nostra roadmap.',
      },
      {
        question: 'È sicuro elaborare documenti riservati con CoolPDF?',
        answer:
          'Sì. Poiché i file vengono elaborati localmente e non lasciano mai il tuo dispositivo, CoolPDF è adatto a contratti, cartelle cliniche e rendiconti finanziari. L’intero codice è open source con licenza AGPL-3.0, quindi i ricercatori di sicurezza possono verificare esattamente cosa succede a un file.',
      },
      {
        question: 'Come guadagna CoolPDF?',
        answer:
          'Mostriamo annunci erogati da Google AdSense. La pubblicità è la nostra unica fonte di entrate ed è ciò che permette a ogni strumento di restare gratuito e senza limiti di utilizzo.',
      },
      {
        question: 'Quali browser sono supportati?',
        answer:
          'CoolPDF funziona nelle versioni attuali di Chrome, Edge, Firefox e Safari. Qualsiasi browser moderno con supporto WebAssembly — di fatto tutti — può eseguire ogni strumento.',
      },
      {
        question: 'CoolPDF è open source?',
        answer:
          'Sì. CoolPDF è rilasciato sotto la GNU Affero General Public License v3.0 (AGPL-3.0). Il codice sorgente completo è disponibile su GitHub e i contributi sono benvenuti.',
      },
      {
        question: 'Quali strumenti PDF offre CoolPDF?',
        answer:
          'CoolPDF offre dodici strumenti: Unisci PDF, Dividi PDF, Comprimi PDF, Ruota PDF, Organizza PDF, PDF in JPG, JPG in PDF, Proteggi PDF, Sblocca PDF, Filigrana PDF, Numeri di pagina e PDF in Markdown. Tutti funzionano localmente nel tuo browser.',
      },
    ],
  },
  factSummary:
    'CoolPDF è un toolkit PDF gratuito e basato sul browser. A differenza dei tradizionali strumenti PDF online, CoolPDF elabora tutti i file localmente sul dispositivo dell’utente utilizzando WebAssembly: i file non vengono mai caricati su alcun server. Gli strumenti non richiedono account, email né registrazione e sono completamente gratuiti senza limiti di utilizzo. Questo rende CoolPDF adatto a documenti riservati come contratti, cartelle cliniche e rendiconti finanziari.',
  toolUi: {
    privacyNote:
      'I tuoi file vengono elaborati localmente nel tuo browser — nulla viene caricato.',
    dropPdfs: 'Trascina qui i file PDF, oppure fai clic per sfogliare',
    dropImages: 'Trascina qui le immagini JPG o PNG, oppure fai clic per sfogliare',
    moveUp: 'Sposta su',
    moveDown: 'Sposta giù',
    remove: 'Rimuovi',
    processing: 'Elaborazione in corso…',
    download: 'Scarica',
    readyTitle: 'Il tuo file è pronto',
    errors: {
      onlyPdf: 'Sono supportati solo file PDF.',
      onlyImages: 'Sono supportate solo immagini JPG e PNG.',
      tooManyFiles: 'Puoi aggiungere al massimo {max} file.',
      fileTooLarge: '“{name}” è troppo grande — il limite è di {max} MB per file.',
      minFiles: 'Aggiungi almeno {min} file.',
      encrypted: 'Questo PDF è protetto da password e non può essere elaborato qui.',
      corrupted: 'Impossibile leggere questo file come PDF valido.',
      invalidRange: 'Intervallo di pagine non valido. Usa numeri e trattini, ad esempio 1-3, 5.',
      rangeOutOfBounds: 'L’intervallo di pagine supera il numero di pagine del documento.',
      generic: 'Si è verificato un errore durante l’elaborazione del file. Riprova.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'Unire PDF online gratis — Nessun caricamento, nessuna registrazione | CoolPDF',
      metaDescription:
        'Combina fino a 20 PDF in un unico file direttamente nel tuo browser. Riordina, unisci e scarica — i file non lasciano mai il tuo dispositivo. Gratis, senza registrazione.',
      heading: 'Unisci PDF',
      intro:
        'Combina più documenti PDF in un unico file, esattamente nell’ordine che preferisci. L’unione avviene interamente sul tuo dispositivo.',
      button: 'Unisci PDF',
      stepsHeading: 'Come unire file PDF',
      steps: [
        'Aggiungi due o più file PDF trascinandoli nell’area di caricamento, oppure fai clic per sfogliare il tuo dispositivo (2–20 file).',
        'Disponi i file nell’ordine desiderato con le frecce su e giù — sarà l’ordine delle pagine del documento finale.',
        'Fai clic su “Unisci PDF”. I documenti vengono combinati in locale, di solito in pochi secondi.',
        'Scarica il tuo PDF unito. I file originali restano intatti sul tuo dispositivo.',
      ],
      privacyHeading: 'Unisci contratti ed estratti conto senza caricarli',
      privacyText:
        'I PDF che vale la pena unire sono spesso quelli che meno vorresti condividere: contratti firmati, estratti conto, referti medici, documenti di candidatura. Con un normale strumento online, ognuno di questi file viene caricato su un server remoto prima ancora che l’unione inizi. CoolPDF funziona al contrario. Il codice arriva nel tuo browser e i file restano sul tuo dispositivo — nulla viene trasmesso, accodato o archiviato altrove. Questo rende lo strumento sicuro su un portatile di lavoro, su una rete Wi-Fi pubblica o con documenti coperti da NDA. Significa anche niente quote artificiali: è il tuo computer a lavorare, quindi non c’è alcuna bolletta del server da girare a te. Chiudi la scheda e ogni traccia dei tuoi documenti sparisce.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'C’è un limite al numero di PDF che posso unire?',
          answer:
            'Puoi unire da 2 a 20 file PDF alla volta. Ogni file può arrivare fino a 100 MB (50 MB su dispositivi mobili), molto più di quanto serva ai documenti di tutti i giorni.',
        },
        {
          question: 'L’unione cambia la qualità dei miei PDF?',
          answer:
            'No. Le pagine vengono copiate nel nuovo documento esattamente come sono — niente ricompressione, niente rendering, niente filigrane. Il testo resta selezionabile e i link continuano a funzionare.',
        },
        {
          question: 'I miei file vengono caricati su un server?',
          answer:
            'Mai. L’unione avviene interamente nel tuo browser. Puoi persino disconnetterti da internet dopo aver caricato la pagina — lo strumento continua a funzionare.',
        },
      ],
    },
    'split-pdf': {
      metaTitle: 'Dividere PDF online gratis — Estrai pagine in locale | CoolPDF',
      metaDescription:
        'Estrai pagine, dividi per intervalli o taglia un PDF ogni N pagine — tutto nel tuo browser. I file non lasciano mai il tuo dispositivo. Gratis, senza registrazione, senza filigrane.',
      heading: 'Dividi PDF',
      intro:
        'Estrai ogni pagina in un file separato, ricava intervalli personalizzati o dividi un documento in blocchi di N pagine. Tutto avviene in locale nel tuo browser.',
      button: 'Dividi PDF',
      modeLabel: 'Modalità di divisione',
      modeAll: 'Estrai tutte le pagine',
      modeRanges: 'Dividi per intervalli',
      modeEveryN: 'Dividi ogni N pagine',
      rangesLabel: 'Intervalli di pagine',
      rangesPlaceholder: 'es. 1-3, 5-8',
      everyNLabel: 'Pagine per file',
      stepsHeading: 'Come dividere un PDF',
      steps: [
        'Aggiungi il PDF da dividere trascinandolo nell’area di caricamento, oppure fai clic per sfogliare.',
        'Scegli una modalità: ogni pagina separatamente, intervalli personalizzati come 1-3, 5-8, oppure un blocco ogni N pagine.',
        'Fai clic su “Dividi PDF”. Ogni parte viene creata in locale sul tuo dispositivo in pochi secondi.',
        'Scarica il risultato — un singolo PDF se è stata prodotta una sola parte, altrimenti un archivio ZIP con tutte le parti.',
      ],
      privacyHeading: 'Dividi documenti riservati senza deviazioni nel cloud',
      privacyText:
        'Dividere un PDF serve spesso a condividerne solo una parte — una singola fattura da un’esportazione contabile, un capitolo di una scansione, le pagine rilevanti di un contratto. Ironia della sorte, la maggior parte degli strumenti online ti costringe prima a condividere l’intero documento con i loro server. CoolPDF elimina del tutto questa deviazione: la divisione avviene nella scheda del tuo browser, sulla tua macchina. Il documento viene letto, suddiviso e salvato in locale, e nessun byte attraversa la rete. È abbastanza sicuro per dichiarazioni fiscali, pratiche HR e documenti legali — ed è veloce, perché non c’è coda di caricamento né una copia elaborata da scaricare da chissà dove. Quando chiudi la scheda, non resta nulla.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Come estraggo solo alcune pagine?',
          answer:
            'Scegli “Dividi per intervalli” e inserisci le pagine che ti servono, ad esempio 1-3, 5-8. Ogni intervallo diventa un PDF a sé e tutte le parti vengono scaricate insieme in un file ZIP.',
        },
        {
          question: 'La divisione riduce la qualità del mio PDF?',
          answer:
            'No. Le pagine vengono copiate senza modifiche nei nuovi documenti — testo, immagini, link e moduli restano esattamente com’erano. Nulla viene ricompresso o filigranato.',
        },
        {
          question: 'Ci sono limiti di pagine o di dimensione del file?',
          answer:
            'Sono supportati file fino a 100 MB (50 MB su mobile), senza limiti al numero di pagine. Poiché è il tuo dispositivo a fare il lavoro, i documenti molto grandi richiedono semplicemente un po’ più di tempo.',
        },
      ],
    },
    'rotate-pdf': {
      metaTitle: 'Ruotare PDF online gratis — Pagine ruotate in locale | CoolPDF',
      metaDescription:
        'Ruota tutte le pagine o solo quelle che scegli di 90°, 180° o 270° — direttamente nel tuo browser. Nessun caricamento, nessuna registrazione, nessuna filigrana.',
      heading: 'Ruota PDF',
      intro:
        'Correggi in pochi secondi scansioni storte e pagine capovolte. Ruota l’intero documento o solo le pagine selezionate di 90°, 180° o 270°.',
      button: 'Ruota PDF',
      angleLabel: 'Angolo di rotazione (in senso orario)',
      scopeLabel: 'Applica a',
      scopeAll: 'Tutte le pagine',
      scopeSelected: 'Solo le pagine selezionate',
      pagesLabel: 'Pagine',
      pagesPlaceholder: 'es. 1, 3, 5-8',
      stepsHeading: 'Come ruotare le pagine di un PDF',
      steps: [
        'Aggiungi il PDF da correggere trascinandolo nell’area di caricamento, oppure fai clic per sfogliare.',
        'Scegli un angolo di rotazione — 90°, 180° o 270° in senso orario.',
        'Decidi se ruotare tutte le pagine o solo alcune (ad esempio 1, 3, 5-8), poi fai clic su “Ruota PDF”.',
        'Scarica il PDF ruotato. Le pagine non selezionate restano esattamente com’erano.',
      ],
      privacyHeading: 'Raddrizza le scansioni senza inviarle da nessuna parte',
      privacyText:
        'Le pagine da ruotare arrivano di solito da uno scanner o dalla fotocamera del telefono: moduli firmati, documenti d’identità, ricevute, appunti scritti a mano. Sono esattamente i file che non dovrebbero viaggiare verso il server di uno sconosciuto solo per essere raddrizzati. Con CoolPDF la rotazione avviene dove il file si trova già — nel tuo browser. L’orientamento delle pagine viene corretto in locale e il risultato viene salvato direttamente sul tuo dispositivo: nessun caricamento, nessuna copia su un disco remoto, nessuna politica di conservazione da dover credere. La modifica è inoltre permanente e conforme agli standard: il documento si apre poi correttamente in qualsiasi lettore PDF, su qualsiasi dispositivo, per chiunque lo riceva.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Posso ruotare solo alcune pagine?',
          answer:
            'Sì. Scegli “Solo le pagine selezionate” e inserisci le pagine da ruotare, ad esempio 1, 3, 5-8. Tutte le altre pagine mantengono l’orientamento originale.',
        },
        {
          question: 'La rotazione è permanente?',
          answer:
            'Sì. La rotazione viene scritta nel PDF stesso, quindi le pagine vengono visualizzate correttamente in ogni lettore PDF — non solo in quello che usi per vedere il file.',
        },
        {
          question: 'La rotazione modifica il contenuto delle mie pagine?',
          answer:
            'No. Cambia solo l’orientamento della pagina; il contenuto resta intatto. Il testo resta nitido, le immagini mantengono la loro risoluzione e nulla viene ricompresso.',
        },
      ],
    },
    'jpg-to-pdf': {
      metaTitle: 'Convertire JPG in PDF — Gratis, in locale, senza caricamenti | CoolPDF',
      metaDescription:
        'Trasforma immagini JPG e PNG in un PDF A4 pulito nel tuo browser. Adatta, riempi o dimensione originale — i file non lasciano mai il tuo dispositivo. Gratis, senza registrazione.',
      heading: 'JPG in PDF',
      intro:
        'Converti fino a 20 immagini JPG o PNG in un unico PDF A4 — perfetto per scansioni, ricevute e documenti fotografici. La conversione avviene interamente sul tuo dispositivo.',
      button: 'Converti in PDF',
      orientationLabel: 'Orientamento della pagina',
      orientationAuto: 'Auto (segue la prima immagine)',
      orientationPortrait: 'Verticale',
      orientationLandscape: 'Orizzontale',
      fitLabel: 'Posizionamento dell’immagine',
      fitFit: 'Adatta — intera immagine visibile, con margini',
      fitFill: 'Riempi — copre la pagina, ritaglia i bordi',
      fitOriginal: 'Originale — dimensione naturale, centrata',
      stepsHeading: 'Come convertire immagini in PDF',
      steps: [
        'Aggiungi fino a 20 immagini JPG o PNG trascinandole nell’area di caricamento, oppure fai clic per sfogliare.',
        'Scegli l’orientamento della pagina: auto segue le proporzioni della prima immagine, oppure forza verticale o orizzontale.',
        'Decidi come posizionare le immagini — adattate con margini, a riempimento della pagina o in dimensione originale — poi fai clic su “Converti in PDF”.',
        'Scarica il tuo PDF, con un’immagine per pagina in formato A4.',
      ],
      privacyHeading: 'Trasforma le foto in PDF senza caricare un solo pixel',
      privacyText:
        'Foto e scansioni sono spesso personali: copie del passaporto, ricevute per le tasse, foto di lavagne, lettere scritte a mano. Un convertitore tipico carica ogni immagine su un server, la converte lì e ti restituisce un link di download — le tue immagini ora vivono su un’infrastruttura che non controlli. CoolPDF fa lo stesso lavoro interamente sul tuo dispositivo. Le immagini vengono lette dal tuo browser, impaginate su pagine A4 e salvate come PDF sul tuo disco. Nulla viene caricato, quindi nulla può andare perso, essere registrato o finire in un dataset di addestramento. Funziona anche offline: carica la pagina, spegni il Wi-Fi e converti.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Quali formati di immagine sono supportati?',
          answer:
            'Immagini JPG e PNG, fino a 20 alla volta. Ogni immagine diventa una pagina A4, nell’ordine in cui hai aggiunto i file.',
        },
        {
          question: 'Qual è la differenza tra Adatta, Riempi e Originale?',
          answer:
            'Adatta ridimensiona l’immagine in modo che sia completamente visibile, con margini. Riempi la ridimensiona per coprire l’intera pagina, ritagliando i bordi. Originale mantiene la dimensione naturale dell’immagine, centrata sulla pagina.',
        },
        {
          question: 'Le mie immagini perdono qualità?',
          answer:
            'No. Le immagini vengono incorporate esattamente come sono — senza ricompressione. Il PDF si limita a racchiudere i dati originali dell’immagine: ciò che vedi nell’immagine è ciò che ottieni nel PDF.',
        },
      ],
    },
  },
};
