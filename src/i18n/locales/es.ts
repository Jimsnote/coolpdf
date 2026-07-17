export const es = {
  site: {
    name: 'CoolPDF',
    description: 'Herramientas PDF gratuitas que respetan tu privacidad',
  },
  nav: {
    home: 'Inicio',
    tools: 'Herramientas',
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
    metaTitle: 'Herramientas PDF gratuitas que respetan tu privacidad | CoolPDF',
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
      'CoolPDF es un conjunto de herramientas PDF gratuito y de código abierto que procesa cada archivo localmente en tu navegador. Descubre por qué lo construimos así.',
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
        'Usamos Cloudflare Web Analytics, una herramienta de estadísticas sin cookies y respetuosa con la privacidad.',
        'Mostramos anuncios de Google AdSense para mantener CoolPDF gratuito. Google puede usar cookies para anuncios personalizados, y puedes desactivarlos.',
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
          'Usamos Cloudflare Web Analytics para comprender el tráfico agregado: por ejemplo, qué páginas son populares y de dónde proceden aproximadamente los visitantes. No usa cookies, no rastrea a usuarios individuales y no recopila datos personales. No puede ver los archivos que procesas, porque nosotros tampoco podemos.',
        ],
      },
      {
        title: '4. Publicidad — Google AdSense',
        paragraphs: [
          'CoolPDF se financia con publicidad servida a través de Google AdSense. Google y sus socios pueden usar cookies para mostrar anuncios personalizados según tu historial de navegación. Puedes desactivar la publicidad personalizada en cualquier momento desde Google Ads Settings (adssettings.google.com). Los visitantes del EEE y el Reino Unido verán un aviso de gestión del consentimiento antes de que se muestre cualquier anuncio personalizado. Para más detalles, consulta la política de privacidad de Google en policies.google.com/privacy.',
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
          'Sí. Todas las herramientas son completamente gratuitas, sin límites de uso, sin marcas de agua y sin versión premium. Unos anuncios discretos son lo que mantiene CoolPDF gratis para todos.',
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
          'Mostramos anuncios servidos por Google AdSense. La publicidad es nuestra única fuente de ingresos y es lo que permite que cada herramienta siga siendo gratuita y sin límites de uso.',
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
};
