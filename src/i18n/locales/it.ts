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
};
