export const fr = {
  site: {
    name: 'CoolPDF',
    description: 'Des outils PDF gratuits qui respectent votre vie privée',
  },
  nav: {
    home: 'Accueil',
    tools: 'Outils',
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
    metaTitle: 'Outils PDF gratuits qui respectent votre vie privée | CoolPDF',
    metaDescription:
      'Fusionnez, divisez, compressez et protégez vos PDF directement dans votre navigateur. Traitement 100 % côté client — aucun téléversement, aucune inscription, gratuit pour toujours.',
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
        'Douze outils PDF essentiels, chacun fonctionnant entièrement sur votre propre appareil.',
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
    'pdf-to-jpg': {
      name: 'PDF en JPG',
      description: 'Transformez chaque page PDF en image JPG de haute qualité.',
    },
    'jpg-to-pdf': {
      name: 'JPG en PDF',
      description: 'Convertissez des images JPG en un document PDF propre et facile à partager.',
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
      'CoolPDF est une boîte à outils PDF gratuite et open source qui traite chaque fichier localement dans votre navigateur. Découvrez pourquoi nous l’avons conçue ainsi.',
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
      'CoolPDF traite tous les fichiers localement dans votre navigateur — nous ne recevons, ne stockons ni ne consultons jamais vos documents. Lisez notre politique de confidentialité.',
    heading: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    tldr: {
      title: 'En bref',
      items: [
        'Vos fichiers sont traités à 100 % localement dans votre navigateur. Nous ne les recevons, ne les stockons et ne les touchons même jamais.',
        'Pas de compte, pas d’adresse e-mail, pas d’informations personnelles — jamais.',
        'Nous utilisons Cloudflare Web Analytics, un outil de statistiques sans cookie et respectueux de la vie privée.',
        'Nous affichons des publicités Google AdSense pour que CoolPDF reste gratuit. Google peut utiliser des cookies pour les publicités personnalisées, et vous pouvez vous y opposer.',
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
          'Nous utilisons Cloudflare Web Analytics pour comprendre le trafic global — par exemple, quelles pages sont populaires et d’où viennent approximativement les visiteurs. Cet outil fonctionne sans cookie, ne suit pas les utilisateurs individuels et ne collecte aucune donnée personnelle. Il ne peut pas voir les fichiers que vous traitez, car nous ne le pouvons pas non plus.',
        ],
      },
      {
        title: '4. Publicité — Google AdSense',
        paragraphs: [
          'CoolPDF est financé par la publicité diffusée via Google AdSense. Google et ses partenaires peuvent utiliser des cookies pour diffuser des publicités personnalisées en fonction de votre historique de navigation. Vous pouvez désactiver la publicité personnalisée à tout moment via Google Ads Settings (adssettings.google.com). Les visiteurs de l’EEE et du Royaume-Uni verront un bandeau de gestion du consentement avant l’affichage de toute publicité personnalisée. Pour plus de détails, consultez la politique de confidentialité de Google à l’adresse policies.google.com/privacy.',
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
          'Oui. Chaque outil est entièrement gratuit, sans limite d’utilisation, sans filigrane et sans version premium. Ce sont des publicités discrètes qui permettent à CoolPDF de rester gratuit pour tous.',
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
          'Nous affichons des publicités diffusées par Google AdSense. La publicité est notre seule source de revenus, et c’est elle qui permet à chaque outil de rester gratuit, sans limite d’utilisation.',
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
          'CoolPDF propose douze outils : Fusionner PDF, Diviser PDF, Compresser PDF, Faire pivoter PDF, Organiser PDF, PDF en JPG, JPG en PDF, Protéger PDF, Déverrouiller PDF, Filigrane PDF, Numéros de page et PDF en Markdown. Tous fonctionnent localement dans votre navigateur.',
      },
    ],
  },
  factSummary:
    'CoolPDF est une boîte à outils PDF gratuite, utilisable dans le navigateur. Contrairement aux outils PDF en ligne traditionnels, CoolPDF traite tous les fichiers localement sur l’appareil de l’utilisateur grâce à WebAssembly — les fichiers ne sont jamais téléversés sur aucun serveur. Les outils n’exigent ni compte, ni adresse e-mail, ni inscription, et sont entièrement gratuits, sans limite d’utilisation. CoolPDF convient ainsi aux documents confidentiels tels que les contrats, les dossiers médicaux et les relevés financiers.',
};
