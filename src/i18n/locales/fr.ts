export const fr = {
  site: {
    name: 'CoolPDF',
    description: 'Des outils PDF gratuits qui respectent votre vie privée',
  },
  nav: {
    home: 'Accueil',
    tools: 'Outils',
    guides: 'Guides',
    about: 'À propos',
    faq: 'FAQ',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  languageSwitcher: {
    label: 'Langue',
  },
  footer: {
    pillars:
      'Traitement 100 % côté client · Vos fichiers ne quittent jamais votre appareil · Aucune inscription requise',
    pagesHeading: 'Pages',
    about: 'À propos',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    faq: 'FAQ',
    github: 'GitHub',
    copyright: '© {year} CoolPDF. Tous droits réservés.',
  },
  common: {
    comingSoon: 'Bientôt disponible',
  },
  home: {
    metaTitle: 'Outils PDF gratuits respectant votre vie privée | CoolPDF',
    metaDescription:
      'Fusionnez, divisez, compressez et protégez vos PDF directement dans votre navigateur. 100 % local — aucun téléversement, aucune inscription.',
    hero: {
      title: 'Des outils PDF gratuits qui respectent votre vie privée',
      subtitle:
        'Fusionnez, divisez, compressez et protégez vos PDF directement dans votre navigateur. Aucun téléversement. Aucune inscription. Aucun serveur. Vos fichiers sont traités localement sur votre appareil — ils ne touchent jamais internet.',
      cta: 'Découvrir les outils',
    },
    pillars: {
      heading: 'Des outils PDF sans compromis sur la vie privée',
      items: [
        {
          title: 'Aucun téléversement',
          description:
            'Vos fichiers ne quittent jamais votre appareil. Chaque outil fonctionne localement dans votre navigateur, donc rien n’est jamais envoyé à un serveur.',
        },
        {
          title: 'Aucune inscription',
          description:
            'Pas de compte, pas d’adresse e-mail, pas d’attente. Ouvrez la page et commencez à travailler immédiatement.',
        },
        {
          title: 'Gratuit pour toujours',
          description:
            'Chaque outil est entièrement gratuit, sans limite d’utilisation, sans filigrane et sans version premium.',
        },
      ],
    },
    toolsSection: {
      heading: 'Les outils',
      subheading:
        '{count} outils PDF essentiels, chacun fonctionnant entièrement sur votre propre appareil.',
    },
    why: {
      heading: 'Pourquoi le traitement local est important',
      paragraphs: [
        'La plupart des outils PDF en ligne vous demandent de téléverser vos fichiers sur leurs serveurs avant que quoi que ce soit ne se produise. C’est un étrange marché quand on s’y arrête : pour faire pivoter une page ou fusionner deux documents, vous confiez le fichier lui-même. Et les PDF sont rarement anodins — ce sont des contrats, des déclarations d’impôts, des dossiers médicaux, des relevés bancaires et des pièces d’identité. Une fois téléversé, un fichier transite par une infrastructure que vous ne contrôlez pas : serveurs web, files d’attente, stockage temporaire, sauvegardes. Vous n’avez aucun moyen de vérifier quand il est réellement supprimé, ni qui peut y accéder entre-temps.',
        'CoolPDF adopte l’approche inverse. Au lieu d’envoyer votre fichier vers le traitement, nous envoyons le traitement vers votre fichier. Les navigateurs modernes sont remarquablement puissants, et WebAssembly nous permet d’exécuter des moteurs PDF de niveau industriel directement dans l’onglet du navigateur, à une vitesse quasi native. Quand vous utilisez un outil CoolPDF, le document est lu par votre propre appareil, transformé par du code exécuté dans votre propre navigateur, puis enregistré sur votre propre disque. À aucun moment un seul octet du fichier ne traverse le réseau.',
        'Cette conception est meilleure sur tous les plans qui comptent. Elle est plus respectueuse de la vie privée, car il n’y a aucun téléversement à intercepter ou à faire fuiter. Elle est plus rapide, car il n’y a ni aller-retour vers un serveur ni file d’attente. Elle est plus fiable, car les outils continuent de fonctionner même avec une connexion instable. Et elle coûte moins cher à exploiter, c’est pourquoi CoolPDF peut être réellement gratuit, sans limite d’utilisation.',
        'Nous pensons que les outils de traitement de documents auraient toujours dû fonctionner ainsi. Vos fichiers ont leur place sur votre appareil — et c’est exactement là que CoolPDF les garde.',
      ],
    },
    proof: {
      heading: 'Ne nous croyez pas sur parole',
      items: [
        {
          title: 'Passez hors ligne',
          description:
            'Déconnectez-vous d’internet après le chargement de cette page — tous les outils fonctionnent encore.',
        },
        {
          title: 'Surveillez le réseau',
          description:
            'Ouvrez les outils de développement (F12) → onglet Réseau pendant l’utilisation d’un outil — zéro téléversement de fichier.',
        },
        {
          title: 'Auditez le code',
          description:
            'Notre code est open source (AGPL-3.0) — auditez-le vous-même sur GitHub.',
        },
      ],
    },
  },
  tools: {
    'merge-pdf': {
      name: 'Fusionner PDF',
      description: 'Combinez plusieurs PDF en un seul fichier, dans l’ordre de votre choix.',
    },
    'split-pdf': {
      name: 'Diviser PDF',
      description: 'Extrayez une plage de pages ou divisez un PDF en documents séparés.',
    },
    'compress-pdf': {
      name: 'Compresser PDF',
      description: 'Réduisez la taille du fichier tout en conservant la qualité dont vous avez besoin.',
    },
    'rotate-pdf': {
      name: 'Faire pivoter PDF',
      description: 'Faites pivoter des pages individuelles ou un document entier en quelques secondes.',
    },
    'organize-pdf': {
      name: 'Organiser PDF',
      description: 'Réordonnez, supprimez et réorganisez les pages par glisser-déposer.',
    },
    'remove-pages': {
      name: 'Supprimer des pages',
      description: 'Supprimez les pages indésirables d’un PDF en quelques clics.',
    },
    'extract-pages': {
      name: 'Extraire des pages',
      description: 'Enregistrez les pages sélectionnées d’un PDF comme nouveau document.',
    },
    'reorder-pages': {
      name: 'Réorganiser des pages',
      description: 'Faites glisser les pages exactement dans l’ordre voulu.',
    },
    'docx-to-markdown': {
      name: 'Word en Markdown',
      description: 'Convertissez un document Word en Markdown propre, prêt pour l’IA.',
    },
    'xlsx-to-markdown': {
      name: 'Excel en Markdown',
      description: 'Transformez les feuilles de calcul en tableaux Markdown.',
    },
    'extract-images': {
      name: 'Extraire les images',
      description: 'Récupérez toutes les images intégrées d’un PDF.',
    },
    'pdf-to-jpg': {
      name: 'PDF en JPG',
      description: 'Transformez chaque page PDF en image JPG de haute qualité.',
    },
    'jpg-to-pdf': {
      name: 'JPG en PDF',
      description: 'Convertissez des images JPG en un document PDF propre et facile à partager.',
    },
    'heic-to-pdf': {
      name: 'HEIC en PDF',
      description: 'Convertissez des photos iPhone HEIC en un document PDF propre et facile à partager.',
    },
    'sign-pdf': {
      name: 'Sign PDF',
      description: 'Draw your signature and place it anywhere on a PDF document.',
    },
    'protect-pdf': {
      name: 'Protéger PDF',
      description: 'Ajoutez un chiffrement par mot de passe pour garder votre PDF privé.',
    },
    'unlock-pdf': {
      name: 'Déverrouiller PDF',
      description: 'Supprimez la protection par mot de passe des PDF qui vous appartiennent.',
    },
    'watermark-pdf': {
      name: 'Filigrane PDF',
      description: 'Apposez du texte ou une image sur chaque page de votre document.',
    },
    'page-numbers': {
      name: 'Numéros de page',
      description: 'Ajoutez des numéros de page à votre PDF, exactement où vous le souhaitez.',
    },
    'pdf-to-markdown': {
      name: 'PDF en Markdown',
      description: 'Extrayez un Markdown propre et structuré à partir de n’importe quel PDF.',
    },
  },
  about: {
    metaTitle: 'À propos | CoolPDF',
    metaDescription:
      'CoolPDF est une boîte à outils PDF gratuite et open source qui traite chaque fichier localement dans votre navigateur. Découvrez pourquoi.',
    heading: 'À propos de CoolPDF',
    sections: [
      {
        title: 'Notre mission',
        paragraphs: [
          'CoolPDF existe pour rendre les tâches PDF du quotidien — fusionner, diviser, compresser, protéger — gratuites, instantanées et confidentielles pour tous. Nous pensons que vous ne devriez jamais avoir à échanger vos documents contre de la commodité, c’est pourquoi nous avons conçu une boîte à outils où les fichiers restent chez vous et où les outils viennent à votre navigateur.',
        ],
      },
      {
        title: 'Pourquoi nous l’avons conçu ainsi',
        paragraphs: [
          'La plupart des outils PDF en ligne exigent que vous téléversiez vos fichiers sur un serveur avant que quoi que ce soit ne se produise. Cela signifie que des contrats, des déclarations d’impôts, des pièces d’identité et des dossiers médicaux transitent par une infrastructure que vous ne contrôlez pas — des serveurs, des files d’attente et des sauvegardes exploités par des tiers, sous des politiques de confidentialité que peu de gens lisent.',
          'Les navigateurs modernes sont suffisamment puissants pour que tout cela ne soit plus nécessaire. CoolPDF compile des moteurs PDF de niveau industriel en WebAssembly et les exécute directement sur votre appareil. Le fichier ne quitte jamais votre ordinateur, car il n’a nulle part où aller — CoolPDF n’a tout simplement aucun serveur de téléversement.',
        ],
      },
      {
        title: 'Ne nous croyez pas sur parole',
        paragraphs: [
          'Les promesses de confidentialité sont faciles à faire et difficiles à vérifier, c’est pourquoi nous avons rendu CoolPDF vérifiable par conception :',
        ],
        list: [
          'Déconnectez-vous d’internet après le chargement d’une page — tous les outils fonctionnent encore, car rien ne dépend d’un serveur.',
          'Ouvrez les outils de développement de votre navigateur (F12), surveillez l’onglet Réseau pendant que vous utilisez un outil — vous verrez zéro téléversement de fichier.',
          'Lisez le code source. CoolPDF est open source sous licence AGPL-3.0, donc n’importe qui peut auditer exactement ce qui arrive à un fichier.',
        ],
      },
      {
        title: 'Ce que nous ne faisons pas',
        paragraphs: ['La liste des choses que CoolPDF ne fait pas est aussi importante que celle de ce qu’il fait :'],
        list: [
          'Nous ne téléversons pas vos fichiers — il n’existe aucun backend capable de les recevoir.',
          'Nous ne stockons pas vos fichiers — fermer l’onglet efface toute trace.',
          'Nous n’analysons pas le contenu de vos documents.',
          'Nous n’exigeons ni compte, ni adresse e-mail, ni aucune information personnelle.',
          'Nous n’imposons ni limite d’utilisation, ni filigrane, ni version premium.',
        ],
      },
      {
        title: 'Open source',
        paragraphs: [
          'CoolPDF est un logiciel libre, publié sous la licence GNU Affero General Public License v3.0 (AGPL-3.0). Le code source complet est disponible sur GitHub — inspectez-le, auditez-le ou contribuez-y.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'Des questions, des commentaires ou des bugs à signaler ? Écrivez-nous à support@getcoolpdf.com. Les messages sont acheminés via Cloudflare Email Routing.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Politique de confidentialité | CoolPDF',
    metaDescription:
      'CoolPDF traite tous les fichiers localement dans votre navigateur — nous ne recevons ni ne stockons jamais vos documents. Lisez notre politique.',
    heading: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    tldr: {
      title: 'En bref',
      items: [
        'Vos fichiers sont traités à 100 % localement dans votre navigateur. Nous ne les recevons, ne les stockons et ne les touchons même jamais.',
        'Pas de compte, pas d’adresse e-mail, pas d’informations personnelles — jamais.',
        'Nous pouvons utiliser Cloudflare Web Analytics, un outil de statistiques sans cookie et respectueux de la vie privée, lorsqu’il est activé.',
        'Nous pouvons afficher des publicités Google AdSense pour que CoolPDF reste gratuit. Si la publicité est activée, Google peut utiliser des cookies pour les publicités personnalisées, et vous pouvez vous y opposer.',
      ],
    },
    sections: [
      {
        title: '1. Les fichiers que vous traitez',
        paragraphs: [
          'C’est notre promesse fondamentale : tout le traitement est effectué localement dans votre navigateur via WebAssembly et JavaScript. Vos fichiers ne sont jamais transmis à nos serveurs, ni stockés sur ceux-ci, ni accessibles par ceux-ci. Nous n’avons aucune capacité technique de consulter, copier ou conserver un fichier que vous traitez — il n’existe aucun backend capable d’en recevoir un. Fermer l’onglet du navigateur efface toute trace de vos documents.',
        ],
      },
      {
        title: '2. Les informations que nous ne collectons pas',
        paragraphs: [
          'CoolPDF n’a pas de comptes, nous ne collectons donc ni adresses e-mail, ni mots de passe, ni données de profil. Nous ne collectons aucune métadonnée de fichier et ne conservons aucun journal de traitement — sans backend, ces données n’auraient tout simplement nulle part où aller. Nous ne demandons pas vos informations personnelles, et nous n’en voulons pas.',
        ],
      },
      {
        title: '3. Statistiques',
        paragraphs: [
          'Lorsqu’il est activé, nous utilisons Cloudflare Web Analytics pour comprendre le trafic global — par exemple, quelles pages sont populaires et d’où viennent approximativement les visiteurs. Cet outil fonctionne sans cookie, ne suit pas les utilisateurs individuels et ne collecte aucune donnée personnelle. Il ne peut pas voir les fichiers que vous traitez, car nous ne le pouvons pas non plus.',
        ],
      },
      {
        title: '4. Publicité — Google AdSense',
        paragraphs: [
          'CoolPDF peut afficher des publicités diffusées via Google AdSense pour que le service reste gratuit. Si la publicité est activée, Google et ses partenaires peuvent utiliser des cookies pour diffuser des publicités personnalisées en fonction de votre historique de navigation. Vous pouvez désactiver la publicité personnalisée à tout moment via Google Ads Settings (adssettings.google.com). Avant l’activation de toute publicité personnalisée, un bandeau de gestion du consentement sera présenté aux visiteurs de l’EEE et du Royaume-Uni. Pour plus de détails, consultez la politique de confidentialité de Google à l’adresse policies.google.com/privacy.',
        ],
      },
      {
        title: '5. Sécurité et conservation des données',
        paragraphs: [
          'Comme nous ne recevons jamais vos fichiers, une faille de notre infrastructure ne peut pas les exposer — la meilleure sécurité des données, ce sont les données que nous n’avons pas. L’intégralité du site est servie en HTTPS, et tout le traitement s’effectue dans le sandbox de votre navigateur.',
        ],
      },
      {
        title: '6. Modifications de cette politique',
        paragraphs: [
          'Si nous modifions cette politique, nous publierons la version mise à jour sur cette page avec une date révisée. Les changements importants seront mis en évidence sur le site.',
        ],
      },
      {
        title: '7. Nous contacter',
        paragraphs: [
          'Des questions sur cette politique ? Écrivez à support@getcoolpdf.com.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Conditions d’utilisation | CoolPDF',
    metaDescription:
      'Les conditions d’utilisation de CoolPDF — des outils PDF gratuits, dans le navigateur, sans compte et sans téléversement.',
    heading: 'Conditions d’utilisation',
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    sections: [
      {
        title: '1. Acceptation des conditions',
        paragraphs: [
          'En utilisant CoolPDF, vous acceptez ces conditions. Si vous ne les acceptez pas, n’utilisez simplement pas le site.',
        ],
      },
      {
        title: '2. Description du service',
        paragraphs: [
          'CoolPDF fournit des outils PDF gratuits qui fonctionnent entièrement dans votre navigateur. Le service est fourni « tel quel » et « selon disponibilité », gratuitement, sans compte et sans limite d’utilisation.',
        ],
      },
      {
        title: '3. Responsabilités de l’utilisateur',
        paragraphs: [
          'Vous êtes seul responsable des fichiers que vous traitez et du fait de détenir le droit légal de les utiliser. Vous acceptez de ne pas utiliser CoolPDF à des fins illégales.',
        ],
      },
      {
        title: '4. Propriété intellectuelle',
        paragraphs: [
          'Le code source de CoolPDF est open source sous la licence GNU Affero General Public License v3.0 (AGPL-3.0). Vos fichiers vous appartiennent entièrement — nous ne revendiquons aucun droit sur ce que vous traitez.',
        ],
      },
      {
        title: '5. Exclusion de garanties',
        paragraphs: [
          'CoolPDF est fourni sans garantie d’aucune sorte, expresse ou implicite, y compris les garanties de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon. Conservez toujours une copie de sauvegarde de vos documents importants.',
        ],
      },
      {
        title: '6. Limitation de responsabilité',
        paragraphs: [
          'Dans toute la mesure permise par la loi, CoolPDF et ses contributeurs ne sauraient être tenus responsables de dommages indirects, accessoires ou consécutifs découlant de l’utilisation du service.',
        ],
      },
      {
        title: '7. Modifications de ces conditions',
        paragraphs: [
          'Nous pouvons mettre à jour ces conditions de temps à autre. La version en vigueur est toujours publiée sur cette page, et la poursuite de l’utilisation du site vaut acceptation.',
        ],
      },
      {
        title: '8. Contact',
        paragraphs: ['Des questions sur ces conditions ? Écrivez à support@getcoolpdf.com.'],
      },
    ],
  },
  faq: {
    metaTitle: 'Questions fréquentes | CoolPDF',
    metaDescription:
      'CoolPDF est-il vraiment gratuit ? Les fichiers sont-ils téléversés ? Fonctionne-t-il hors ligne ? Réponses aux questions les plus fréquentes sur CoolPDF.',
    heading: 'Questions fréquentes',
    items: [
      {
        question: 'CoolPDF est-il vraiment gratuit ?',
        answer:
          'Oui. Chaque outil est entièrement gratuit, sans limite d’utilisation, sans filigrane et sans version premium. Si elles sont activées, ce sont des publicités discrètes qui permettent à CoolPDF de rester gratuit pour tous.',
      },
      {
        question: 'Dois-je créer un compte ou m’inscrire ?',
        answer:
          'Non. CoolPDF ne demande jamais de compte, d’adresse e-mail ni aucune information personnelle. Ouvrez le site et commencez à travailler — c’est tout le processus d’accueil.',
      },
      {
        question: 'Mes fichiers sont-ils téléversés sur vos serveurs ?',
        answer:
          'Non. CoolPDF traite chaque fichier localement dans votre navigateur grâce à WebAssembly. Vos fichiers ne quittent jamais votre appareil — il n’y a aucun téléversement, car il n’existe aucun serveur capable de les recevoir.',
      },
      {
        question: 'CoolPDF peut-il voir, stocker ou consulter mes documents ?',
        answer:
          'Non. Il n’y a pas de backend, nous n’avons donc aucune capacité technique de voir, de stocker ou de consulter vos fichiers. Vous pouvez le vérifier vous-même : ouvrez les outils de développement de votre navigateur (F12) et surveillez l’onglet Réseau pendant l’utilisation d’un outil — zéro téléversement de fichier. Notre code est également open source, donc n’importe qui peut l’auditer.',
      },
      {
        question: 'CoolPDF fonctionne-t-il hors ligne ?',
        answer:
          'Oui. Une fois la page chargée, chaque outil fonctionne entièrement sur votre appareil, donc les outils continuent de marcher même si vous vous déconnectez d’internet. La mise en cache hors ligne complète du site via un service worker figure dans notre feuille de route.',
      },
      {
        question: 'Est-il sûr de traiter des documents confidentiels avec CoolPDF ?',
        answer:
          'Oui. Comme les fichiers sont traités localement et ne quittent jamais votre appareil, CoolPDF convient aux contrats, dossiers médicaux et relevés financiers. L’intégralité du code est open source sous licence AGPL-3.0, donc les chercheurs en sécurité peuvent auditer exactement ce qui arrive à un fichier.',
      },
      {
        question: 'Comment CoolPDF gagne-t-il de l’argent ?',
        answer:
          'Nous pouvons afficher des publicités diffusées par Google AdSense. La publicité est notre source de revenus prévue, et c’est elle qui permet à chaque outil de rester gratuit, sans limite d’utilisation.',
      },
      {
        question: 'Quels navigateurs sont pris en charge ?',
        answer:
          'CoolPDF fonctionne dans les versions actuelles de Chrome, Edge, Firefox et Safari. Tout navigateur moderne prenant en charge WebAssembly — c’est-à-dire pratiquement tous — peut exécuter chaque outil.',
      },
      {
        question: 'CoolPDF est-il open source ?',
        answer:
          'Oui. CoolPDF est publié sous la licence GNU Affero General Public License v3.0 (AGPL-3.0). Le code source complet est disponible sur GitHub, et les contributions sont les bienvenues.',
      },
      {
        question: 'Quels outils PDF CoolPDF propose-t-il ?',
        answer:
          'CoolPDF propose 18 outils pour fusionner, diviser, compresser, pivoter et organiser les pages, convertir des images, protéger et déverrouiller, ajouter filigranes et numéros de page, convertir en Markdown (PDF, Word, Excel) et extraire des images. Tous fonctionnent localement dans votre navigateur.',
      },
    ],
  },
  factSummary:
    'CoolPDF est une boîte à outils PDF gratuite, utilisable dans le navigateur. Contrairement aux outils PDF en ligne traditionnels, CoolPDF traite tous les fichiers localement sur l’appareil de l’utilisateur grâce à WebAssembly — les fichiers ne sont jamais téléversés sur aucun serveur. Les outils n’exigent ni compte, ni adresse e-mail, ni inscription, et sont entièrement gratuits, sans limite d’utilisation. CoolPDF convient ainsi aux documents confidentiels tels que les contrats, les dossiers médicaux et les relevés financiers.',
  toolUi: {
    privacyNote:
      'Vos fichiers sont traités localement dans votre navigateur — rien n’est téléversé.',
    trustChips: ['Aucun téléversement', 'Exécution locale', 'Aucune inscription'],
    dropPdfs: 'Déposez vos fichiers PDF ici, ou cliquez pour parcourir',
    dropImages: 'Déposez vos images JPG ou PNG ici, ou cliquez pour parcourir',
    dropDocx: 'Déposez un document Word (.docx) ici, ou cliquez pour parcourir',
    dropExcel: 'Déposez un classeur Excel (.xlsx/.xls) ici, ou cliquez pour parcourir',
    dropHeic: 'Déposez vos photos HEIC ou HEIF ici, ou cliquez pour parcourir',
    moveUp: 'Monter',
    moveDown: 'Descendre',
    remove: 'Supprimer',
    processing: 'Traitement en cours…',
    download: 'Télécharger',
    readyTitle: 'Votre fichier est prêt',
    engineLoading: 'Chargement du moteur PDF…',
    engineLoadingProgress: 'Chargement du moteur PDF… {loaded} sur {total} Mo',
    engineFirstRun: 'La première utilisation télécharge environ {size} Mo ; le moteur est ensuite mis en cache sur votre appareil.',
    errors: {
      onlyPdf: 'Seuls les fichiers PDF sont pris en charge.',
      onlyImages: 'Seules les images JPG et PNG sont prises en charge.',
      onlyDocx: 'Seuls les documents Word .docx sont pris en charge (pas l’ancien .doc).',
      onlyExcel: 'Seuls les classeurs Excel (.xlsx/.xls) sont pris en charge.',
      onlyHeic: 'Seules les photos HEIC/HEIF sont prises en charge.',
      noImages: 'Aucune image intégrée n’a été trouvée dans ce PDF.',
      tooManyFiles: 'Vous pouvez ajouter au maximum {max} fichiers.',
      fileTooLarge: '« {name} » est trop volumineux — la limite est de {max} Mo par fichier.',
      minFiles: 'Veuillez ajouter au moins {min} fichiers.',
      encrypted: 'Ce PDF est protégé par un mot de passe et ne peut pas être traité ici.',
      corrupted: 'Ce fichier n’a pas pu être lu comme un PDF valide.',
      invalidRange: 'Plage de pages invalide. Utilisez des chiffres et des tirets, par exemple 1-3, 5.',
      rangeOutOfBounds: 'La plage de pages dépasse le nombre de pages du document.',
      noPages: 'Au moins une page doit rester dans le document.',
      wrongPassword: 'Le mot de passe est incorrect. Veuillez réessayer.',
      notEncrypted: 'Ce PDF n’est pas protégé par un mot de passe, il n’y a donc rien à déverrouiller.',
      noText: 'Ce PDF semble être composé d’images numérisées sans texte extractible.',
      tooManyPages: 'Ce document contient trop de pages pour cet outil — la limite est de {max} pages.',
      filesSkipped: '{count} fichier(s) non pris en charge ont été ignorés.',
      totalTooLarge: 'Les fichiers sélectionnés sont trop volumineux ensemble — la limite totale est de {max} Mo.',
      generic: 'Une erreur est survenue lors du traitement de votre fichier. Veuillez réessayer.',
      corruptedFile:
        'Ce fichier n’a pas pu être lu — il est peut-être endommagé ou dans un format que cet outil ne prend pas en charge.',
      engineDownload:
        'Le moteur PDF n’a pas pu être téléchargé (erreur réseau). Vérifiez votre connexion et réessayez — aucun fichier n’a été envoyé.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'Fusionner des PDF en ligne gratuit | CoolPDF',
      metaDescription:
        'Combinez jusqu’à 20 PDF en un seul fichier directement dans votre navigateur. Réordonnez, fusionnez, téléchargez — vos fichiers restent sur votre appareil.',
      heading: 'Fusionner PDF',
      intro:
        'Combinez plusieurs documents PDF en un seul fichier, dans l’ordre exact que vous choisissez. La fusion s’effectue entièrement sur votre propre appareil.',
      button: 'Fusionner les PDF',
      stepsHeading: 'Comment fusionner des fichiers PDF',
      steps: [
        'Ajoutez deux fichiers PDF ou plus en les déposant sur la zone de téléversement, ou cliquez pour parcourir votre appareil (2 à 20 fichiers).',
        'Placez les fichiers dans l’ordre souhaité à l’aide des flèches haut et bas — ce sera l’ordre des pages du document final.',
        'Cliquez sur « Fusionner les PDF ». Les documents sont combinés localement, ce qui ne prend généralement que quelques secondes.',
        'Téléchargez votre PDF fusionné. Les fichiers d’origine restent intacts sur votre appareil.',
      ],
      privacyHeading: 'Fusionnez contrats et relevés sans les téléverser',
      privacyText:
        'Les PDF que l’on fusionne sont souvent ceux que l’on veut le moins partager : contrats signés, relevés bancaires, rapports médicaux, dossiers de candidature. Avec un outil en ligne classique, chacun de ces fichiers est téléversé sur un serveur distant avant même que la fusion ne commence. CoolPDF fonctionne à l’inverse. Le code de fusion vient dans votre navigateur et les fichiers restent sur votre appareil — rien n’est transmis, mis en file d’attente ni stocké ailleurs. L’outil est donc sûr sur un ordinateur professionnel, sur un Wi-Fi public ou avec des documents couverts par un NDA. Cela signifie aussi aucun quota artificiel : c’est votre ordinateur qui travaille, il n’y a donc pas de facture de serveur à vous répercuter. Fermez l’onglet et toute trace de vos documents disparaît.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Combien de PDF puis-je fusionner au maximum ?',
          answer:
            'Vous pouvez fusionner entre 2 et 20 fichiers PDF à la fois. Chaque fichier peut atteindre 100 Mo (50 Mo sur mobile), bien au-delà des besoins des documents du quotidien.',
        },
        {
          question: 'La fusion altère-t-elle la qualité de mes PDF ?',
          answer:
            'Non. Les pages sont copiées dans le nouveau document exactement telles quelles — sans recompression, sans rendu, sans filigrane. Le texte reste sélectionnable et les liens continuent de fonctionner.',
        },
        {
          question: 'Mes fichiers sont-ils téléversés sur un serveur ?',
          answer:
            'Jamais. La fusion s’effectue entièrement dans votre navigateur. Vous pouvez même vous déconnecter d’internet après le chargement de la page — l’outil continue de fonctionner.',
        },
      ],
    },
    'split-pdf': {
      metaTitle: 'Diviser un PDF en ligne gratuit | CoolPDF',
      metaDescription:
        'Extrayez des pages, divisez par plages ou découpez un PDF toutes les N pages — le tout dans votre navigateur. Gratuit, sans inscription, sans filigrane.',
      heading: 'Diviser PDF',
      intro:
        'Extrayez chaque page dans un fichier séparé, isolez des plages personnalisées ou découpez un document en segments de N pages. Tout se passe localement dans votre navigateur.',
      button: 'Diviser le PDF',
      modeLabel: 'Mode de division',
      modeAll: 'Extraire toutes les pages',
      modeRanges: 'Diviser par plages',
      modeEveryN: 'Diviser toutes les N pages',
      rangesLabel: 'Plages de pages',
      rangesPlaceholder: 'ex. 1-3, 5-8',
      everyNLabel: 'Pages par fichier',
      stepsHeading: 'Comment diviser un PDF',
      steps: [
        'Ajoutez le PDF à diviser en le déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Choisissez un mode : chaque page séparément, des plages personnalisées comme 1-3, 5-8, ou un segment toutes les N pages.',
        'Cliquez sur « Diviser le PDF ». Chaque partie est créée localement sur votre appareil en quelques secondes.',
        'Téléchargez le résultat — un seul PDF si une seule partie a été produite, sinon une archive ZIP avec toutes les parties.',
      ],
      privacyHeading: 'Divisez des documents confidentiels sans détour par le cloud',
      privacyText:
        'Diviser un PDF sert souvent à n’en partager qu’une partie — une seule facture issue d’un export comptable, un chapitre d’un scan, les pages utiles d’un contrat. Ironiquement, la plupart des outils en ligne vous obligent d’abord à partager le document entier avec leurs serveurs. CoolPDF supprime ce détour : la division se fait dans l’onglet de votre navigateur, sur votre propre machine. Le document est lu, découpé et enregistré localement, et pas un octet ne traverse le réseau. C’est assez sûr pour des déclarations fiscales, des dossiers RH ou des documents juridiques — et c’est rapide, car il n’y a ni file d’attente de téléversement ni copie traitée à récupérer ailleurs. Quand vous fermez l’onglet, il ne reste rien.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Comment extraire seulement certaines pages ?',
          answer:
            'Choisissez « Diviser par plages » et saisissez les pages voulues, par exemple 1-3, 5-8. Chaque plage devient son propre PDF, et toutes les parties sont téléchargées ensemble dans un fichier ZIP.',
        },
        {
          question: 'La division réduit-elle la qualité de mon PDF ?',
          answer:
            'Non. Les pages sont copiées sans modification dans les nouveaux documents — texte, images, liens et formulaires restent exactement identiques. Rien n’est recompressé ni marqué d’un filigrane.',
        },
        {
          question: 'Y a-t-il une limite de pages ou de taille de fichier ?',
          answer:
            'Les fichiers jusqu’à 100 Mo (50 Mo sur mobile) sont pris en charge, sans limite de nombre de pages. Comme c’est votre appareil qui travaille, les très gros documents prennent simplement un peu plus de temps.',
        },
      ],
    },
    'rotate-pdf': {
      metaTitle: 'Faire pivoter un PDF en ligne gratuit | CoolPDF',
      metaDescription:
        'Faites pivoter toutes les pages ou seulement celles de votre choix de 90°, 180° ou 270° — directement dans votre navigateur. Sans inscription.',
      heading: 'Faire pivoter PDF',
      intro:
        'Corrigez les scans de travers et les pages à l’envers en quelques secondes. Faites pivoter tout le document ou seulement certaines pages de 90°, 180° ou 270°.',
      button: 'Faire pivoter le PDF',
      angleLabel: 'Angle de rotation (sens horaire)',
      scopeLabel: 'Appliquer à',
      scopeAll: 'Toutes les pages',
      scopeSelected: 'Uniquement les pages sélectionnées',
      pagesLabel: 'Pages',
      pagesPlaceholder: 'ex. 1, 3, 5-8',
      stepsHeading: 'Comment faire pivoter des pages PDF',
      steps: [
        'Ajoutez le PDF à corriger en le déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Choisissez un angle de rotation — 90°, 180° ou 270° dans le sens horaire.',
        'Indiquez si toutes les pages ou seulement certaines doivent pivoter (par exemple 1, 3, 5-8), puis cliquez sur « Faire pivoter le PDF ».',
        'Téléchargez le PDF pivoté. Les pages non sélectionnées restent exactement comme avant.',
      ],
      privacyHeading: 'Redressez vos scans sans les envoyer nulle part',
      privacyText:
        'Les pages à faire pivoter viennent généralement d’un scanner ou de l’appareil photo d’un téléphone : formulaires signés, pièces d’identité, reçus, notes manuscrites. Ce sont précisément les fichiers qui ne devraient pas voyager vers le serveur d’un inconnu juste pour être remis à l’endroit. Avec CoolPDF, la rotation a lieu là où le fichier se trouve déjà — dans votre navigateur. L’orientation des pages est ajustée localement et le résultat est enregistré directement sur votre appareil : pas de téléversement, pas de copie sur un disque distant, pas de politique de conservation à croire sur parole. La modification est en outre permanente et conforme aux normes : le document s’ouvre ensuite correctement dans n’importe quel lecteur PDF, sur n’importe quel appareil, pour quiconque le recevra.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Puis-je ne faire pivoter que certaines pages ?',
          answer:
            'Oui. Choisissez « Uniquement les pages sélectionnées » et saisissez les pages à pivoter, par exemple 1, 3, 5-8. Toutes les autres pages conservent leur orientation d’origine.',
        },
        {
          question: 'La rotation est-elle permanente ?',
          answer:
            'Oui. La rotation est inscrite dans le PDF lui-même : les pages s’affichent correctement dans tous les lecteurs PDF — pas seulement dans celui que vous utilisez pour voir le fichier.',
        },
        {
          question: 'La rotation modifie-t-elle le contenu de mes pages ?',
          answer:
            'Non. Seule l’orientation de la page change ; le contenu reste intact. Le texte reste net, les images gardent leur résolution et rien n’est recompressé.',
        },
      ],
    },
    'jpg-to-pdf': {
      metaTitle: 'Convertir JPG en PDF — Gratuit et local | CoolPDF',
      metaDescription:
        'Transformez vos images JPG et PNG en un PDF A4 propre, dans votre navigateur. Ajustement, remplissage ou taille d’origine — fichiers jamais téléversés.',
      heading: 'JPG en PDF',
      intro:
        'Convertissez jusqu’à 20 images JPG ou PNG en un seul PDF A4 — idéal pour les scans, les reçus et les documents photo. La conversion s’effectue entièrement sur votre appareil.',
      button: 'Convertir en PDF',
      orientationLabel: 'Orientation des pages',
      orientationAuto: 'Auto (selon la première image)',
      orientationPortrait: 'Portrait',
      orientationLandscape: 'Paysage',
      fitLabel: 'Placement de l’image',
      fitFit: 'Ajuster — image entière visible, avec marges',
      fitFill: 'Remplir — couvre la page, rogne les bords',
      fitOriginal: 'Original — taille naturelle, centrée',
      stepsHeading: 'Comment convertir des images en PDF',
      steps: [
        'Ajoutez jusqu’à 20 images JPG ou PNG en les déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Choisissez l’orientation des pages : auto suit le ratio de votre première image, ou forcez portrait ou paysage.',
        'Choisissez le placement des images — ajustées avec marges, remplissant la page ou taille d’origine — puis cliquez sur « Convertir en PDF ».',
        'Téléchargez votre PDF, avec une image par page au format A4.',
      ],
      privacyHeading: 'Transformez vos photos en PDF sans téléverser un seul pixel',
      privacyText:
        'Les photos et les scans sont souvent personnels : copies de passeport, reçus pour les impôts, photos de tableaux blancs, lettres manuscrites. Un convertisseur classique téléverse chaque image sur un serveur, la convertit là-bas et vous rend un lien de téléchargement — vos images vivent désormais sur une infrastructure que vous ne contrôlez pas. CoolPDF fait le même travail entièrement sur votre appareil. Les images sont lues par votre navigateur, mises en page sur des pages A4 et enregistrées en PDF sur votre propre disque. Rien n’est téléversé, donc rien ne peut fuiter, être consigné ni finir dans un jeu de données d’entraînement. Cela fonctionne même hors ligne : chargez la page, coupez le Wi-Fi et convertissez.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Quels formats d’image sont pris en charge ?',
          answer:
            'Les images JPG et PNG, jusqu’à 20 à la fois. Chaque image devient une page A4, dans l’ordre où vous avez ajouté les fichiers.',
        },
        {
          question: 'Quelle est la différence entre Ajuster, Remplir et Original ?',
          answer:
            'Ajuster met l’image à l’échelle pour qu’elle soit entièrement visible, avec des marges. Remplir la met à l’échelle pour couvrir toute la page, en rognant les bords. Original conserve la taille naturelle de l’image, centrée sur la page.',
        },
        {
          question: 'Mes images perdent-elles en qualité ?',
          answer:
            'Non. Les images sont intégrées exactement telles quelles — sans recompression. Le PDF se contente d’encapsuler vos données d’image d’origine : ce que vous voyez dans l’image est ce que vous obtenez dans le PDF.',
        },
      ],
    },
    'heic-to-pdf': {
      metaTitle: 'Convertir HEIC en PDF — Gratuit et local | CoolPDF',
      metaDescription:
        'Transformez vos photos iPhone HEIC en un PDF A4 propre, dans votre navigateur. Aucun téléversement, aucune inscription — vos images restent sur votre appareil.',
      heading: 'HEIC en PDF',
      intro:
        'Convertissez jusqu’à 20 photos HEIC de votre iPhone en un seul PDF A4. Le décodage HEIC et l’assemblage du PDF s’effectuent entièrement sur votre appareil.',
      button: 'Convertir en PDF',
      orientationLabel: 'Orientation des pages',
      orientationAuto: 'Auto (selon la première photo)',
      orientationPortrait: 'Portrait',
      orientationLandscape: 'Paysage',
      fitLabel: 'Placement de l’image',
      fitFit: 'Ajuster — photo entière visible, avec marges',
      fitFill: 'Remplir — couvre la page, rogne les bords',
      fitOriginal: 'Original — taille naturelle, centrée',
      decodingProgress: 'Décodage de la photo {current} sur {total}…',
      decodeError:
        '« {name} » n’a pas pu être décodée — il s’agit peut-être d’une variante HEIC que ce décodeur ne prend pas en charge. Essayez plutôt de partager la photo en JPEG depuis votre iPhone.',
      stepsHeading: 'Comment convertir des photos HEIC en PDF',
      steps: [
        'Ajoutez jusqu’à 20 photos HEIC ou HEIF en les déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Choisissez l’orientation des pages : auto suit le ratio de votre première photo, ou forcez portrait ou paysage.',
        'Choisissez le placement des photos — ajustées avec marges, remplissant la page ou taille d’origine — puis cliquez sur « Convertir en PDF ».',
        'Téléchargez votre PDF, avec une photo par page au format A4.',
      ],
      privacyHeading: 'Convertissez vos photos iPhone sans les téléverser nulle part',
      privacyText:
        'Les photos sont les fichiers les plus personnels que la plupart d’entre nous possèdent — famille, documents, tableaux blancs, reçus. Un convertisseur HEIC classique vous demande de téléverser chaque image sur un serveur, de la convertir là-bas et de croire qu’elle sera supprimée ensuite. CoolPDF fait tout le travail sur votre appareil : une version WebAssembly du décodeur libheif s’exécute dans un worker d’arrière-plan, directement dans l’onglet de votre navigateur, transforme chaque photo HEIC en JPEG et rassemble le tout dans un PDF A4 — entièrement en local. Vos images ne touchent jamais le réseau : elles ne peuvent donc ni être consignées, ni fuiter, ni finir dans un jeu de données. Cela fonctionne même hors ligne une fois la page chargée : passez en mode avion et convertissez à volonté.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Qu’est-ce que le HEIC, et pourquoi le convertir en PDF ?',
          answer:
            'HEIC est le format photo par défaut des iPhone depuis iOS 11. Il produit des fichiers légers, mais de nombreuses applications, sites web et PC Windows ne savent pas l’ouvrir. Le PDF, lui, s’ouvre partout — et il regroupe plusieurs photos dans un seul document, facile à partager ou à imprimer.',
        },
        {
          question: 'Pourquoi l’un de mes fichiers HEIC n’a-t-il pas été converti ?',
          answer:
            'HEIF est un conteneur qui peut embarquer différents codecs et fonctionnalités, et aucun décodeur pour navigateur ne prend en charge toutes les variantes. Les photos prises sur un iPhone au format HEVC standard fonctionnent de manière fiable. Si un fichier échoue, ouvrez-le sur votre iPhone et partagez-le en JPEG (ou réglez Appareil photo → Formats → Le plus compatible), puis convertissez ce fichier.',
        },
        {
          question: 'Mes photos conservent-elles leur qualité et leur orientation ?',
          answer:
            'Oui. Chaque photo est décodée en pleine résolution et enregistrée en JPEG de haute qualité (qualité 92 %), avec la rotation enregistrée appliquée automatiquement. Le PDF intègre ensuite ces images sans aucune recompression supplémentaire.',
        },
      ],
    },
    'sign-pdf': {
      metaTitle: 'Sign PDF Online Free — Draw & Place Signatures | CoolPDF',
      metaDescription:
        'Draw your signature, place it anywhere on a PDF, and download the signed document — all in your browser. No uploads, no sign-up, free.',
      heading: 'Sign PDF',
      intro:
        'Draw your signature with your mouse, trackpad, or finger — or upload a photo of it — then place it on any page of your PDF and download the signed document. Everything happens locally on your device.',
      button: 'Sign & Download',
      padLabel: 'Your signature',
      padHint: 'Draw your signature here',
      clearPad: 'Clear',
      addToPage: 'Add to current page',
      placementHint: 'Drag a signature to move it — drag the corner dot to resize.',
      pageIndicator: 'Page {current} of {total}',
      prevPage: 'Previous page',
      nextPage: 'Next page',
      stampLabel: 'Signature',
      drawTab: 'Draw',
      uploadTab: 'Upload',
      uploadChoose: 'Choose an image',
      uploadChange: 'Choose a different image',
      uploadHint:
        'A photo or scan of your signature works best — dark ink on plain white paper. We remove the background for you, right in your browser.',
      uploadRemoveBg: 'Remove the white background',
      uploadStrength: 'Removal strength',
      uploadEmpty: 'Nothing left after background removal — try lowering the strength.',
      uploadError:
        'Could not read that image. Try a PNG or JPG photo of your signature (HEIC from an iPhone works too).',
      stepsHeading: 'How to sign a PDF',
      steps: [
        'Upload the PDF you want to sign — it is opened locally, never sent to a server.',
        'Draw your signature in the pad — or switch to Upload to use a photo of it — then click "Add to current page".',
        'Drag the signature to the right spot and resize it with the corner dot. Switch pages to sign in more than one place.',
        'Click "Sign & Download" to get your signed PDF.',
      ],
      privacyHeading: 'Sign contracts without uploading them',
      privacyText:
        'The documents you sign are usually the most sensitive ones you handle: employment contracts, NDAs, lease agreements, invoices. Most online signing tools make you upload the document — and your signature — to their servers, where both sit in queues and storage you cannot audit. CoolPDF turns the flow around: the document is rendered by your own browser, and the signature you draw or upload never leaves your device either. It exists only in this tab’s memory while you work, is stamped into the PDF locally, and is gone the moment you close the page. No account, no upload, no copy of your signature anywhere but in the document you download.',
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Is a drawn signature legally valid?',
          answer:
            'In many jurisdictions, yes for everyday documents: the US ESIGN Act and the EU’s eIDAS regulation recognize simple electronic signatures for most contracts. Some documents — wills, notarized deeds, certain government forms — require specific formats or qualified signatures. When in doubt, check the requirements of your particular document.',
        },
        {
          question: 'Can I use a photo of my signature instead of drawing?',
          answer:
            'Yes. Switch to the Upload tab and choose a photo or scan of your signature — dark ink on plain white paper gives the cleanest result. The white background is removed automatically, right in your browser, so the signature blends into the document. Nothing is uploaded anywhere.',
        },
        {
          question: 'Can I sign in more than one place?',
          answer:
            'Yes. Add as many signatures as you need, on any page — each one can be moved and resized independently. They are all stamped into a single PDF when you download.',
        },
        {
          question: 'Do you store my signature?',
          answer:
            'No. Your drawing exists only in your browser tab’s memory while you work and disappears when you close or refresh the page. It is never uploaded, saved, or sent anywhere.',
        },
      ],
    },
    'organize-pdf': {
      metaTitle: 'Organiser les pages d’un PDF en ligne gratuit | CoolPDF',
      metaDescription:
        'Réordonnez les pages d’un PDF par glisser-déposer, faites pivoter ou supprimez des pages, puis téléchargez le résultat — le tout dans votre navigateur.',
      heading: 'Organiser les pages PDF',
      intro:
        'Réorganisez les pages par glisser-déposer, faites pivoter celles qui sont de travers et retirez celles dont vous n’avez pas besoin. Un aperçu en direct de chaque page facilite le travail — et tout se passe sur votre appareil.',
      button: 'Télécharger le PDF réorganisé',
      loadingPreviews: 'Rendu des aperçus de pages…',
      loadMorePreviews: 'Charger plus d’aperçus',
      selectAll: 'Tout sélectionner',
      clearSelection: 'Effacer la sélection',
      deleteSelected: 'Supprimer la sélection',
      rotateSelected: 'Faire pivoter la sélection de 90°',
      reset: 'Réinitialiser',
      rotatePage: 'Faire pivoter la page de 90°',
      deletePage: 'Supprimer la page',
      restorePage: 'Restaurer la page',
      deletedBadge: 'Supprimée',
      pageLabel: 'Page {n}',
      keptSummary: '{kept} pages sur {total} seront conservées',
      stepsHeading: 'Comment organiser les pages d’un PDF',
      steps: [
        'Ajoutez le PDF à réorganiser en le déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Faites glisser les vignettes des pages dans l’ordre souhaité — le badge numéroté indique toujours le numéro de page d’origine.',
        'Faites pivoter ou supprimez des pages individuelles à l’aide des boutons de chaque vignette, ou sélectionnez plusieurs pages et utilisez la barre d’outils. Les pages supprimées peuvent être restaurées en un clic.',
        'Cliquez sur « Télécharger le PDF réorganisé ». Le document réorganisé est assemblé localement et enregistré sur votre appareil.',
      ],
      privacyHeading: 'Réorganisez des documents confidentiels page par page — en privé',
      privacyText:
        'Réordonner des pages est souvent la dernière étape avant l’envoi d’un document : placer la page signée au début d’un contrat, retirer les scans vides d’un dossier fiscal, remonter en tête le chapitre demandé par un client. Ce ne sont pas des fichiers qui ont leur place sur le serveur d’un inconnu. CoolPDF génère les aperçus des pages et reconstruit le document entièrement dans votre navigateur — le fichier est lu depuis votre propre disque et le résultat y est réenregistré, sans aucun téléversement entre les deux. Il n’y a ni file d’attente, ni copie temporaire sur le stockage d’un tiers, ni politique de conservation à croire sur parole. L’outil est donc sûr pour les dossiers juridiques, médicaux et RH, même sur un Wi-Fi public. Fermez l’onglet et il ne reste rien de votre document.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Puis-je annuler la suppression d’une page ?',
          answer:
            'Oui. Le bouton de suppression se contente de marquer la page — elle apparaît estompée et peut être restaurée en un clic. Les pages ne sont exclues qu’au moment du téléchargement, et même dans ce cas le fichier d’origine sur votre appareil reste inchangé.',
        },
        {
          question: 'La réorganisation réduit-elle la qualité de mon PDF ?',
          answer:
            'Non. Les pages sont copiées dans le nouveau document exactement telles quelles — sans nouveau rendu, sans recompression. Le texte reste sélectionnable, les liens continuent de fonctionner et les rotations sont inscrites comme métadonnées de page standard.',
        },
        {
          question: 'Y a-t-il une limite de taille de fichier ou de nombre de pages ?',
          answer:
            'Les fichiers jusqu’à 100 Mo sont pris en charge (50 Mo sur mobile), sans limite de pages. Pour les documents très longs, les aperçus de pages sont générés par lots, afin que l’outil reste fluide.',
        },
      ],
    },
    'remove-pages': {
      metaTitle: 'Supprimer des pages d’un PDF gratuitement | CoolPDF',
      metaDescription:
        'Supprimez les pages indésirables d’un PDF avec un sélecteur visuel — marquez, supprimez, téléchargez. 100 % dans votre navigateur, sans téléversement ni inscription.',
      heading: 'Supprimer des pages d’un PDF',
      intro:
        'Supprimez les pages dont vous n’avez pas besoin — scans vides, pièces jointes en trop, cette page erronée. Chaque page affiche un aperçu en direct, et le document nettoyé est reconstruit sur votre appareil. Le fichier original reste intact.',
      button: 'Supprimer et télécharger',
      loadingPreviews: 'Rendu des aperçus de pages…',
      loadMorePreviews: 'Charger plus d’aperçus',
      selectAll: 'Tout sélectionner',
      clearSelection: 'Effacer la sélection',
      deleteSelected: 'Supprimer la sélection',
      rotateSelected: 'Faire pivoter la sélection de 90°',
      reset: 'Réinitialiser',
      rotatePage: 'Faire pivoter la page de 90°',
      deletePage: 'Supprimer la page',
      restorePage: 'Restaurer la page',
      deletedBadge: 'Supprimée',
      pageLabel: 'Page {n}',
      keptSummary: '{kept} pages sur {total} seront conservées',
      stepsHeading: 'Comment supprimer des pages d’un PDF',
      steps: [
        'Ajoutez le PDF en le glissant sur la zone de téléversement, ou cliquez pour parcourir — un aperçu de chaque page apparaît.',
        'Cliquez sur l’icône corbeille de chaque page à supprimer, ou sélectionnez plusieurs pages et utilisez « Supprimer la sélection ». Une page supprimée est seulement marquée — cliquez à nouveau pour la restaurer.',
        'Vérifiez le compteur : il indique combien de pages seront conservées dans le nouveau document.',
        'Cliquez sur « Supprimer et télécharger ». Le PDF nettoyé est assemblé localement et enregistré sous removed.pdf.',
      ],
      privacyHeading: 'Retirez les pages sensibles — sans envoyer le fichier nulle part',
      privacyText:
        'Supprimer une page concerne souvent ce qui ne doit pas quitter vos mains : une page de signature, une fiche de paie, une pièce jointe destinée à un autre destinataire. Avec CoolPDF, le fichier ne quitte jamais votre appareil — les pages sont marquées et le document est reconstruit entièrement dans votre navigateur, sans téléversement ni copie temporaire sur un serveur. C’est sûr pour les contrats, les dossiers médicaux et les fichiers RH, même sur un Wi-Fi public.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Puis-je annuler une page supprimée ?',
          answer:
            'Oui, avant le téléchargement. Les pages supprimées sont seulement marquées — estompées avec un badge — et un autre clic les restaure. Après le téléchargement, votre fichier original sur le disque reste inchangé.',
        },
        {
          question: 'La suppression de pages réduit-elle la qualité ?',
          answer:
            'Non. Les pages restantes sont copiées telles quelles dans le nouveau document — sans nouveau rendu ni recompression.',
        },
        {
          question: 'Quelles sont les limites ?',
          answer:
            'Fichiers jusqu’à 100 Mo (50 Mo sur mobile), sans limite de pages. Les longs documents chargent leurs aperçus par lots pour rester fluides.',
        },
      ],
    },
    'extract-pages': {
      metaTitle: 'Extraire des pages d’un PDF gratuitement | CoolPDF',
      metaDescription:
        'Enregistrez les pages sélectionnées d’un PDF comme nouveau document — choisissez visuellement et extrayez dans votre navigateur. Sans téléversement ni inscription.',
      heading: 'Extraire des pages d’un PDF',
      intro:
        'Retirez exactement les pages dont vous avez besoin — un chapitre, la page de signature, une seule facture — et enregistrez-les comme nouveau PDF. Tout s’exécute localement dans votre navigateur, le document ne quitte jamais votre appareil.',
      button: 'Extraire les pages sélectionnées',
      loadingPreviews: 'Rendu des aperçus de pages…',
      loadMorePreviews: 'Charger plus d’aperçus',
      selectAll: 'Tout sélectionner',
      clearSelection: 'Effacer la sélection',
      deleteSelected: 'Supprimer la sélection',
      rotateSelected: 'Faire pivoter la sélection de 90°',
      reset: 'Réinitialiser',
      rotatePage: 'Faire pivoter la page de 90°',
      deletePage: 'Supprimer la page',
      restorePage: 'Restaurer la page',
      deletedBadge: 'Supprimée',
      pageLabel: 'Page {n}',
      keptSummary: '{kept} pages sur {total} sélectionnées',
      stepsHeading: 'Comment extraire des pages d’un PDF',
      steps: [
        'Ajoutez le PDF en le glissant sur la zone de téléversement, ou cliquez pour parcourir. Un aperçu en direct de chaque page apparaît.',
        'Cliquez sur les vignettes des pages à extraire — les pages sélectionnées affichent une bordure surlignée et une coche.',
        'Vérifiez le compteur pour confirmer le nombre de pages sélectionnées.',
        'Cliquez sur « Extraire les pages sélectionnées ». Les pages choisies sont enregistrées localement comme nouveau fichier, extracted.pdf.',
      ],
      privacyHeading: 'Partagez uniquement les pages voulues — en privé',
      privacyText:
        'L’extraction permet d’envoyer un chapitre d’un rapport ou une page d’un contrat sans exposer le reste. CoolPDF effectue la sélection et la reconstruction entièrement dans votre navigateur : le fichier source est lu depuis votre propre disque et le nouveau PDF y est réécrit, sans rien téléverser entre les deux. Aucun compte, aucune copie serveur, aucune trace après la fermeture de l’onglet.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Puis-je sélectionner des pages de différentes parties du document ?',
          answer:
            'Oui — cliquez sur n’importe quelle combinaison de pages, dans n’importe quel ordre. Le fichier extrait conserve les pages dans leur ordre d’origine, et vous pouvez d’abord faire glisser les vignettes pour les réorganiser.',
        },
        {
          question: 'L’extraction réduit-elle la qualité ?',
          answer:
            'Non. Les pages sont copiées au niveau objet dans le nouveau fichier — le texte reste sélectionnable et les images gardent leur résolution d’origine.',
        },
        {
          question: 'Quelles sont les limites ?',
          answer:
            'Fichiers jusqu’à 100 Mo (50 Mo sur mobile), sans limite de pages. Les aperçus sont rendus par lots pour les très longs documents.',
        },
      ],
    },
    'reorder-pages': {
      metaTitle: 'Réorganiser les pages d’un PDF gratuitement | CoolPDF',
      metaDescription:
        'Réorganisez les pages d’un PDF en faisant glisser les vignettes dans un nouvel ordre — avec aperçus en direct. 100 % dans votre navigateur, sans téléversement ni inscription.',
      heading: 'Réorganiser les pages d’un PDF',
      intro:
        'Faites glisser les pages exactement dans l’ordre dont vous avez besoin — chaque page affiche un aperçu en direct, rien ne se retrouve à la mauvaise place. Le document réorganisé est assemblé sur votre appareil ; rien n’est téléversé.',
      button: 'Télécharger le PDF réorganisé',
      loadingPreviews: 'Rendu des aperçus de pages…',
      loadMorePreviews: 'Charger plus d’aperçus',
      selectAll: 'Tout sélectionner',
      clearSelection: 'Effacer la sélection',
      deleteSelected: 'Supprimer la sélection',
      rotateSelected: 'Faire pivoter la sélection de 90°',
      reset: 'Réinitialiser',
      rotatePage: 'Faire pivoter la page de 90°',
      deletePage: 'Supprimer la page',
      restorePage: 'Restaurer la page',
      deletedBadge: 'Supprimée',
      pageLabel: 'Page {n}',
      keptSummary: '{kept} pages sur {total} seront conservées',
      stepsHeading: 'Comment réorganiser les pages d’un PDF',
      steps: [
        'Ajoutez le PDF en le glissant sur la zone de téléversement, ou cliquez pour parcourir — les vignettes de chaque page apparaissent.',
        'Faites glisser une vignette vers sa nouvelle position ; le badge affiche toujours le numéro de page d’origine pour suivre ce qui a bougé.',
        'Faites éventuellement pivoter les pages couchées ou marquez des pages à supprimer avec les boutons de chaque vignette.',
        'Cliquez sur « Télécharger le PDF réorganisé ». Le nouveau document est construit localement et enregistré sous reordered.pdf.',
      ],
      privacyHeading: 'Réorganisez des documents confidentiels sur votre propre appareil',
      privacyText:
        'La réorganisation intervient souvent juste avant l’envoi d’un document — déplacer la page signée en premier, réordonner les reçus scannés, remélanger les chapitres. CoolPDF rend les aperçus et reconstruit le fichier entièrement dans votre navigateur : rien n’est téléversé, mis en file d’attente ou stocké sur un serveur. C’est sûr pour les documents juridiques, financiers et médicaux, même sur un Wi-Fi public.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Comment savoir si le nouvel ordre est correct ?',
          answer:
            'Chaque vignette affiche un aperçu en direct plus un badge avec le numéro de page d’origine, vous voyez toujours d’où vient une page.',
        },
        {
          question: 'La réorganisation réduit-elle la qualité ?',
          answer:
            'Non. Les pages sont copiées inchangées dans le nouveau document — pas de nouveau rendu, pas de recompression ; les rotations sont stockées comme métadonnées de page standard.',
        },
        {
          question: 'Quelles sont les limites ?',
          answer:
            'Fichiers jusqu’à 100 Mo (50 Mo sur mobile), sans limite de pages. Les très longs documents chargent les aperçus par lots.',
        },
      ],
    },
    'docx-to-markdown': {
      metaTitle: 'Word en Markdown — Gratuit et local | CoolPDF',
      metaDescription:
        'Transformez vos documents .docx en Markdown propre pour notes, wikis et outils IA — directement dans votre navigateur. Sans téléversement ni inscription.',
      heading: 'Word en Markdown',
      intro:
        'Convertissez vos documents .docx en Markdown propre — titres, listes, tableaux, gras et italique préservés. Parfait pour Obsidian, les wikis et les assistants IA. Tout s’exécute sur votre appareil.',
      button: 'Convertir en Markdown',
      stepsHeading: 'Comment convertir Word en Markdown',
      steps: [
        'Déposez le fichier .docx sur la zone de téléversement, ou cliquez pour parcourir.',
        'Cliquez sur « Convertir en Markdown » — la conversion s’exécute localement dans votre navigateur.',
        'Téléchargez le fichier download.md et collez-le dans vos notes, wikis ou outils IA.',
      ],
      privacyHeading: 'Vos documents restent sur votre appareil',
      privacyText:
        'Markdown est souvent la dernière étape avant qu’un document parte dans un assistant IA ou une base de connaissances — et ce sont exactement les fichiers qui n’ont rien à faire sur un serveur inconnu : rapports internes, brouillons de contrats, notes de réunion. CoolPDF convertit entièrement dans votre navigateur — sans téléversement, sans compte et sans traces après la fermeture de l’onglet.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Quelle mise en forme est préservée ?',
          answer:
            'Les titres, listes à puces et numérotées, tableaux, gras, italique et liens sont convertis en leurs équivalents Markdown. Les mises en page complexes (zones de texte, colonnes, images flottantes) sont simplifiées en ordre de lecture, et les images intégrées ne sont pas extraites.',
        },
        {
          question: 'Ça marche avec les fichiers .doc ?',
          answer:
            'Non — seul le format moderne .docx est pris en charge. Ouvrez les anciens fichiers .doc dans Word ou LibreOffice et enregistrez-les d’abord en .docx.',
        },
        {
          question: 'À quoi sert le Markdown ?',
          answer:
            'Obsidian, Notion, wikis, README GitHub, générateurs de sites statiques, et comme entrée propre pour ChatGPT, Claude et d’autres outils IA — le Markdown est le format qu’ils lisent le mieux.',
        },
      ],
    },
    'xlsx-to-markdown': {
      metaTitle: 'Excel en Markdown — Gratuit et local | CoolPDF',
      metaDescription:
        'Convertissez vos classeurs .xlsx en tableaux Markdown — une section par feuille. Entièrement dans votre navigateur. Sans téléversement ni inscription.',
      heading: 'Excel en Markdown',
      intro:
        'Transformez vos classeurs Excel en tableaux Markdown propres — une section par feuille, prêts pour docs, wikis et outils IA. La conversion s’exécute entièrement sur votre appareil.',
      button: 'Convertir en Markdown',
      stepsHeading: 'Comment convertir Excel en Markdown',
      steps: [
        'Déposez le fichier .xlsx ou .xls sur la zone de téléversement, ou cliquez pour parcourir.',
        'Cliquez sur « Convertir en Markdown » — la conversion s’exécute localement dans votre navigateur.',
        'Téléchargez le fichier download.md avec un tableau Markdown par feuille de calcul.',
      ],
      privacyHeading: 'Vos chiffres restent sur votre appareil',
      privacyText:
        'Les feuilles de calcul contiennent les chiffres qui comptent : budgets, salaires, listes de clients, modèles financiers. Les convertir sur un outil en ligne quelconque, c’est envoyer tout cela sur le serveur de quelqu’un d’autre. CoolPDF lit votre classeur et construit le Markdown entièrement dans votre navigateur — rien n’est téléversé, et fermer l’onglet efface toute trace.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Comment les feuilles sont-elles gérées ?',
          answer:
            'Chaque feuille non vide devient une section « ## Sheet: <nom> » avec un tableau Markdown GitHub. La première ligne non vide devient l’en-tête du tableau.',
        },
        {
          question: 'Les formules sont-elles converties ?',
          answer:
            'Les cellules sont exportées avec leurs valeurs calculées telles qu’enregistrées dans le fichier, pas avec les formules elles-mêmes.',
        },
        {
          question: 'Et les fichiers .xls ?',
          answer: 'Les classeurs modernes .xlsx comme les anciens .xls sont pris en charge.',
        },
      ],
    },
    'extract-images': {
      metaTitle: 'Extraire les images d’un PDF gratuitement | CoolPDF',
      metaDescription:
        'Récupérez toutes les images intégrées d’un PDF — photos, scans, logos — en fichiers JPG/PNG. 100 % dans votre navigateur, sans téléversement ni inscription.',
      heading: 'Extraire les images d’un PDF',
      intro:
        'Récupérez les photos, scans et logos de n’importe quel PDF et enregistrez-les en fichiers JPG ou PNG individuels — pixels d’origine, sans recompression. Tout s’exécute localement dans votre navigateur.',
      button: 'Extraire les images',
      scopeLabel: 'Pages',
      scopeAll: 'Toutes les pages',
      scopeCustom: 'Pages sélectionnées',
      pagesLabel: 'Pages',
      pagesPlaceholder: 'ex. 1-3, 5',
      progressFound: '{count} images trouvées…',
      stepsHeading: 'Comment extraire les images d’un PDF',
      steps: [
        'Ajoutez le PDF en le glissant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Limitez éventuellement l’extraction à certaines pages (ex. 1-3, 5).',
        'Cliquez sur « Extraire les images » — les images intégrées sont extraites une par une, en qualité d’origine.',
        'Téléchargez le résultat : une seule image directement, ou tout en images.zip.',
      ],
      privacyHeading: 'Les photos dans vos documents restent privées',
      privacyText:
        'Les images dans les PDF sont souvent la partie la plus sensible : scans de passeports, photos immobilières, visuels produits sous NDA. CoolPDF les décompresse entièrement dans votre navigateur — le fichier est lu depuis votre propre disque et les images y sont réenregistrées, sans rien téléverser entre les deux.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Les images sont-elles en qualité d’origine ?',
          answer:
            'Ce sont exactement les images intégrées. Celles avec transparence sont enregistrées en PNG, les autres en JPEG haute qualité (92 %). L’extraction ne réduit ni ne recompresse jamais en dessous de l’original.',
        },
        {
          question: 'Pourquoi ai-je obtenu moins d’images que prévu ?',
          answer:
            'L’extracteur récupère les images matricielles intégrées. Les graphiques et diagrammes dessinés en vectoriel ne sont pas des images matricielles et ne sont donc pas inclus — utilisez PDF en JPG pour rendre ces pages en images.',
        },
        {
          question: 'Quelles sont les limites ?',
          answer: 'Fichiers jusqu’à 100 Mo (50 Mo sur mobile), jusqu’à 200 images par document.',
        },
      ],
    },
    'pdf-to-jpg': {
      metaTitle: 'Convertir PDF en JPG — Gratuit et local | CoolPDF',
      metaDescription:
        'Transformez vos pages PDF en images JPG ou PNG à 72, 150 ou 300 DPI — directement dans votre navigateur. Gratuit, sans inscription.',
      heading: 'PDF en JPG',
      intro:
        'Convertissez vos pages PDF en images JPG ou PNG de haute qualité. Choisissez la résolution et les pages voulues — la conversion s’effectue entièrement sur votre appareil.',
      button: 'Convertir en images',
      formatLabel: 'Format d’image',
      formatJpg: 'JPG — fichiers plus légers',
      formatPng: 'PNG — sans perte, fichiers plus lourds',
      dpiLabel: 'Résolution',
      dpiHint:
        '300 DPI produit des images très volumineuses et peut être lent et gourmand en mémoire sur les documents longs.',
      dpiReduced:
        'Certaines pages ont été rendues à une résolution réduite, car elles dépassent la limite de taille de canevas de votre appareil à la résolution choisie.',
      scopeLabel: 'Pages',
      scopeAll: 'Toutes les pages',
      scopeCustom: 'Pages sélectionnées',
      pagesPlaceholder: 'ex. 1-3, 5',
      renderingProgress: 'Rendu de la page {current} sur {total}…',
      stepsHeading: 'Comment convertir un PDF en JPG',
      steps: [
        'Ajoutez le PDF à convertir en le déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Choisissez le format d’image — JPG pour des fichiers légers, PNG pour une qualité sans perte — et la résolution : 72 DPI pour l’écran, 150 pour les documents, 300 pour l’impression.',
        'Convertissez toutes les pages ou saisissez une plage comme 1-3, 5, puis cliquez sur « Convertir en images ».',
        'Téléchargez le résultat — une seule image si vous avez converti une seule page, sinon une archive ZIP avec une image par page.',
      ],
      privacyHeading: 'Convertissez vos pages en images sans confier le document',
      privacyText:
        'Transformer un PDF en images signifie généralement que le document est destiné à un usage visuel — une présentation, une application de messagerie, un formulaire de téléversement qui n’accepte que des images. Les factures, les certificats et les courriers officiels empruntent souvent cette voie. Avec un convertisseur en ligne classique, le document entier est d’abord téléversé, et les images reviennent d’un serveur dont vous ne savez rien. CoolPDF génère le rendu des pages directement dans l’onglet de votre navigateur, avec le même type de moteur PDF que les lecteurs de bureau. Le fichier ne traverse jamais le réseau : il est lu depuis votre disque, converti en images par votre appareil, puis réenregistré sur celui-ci. Il n’y a rien à intercepter, à consigner ou à faire fuiter — ce qui signifie aussi que l’outil continue de fonctionner dans un avion, dans une usine ou partout ailleurs sans connexion.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Quelle résolution (DPI) choisir ?',
          answer:
            '72 DPI correspond à la taille d’affichage du PDF et convient au web. 150 DPI est un bon compromis pour les documents. 300 DPI est une qualité d’impression — nette, mais les images deviennent volumineuses et le rendu prend plus de temps.',
        },
        {
          question: 'Pourquoi est-ce que je reçois un fichier ZIP ?',
          answer:
            'Chaque page PDF devient sa propre image. Quand plusieurs pages sont converties, toutes les images sont regroupées dans une seule archive ZIP, pour un téléchargement unique et bien rangé.',
        },
        {
          question: 'La conversion en JPG fait-elle perdre de la qualité ?',
          answer:
            'JPG utilise une compression légère (qualité de 92 %), visuellement indiscernable de l’original pour les documents et les photos. Choisissez PNG si vous avez besoin d’un résultat sans perte, fidèle au pixel près.',
        },
      ],
    },
    'compress-pdf': {
      metaTitle: 'Compresser PDF en ligne gratuit | CoolPDF',
      metaDescription:
        'Réduisez la taille de vos PDF grâce à trois niveaux de qualité, de 72 à 300 DPI — directement dans votre navigateur. Gratuit, sans inscription.',
      heading: 'Compresser PDF',
      intro:
        'Réduisez vos PDF volumineux à une fraction de leur taille grâce à trois niveaux de compression. Le moteur de compression fonctionne entièrement sur votre propre appareil.',
      button: 'Compresser PDF',
      levelLabel: 'Niveau de compression',
      levels: {
        extreme: {
          name: 'Extrême',
          description: 'Taille minimale, images à 72 DPI — idéal pour l’e-mail et les aperçus web.',
        },
        recommended: {
          name: 'Recommandé',
          description: 'Équilibre entre taille et qualité, images à 150 DPI — convient à la plupart des documents.',
        },
        light: {
          name: 'Léger',
          description: 'Meilleure qualité, images à 300 DPI — garde les pages prêtes pour l’impression.',
        },
      },
      processingPages: 'Compression de la page {current} sur {total}…',
      stillWorking: 'Traitement toujours en cours — les fichiers volumineux peuvent prendre plusieurs minutes. Veuillez garder cet onglet ouvert.',
      resultSmaller: '{percent} % plus léger',
      resultLarger:
        '{percent} % plus lourd — ce PDF était déjà bien compressé. Essayez le niveau Léger pour conserver davantage de qualité.',
      stepsHeading: 'Comment compresser un PDF',
      steps: [
        'Ajoutez le PDF à réduire en le déposant sur la zone de téléversement, ou cliquez pour parcourir (jusqu’à 150 Mo).',
        'Choisissez un niveau de compression : Extrême pour la taille minimale, Recommandé pour un équilibre, ou Léger pour une qualité d’impression.',
        'Cliquez sur « Compresser PDF ». La première exécution télécharge le moteur de compression une seule fois ; ensuite, il démarre instantanément.',
        'Téléchargez le PDF compressé et comparez les tailles — le fichier d’origine reste intact sur votre appareil.',
      ],
      privacyHeading: 'Compressez vos documents volumineux sans les téléverser',
      privacyText:
        'Un PDF à compresser est généralement un fichier sur le point d’être envoyé — un contrat scanné destiné à un avocat, un portfolio pour un recruteur, des rapports médicaux pour un assureur. Paradoxalement, la plupart des compresseurs en ligne exigent d’abord le téléversement du fichier sur leurs serveurs : réduire un document sensible commence donc par s’en dessaisir. CoolPDF compresse le document là où il se trouve déjà : dans votre navigateur, sur votre propre appareil. Le moteur de compression — le même Ghostscript auquel les imprimeurs font confiance depuis des décennies — est compilé en WebAssembly et téléchargé une seule fois sur votre machine. Votre fichier est lu depuis votre disque, reconstruit en plus léger, puis réenregistré sur celui-ci, sans aucun téléversement, file d’attente ni copie distante. Fermez l’onglet et il ne reste rien.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Quel niveau de compression choisir ?',
          answer:
            '« Recommandé » convient à la plupart des documents — il équilibre taille et lisibilité. Choisissez « Extrême » quand vous devez respecter une limite de pièce jointe et que chaque kilo-octet compte, et « Léger » quand le fichier sera souvent imprimé ou zoomé.',
        },
        {
          question: 'Pourquoi mon PDF est-il devenu plus lourd ?',
          answer:
            'Certains PDF sont déjà fortement optimisés — par exemple les fichiers enregistrés par d’autres compresseurs. Réencoder leurs images peut alors ajouter des octets au lieu d’en retirer. Dans ce cas, gardez l’original ou essayez le niveau « Léger », qui recompresse moins agressivement.',
        },
        {
          question: 'Pourquoi la première compression est-elle plus longue ?',
          answer:
            'La première exécution télécharge le moteur de compression (environ 15 Mo) sur votre appareil. Il est ensuite mis en cache, donc les compressions suivantes démarrent instantanément — et fonctionnent même hors ligne.',
        },
      ],
    },
    'protect-pdf': {
      metaTitle: 'Protéger un PDF par mot de passe — AES-256 | CoolPDF',
      metaDescription:
        'Chiffrez un PDF avec AES-256 et contrôlez les permissions d’impression, de copie et de modification — localement dans votre navigateur. Gratuit.',
      heading: 'Protéger PDF',
      intro:
        'Ajoutez un chiffrement par mot de passe AES-256 à votre PDF et décidez précisément de ce que les destinataires peuvent en faire. Tout se passe sur votre propre appareil.',
      button: 'Protéger PDF',
      passwordLabel: 'Mot de passe (au moins 6 caractères)',
      confirmLabel: 'Confirmer le mot de passe',
      passwordTooShort: 'Le mot de passe doit contenir au moins 6 caractères.',
      passwordMismatch: 'Les mots de passe ne correspondent pas.',
      permissionsHeading: 'Permissions des destinataires',
      printingLabel: 'Impression',
      printFull: 'Autorisée',
      printLow: 'Basse qualité uniquement',
      printNone: 'Non autorisée',
      allowCopying: 'Autoriser la copie de texte et d’images',
      allowModifying: 'Autoriser la modification du document',
      allowAnnotating: 'Autoriser les commentaires et le remplissage de formulaires',
      allowAssembling: 'Autoriser l’insertion, la rotation et la suppression de pages',
      allowAccessibility: 'Autoriser l’extraction de texte pour les lecteurs d’écran',
      stepsHeading: 'Comment protéger un PDF',
      steps: [
        'Ajoutez le PDF à protéger en le déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Choisissez un mot de passe d’au moins 6 caractères et saisissez-le deux fois pour le confirmer.',
        'Définissez les permissions accordées aux destinataires après l’ouverture du fichier — impression, copie, modification, et plus encore.',
        'Cliquez sur « Protéger PDF » et téléchargez le fichier chiffré. Gardez le mot de passe en lieu sûr — il est impossible de le récupérer.',
      ],
      privacyHeading: 'Chiffrez vos documents sans les révéler — ni dévoiler le mot de passe',
      privacyText:
        'Protéger un PDF par mot de passe est généralement la dernière étape avant l’envoi d’un document sensible : une fiche de paie pour un employé, un relevé bancaire pour un comptable, un certificat médical pour un assureur. Recourir à un outil sur serveur pour cette dernière étape va à l’encontre du but recherché — l’original non protégé voyage sur Internet, et vous confiez le mot de passe choisi à une infrastructure que vous ne contrôlez pas. CoolPDF effectue le chiffrement entièrement sur votre appareil. Le fichier est lu localement, chiffré avec AES-256 dans l’onglet de votre navigateur, puis réenregistré directement sur votre disque. Le mot de passe saisi ne traverse jamais le réseau — il n’existe aucun serveur pour le recevoir. L’outil est donc sûr pour les documents confidentiels, même sur un ordinateur professionnel ou un Wi-Fi public. À la fermeture de l’onglet, le fichier comme le mot de passe ont disparu.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Quelle est la force du chiffrement ?',
          answer:
            'CoolPDF utilise AES-256, le chiffrement le plus fort défini par la norme PDF — le même niveau que celui des applications gouvernementales et bancaires. Sans le mot de passe, le contenu ne peut pas être lu.',
        },
        {
          question: 'Que se passe-t-il si j’oublie le mot de passe ?',
          answer:
            'Il n’existe aucune option de récupération — c’est précisément le principe d’un chiffrement fort. CoolPDF ne voit ni ne stocke jamais votre mot de passe, conservez-le donc en lieu sûr, par exemple dans un gestionnaire de mots de passe.',
        },
        {
          question: 'Les permissions sont-elles respectées par tous les lecteurs PDF ?',
          answer:
            'Les lecteurs conformes — dont Adobe Acrobat, Chrome et macOS Preview — respectent les restrictions d’impression, de copie et de modification. Il s’agit d’un mécanisme de politique plutôt que d’un DRM : considérez-les comme une demande ferme, pas comme une garantie.',
        },
      ],
    },
    'unlock-pdf': {
      metaTitle: 'Déverrouiller un PDF en ligne — Gratuit et local | CoolPDF',
      metaDescription:
        'Supprimez la protection par mot de passe des PDF qui vous appartiennent, directement dans votre navigateur. Gratuit, sans inscription.',
      heading: 'Déverrouiller PDF',
      intro:
        'Supprimez le mot de passe d’un PDF qui vous appartient pour qu’il s’ouvre sans en demander. Le déchiffrement s’effectue localement — ni le fichier ni le mot de passe ne quittent votre appareil.',
      legalNote: 'Déverrouillez uniquement des PDF qui vous appartiennent ou que vous êtes autorisé à modifier.',
      passwordLabel: 'Mot de passe actuel (si nécessaire)',
      button: 'Déverrouiller PDF',
      stepsHeading: 'Comment déverrouiller un PDF',
      steps: [
        'Ajoutez le PDF protégé par mot de passe en le déposant sur la zone de téléversement, ou cliquez pour parcourir.',
        'Saisissez le mot de passe du document, si nécessaire.',
        'Cliquez sur « Déverrouiller PDF » — la protection est supprimée localement en quelques secondes.',
        'Téléchargez le PDF déverrouillé. Il s’ouvre désormais dans n’importe quel lecteur, sans mot de passe.',
      ],
      privacyHeading: 'Supprimez des mots de passe sans confier le fichier',
      privacyText:
        'Déverrouiller un PDF est souvent une question de confort : un vieux relevé bancaire archivé avec un mot de passe que vous en avez assez de taper, un contrat scanné que vous devez fusionner ou annoter, un document que vous souhaitez protéger à nouveau plus tard avec un meilleur mot de passe. Avec un outil en ligne classique, la suppression de cette protection commence par le téléversement du fichier encore protégé — et du mot de passe — sur le serveur d’un inconnu. CoolPDF supprime la protection là où le fichier réside déjà. Le déchiffrement se déroule entièrement dans l’onglet de votre navigateur : le document est lu depuis votre propre disque, déverrouillé avec le mot de passe saisi localement, puis réenregistré sans qu’un seul octet ne traverse le réseau. Aucun téléversement à intercepter, aucune trace de votre mot de passe, aucune copie laissée derrière. La fermeture de l’onglet efface toute trace des deux.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'J’ai oublié le mot de passe. CoolPDF peut-il le craquer ?',
          answer:
            'Non. CoolPDF ne supprime la protection que si vous connaissez le mot de passe actuel — ce n’est pas un outil de piratage, et le chiffrement AES-256 ne peut pas être raisonnablement cassé par essais successifs.',
        },
        {
          question: 'Est-il légal de déverrouiller un PDF ?',
          answer:
            'Oui — pour les documents qui vous appartiennent ou que vous êtes autorisé à modifier, comme vos propres relevés archivés. Supprimer la protection de fichiers sur lesquels vous n’avez aucun droit peut enfreindre la loi ou des contrats, c’est pourquoi cette page affiche un rappel.',
        },
        {
          question: 'Le déverrouillage modifie-t-il le document ?',
          answer:
            'Non. Seule la couche de chiffrement est supprimée — chaque page, image et annotation reste exactement comme dans l’original.',
        },
      ],
    },
    'watermark-pdf': {
      metaTitle: 'Ajouter un filigrane à un PDF — texte ou image | CoolPDF',
      metaDescription:
        'Apposez un filigrane texte ou image sur chaque page de votre PDF — en mosaïque ou centré, opacité réglable — directement dans votre navigateur. Gratuit.',
      heading: 'Filigrane PDF',
      intro:
        'Apposez un filigrane texte ou image sur chaque page de votre PDF — en mosaïque diagonale ou centré, avec la taille, la couleur et l’opacité de votre choix. Tout s’exécute sur votre propre appareil.',
      button: 'Ajouter le filigrane',
      typeLabel: 'Type de filigrane',
      typeText: 'Texte',
      typeImage: 'Image (PNG ou JPG)',
      textLabel: 'Texte du filigrane',
      textPlaceholder: 'ex. CONFIDENTIEL',
      fontSizeLabel: 'Taille de police',
      colorLabel: 'Couleur du texte',
      opacityLabel: 'Opacité',
      layoutLabel: 'Placement',
      layoutTile: 'Mosaïque — répété en diagonale sur chaque page',
      layoutCenter: 'Centré — un seul tampon par page',
      scaleLabel: 'Taille de l’image (relative à la largeur de la page)',
      stepsHeading: 'Comment ajouter un filigrane à un PDF',
      steps: [
        'Ajoutez le PDF à filigraner en le faisant glisser sur la zone de téléversement, ou cliquez pour parcourir vos fichiers.',
        'Choisissez un filigrane texte ou image. Pour un texte, saisissez le libellé et choisissez la taille et la couleur ; pour une image, téléversez un PNG ou un JPG et réglez sa taille.',
        'Ajustez l’opacité et choisissez le placement — mosaïque diagonale sur chaque page ou tampon unique centré — puis cliquez sur « Ajouter le filigrane ».',
        'Téléchargez le PDF filigrané. Le fichier d’origine reste intact sur votre appareil.',
      ],
      privacyHeading: 'Filigranez des documents sensibles sans les téléverser',
      privacyText:
        'Apposer un filigrane sur un PDF est souvent la dernière étape avant de partager un document sensible : un projet de contrat marqué confidentiel, un aperçu de design au nom de votre studio, une copie de pièce d’identité réservée à un usage unique. Avec un outil en ligne classique, cet original non protégé est d’abord téléversé sur un serveur, avant même que le filigrane ne le touche. CoolPDF fait l’inverse. Les filigranes texte sont dessinés avec les polices de votre appareil — c’est pourquoi le chinois, l’arabe ou les émojis fonctionnent aussi bien que le français —, convertis en image, puis tamponnés sur les pages directement dans l’onglet de votre navigateur. Les images ne voyagent pas non plus. Rien n’est téléversé, mis en file d’attente ou stocké ailleurs, ce qui rend l’outil sûr pour des maquettes inédites, des documents sous NDA et des fichiers personnels. Fermez l’onglet et toute trace disparaît.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Puis-je filigraner avec du texte chinois, arabe ou des émojis ?',
          answer:
            'Oui. Les filigranes texte sont dessinés avec les polices de votre appareil et intégrés comme image : toutes les langues et tous les symboles fonctionnent, pas seulement l’alphabet latin auquel les polices PDF classiques sont limitées.',
        },
        {
          question: 'Quelle différence entre mosaïque et centré ?',
          answer:
            'La mosaïque répète le filigrane en diagonale sur toute la page, ce qui le rend difficile à rogner — idéal pour les mentions de confidentialité. Le mode centré place une seule copie diagonale au milieu de chaque page, ce qui évoque plutôt un logo.',
        },
        {
          question: 'Quels formats d’image puis-je utiliser comme filigrane ?',
          answer:
            'PNG et JPG. Le PNG est le meilleur choix pour les logos, car il conserve la transparence : le contenu de la page reste visible autour de votre marque. Utilisez le curseur pour dimensionner l’image par rapport à la largeur de la page.',
        },
      ],
    },
    'page-numbers': {
      metaTitle: 'Ajouter des numéros de page à un PDF | CoolPDF',
      metaDescription:
        'Insérez des numéros de page dans votre PDF — six positions, formats « 1 sur N », page de départ au choix — localement dans votre navigateur. Gratuit.',
      heading: 'Numéros de page',
      intro:
        'Ajoutez des numéros de page à votre PDF exactement où vous le souhaitez : six positions, deux formats et un contrôle total sur le début de la numérotation. Le traitement s’effectue entièrement sur votre appareil.',
      button: 'Ajouter les numéros de page',
      positionLabel: 'Position',
      posTopLeft: 'Haut gauche',
      posTopCenter: 'Haut centre',
      posTopRight: 'Haut droite',
      posBottomLeft: 'Bas gauche',
      posBottomCenter: 'Bas centre',
      posBottomRight: 'Bas droite',
      formatLabel: 'Format',
      formatN: 'Numéro seul (1, 2, 3…)',
      formatTotal: 'Numéro et total (1 sur N)',
      totalConnector: 'sur',
      startNumberLabel: 'Premier numéro',
      startPageLabel: 'Commencer la numérotation à la page',
      fontSizeLabel: 'Taille de police',
      stepsHeading: 'Comment ajouter des numéros de page à un PDF',
      steps: [
        'Ajoutez le PDF à numéroter en le faisant glisser sur la zone de téléversement, ou cliquez pour parcourir vos fichiers.',
        'Choisissez l’une des six positions — un coin, ou centré en haut ou en bas — puis le format : le numéro seul, ou le numéro et le total.',
        'Modifiez si besoin le premier numéro, la page où commence la numérotation et la taille de police, puis cliquez sur « Ajouter les numéros de page ».',
        'Téléchargez le PDF numéroté. Le fichier d’origine reste intact sur votre appareil.',
      ],
      privacyHeading: 'Numérotez des documents finalisés sans les téléverser',
      privacyText:
        'L’ajout de numéros de page est souvent la touche finale avant l’envoi d’un document : une thèse pour l’imprimeur, un contrat à signer, un rapport pour le conseil. À ce stade, le fichier est en général abouti et confidentiel — et pourtant, la plupart des outils en ligne exigent d’abord un téléversement. CoolPDF insère les numéros là où le fichier se trouve déjà : sur votre propre appareil. Le PDF est lu par votre navigateur, marqué de numéros à la position et au format choisis, puis enregistré directement sur votre disque. Rien ne traverse le réseau : rien ne peut être intercepté, consigné ou oublié sur un serveur. L’outil est donc sûr pour des dossiers juridiques, médicaux et financiers — et rapide, car il n’y a ni file d’attente de téléversement ni copie traitée à récupérer. Fermez l’onglet et toute trace du document disparaît.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Puis-je sauter la page de couverture ?',
          answer:
            'Oui. Réglez « Commencer la numérotation à la page » sur 2 (ou une page ultérieure) et les premières pages restent vierges. Combinez avec « Premier numéro » si la numérotation visible doit commencer à 1 — ou poursuivez une numérotation existante.',
        },
        {
          question: 'Que montre le format « 1 sur N » ?',
          answer:
            'Il affiche le numéro courant et le nombre total de pages du document, par exemple « 3 of 12 ». Le total compte toujours toutes les pages du fichier, y compris celles non numérotées au début.',
        },
        {
          question: 'Les numéros vont-ils chevaucher mon contenu ?',
          answer:
            'Les numéros sont placés dans la marge, à 24 points du bord. La plupart des documents laissent cette zone libre, mais si votre contenu va jusqu’au bord, choisissez une position du côté opposé ou une taille de police plus petite.',
        },
      ],
    },
    'pdf-to-markdown': {
      metaTitle: 'Convertir un PDF en Markdown en ligne gratuit | CoolPDF',
      metaDescription:
        'Transformez le texte d’un PDF en Markdown propre — titres, paragraphes et listes détectés automatiquement — localement dans votre navigateur. Gratuit.',
      heading: 'PDF en Markdown',
      intro:
        'Transformez le texte de votre PDF en Markdown propre et structuré — titres, paragraphes et listes détectés automatiquement, en-têtes et pieds de page supprimés. La conversion s’effectue entièrement dans votre navigateur.',
      button: 'Convertir en Markdown',
      scopeLabel: 'Pages',
      scopeAll: 'Toutes les pages',
      scopeCustom: 'Pages sélectionnées uniquement',
      pagesLabel: 'Pages',
      pagesPlaceholder: 'ex. 1-3, 5',
      stepsHeading: 'Comment convertir un PDF en Markdown',
      steps: [
        'Ajoutez le PDF à convertir en le faisant glisser sur la zone de téléversement, ou cliquez pour parcourir vos fichiers.',
        'Choisissez de convertir toutes les pages ou seulement une plage (par exemple 1-3, 5).',
        'Cliquez sur « Convertir en Markdown » — titres, paragraphes et listes sont détectés automatiquement, et les en-têtes et pieds de page récurrents sont supprimés.',
        'Téléchargez le fichier Markdown et ouvrez-le dans n’importe quel éditeur, application de notes ou générateur de site statique.',
      ],
      privacyHeading: 'Convertissez des documents en Markdown sans les téléverser',
      privacyText:
        'Convertir un PDF en Markdown signifie en général le passer dans un outil d’IA ou un convertisseur en ligne — et téléverser tout le document au passage. C’est un problème quand le fichier est un article en préparation, un rapport interne ou un contrat que vous devez citer. CoolPDF fait l’extraction en local : un moteur PDF exécuté dans votre navigateur lit la couche texte, détecte les titres d’après les tailles de police, reconstruit paragraphes et listes, puis vous remet un fichier Markdown propre. Le document ne quitte jamais votre appareil : rien à intercepter, rien de stocké sur le serveur de quelqu’un d’autre. Cela fonctionne même hors ligne — chargez la page, déconnectez-vous, convertissez. Fermez l’onglet, et le PDF comme le Markdown disparaissent.',
      faqHeading: 'Questions fréquentes',
      faq: [
        {
          question: 'Les images sont-elles extraites aussi ?',
          answer:
            'Non. Le convertisseur n’extrait que le texte — titres, paragraphes et listes. Les images intégrées sont ignorées ; exportez séparément les pages riches en figures si nécessaire (l’outil PDF en JPG peut aider).',
        },
        {
          question: 'Comment les titres sont-ils détectés ?',
          answer:
            'Par la taille de police. La taille la plus fréquente est traitée comme le corps du texte ; les lignes nettement plus grandes deviennent des titres — #, ## ou ### selon l’écart. La détection est heuristique : un rapide contrôle du résultat est toujours une bonne idée.',
        },
        {
          question: 'Pourquoi un message concernant un PDF numérisé ?',
          answer:
            'Les numérisations sont des photos de pages sans véritable couche texte : il n’y a rien à extraire. Passez d’abord le fichier dans un logiciel OCR — une fois la couche texte créée, cet outil pourra le convertir.',
        },
      ],
    },
  },
};
