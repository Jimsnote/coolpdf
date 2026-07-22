export const de = {
  site: {
    name: 'CoolPDF',
    description: 'Kostenlose PDF-Tools, die Ihre Privatsphäre respektieren',
  },
  nav: {
    home: 'Startseite',
    tools: 'Tools',
    guides: 'Guides',
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
    metaTitle: 'Gratis PDF-Tools, die Ihre Privatsphäre schützen | CoolPDF',
    metaDescription:
      'PDFs direkt im Browser zusammenfügen, teilen, komprimieren und schützen. 100 % lokal — keine Uploads, keine Registrierung, für immer kostenlos.',
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
        '{count} unverzichtbare PDF-Tools, die vollständig auf Ihrem eigenen Gerät laufen.',
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
    'remove-pages': {
      name: 'Seiten entfernen',
      description: 'Unerwünschte Seiten mit wenigen Klicks aus einem PDF löschen.',
    },
    'extract-pages': {
      name: 'Seiten extrahieren',
      description: 'Ausgewählte Seiten eines PDF als neues Dokument speichern.',
    },
    'reorder-pages': {
      name: 'Seiten neu ordnen',
      description: 'Seiten per Drag & Drop in genau die gewünschte Reihenfolge ziehen.',
    },
    'docx-to-markdown': {
      name: 'Word zu Markdown',
      description: 'Word-Dokumente in sauberes, KI-fertiges Markdown umwandeln.',
    },
    'xlsx-to-markdown': {
      name: 'Excel zu Markdown',
      description: 'Tabellenblätter in Markdown-Tabellen umwandeln.',
    },
    'extract-images': {
      name: 'Bilder extrahieren',
      description: 'Alle eingebetteten Bilder aus einem PDF herausziehen.',
    },
    'pdf-to-jpg': {
      name: 'PDF in JPG',
      description: 'Wandeln Sie jede PDF-Seite in ein hochwertiges JPG-Bild um.',
    },
    'jpg-to-pdf': {
      name: 'JPG in PDF',
      description: 'Verwandeln Sie JPG-Bilder in ein sauberes, teilbares PDF-Dokument.',
    },
    'heic-to-pdf': {
      name: 'HEIC in PDF',
      description: 'Verwandeln Sie iPhone-HEIC-Fotos in ein sauberes, teilbares PDF-Dokument.',
    },
    'sign-pdf': {
      name: 'Sign PDF',
      description: 'Draw your signature and place it anywhere on a PDF document.',
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
        'Wir können Cloudflare Web Analytics, ein cookieloses, datenschutzfreundliches Statistik-Tool, verwenden, wenn es aktiviert ist.',
        'Wir zeigen möglicherweise Google AdSense-Werbung, um CoolPDF kostenlos zu halten. Falls Werbung aktiviert ist, kann Google Cookies für personalisierte Werbung verwenden, und Sie können widersprechen.',
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
          'Wenn aktiviert, verwenden wir Cloudflare Web Analytics, um den aggregierten Datenverkehr zu verstehen — zum Beispiel, welche Seiten beliebt sind und woher Besucher ungefähr kommen. Das Tool ist cookielos, verfolgt keine einzelnen Nutzer und erhebt keine personenbezogenen Daten. Es kann die von Ihnen verarbeiteten Dateien nicht sehen, weil wir es auch nicht können.',
        ],
      },
      {
        title: '4. Werbung — Google AdSense',
        paragraphs: [
          'CoolPDF zeigt möglicherweise Werbung, die von Google AdSense ausgeliefert wird, um den Dienst kostenlos zu halten. Falls Werbung aktiviert ist, können Google und seine Partner Cookies verwenden, um personalisierte Werbung auf Grundlage Ihres Surfverhaltens anzuzeigen. Sie können der personalisierten Werbung jederzeit über die Google Ads Settings (adssettings.google.com) widersprechen. Bevor personalisierte Werbung aktiviert wird, wird Besuchern aus dem EWR und dem Vereinigten Königreich eine Einwilligungsabfrage angezeigt. Details finden Sie in der Datenschutzerklärung von Google unter policies.google.com/privacy.',
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
          'Ja. Jedes Tool ist vollständig kostenlos — ohne Nutzungslimits, ohne Wasserzeichen und ohne Premium-Version. Falls aktiviert, sorgt unaufdringliche Werbung dafür, dass CoolPDF für alle kostenlos bleibt.',
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
          'Wir zeigen möglicherweise Werbung, die von Google AdSense ausgeliefert wird. Werbung ist unsere geplante Einnahmequelle, und sie ermöglicht es, dass jedes Tool ohne Nutzungslimits kostenlos bleibt.',
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
          'CoolPDF bietet 18 Tools zum Zusammenfügen, Teilen, Komprimieren, Drehen und Organisieren von Seiten, zur Bildkonvertierung, zum Schutz und Entsperren, für Wasserzeichen und Seitenzahlen, zur Markdown-Konvertierung (PDF, Word, Excel) sowie zum Extrahieren von Bildern. Alle laufen lokal in Ihrem Browser.',
      },
    ],
  },
  factSummary:
    'CoolPDF ist ein kostenloses, browserbasiertes PDF-Toolkit. Im Gegensatz zu herkömmlichen Online-PDF-Tools verarbeitet CoolPDF alle Dateien lokal auf dem Gerät des Nutzers mithilfe von WebAssembly — Dateien werden niemals auf einen Server hochgeladen. Die Tools benötigen kein Konto, keine E-Mail-Adresse und keine Registrierung und sind vollständig kostenlos, ohne Nutzungslimits. Dadurch eignet sich CoolPDF auch für vertrauliche Dokumente wie Verträge, Krankenakten und Finanzunterlagen.',
  toolUi: {
    privacyNote:
      'Ihre Dateien werden lokal in Ihrem Browser verarbeitet — es wird nichts hochgeladen.',
    trustChips: ['Keine Uploads', 'Läuft lokal', 'Keine Anmeldung'],
    dropPdfs: 'PDF-Dateien hierher ziehen oder klicken, um zu durchsuchen',
    dropImages: 'JPG- oder PNG-Bilder hierher ziehen oder klicken, um zu durchsuchen',
    dropDocx: 'Word-Dokument (.docx) hierher ziehen oder klicken, um zu durchsuchen',
    dropExcel: 'Excel-Arbeitsmappe (.xlsx/.xls) hierher ziehen oder klicken, um zu durchsuchen',
    dropHeic: 'HEIC- oder HEIF-Fotos hierher ziehen oder klicken, um zu durchsuchen',
    moveUp: 'Nach oben',
    moveDown: 'Nach unten',
    remove: 'Entfernen',
    processing: 'Wird verarbeitet…',
    download: 'Herunterladen',
    readyTitle: 'Ihre Datei ist fertig',
    engineLoading: 'Die PDF-Engine wird geladen…',
    engineLoadingProgress: 'Die PDF-Engine wird geladen… {loaded} von {total} MB',
    engineFirstRun: 'Beim ersten Mal werden etwa {size} MB heruntergeladen; danach ist sie auf Ihrem Gerät zwischengespeichert.',
    errors: {
      onlyPdf: 'Es werden nur PDF-Dateien unterstützt.',
      onlyImages: 'Es werden nur JPG- und PNG-Bilder unterstützt.',
      onlyDocx: 'Nur .docx Word-Dokumente werden unterstützt (das alte .doc-Format nicht).',
      onlyExcel: 'Nur Excel-Arbeitsmappen (.xlsx/.xls) werden unterstützt.',
      onlyHeic: 'Es werden nur HEIC- und HEIF-Fotos unterstützt.',
      noImages: 'In diesem PDF wurden keine eingebetteten Bilder gefunden.',
      tooManyFiles: 'Sie können höchstens {max} Dateien hinzufügen.',
      fileTooLarge: '„{name}“ ist zu groß — das Limit beträgt {max} MB pro Datei.',
      minFiles: 'Bitte fügen Sie mindestens {min} Dateien hinzu.',
      encrypted: 'Diese PDF ist passwortgeschützt und kann hier nicht verarbeitet werden.',
      corrupted: 'Diese Datei konnte nicht als gültige PDF gelesen werden.',
      invalidRange: 'Ungültiger Seitenbereich. Verwenden Sie Zahlen und Bindestriche, z. B. 1-3, 5.',
      rangeOutOfBounds: 'Der Seitenbereich überschreitet die Seitenzahl des Dokuments.',
      noPages: 'Mindestens eine Seite muss im Dokument verbleiben.',
      wrongPassword: 'Das Passwort ist falsch. Bitte versuchen Sie es erneut.',
      notEncrypted: 'Diese PDF ist nicht passwortgeschützt — es gibt nichts zu entsperren.',
      noText: 'Diese PDF scheint aus gescannten Bildern zu bestehen und enthält keinen extrahierbaren Text.',
      tooManyPages: 'Dieses Dokument hat zu viele Seiten für dieses Tool — das Limit beträgt {max} Seiten.',
      filesSkipped: '{count} nicht unterstützte Datei(en) wurden übersprungen.',
      totalTooLarge: 'Die ausgewählten Dateien sind zusammen zu groß — das Gesamtlimit beträgt {max} MB.',
      generic: 'Beim Verarbeiten Ihrer Datei ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      corruptedFile:
        'Diese Datei konnte nicht gelesen werden — sie ist möglicherweise beschädigt oder in einem Format, das dieses Tool nicht unterstützt.',
      engineDownload:
        'Die PDF-Engine konnte nicht heruntergeladen werden (Netzwerkfehler). Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut — es wurde keine Datei übertragen.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'PDF zusammenfügen — kostenlos, ohne Upload | CoolPDF',
      metaDescription:
        'Kombinieren Sie bis zu 20 PDFs direkt in Ihrem Browser zu einer Datei. Sortieren, zusammenfügen, herunterladen — Dateien verlassen nie Ihr Gerät.',
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
        'Seiten extrahieren, nach Bereichen teilen oder alle N Seiten zerlegen — alles in Ihrem Browser. Dateien verlassen nie Ihr Gerät. Kostenlos, ohne Wasserzeichen.',
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
      metaTitle: 'JPG in PDF umwandeln — kostenlos, ohne Upload | CoolPDF',
      metaDescription:
        'Wandeln Sie JPG- und PNG-Bilder in Ihrem Browser in eine saubere A4-PDF um. Anpassen, füllen oder Originalgröße — Dateien verlassen nie Ihr Gerät.',
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
    'heic-to-pdf': {
      metaTitle: 'HEIC in PDF umwandeln — kostenlos, ohne Upload | CoolPDF',
      metaDescription:
        'Wandeln Sie HEIC-Fotos vom iPhone in Ihrem Browser in eine saubere A4-PDF um. Keine Uploads, keine Anmeldung — Ihre Bilder verlassen nie Ihr Gerät.',
      heading: 'HEIC in PDF',
      intro:
        'Verwandeln Sie bis zu 20 HEIC-Fotos von Ihrem iPhone in eine einzige A4-PDF. Die HEIC-Dekodierung und das Zusammenstellen der PDF laufen beide vollständig auf Ihrem Gerät.',
      button: 'In PDF umwandeln',
      orientationLabel: 'Seitenausrichtung',
      orientationAuto: 'Auto (nach dem ersten Foto)',
      orientationPortrait: 'Hochformat',
      orientationLandscape: 'Querformat',
      fitLabel: 'Bildplatzierung',
      fitFit: 'Einpassen — ganzes Foto sichtbar, mit Rändern',
      fitFill: 'Füllen — Seite ausfüllen, Ränder beschneiden',
      fitOriginal: 'Original — Originalgröße, zentriert',
      decodingProgress: 'Foto {current} von {total} wird dekodiert…',
      decodeError:
        '„{name}“ konnte nicht dekodiert werden — möglicherweise verwendet es eine HEIC-Variante, die dieser Dekoder nicht unterstützt. Teilen Sie das Foto stattdessen als JPEG von Ihrem iPhone.',
      stepsHeading: 'So wandeln Sie HEIC-Fotos in PDF um',
      steps: [
        'Fügen Sie bis zu 20 HEIC- oder HEIF-Fotos hinzu, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Wählen Sie die Seitenausrichtung: Auto folgt dem Seitenverhältnis Ihres ersten Fotos, oder erzwingen Sie Hoch- bzw. Querformat.',
        'Legen Sie fest, wie Fotos platziert werden — einpassen mit Rändern, Seite füllen oder Originalgröße — und klicken Sie auf „In PDF umwandeln“.',
        'Laden Sie Ihre PDF herunter — ein Foto pro Seite im A4-Format.',
      ],
      privacyHeading: 'iPhone-Fotos umwandeln, ohne sie irgendwo hochzuladen',
      privacyText:
        'Fotos sind für die meisten von uns die persönlichsten Dateien überhaupt — Familie, Dokumente, Whiteboards, Quittungen. Ein üblicher HEIC-Konverter verlangt, dass Sie jedes Bild auf einen Server hochladen, es dort umwandeln und darauf vertrauen, dass es danach gelöscht wird. CoolPDF erledigt die ganze Aufgabe auf Ihrem Gerät: Eine WebAssembly-Version des libheif-Dekoders läuft in einem Hintergrund-Worker direkt in Ihrem Browser-Tab, wandelt jedes HEIC-Foto in ein JPEG um und verpackt die Ergebnisse in eine A4-PDF — alles lokal. Ihre Bilder berühren nie das Netzwerk, können also nicht protokolliert werden, nicht abhandenkommen und nicht in einem Datensatz landen. Es funktioniert sogar offline, sobald die Seite geladen ist: Flugmodus anschalten und loswandeln.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Was ist HEIC, und warum in PDF umwandeln?',
          answer:
            'HEIC ist seit iOS 11 das Standard-Fotoformat auf iPhones. Es hält Dateien klein, aber viele Apps, Websites und Windows-PCs können es nicht öffnen. PDF dagegen lässt sich überall öffnen — und bündelt viele Fotos in einem einzigen Dokument, das sich leicht teilen oder drucken lässt.',
        },
        {
          question: 'Warum ließ sich eine meiner HEIC-Dateien nicht umwandeln?',
          answer:
            'HEIF ist ein Container, der verschiedene Codecs und Funktionen enthalten kann, und kein Browser-Dekoder unterstützt jede Variante. Fotos, die auf einem iPhone im Standard-HEVC-Format aufgenommen wurden, funktionieren zuverlässig. Falls eine Datei fehlschlägt, öffnen Sie sie auf Ihrem iPhone und teilen Sie sie als JPEG (oder stellen Sie Kamera → Formate → Maximale Kompatibilität ein), und wandeln Sie diese dann um.',
        },
        {
          question: 'Behalten meine Fotos ihre Qualität und Ausrichtung?',
          answer:
            'Ja. Jedes Foto wird in voller Auflösung dekodiert und als hochwertiges JPEG (92 % Qualität) geschrieben, wobei die gespeicherte Drehung automatisch angewendet wird. Die PDF bettet diese Bilder dann ohne weitere Neukomprimierung ein.',
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
      metaTitle: 'PDF-Seiten organisieren — neu anordnen & drehen | CoolPDF',
      metaDescription:
        'Ordnen Sie PDF-Seiten per Drag & Drop neu an, drehen oder löschen Sie Seiten und laden Sie das Ergebnis herunter — alles lokal in Ihrem Browser.',
      heading: 'PDF-Seiten organisieren',
      intro:
        'Ordnen Sie Seiten per Drag & Drop neu an, drehen Sie die seitlichen und entfernen Sie die Seiten, die Sie nicht brauchen. Eine Live-Vorschau jeder Seite macht es einfach — und alles geschieht auf Ihrem Gerät.',
      button: 'Organisierte PDF herunterladen',
      loadingPreviews: 'Seitenvorschauen werden gerendert…',
      loadMorePreviews: 'Weitere Vorschauen laden',
      selectAll: 'Alle auswählen',
      clearSelection: 'Auswahl aufheben',
      deleteSelected: 'Ausgewählte löschen',
      rotateSelected: 'Ausgewählte um 90° drehen',
      reset: 'Zurücksetzen',
      rotatePage: 'Seite um 90° drehen',
      deletePage: 'Seite löschen',
      restorePage: 'Seite wiederherstellen',
      deletedBadge: 'Gelöscht',
      pageLabel: 'Seite {n}',
      keptSummary: '{kept} von {total} Seiten werden beibehalten',
      stepsHeading: 'So organisieren Sie PDF-Seiten',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie neu anordnen möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Ziehen Sie die Seitenminiaturen in die gewünschte Reihenfolge — das Nummern-Badge zeigt immer die ursprüngliche Seitennummer.',
        'Drehen oder löschen Sie einzelne Seiten über die Schaltflächen auf jeder Miniatur, oder wählen Sie mehrere Seiten aus und nutzen Sie die Werkzeugleiste. Gelöschte Seiten lassen sich mit einem Klick wiederherstellen.',
        'Klicken Sie auf „Organisierte PDF herunterladen“. Das neu angeordnete Dokument wird lokal zusammengestellt und auf Ihrem Gerät gespeichert.',
      ],
      privacyHeading: 'Vertrauliche Dokumente Seite für Seite neu anordnen — ganz privat',
      privacyText:
        'Seiten neu anzuordnen ist oft der letzte Schritt, bevor ein Dokument rausgeht: die unterschriebene Seite an den Anfang eines Vertrags ziehen, leere Scans aus einer Steuerakte entfernen, das eine Kapitel, um das ein Kunde gebeten hat, ganz nach oben holen. Das sind keine Dateien, die auf einen fremden Server gehören. CoolPDF rendert die Seitenvorschauen und baut das Dokument vollständig in Ihrem Browser neu zusammen — die Datei wird von Ihrer eigenen Festplatte gelesen, und das Ergebnis wird wieder dort gespeichert, ohne Upload dazwischen. Es gibt keine Warteschlange, keine temporäre Kopie auf fremdem Speicher und keine Speicherrichtlinie, der Sie vertrauen müssten. Das macht das Tool sicher für juristische Dokumente, Krankenakten und Personalunterlagen — selbst in öffentlichem WLAN. Schließen Sie den Tab, und von Ihrem Dokument bleibt nichts zurück.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Kann ich eine gelöschte Seite rückgängig machen?',
          answer:
            'Ja. Die Löschen-Schaltfläche markiert die Seite nur — sie erscheint abgedunkelt und lässt sich mit einem weiteren Klick wiederherstellen. Seiten werden erst beim Herunterladen weggelassen, und selbst dann bleibt die Originaldatei auf Ihrem Gerät unverändert.',
        },
        {
          question: 'Verliert meine PDF beim Neuordnen an Qualität?',
          answer:
            'Nein. Die Seiten werden exakt so in das neue Dokument kopiert, wie sie sind — kein erneutes Rendern, keine Neukomprimierung. Text bleibt markierbar, Links funktionieren weiter, und Drehungen werden als standardisierte Seiten-Metadaten geschrieben.',
        },
        {
          question: 'Gibt es ein Limit bei Dateigröße oder Seitenzahl?',
          answer:
            'Dateien bis 100 MB (50 MB auf Mobilgeräten) werden unterstützt, ohne Limit bei der Seitenzahl. Bei sehr langen Dokumenten werden die Seitenvorschauen in Stapeln gerendert, damit das Tool reaktionsschnell bleibt.',
        },
      ],
    },
    'remove-pages': {
      metaTitle: 'Seiten aus PDF entfernen – kostenlos online | CoolPDF',
      metaDescription:
        'Unerwünschte Seiten aus einem PDF löschen – visuell markieren, entfernen, herunterladen. 100 % im Browser, keine Uploads, keine Anmeldung.',
      heading: 'Seiten aus PDF entfernen',
      intro:
        'Löschen Sie die Seiten, die Sie nicht brauchen – leere Scans, überflüssige Anhänge, die eine falsche Seite. Jede Seite zeigt eine Live-Vorschau, das bereinigte Dokument wird auf Ihrem Gerät neu erstellt. Die Originaldatei bleibt unverändert.',
      button: 'Seiten entfernen & herunterladen',
      loadingPreviews: 'Seitenvorschauen werden gerendert…',
      loadMorePreviews: 'Weitere Vorschauen laden',
      selectAll: 'Alle auswählen',
      clearSelection: 'Auswahl aufheben',
      deleteSelected: 'Ausgewählte löschen',
      rotateSelected: 'Ausgewählte um 90° drehen',
      reset: 'Zurücksetzen',
      rotatePage: 'Seite um 90° drehen',
      deletePage: 'Seite löschen',
      restorePage: 'Seite wiederherstellen',
      deletedBadge: 'Gelöscht',
      pageLabel: 'Seite {n}',
      keptSummary: '{kept} von {total} Seiten werden beibehalten',
      stepsHeading: 'So entfernen Sie Seiten aus einem PDF',
      steps: [
        'Ziehen Sie das PDF in den Upload-Bereich oder klicken Sie zum Durchsuchen – eine Vorschau aller Seiten erscheint.',
        'Klicken Sie auf das Papierkorb-Symbol jeder Seite, die Sie entfernen möchten, oder wählen Sie mehrere Seiten aus und nutzen Sie „Ausgewählte löschen“. Eine gelöschte Seite ist nur markiert – ein erneuter Klick stellt sie wieder her.',
        'Prüfen Sie den Zähler: Er zeigt, wie viele der gesamten Seiten im neuen Dokument beibehalten werden.',
        'Klicken Sie auf „Seiten entfernen & herunterladen“. Das bereinigte PDF wird lokal erstellt und als removed.pdf gespeichert.',
      ],
      privacyHeading: 'Sensible Seiten entfernen – ohne die Datei irgendwohin zu senden',
      privacyText:
        'Eine Seite zu entfernen geht oft darum, was Ihre Hände nicht verlassen soll: eine Signaturseite, ein Gehaltszettel, ein Anhang für einen anderen Empfänger. Bei CoolPDF verlässt die Datei Ihr Gerät nie – Seiten werden markiert und das Dokument vollständig in Ihrem Browser neu erstellt, ohne Upload und ohne temporäre Kopie auf einem Server. Das macht es sicher für Verträge, medizinische Unterlagen und Personalakten, selbst in öffentlichen WLANs.',
      faqHeading: 'Häufig gestellte Fragen',
      faq: [
        {
          question: 'Kann ich eine entfernte Seite rückgängig machen?',
          answer:
            'Ja, vor dem Herunterladen. Entfernte Seiten sind nur markiert – abgedunkelt mit einem Hinweis – und ein weiterer Klick stellt sie wieder her. Nach dem Herunterladen bleibt Ihre Originaldatei auf der Festplatte unverändert.',
        },
        {
          question: 'Beeinträchtigt das Entfernen von Seiten die Qualität?',
          answer:
            'Nein. Die verbleibenden Seiten werden exakt so in das neue Dokument kopiert – ohne erneutes Rendern und ohne erneute Komprimierung.',
        },
        {
          question: 'Was sind die Grenzen?',
          answer:
            'Dateien bis 100 MB (50 MB auf Mobilgeräten), ohne Seitenlimit. Lange Dokumente laden ihre Vorschauen stapelweise, damit das Tool reaktionsschnell bleibt.',
        },
      ],
    },
    'extract-pages': {
      metaTitle: 'Seiten aus PDF extrahieren – kostenlos online | CoolPDF',
      metaDescription:
        'Ausgewählte Seiten eines PDF als neues Dokument speichern – Seiten visuell auswählen und im Browser extrahieren. Keine Uploads, keine Anmeldung.',
      heading: 'Seiten aus PDF extrahieren',
      intro:
        'Ziehen Sie genau die Seiten heraus, die Sie brauchen – ein Kapitel, die Signaturseite, eine einzelne Rechnung – und speichern Sie sie als neues PDF. Alles läuft lokal in Ihrem Browser, das Dokument verlässt Ihr Gerät nie.',
      button: 'Ausgewählte Seiten extrahieren',
      loadingPreviews: 'Seitenvorschauen werden gerendert…',
      loadMorePreviews: 'Weitere Vorschauen laden',
      selectAll: 'Alle auswählen',
      clearSelection: 'Auswahl aufheben',
      deleteSelected: 'Ausgewählte löschen',
      rotateSelected: 'Ausgewählte um 90° drehen',
      reset: 'Zurücksetzen',
      rotatePage: 'Seite um 90° drehen',
      deletePage: 'Seite löschen',
      restorePage: 'Seite wiederherstellen',
      deletedBadge: 'Gelöscht',
      pageLabel: 'Seite {n}',
      keptSummary: '{kept} von {total} Seiten ausgewählt',
      stepsHeading: 'So extrahieren Sie Seiten aus einem PDF',
      steps: [
        'Ziehen Sie das PDF in den Upload-Bereich oder klicken Sie zum Durchsuchen. Eine Live-Vorschau aller Seiten erscheint.',
        'Klicken Sie auf die Miniaturansichten der Seiten, die Sie extrahieren möchten – ausgewählte Seiten erhalten einen hervorgehobenen Rahmen und ein Häkchen.',
        'Prüfen Sie den Zähler, um zu bestätigen, wie viele Seiten ausgewählt sind.',
        'Klicken Sie auf „Ausgewählte Seiten extrahieren“. Die gewählten Seiten werden lokal als neue Datei extracted.pdf gespeichert.',
      ],
      privacyHeading: 'Teilen Sie nur die Seiten, die Sie meinen – privat',
      privacyText:
        'Extrahieren ist die Art, ein Kapitel eines Berichts oder eine Seite eines Vertrags zu senden, ohne den Rest preiszugeben. CoolPDF erledigt Auswahl und Neuaufbau vollständig in Ihrem Browser: Die Quelldatei wird von Ihrer eigenen Festplatte gelesen und das neue PDF wird darauf zurückgeschrieben, ohne dass etwas hochgeladen wird. Kein Konto, keine Serverkopie, keine Spuren nach dem Schließen des Tabs.',
      faqHeading: 'Häufig gestellte Fragen',
      faq: [
        {
          question: 'Kann ich Seiten aus verschiedenen Teilen des Dokuments auswählen?',
          answer:
            'Ja – klicken Sie eine beliebige Kombination von Seiten an. Die extrahierte Datei behält die Seiten in ihrer ursprünglichen Dokumentreihenfolge, und Sie können Miniaturansichten vorher per Drag & Drop neu anordnen.',
        },
        {
          question: 'Beeinträchtigt das Extrahieren die Qualität?',
          answer:
            'Nein. Seiten werden auf Objektebene in die neue Datei kopiert – Text bleibt auswählbar und Bilder behalten ihre ursprüngliche Auflösung.',
        },
        {
          question: 'Was sind die Grenzen?',
          answer:
            'Dateien bis 100 MB (50 MB auf Mobilgeräten), ohne Seitenlimit. Vorschauen werden bei sehr langen Dokumenten stapelweise gerendert.',
        },
      ],
    },
    'reorder-pages': {
      metaTitle: 'PDF-Seiten neu ordnen – kostenlos online | CoolPDF',
      metaDescription:
        'PDF-Seiten per Drag & Drop der Miniaturansichten neu anordnen – mit Live-Vorschau. 100 % im Browser, keine Uploads, keine Anmeldung.',
      heading: 'PDF-Seiten neu ordnen',
      intro:
        'Ziehen Sie Seiten genau in die Reihenfolge, die Sie brauchen – jede Seite zeigt eine Live-Vorschau, sodass nichts an der falschen Stelle landet. Das neu geordnete Dokument wird auf Ihrem Gerät erstellt; nichts wird hochgeladen.',
      button: 'Neu geordnetes PDF herunterladen',
      loadingPreviews: 'Seitenvorschauen werden gerendert…',
      loadMorePreviews: 'Weitere Vorschauen laden',
      selectAll: 'Alle auswählen',
      clearSelection: 'Auswahl aufheben',
      deleteSelected: 'Ausgewählte löschen',
      rotateSelected: 'Ausgewählte um 90° drehen',
      reset: 'Zurücksetzen',
      rotatePage: 'Seite um 90° drehen',
      deletePage: 'Seite löschen',
      restorePage: 'Seite wiederherstellen',
      deletedBadge: 'Gelöscht',
      pageLabel: 'Seite {n}',
      keptSummary: '{kept} von {total} Seiten werden beibehalten',
      stepsHeading: 'So ordnen Sie Seiten in einem PDF neu',
      steps: [
        'Ziehen Sie das PDF in den Upload-Bereich oder klicken Sie zum Durchsuchen – Miniaturansichten aller Seiten erscheinen.',
        'Ziehen Sie eine beliebige Miniaturansicht an ihre neue Position; das Abzeichen zeigt immer die ursprüngliche Seitenzahl, damit Sie nachverfolgen können, was verschoben wurde.',
        'Drehen Sie optional seitlich liegende Seiten oder markieren Sie Seiten zum Entfernen mit den Schaltflächen auf jeder Miniaturansicht.',
        'Klicken Sie auf „Neu geordnetes PDF herunterladen“. Das neue Dokument wird lokal erstellt und als reordered.pdf gespeichert.',
      ],
      privacyHeading: 'Vertrauliche Dokumente auf Ihrem eigenen Gerät neu anordnen',
      privacyText:
        'Neuordnen passiert oft kurz bevor ein Dokument rausgeht – die unterschriebene Seite nach vorn ziehen, gescannte Belege umsortieren, Kapitel mischen. CoolPDF rendert die Vorschauen und erstellt die Datei vollständig in Ihrem Browser: nichts wird hochgeladen, in eine Warteschlange gestellt oder auf einem Server gespeichert. Es ist sicher für juristische, finanzielle und medizinische Dokumente, selbst in öffentlichen WLANs.',
      faqHeading: 'Häufig gestellte Fragen',
      faq: [
        {
          question: 'Woher weiß ich, dass die neue Reihenfolge stimmt?',
          answer:
            'Jede Miniaturansicht zeigt eine Live-Vorschau plus ein Abzeichen mit der ursprünglichen Seitenzahl, sodass Sie immer sehen, woher eine Seite stammt.',
        },
        {
          question: 'Beeinträchtigt das Neuordnen die Qualität?',
          answer:
            'Nein. Seiten werden unverändert in das neue Dokument kopiert – kein erneutes Rendern, keine erneute Komprimierung; Drehungen werden als Standard-Seitenmetadaten gespeichert.',
        },
        {
          question: 'Was sind die Grenzen?',
          answer:
            'Dateien bis 100 MB (50 MB auf Mobilgeräten), ohne Seitenlimit. Sehr lange Dokumente laden Vorschauen stapelweise.',
        },
      ],
    },
    'docx-to-markdown': {
      metaTitle: 'Word zu Markdown — kostenlos, ohne Upload | CoolPDF',
      metaDescription:
        '.docx-Dokumente in sauberes Markdown umwandeln — für Notizen, Wikis und KI-Tools, direkt in Ihrem Browser. Keine Uploads, keine Anmeldung.',
      heading: 'Word zu Markdown',
      intro:
        'Wandeln Sie .docx-Dokumente in sauberes Markdown um — Überschriften, Listen, Tabellen, Fett und Kursiv bleiben erhalten. Perfekt für Obsidian, Wikis und KI-Assistenten. Alles läuft auf Ihrem Gerät.',
      button: 'In Markdown umwandeln',
      stepsHeading: 'So wandeln Sie Word in Markdown um',
      steps: [
        'Ziehen Sie die .docx-Datei in den Upload-Bereich oder klicken Sie zum Durchsuchen.',
        'Klicken Sie auf „In Markdown umwandeln“ — die Konvertierung läuft lokal in Ihrem Browser.',
        'Laden Sie die Datei download.md herunter und fügen Sie sie in Notizen, Wikis oder KI-Tools ein.',
      ],
      privacyHeading: 'Ihre Dokumente bleiben auf Ihrem Gerät',
      privacyText:
        'Markdown ist oft die letzte Station, bevor ein Dokument in einem KI-Assistenten oder einer Wissensdatenbank landet — und genau das sind die Dateien, die nichts auf einem fremden Server zu suchen haben: interne Berichte, Vertragsentwürfe, Besprechungsnotizen. CoolPDF konvertiert vollständig in Ihrem Browser — ohne Upload, ohne Konto und ohne Spuren nach dem Schließen des Tabs.',
      faqHeading: 'Häufig gestellte Fragen',
      faq: [
        {
          question: 'Welche Formatierung bleibt erhalten?',
          answer:
            'Überschriften, Aufzählungen, nummerierte Listen, Tabellen, Fett, Kursiv und Links werden in ihre Markdown-Entsprechungen umgewandelt. Komplexe Layouts (Textfelder, Spalten, schwebende Bilder) werden auf die Lesereihenfolge vereinfacht; eingebettete Bilder werden nicht extrahiert.',
        },
        {
          question: 'Funktioniert es mit .doc-Dateien?',
          answer:
            'Nein — nur das moderne .docx-Format wird unterstützt. Öffnen Sie ältere .doc-Dateien in Word oder LibreOffice und speichern Sie sie zuerst als .docx.',
        },
        {
          question: 'Wofür kann ich das Markdown verwenden?',
          answer:
            'Obsidian, Notion, Wikis, GitHub-READMEs, Static-Site-Generatoren und als saubere Eingabe für ChatGPT, Claude und andere KI-Tools — Markdown ist das Format, das sie am besten lesen.',
        },
      ],
    },
    'xlsx-to-markdown': {
      metaTitle: 'Excel zu Markdown — kostenlos, ohne Upload | CoolPDF',
      metaDescription:
        '.xlsx-Arbeitsmappen in Markdown-Tabellen umwandeln — ein Abschnitt pro Blatt. Läuft vollständig in Ihrem Browser. Keine Uploads, keine Anmeldung.',
      heading: 'Excel zu Markdown',
      intro:
        'Wandeln Sie Excel-Arbeitsmappen in saubere Markdown-Tabellen um — ein Abschnitt pro Blatt, fertig für Docs, Wikis und KI-Tools. Die Konvertierung läuft vollständig auf Ihrem Gerät.',
      button: 'In Markdown umwandeln',
      stepsHeading: 'So wandeln Sie Excel in Markdown um',
      steps: [
        'Ziehen Sie die .xlsx- oder .xls-Datei in den Upload-Bereich oder klicken Sie zum Durchsuchen.',
        'Klicken Sie auf „In Markdown umwandeln“ — die Konvertierung läuft lokal in Ihrem Browser.',
        'Laden Sie die Datei download.md mit einer Markdown-Tabelle pro Tabellenblatt herunter.',
      ],
      privacyHeading: 'Ihre Zahlen bleiben auf Ihrem Gerät',
      privacyText:
        'Tabellen enthalten die Zahlen, die zählen: Budgets, Gehälter, Kundenlisten, Finanzmodelle. Sie auf einem beliebigen Online-Tool umzuwandeln bedeutet, all das auf einen fremden Server zu schicken. CoolPDF liest Ihre Arbeitsmappe und erstellt das Markdown vollständig in Ihrem Browser — nichts wird hochgeladen, und das Schließen des Tabs entfernt jede Spur.',
      faqHeading: 'Häufig gestellte Fragen',
      faq: [
        {
          question: 'Wie werden Tabellenblätter behandelt?',
          answer:
            'Jedes nicht-leere Blatt wird zu einem Abschnitt „## Sheet: <Name>“ mit einer GitHub-Markdown-Tabelle. Die erste nicht-leere Zeile wird zum Tabellenkopf.',
        },
        {
          question: 'Werden Formeln umgewandelt?',
          answer:
            'Zellen werden mit ihren in der Datei gespeicherten berechneten Werten exportiert, nicht mit den Formeln selbst.',
        },
        {
          question: 'Was ist mit .xls-Dateien?',
          answer:
            'Sowohl moderne .xlsx- als auch ältere .xls-Arbeitsmappen werden unterstützt.',
        },
      ],
    },
    'extract-images': {
      metaTitle: 'Bilder aus PDF extrahieren – kostenlos online | CoolPDF',
      metaDescription:
        'Alle eingebetteten Bilder aus einem PDF ziehen – Fotos, Scans, Logos – als JPG/PNG-Dateien. 100 % im Browser, keine Uploads, keine Anmeldung.',
      heading: 'Bilder aus PDF extrahieren',
      intro:
        'Ziehen Sie Fotos, Scans und Logos aus jedem PDF heraus und speichern Sie sie als einzelne JPG- oder PNG-Dateien – Originalpixel, ohne Neukomprimierung. Alles läuft lokal in Ihrem Browser.',
      button: 'Bilder extrahieren',
      scopeLabel: 'Seiten',
      scopeAll: 'Alle Seiten',
      scopeCustom: 'Ausgewählte Seiten',
      pagesLabel: 'Seiten',
      pagesPlaceholder: 'z. B. 1-3, 5',
      progressFound: '{count} Bilder gefunden…',
      stepsHeading: 'So extrahieren Sie Bilder aus einem PDF',
      steps: [
        'Ziehen Sie das PDF in den Upload-Bereich oder klicken Sie zum Durchsuchen.',
        'Begrenzen Sie die Extraktion optional auf bestimmte Seiten (z. B. 1-3, 5).',
        'Klicken Sie auf „Bilder extrahieren“ — die eingebetteten Bilder werden einzeln in Originalqualität herausgezogen.',
        'Laden Sie das Ergebnis herunter: ein einzelnes Bild direkt oder alles gepackt als images.zip.',
      ],
      privacyHeading: 'Die Fotos in Ihren Dokumenten bleiben privat',
      privacyText:
        'Die Bilder in PDFs sind meist der sensibelste Teil: Pass-Scans, Immobilienfotos, Produktbilder unter NDA. CoolPDF entpackt sie vollständig in Ihrem Browser — die Datei wird von Ihrer eigenen Festplatte gelesen und die Bilder werden darauf zurückgespeichert, ohne dass etwas hochgeladen wird.',
      faqHeading: 'Häufig gestellte Fragen',
      faq: [
        {
          question: 'Sind die Bilder in Originalqualität?',
          answer:
            'Es sind exakt die eingebetteten Bilder. Bilder mit Transparenz werden als PNG gespeichert, alle anderen als hochwertiges JPEG (92 %). Die Extraktion skaliert oder komprimiert nie unter das Original.',
        },
        {
          question: 'Warum habe ich weniger Bilder als erwartet bekommen?',
          answer:
            'Die Extraktion zieht eingebettete Rasterbilder heraus. Diagramme und Grafiken, die als Vektor gezeichnet sind, sind keine Rasterbilder und daher nicht enthalten — nutzen Sie PDF zu JPG, um solche Seiten als Bild zu rendern.',
        },
        {
          question: 'Was sind die Grenzen?',
          answer: 'Dateien bis 100 MB (50 MB auf Mobilgeräten), bis zu 200 Bilder pro Dokument.',
        },
      ],
    },
    'pdf-to-jpg': {
      metaTitle: 'PDF in JPG umwandeln — kostenlos, ohne Upload | CoolPDF',
      metaDescription:
        'Wandeln Sie PDF-Seiten in JPG- oder PNG-Bilder um — mit 72, 150 oder 300 DPI, direkt in Ihrem Browser. Dateien verlassen nie Ihr Gerät.',
      heading: 'PDF in JPG umwandeln',
      intro:
        'Wandeln Sie PDF-Seiten in hochwertige JPG- oder PNG-Bilder um. Wählen Sie die Auflösung und die Seiten, die Sie brauchen — die Umwandlung läuft vollständig auf Ihrem Gerät.',
      button: 'In Bilder umwandeln',
      formatLabel: 'Bildformat',
      formatJpg: 'JPG — kleinere Dateien',
      formatPng: 'PNG — verlustfrei, größere Dateien',
      dpiLabel: 'Auflösung',
      dpiHint:
        '300 DPI erzeugt sehr große Bilder und kann bei langen Dokumenten langsam und speicherintensiv sein.',
      dpiReduced:
        'Einige Seiten wurden mit reduzierter Auflösung gerendert, weil sie bei der gewählten DPI das Canvas-Limit Ihres Geräts überschreiten.',
      scopeLabel: 'Seiten',
      scopeAll: 'Alle Seiten',
      scopeCustom: 'Ausgewählte Seiten',
      pagesPlaceholder: 'z. B. 1-3, 5',
      renderingProgress: 'Seite {current} von {total} wird gerendert…',
      stepsHeading: 'So wandeln Sie PDF in JPG um',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie umwandeln möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Wählen Sie das Bildformat — JPG für kleine Dateien, PNG für verlustfreie Qualität — und die Auflösung: 72 DPI für den Bildschirm, 150 für Dokumente, 300 für den Druck.',
        'Wandeln Sie alle Seiten um oder geben Sie einen Bereich wie 1-3, 5 ein, und klicken Sie dann auf „In Bilder umwandeln“.',
        'Laden Sie das Ergebnis herunter — ein einzelnes Bild, wenn Sie eine Seite umgewandelt haben, sonst ein ZIP-Archiv mit einem Bild pro Seite.',
      ],
      privacyHeading: 'Seiten rastern, ohne das Dokument aus der Hand zu geben',
      privacyText:
        'Eine PDF in Bilder zu verwandeln bedeutet meist, dass das Dokument irgendwo visuell auftauchen soll — in einer Präsentation, einer Messaging-App oder einem Upload-Formular, das nur Bilder akzeptiert. Rechnungen, Zeugnisse und offizielle Briefe gehen oft diesen Weg. Bei einem typischen Online-Konverter wird zuerst das ganze Dokument hochgeladen, und die Bilder kommen von einem Server zurück, über den Sie nichts wissen. CoolPDF rendert die Seiten direkt in Ihrem Browser-Tab, mit derselben Klasse von PDF-Engine, die auch Desktop-Reader antreibt. Die Datei überquert nie das Netzwerk: Sie wird von Ihrer Festplatte gelesen, von Ihrem Gerät gerastert und wieder dort gespeichert. Es gibt nichts abzufangen, zu protokollieren oder zu leaken — und das bedeutet auch, dass das Tool im Flugzeug, in der Fabrik oder überall sonst ohne Verbindung weiter funktioniert.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Welche DPI-Zahl sollte ich wählen?',
          answer:
            '72 DPI entspricht der Bildschirmgröße der PDF und reicht für die Nutzung im Web. 150 DPI ist ein guter Mittelweg für Dokumente. 300 DPI ist Druckqualität — scharf, aber die Bilder werden groß und das Rendern dauert länger.',
        },
        {
          question: 'Warum bekomme ich eine ZIP-Datei?',
          answer:
            'Jede PDF-Seite wird ein eigenes Bild. Wenn mehr als eine Seite umgewandelt wird, werden alle Bilder in ein einziges ZIP-Archiv gepackt, damit Sie einen aufgeräumten Download erhalten.',
        },
        {
          question: 'Verliert die Umwandlung in JPG an Qualität?',
          answer:
            'JPG nutzt eine leichte Komprimierung (92 % Qualität), die bei Dokumenten und Fotos visuell nicht vom Original zu unterscheiden ist. Wählen Sie PNG, wenn Sie pixelgenaue, verlustfreie Ausgabe brauchen.',
        },
      ],
    },
    'compress-pdf': {
      metaTitle: 'PDF komprimieren — kostenlos, lokal, ohne Upload | CoolPDF',
      metaDescription:
        'Verkleinern Sie PDF-Dateien mit drei Qualitätsstufen — von 72 bis 300 DPI — direkt in Ihrem Browser. Dateien verlassen nie Ihr Gerät. Kostenlos, ohne Anmeldung.',
      heading: 'PDF komprimieren',
      intro:
        'Verkleinern Sie große PDFs mit drei Komprimierungsstufen auf einen Bruchteil ihrer Größe. Die Komprimierungs-Engine läuft vollständig auf Ihrem eigenen Gerät.',
      button: 'PDF komprimieren',
      levelLabel: 'Komprimierungsstufe',
      levels: {
        extreme: {
          name: 'Extrem',
          description: 'Kleinste Dateigröße, Bilder mit 72 DPI — ideal für E-Mail und Web-Vorschauen.',
        },
        recommended: {
          name: 'Empfohlen',
          description: 'Ausgewogene Größe und Qualität, Bilder mit 150 DPI — richtig für die meisten Dokumente.',
        },
        light: {
          name: 'Schonend',
          description: 'Beste Qualität, Bilder mit 300 DPI — Seiten bleiben druckfertig.',
        },
      },
      processingPages: 'Seite {current} von {total} wird komprimiert…',
      stillWorking: 'Noch in Arbeit — große Dateien können mehrere Minuten dauern. Bitte lassen Sie diesen Tab geöffnet.',
      resultSmaller: '{percent} % kleiner',
      resultLarger:
        '{percent} % größer — diese PDF war bereits gut komprimiert. Probieren Sie die Stufe „Schonend“, um mehr Qualität zu behalten.',
      stepsHeading: 'So komprimieren Sie eine PDF',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie verkleinern möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen (bis zu 150 MB).',
        'Wählen Sie eine Komprimierungsstufe: „Extrem“ für die kleinste Dateigröße, „Empfohlen“ für ein ausgewogenes Verhältnis oder „Schonend“ für Druckqualität.',
        'Klicken Sie auf „PDF komprimieren“. Beim ersten Mal wird die Komprimierungs-Engine einmalig heruntergeladen; danach startet sie sofort.',
        'Laden Sie die komprimierte PDF herunter und vergleichen Sie die Größen — die Originaldatei bleibt unverändert auf Ihrem Gerät.',
      ],
      privacyHeading: 'Große Dokumente komprimieren, ohne sie hochzuladen',
      privacyText:
        'Eine PDF, die komprimiert werden muss, ist meist eine, die gleich irgendwohin geschickt wird — ein gescannter Vertrag an den Anwalt, ein Portfolio an einen Personalverantwortlichen, Arztberichte an eine Versicherung. Ironischerweise verlangen die meisten Online-Komprimierungstools, dass Sie die Datei zuerst auf ihre Server hochladen — das Verkleinern eines sensiblen Dokuments beginnt also damit, es aus der Hand zu geben. CoolPDF komprimiert das Dokument dort, wo es bereits ist: in Ihrem Browser, auf Ihrem eigenen Gerät. Die Komprimierungs-Engine — dasselbe Ghostscript, dem Druckereien seit Jahrzehnten vertrauen — wurde zu WebAssembly kompiliert und wird einmalig auf Ihr Gerät heruntergeladen. Ihre Datei wird von Ihrer Festplatte gelesen, kleiner neu aufgebaut und wieder dort gespeichert — ohne Upload, Warteschlange oder entfernte Kopie an irgendeinem Punkt. Schließen Sie den Tab, und nichts bleibt zurück.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Welche Komprimierungsstufe sollte ich wählen?',
          answer:
            '„Empfohlen“ ist für die meisten Dokumente richtig — sie hält Größe und Lesbarkeit im Gleichgewicht. Wählen Sie „Extrem“, wenn Sie ein E-Mail-Anhangslimit einhalten müssen und jedes Kilobyte zählt, und „Schonend“, wenn die Datei oft gedruckt oder gezoomt wird.',
        },
        {
          question: 'Warum ist meine PDF größer statt kleiner geworden?',
          answer:
            'Manche PDFs sind bereits stark optimiert — etwa Dateien, die von anderen Komprimierungstools gespeichert wurden. Das erneute Kodieren ihrer Bilder kann Bytes hinzufügen statt entfernen. Behalten Sie in diesem Fall das Original, oder probieren Sie die Stufe „Schonend“, die weniger aggressiv komprimiert.',
        },
        {
          question: 'Warum dauert die erste Komprimierung länger?',
          answer:
            'Beim ersten Mal wird die Komprimierungs-Engine (etwa 15 MB) auf Ihr Gerät heruntergeladen. Danach ist sie zwischengespeichert, sodass spätere Komprimierungen sofort starten — und sogar offline funktionieren.',
        },
      ],
    },
    'protect-pdf': {
      metaTitle: 'PDF mit Passwort schützen — AES-256, lokal | CoolPDF',
      metaDescription:
        'Verschlüsseln Sie eine PDF mit AES-256 und steuern Sie Druck-, Kopier- und Bearbeitungsrechte — lokal in Ihrem Browser. Ohne Upload, kostenlos, ohne Anmeldung.',
      heading: 'PDF schützen',
      intro:
        'Versehen Sie Ihre PDF mit einer AES-256-Passwortverschlüsselung und legen Sie genau fest, was Empfänger damit tun dürfen. Alles geschieht auf Ihrem eigenen Gerät.',
      button: 'PDF schützen',
      passwordLabel: 'Passwort (mindestens 6 Zeichen)',
      confirmLabel: 'Passwort bestätigen',
      passwordTooShort: 'Das Passwort muss mindestens 6 Zeichen lang sein.',
      passwordMismatch: 'Die Passwörter stimmen nicht überein.',
      permissionsHeading: 'Berechtigungen für Empfänger',
      printingLabel: 'Drucken',
      printFull: 'Erlaubt',
      printLow: 'Nur in niedriger Qualität',
      printNone: 'Nicht erlaubt',
      allowCopying: 'Kopieren von Text und Bildern erlauben',
      allowModifying: 'Bearbeiten des Dokuments erlauben',
      allowAnnotating: 'Kommentare und Formularausfüllung erlauben',
      allowAssembling: 'Einfügen, Drehen und Löschen von Seiten erlauben',
      allowAccessibility: 'Textextraktion für Screenreader erlauben',
      stepsHeading: 'So schützen Sie eine PDF',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie schützen möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Wählen Sie ein Passwort mit mindestens 6 Zeichen und geben Sie es zur Bestätigung zweimal ein.',
        'Legen Sie die Berechtigungen fest, die Empfänger nach dem Öffnen der Datei erhalten — Drucken, Kopieren, Bearbeiten und mehr.',
        'Klicken Sie auf „PDF schützen“ und laden Sie die verschlüsselte Datei herunter. Bewahren Sie das Passwort sicher auf — es gibt keine Möglichkeit, es wiederherzustellen.',
      ],
      privacyHeading: 'Dokumente verschlüsseln, ohne sie — oder das Passwort — preiszugeben',
      privacyText:
        'Eine PDF mit einem Passwort zu schützen ist meist der letzte Schritt, bevor etwas Sensibles verschickt wird: eine Gehaltsabrechnung an einen Mitarbeiter, ein Kontoauszug an den Steuerberater, ein ärztliches Attest an eine Versicherung. Ein serverbasiertes Tool für diesen letzten Schritt zu nutzen, macht den Zweck zunichte — das ungeschützte Original reist übers Internet, und Sie übergeben das gewählte Passwort an eine Infrastruktur, die Sie nicht kontrollieren. CoolPDF führt die Verschlüsselung vollständig auf Ihrem Gerät durch. Die Datei wird lokal gelesen, mit AES-256 in Ihrem Browser-Tab verschlüsselt und direkt wieder auf Ihrer Festplatte gespeichert. Das eingegebene Passwort überquert nie das Netzwerk — es gibt keinen Server, der es empfangen könnte. Das macht das Tool sicher für vertrauliche Dokumente, selbst auf einem Arbeitslaptop oder in öffentlichem WLAN. Wenn Sie den Tab schließen, sind Datei und Passwort verschwunden.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Wie stark ist die Verschlüsselung?',
          answer:
            'CoolPDF verwendet AES-256, die stärkste Verschlüsselung, die der PDF-Standard definiert — dieselbe Stufe wie bei Behörden- und Banking-Anwendungen. Ohne das Passwort ist der Inhalt nicht lesbar.',
        },
        {
          question: 'Was passiert, wenn ich das Passwort vergesse?',
          answer:
            'Es gibt keine Wiederherstellungsoption — genau das ist der Sinn starker Verschlüsselung. CoolPDF sieht oder speichert Ihr Passwort nie, also bewahren Sie es an einem sicheren Ort auf, etwa in einem Passwort-Manager.',
        },
        {
          question: 'Werden die Berechtigungen von jedem PDF-Reader durchgesetzt?',
          answer:
            'Standardkonforme Reader — darunter Adobe Acrobat, Chrome und macOS Preview — respektieren die Druck-, Kopier- und Bearbeitungsbeschränkungen. Sie sind ein Richtlinienmechanismus, kein DRM — betrachten Sie sie also als starke Bitte, nicht als Garantie.',
        },
      ],
    },
    'unlock-pdf': {
      metaTitle: 'PDF entsperren — Passwort lokal entfernen | CoolPDF',
      metaDescription:
        'Entfernen Sie den Passwortschutz von PDFs, die Ihnen gehören — direkt in Ihrem Browser. Ohne Upload, kostenlos, ohne Anmeldung.',
      heading: 'PDF entsperren',
      intro:
        'Entfernen Sie das Passwort aus einer PDF, die Ihnen gehört, damit sie sich ohne Passwort öffnen lässt. Die Entschlüsselung läuft lokal — weder die Datei noch das Passwort verlässt Ihr Gerät.',
      legalNote: 'Entsperren Sie nur PDFs, die Ihnen gehören oder die Sie ändern dürfen.',
      passwordLabel: 'Aktuelles Passwort (falls erforderlich)',
      button: 'PDF entsperren',
      stepsHeading: 'So entsperren Sie eine PDF',
      steps: [
        'Fügen Sie die passwortgeschützte PDF hinzu, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu durchsuchen.',
        'Geben Sie bei Bedarf das Passwort des Dokuments ein.',
        'Klicken Sie auf „PDF entsperren“ — der Schutz wird lokal in Sekunden entfernt.',
        'Laden Sie die entsperrte PDF herunter. Ab jetzt öffnet sie sich in jedem Reader ohne Passwort.',
      ],
      privacyHeading: 'Passwörter entfernen, ohne die Datei aus der Hand zu geben',
      privacyText:
        'Eine PDF zu entsperren ist meist eine Frage der Bequemlichkeit: ein alter Kontoauszug, den Sie mit einem Passwort archiviert haben, das Sie leid sind einzutippen, ein gescannter Vertrag, den Sie zusammenfügen oder kommentieren müssen, ein Dokument, das Sie später mit einem besseren Passwort wieder schützen möchten. Bei einem typischen Online-Tool beginnt das Entfernen des Schutzes damit, dass Sie die noch geschützte Datei — und das Passwort — auf den Server eines Fremden hochladen. CoolPDF entfernt den Schutz dort, wo die Datei bereits liegt. Die Entschlüsselung geschieht vollständig in Ihrem Browser-Tab: Das Dokument wird von Ihrer eigenen Festplatte gelesen, mit dem lokal eingegebenen Passwort entsperrt und wieder gespeichert, ohne dass ein einziges Byte das Netzwerk überquert. Es gibt keinen Upload, der abgefangen werden könnte, kein Protokoll Ihres Passworts und keine zurückbleibende Kopie. Das Schließen des Tabs löscht jede Spur von beidem.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Ich habe das Passwort vergessen. Kann CoolPDF es knacken?',
          answer:
            'Nein. CoolPDF entfernt den Schutz nur, wenn Sie das aktuelle Passwort kennen — es ist kein Passwort-Knack-Tool, und AES-256-Verschlüsselung lässt sich durch Raten realistisch nicht brechen.',
        },
        {
          question: 'Ist es legal, eine PDF zu entsperren?',
          answer:
            'Ja — für Dokumente, die Ihnen gehören oder die Sie ändern dürfen, etwa Ihre eigenen archivierten Kontoauszüge. Den Schutz von Dateien zu entfernen, an denen Sie keine Rechte haben, kann gegen Gesetze oder Verträge verstoßen — deshalb zeigt diese Seite eine Erinnerung daran.',
        },
        {
          question: 'Verändert das Entsperren das Dokument?',
          answer:
            'Nein. Nur die Verschlüsselungsschicht wird entfernt — jede Seite, jedes Bild und jede Anmerkung bleibt exakt so wie im Original.',
        },
      ],
    },
    'watermark-pdf': {
      metaTitle: 'PDF mit Wasserzeichen versehen — kostenlos | CoolPDF',
      metaDescription:
        'Versehen Sie jede Seite Ihrer PDF mit einem Text- oder Bildwasserzeichen — gefliest oder zentriert, Deckkraft einstellbar — direkt im Browser. Kostenlos.',
      heading: 'PDF mit Wasserzeichen',
      intro:
        'Versehen Sie jede Seite Ihrer PDF mit einem Text- oder Bildwasserzeichen — diagonal gefliest oder zentriert, mit Größe, Farbe und Deckkraft nach Wahl. Alles läuft auf Ihrem eigenen Gerät.',
      button: 'Wasserzeichen hinzufügen',
      typeLabel: 'Art des Wasserzeichens',
      typeText: 'Text',
      typeImage: 'Bild (PNG oder JPG)',
      textLabel: 'Wasserzeichentext',
      textPlaceholder: 'z. B. VERTRAULICH',
      fontSizeLabel: 'Schriftgröße',
      colorLabel: 'Textfarbe',
      opacityLabel: 'Deckkraft',
      layoutLabel: 'Platzierung',
      layoutTile: 'Gefliest — diagonal über jede Seite wiederholt',
      layoutCenter: 'Zentriert — ein Stempel pro Seite',
      scaleLabel: 'Bildgröße (relativ zur Seitenbreite)',
      stepsHeading: 'So versehen Sie eine PDF mit einem Wasserzeichen',
      steps: [
        'Fügen Sie die gewünschte PDF hinzu, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu suchen.',
        'Wählen Sie ein Text- oder Bildwasserzeichen. Bei Text geben Sie den Wortlaut ein und wählen Größe und Farbe; bei einem Bild laden Sie eine PNG- oder JPG-Datei hoch und legen die Größe fest.',
        'Stellen Sie die Deckkraft ein und wählen Sie die Platzierung — diagonal über jede Seite gefliest oder ein einzelner zentrierter Stempel — und klicken Sie dann auf „Wasserzeichen hinzufügen“.',
        'Laden Sie die PDF mit Wasserzeichen herunter. Die Originaldatei bleibt unverändert auf Ihrem Gerät.',
      ],
      privacyHeading: 'Sensible Dokumente mit Wasserzeichen versehen — ohne Upload',
      privacyText:
        'Ein Wasserzeichen ist meist der letzte Schritt, bevor etwas Sensibles geteilt wird: ein als vertraulich gekennzeichneter Vertragsentwurf, eine Designvorschau mit dem Namen Ihres Studios, eine Ausweiskopie, die nur für einen Zweck verwendet werden darf. Bei herkömmlichen Online-Tools wird das ungeschützte Original erst auf einen Server hochgeladen, bevor das Wasserzeichen es überhaupt berührt. CoolPDF arbeitet umgekehrt. Textwasserzeichen werden mit den eigenen Schriften Ihres Geräts gezeichnet — deshalb funktionieren Chinesisch, Arabisch oder Emojis genauso gut wie Deutsch —, in ein Bild umgewandelt und direkt in Ihrem Browser-Tab auf die Seiten gestempelt. Auch Bildwasserzeichen verlassen Ihr Gerät nicht. Nichts wird hochgeladen, zwischengespeichert oder anderswo abgelegt — das macht das Tool sicher für unveröffentlichte Designs, NDA-Material und persönliche Dokumente. Schließen Sie den Tab, und jede Spur ist verschwunden.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Funktionieren Wasserzeichen mit chinesischem, arabischem oder Emoji-Text?',
          answer:
            'Ja. Textwasserzeichen werden mit den eigenen Schriften Ihres Geräts gezeichnet und als Bild eingebettet — jede Sprache und jedes Symbol funktioniert, nicht nur das lateinische Alphabet, auf das klassische PDF-Schriften beschränkt sind.',
        },
        {
          question: 'Was ist der Unterschied zwischen gefliest und zentriert?',
          answer:
            'Gefliest wiederholt das Wasserzeichen diagonal über die ganze Seite — es lässt sich kaum herausschneiden und eignet sich gut für Vertraulichkeitsstempel. Zentriert platziert eine einzelne diagonale Kopie in der Mitte jeder Seite, was eher wie ein Logo wirkt.',
        },
        {
          question: 'Welche Bildformate kann ich als Wasserzeichen verwenden?',
          answer:
            'PNG und JPG. PNG ist für Logos die bessere Wahl, weil die Transparenz erhalten bleibt und der Seiteninhalt um das Zeichen herum sichtbar bleibt. Mit dem Größenregler skalieren Sie das Bild relativ zur Seitenbreite.',
        },
      ],
    },
    'page-numbers': {
      metaTitle: 'Seitenzahlen in PDF einfügen — kostenlos online | CoolPDF',
      metaDescription:
        'Fügen Sie Ihrer PDF Seitenzahlen hinzu — sechs Positionen, Formate wie „1 von N“, freie Startseite — lokal in Ihrem Browser. Kostenlos.',
      heading: 'Seitenzahlen',
      intro:
        'Fügen Sie Ihrer PDF Seitenzahlen genau dort hinzu, wo Sie sie haben möchten: sechs Positionen, zwei Formate und volle Kontrolle über den Beginn der Nummerierung. Die Verarbeitung erfolgt vollständig auf Ihrem Gerät.',
      button: 'Seitenzahlen hinzufügen',
      positionLabel: 'Position',
      posTopLeft: 'Oben links',
      posTopCenter: 'Oben mittig',
      posTopRight: 'Oben rechts',
      posBottomLeft: 'Unten links',
      posBottomCenter: 'Unten mittig',
      posBottomRight: 'Unten rechts',
      formatLabel: 'Format',
      formatN: 'Nur Zahl (1, 2, 3…)',
      formatTotal: 'Zahl und Gesamtzahl (1 von N)',
      totalConnector: 'von',
      startNumberLabel: 'Erste Zahl',
      startPageLabel: 'Nummerierung beginnt auf Seite',
      fontSizeLabel: 'Schriftgröße',
      stepsHeading: 'So fügen Sie einer PDF Seitenzahlen hinzu',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie nummerieren möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu suchen.',
        'Wählen Sie eine der sechs Positionen — eine Ecke oder mittig oben bzw. unten — und das Format: nur die Zahl oder Zahl und Gesamtzahl.',
        'Ändern Sie bei Bedarf die erste Zahl, die Seite, auf der die Nummerierung beginnt, und die Schriftgröße, und klicken Sie dann auf „Seitenzahlen hinzufügen“.',
        'Laden Sie die nummerierte PDF herunter. Die Originaldatei bleibt unverändert auf Ihrem Gerät.',
      ],
      privacyHeading: 'Fertige Dokumente nummerieren — ohne Upload',
      privacyText:
        'Seitenzahlen sind oft der letzte Schliff, bevor ein Dokument herausgeht: eine Abschlussarbeit für den Druck, ein Vertrag zur Unterschrift, ein Bericht fürs Gremium. Zu diesem Zeitpunkt ist die Datei in der Regel fertig und vertraulich — und trotzdem verlangen die meisten Online-Tools zuerst einen Upload. CoolPDF fügt die Zahlen dort ein, wo die Datei bereits liegt: auf Ihrem eigenen Gerät. Die PDF wird von Ihrem Browser gelesen, mit Zahlen an der gewählten Position und im gewählten Format versehen und direkt auf Ihrer Festplatte gespeichert. Nichts überquert das Netzwerk — nichts kann abgefangen, protokolliert oder auf einem Server zurückgelassen werden. Das macht das Tool sicher für Gerichtsunterlagen, medizinische Aufzeichnungen und Finanzberichte — und schnell, weil es weder eine Upload-Warteschlange noch eine verarbeitete Kopie zum Zurückholen gibt. Beim Schließen des Tabs verschwindet jede Spur des Dokuments.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Kann ich das Deckblatt überspringen?',
          answer:
            'Ja. Setzen Sie „Nummerierung beginnt auf Seite“ auf 2 (oder eine spätere Seite), und die vorderen Seiten bleiben frei. Kombinieren Sie das mit „Erste Zahl“, wenn die sichtbare Nummerierung bei 1 beginnen soll — oder setzen Sie eine bestehende Folge fort.',
        },
        {
          question: 'Was zeigt das Format „1 von N“?',
          answer:
            'Es druckt die aktuelle Zahl und die Gesamtseitenzahl des Dokuments, zum Beispiel „3 of 12“. Die Gesamtzahl zählt immer alle Seiten der Datei, einschließlich eventueller nicht nummerierter Seiten am Anfang.',
        },
        {
          question: 'Überlappen die Zahlen meinen Inhalt?',
          answer:
            'Die Zahlen stehen im Seitenrand, 24 Punkte vom Rand entfernt. Die meisten Dokumente halten diesen Bereich frei; falls Ihr Inhalt bis an den Rand reicht, wählen Sie eine Position auf der gegenüberliegenden Seite oder eine kleinere Schriftgröße.',
        },
      ],
    },
    'pdf-to-markdown': {
      metaTitle: 'PDF in Markdown umwandeln — kostenlos online | CoolPDF',
      metaDescription:
        'Wandeln Sie PDF-Text in sauberes Markdown um — Überschriften, Absätze und Listen automatisch erkannt — lokal in Ihrem Browser. Kostenlos.',
      heading: 'PDF in Markdown',
      intro:
        'Wandeln Sie den Text Ihrer PDF in sauberes, strukturiertes Markdown um — Überschriften, Absätze und Listen werden automatisch erkannt, Kopf- und Fußzeilen entfernt. Die Umwandlung läuft vollständig in Ihrem Browser.',
      button: 'In Markdown umwandeln',
      scopeLabel: 'Seiten',
      scopeAll: 'Alle Seiten',
      scopeCustom: 'Nur ausgewählte Seiten',
      pagesLabel: 'Seiten',
      pagesPlaceholder: 'z. B. 1-3, 5',
      stepsHeading: 'So wandeln Sie PDF in Markdown um',
      steps: [
        'Fügen Sie die PDF hinzu, die Sie umwandeln möchten, indem Sie sie auf den Upload-Bereich ziehen, oder klicken Sie, um zu suchen.',
        'Wählen Sie, ob alle Seiten oder nur ein Bereich umgewandelt werden soll (zum Beispiel 1-3, 5).',
        'Klicken Sie auf „In Markdown umwandeln“ — Überschriften, Absätze und Listen werden automatisch erkannt, wiederkehrende Kopf- und Fußzeilen entfernt.',
        'Laden Sie die Markdown-Datei herunter und öffnen Sie sie in einem beliebigen Editor, einer Notiz-App oder einem Static-Site-Generator.',
      ],
      privacyHeading: 'Dokumente in Markdown umwandeln — ohne Upload',
      privacyText:
        'Eine PDF in Markdown umzuwandeln bedeutet meist, sie in ein KI-Tool oder einen Cloud-Konverter zu füttern — und dabei das ganze Dokument hochzuladen. Das ist ein Problem, wenn die Datei ein Entwurf, ein interner Bericht oder ein Vertrag ist, aus dem Sie zitieren möchten. CoolPDF erledigt die Extraktion lokal: Eine PDF-Engine in Ihrem Browser liest die Textebene, erkennt Überschriften an den Schriftgrößen, baut Absätze und Listen wieder auf und übergibt Ihnen eine saubere Markdown-Datei. Das Dokument verlässt Ihr Gerät nie — es gibt nichts abzufangen und nichts, das auf fremden Servern gespeichert würde. Es funktioniert sogar offline: Seite laden, Verbindung trennen, umwandeln. Beim Schließen des Tabs sind sowohl die PDF als auch das Markdown verschwunden.',
      faqHeading: 'Häufige Fragen',
      faq: [
        {
          question: 'Werden auch Bilder extrahiert?',
          answer:
            'Nein. Der Konverter extrahiert nur Text — Überschriften, Absätze und Listen. Eingebettete Bilder werden übersprungen; exportieren Sie bildreiche Seiten bei Bedarf separat (das Tool PDF in JPG kann helfen).',
        },
        {
          question: 'Wie werden Überschriften erkannt?',
          answer:
            'Anhand der Schriftgröße. Die häufigste Größe gilt als Fließtext; deutlich größere Zeilen werden zu Überschriften — #, ## oder ###, je nachdem, wie viel größer sie sind. Die Erkennung ist heuristisch, ein kurzer Blick auf das Ergebnis lohnt sich also immer.',
        },
        {
          question: 'Warum erhalte ich eine Meldung über eine gescannte PDF?',
          answer:
            'Scans sind Fotos von Seiten ohne echte Textebene — es gibt nichts zu extrahieren. Lassen Sie die Datei zuerst durch eine OCR-Software laufen; sobald der Scan eine Textebene hat, kann dieses Tool ihn umwandeln.',
        },
      ],
    },
  },
};
