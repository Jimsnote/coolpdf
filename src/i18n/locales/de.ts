export const de = {
  site: {
    name: 'CoolPDF',
    description: 'Kostenlose PDF-Tools, die Ihre Privatsphäre respektieren',
  },
  nav: {
    home: 'Startseite',
    tools: 'Tools',
    about: 'Über uns',
    faq: 'FAQ',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  languageSwitcher: {
    label: 'Sprache',
  },
  footer: {
    pillars:
      '100 % clientseitige Verarbeitung · Ihre Dateien verlassen nie Ihr Gerät · Keine Registrierung erforderlich',
    pagesHeading: 'Seiten',
    about: 'Über uns',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    faq: 'FAQ',
    github: 'GitHub',
    copyright: '© {year} CoolPDF. Alle Rechte vorbehalten.',
  },
  common: {
    comingSoon: 'Demnächst verfügbar',
  },
  home: {
    metaTitle: 'Kostenlose PDF-Tools, die Ihre Privatsphäre respektieren | CoolPDF',
    metaDescription:
      'PDFs direkt im Browser zusammenfügen, teilen, komprimieren und schützen. 100 % clientseitige Verarbeitung — keine Uploads, keine Registrierung, für immer kostenlos.',
    hero: {
      title: 'Kostenlose PDF-Tools, die Ihre Privatsphäre respektieren',
      subtitle:
        'PDFs direkt in Ihrem Browser zusammenfügen, teilen, komprimieren und schützen. Keine Uploads. Keine Registrierung. Keine Server. Ihre Dateien werden lokal auf Ihrem Gerät verarbeitet — sie berühren niemals das Internet.',
      cta: 'Tools entdecken',
    },
    pillars: {
      heading: 'PDF-Tools ohne Kompromisse bei der Privatsphäre',
      items: [
        {
          title: 'Keine Uploads',
          description:
            'Ihre Dateien verlassen nie Ihr Gerät. Jedes Tool läuft lokal in Ihrem Browser, sodass niemals etwas an einen Server gesendet wird.',
        },
        {
          title: 'Keine Registrierung',
          description:
            'Keine Konten, keine E-Mail-Adressen, kein Warten. Öffnen Sie die Seite und legen Sie sofort los.',
        },
        {
          title: 'Für immer kostenlos',
          description:
            'Jedes Tool ist vollständig kostenlos — ohne Nutzungslimits, ohne Wasserzeichen und ohne Premium-Version.',
        },
      ],
    },
    toolsSection: {
      heading: 'Die Tools',
      subheading:
        'Zwölf unverzichtbare PDF-Tools, die vollständig auf Ihrem eigenen Gerät laufen.',
    },
    why: {
      heading: 'Warum lokale Verarbeitung wichtig ist',
      paragraphs: [
        'Die meisten Online-PDF-Tools verlangen, dass Sie Ihre Dateien auf ihre Server hochladen, bevor überhaupt etwas passiert. Das ist ein seltsamer Tausch, wenn man einmal darüber nachdenkt: Um eine Seite zu drehen oder zwei Dokumente zusammenzufügen, geben Sie die Datei selbst aus der Hand. Und PDFs sind selten banal — es sind Verträge, Steuererklärungen, Krankenakten, Kontoauszüge und Ausweisdokumente. Sobald eine Datei hochgeladen ist, wandert sie durch eine Infrastruktur, die Sie nicht kontrollieren: Webserver, Warteschlangen, temporäre Speicher, Backups. Sie haben keine Möglichkeit zu überprüfen, wann sie wirklich gelöscht wird oder wer in der Zwischenzeit darauf zugreifen kann.',
        'CoolPDF geht den umgekehrten Weg. Statt Ihre Datei zur Verarbeitung zu schicken, bringen wir die Verarbeitung zu Ihrer Datei. Moderne Browser sind bemerkenswert leistungsstark, und WebAssembly ermöglicht es uns, PDF-Engines in Industriequalität direkt im Browser-Tab auszuführen — mit nahezu nativer Geschwindigkeit. Wenn Sie ein CoolPDF-Tool verwenden, wird das Dokument von Ihrem eigenen Gerät gelesen, von Code in Ihrem eigenen Browser verarbeitet und wieder auf Ihrer eigenen Festplatte gespeichert. Zu keinem Zeitpunkt überquert auch nur ein einziges Byte der Datei das Netzwerk.',
        'Dieses Design ist in jeder wichtigen Hinsicht besser. Es ist privater, weil es keinen Upload gibt, der abgefangen oder geleakt werden könnte. Es ist schneller, weil es keinen Umweg über einen Server und keine Warteschlange gibt. Es ist zuverlässiger, weil die Tools auch bei einer instabilen Verbindung weiter funktionieren. Und es ist günstiger im Betrieb — genau deshalb kann CoolPDF wirklich kostenlos sein, ohne Nutzungslimits.',
        'Wir sind überzeugt, dass Dokument-Tools von Anfang an so hätten funktionieren sollen. Ihre Dateien gehören auf Ihr Gerät — und genau dort bleiben sie mit CoolPDF auch.',
      ],
    },
    proof: {
      heading: 'Nehmen Sie nicht einfach unser Wort dafür',
      items: [
        {
          title: 'Gehen Sie offline',
          description:
            'Trennen Sie die Internetverbindung, nachdem diese Seite geladen wurde — jedes Tool funktioniert weiterhin.',
        },
        {
          title: 'Beobachten Sie das Netzwerk',
          description:
            'Öffnen Sie die Entwicklertools (F12) → Netzwerk-Tab, während Sie ein Tool verwenden — null Datei-Uploads.',
        },
        {
          title: 'Prüfen Sie den Code',
          description:
            'Unser Code ist Open Source (AGPL-3.0) — prüfen Sie ihn selbst auf GitHub.',
        },
      ],
    },
  },
  tools: {
    'merge-pdf': {
      name: 'PDF zusammenfügen',
      description: 'Fügen Sie mehrere PDFs in der gewünschten Reihenfolge zu einer einzigen Datei zusammen.',
    },
    'split-pdf': {
      name: 'PDF teilen',
      description: 'Extrahieren Sie einen Seitenbereich oder teilen Sie ein PDF in einzelne Dokumente auf.',
    },
    'compress-pdf': {
      name: 'PDF komprimieren',
      description: 'Verkleinern Sie die Dateigröße und behalten Sie dabei die Qualität, die Sie brauchen.',
    },
    'rotate-pdf': {
      name: 'PDF drehen',
      description: 'Drehen Sie einzelne Seiten oder ein ganzes Dokument in Sekundenschnelle.',
    },
    'organize-pdf': {
      name: 'PDF organisieren',
      description: 'Sortieren, löschen und ordnen Sie Seiten per Drag & Drop neu.',
    },
    'pdf-to-jpg': {
      name: 'PDF in JPG',
      description: 'Wandeln Sie jede PDF-Seite in ein hochwertiges JPG-Bild um.',
    },
    'jpg-to-pdf': {
      name: 'JPG in PDF',
      description: 'Verwandeln Sie JPG-Bilder in ein sauberes, teilbares PDF-Dokument.',
    },
    'protect-pdf': {
      name: 'PDF schützen',
      description: 'Schützen Sie Ihr PDF mit einer Passwortverschlüsselung.',
    },
    'unlock-pdf': {
      name: 'PDF entsperren',
      description: 'Entfernen Sie den Passwortschutz von PDFs, die Ihnen gehören.',
    },
    'watermark-pdf': {
      name: 'PDF mit Wasserzeichen',
      description: 'Versehen Sie jede Seite Ihres Dokuments mit einem Text- oder Bildwasserzeichen.',
    },
    'page-numbers': {
      name: 'Seitenzahlen',
      description: 'Fügen Sie Ihrem PDF Seitenzahlen hinzu — genau dort, wo Sie sie haben möchten.',
    },
    'pdf-to-markdown': {
      name: 'PDF in Markdown',
      description: 'Extrahieren Sie sauberes, strukturiertes Markdown aus jedem PDF.',
    },
  },
  about: {
    metaTitle: 'Über uns | CoolPDF',
    metaDescription:
      'CoolPDF ist ein kostenloses Open-Source-PDF-Toolkit, das jede Datei lokal in Ihrem Browser verarbeitet. Erfahren Sie, warum wir es so gebaut haben.',
    heading: 'Über CoolPDF',
    sections: [
      {
        title: 'Unsere Mission',
        paragraphs: [
          'CoolPDF gibt es, um alltägliche PDF-Arbeit — Zusammenfügen, Teilen, Komprimieren, Schützen — für alle kostenlos, sofort verfügbar und privat zu machen. Wir glauben, dass Sie Ihre Dokumente niemals gegen Bequemlichkeit eintauschen sollten. Deshalb haben wir ein Toolkit gebaut, bei dem die Dateien bei Ihnen bleiben und die Tools in Ihren Browser kommen.',
        ],
      },
      {
        title: 'Warum wir es so gebaut haben',
        paragraphs: [
          'Die meisten Online-PDF-Tools verlangen, dass Sie Ihre Dateien auf einen Server hochladen, bevor irgendetwas passiert. Das bedeutet, dass Verträge, Steuererklärungen, Ausweisdokumente und Krankenakten durch eine Infrastruktur laufen, die Sie nicht kontrollieren — Server, Warteschlangen und Backups, die von jemand anderem betrieben werden, unter Datenschutzerklärungen, die kaum jemand liest.',
          'Moderne Browser sind leistungsstark genug, dass all das nicht mehr nötig ist. CoolPDF kompiliert PDF-Engines in Industriequalität zu WebAssembly und führt sie direkt auf Ihrem Gerät aus. Die Datei verlässt Ihren Computer niemals, weil es schlicht keinen Ort gibt, an den sie gelangen könnte — CoolPDF hat überhaupt keine Upload-Server.',
        ],
      },
      {
        title: 'Nehmen Sie nicht einfach unser Wort dafür',
        paragraphs: [
          'Datenschutzversprechen sind leicht gemacht und schwer zu überprüfen — deshalb ist CoolPDF bewusst so gebaut, dass Sie es selbst nachprüfen können:',
        ],
        list: [
          'Trennen Sie die Internetverbindung, nachdem eine Seite geladen wurde — jedes Tool funktioniert weiterhin, weil nichts von einem Server abhängt.',
          'Öffnen Sie die Entwicklertools Ihres Browsers (F12) und beobachten Sie den Netzwerk-Tab, während Sie ein Tool verwenden — Sie werden null Datei-Uploads sehen.',
          'Lesen Sie den Quellcode. CoolPDF ist Open Source unter AGPL-3.0, sodass jeder genau nachprüfen kann, was mit einer Datei passiert.',
        ],
      },
      {
        title: 'Was wir nicht tun',
        paragraphs: ['Die Liste der Dinge, die CoolPDF nicht tut, ist genauso wichtig wie das, was es tut:'],
        list: [
          'Wir laden Ihre Dateien nicht hoch — es gibt kein Backend, das sie empfangen könnte.',
          'Wir speichern Ihre Dateien nicht — das Schließen des Tabs entfernt jede Spur.',
          'Wir analysieren nicht den Inhalt Ihrer Dokumente.',
          'Wir verlangen weder ein Konto noch eine E-Mail-Adresse oder sonstige persönliche Daten.',
          'Wir erzwingen keine Nutzungslimits, Wasserzeichen oder Premium-Versionen.',
        ],
      },
      {
        title: 'Open Source',
        paragraphs: [
          'CoolPDF ist freie Software, veröffentlicht unter der GNU Affero General Public License v3.0 (AGPL-3.0). Der vollständige Quellcode ist auf GitHub verfügbar — prüfen Sie ihn, auditieren Sie ihn oder beteiligen Sie sich.',
        ],
      },
      {
        title: 'Kontakt',
        paragraphs: [
          'Fragen, Feedback oder Fehlermeldungen? Schreiben Sie uns an support@getcoolpdf.com. Nachrichten werden über Cloudflare Email Routing zugestellt.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Datenschutzerklärung | CoolPDF',
    metaDescription:
      'CoolPDF verarbeitet alle Dateien lokal in Ihrem Browser — wir erhalten, speichern oder sehen Ihre Dokumente niemals. Lesen Sie unsere Datenschutzerklärung.',
    heading: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
    tldr: {
      title: 'Kurzfassung',
      items: [
        'Ihre Dateien werden zu 100 % lokal in Ihrem Browser verarbeitet. Wir erhalten, speichern oder berühren sie niemals.',
        'Kein Konto, keine E-Mail-Adresse, keine persönlichen Daten — niemals.',
        'Wir verwenden Cloudflare Web Analytics, ein cookieloses, datenschutzfreundliches Statistik-Tool.',
        'Wir zeigen Google AdSense-Werbung, um CoolPDF kostenlos zu halten. Google kann Cookies für personalisierte Werbung verwenden, und Sie können widersprechen.',
      ],
    },
    sections: [
      {
        title: '1. Dateien, die Sie verarbeiten',
        paragraphs: [
          'Das ist unser zentrales Versprechen: Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser über WebAssembly und JavaScript. Ihre Dateien werden niemals an unsere Server übertragen, dort gespeichert oder für sie zugänglich. Wir haben technisch keine Möglichkeit, eine von Ihnen verarbeitete Datei einzusehen, zu kopieren oder aufzubewahren — es gibt kein Backend, das sie empfangen könnte. Das Schließen des Browser-Tabs entfernt alle Spuren Ihrer Dokumente.',
        ],
      },
      {
        title: '2. Daten, die wir nicht erheben',
        paragraphs: [
          'CoolPDF hat keine Konten, daher erheben wir weder E-Mail-Adressen noch Passwörter oder Profildaten. Wir erheben keine Datei-Metadaten und führen keine Verarbeitungsprotokolle — ohne Backend gibt es schlicht keinen Ort, an den solche Daten gelangen könnten. Wir fragen nicht nach Ihren persönlichen Daten und wir wollen sie auch nicht.',
        ],
      },
      {
        title: '3. Analyse',
        paragraphs: [
          'Wir verwenden Cloudflare Web Analytics, um den aggregierten Datenverkehr zu verstehen — zum Beispiel, welche Seiten beliebt sind und woher Besucher ungefähr kommen. Das Tool ist cookielos, verfolgt keine einzelnen Nutzer und erhebt keine personenbezogenen Daten. Es kann die von Ihnen verarbeiteten Dateien nicht sehen, weil wir es auch nicht können.',
        ],
      },
      {
        title: '4. Werbung — Google AdSense',
        paragraphs: [
          'CoolPDF finanziert sich über Werbung, die von Google AdSense ausgeliefert wird. Google und seine Partner können Cookies verwenden, um personalisierte Werbung auf Grundlage Ihres Surfverhaltens anzuzeigen. Sie können der personalisierten Werbung jederzeit über die Google Ads Settings (adssettings.google.com) widersprechen. Besucher aus dem EWR und dem Vereinigten Königreich sehen eine Einwilligungsabfrage, bevor personalisierte Werbung angezeigt wird. Details finden Sie in der Datenschutzerklärung von Google unter policies.google.com/privacy.',
        ],
      },
      {
        title: '5. Datensicherheit und Speicherdauer',
        paragraphs: [
          'Da wir Ihre Dateien niemals erhalten, kann ein Angriff auf unsere Infrastruktur sie nicht offenlegen — die beste Datensicherheit sind Daten, die wir nicht haben. Die gesamte Website wird über HTTPS ausgeliefert, und die gesamte Verarbeitung findet in der Sandbox Ihres Browsers statt.',
        ],
      },
      {
        title: '6. Änderungen dieser Erklärung',
        paragraphs: [
          'Wenn wir diese Erklärung ändern, veröffentlichen wir die aktualisierte Version auf dieser Seite mit einem überarbeiteten Datum. Wesentliche Änderungen werden auf der Website hervorgehoben.',
        ],
      },
      {
        title: '7. Kontakt',
        paragraphs: [
          'Fragen zu dieser Erklärung? Schreiben Sie an support@getcoolpdf.com.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Nutzungsbedingungen | CoolPDF',
    metaDescription:
      'Die Nutzungsbedingungen von CoolPDF — kostenlose, browserbasierte PDF-Tools ohne Konten und ohne Uploads.',
    heading: 'Nutzungsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
    sections: [
      {
        title: '1. Annahme der Bedingungen',
        paragraphs: [
          'Durch die Nutzung von CoolPDF stimmen Sie diesen Bedingungen zu. Wenn Sie nicht zustimmen, verwenden Sie die Website einfach nicht.',
        ],
      },
      {
        title: '2. Leistungsbeschreibung',
        paragraphs: [
          'CoolPDF stellt kostenlose PDF-Tools bereit, die vollständig in Ihrem Browser laufen. Der Dienst wird „wie besehen“ und „je nach Verfügbarkeit“ kostenlos bereitgestellt, ohne Konten und ohne Nutzungslimits.',
        ],
      },
      {
        title: '3. Pflichten der Nutzer',
        paragraphs: [
          'Sie sind allein verantwortlich für die Dateien, die Sie verarbeiten, und dafür, dass Sie das Recht haben, sie zu verwenden. Sie verpflichten sich, CoolPDF nicht für rechtswidrige Zwecke zu nutzen.',
        ],
      },
      {
        title: '4. Geistiges Eigentum',
        paragraphs: [
          'Der CoolPDF-Quellcode ist Open Source unter der GNU Affero General Public License v3.0 (AGPL-3.0). Ihre Dateien bleiben vollständig Ihre — wir erheben keine Ansprüche an irgendetwas, das Sie verarbeiten.',
        ],
      },
      {
        title: '5. Gewährleistungsausschluss',
        paragraphs: [
          'CoolPDF wird ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten. Bewahren Sie immer ein Backup wichtiger Dokumente auf.',
        ],
      },
      {
        title: '6. Haftungsbeschränkung',
        paragraphs: [
          'Soweit gesetzlich zulässig, haften CoolPDF und seine Mitwirkenden nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung des Dienstes entstehen.',
        ],
      },
      {
        title: '7. Änderungen dieser Bedingungen',
        paragraphs: [
          'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Die aktuelle Version ist stets auf dieser Seite veröffentlicht, und die fortgesetzte Nutzung der Website gilt als Zustimmung.',
        ],
      },
      {
        title: '8. Kontakt',
        paragraphs: ['Fragen zu diesen Bedingungen? Schreiben Sie an support@getcoolpdf.com.'],
      },
    ],
  },
  faq: {
    metaTitle: 'Häufig gestellte Fragen | CoolPDF',
    metaDescription:
      'Ist CoolPDF wirklich kostenlos? Werden Dateien hochgeladen? Funktioniert es offline? Antworten auf die häufigsten Fragen zu CoolPDF.',
    heading: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Ist CoolPDF wirklich kostenlos?',
        answer:
          'Ja. Jedes Tool ist vollständig kostenlos — ohne Nutzungslimits, ohne Wasserzeichen und ohne Premium-Version. Unaufdringliche Werbung sorgt dafür, dass CoolPDF für alle kostenlos bleibt.',
      },
      {
        question: 'Muss ich ein Konto erstellen oder mich registrieren?',
        answer:
          'Nein. CoolPDF verlangt niemals ein Konto, eine E-Mail-Adresse oder persönliche Daten. Öffnen Sie die Website und legen Sie los — das ist der gesamte Einstieg.',
      },
      {
        question: 'Werden meine Dateien auf Ihre Server hochgeladen?',
        answer:
          'Nein. CoolPDF verarbeitet jede Datei lokal in Ihrem Browser mithilfe von WebAssembly. Ihre Dateien verlassen Ihr Gerät niemals — es gibt überhaupt keine Uploads, weil es keinen Server gibt, der sie empfangen könnte.',
      },
      {
        question: 'Kann CoolPDF meine Dokumente einsehen, speichern oder darauf zugreifen?',
        answer:
          'Nein. Es gibt kein Backend, daher haben wir technisch keine Möglichkeit, Ihre Dateien einzusehen, zu speichern oder darauf zuzugreifen. Sie können das selbst überprüfen: Öffnen Sie die Entwicklertools Ihres Browsers (F12) und beobachten Sie den Netzwerk-Tab, während Sie ein Tool verwenden — null Datei-Uploads. Unser Code ist außerdem Open Source, sodass ihn jeder prüfen kann.',
      },
      {
        question: 'Funktioniert CoolPDF offline?',
        answer:
          'Ja. Sobald eine Seite geladen ist, läuft jedes Tool vollständig auf Ihrem Gerät — die Tools funktionieren also auch dann weiter, wenn Sie die Internetverbindung trennen. Ein vollständiges Offline-Caching der gesamten Website über einen Service Worker steht auf unserer Roadmap.',
      },
      {
        question: 'Ist es sicher, vertrauliche Dokumente mit CoolPDF zu verarbeiten?',
        answer:
          'Ja. Da Dateien lokal verarbeitet werden und Ihr Gerät niemals verlassen, eignet sich CoolPDF für Verträge, Krankenakten und Finanzunterlagen. Der gesamte Code ist Open Source unter AGPL-3.0, sodass Sicherheitsforscher genau prüfen können, was mit einer Datei passiert.',
      },
      {
        question: 'Wie verdient CoolPDF Geld?',
        answer:
          'Wir zeigen Werbung, die von Google AdSense ausgeliefert wird. Werbung ist unsere einzige Einnahmequelle, und sie ermöglicht es, dass jedes Tool ohne Nutzungslimits kostenlos bleibt.',
      },
      {
        question: 'Welche Browser werden unterstützt?',
        answer:
          'CoolPDF funktioniert in aktuellen Versionen von Chrome, Edge, Firefox und Safari. Jeder moderne Browser mit WebAssembly-Unterstützung — und das sind praktisch alle — kann jedes Tool ausführen.',
      },
      {
        question: 'Ist CoolPDF Open Source?',
        answer:
          'Ja. CoolPDF wird unter der GNU Affero General Public License v3.0 (AGPL-3.0) veröffentlicht. Der vollständige Quellcode ist auf GitHub verfügbar, und Beiträge sind willkommen.',
      },
      {
        question: 'Welche PDF-Tools bietet CoolPDF an?',
        answer:
          'CoolPDF bietet zwölf Tools: PDF zusammenfügen, PDF teilen, PDF komprimieren, PDF drehen, PDF organisieren, PDF in JPG, JPG in PDF, PDF schützen, PDF entsperren, PDF mit Wasserzeichen, Seitenzahlen und PDF in Markdown. Alle laufen lokal in Ihrem Browser.',
      },
    ],
  },
  factSummary:
    'CoolPDF ist ein kostenloses, browserbasiertes PDF-Toolkit. Im Gegensatz zu herkömmlichen Online-PDF-Tools verarbeitet CoolPDF alle Dateien lokal auf dem Gerät des Nutzers mithilfe von WebAssembly — Dateien werden niemals auf einen Server hochgeladen. Die Tools benötigen kein Konto, keine E-Mail-Adresse und keine Registrierung und sind vollständig kostenlos, ohne Nutzungslimits. Dadurch eignet sich CoolPDF auch für vertrauliche Dokumente wie Verträge, Krankenakten und Finanzunterlagen.',
  toolUi: {
    privacyNote:
      'Ihre Dateien werden lokal in Ihrem Browser verarbeitet — es wird nichts hochgeladen.',
    dropPdfs: 'PDF-Dateien hierher ziehen oder klicken, um zu durchsuchen',
    dropImages: 'JPG- oder PNG-Bilder hierher ziehen oder klicken, um zu durchsuchen',
    moveUp: 'Nach oben',
    moveDown: 'Nach unten',
    remove: 'Entfernen',
    processing: 'Wird verarbeitet…',
    download: 'Herunterladen',
    readyTitle: 'Ihre Datei ist fertig',
    errors: {
      onlyPdf: 'Es werden nur PDF-Dateien unterstützt.',
      onlyImages: 'Es werden nur JPG- und PNG-Bilder unterstützt.',
      tooManyFiles: 'Sie können höchstens {max} Dateien hinzufügen.',
      fileTooLarge: '„{name}“ ist zu groß — das Limit beträgt {max} MB pro Datei.',
      minFiles: 'Bitte fügen Sie mindestens {min} Dateien hinzu.',
      encrypted: 'Diese PDF ist passwortgeschützt und kann hier nicht verarbeitet werden.',
      corrupted: 'Diese Datei konnte nicht als gültige PDF gelesen werden.',
      invalidRange: 'Ungültiger Seitenbereich. Verwenden Sie Zahlen und Bindestriche, z. B. 1-3, 5.',
      rangeOutOfBounds: 'Der Seitenbereich überschreitet die Seitenzahl des Dokuments.',
      generic: 'Beim Verarbeiten Ihrer Datei ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'PDF zusammenfügen — kostenlos, ohne Upload, ohne Anmeldung | CoolPDF',
      metaDescription:
        'Kombinieren Sie bis zu 20 PDFs direkt in Ihrem Browser zu einer Datei. Sortieren, zusammenfügen, herunterladen — Dateien verlassen nie Ihr Gerät. Kostenlos, ohne Anmeldung.',
      heading: 'PDF zusammenfügen',
      intro:
        'Kombinieren Sie mehrere PDF-Dokumente zu einer einzigen Datei — genau in der Reihenfolge, die Sie wählen. Das Zusammenfügen läuft vollständig auf Ihrem eigenen Gerät.',
      button: 'PDF zusammenfügen',
      stepsHeading: 'So fügen Sie PDF-Dateien zusammen',
      steps: [
        'Fügen Sie zwei oder mehr PDF-Dateien hinzu, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um Ihr Gerät zu durchsuchen (2–20 Dateien).',
        'Bringen Sie die Dateien mit den Auf- und Ab-Pfeilen in die gewünschte Reihenfolge — dies wird die Seitenreihenfolge des fertigen Dokuments.',
        'Klicken Sie auf „PDF zusammenfügen“. Die Dokumente werden lokal kombiniert, was meist nur wenige Sekunden dauert.',
        'Laden Sie Ihre zusammengefügte PDF herunter. Die Originaldateien bleiben unverändert auf Ihrem Gerät.',
      ],
      privacyHeading: 'Verträge und Kontoauszüge zusammenfügen, ohne sie hochzuladen',
      privacyText:
        'PDFs, die sich lohnen zusammenzufügen, sind oft genau die, die Sie am wenigsten teilen möchten: unterschriebene Verträge, Kontoauszüge, Arztberichte, Bewerbungsunterlagen. Bei herkömmlichen Online-Tools wird jede dieser Dateien auf einen fremden Server hochgeladen, bevor das Zusammenfügen überhaupt beginnt. CoolPDF funktioniert umgekehrt: Der Code kommt in Ihren Browser, die Dateien bleiben auf Ihrem Gerät — nichts wird übertragen, in eine Warteschlange gestellt oder anderweitig gespeichert. Das macht das Tool sicher genug für den Arbeitslaptop, öffentliches WLAN oder Dokumente unter NDA. Es bedeutet auch: keine künstlichen Limits — Ihr Computer erledigt die Arbeit, also gibt es keine Serverkosten, die man Ihnen weiterberechnen müsste. Schließen Sie den Tab, und jede Spur Ihrer Dokumente ist verschwunden.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Gibt es ein Limit, wie viele PDFs ich zusammenfügen kann?',
          answer:
            'Sie können 2 bis 20 PDF-Dateien gleichzeitig zusammenfügen. Jede Datei darf bis zu 100 MB groß sein (50 MB auf Mobilgeräten) — deutlich mehr, als Alltagsdokumente benötigen.',
        },
        {
          question: 'Verändert das Zusammenfügen die Qualität meiner PDFs?',
          answer:
            'Nein. Die Seiten werden exakt so in das neue Dokument kopiert, wie sie sind — keine Neukomprimierung, kein Rendering, keine Wasserzeichen. Text bleibt markierbar und Links funktionieren weiter.',
        },
        {
          question: 'Werden meine Dateien auf einen Server hochgeladen?',
          answer:
            'Niemals. Das Zusammenfügen läuft vollständig in Ihrem Browser. Sie können nach dem Laden der Seite sogar die Internetverbindung trennen — das Tool funktioniert weiter.',
        },
      ],
    },
    'split-pdf': {
      metaTitle: 'PDF teilen — kostenlos, Seiten lokal extrahieren | CoolPDF',
      metaDescription:
        'Seiten extrahieren, nach Bereichen teilen oder eine PDF alle N Seiten zerlegen — alles in Ihrem Browser. Dateien verlassen nie Ihr Gerät. Kostenlos, ohne Anmeldung, ohne Wasserzeichen.',
      heading: 'PDF teilen',
      intro:
        'Extrahieren Sie jede Seite als eigene Datei, ziehen Sie individuelle Bereiche heraus oder zerlegen Sie ein Dokument in Stücke von N Seiten. Alles geschieht lokal in Ihrem Browser.',
      button: 'PDF teilen',
      modeLabel: 'Teilungsmodus',
      modeAll: 'Alle Seiten extrahieren',
      modeRanges: 'Nach Bereichen teilen',
      modeEveryN: 'Alle N Seiten teilen',
      rangesLabel: 'Seitenbereiche',
      rangesPlaceholder: 'z. B. 1-3, 5-8',
      everyNLabel: 'Seiten pro Datei',
      stepsHeading: 'So teilen Sie eine PDF',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie teilen möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Wählen Sie einen Modus: jede Seite einzeln, eigene Bereiche wie 1-3, 5-8 oder ein Stück alle N Seiten.',
        'Klicken Sie auf „PDF teilen“. Jeder Teil wird in Sekunden lokal auf Ihrem Gerät erstellt.',
        'Laden Sie das Ergebnis herunter — eine einzelne PDF, wenn nur ein Teil entstanden ist, sonst ein ZIP-Archiv mit allen Teilen.',
      ],
      privacyHeading: 'Vertrauliche Dokumente teilen — ohne Umweg über die Cloud',
      privacyText:
        'Eine PDF zu teilen geht oft darum, nur einen Teil weiterzugeben — eine einzelne Rechnung aus einem Buchhaltungsexport, ein Kapitel aus einem Scan, die relevanten Seiten eines Vertrags. Ironischerweise verlangen die meisten Online-Tools, dass Sie dafür zuerst das ganze Dokument auf ihre Server hochladen. CoolPDF macht diesen Umweg überflüssig: Das Teilen geschieht direkt in Ihrem Browser-Tab, auf Ihrem eigenen Rechner. Das Dokument wird lokal gelesen, zerlegt und gespeichert — kein Byte davon überquert das Netzwerk. Das ist sicher genug für Steuerunterlagen, Personalakten und juristische Dokumente. Und es ist schnell, weil es keine Upload-Warteschlange gibt. Wenn Sie den Tab schließen, bleibt nichts zurück.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Wie extrahiere ich nur bestimmte Seiten?',
          answer:
            'Wählen Sie „Nach Bereichen teilen“ und geben Sie die gewünschten Seiten ein, z. B. 1-3, 5-8. Jeder Bereich wird eine eigene PDF, und alle Teile werden zusammen in einer ZIP-Datei heruntergeladen.',
        },
        {
          question: 'Verliert meine PDF beim Teilen an Qualität?',
          answer:
            'Nein. Die Seiten werden unverändert in die neuen Dokumente kopiert — Text, Bilder, Links und Formulare bleiben exakt erhalten. Nichts wird neu komprimiert oder mit einem Wasserzeichen versehen.',
        },
        {
          question: 'Gibt es ein Limit bei Seitenzahl oder Dateigröße?',
          answer:
            'Dateien bis 100 MB (50 MB auf Mobilgeräten) werden unterstützt, ohne Limit bei der Seitenzahl. Weil Ihr eigenes Gerät die Arbeit macht, dauern sehr große Dokumente einfach etwas länger.',
        },
      ],
    },
    'rotate-pdf': {
      metaTitle: 'PDF drehen — kostenlos, Seiten lokal ausrichten | CoolPDF',
      metaDescription:
        'Drehen Sie alle oder nur ausgewählte Seiten um 90°, 180° oder 270° — direkt in Ihrem Browser. Ohne Upload, ohne Anmeldung, ohne Wasserzeichen.',
      heading: 'PDF drehen',
      intro:
        'Richten Sie seitliche Scans und kopfstehende Seiten in Sekunden gerade. Drehen Sie das ganze Dokument oder nur ausgewählte Seiten um 90°, 180° oder 270°.',
      button: 'PDF drehen',
      angleLabel: 'Drehwinkel (im Uhrzeigersinn)',
      scopeLabel: 'Anwenden auf',
      scopeAll: 'Alle Seiten',
      scopeSelected: 'Nur ausgewählte Seiten',
      pagesLabel: 'Seiten',
      pagesPlaceholder: 'z. B. 1, 3, 5-8',
      stepsHeading: 'So drehen Sie PDF-Seiten',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie korrigieren möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Wählen Sie einen Drehwinkel — 90°, 180° oder 270° im Uhrzeigersinn.',
        'Entscheiden Sie, ob jede Seite oder nur bestimmte gedreht werden sollen (z. B. 1, 3, 5-8), und klicken Sie auf „PDF drehen“.',
        'Laden Sie die gedrehte PDF herunter. Nicht ausgewählte Seiten bleiben exakt wie zuvor.',
      ],
      privacyHeading: 'Scans geraderücken, ohne sie irgendwohin zu schicken',
      privacyText:
        'Gedrehte Seiten stammen meist von einem Scanner oder der Handykamera: unterschriebene Formulare, Ausweisdokumente, Quittungen, handschriftliche Notizen. Genau diese Dateien sollten nicht auf fremde Server wandern, nur um aufrecht gedreht zu werden. Bei CoolPDF geschieht die Drehung dort, wo die Datei bereits ist — in Ihrem Browser. Die Ausrichtung wird lokal angepasst und das Ergebnis direkt auf Ihrem Gerät gespeichert: kein Upload, keine Kopie auf einer fremden Festplatte, keine Speicherrichtlinie, der Sie vertrauen müssten. Die Änderung ist außerdem dauerhaft und standardkonform — das Dokument öffnet sich danach in jedem PDF-Reader, auf jedem Gerät, bei jedem Empfänger korrekt.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Kann ich nur einzelne Seiten drehen?',
          answer:
            'Ja. Wählen Sie „Nur ausgewählte Seiten“ und geben Sie die zu drehenden Seiten ein, z. B. 1, 3, 5-8. Alle anderen Seiten behalten ihre ursprüngliche Ausrichtung.',
        },
        {
          question: 'Ist die Drehung dauerhaft?',
          answer:
            'Ja. Die Drehung wird in die PDF selbst geschrieben, sodass die Seiten in jedem PDF-Reader korrekt angezeigt werden — nicht nur in dem, mit dem Sie die Datei ansehen.',
        },
        {
          question: 'Verändert das Drehen den Inhalt meiner Seiten?',
          answer:
            'Nein. Es ändert sich nur die Seitenausrichtung; der Inhalt bleibt unberührt. Text bleibt scharf, Bilder behalten ihre Auflösung, und nichts wird neu komprimiert.',
        },
      ],
    },
    'jpg-to-pdf': {
      metaTitle: 'JPG in PDF umwandeln — kostenlos, lokal, ohne Upload | CoolPDF',
      metaDescription:
        'Wandeln Sie JPG- und PNG-Bilder direkt in Ihrem Browser in eine saubere A4-PDF um. Anpassen, füllen oder Originalgröße — Dateien verlassen nie Ihr Gerät. Kostenlos, ohne Anmeldung.',
      heading: 'JPG in PDF',
      intro:
        'Wandeln Sie bis zu 20 JPG- oder PNG-Bilder in eine einzige A4-PDF um — ideal für Scans, Quittungen und Foto-Dokumente. Die Umwandlung läuft vollständig auf Ihrem Gerät.',
      button: 'In PDF umwandeln',
      orientationLabel: 'Seitenausrichtung',
      orientationAuto: 'Auto (nach dem ersten Bild)',
      orientationPortrait: 'Hochformat',
      orientationLandscape: 'Querformat',
      fitLabel: 'Bildplatzierung',
      fitFit: 'Einpassen — ganzes Bild sichtbar, mit Rändern',
      fitFill: 'Füllen — Seite ausfüllen, Ränder beschneiden',
      fitOriginal: 'Original — Originalgröße, zentriert',
      stepsHeading: 'So wandeln Sie Bilder in PDF um',
      steps: [
        'Fügen Sie bis zu 20 JPG- oder PNG-Bilder hinzu, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Wählen Sie die Seitenausrichtung: Auto folgt dem Seitenverhältnis des ersten Bildes, oder erzwingen Sie Hoch- bzw. Querformat.',
        'Legen Sie fest, wie Bilder platziert werden — einpassen mit Rändern, Seite füllen oder Originalgröße — und klicken Sie auf „In PDF umwandeln“.',
        'Laden Sie Ihre PDF herunter — ein Bild pro Seite im A4-Format.',
      ],
      privacyHeading: 'Fotos in PDFs verwandeln, ohne ein einziges Pixel hochzuladen',
      privacyText:
        'Fotos und Scans sind meist persönlich: Passkopien, Belege für die Steuererklärung, Bilder von Whiteboards, handschriftliche Briefe. Ein typischer Konverter lädt jedes Bild auf einen Server hoch, wandelt es dort um und gibt Ihnen einen Download-Link zurück — Ihre Bilder liegen dann auf Infrastruktur, die Sie nicht kontrollieren. CoolPDF erledigt dieselbe Aufgabe vollständig auf Ihrem Gerät. Die Bilder werden von Ihrem Browser gelesen, auf A4-Seiten angeordnet und als PDF auf Ihrer eigenen Festplatte gespeichert. Nichts wird hochgeladen, also kann auch nichts abhandenkommen, protokolliert oder in einem Trainingsdatensatz landen. Es funktioniert sogar offline: Seite laden, WLAN ausschalten, umwandeln.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Welche Bildformate werden unterstützt?',
          answer:
            'JPG- und PNG-Bilder, bis zu 20 gleichzeitig. Jedes Bild wird eine A4-Seite, in der Reihenfolge, in der Sie die Dateien hinzugefügt haben.',
        },
        {
          question: 'Was ist der Unterschied zwischen Einpassen, Füllen und Original?',
          answer:
            'Einpassen skaliert das Bild so, dass es vollständig sichtbar ist, mit Rändern. Füllen skaliert es so, dass es die ganze Seite bedeckt, und beschneidet die Ränder. Original behält die natürliche Größe des Bildes bei, zentriert auf der Seite.',
        },
        {
          question: 'Verlieren meine Bilder an Qualität?',
          answer:
            'Nein. Bilder werden exakt so eingebettet, wie sie sind — ohne Neukomprimierung. Die PDF verpackt lediglich Ihre originalen Bilddaten: Was Sie im Bild sehen, bekommen Sie in der PDF.',
        },
      ],
    },
  },
};
