export const it = {
  site: {
    name: 'CoolPDF',
    description: 'Strumenti PDF gratuiti che rispettano la tua privacy',
  },
  nav: {
    home: 'Home',
    tools: 'Strumenti',
    guides: 'Guides',
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
    metaTitle: 'Strumenti PDF gratuiti che rispettano la privacy | CoolPDF',
    metaDescription:
      'Unisci, dividi, comprimi e proteggi i PDF direttamente nel tuo browser. 100% locale: nessun caricamento, nessuna registrazione.',
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
    'remove-pages': {
      name: 'Rimuovi pagine',
      description: 'Elimina le pagine indesiderate da un PDF in pochi clic.',
    },
    'extract-pages': {
      name: 'Estrai pagine',
      description: 'Salva le pagine selezionate di un PDF come nuovo documento.',
    },
    'reorder-pages': {
      name: 'Riordina pagine',
      description: 'Trascina le pagine esattamente nell’ordine desiderato.',
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
      'CoolPDF elabora tutti i file localmente nel tuo browser: non riceviamo né archiviamo mai i tuoi documenti. Leggi la nostra informativa.',
    heading: 'Informativa sulla privacy',
    lastUpdated: 'Ultimo aggiornamento: luglio 2026',
    tldr: {
      title: 'TL;DR',
      items: [
        'I tuoi file vengono elaborati al 100% localmente nel tuo browser. Non li riceviamo, non li archiviamo e non li tocchiamo nemmeno.',
        'Nessun account, nessun indirizzo email, nessuna informazione personale. Mai.',
        'Possiamo utilizzare Cloudflare Web Analytics, uno strumento di statistiche senza cookie e rispettoso della privacy, quando è attivato.',
        'Potremmo mostrare annunci di Google AdSense per mantenere CoolPDF gratuito. Se gli annunci sono attivati, Google può utilizzare cookie per annunci personalizzati, e puoi disattivarli.',
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
          'Quando è attivato, utilizziamo Cloudflare Web Analytics per comprendere il traffico aggregato, ad esempio quali pagine sono popolari e da dove provengono approssimativamente i visitatori. Non utilizza cookie, non traccia i singoli utenti e non raccoglie dati personali. Non può vedere i file che elabori, perché non possiamo vederli nemmeno noi.',
        ],
      },
      {
        title: '4. Pubblicità — Google AdSense',
        paragraphs: [
          'CoolPDF potrebbe mostrare annunci erogati tramite Google AdSense per mantenere il servizio gratuito. Se la pubblicità è attivata, Google e i suoi partner possono utilizzare cookie per mostrarti annunci personalizzati in base alla tua cronologia di navigazione. Puoi disattivare la pubblicità personalizzata in qualsiasi momento tramite Google Ads Settings (adssettings.google.com). Prima che venga attivata qualsiasi pubblicità personalizzata, ai visitatori dello Spazio economico europeo e del Regno Unito verrà presentata una richiesta di consenso. Per i dettagli, consulta le Norme sulla privacy di Google all’indirizzo policies.google.com/privacy.',
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
          'Sì. Ogni strumento è completamente gratuito, senza limiti di utilizzo, senza filigrane e senza livelli premium. Se attivati, sono gli annunci discreti a mantenere CoolPDF gratuito per tutti.',
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
          'Potremmo mostrare annunci erogati da Google AdSense. La pubblicità è la nostra fonte di entrate prevista ed è ciò che permette a ogni strumento di restare gratuito e senza limiti di utilizzo.',
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
    trustChips: ['Nessun caricamento', 'Funziona in locale', 'Nessuna registrazione'],
    dropPdfs: 'Trascina qui i file PDF, oppure fai clic per sfogliare',
    dropImages: 'Trascina qui le immagini JPG o PNG, oppure fai clic per sfogliare',
    moveUp: 'Sposta su',
    moveDown: 'Sposta giù',
    remove: 'Rimuovi',
    processing: 'Elaborazione in corso…',
    download: 'Scarica',
    readyTitle: 'Il tuo file è pronto',
    engineLoading: 'Caricamento del motore PDF in corso…',
    engineLoadingProgress: 'Caricamento del motore PDF in corso… {loaded} di {total} MB',
    engineFirstRun: 'Al primo utilizzo vengono scaricati circa {size} MB, che poi restano nella cache del tuo dispositivo.',
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
      noPages: 'Nel documento deve rimanere almeno una pagina.',
      wrongPassword: 'La password non è corretta. Riprova.',
      notEncrypted: 'Questo PDF non è protetto da password, quindi non c’è nulla da sbloccare.',
      noText: 'Questo PDF sembra composto da immagini scansionate senza testo estraibile.',
      tooManyPages: 'Questo documento ha troppe pagine per questo strumento — il limite è di {max} pagine.',
      filesSkipped: '{count} file non supportati sono stati ignorati.',
      totalTooLarge: 'I file selezionati sono troppo grandi nel complesso — il limite totale è di {max} MB.',
      generic: 'Si è verificato un errore durante l’elaborazione del file. Riprova.',
      engineDownload:
        'Il motore PDF non ha potuto essere scaricato (errore di rete). Controlla la connessione e riprova — nessun file è stato inviato.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'Unire PDF online gratis — Nessun caricamento | CoolPDF',
      metaDescription:
        'Combina fino a 20 PDF in un unico file direttamente nel tuo browser. Riordina, unisci e scarica — i file non lasciano mai il tuo dispositivo.',
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
      metaTitle: 'Dividere PDF online gratis — Estrai pagine | CoolPDF',
      metaDescription:
        'Estrai pagine, dividi per intervalli o taglia un PDF ogni N pagine — tutto nel tuo browser. Gratis, senza registrazione, senza filigrane.',
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
      metaTitle: 'Ruotare PDF online gratis — in locale | CoolPDF',
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
      metaTitle: 'Convertire JPG in PDF — Gratis e in locale | CoolPDF',
      metaDescription:
        'Trasforma immagini JPG e PNG in un PDF A4 pulito nel tuo browser. Adatta, riempi o dimensione originale — i file restano sul tuo dispositivo.',
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
    'organize-pdf': {
      metaTitle: 'Organizzare pagine PDF online gratis | CoolPDF',
      metaDescription:
        'Riordina le pagine del PDF con il trascinamento, ruota o elimina le pagine e scarica il risultato — tutto nel tuo browser. Gratis.',
      heading: 'Organizza PDF',
      intro:
        'Disponi le pagine con il trascinamento, ruota quelle storte ed elimina quelle che non ti servono. Un’anteprima in tempo reale di ogni pagina rende tutto facile — e ogni cosa avviene sul tuo dispositivo.',
      button: 'Scarica il PDF organizzato',
      loadingPreviews: 'Generazione delle anteprime delle pagine…',
      loadMorePreviews: 'Carica altre anteprime',
      selectAll: 'Seleziona tutto',
      clearSelection: 'Annulla selezione',
      deleteSelected: 'Elimina selezionate',
      rotateSelected: 'Ruota selezionate di 90°',
      reset: 'Reimposta',
      rotatePage: 'Ruota la pagina di 90°',
      deletePage: 'Elimina pagina',
      restorePage: 'Ripristina pagina',
      deletedBadge: 'Eliminata',
      pageLabel: 'Pagina {n}',
      keptSummary: 'Verranno mantenute {kept} pagine su {total}',
      stepsHeading: 'Come organizzare le pagine di un PDF',
      steps: [
        'Aggiungi il PDF da riorganizzare trascinandolo nell’area di caricamento, oppure fai clic per sfogliare.',
        'Trascina le miniature delle pagine nell’ordine che preferisci — il badge numerico mostra sempre il numero di pagina originale.',
        'Ruota o elimina singole pagine con i pulsanti su ogni miniatura, oppure seleziona più pagine e usa la barra degli strumenti. Le pagine eliminate possono essere ripristinate con un clic.',
        'Fai clic su “Scarica il PDF organizzato”. Il documento riordinato viene assemblato in locale e salvato sul tuo dispositivo.',
      ],
      privacyHeading: 'Riorganizza documenti riservati pagina per pagina — in privato',
      privacyText:
        'Riordinare le pagine è spesso l’ultimo passaggio prima che un documento venga inviato: portare la pagina firmata in cima a un contratto, togliere le scansioni vuote da un file fiscale, spostare all’inizio l’unico capitolo richiesto da un cliente. Non sono file che appartengono al server di uno sconosciuto. CoolPDF genera le anteprime delle pagine e ricostruisce il documento interamente nel tuo browser — il file viene letto dal tuo disco e il risultato vi viene salvato di nuovo, senza alcun caricamento in mezzo. Non c’è coda, non c’è una copia temporanea nell’archivio di qualcun altro e non c’è alcuna politica di conservazione da dover credere sulla parola. Questo rende lo strumento sicuro per documenti legali, cartelle cliniche e pratiche HR, anche su una rete Wi-Fi pubblica. Chiudi la scheda e del tuo documento non resta nulla.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Posso annullare l’eliminazione di una pagina?',
          answer:
            'Sì. Il pulsante di eliminazione si limita a contrassegnare la pagina: appare attenuata e può essere ripristinata con un altro clic. Le pagine vengono escluse solo al momento del download, e anche in quel caso il file originale sul tuo dispositivo resta invariato.',
        },
        {
          question: 'La riorganizzazione riduce la qualità del mio PDF?',
          answer:
            'No. Le pagine vengono copiate nel nuovo documento esattamente come sono — niente rendering aggiuntivo, niente ricompressione. Il testo resta selezionabile, i link continuano a funzionare e le rotazioni vengono scritte come metadati standard delle pagine.',
        },
        {
          question: 'Ci sono limiti di dimensione del file o di numero di pagine?',
          answer:
            'Sono supportati file fino a 100 MB (50 MB su mobile), senza limiti al numero di pagine. Per i documenti molto lunghi le anteprime delle pagine vengono generate in blocchi, così lo strumento resta reattivo.',
        },
      ],
    },
    'remove-pages': {
      metaTitle: 'Rimuovere pagine da un PDF gratis online | CoolPDF',
      metaDescription:
        'Elimina le pagine indesiderate da un PDF con un selettore visivo — segna, rimuovi, scarica. 100% nel tuo browser, nessun caricamento, nessuna registrazione.',
      heading: 'Rimuovere pagine da un PDF',
      intro:
        'Elimina le pagine che non ti servono — scansioni vuote, allegati in eccesso, quella pagina sbagliata. Ogni pagina mostra un’anteprima dal vivo e il documento ripulito viene ricostruito sul tuo dispositivo. Il file originale resta intatto.',
      button: 'Rimuovi pagine e scarica',
      loadingPreviews: 'Generazione delle anteprime delle pagine…',
      loadMorePreviews: 'Carica altre anteprime',
      selectAll: 'Seleziona tutto',
      clearSelection: 'Annulla selezione',
      deleteSelected: 'Elimina selezionate',
      rotateSelected: 'Ruota selezionate di 90°',
      reset: 'Reimposta',
      rotatePage: 'Ruota la pagina di 90°',
      deletePage: 'Elimina pagina',
      restorePage: 'Ripristina pagina',
      deletedBadge: 'Eliminata',
      pageLabel: 'Pagina {n}',
      keptSummary: 'Verranno mantenute {kept} pagine su {total}',
      stepsHeading: 'Come rimuovere pagine da un PDF',
      steps: [
        'Aggiungi il PDF trascinandolo nell’area di caricamento, o fai clic per sfogliare — appare un’anteprima di ogni pagina.',
        'Fai clic sull’icona del cestino di ogni pagina da rimuovere, oppure seleziona più pagine e usa «Elimina selezionate». Una pagina eliminata è solo contrassegnata — fai di nuovo clic per ripristinarla.',
        'Controlla il contatore: mostra quante delle pagine totali verranno mantenute nel nuovo documento.',
        'Fai clic su «Rimuovi pagine e scarica». Il PDF ripulito viene assemblato localmente e salvato come removed.pdf.',
      ],
      privacyHeading: 'Togli le pagine sensibili — senza inviare il file da nessuna parte',
      privacyText:
        'Rimuovere una pagina riguarda spesso ciò che non deve lasciare le tue mani: una pagina di firma, una busta paga, un allegato destinato a un altro destinatario. Con CoolPDF il file non lascia mai il tuo dispositivo — le pagine vengono contrassegnate e il documento è ricostruito interamente nel tuo browser, senza caricamenti né copie temporanee su un server. È sicuro per contratti, cartelle cliniche e file HR, anche su Wi-Fi pubblici.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Posso annullare una pagina rimossa?',
          answer:
            'Sì, prima del download. Le pagine rimosse sono solo contrassegnate — oscurate con un badge — e un altro clic le ripristina. Dopo il download, il file originale sul disco resta invariato.',
        },
        {
          question: 'Rimuovere pagine riduce la qualità?',
          answer:
            'No. Le pagine rimanenti vengono copiate esattamente così come sono nel nuovo documento — senza nuovo rendering e senza ricompressione.',
        },
        {
          question: 'Quali sono i limiti?',
          answer:
            'File fino a 100 MB (50 MB su mobile), senza limite di pagine. I documenti lunghi caricano le anteprime in lotti per restare reattivi.',
        },
      ],
    },
    'extract-pages': {
      metaTitle: 'Estrarre pagine da un PDF gratis online | CoolPDF',
      metaDescription:
        'Salva le pagine selezionate di un PDF come nuovo documento — scegli le pagine visivamente ed estrai nel tuo browser. Nessun caricamento, nessuna registrazione.',
      heading: 'Estrarre pagine da un PDF',
      intro:
        'Estrai esattamente le pagine che ti servono — un capitolo, la pagina della firma, una singola fattura — e salvale come nuovo PDF. Tutto avviene localmente nel tuo browser, il documento non lascia mai il tuo dispositivo.',
      button: 'Estrai le pagine selezionate',
      loadingPreviews: 'Generazione delle anteprime delle pagine…',
      loadMorePreviews: 'Carica altre anteprime',
      selectAll: 'Seleziona tutto',
      clearSelection: 'Annulla selezione',
      deleteSelected: 'Elimina selezionate',
      rotateSelected: 'Ruota selezionate di 90°',
      reset: 'Reimposta',
      rotatePage: 'Ruota la pagina di 90°',
      deletePage: 'Elimina pagina',
      restorePage: 'Ripristina pagina',
      deletedBadge: 'Eliminata',
      pageLabel: 'Pagina {n}',
      keptSummary: '{kept} pagine su {total} selezionate',
      stepsHeading: 'Come estrarre pagine da un PDF',
      steps: [
        'Aggiungi il PDF trascinandolo nell’area di caricamento, o fai clic per sfogliare. Appare un’anteprima dal vivo di ogni pagina.',
        'Fai clic sulle miniature delle pagine da estrarre — le pagine selezionate mostrano un bordo evidenziato e un segno di spunta.',
        'Controlla il contatore per confermare quante pagine sono selezionate.',
        'Fai clic su «Estrai le pagine selezionate». Le pagine scelte vengono salvate localmente come nuovo file, extracted.pdf.',
      ],
      privacyHeading: 'Condividi solo le pagine che intendi — in privato',
      privacyText:
        'L’estrazione è il modo di inviare un capitolo di un report o una pagina di un contratto senza esporre il resto. CoolPDF esegue selezione e ricostruzione interamente nel tuo browser: il file sorgente viene letto dal tuo disco e il nuovo PDF vi viene riscritto, senza caricare nulla nel frattempo. Nessun account, nessuna copia sul server, nessuna traccia dopo la chiusura della scheda.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Posso selezionare pagine da parti diverse del documento?',
          answer:
            'Sì — fai clic su qualsiasi combinazione di pagine, in qualsiasi ordine. Il file estratto mantiene le pagine nel loro ordine originale, e puoi prima trascinare le miniature per riorganizzarle.',
        },
        {
          question: 'L’estrazione riduce la qualità?',
          answer:
            'No. Le pagine vengono copiate a livello di oggetto nel nuovo file — il testo resta selezionabile e le immagini mantengono la risoluzione originale.',
        },
        {
          question: 'Quali sono i limiti?',
          answer:
            'File fino a 100 MB (50 MB su mobile), senza limite di pagine. Le anteprime vengono generate in lotti per documenti molto lunghi.',
        },
      ],
    },
    'reorder-pages': {
      metaTitle: 'Riordinare le pagine di un PDF gratis online | CoolPDF',
      metaDescription:
        'Riordina le pagine di un PDF trascinando le miniature in un nuovo ordine — con anteprime dal vivo. 100% nel tuo browser, nessun caricamento, nessuna registrazione.',
      heading: 'Riordinare le pagine di un PDF',
      intro:
        'Trascina le pagine esattamente nell’ordine che ti serve — ogni pagina mostra un’anteprima dal vivo, così nulla finisce fuori posto. Il documento riordinato viene assemblato sul tuo dispositivo; nulla viene caricato.',
      button: 'Scarica il PDF riordinato',
      loadingPreviews: 'Generazione delle anteprime delle pagine…',
      loadMorePreviews: 'Carica altre anteprime',
      selectAll: 'Seleziona tutto',
      clearSelection: 'Annulla selezione',
      deleteSelected: 'Elimina selezionate',
      rotateSelected: 'Ruota selezionate di 90°',
      reset: 'Reimposta',
      rotatePage: 'Ruota la pagina di 90°',
      deletePage: 'Elimina pagina',
      restorePage: 'Ripristina pagina',
      deletedBadge: 'Eliminata',
      pageLabel: 'Pagina {n}',
      keptSummary: 'Verranno mantenute {kept} pagine su {total}',
      stepsHeading: 'Come riordinare le pagine in un PDF',
      steps: [
        'Aggiungi il PDF trascinandolo nell’area di caricamento, o fai clic per sfogliare — appaiono le miniature di ogni pagina.',
        'Trascina una miniatura nella sua nuova posizione; il badge mostra sempre il numero di pagina originale per tenere traccia degli spostamenti.',
        'Facoltativamente ruota le pagine laterali o contrassegna le pagine da rimuovere con i pulsanti su ogni miniatura.',
        'Fai clic su «Scarica il PDF riordinato». Il nuovo documento viene creato localmente e salvato come reordered.pdf.',
      ],
      privacyHeading: 'Riorganizza documenti riservati sul tuo dispositivo',
      privacyText:
        'Il riordino avviene spesso poco prima che un documento esca — spostare la pagina firmata in cima, riordinare le ricevute scansionate, rimescolare i capitoli. CoolPDF genera le anteprime e ricostruisce il file interamente nel tuo browser: nulla viene caricato, accodato o archiviato su un server. È sicuro per documenti legali, finanziari e medici, anche su Wi-Fi pubblici.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Come faccio a sapere che il nuovo ordine è corretto?',
          answer:
            'Ogni miniatura mostra un’anteprima dal vivo più un badge con il numero di pagina originale, così vedi sempre da dove viene una pagina.',
        },
        {
          question: 'Il riordino riduce la qualità?',
          answer:
            'No. Le pagine vengono copiate invariate nel nuovo documento — nessun nuovo rendering, nessuna ricompressione; le rotazioni sono memorizzate come metadati di pagina standard.',
        },
        {
          question: 'Quali sono i limiti?',
          answer:
            'File fino a 100 MB (50 MB su mobile), senza limite di pagine. I documenti molto lunghi caricano le anteprime in lotti.',
        },
      ],
    },
    'pdf-to-jpg': {
      metaTitle: 'Convertire PDF in JPG — Gratis e in locale | CoolPDF',
      metaDescription:
        'Trasforma le pagine del PDF in immagini JPG o PNG a 72, 150 o 300 DPI — direttamente nel tuo browser. Gratis, senza registrazione.',
      heading: 'PDF in JPG',
      intro:
        'Converti le pagine del PDF in immagini JPG o PNG di alta qualità. Scegli la risoluzione e le pagine che ti servono — la conversione avviene interamente sul tuo dispositivo.',
      button: 'Converti in immagini',
      formatLabel: 'Formato immagine',
      formatJpg: 'JPG — file più piccoli',
      formatPng: 'PNG — senza perdita, file più grandi',
      dpiLabel: 'Risoluzione',
      dpiHint:
        '300 DPI produce immagini molto grandi e può risultare lento e avido di memoria sui documenti lunghi.',
      dpiReduced:
        'Alcune pagine sono state renderizzate a una risoluzione inferiore perché superano il limite di dimensioni del canvas del tuo dispositivo ai DPI scelti.',
      scopeLabel: 'Pagine',
      scopeAll: 'Tutte le pagine',
      scopeCustom: 'Pagine selezionate',
      pagesPlaceholder: 'es. 1-3, 5',
      renderingProgress: 'Generazione della pagina {current} di {total}…',
      stepsHeading: 'Come convertire un PDF in JPG',
      steps: [
        'Aggiungi il PDF da convertire trascinandolo nell’area di caricamento, oppure fai clic per sfogliare.',
        'Scegli il formato immagine — JPG per file più piccoli, PNG per una qualità senza perdita — e la risoluzione: 72 DPI per lo schermo, 150 per i documenti, 300 per la stampa.',
        'Converti tutte le pagine o inserisci un intervallo come 1-3, 5, poi fai clic su “Converti in immagini”.',
        'Scarica il risultato — una singola immagine se hai convertito una sola pagina, altrimenti un archivio ZIP con un’immagine per pagina.',
      ],
      privacyHeading: 'Converti le pagine in immagini senza consegnare il documento',
      privacyText:
        'Convertire un PDF in immagini significa di solito che il documento è destinato a un contesto visivo — una presentazione, un’app di messaggistica, un modulo di caricamento che accetta solo immagini. Fatture, certificati e lettere ufficiali fanno spesso questa strada. Con un tipico convertitore online, l’intero documento viene prima caricato e le immagini tornano da un server di cui non sai nulla. CoolPDF trasforma le pagine direttamente nella scheda del tuo browser, usando la stessa classe di motore PDF che alimenta i lettori desktop. Il file non attraversa mai la rete: viene letto dal tuo disco, convertito in immagini dal tuo dispositivo e salvato di nuovo lì. Non c’è nulla da intercettare, registrare o far trapelare — il che significa anche che lo strumento continua a funzionare in aereo, in fabbrica o in qualsiasi altro posto senza connessione.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Quale valore DPI dovrei scegliere?',
          answer:
            '72 DPI corrisponde alle dimensioni su schermo del PDF e va bene per l’uso sul web. 150 DPI è un buon compromesso per i documenti. 300 DPI è qualità da stampa — nitida, ma le immagini diventano grandi e la generazione richiede più tempo.',
        },
        {
          question: 'Perché ricevo un file ZIP?',
          answer:
            'Ogni pagina del PDF diventa un’immagine a sé. Quando viene convertita più di una pagina, tutte le immagini vengono raccolte in un unico archivio ZIP, così ottieni un solo download ordinato.',
        },
        {
          question: 'La conversione in JPG perde qualità?',
          answer:
            'Il formato JPG usa una compressione leggera (qualità 92%), visivamente indistinguibile dall’originale per documenti e foto. Scegli PNG se ti serve un risultato senza perdita, perfetto al pixel.',
        },
      ],
    },
    'compress-pdf': {
      metaTitle: 'Comprimere PDF online gratis — Nessun caricamento | CoolPDF',
      metaDescription:
        'Riduci le dimensioni del PDF con tre livelli di qualità, da 72 a 300 DPI — direttamente nel tuo browser. Gratis, senza registrazione.',
      heading: 'Comprimi PDF',
      intro:
        'Riduci i PDF più pesanti a una frazione delle loro dimensioni con tre livelli di compressione. Il motore di compressione funziona interamente sul tuo dispositivo.',
      button: 'Comprimi PDF',
      levelLabel: 'Livello di compressione',
      levels: {
        extreme: {
          name: 'Estremo',
          description: 'Dimensioni minime, immagini a 72 DPI — ideale per e-mail e anteprime web.',
        },
        recommended: {
          name: 'Consigliato',
          description: 'Equilibrio tra dimensioni e qualità, immagini a 150 DPI — giusto per la maggior parte dei documenti.',
        },
        light: {
          name: 'Leggero',
          description: 'Massima qualità, immagini a 300 DPI — mantiene le pagine pronte per la stampa.',
        },
      },
      processingPages: 'Compressione della pagina {current} di {total}…',
      stillWorking: 'Ancora al lavoro — i file di grandi dimensioni possono richiedere diversi minuti. Tieni aperta questa scheda.',
      resultSmaller: '{percent}% in meno',
      resultLarger:
        '{percent}% in più — questo PDF era già ben compresso. Prova il livello Leggero per mantenere più qualità.',
      stepsHeading: 'Come comprimere un PDF',
      steps: [
        'Aggiungi il PDF da ridurre trascinandolo nell’area di caricamento, oppure fai clic per sfogliare (fino a 150 MB).',
        'Scegli un livello di compressione: Estremo per le dimensioni minime, Consigliato per un equilibrio o Leggero per la qualità da stampa.',
        'Fai clic su “Comprimi PDF”. Al primo utilizzo il motore di compressione viene scaricato una sola volta; dopo si avvia all’istante.',
        'Scarica il PDF compresso e confronta le dimensioni — il file originale resta intatto sul tuo dispositivo.',
      ],
      privacyHeading: 'Comprimi documenti di grandi dimensioni senza caricarli',
      privacyText:
        'Un PDF da comprimere è di solito un documento che sta per essere inviato da qualche parte — un contratto scansionato per un avvocato, un portfolio per un selezionatore, referti medici per un’assicurazione. Ironia della sorte, la maggior parte dei compressori online ti chiede prima di caricare il file sui propri server, quindi ridurre un documento riservato inizia proprio cedendolo. CoolPDF comprime il documento dove si trova già: nel tuo browser, sul tuo dispositivo. Il motore di compressione — lo stesso Ghostscript di cui le tipografie si fidano da decenni — è compilato in WebAssembly e viene scaricato sul tuo computer una sola volta. Il file viene letto dal tuo disco, ricostruito più piccolo e salvato di nuovo lì, senza caricamenti, code o copie remote in nessun momento. Chiudi la scheda e non resta nulla.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Quale livello di compressione dovrei scegliere?',
          answer:
            '“Consigliato” è giusto per la maggior parte dei documenti — bilancia dimensioni e leggibilità. Scegli “Estremo” quando devi rispettare il limite di un allegato e-mail e ogni kilobyte conta, e “Leggero” quando il file verrà stampato o ingrandito spesso.',
        },
        {
          question: 'Perché il mio PDF è diventato più grande invece che più piccolo?',
          answer:
            'Alcuni PDF sono già fortemente ottimizzati — ad esempio i file salvati da altri compressori. Ricodificare le loro immagini può aggiungere byte invece di toglierli. In quel caso tieni l’originale, oppure prova il livello “Leggero”, che ricomprime in modo meno aggressivo.',
        },
        {
          question: 'Perché la prima compressione richiede più tempo?',
          answer:
            'Al primo utilizzo il motore di compressione (circa 15 MB) viene scaricato sul tuo dispositivo. Poi resta nella cache, quindi le compressioni successive partono all’istante — e funzionano anche offline.',
        },
      ],
    },
    'protect-pdf': {
      metaTitle: 'Proteggere PDF con password gratis — AES-256 | CoolPDF',
      metaDescription:
        'Crittografa un PDF con AES-256 e controlla i permessi di stampa, copia e modifica — in locale nel tuo browser. Nessun caricamento, gratis, senza registrazione.',
      heading: 'Proteggi PDF',
      intro:
        'Aggiungi la crittografia con password AES-256 al tuo PDF e decidi esattamente cosa possono fare i destinatari. Tutto avviene sul tuo dispositivo.',
      button: 'Proteggi PDF',
      passwordLabel: 'Password (almeno 6 caratteri)',
      confirmLabel: 'Conferma password',
      passwordTooShort: 'La password deve contenere almeno 6 caratteri.',
      passwordMismatch: 'Le password non corrispondono.',
      permissionsHeading: 'Permessi per i destinatari',
      printingLabel: 'Stampa',
      printFull: 'Consentita',
      printLow: 'Solo in bassa qualità',
      printNone: 'Non consentita',
      allowCopying: 'Consenti la copia di testo e immagini',
      allowModifying: 'Consenti la modifica del documento',
      allowAnnotating: 'Consenti commenti e compilazione di moduli',
      allowAssembling: 'Consenti l’inserimento, la rotazione e l’eliminazione di pagine',
      allowAccessibility: 'Consenti l’estrazione del testo per gli screen reader',
      stepsHeading: 'Come proteggere un PDF',
      steps: [
        'Aggiungi il PDF da proteggere trascinandolo nell’area di caricamento, oppure fai clic per sfogliare.',
        'Scegli una password di almeno 6 caratteri e inseriscila due volte per confermarla.',
        'Imposta i permessi che avranno i destinatari dopo l’apertura del file — stampa, copia, modifica e altro.',
        'Fai clic su “Proteggi PDF” e scarica il file crittografato. Conserva la password in un posto sicuro — non c’è modo di recuperarla.',
      ],
      privacyHeading: 'Crittografa i documenti senza rivelarli — né loro né la password',
      privacyText:
        'Proteggere un PDF con password è di solito l’ultimo passaggio prima di inviare qualcosa di riservato: una busta paga a un dipendente, un estratto conto a un commercialista, un certificato medico a un’assicurazione. Usare uno strumento basato su server per quel passaggio finale vanifica lo scopo — l’originale non protetto viaggia attraverso internet e consegni la password scelta a un’infrastruttura che non controlli. CoolPDF esegue la crittografia interamente sul tuo dispositivo. Il file viene letto in locale, crittografato con AES-256 nella scheda del tuo browser e salvato di nuovo direttamente sul tuo disco. La password che digiti non attraversa mai la rete — non esiste un server che possa riceverla. Questo rende lo strumento sicuro per i documenti riservati, anche su un portatile di lavoro o su una rete Wi-Fi pubblica. Quando chiudi la scheda, il file e la password spariscono entrambi.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Quanto è forte la crittografia?',
          answer:
            'CoolPDF usa AES-256, la crittografia più robusta definita dallo standard PDF — lo stesso livello usato da governi e banche. Senza la password, il contenuto non può essere letto.',
        },
        {
          question: 'Cosa succede se dimentico la password?',
          answer:
            'Non esiste un’opzione di recupero — è proprio il senso della crittografia forte. CoolPDF non vede né conserva mai la tua password, quindi tienila in un posto sicuro, ad esempio un gestore di password.',
        },
        {
          question: 'I permessi vengono rispettati da tutti i lettori PDF?',
          answer:
            'I lettori conformi — inclusi Adobe Acrobat, Chrome e macOS Preview — rispettano le restrizioni su stampa, copia e modifica. Sono un meccanismo di policy, non un DRM, quindi considerali una richiesta forte, non una garanzia.',
        },
      ],
    },
    'unlock-pdf': {
      metaTitle: 'Sbloccare PDF gratis — Rimuovi la password | CoolPDF',
      metaDescription:
        'Rimuovi la protezione con password dai PDF di tua proprietà, direttamente nel tuo browser. Gratis, senza registrazione.',
      heading: 'Sblocca PDF',
      intro:
        'Rimuovi la password da un PDF di tua proprietà, così si apre senza. La decrittografia avviene in locale — né il file né la password lasciano il tuo dispositivo.',
      legalNote: 'Sblocca solo PDF di tua proprietà o che hai il permesso di modificare.',
      passwordLabel: 'Password attuale (se necessaria)',
      button: 'Sblocca PDF',
      stepsHeading: 'Come sbloccare un PDF',
      steps: [
        'Aggiungi il PDF protetto da password trascinandolo nell’area di caricamento, oppure fai clic per sfogliare.',
        'Inserisci la password del documento, se necessario.',
        'Fai clic su “Sblocca PDF” — la protezione viene rimossa in locale in pochi secondi.',
        'Scarica il PDF sbloccato. D’ora in poi si apre in qualsiasi lettore senza password.',
      ],
      privacyHeading: 'Rimuovi le password senza consegnare il file',
      privacyText:
        'Sbloccare un PDF è di solito una questione di comodità: un vecchio estratto conto archiviato con una password che sei stanco di digitare, un contratto scansionato che devi unire o annotare, un documento che vuoi proteggere di nuovo più avanti con una password migliore. Con un tipico strumento online, rimuovere quella protezione inizia caricando il file ancora protetto — e la password — sul server di uno sconosciuto. CoolPDF rimuove la protezione dove il file si trova già. La decrittografia avviene interamente nella scheda del tuo browser: il documento viene letto dal tuo disco, sbloccato con la password che digiti in locale e salvato di nuovo senza che un solo byte attraversi la rete. Non c’è alcun caricamento da intercettare, nessun registro della tua password e nessuna copia lasciata in giro. Chiudendo la scheda si cancella ogni traccia di entrambi.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Ho dimenticato la password. CoolPDF può violarla?',
          answer:
            'No. CoolPDF rimuove la protezione solo quando conosci la password attuale — non è uno strumento per forzare le password, e la crittografia AES-256 non può essere ragionevolmente violata andando a tentativi.',
        },
        {
          question: 'È legale sbloccare un PDF?',
          answer:
            'Sì — per i documenti di tua proprietà o che hai il permesso di modificare, come i tuoi estratti conto archiviati. Rimuovere la protezione da file su cui non hai diritti può violare la legge o i contratti, ed è per questo che questa pagina mostra un promemoria.',
        },
        {
          question: 'Lo sblocco modifica il documento?',
          answer:
            'No. Viene rimosso solo lo strato di crittografia — ogni pagina, immagine e annotazione resta esattamente com’era nell’originale.',
        },
      ],
    },
    'watermark-pdf': {
      metaTitle: 'Aggiungi filigrana al PDF — testo o immagine | CoolPDF',
      metaDescription:
        'Apponi una filigrana di testo o immagine su ogni pagina del tuo PDF — affiancata o centrata, opacità regolabile — direttamente nel browser. Gratis.',
      heading: 'Filigrana PDF',
      intro:
        'Apponi una filigrana di testo o immagine su ogni pagina del tuo PDF — affiancata in diagonale o centrata, con dimensione, colore e opacità a tua scelta. Tutto avviene sul tuo dispositivo.',
      button: 'Aggiungi filigrana',
      typeLabel: 'Tipo di filigrana',
      typeText: 'Testo',
      typeImage: 'Immagine (PNG o JPG)',
      textLabel: 'Testo della filigrana',
      textPlaceholder: 'es. RISERVATO',
      fontSizeLabel: 'Dimensione carattere',
      colorLabel: 'Colore del testo',
      opacityLabel: 'Opacità',
      layoutLabel: 'Posizionamento',
      layoutTile: 'Affiancata — ripetuta in diagonale su ogni pagina',
      layoutCenter: 'Centrata — un solo timbro per pagina',
      scaleLabel: 'Dimensione immagine (relativa alla larghezza della pagina)',
      stepsHeading: 'Come aggiungere una filigrana a un PDF',
      steps: [
        'Aggiungi il PDF da filigranare trascinandolo sull’area di upload, oppure fai clic per sfogliare i file.',
        'Scegli una filigrana di testo o immagine. Per il testo, digita la dicitura e scegli dimensione e colore; per un’immagine, carica un PNG o un JPG e impostane la dimensione.',
        'Regola l’opacità e scegli il posizionamento — affiancata in diagonale su ogni pagina o un singolo timbro centrato — poi fai clic su "Aggiungi filigrana".',
        'Scarica il PDF con filigrana. Il file originale resta inalterato sul tuo dispositivo.',
      ],
      privacyHeading: 'Filigrana su documenti sensibili senza caricarli',
      privacyText:
        'Apporre una filigrana a un PDF è di solito l’ultimo passo prima di condividere qualcosa di sensibile: una bozza di contratto contrassegnata come riservata, l’anteprima di un progetto con il nome del tuo studio, la copia di un documento d’identità utilizzabile per un solo scopo. Con un classico strumento online, l’originale non protetto viene caricato su un server prima ancora che la filigrana lo sfiori. CoolPDF fa il contrario. Le filigrane di testo vengono disegnate con i caratteri del tuo dispositivo — ecco perché cinese, arabo o emoji funzionano come l’italiano —, convertite in immagine e timbrate sulle pagine direttamente nella scheda del browser. Anche le immagini non viaggiano. Nulla viene caricato, accodato o archiviato altrove: lo strumento è sicuro per progetti inediti, materiale sotto NDA e documenti personali. Chiudi la scheda e ogni traccia scompare.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Posso usare testo cinese, arabo o emoji nella filigrana?',
          answer:
            'Sì. Le filigrane di testo sono disegnate con i caratteri del tuo dispositivo e incorporate come immagine: funzionano tutte le lingue e tutti i simboli, non solo l’alfabeto latino a cui sono limitati i font PDF classici.',
        },
        {
          question: 'Che differenza c’è tra affiancata e centrata?',
          answer:
            'La modalità affiancata ripete la filigrana in diagonale su tutta la pagina, rendendola difficile da ritagliare — ideale per i timbri di riservatezza. La modalità centrata posiziona una singola copia diagonale al centro di ogni pagina, con un effetto più simile a un logo.',
        },
        {
          question: 'Quali formati di immagine posso usare come filigrana?',
          answer:
            'PNG e JPG. Il PNG è la scelta migliore per i loghi perché mantiene la trasparenza, così il contenuto della pagina resta visibile attorno al marchio. Usa il cursore per ridimensionare l’immagine rispetto alla larghezza della pagina.',
        },
      ],
    },
    'page-numbers': {
      metaTitle: 'Aggiungi numeri di pagina al PDF online gratis | CoolPDF',
      metaDescription:
        'Inserisci numeri di pagina nel tuo PDF — sei posizioni, formati "1 di N", pagina iniziale a scelta — in locale nel tuo browser. Gratis.',
      heading: 'Numeri di pagina',
      intro:
        'Aggiungi i numeri di pagina al tuo PDF esattamente dove vuoi: sei posizioni, due formati e pieno controllo su dove inizia la numerazione. L’elaborazione avviene interamente sul tuo dispositivo.',
      button: 'Aggiungi numeri di pagina',
      positionLabel: 'Posizione',
      posTopLeft: 'In alto a sinistra',
      posTopCenter: 'In alto al centro',
      posTopRight: 'In alto a destra',
      posBottomLeft: 'In basso a sinistra',
      posBottomCenter: 'In basso al centro',
      posBottomRight: 'In basso a destra',
      formatLabel: 'Formato',
      formatN: 'Solo numero (1, 2, 3…)',
      formatTotal: 'Numero e totale (1 di N)',
      totalConnector: 'di',
      startNumberLabel: 'Primo numero',
      startPageLabel: 'Inizia la numerazione alla pagina',
      fontSizeLabel: 'Dimensione carattere',
      stepsHeading: 'Come aggiungere i numeri di pagina a un PDF',
      steps: [
        'Aggiungi il PDF da numerare trascinandolo sull’area di upload, oppure fai clic per sfogliare i file.',
        'Scegli una delle sei posizioni — un angolo, oppure centrato in alto o in basso — e il formato: solo il numero oppure numero e totale.',
        'Se serve, modifica il primo numero, la pagina da cui parte la numerazione e la dimensione del carattere, poi fai clic su "Aggiungi numeri di pagina".',
        'Scarica il PDF numerato. Il file originale resta inalterato sul tuo dispositivo.',
      ],
      privacyHeading: 'Numera i documenti finali senza caricarli',
      privacyText:
        'Aggiungere i numeri di pagina è spesso il tocco finale prima che un documento esca: una tesi per la stampa, un contratto da firmare, un report per il consiglio. A quel punto il file è di solito definitivo e riservato — eppure la maggior parte degli strumenti online chiede prima di caricarlo. CoolPDF inserisce i numeri dove il file si trova già: sul tuo dispositivo. Il PDF viene letto dal browser, marcato con i numeri nella posizione e nel formato scelti e salvato direttamente sul tuo disco. Nulla attraversa la rete: niente può essere intercettato, registrato o lasciato su un server. Lo strumento è sicuro per atti giudiziari, cartelle cliniche e report finanziari — ed è veloce, perché non c’è coda di upload né una copia elaborata da scaricare altrove. Chiudendo la scheda, ogni traccia del documento scompare.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Posso saltare la copertina?',
          answer:
            'Sì. Imposta "Inizia la numerazione alla pagina" su 2 (o una pagina successiva) e le pagine iniziali restano pulite. Combinalo con "Primo numero" se la numerazione visibile deve partire da 1 — oppure prosegui una sequenza esistente.',
        },
        {
          question: 'Cosa mostra il formato "1 di N"?',
          answer:
            'Mostra il numero corrente e il numero totale di pagine del documento, per esempio "3 of 12". Il totale conta sempre tutte le pagine del file, comprese eventuali pagine non numerate all’inizio.',
        },
        {
          question: 'I numeri si sovrappongono al contenuto?',
          answer:
            'I numeri sono posizionati nel margine, a 24 punti dal bordo. La maggior parte dei documenti lascia libera quell’area, ma se il tuo contenuto arriva fino al bordo, scegli una posizione sul lato opposto o una dimensione del carattere più piccola.',
        },
      ],
    },
    'pdf-to-markdown': {
      metaTitle: 'Convertitore PDF in Markdown online gratis | CoolPDF',
      metaDescription:
        'Trasforma il testo del PDF in Markdown pulito — titoli, paragrafi ed elenchi rilevati automaticamente — in locale nel tuo browser. Gratis.',
      heading: 'PDF in Markdown',
      intro:
        'Trasforma il testo del tuo PDF in Markdown pulito e strutturato: titoli, paragrafi ed elenchi rilevati automaticamente, intestazioni e piè di pagina rimossi. La conversione avviene interamente nel tuo browser.',
      button: 'Converti in Markdown',
      scopeLabel: 'Pagine',
      scopeAll: 'Tutte le pagine',
      scopeCustom: 'Solo pagine selezionate',
      pagesLabel: 'Pagine',
      pagesPlaceholder: 'es. 1-3, 5',
      stepsHeading: 'Come convertire un PDF in Markdown',
      steps: [
        'Aggiungi il PDF da convertire trascinandolo sull’area di upload, oppure fai clic per sfogliare i file.',
        'Scegli se convertire tutte le pagine o solo un intervallo (per esempio 1-3, 5).',
        'Fai clic su "Converti in Markdown" — titoli, paragrafi ed elenchi vengono rilevati automaticamente e le intestazioni e i piè di pagina ricorrenti vengono rimossi.',
        'Scarica il file Markdown e aprilo in qualsiasi editor, app di note o generatore di siti statici.',
      ],
      privacyHeading: 'Converti documenti in Markdown senza caricarli',
      privacyText:
        'Convertire un PDF in Markdown significa di solito passarlo a uno strumento di IA o a un convertitore cloud — caricando l’intero documento. È un problema quando il file è una bozza di articolo, un report interno o un contratto da cui devi citare. CoolPDF esegue l’estrazione in locale: un motore PDF nel tuo browser legge il livello di testo, rileva i titoli dalle dimensioni dei caratteri, ricostruisce paragrafi ed elenchi e ti consegna un file Markdown pulito. Il documento non lascia mai il tuo dispositivo: non c’è nulla da intercettare e nulla archiviato su server altrui. Funziona anche offline — carica la pagina, disconnettiti e converti. Quando chiudi la scheda, sia il PDF sia il Markdown scompaiono.',
      faqHeading: 'Domande frequenti',
      faq: [
        {
          question: 'Vengono estratte anche le immagini?',
          answer:
            'No. Il convertitore estrae solo il testo — titoli, paragrafi ed elenchi. Le immagini incorporate vengono saltate; se ti servono, esporta separatamente le pagine ricche di figure (lo strumento PDF in JPG può aiutare).',
        },
        {
          question: 'Come vengono rilevati i titoli?',
          answer:
            'Dalla dimensione del carattere. La dimensione più frequente è trattata come corpo del testo; le righe nettamente più grandi diventano titoli — #, ## o ### a seconda di quanto sono più grandi. Il rilevamento è euristico, quindi vale sempre la pena dare una rapida occhiata al risultato.',
        },
        {
          question: 'Perché ricevo un messaggio su un PDF scansionato?',
          answer:
            'Le scansioni sono foto di pagine senza un vero livello di testo: non c’è nulla da estrarre. Passa prima il file in un software OCR — quando la scansione avrà un livello di testo, questo strumento potrà convertirla.',
        },
      ],
    },
  },
};
