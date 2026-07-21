export const es = {
  site: {
    name: 'CoolPDF',
    description: 'Herramientas PDF gratuitas que respetan tu privacidad',
  },
  nav: {
    home: 'Inicio',
    tools: 'Herramientas',
    guides: 'Guides',
    about: 'Acerca de',
    faq: 'Preguntas frecuentes',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  languageSwitcher: {
    label: 'Idioma',
  },
  footer: {
    pillars:
      'Procesamiento 100% en tu dispositivo · Tus archivos nunca salen de tu equipo · Sin registro',
    pagesHeading: 'Páginas',
    about: 'Acerca de',
    privacy: 'Política de privacidad',
    terms: 'Términos del servicio',
    faq: 'Preguntas frecuentes',
    github: 'GitHub',
    copyright: '© {year} CoolPDF. Todos los derechos reservados.',
  },
  common: {
    comingSoon: 'Próximamente',
  },
  home: {
    metaTitle: 'Herramientas PDF gratis que respetan tu privacidad | CoolPDF',
    metaDescription:
      'Une, divide, comprime y protege PDF directamente en tu navegador. Procesamiento 100% local: sin subidas, sin registro y gratis para siempre.',
    hero: {
      title: 'Herramientas PDF gratuitas que respetan tu privacidad',
      subtitle:
        'Une, divide, comprime y protege PDF directamente en tu navegador. Sin subidas. Sin registro. Sin servidores. Tus archivos se procesan localmente en tu dispositivo: nunca tocan internet.',
      cta: 'Ver las herramientas',
    },
    pillars: {
      heading: 'Herramientas PDF sin renunciar a tu privacidad',
      items: [
        {
          title: 'Sin subidas',
          description:
            'Tus archivos nunca salen de tu dispositivo. Cada herramienta funciona localmente en tu navegador, así que nada se envía a ningún servidor.',
        },
        {
          title: 'Sin registro',
          description:
            'Sin cuentas, sin correos electrónicos, sin esperas. Abre la página y empieza a trabajar de inmediato.',
        },
        {
          title: 'Gratis para siempre',
          description:
            'Todas las herramientas son completamente gratuitas, sin límites de uso, sin marcas de agua y sin versión premium.',
        },
      ],
    },
    toolsSection: {
      heading: 'Las herramientas',
      subheading:
        'Doce herramientas PDF esenciales, cada una funcionando por completo en tu propio dispositivo.',
    },
    why: {
      heading: 'Por qué importa el procesamiento local',
      paragraphs: [
        'La mayoría de las herramientas PDF en línea te piden subir tus archivos a sus servidores antes de hacer nada. Es un trato extraño si te detienes a pensarlo: para girar una página o unir dos documentos, entregas el archivo entero. Y los PDF rara vez son triviales: son contratos, declaraciones de impuestos, historiales médicos, extractos bancarios y documentos de identidad. Una vez subido, el archivo viaja por una infraestructura que no controlas: servidores web, colas, almacenamiento temporal, copias de seguridad. No tienes forma de comprobar cuándo se elimina de verdad ni quién puede acceder a él mientras tanto.',
        'CoolPDF hace exactamente lo contrario. En lugar de enviar tu archivo al procesamiento, enviamos el procesamiento a tu archivo. Los navegadores modernos son increíblemente potentes, y WebAssembly nos permite ejecutar motores PDF de nivel industrial directamente en la pestaña del navegador, a una velocidad casi nativa. Cuando usas una herramienta de CoolPDF, el documento lo lee tu propio dispositivo, lo transforma código que se ejecuta en tu propio navegador y se guarda de nuevo en tu propio disco. En ningún momento un solo byte del archivo cruza la red.',
        'Este diseño es mejor en todo lo que importa. Es más privado, porque no hay ninguna subida que interceptar o filtrar. Es más rápido, porque no hay viajes de ida y vuelta a un servidor ni colas de espera. Es más fiable, porque las herramientas siguen funcionando incluso con una conexión inestable. Y es más barato de operar, por eso CoolPDF puede ser realmente gratuito y sin límites de uso.',
        'Creemos que así es como las herramientas de documentos deberían haber funcionado desde siempre. Tus archivos pertenecen a tu dispositivo, y ahí es exactamente donde CoolPDF los mantiene.',
      ],
    },
    proof: {
      heading: 'No te fíes solo de nuestra palabra',
      items: [
        {
          title: 'Desconéctate',
          description:
            'Desconéctate de internet después de que cargue esta página: todas las herramientas siguen funcionando.',
        },
        {
          title: 'Observa la red',
          description:
            'Abre las herramientas de desarrollo (F12) → pestaña Red mientras usas una herramienta: cero subidas de archivos.',
        },
        {
          title: 'Audita el código',
          description:
            'Nuestro código es de código abierto (AGPL-3.0): audítalo tú mismo en GitHub.',
        },
      ],
    },
  },
  tools: {
    'merge-pdf': {
      name: 'Unir PDF',
      description: 'Combina varios PDF en un solo archivo, en el orden que quieras.',
    },
    'split-pdf': {
      name: 'Dividir PDF',
      description: 'Extrae un rango de páginas o divide un PDF en documentos separados.',
    },
    'compress-pdf': {
      name: 'Comprimir PDF',
      description: 'Reduce el tamaño del archivo manteniendo la calidad que necesitas.',
    },
    'rotate-pdf': {
      name: 'Rotar PDF',
      description: 'Gira páginas sueltas o un documento completo en segundos.',
    },
    'organize-pdf': {
      name: 'Organizar PDF',
      description: 'Reordena, elimina y reorganiza páginas arrastrando y soltando.',
    },
    'remove-pages': {
      name: 'Eliminar páginas',
      description: 'Elimina las páginas no deseadas de un PDF en pocos clics.',
    },
    'extract-pages': {
      name: 'Extraer páginas',
      description: 'Guarda las páginas seleccionadas de un PDF como nuevo documento.',
    },
    'reorder-pages': {
      name: 'Reordenar páginas',
      description: 'Arrastra las páginas exactamente al orden que quieras.',
    },
    'pdf-to-jpg': {
      name: 'PDF a JPG',
      description: 'Convierte cada página del PDF en una imagen JPG de alta calidad.',
    },
    'jpg-to-pdf': {
      name: 'JPG a PDF',
      description: 'Convierte imágenes JPG en un documento PDF limpio y fácil de compartir.',
    },
    'protect-pdf': {
      name: 'Proteger PDF',
      description: 'Añade cifrado con contraseña para mantener tu PDF privado.',
    },
    'unlock-pdf': {
      name: 'Desbloquear PDF',
      description: 'Elimina la protección con contraseña de los PDF que te pertenecen.',
    },
    'watermark-pdf': {
      name: 'Marca de agua PDF',
      description: 'Estampa texto o una imagen sobre cada página de tu documento.',
    },
    'page-numbers': {
      name: 'Números de página',
      description: 'Añade números de página a tu PDF, exactamente donde quieras.',
    },
    'pdf-to-markdown': {
      name: 'PDF a Markdown',
      description: 'Extrae Markdown limpio y estructurado de cualquier PDF.',
    },
  },
  about: {
    metaTitle: 'Acerca de nosotros | CoolPDF',
    metaDescription:
      'CoolPDF es un conjunto de herramientas PDF gratuito y de código abierto que procesa cada archivo localmente en tu navegador. Descubre por qué.',
    heading: 'Acerca de CoolPDF',
    sections: [
      {
        title: 'Nuestra misión',
        paragraphs: [
          'CoolPDF existe para que el trabajo diario con PDF —unir, dividir, comprimir, proteger— sea gratuito, instantáneo y privado para todo el mundo. Creemos que nunca deberías tener que entregar tus documentos a cambio de comodidad, así que creamos un conjunto de herramientas donde los archivos se quedan contigo y las herramientas llegan a tu navegador.',
        ],
      },
      {
        title: 'Por qué lo construimos así',
        paragraphs: [
          'La mayoría de las herramientas PDF en línea exigen que subas tus archivos a un servidor antes de hacer nada. Eso significa que contratos, declaraciones de impuestos, documentos de identidad e historiales médicos pasan por una infraestructura que no controlas: servidores, colas y copias de seguridad operados por terceros, bajo políticas de privacidad que casi nadie lee.',
          'Los navegadores modernos son lo bastante potentes como para que nada de esto siga siendo necesario. CoolPDF compila motores PDF de nivel industrial a WebAssembly y los ejecuta directamente en tu dispositivo. El archivo nunca sale de tu equipo, porque no tiene adónde ir: CoolPDF no tiene ningún servidor de subidas.',
        ],
      },
      {
        title: 'No te fíes solo de nuestra palabra',
        paragraphs: [
          'Las promesas de privacidad son fáciles de hacer y difíciles de comprobar, así que diseñamos CoolPDF para que sea verificable:',
        ],
        list: [
          'Desconéctate de internet después de que cargue una página: todas las herramientas siguen funcionando, porque nada depende de un servidor.',
          'Abre las herramientas de desarrollo de tu navegador (F12) y observa la pestaña Red mientras usas una herramienta: verás cero subidas de archivos.',
          'Lee el código fuente. CoolPDF es de código abierto bajo AGPL-3.0, así que cualquiera puede auditar exactamente qué ocurre con un archivo.',
        ],
      },
      {
        title: 'Lo que no hacemos',
        paragraphs: ['La lista de cosas que CoolPDF no hace es tan importante como lo que sí hace:'],
        list: [
          'No subimos tus archivos: no existe ningún backend que pudiera recibirlos.',
          'No almacenamos tus archivos: al cerrar la pestaña desaparece todo rastro.',
          'No analizamos el contenido de tus documentos.',
          'No pedimos una cuenta, un correo electrónico ni ningún dato personal.',
          'No imponemos límites de uso, marcas de agua ni planes premium.',
        ],
      },
      {
        title: 'Código abierto',
        paragraphs: [
          'CoolPDF es software libre, publicado bajo la GNU Affero General Public License v3.0 (AGPL-3.0). El código fuente completo está disponible en GitHub: inspecciónalo, audítalo o contribuye.',
        ],
      },
      {
        title: 'Contacto',
        paragraphs: [
          '¿Preguntas, comentarios o informes de errores? Escríbenos a support@getcoolpdf.com. Los mensajes se entregan a través de Cloudflare Email Routing.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Política de privacidad | CoolPDF',
    metaDescription:
      'CoolPDF procesa todos los archivos localmente en tu navegador: nunca recibimos, almacenamos ni accedemos a tus documentos. Lee nuestra política de privacidad.',
    heading: 'Política de privacidad',
    lastUpdated: 'Última actualización: julio de 2026',
    tldr: {
      title: 'En resumen',
      items: [
        'Tus archivos se procesan 100% localmente en tu navegador. Nunca los recibimos, almacenamos ni siquiera tocamos.',
        'Sin cuenta, sin correo electrónico, sin datos personales. Nunca.',
        'Podemos usar Cloudflare Web Analytics, una herramienta de estadísticas sin cookies y respetuosa con la privacidad, cuando está activada.',
        'Es posible que mostremos anuncios de Google AdSense para mantener CoolPDF gratuito. Si los anuncios están activados, Google puede usar cookies para anuncios personalizados, y puedes desactivarlos.',
      ],
    },
    sections: [
      {
        title: '1. Los archivos que procesas',
        paragraphs: [
          'Esta es nuestra promesa fundamental: todo el procesamiento se realiza localmente en tu navegador mediante WebAssembly y JavaScript. Tus archivos nunca se transmiten a nuestros servidores, ni se almacenan en ellos, ni son accesibles desde ellos. No tenemos capacidad técnica para ver, copiar o conservar ningún archivo que proceses: no existe ningún backend que pudiera recibirlo. Al cerrar la pestaña del navegador desaparece todo rastro de tus documentos.',
        ],
      },
      {
        title: '2. Información que no recopilamos',
        paragraphs: [
          'CoolPDF no tiene cuentas, así que no recopilamos correos electrónicos, contraseñas ni datos de perfil. No recopilamos metadatos de archivos ni guardamos registros de procesamiento: sin un backend, simplemente no hay adónde puedan ir esos datos. No pedimos ni queremos tu información personal.',
        ],
      },
      {
        title: '3. Analítica',
        paragraphs: [
          'Cuando está activada, usamos Cloudflare Web Analytics para comprender el tráfico agregado: por ejemplo, qué páginas son populares y de dónde proceden aproximadamente los visitantes. No usa cookies, no rastrea a usuarios individuales y no recopila datos personales. No puede ver los archivos que procesas, porque nosotros tampoco podemos.',
        ],
      },
      {
        title: '4. Publicidad — Google AdSense',
        paragraphs: [
          'Es posible que CoolPDF muestre anuncios servidos a través de Google AdSense para mantener el servicio gratuito. Si la publicidad está activada, Google y sus socios pueden usar cookies para mostrar anuncios personalizados según tu historial de navegación. Puedes desactivar la publicidad personalizada en cualquier momento desde Google Ads Settings (adssettings.google.com). Antes de que se active cualquier publicidad personalizada, se presentará un aviso de gestión del consentimiento a los visitantes del EEE y el Reino Unido. Para más detalles, consulta la política de privacidad de Google en policies.google.com/privacy.',
        ],
      },
      {
        title: '5. Seguridad y conservación de los datos',
        paragraphs: [
          'Como nunca recibimos tus archivos, una brecha en nuestra infraestructura no puede exponerlos: la mayor seguridad de los datos es no tenerlos. Todo el sitio se sirve por HTTPS y todo el procesamiento ocurre dentro del entorno aislado (sandbox) de tu navegador.',
        ],
      },
      {
        title: '6. Cambios en esta política',
        paragraphs: [
          'Si modificamos esta política, publicaremos la versión actualizada en esta página con una fecha revisada. Los cambios importantes se destacarán en el sitio.',
        ],
      },
      {
        title: '7. Contacto',
        paragraphs: [
          '¿Preguntas sobre esta política? Escribe a support@getcoolpdf.com.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Términos del servicio | CoolPDF',
    metaDescription:
      'Los términos del servicio de CoolPDF: herramientas PDF gratuitas que funcionan en tu navegador, sin cuentas y sin subidas.',
    heading: 'Términos del servicio',
    lastUpdated: 'Última actualización: julio de 2026',
    sections: [
      {
        title: '1. Aceptación de los términos',
        paragraphs: [
          'Al usar CoolPDF, aceptas estos términos. Si no estás de acuerdo, simplemente no uses el sitio.',
        ],
      },
      {
        title: '2. Descripción del servicio',
        paragraphs: [
          'CoolPDF ofrece herramientas PDF gratuitas que funcionan por completo en tu navegador. El servicio se proporciona "tal cual" y "según disponibilidad", de forma gratuita, sin cuentas y sin límites de uso.',
        ],
      },
      {
        title: '3. Responsabilidades del usuario',
        paragraphs: [
          'Eres el único responsable de los archivos que procesas y de tener el derecho legal de usarlos. Te comprometes a no utilizar CoolPDF para ningún fin ilegal.',
        ],
      },
      {
        title: '4. Propiedad intelectual',
        paragraphs: [
          'El código fuente de CoolPDF es de código abierto bajo la GNU Affero General Public License v3.0 (AGPL-3.0). Tus archivos siguen siendo enteramente tuyos: no reclamamos ningún derecho sobre lo que procesas.',
        ],
      },
      {
        title: '5. Exclusión de garantías',
        paragraphs: [
          'CoolPDF se proporciona sin garantías de ningún tipo, expresas o implícitas, incluidas la comerciabilidad, la idoneidad para un fin determinado y la no infracción. Guarda siempre una copia de seguridad de los documentos importantes.',
        ],
      },
      {
        title: '6. Limitación de responsabilidad',
        paragraphs: [
          'En la medida máxima permitida por la ley, CoolPDF y sus colaboradores no serán responsables de ningún daño indirecto, incidental o consecuente derivado del uso del servicio.',
        ],
      },
      {
        title: '7. Cambios en estos términos',
        paragraphs: [
          'Podemos actualizar estos términos de vez en cuando. La versión vigente se publica siempre en esta página, y el uso continuado del sitio constituye su aceptación.',
        ],
      },
      {
        title: '8. Contacto',
        paragraphs: ['¿Preguntas sobre estos términos? Escribe a support@getcoolpdf.com.'],
      },
    ],
  },
  faq: {
    metaTitle: 'Preguntas frecuentes | CoolPDF',
    metaDescription:
      '¿CoolPDF es realmente gratis? ¿Se suben los archivos? ¿Funciona sin conexión? Respuestas a las preguntas más habituales sobre CoolPDF.',
    heading: 'Preguntas frecuentes',
    items: [
      {
        question: '¿CoolPDF es realmente gratis?',
        answer:
          'Sí. Todas las herramientas son completamente gratuitas, sin límites de uso, sin marcas de agua y sin versión premium. Si están activados, unos anuncios discretos son lo que mantiene CoolPDF gratis para todos.',
      },
      {
        question: '¿Necesito crear una cuenta o registrarme?',
        answer:
          'No. CoolPDF nunca pide una cuenta, un correo electrónico ni ningún dato personal. Abre el sitio y empieza a trabajar: ese es todo el proceso de alta.',
      },
      {
        question: '¿Mis archivos se suben a vuestros servidores?',
        answer:
          'No. CoolPDF procesa cada archivo localmente en tu navegador usando WebAssembly. Tus archivos nunca salen de tu dispositivo: no hay subidas de ningún tipo, porque no existe ningún servidor que pudiera recibirlos.',
      },
      {
        question: '¿Puede CoolPDF ver, almacenar o acceder a mis documentos?',
        answer:
          'No. No hay ningún backend, así que no tenemos capacidad técnica para ver, almacenar ni acceder a tus archivos. Puedes comprobarlo tú mismo: abre las herramientas de desarrollo de tu navegador (F12) y observa la pestaña Red mientras usas una herramienta: cero subidas de archivos. Además, nuestro código es de código abierto, así que cualquiera puede auditarlo.',
      },
      {
        question: '¿CoolPDF funciona sin conexión?',
        answer:
          'Sí. Una vez cargada la página, cada herramienta funciona por completo en tu dispositivo, así que siguen funcionando aunque te desconectes de internet. El almacenamiento en caché sin conexión de todo el sitio mediante un service worker está en nuestra hoja de ruta.',
      },
      {
        question: '¿Es seguro procesar documentos confidenciales con CoolPDF?',
        answer:
          'Sí. Como los archivos se procesan localmente y nunca salen de tu dispositivo, CoolPDF es adecuado para contratos, historiales médicos y estados financieros. Todo el código es de código abierto bajo AGPL-3.0, así que los investigadores de seguridad pueden auditar exactamente qué ocurre con un archivo.',
      },
      {
        question: '¿Cómo gana dinero CoolPDF?',
        answer:
          'Es posible que mostremos anuncios servidos por Google AdSense. La publicidad es nuestra fuente de ingresos prevista y es lo que permite que cada herramienta siga siendo gratuita y sin límites de uso.',
      },
      {
        question: '¿Qué navegadores son compatibles?',
        answer:
          'CoolPDF funciona en las versiones actuales de Chrome, Edge, Firefox y Safari. Cualquier navegador moderno compatible con WebAssembly —que en la práctica son todos— puede ejecutar todas las herramientas.',
      },
      {
        question: '¿CoolPDF es de código abierto?',
        answer:
          'Sí. CoolPDF se publica bajo la GNU Affero General Public License v3.0 (AGPL-3.0). El código fuente completo está disponible en GitHub y las contribuciones son bienvenidas.',
      },
      {
        question: '¿Qué herramientas PDF ofrece CoolPDF?',
        answer:
          'CoolPDF ofrece doce herramientas: Unir PDF, Dividir PDF, Comprimir PDF, Rotar PDF, Organizar PDF, PDF a JPG, JPG a PDF, Proteger PDF, Desbloquear PDF, Marca de agua PDF, Números de página y PDF a Markdown. Todas funcionan localmente en tu navegador.',
      },
    ],
  },
  factSummary:
    'CoolPDF es un conjunto de herramientas PDF gratuito que funciona en el navegador. A diferencia de las herramientas PDF en línea tradicionales, CoolPDF procesa todos los archivos localmente en el dispositivo del usuario mediante WebAssembly: los archivos nunca se suben a ningún servidor. Las herramientas no requieren cuenta, correo electrónico ni registro, y son completamente gratuitas y sin límites de uso. Esto hace que CoolPDF sea adecuado para documentos confidenciales como contratos, historiales médicos y estados financieros.',
  toolUi: {
    privacyNote:
      'Tus archivos se procesan localmente en tu navegador — no se sube nada.',
    trustChips: ['Sin subidas', 'Funciona localmente', 'Sin registro'],
    dropPdfs: 'Suelta archivos PDF aquí, o haz clic para examinar',
    dropImages: 'Suelta imágenes JPG o PNG aquí, o haz clic para examinar',
    moveUp: 'Subir',
    moveDown: 'Bajar',
    remove: 'Eliminar',
    processing: 'Procesando…',
    download: 'Descargar',
    readyTitle: 'Tu archivo está listo',
    engineLoading: 'Cargando el motor PDF…',
    engineLoadingProgress: 'Cargando el motor PDF… {loaded} de {total} MB',
    engineFirstRun: 'El primer uso descarga unos {size} MB; después queda en caché en tu dispositivo.',
    errors: {
      onlyPdf: 'Solo se admiten archivos PDF.',
      onlyImages: 'Solo se admiten imágenes JPG y PNG.',
      tooManyFiles: 'Puedes añadir como máximo {max} archivos.',
      fileTooLarge: '«{name}» es demasiado grande: el límite es de {max} MB por archivo.',
      minFiles: 'Añade al menos {min} archivos.',
      encrypted: 'Este PDF está protegido con contraseña y no se puede procesar aquí.',
      corrupted: 'No se pudo leer este archivo como un PDF válido.',
      invalidRange: 'Rango de páginas no válido. Usa números y guiones, por ejemplo 1-3, 5.',
      rangeOutOfBounds: 'El rango de páginas supera el número de páginas del documento.',
      noPages: 'Debe quedar al menos una página en el documento.',
      wrongPassword: 'La contraseña es incorrecta. Inténtalo de nuevo.',
      notEncrypted: 'Este PDF no está protegido con contraseña, así que no hay nada que desbloquear.',
      noText: 'Este PDF parece consistir en imágenes escaneadas sin texto extraíble.',
      tooManyPages: 'Este documento tiene demasiadas páginas para esta herramienta: el límite es de {max} páginas.',
      filesSkipped: 'Se omitieron {count} archivo(s) no compatibles.',
      totalTooLarge: 'Los archivos seleccionados son demasiado grandes en conjunto: el límite total es de {max} MB.',
      generic: 'Se produjo un error al procesar tu archivo. Inténtalo de nuevo.',
      engineDownload:
        'No se pudo descargar el motor PDF (error de red). Comprueba tu conexión e inténtalo de nuevo — ningún archivo se ha enviado.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'Unir PDF online gratis — Sin subidas ni registro | CoolPDF',
      metaDescription:
        'Combina hasta 20 PDF en un solo archivo directamente en tu navegador. Reordena, une y descarga: los archivos nunca salen de tu dispositivo.',
      heading: 'Unir PDF',
      intro:
        'Combina varios documentos PDF en un solo archivo, exactamente en el orden que elijas. La unión se ejecuta por completo en tu propio dispositivo.',
      button: 'Unir PDF',
      stepsHeading: 'Cómo unir archivos PDF',
      steps: [
        'Añade dos o más archivos PDF arrastrándolos al área de carga, o haz clic para examinar tu dispositivo (2–20 archivos).',
        'Coloca los archivos en el orden que quieras con las flechas de subir y bajar: ese será el orden de las páginas del documento final.',
        'Haz clic en «Unir PDF». Los documentos se combinan localmente, lo que suele tardar solo unos segundos.',
        'Descarga tu PDF unido. Los archivos originales permanecen intactos en tu dispositivo.',
      ],
      privacyHeading: 'Une contratos y extractos sin subirlos',
      privacyText:
        'Los PDF que merece la pena unir suelen ser los que menos quieres compartir: contratos firmados, extractos bancarios, informes médicos, documentos de candidatura. Con una herramienta online convencional, cada uno de esos archivos se sube a un servidor remoto antes incluso de empezar la unión. CoolPDF funciona al revés. El código llega a tu navegador y los archivos se quedan en tu dispositivo: nada se transmite, se pone en cola ni se almacena en otro sitio. Eso hace que la herramienta sea segura en un portátil de trabajo, en una red Wi-Fi pública o con documentos bajo NDA. También significa que no hay cuotas artificiales: tu ordenador hace el trabajo, así que no hay factura de servidor que repercutirte. Cierra la pestaña y todo rastro de tus documentos desaparece.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Hay un límite de PDF que puedo unir?',
          answer:
            'Puedes unir entre 2 y 20 archivos PDF a la vez. Cada archivo puede pesar hasta 100 MB (50 MB en dispositivos móviles), mucho más de lo que necesitan los documentos cotidianos.',
        },
        {
          question: '¿Unir cambia la calidad de mis PDF?',
          answer:
            'No. Las páginas se copian en el nuevo documento exactamente como están: sin recompresión, sin renderizado, sin marcas de agua. El texto sigue siendo seleccionable y los enlaces siguen funcionando.',
        },
        {
          question: '¿Mis archivos se suben a un servidor?',
          answer:
            'Nunca. La unión se ejecuta por completo en tu navegador. Incluso puedes desconectarte de internet después de cargar la página: la herramienta sigue funcionando.',
        },
      ],
    },
    'split-pdf': {
      metaTitle: 'Dividir PDF online gratis — Extrae páginas | CoolPDF',
      metaDescription:
        'Extrae páginas, divide por rangos o corta un PDF cada N páginas, todo en tu navegador. Gratis, sin registro, sin marcas de agua.',
      heading: 'Dividir PDF',
      intro:
        'Extrae cada página en un archivo independiente, saca rangos personalizados o divide un documento en bloques de N páginas. Todo ocurre localmente en tu navegador.',
      button: 'Dividir PDF',
      modeLabel: 'Modo de división',
      modeAll: 'Extraer todas las páginas',
      modeRanges: 'Dividir por rangos',
      modeEveryN: 'Dividir cada N páginas',
      rangesLabel: 'Rangos de páginas',
      rangesPlaceholder: 'p. ej. 1-3, 5-8',
      everyNLabel: 'Páginas por archivo',
      stepsHeading: 'Cómo dividir un PDF',
      steps: [
        'Añade el PDF que quieres dividir arrastrándolo al área de carga, o haz clic para examinar.',
        'Elige un modo: cada página por separado, rangos personalizados como 1-3, 5-8, o un bloque cada N páginas.',
        'Haz clic en «Dividir PDF». Cada parte se crea localmente en tu dispositivo en segundos.',
        'Descarga el resultado: un único PDF si solo se produjo una parte, o un archivo ZIP con todas las partes.',
      ],
      privacyHeading: 'Divide documentos confidenciales sin rodeos por la nube',
      privacyText:
        'Dividir un PDF suele servir para compartir solo una parte: una factura concreta de una exportación contable, un capítulo de un escaneo, las páginas relevantes de un contrato. Irónicamente, la mayoría de las herramientas online te obligan primero a compartir el documento entero con sus servidores. CoolPDF elimina ese rodeo por completo: la división ocurre en la pestaña de tu navegador, en tu propia máquina. El documento se lee, se divide y se guarda localmente, y ni un byte cruza la red. Es lo bastante seguro para declaraciones de impuestos, documentos de RR. HH. y archivos legales, y es rápido, porque no hay cola de subida ni copia procesada que descargar de otro lugar. Cuando cierras la pestaña, no queda nada.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Cómo extraigo solo algunas páginas?',
          answer:
            'Elige «Dividir por rangos» e introduce las páginas que necesitas, por ejemplo 1-3, 5-8. Cada rango se convierte en su propio PDF y todas las partes se descargan juntas en un archivo ZIP.',
        },
        {
          question: '¿Dividir reduce la calidad de mi PDF?',
          answer:
            'No. Las páginas se copian sin cambios en los nuevos documentos: texto, imágenes, enlaces y formularios quedan exactamente como estaban. Nada se recomprime ni se marca con marca de agua.',
        },
        {
          question: '¿Hay límite de páginas o de tamaño de archivo?',
          answer:
            'Se admiten archivos de hasta 100 MB (50 MB en móvil), sin límite en el número de páginas. Como tu propio dispositivo hace el trabajo, los documentos muy grandes simplemente tardan un poco más.',
        },
      ],
    },
    'rotate-pdf': {
      metaTitle: 'Rotar PDF online gratis — Gira páginas localmente | CoolPDF',
      metaDescription:
        'Gira todas las páginas o solo las que elijas 90°, 180° o 270°, directamente en tu navegador. Sin subidas, sin registro, sin marcas de agua.',
      heading: 'Rotar PDF',
      intro:
        'Corrige escaneos torcidos y páginas al revés en segundos. Gira todo el documento o solo las páginas seleccionadas 90°, 180° o 270°.',
      button: 'Rotar PDF',
      angleLabel: 'Ángulo de rotación (en sentido horario)',
      scopeLabel: 'Aplicar a',
      scopeAll: 'Todas las páginas',
      scopeSelected: 'Solo las páginas seleccionadas',
      pagesLabel: 'Páginas',
      pagesPlaceholder: 'p. ej. 1, 3, 5-8',
      stepsHeading: 'Cómo rotar páginas de un PDF',
      steps: [
        'Añade el PDF que quieres corregir arrastrándolo al área de carga, o haz clic para examinar.',
        'Elige un ángulo de rotación: 90°, 180° o 270° en sentido horario.',
        'Decide si girar todas las páginas o solo algunas (por ejemplo 1, 3, 5-8) y haz clic en «Rotar PDF».',
        'Descarga el PDF rotado. Las páginas que no seleccionaste permanecen exactamente como estaban.',
      ],
      privacyHeading: 'Endereza escaneos sin enviarlos a ninguna parte',
      privacyText:
        'Las páginas rotadas suelen venir de un escáner o de la cámara del teléfono: formularios firmados, documentos de identidad, recibos, notas manuscritas. Son precisamente los archivos que no deberían viajar al servidor de un desconocido solo para ponerse derechos. Con CoolPDF, la rotación ocurre donde el archivo ya está: en tu navegador. La orientación de las páginas se ajusta localmente y el resultado se guarda directamente en tu dispositivo, sin subidas, sin copias en un disco remoto y sin políticas de retención que tengas que creer. El cambio además es permanente y conforme al estándar: el documento se abre correctamente en cualquier lector de PDF, en cualquier dispositivo, para cualquiera con quien lo compartas después.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Puedo rotar solo algunas páginas?',
          answer:
            'Sí. Elige «Solo las páginas seleccionadas» e introduce las páginas a girar, por ejemplo 1, 3, 5-8. Todas las demás páginas conservan su orientación original.',
        },
        {
          question: '¿La rotación es permanente?',
          answer:
            'Sí. La rotación se escribe en el propio PDF, de modo que las páginas se muestran correctamente en todos los lectores de PDF, no solo en el que usas para ver el archivo.',
        },
        {
          question: '¿Rotar afecta al contenido de mis páginas?',
          answer:
            'No. Solo cambia la orientación de la página; el contenido queda intacto. El texto sigue nítido, las imágenes mantienen su resolución y nada se recomprime.',
        },
      ],
    },
    'jpg-to-pdf': {
      metaTitle: 'Convertir JPG a PDF — Gratis, local, sin subidas | CoolPDF',
      metaDescription:
        'Convierte imágenes JPG y PNG en un PDF A4 limpio en tu navegador. Ajustar, rellenar o tamaño original: los archivos no salen de tu dispositivo.',
      heading: 'JPG a PDF',
      intro:
        'Convierte hasta 20 imágenes JPG o PNG en un único PDF A4: perfecto para escaneos, recibos y documentos con fotos. La conversión se ejecuta por completo en tu dispositivo.',
      button: 'Convertir a PDF',
      orientationLabel: 'Orientación de página',
      orientationAuto: 'Automática (según la primera imagen)',
      orientationPortrait: 'Vertical',
      orientationLandscape: 'Horizontal',
      fitLabel: 'Colocación de la imagen',
      fitFit: 'Ajustar: imagen completa visible, con márgenes',
      fitFill: 'Rellenar: cubre la página, recorta los bordes',
      fitOriginal: 'Original: tamaño natural, centrada',
      stepsHeading: 'Cómo convertir imágenes a PDF',
      steps: [
        'Añade hasta 20 imágenes JPG o PNG arrastrándolas al área de carga, o haz clic para examinar.',
        'Elige la orientación de página: automática sigue la proporción de tu primera imagen, o fuerza vertical u horizontal.',
        'Decide cómo se colocan las imágenes (ajustadas con márgenes, rellenando la página o en tamaño original) y haz clic en «Convertir a PDF».',
        'Descarga tu PDF, con una imagen por página en formato A4.',
      ],
      privacyHeading: 'Convierte fotos en PDF sin subir un solo píxel',
      privacyText:
        'Las fotos y los escaneos suelen ser personales: copias del pasaporte, recibos para los impuestos, fotos de pizarras, cartas manuscritas. Un conversor típico sube cada imagen a un servidor, la convierte allí y te devuelve un enlace de descarga: tus imágenes ahora viven en una infraestructura que no controlas. CoolPDF hace el mismo trabajo por completo en tu dispositivo. Las imágenes las lee tu navegador, se maquetan en páginas A4 y se guardan como PDF en tu propio disco. Nada se sube, así que nada puede filtrarse, registrarse ni acabar en un conjunto de datos de entrenamiento. Incluso funciona sin conexión: carga la página, apaga el Wi-Fi y convierte.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Qué formatos de imagen se admiten?',
          answer:
            'Imágenes JPG y PNG, hasta 20 a la vez. Cada imagen se convierte en una página A4, en el orden en que añadiste los archivos.',
        },
        {
          question: '¿Cuál es la diferencia entre Ajustar, Rellenar y Original?',
          answer:
            'Ajustar escala la imagen para que sea completamente visible, con márgenes. Rellenar la escala para cubrir toda la página, recortando los bordes. Original mantiene el tamaño natural de la imagen, centrada en la página.',
        },
        {
          question: '¿Mis imágenes pierden calidad?',
          answer:
            'No. Las imágenes se incrustan exactamente como están, sin recompresión. El PDF simplemente envuelve tus datos de imagen originales: lo que ves en la imagen es lo que obtienes en el PDF.',
        },
      ],
    },
    'organize-pdf': {
      metaTitle: 'Organizar PDF online gratis — Reordena páginas | CoolPDF',
      metaDescription:
        'Reordena las páginas de un PDF arrastrando y soltando, gíralas o elimínalas y descarga un PDF reorganizado, todo en tu navegador. Sin subidas, sin registro.',
      heading: 'Organizar PDF',
      intro:
        'Reorganiza las páginas arrastrando y soltando, gira las que estén torcidas y elimina las que no necesites. Una vista previa en vivo de cada página lo pone fácil, y todo ocurre en tu dispositivo.',
      button: 'Descargar PDF organizado',
      loadingPreviews: 'Generando vistas previas de las páginas…',
      loadMorePreviews: 'Cargar más vistas previas',
      selectAll: 'Seleccionar todo',
      clearSelection: 'Quitar selección',
      deleteSelected: 'Eliminar seleccionadas',
      rotateSelected: 'Girar seleccionadas 90°',
      reset: 'Restablecer',
      rotatePage: 'Girar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: 'Se conservarán {kept} de {total} páginas',
      stepsHeading: 'Cómo organizar las páginas de un PDF',
      steps: [
        'Añade el PDF que quieres reorganizar arrastrándolo al área de carga, o haz clic para examinar.',
        'Arrastra las miniaturas de las páginas hasta el orden que quieras: el número de cada miniatura siempre muestra el número de página original.',
        'Gira o elimina páginas sueltas con los botones de cada miniatura, o selecciona varias páginas y usa la barra de herramientas. Las páginas eliminadas se pueden restaurar con un clic.',
        'Haz clic en «Descargar PDF organizado». El documento reorganizado se ensambla localmente y se guarda en tu dispositivo.',
      ],
      privacyHeading: 'Reorganiza documentos confidenciales página a página, en privado',
      privacyText:
        'Reordenar páginas suele ser el último paso antes de que un documento salga de tus manos: poner la página firmada al principio de un contrato, quitar los escaneos en blanco de un archivo de impuestos, subir al principio el capítulo que pidió un cliente. No son archivos que pertenezcan al servidor de un desconocido. CoolPDF genera las vistas previas y reconstruye el documento por completo en tu navegador: el archivo se lee de tu propio disco y el resultado se guarda de nuevo en él, sin ninguna subida de por medio. No hay colas, ni copias temporales en el almacenamiento de otros, ni políticas de retención que tengas que creer. Eso hace que la herramienta sea segura para archivos legales, historiales médicos y documentos de RR. HH., incluso en una red Wi-Fi pública. Cierra la pestaña y no queda nada de tu documento.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Puedo deshacer una página eliminada?',
          answer:
            'Sí. El botón de eliminar solo marca la página: aparece atenuada y se puede restaurar con otro clic. Las páginas solo se excluyen al descargar, e incluso entonces el archivo original de tu dispositivo permanece sin cambios.',
        },
        {
          question: '¿Reorganizar reduce la calidad de mi PDF?',
          answer:
            'No. Las páginas se copian en el nuevo documento exactamente como están: sin re-renderizado ni recompresión. El texto sigue siendo seleccionable, los enlaces siguen funcionando y las rotaciones se escriben como metadatos de página estándar.',
        },
        {
          question: '¿Hay límite de tamaño de archivo o de número de páginas?',
          answer:
            'Se admiten archivos de hasta 100 MB (50 MB en móvil), sin límite de páginas. En documentos muy largos, las vistas previas se generan por lotes, así que la herramienta sigue respondiendo con fluidez.',
        },
      ],
    },
    'remove-pages': {
      metaTitle: 'Eliminar páginas de un PDF gratis online | CoolPDF',
      metaDescription:
        'Elimina las páginas no deseadas de un PDF con un selector visual — marca, elimina, descarga. 100 % en tu navegador, sin subidas, sin registro.',
      heading: 'Eliminar páginas de un PDF',
      intro:
        'Elimina las páginas que no necesitas — escaneos en blanco, adjuntos de más, esa página equivocada. Cada página muestra una vista previa en vivo y el documento limpio se reconstruye en tu dispositivo. El archivo original permanece intacto.',
      button: 'Eliminar páginas y descargar',
      loadingPreviews: 'Generando vistas previas de las páginas…',
      loadMorePreviews: 'Cargar más vistas previas',
      selectAll: 'Seleccionar todo',
      clearSelection: 'Quitar selección',
      deleteSelected: 'Eliminar seleccionadas',
      rotateSelected: 'Girar seleccionadas 90°',
      reset: 'Restablecer',
      rotatePage: 'Girar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: 'Se conservarán {kept} de {total} páginas',
      stepsHeading: 'Cómo eliminar páginas de un PDF',
      steps: [
        'Añade el PDF arrastrándolo al área de carga, o haz clic para examinar — aparece una vista previa de cada página.',
        'Haz clic en el icono de la papelera de cada página que quieras eliminar, o selecciona varias páginas y usa «Eliminar seleccionadas». Una página eliminada solo está marcada — haz clic de nuevo para restaurarla.',
        'Revisa el contador: muestra cuántas de las páginas totales se conservarán en el nuevo documento.',
        'Haz clic en «Eliminar páginas y descargar». El PDF limpio se ensambla localmente y se guarda como removed.pdf.',
      ],
      privacyHeading: 'Recorta las páginas sensibles — sin enviar el archivo a ningún sitio',
      privacyText:
        'Eliminar una página suele tratar de lo que no debe salir de tus manos: una página de firma, una nómina, un adjunto destinado a otro destinatario. Con CoolPDF el archivo nunca sale de tu dispositivo — las páginas se marcan y el documento se reconstruye por completo en tu navegador, sin subidas y sin copia temporal en un servidor. Es seguro para contratos, historiales médicos y archivos de RRHH, incluso en Wi-Fi público.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Puedo deshacer una página eliminada?',
          answer:
            'Sí, antes de descargar. Las páginas eliminadas solo están marcadas — atenuadas con una insignia — y otro clic las restaura. Tras la descarga, tu archivo original en el disco sigue sin cambios.',
        },
        {
          question: '¿Eliminar páginas reduce la calidad?',
          answer:
            'No. Las páginas restantes se copian exactamente tal cual al nuevo documento — sin re-renderizado y sin recompresión.',
        },
        {
          question: '¿Cuáles son los límites?',
          answer:
            'Archivos de hasta 100 MB (50 MB en móvil), sin límite de páginas. Los documentos largos cargan sus vistas previas en lotes para mantener la fluidez.',
        },
      ],
    },
    'extract-pages': {
      metaTitle: 'Extraer páginas de un PDF gratis online | CoolPDF',
      metaDescription:
        'Guarda las páginas seleccionadas de un PDF como nuevo documento — elige las páginas visualmente y extráelas en tu navegador. Sin subidas, sin registro.',
      heading: 'Extraer páginas de un PDF',
      intro:
        'Saca exactamente las páginas que necesitas — un capítulo, la página de la firma, una sola factura — y guárdalas como nuevo PDF. Todo se ejecuta localmente en tu navegador, el documento nunca sale de tu dispositivo.',
      button: 'Extraer páginas seleccionadas',
      loadingPreviews: 'Generando vistas previas de las páginas…',
      loadMorePreviews: 'Cargar más vistas previas',
      selectAll: 'Seleccionar todo',
      clearSelection: 'Quitar selección',
      deleteSelected: 'Eliminar seleccionadas',
      rotateSelected: 'Girar seleccionadas 90°',
      reset: 'Restablecer',
      rotatePage: 'Girar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: '{kept} de {total} páginas seleccionadas',
      stepsHeading: 'Cómo extraer páginas de un PDF',
      steps: [
        'Añade el PDF arrastrándolo al área de carga, o haz clic para examinar. Aparece una vista previa en vivo de cada página.',
        'Haz clic en las miniaturas de las páginas que quieras extraer — las páginas seleccionadas muestran un borde resaltado y una marca de verificación.',
        'Revisa el contador para confirmar cuántas páginas están seleccionadas.',
        'Haz clic en «Extraer páginas seleccionadas». Las páginas elegidas se guardan localmente como nuevo archivo, extracted.pdf.',
      ],
      privacyHeading: 'Comparte solo las páginas que quieras — en privado',
      privacyText:
        'Extraer es la forma de enviar un capítulo de un informe o una página de un contrato sin exponer el resto. CoolPDF hace la selección y la reconstrucción por completo en tu navegador: el archivo fuente se lee de tu propio disco y el nuevo PDF se escribe de vuelta en él, sin subir nada entre medias. Sin cuenta, sin copia en el servidor, sin rastros al cerrar la pestaña.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Puedo seleccionar páginas de diferentes partes del documento?',
          answer:
            'Sí — haz clic en cualquier combinación de páginas, en cualquier orden. El archivo extraído mantiene las páginas en su orden original del documento, y puedes arrastrar las miniaturas para reorganizarlas primero.',
        },
        {
          question: '¿La extracción reduce la calidad?',
          answer:
            'No. Las páginas se copian a nivel de objeto al nuevo archivo — el texto sigue seleccionable y las imágenes conservan su resolución original.',
        },
        {
          question: '¿Cuáles son los límites?',
          answer:
            'Archivos de hasta 100 MB (50 MB en móvil), sin límite de páginas. Las vistas previas se generan en lotes para documentos muy largos.',
        },
      ],
    },
    'reorder-pages': {
      metaTitle: 'Reordenar páginas de un PDF gratis online | CoolPDF',
      metaDescription:
        'Reordena las páginas de un PDF arrastrando las miniaturas a un nuevo orden — con vistas previas en vivo. 100 % en tu navegador, sin subidas, sin registro.',
      heading: 'Reordenar páginas de un PDF',
      intro:
        'Arrastra las páginas exactamente al orden que necesitas — cada página muestra una vista previa en vivo, así que nada queda fuera de lugar. El documento reordenado se ensambla en tu dispositivo; nada se sube.',
      button: 'Descargar PDF reordenado',
      loadingPreviews: 'Generando vistas previas de las páginas…',
      loadMorePreviews: 'Cargar más vistas previas',
      selectAll: 'Seleccionar todo',
      clearSelection: 'Quitar selección',
      deleteSelected: 'Eliminar seleccionadas',
      rotateSelected: 'Girar seleccionadas 90°',
      reset: 'Restablecer',
      rotatePage: 'Girar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: 'Se conservarán {kept} de {total} páginas',
      stepsHeading: 'Cómo reordenar páginas en un PDF',
      steps: [
        'Añade el PDF arrastrándolo al área de carga, o haz clic para examinar — aparecen las miniaturas de cada página.',
        'Arrastra cualquier miniatura a su nueva posición; la insignia siempre muestra el número de página original para que sigas lo que se movió.',
        'Opcionalmente gira las páginas acostadas o marca páginas para eliminar con los botones de cada miniatura.',
        'Haz clic en «Descargar PDF reordenado». El nuevo documento se crea localmente y se guarda como reordered.pdf.',
      ],
      privacyHeading: 'Reorganiza documentos confidenciales en tu propio dispositivo',
      privacyText:
        'Reordenar suele ocurrir justo antes de que un documento salga — mover la página firmada al frente, reordenar los recibos escaneados, barajar capítulos. CoolPDF genera las vistas previas y reconstruye el archivo por completo en tu navegador: nada se sube, se encola o se almacena en un servidor. Es seguro para documentos legales, financieros y médicos, incluso en Wi-Fi público.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Cómo sé que el nuevo orden es correcto?',
          answer:
            'Cada miniatura muestra una vista previa en vivo más una insignia con el número de página original, así siempre ves de dónde viene una página.',
        },
        {
          question: '¿Reordenar reduce la calidad?',
          answer:
            'No. Las páginas se copian sin cambios al nuevo documento — sin re-renderizado, sin recompresión; las rotaciones se guardan como metadatos de página estándar.',
        },
        {
          question: '¿Cuáles son los límites?',
          answer:
            'Archivos de hasta 100 MB (50 MB en móvil), sin límite de páginas. Los documentos muy largos cargan las vistas previas en lotes.',
        },
      ],
    },
    'pdf-to-jpg': {
      metaTitle: 'Convertir PDF a JPG — Gratis, local, sin subidas | CoolPDF',
      metaDescription:
        'Convierte páginas PDF en imágenes JPG o PNG a 72, 150 o 300 DPI, directamente en tu navegador. Los archivos nunca salen de tu dispositivo. Gratis, sin registro.',
      heading: 'PDF a JPG',
      intro:
        'Convierte páginas PDF en imágenes JPG o PNG de alta calidad. Elige la resolución y las páginas que necesitas: la conversión se ejecuta por completo en tu dispositivo.',
      button: 'Convertir a imágenes',
      formatLabel: 'Formato de imagen',
      formatJpg: 'JPG: archivos más pequeños',
      formatPng: 'PNG: sin pérdida, archivos más grandes',
      dpiLabel: 'Resolución',
      dpiHint:
        '300 DPI genera imágenes muy grandes y puede ser lento y consumir mucha memoria en documentos largos.',
      dpiReduced:
        'Algunas páginas se renderizaron a una resolución menor porque superan el límite de tamaño de lienzo de tu dispositivo con los DPI elegidos.',
      scopeLabel: 'Páginas',
      scopeAll: 'Todas las páginas',
      scopeCustom: 'Páginas seleccionadas',
      pagesPlaceholder: 'p. ej. 1-3, 5',
      renderingProgress: 'Generando página {current} de {total}…',
      stepsHeading: 'Cómo convertir PDF a JPG',
      steps: [
        'Añade el PDF que quieres convertir arrastrándolo al área de carga, o haz clic para examinar.',
        'Elige el formato de imagen (JPG para archivos pequeños, PNG para calidad sin pérdida) y la resolución: 72 DPI para pantalla, 150 para documentos, 300 para impresión.',
        'Convierte todas las páginas o introduce un rango como 1-3, 5, y haz clic en «Convertir a imágenes».',
        'Descarga el resultado: una sola imagen si convertiste una página, o un archivo ZIP con una imagen por página.',
      ],
      privacyHeading: 'Convierte páginas en imágenes sin entregar el documento',
      privacyText:
        'Convertir un PDF en imágenes suele significar que el documento va hacia un destino visual: una presentación, una app de mensajería, un formulario que solo acepta fotos. Facturas, certificados y cartas oficiales siguen a menudo este camino. Con un conversor online típico, primero se sube el documento entero y las imágenes vuelven de un servidor del que no sabes nada. CoolPDF renderiza las páginas directamente en la pestaña de tu navegador, con el mismo tipo de motor PDF que usan los lectores de escritorio. El archivo nunca cruza la red: se lee de tu disco, tu dispositivo lo rasteriza y el resultado se guarda de nuevo en él. No hay nada que interceptar, registrar o filtrar, lo que también significa que la herramienta sigue funcionando en un avión, en una fábrica o en cualquier lugar sin conexión.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Qué DPI debo elegir?',
          answer:
            '72 DPI coincide con el tamaño en pantalla del PDF y vale para uso web. 150 DPI es un buen punto intermedio para documentos. 300 DPI es calidad de impresión: nítido, pero las imágenes se hacen grandes y el renderizado tarda más.',
        },
        {
          question: '¿Por qué recibo un archivo ZIP?',
          answer:
            'Cada página del PDF se convierte en su propia imagen. Cuando se convierte más de una página, todas las imágenes se empaquetan en un único archivo ZIP para que tengas una sola descarga ordenada.',
        },
        {
          question: '¿Convertir a JPG pierde calidad?',
          answer:
            'JPG usa una compresión ligera (92 % de calidad), visualmente indistinguible del original en documentos y fotos. Elige PNG si necesitas una salida sin pérdida, perfecta píxel a píxel.',
        },
      ],
    },
    'compress-pdf': {
      metaTitle: 'Comprimir PDF online gratis — Sin subidas | CoolPDF',
      metaDescription:
        'Reduce el tamaño de tus PDF con tres niveles de calidad, de 72 a 300 DPI, directamente en tu navegador. Gratis, sin registro.',
      heading: 'Comprimir PDF',
      intro:
        'Reduce los PDF grandes a una fracción de su tamaño con tres niveles de compresión. El motor de compresión se ejecuta por completo en tu propio dispositivo.',
      button: 'Comprimir PDF',
      levelLabel: 'Nivel de compresión',
      levels: {
        extreme: {
          name: 'Extremo',
          description: 'Tamaño mínimo, imágenes a 72 DPI: ideal para correo electrónico y vistas previas web.',
        },
        recommended: {
          name: 'Recomendado',
          description: 'Tamaño y calidad equilibrados, imágenes a 150 DPI: adecuado para la mayoría de los documentos.',
        },
        light: {
          name: 'Ligero',
          description: 'Máxima calidad, imágenes a 300 DPI: mantiene las páginas listas para imprimir.',
        },
      },
      processingPages: 'Comprimiendo página {current} de {total}…',
      stillWorking: 'Sigue trabajando: los archivos grandes pueden tardar varios minutos. Mantén esta pestaña abierta.',
      resultSmaller: '{percent} % más pequeño',
      resultLarger:
        '{percent} % más grande: este PDF ya estaba bien comprimido. Prueba el nivel Ligero para conservar más calidad.',
      stepsHeading: 'Cómo comprimir un PDF',
      steps: [
        'Añade el PDF que quieres reducir arrastrándolo al área de carga, o haz clic para examinar (hasta 150 MB).',
        'Elige un nivel de compresión: Extremo para el tamaño mínimo, Recomendado para un equilibrio, o Ligero para calidad de impresión.',
        'Haz clic en «Comprimir PDF». La primera ejecución descarga el motor de compresión una sola vez; después se inicia al instante.',
        'Descarga el PDF comprimido y compara los tamaños: el archivo original permanece intacto en tu dispositivo.',
      ],
      privacyHeading: 'Comprime documentos grandes sin subirlos',
      privacyText:
        'Un PDF que necesita compresión suele estar a punto de salir hacia algún lugar: un contrato escaneado que va al abogado, un portafolio que va a un reclutador, informes médicos que van a la aseguradora. Irónicamente, la mayoría de los compresores online te obligan a subir primero el archivo a sus servidores, así que reducir un documento confidencial empieza por entregarlo. CoolPDF comprime el documento donde ya está: dentro de tu navegador, en tu propio dispositivo. El motor de compresión — el mismo Ghostscript en el que las imprentas confían desde hace décadas — está compilado a WebAssembly y se descarga en tu equipo una sola vez. Tu archivo se lee de tu disco, se reconstruye más pequeño y se guarda de nuevo en él, sin subida, cola ni copia remota en ningún momento. Cierra la pestaña y no queda nada.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Qué nivel de compresión debo elegir?',
          answer:
            '«Recomendado» es adecuado para la mayoría de los documentos: equilibra tamaño y legibilidad. Elige «Extremo» cuando debas respetar un límite de adjuntos de correo y cada kilobyte cuente, y «Ligero» cuando el archivo se vaya a imprimir o a ampliar con frecuencia.',
        },
        {
          question: '¿Por qué mi PDF se hizo más grande en vez de más pequeño?',
          answer:
            'Algunos PDF ya están muy optimizados, por ejemplo los guardados por otros compresores. Volver a codificar sus imágenes puede añadir bytes en lugar de quitarlos. En ese caso conserva el original, o prueba el nivel «Ligero», que recomprime con menos agresividad.',
        },
        {
          question: '¿Por qué la primera compresión tarda más?',
          answer:
            'La primera ejecución descarga el motor de compresión (unos 15 MB) en tu dispositivo. Después queda en caché, así que las compresiones siguientes se inician al instante, e incluso funcionan sin conexión.',
        },
      ],
    },
    'protect-pdf': {
      metaTitle: 'Proteger PDF con contraseña gratis — AES-256 | CoolPDF',
      metaDescription:
        'Cifra un PDF con AES-256 y controla los permisos de impresión, copia y edición, localmente en tu navegador. Sin subidas, gratis, sin registro.',
      heading: 'Proteger PDF',
      intro:
        'Añade cifrado con contraseña AES-256 a tu PDF y decide exactamente qué pueden hacer los destinatarios con él. Todo ocurre en tu propio dispositivo.',
      button: 'Proteger PDF',
      passwordLabel: 'Contraseña (al menos 6 caracteres)',
      confirmLabel: 'Confirmar contraseña',
      passwordTooShort: 'La contraseña debe tener al menos 6 caracteres.',
      passwordMismatch: 'Las contraseñas no coinciden.',
      permissionsHeading: 'Permisos para los destinatarios',
      printingLabel: 'Impresión',
      printFull: 'Permitida',
      printLow: 'Solo en baja calidad',
      printNone: 'No permitida',
      allowCopying: 'Permitir copiar texto e imágenes',
      allowModifying: 'Permitir modificar el documento',
      allowAnnotating: 'Permitir comentarios y rellenar formularios',
      allowAssembling: 'Permitir insertar, rotar y eliminar páginas',
      allowAccessibility: 'Permitir la extracción de texto para lectores de pantalla',
      stepsHeading: 'Cómo proteger un PDF',
      steps: [
        'Añade el PDF que quieres proteger arrastrándolo al área de carga, o haz clic para examinar.',
        'Elige una contraseña de al menos 6 caracteres e introdúcela dos veces para confirmarla.',
        'Define los permisos que tendrán los destinatarios al abrir el archivo: impresión, copia, edición y más.',
        'Haz clic en «Proteger PDF» y descarga el archivo cifrado. Guarda bien la contraseña: no hay forma de recuperarla.',
      ],
      privacyHeading: 'Cifra documentos sin revelar ni el archivo ni la contraseña',
      privacyText:
        'Proteger un PDF con contraseña suele ser el último paso antes de enviar algo confidencial: una nómina a un empleado, un extracto bancario al contable, un certificado médico a la aseguradora. Usar una herramienta basada en servidor para ese último paso arruina el propósito: el original sin proteger viaja por internet, y entregas la contraseña elegida a una infraestructura que no controlas. CoolPDF realiza el cifrado por completo en tu dispositivo. El archivo se lee localmente, se cifra con AES-256 dentro de la pestaña de tu navegador y se guarda directamente en tu disco. La contraseña que escribes nunca cruza la red: no hay ningún servidor que pueda recibirla. Esto hace que la herramienta sea segura para documentos confidenciales, incluso en un portátil del trabajo o en una Wi-Fi pública. Al cerrar la pestaña, tanto el archivo como la contraseña desaparecen.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Qué tan seguro es el cifrado?',
          answer:
            'CoolPDF usa AES-256, el cifrado más fuerte definido por el estándar PDF, el mismo nivel que usan las aplicaciones gubernamentales y bancarias. Sin la contraseña, el contenido no se puede leer.',
        },
        {
          question: '¿Qué pasa si olvido la contraseña?',
          answer:
            'No hay opción de recuperación: esa es precisamente la idea de un cifrado fuerte. CoolPDF nunca ve ni guarda tu contraseña, así que consérvala en un lugar seguro, como un gestor de contraseñas.',
        },
        {
          question: '¿Todos los lectores de PDF respetan los permisos?',
          answer:
            'Los lectores que cumplen el estándar — incluidos Adobe Acrobat, Chrome y macOS Preview — respetan las restricciones de impresión, copia y edición. Son un mecanismo de política, no un DRM, así que tómalos como una solicitud firme, no como una garantía.',
        },
      ],
    },
    'unlock-pdf': {
      metaTitle: 'Desbloquear PDF online gratis — Quitar contraseña | CoolPDF',
      metaDescription:
        'Elimina la protección con contraseña de los PDF que te pertenecen, directamente en tu navegador. Gratis, sin registro.',
      heading: 'Desbloquear PDF',
      intro:
        'Elimina la contraseña de un PDF que te pertenece para que se abra sin ella. El descifrado se ejecuta localmente: ni el archivo ni la contraseña salen de tu dispositivo.',
      legalNote: 'Desbloquea únicamente PDF que te pertenezcan o que tengas permiso para modificar.',
      passwordLabel: 'Contraseña actual (si hace falta)',
      button: 'Desbloquear PDF',
      stepsHeading: 'Cómo desbloquear un PDF',
      steps: [
        'Añade el PDF protegido con contraseña arrastrándolo al área de carga, o haz clic para examinar.',
        'Introduce la contraseña del documento, si es necesario.',
        'Haz clic en «Desbloquear PDF»: la protección se elimina localmente en segundos.',
        'Descarga el PDF desbloqueado. A partir de ahora se abre en cualquier lector sin contraseña.',
      ],
      privacyHeading: 'Elimina contraseñas sin entregar el archivo',
      privacyText:
        'Desbloquear un PDF suele ser cuestión de comodidad: un extracto bancario antiguo que archivaste con una contraseña que te cansa escribir, un contrato escaneado que necesitas unir o anotar, un documento que quieres volver a proteger más tarde con una contraseña mejor. Con una herramienta online típica, quitar esa protección empieza por subir el archivo aún protegido — y la contraseña — al servidor de un desconocido. CoolPDF elimina la protección donde el archivo ya vive. El descifrado ocurre por completo dentro de la pestaña de tu navegador: el documento se lee de tu propio disco, se desbloquea con la contraseña que escribes localmente y se guarda de nuevo sin que un solo byte cruce la red. No hay subida que interceptar, ni registro de tu contraseña, ni copia que quede atrás. Cerrar la pestaña borra todo rastro de ambos.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: 'Olvidé la contraseña. ¿Puede CoolPDF descifrarla?',
          answer:
            'No. CoolPDF elimina la protección solo cuando conoces la contraseña actual: no es una herramienta para descifrar contraseñas, y el cifrado AES-256 no se puede romper de forma realista intentando adivinarla.',
        },
        {
          question: '¿Es legal desbloquear un PDF?',
          answer:
            'Sí, para documentos que te pertenecen o que tienes permiso para modificar, como tus propios extractos archivados. Quitar la protección de archivos sobre los que no tienes derechos puede violar la ley o contratos, y por eso esta página muestra un recordatorio.',
        },
        {
          question: '¿Desbloquear cambia el documento?',
          answer:
            'No. Solo se elimina la capa de cifrado: cada página, imagen y anotación permanece exactamente como estaba en el original.',
        },
      ],
    },
    'watermark-pdf': {
      metaTitle: 'Añadir marca de agua a un PDF — texto o imagen | CoolPDF',
      metaDescription:
        'Estampa una marca de agua de texto o imagen en cada página de tu PDF — en mosaico o centrada, opacidad ajustable — directamente en tu navegador. Gratis.',
      heading: 'Marca de agua PDF',
      intro:
        'Estampa una marca de agua de texto o imagen en cada página de tu PDF — en mosaico diagonal o centrada, con el tamaño, el color y la opacidad que elijas. Todo se ejecuta en tu propio dispositivo.',
      button: 'Añadir marca de agua',
      typeLabel: 'Tipo de marca de agua',
      typeText: 'Texto',
      typeImage: 'Imagen (PNG o JPG)',
      textLabel: 'Texto de la marca de agua',
      textPlaceholder: 'p. ej. CONFIDENCIAL',
      fontSizeLabel: 'Tamaño de fuente',
      colorLabel: 'Color del texto',
      opacityLabel: 'Opacidad',
      layoutLabel: 'Colocación',
      layoutTile: 'Mosaico — repetida en diagonal en cada página',
      layoutCenter: 'Centrada — un sello por página',
      scaleLabel: 'Tamaño de la imagen (respecto al ancho de página)',
      stepsHeading: 'Cómo añadir una marca de agua a un PDF',
      steps: [
        'Añade el PDF que quieres marcar arrastrándolo al área de subida, o haz clic para buscarlo.',
        'Elige una marca de agua de texto o de imagen. Para texto, escribe el contenido y elige tamaño y color; para una imagen, sube un PNG o JPG y ajusta su tamaño.',
        'Ajusta la opacidad y elige la colocación — mosaico diagonal en cada página o un único sello centrado — y haz clic en «Añadir marca de agua».',
        'Descarga el PDF con marca de agua. El archivo original permanece intacto en tu dispositivo.',
      ],
      privacyHeading: 'Marca documentos sensibles sin subirlos',
      privacyText:
        'Estampar una marca de agua en un PDF suele ser el último paso antes de compartir algo sensible: un borrador de contrato marcado como confidencial, una vista previa de diseño con el nombre de tu estudio, una copia de un documento de identidad válida para un solo uso. Con una herramienta online convencional, ese original sin protección se sube a un servidor antes de que la marca de agua siquiera lo toque. CoolPDF funciona al revés. Las marcas de texto se dibujan con las fuentes de tu propio dispositivo — por eso el chino, el árabe o los emojis funcionan tan bien como el español —, se convierten en imagen y se estampan en las páginas directamente en la pestaña de tu navegador. Las imágenes tampoco viajan. Nada se sube, se encola ni se almacena en otro lugar, lo que hace que la herramienta sea segura para diseños inéditos, material bajo NDA y documentos personales. Cierra la pestaña y todo rastro desaparece.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Puedo usar texto en chino, árabe o emojis en la marca de agua?',
          answer:
            'Sí. Las marcas de texto se dibujan con las fuentes de tu dispositivo y se incrustan como imagen, así que funciona cualquier idioma y símbolo — no solo el alfabeto latino al que se limitan las fuentes PDF clásicas.',
        },
        {
          question: '¿Qué diferencia hay entre mosaico y centrada?',
          answer:
            'El mosaico repite la marca en diagonal por toda la página, lo que dificulta recortarla — ideal para sellos de confidencialidad. La centrada coloca una única copia diagonal en el medio de cada página, con un aspecto más parecido a un logotipo.',
        },
        {
          question: '¿Qué formatos de imagen puedo usar como marca de agua?',
          answer:
            'PNG y JPG. PNG es la mejor opción para logotipos porque conserva la transparencia, de modo que el contenido de la página sigue visible alrededor de tu marca. Usa el control deslizante para escalar la imagen respecto al ancho de la página.',
        },
      ],
    },
    'page-numbers': {
      metaTitle: 'Añadir números de página a PDF online gratis | CoolPDF',
      metaDescription:
        'Inserta números de página en tu PDF — seis posiciones, formatos «1 de N», página inicial a tu elección — localmente en tu navegador. Gratis.',
      heading: 'Números de página',
      intro:
        'Añade números de página a tu PDF exactamente donde quieras: seis posiciones, dos formatos y control total sobre dónde empieza la numeración. El procesamiento ocurre por completo en tu dispositivo.',
      button: 'Añadir números de página',
      positionLabel: 'Posición',
      posTopLeft: 'Arriba a la izquierda',
      posTopCenter: 'Arriba al centro',
      posTopRight: 'Arriba a la derecha',
      posBottomLeft: 'Abajo a la izquierda',
      posBottomCenter: 'Abajo al centro',
      posBottomRight: 'Abajo a la derecha',
      formatLabel: 'Formato',
      formatN: 'Solo número (1, 2, 3…)',
      formatTotal: 'Número y total (1 de N)',
      totalConnector: 'de',
      startNumberLabel: 'Primer número',
      startPageLabel: 'Empezar la numeración en la página',
      fontSizeLabel: 'Tamaño de fuente',
      stepsHeading: 'Cómo añadir números de página a un PDF',
      steps: [
        'Añade el PDF que quieres numerar arrastrándolo al área de subida, o haz clic para buscarlo.',
        'Elige una de las seis posiciones — una esquina, o centrado arriba o abajo — y el formato: solo el número, o número y total.',
        'Si lo necesitas, cambia el primer número, la página donde empieza la numeración y el tamaño de fuente, y haz clic en «Añadir números de página».',
        'Descarga el PDF numerado. El archivo original permanece intacto en tu dispositivo.',
      ],
      privacyHeading: 'Numera documentos terminados sin subirlos',
      privacyText:
        'Añadir números de página suele ser el toque final antes de que un documento salga: una tesis para la imprenta, un contrato para firmar, un informe para la junta. En ese momento el archivo suele estar terminado y ser confidencial — y aun así, la mayoría de las herramientas online piden subirlo primero. CoolPDF inserta los números donde el archivo ya está: en tu propio dispositivo. El PDF lo lee tu navegador, se estampa con los números en la posición y el formato elegidos y se guarda directamente en tu disco. Nada cruza la red, así que nada puede ser interceptado, registrado ni olvidado en un servidor. Eso hace que la herramienta sea segura para documentos legales, historiales médicos e informes financieros — y rápida, porque no hay cola de subida ni copia procesada que descargar de otro sitio. Al cerrar la pestaña, todo rastro del documento desaparece.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Puedo saltarme la portada?',
          answer:
            'Sí. Pon «Empezar la numeración en la página» en 2 (o en una página posterior) y las primeras páginas quedan limpias. Combínalo con «Primer número» si la numeración visible debe empezar en 1 — o continúa una secuencia existente.',
        },
        {
          question: '¿Qué muestra el formato «1 de N»?',
          answer:
            'Muestra el número actual y el número total de páginas del documento, por ejemplo «3 of 12». El total siempre cuenta todas las páginas del archivo, incluidas las no numeradas del principio.',
        },
        {
          question: '¿Se solaparán los números con mi contenido?',
          answer:
            'Los números se colocan en el margen, a 24 puntos del borde. La mayoría de los documentos deja esa zona libre, pero si tu contenido llega hasta el borde, elige una posición en el lado opuesto o un tamaño de fuente menor.',
        },
      ],
    },
    'pdf-to-markdown': {
      metaTitle: 'Convertidor de PDF a Markdown online gratis | CoolPDF',
      metaDescription:
        'Convierte el texto de un PDF en Markdown limpio — títulos, párrafos y listas detectados automáticamente — localmente en tu navegador. Gratis.',
      heading: 'PDF a Markdown',
      intro:
        'Convierte el texto de tu PDF en Markdown limpio y estructurado: títulos, párrafos y listas detectados automáticamente, encabezados y pies de página eliminados. La conversión se ejecuta por completo en tu navegador.',
      button: 'Convertir a Markdown',
      scopeLabel: 'Páginas',
      scopeAll: 'Todas las páginas',
      scopeCustom: 'Solo páginas seleccionadas',
      pagesLabel: 'Páginas',
      pagesPlaceholder: 'p. ej. 1-3, 5',
      stepsHeading: 'Cómo convertir PDF a Markdown',
      steps: [
        'Añade el PDF que quieres convertir arrastrándolo al área de subida, o haz clic para buscarlo.',
        'Elige si convertir todas las páginas o solo un rango (por ejemplo 1-3, 5).',
        'Haz clic en «Convertir a Markdown» — los títulos, párrafos y listas se detectan automáticamente, y los encabezados y pies de página repetidos se eliminan.',
        'Descarga el archivo Markdown y ábrelo en cualquier editor, aplicación de notas o generador de sitios estáticos.',
      ],
      privacyHeading: 'Convierte documentos a Markdown sin subirlos',
      privacyText:
        'Convertir un PDF a Markdown suele significar pasarlo por una herramienta de IA o un conversor en la nube — y subir todo el documento en el proceso. Eso es un problema cuando el archivo es un borrador de artículo, un informe interno o un contrato del que necesitas citar. CoolPDF hace la extracción en local: un motor PDF que se ejecuta en tu navegador lee la capa de texto, detecta los títulos a partir de los tamaños de fuente, reconstruye párrafos y listas y te entrega un archivo Markdown limpio. El documento nunca sale de tu dispositivo: no hay nada que interceptar ni nada almacenado en servidores ajenos. Incluso funciona sin conexión — carga la página, desconéctate y convierte. Al cerrar la pestaña, tanto el PDF como el Markdown desaparecen.',
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿También se extraen las imágenes?',
          answer:
            'No. El conversor solo extrae texto — títulos, párrafos y listas. Las imágenes incrustadas se omiten; exporta por separado las páginas con muchas figuras si las necesitas (la herramienta PDF a JPG puede ayudar).',
        },
        {
          question: '¿Cómo se detectan los títulos?',
          answer:
            'Por el tamaño de fuente. El tamaño más frecuente se trata como cuerpo de texto; las líneas notablemente más grandes se convierten en títulos — #, ## o ### según cuánto más grandes sean. La detección es heurística, así que siempre conviene revisar rápidamente el resultado.',
        },
        {
          question: '¿Por qué aparece un mensaje sobre un PDF escaneado?',
          answer:
            'Los escaneos son fotos de páginas sin una capa de texto real, así que no hay nada que extraer. Pasa primero el archivo por un software OCR — cuando el escaneo tenga capa de texto, esta herramienta podrá convertirlo.',
        },
      ],
    },
  },
};
