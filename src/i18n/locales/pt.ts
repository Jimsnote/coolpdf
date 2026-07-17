export const pt = {
  site: {
    name: 'CoolPDF',
    description: 'Ferramentas de PDF gratuitas que respeitam a sua privacidade',
  },
  nav: {
    home: 'Início',
    tools: 'Ferramentas',
    about: 'Sobre',
    faq: 'Perguntas frequentes',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  languageSwitcher: {
    label: 'Idioma',
  },
  footer: {
    pillars:
      'Processamento 100% no lado do cliente · Os seus ficheiros nunca saem do seu dispositivo · Sem necessidade de cadastro',
    pagesHeading: 'Páginas',
    about: 'Sobre',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Serviço',
    faq: 'Perguntas frequentes',
    github: 'GitHub',
    copyright: '© {year} CoolPDF. Todos os direitos reservados.',
  },
  common: {
    comingSoon: 'Em breve',
  },
  home: {
    metaTitle:
      'Ferramentas de PDF grátis que respeitam a sua privacidade | CoolPDF',
    metaDescription:
      'Junte, divida, compacte e proteja PDFs diretamente no seu navegador. Processamento 100% local — sem uploads, sem cadastro, grátis para sempre.',
    hero: {
      title: 'Ferramentas de PDF grátis que respeitam a sua privacidade',
      subtitle:
        'Junte, divida, compacte e proteja PDFs diretamente no seu navegador. Sem uploads. Sem cadastro. Sem servidores. Os seus ficheiros são processados localmente no seu dispositivo — nunca tocam na internet.',
      cta: 'Ver as ferramentas',
    },
    pillars: {
      heading: 'Ferramentas de PDF sem comprometer a privacidade',
      items: [
        {
          title: 'Sem uploads',
          description:
            'Os seus ficheiros nunca saem do seu dispositivo. Todas as ferramentas funcionam localmente no seu navegador, por isso nada é enviado para um servidor.',
        },
        {
          title: 'Sem cadastro',
          description:
            'Sem contas, sem endereços de e-mail, sem esperas. Abra a página e comece a trabalhar imediatamente.',
        },
        {
          title: 'Grátis para sempre',
          description:
            "Todas as ferramentas são completamente gratuitas, sem limites de utilização, sem marcas d'água e sem nível premium.",
        },
      ],
    },
    toolsSection: {
      heading: 'As ferramentas',
      subheading:
        'Doze ferramentas essenciais de PDF, cada uma a funcionar inteiramente no seu próprio dispositivo.',
    },
    why: {
      heading: 'Por que o processamento local é importante',
      paragraphs: [
        'A maioria das ferramentas de PDF online pede-lhe que envie os seus ficheiros para os respetivos servidores antes de que algo aconteça. É uma troca estranha quando se para para pensar: para girar uma página ou juntar dois documentos, entrega o ficheiro em si. E os PDFs raramente são triviais — são contratos, declarações de impostos, registos médicos, extratos bancários e documentos de identidade. Depois de enviado, o ficheiro percorre uma infraestrutura que não controla: servidores web, filas, armazenamento temporário, cópias de segurança. Não tem como verificar quando é realmente eliminado, nem quem pode aceder a ele entretanto.',
        'O CoolPDF adota a abordagem oposta. Em vez de enviar o ficheiro para o processamento, enviamos o processamento para o ficheiro. Os navegadores modernos são notavelmente poderosos, e o WebAssembly permite-nos executar motores de PDF de nível industrial diretamente no separador do navegador, a uma velocidade quase nativa. Quando utiliza uma ferramenta do CoolPDF, o documento é lido pelo seu próprio dispositivo, transformado por código em execução no seu próprio navegador e guardado de volta no seu próprio disco. Em nenhum momento um único byte do ficheiro atravessa a rede.',
        'Este design é melhor em todas as dimensões que importam. É mais privado, porque não há upload para interceptar ou divulgar. É mais rápido, porque não há ida e volta a um servidor nem fila de espera. É mais fiável, porque as ferramentas continuam a funcionar mesmo com uma ligação instável. E é mais barato de operar, e é por isso que o CoolPDF pode ser genuinamente grátis, sem limites de utilização.',
        'Achamos que é assim que as ferramentas de documentos sempre deveriam ter funcionado. Os seus ficheiros pertencem ao seu dispositivo — e é exatamente aí que o CoolPDF os mantém.',
      ],
    },
    proof: {
      heading: 'Não acredite apenas na nossa palavra',
      items: [
        {
          title: 'Fique offline',
          description:
            'Desligue-se da internet depois de esta página carregar — todas as ferramentas continuam a funcionar.',
        },
        {
          title: 'Observe a rede',
          description:
            'Abra as ferramentas de desenvolvedor (F12) → aba Rede enquanto utiliza uma ferramenta — zero uploads de ficheiros.',
        },
        {
          title: 'Audite o código',
          description:
            'O nosso código é open source (AGPL-3.0) — audite-o por si próprio no GitHub.',
        },
      ],
    },
  },
  tools: {
    'merge-pdf': {
      name: 'Juntar PDF',
      description: 'Combine vários PDFs num único ficheiro, na ordem que quiser.',
    },
    'split-pdf': {
      name: 'Dividir PDF',
      description: 'Extraia um intervalo de páginas ou divida um PDF em documentos separados.',
    },
    'compress-pdf': {
      name: 'Compactar PDF',
      description: 'Reduza o tamanho do ficheiro mantendo a qualidade de que precisa.',
    },
    'rotate-pdf': {
      name: 'Girar PDF',
      description: 'Gire páginas individuais ou um documento inteiro em segundos.',
    },
    'organize-pdf': {
      name: 'Organizar PDF',
      description: 'Reordene, elimine e reorganize páginas com arrastar e soltar.',
    },
    'pdf-to-jpg': {
      name: 'PDF para JPG',
      description: 'Transforme cada página do PDF numa imagem JPG de alta qualidade.',
    },
    'jpg-to-pdf': {
      name: 'JPG para PDF',
      description: 'Converta imagens JPG num documento PDF limpo e fácil de partilhar.',
    },
    'protect-pdf': {
      name: 'Proteger PDF',
      description: 'Adicione encriptação por palavra-passe para manter o seu PDF privado.',
    },
    'unlock-pdf': {
      name: 'Desbloquear PDF',
      description: 'Remova a proteção por palavra-passe de PDFs que lhe pertencem.',
    },
    'watermark-pdf': {
      name: "Marca d'água PDF",
      description: 'Carimbe texto ou uma imagem sobre todas as páginas do seu documento.',
    },
    'page-numbers': {
      name: 'Números de página',
      description: 'Adicione números de página ao seu PDF, exatamente onde quiser.',
    },
    'pdf-to-markdown': {
      name: 'PDF para Markdown',
      description: 'Extraia Markdown limpo e estruturado de qualquer PDF.',
    },
  },
  about: {
    metaTitle: 'Sobre nós | CoolPDF',
    metaDescription:
      'O CoolPDF é um conjunto de ferramentas de PDF gratuito e de código aberto que processa todos os ficheiros localmente no seu navegador. Saiba por que o construímos assim.',
    heading: 'Sobre o CoolPDF',
    sections: [
      {
        title: 'A nossa missão',
        paragraphs: [
          'O CoolPDF existe para tornar o trabalho quotidiano com PDF — juntar, dividir, compactar, proteger — gratuito, instantâneo e privado para todos. Acreditamos que nunca deve ter de trocar os seus documentos por conveniência, por isso construímos um conjunto de ferramentas em que os ficheiros ficam consigo e as ferramentas vêm até ao seu navegador.',
        ],
      },
      {
        title: 'Por que o construímos assim',
        paragraphs: [
          'A maioria das ferramentas de PDF online exige que envie os seus ficheiros para um servidor antes de que algo aconteça. Isso significa que contratos, declarações de impostos, documentos de identidade e registos médicos passam por uma infraestrutura que não controla — servidores, filas e cópias de segurança operados por terceiros, sob políticas de privacidade que poucas pessoas leem.',
          'Os navegadores modernos são suficientemente poderosos para que nada disto seja mais necessário. O CoolPDF compila motores de PDF de nível industrial para WebAssembly e executa-os diretamente no seu dispositivo. O ficheiro nunca sai do seu computador, porque não há para onde ir — o CoolPDF simplesmente não tem servidores de upload.',
        ],
      },
      {
        title: 'Não acredite apenas na nossa palavra',
        paragraphs: [
          'As promessas de privacidade são fáceis de fazer e difíceis de verificar, por isso tornámos o CoolPDF verificável por design:',
        ],
        list: [
          'Desligue-se da internet depois de uma página carregar — todas as ferramentas continuam a funcionar, porque nada depende de um servidor.',
          'Abra as ferramentas de desenvolvedor do seu navegador (F12) e observe a aba Rede enquanto utiliza uma ferramenta — verá zero uploads de ficheiros.',
          'Leia o código-fonte. O CoolPDF é open source sob a licença AGPL-3.0, por isso qualquer pessoa pode auditar exatamente o que acontece a um ficheiro.',
        ],
      },
      {
        title: 'O que não fazemos',
        paragraphs: ['A lista de coisas que o CoolPDF não faz é tão importante como a do que faz:'],
        list: [
          'Não enviamos os seus ficheiros — não existe nenhum backend capaz de os receber.',
          'Não armazenamos os seus ficheiros — fechar o separador remove qualquer vestígio.',
          'Não analisamos o conteúdo dos seus documentos.',
          'Não exigimos uma conta, um endereço de e-mail nem qualquer informação pessoal.',
          "Não impomos limites de utilização, marcas d'água nem níveis premium.",
        ],
      },
      {
        title: 'Código aberto',
        paragraphs: [
          'O CoolPDF é software livre, publicado sob a GNU Affero General Public License v3.0 (AGPL-3.0). O código-fonte completo está disponível no GitHub — inspecione-o, audite-o ou contribua para ele.',
        ],
      },
      {
        title: 'Contacto',
        paragraphs: [
          'Perguntas, comentários ou relatórios de erros? Escreva-nos para support@getcoolpdf.com. As mensagens são entregues através do Cloudflare Email Routing.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Política de Privacidade | CoolPDF',
    metaDescription:
      'O CoolPDF processa todos os ficheiros localmente no seu navegador — nunca recebemos, armazenamos ou acedemos aos seus documentos. Leia a nossa política de privacidade.',
    heading: 'Política de Privacidade',
    lastUpdated: 'Última atualização: julho de 2026',
    tldr: {
      title: 'Resumo',
      items: [
        'Os seus ficheiros são processados 100% localmente no seu navegador. Nunca os recebemos, armazenamos ou sequer tocamos neles.',
        'Sem conta, sem endereço de e-mail, sem informações pessoais — nunca.',
        'Utilizamos o Cloudflare Web Analytics, uma ferramenta de estatísticas sem cookies e respeitadora da privacidade.',
        'Apresentamos anúncios do Google AdSense para manter o CoolPDF gratuito. A Google pode usar cookies para anúncios personalizados, e pode desativar isso.',
      ],
    },
    sections: [
      {
        title: '1. Os ficheiros que processa',
        paragraphs: [
          'Esta é a nossa promessa principal: todo o processamento é realizado localmente no seu navegador através de WebAssembly e JavaScript. Os seus ficheiros nunca são transmitidos para os nossos servidores, nem neles armazenados, nem por eles acessíveis. Não temos qualquer capacidade técnica de ver, copiar ou reter qualquer ficheiro que processe — não existe nenhum backend que possa recebê-lo. Fechar o separador do navegador remove todos os vestígios dos seus documentos.',
        ],
      },
      {
        title: '2. Informações que não recolhemos',
        paragraphs: [
          'O CoolPDF não tem contas, por isso não recolhemos endereços de e-mail, palavras-passe nem dados de perfil. Não recolhemos metadados de ficheiros nem guardamos registos de processamento — sem um backend, simplesmente não há para onde esses dados possam ir. Não pedimos, nem queremos, as suas informações pessoais.',
        ],
      },
      {
        title: '3. Análise de tráfego',
        paragraphs: [
          'Utilizamos o Cloudflare Web Analytics para compreender o tráfego agregado — por exemplo, que páginas são populares e, aproximadamente, de onde vêm os visitantes. Não utiliza cookies, não rastreia utilizadores individuais e não recolhe dados pessoais. Não consegue ver os ficheiros que processa, porque nós também não conseguimos.',
        ],
      },
      {
        title: '4. Publicidade — Google AdSense',
        paragraphs: [
          'O CoolPDF é financiado por publicidade servida através do Google AdSense. A Google e os seus parceiros podem usar cookies para apresentar anúncios personalizados com base no seu histórico de navegação. Pode desativar a publicidade personalizada a qualquer momento em Google Ads Settings (adssettings.google.com). Os visitantes do EEE e do Reino Unido verão um aviso de gestão de consentimento antes de ser apresentado qualquer anúncio personalizado. Para mais detalhes, consulte a Política de Privacidade da Google em policies.google.com/privacy.',
        ],
      },
      {
        title: '5. Segurança e retenção de dados',
        paragraphs: [
          'Como nunca recebemos os seus ficheiros, uma violação da nossa infraestrutura não pode expô-los — a segurança de dados mais forte é a dos dados que não temos. Todo o site é servido por HTTPS, e todo o processamento acontece dentro da sandbox do seu navegador.',
        ],
      },
      {
        title: '6. Alterações a esta política',
        paragraphs: [
          'Se alterarmos esta política, publicaremos a versão atualizada nesta página com uma data revista. As alterações relevantes serão destacadas no site.',
        ],
      },
      {
        title: '7. Contacte-nos',
        paragraphs: [
          'Perguntas sobre esta política? Escreva para support@getcoolpdf.com.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Termos de Serviço | CoolPDF',
    metaDescription:
      'Os termos de serviço do CoolPDF — ferramentas de PDF gratuitas, baseadas no navegador, sem contas e sem uploads.',
    heading: 'Termos de Serviço',
    lastUpdated: 'Última atualização: julho de 2026',
    sections: [
      {
        title: '1. Aceitação dos termos',
        paragraphs: [
          'Ao utilizar o CoolPDF, concorda com estes termos. Se não concordar, simplesmente não utilize o site.',
        ],
      },
      {
        title: '2. Descrição do serviço',
        paragraphs: [
          'O CoolPDF fornece ferramentas de PDF gratuitas que funcionam inteiramente no seu navegador. O serviço é fornecido "tal como está" e "conforme disponível", gratuitamente, sem contas e sem limites de utilização.',
        ],
      },
      {
        title: '3. Responsabilidades do utilizador',
        paragraphs: [
          'É o único responsável pelos ficheiros que processa e por ter o direito legal de os utilizar. Concorda em não utilizar o CoolPDF para qualquer fim ilegal.',
        ],
      },
      {
        title: '4. Propriedade intelectual',
        paragraphs: [
          'O código-fonte do CoolPDF é open source sob a GNU Affero General Public License v3.0 (AGPL-3.0). Os seus ficheiros permanecem inteiramente seus — não reivindicamos quaisquer direitos sobre nada do que processa.',
        ],
      },
      {
        title: '5. Exclusão de garantias',
        paragraphs: [
          'O CoolPDF é fornecido sem garantias de qualquer tipo, expressas ou implícitas, incluindo comercialização, adequação a um fim específico e não violação. Guarde sempre uma cópia de segurança dos documentos importantes.',
        ],
      },
      {
        title: '6. Limitação de responsabilidade',
        paragraphs: [
          'Na medida máxima permitida por lei, o CoolPDF e os seus contribuidores não são responsáveis por quaisquer danos indiretos, incidentais ou consequenciais decorrentes da utilização do serviço.',
        ],
      },
      {
        title: '7. Alterações a estes termos',
        paragraphs: [
          'Podemos atualizar estes termos ocasionalmente. A versão atual é sempre publicada nesta página, e a utilização continuada do site constitui aceitação.',
        ],
      },
      {
        title: '8. Contacto',
        paragraphs: ['Perguntas sobre estes termos? Escreva para support@getcoolpdf.com.'],
      },
    ],
  },
  faq: {
    metaTitle: 'Perguntas frequentes | CoolPDF',
    metaDescription:
      'O CoolPDF é mesmo grátis? Os ficheiros são enviados? Funciona offline? Respostas às perguntas mais comuns sobre o CoolPDF.',
    heading: 'Perguntas frequentes',
    items: [
      {
        question: 'O CoolPDF é mesmo grátis?',
        answer:
          "Sim. Todas as ferramentas são completamente gratuitas, sem limites de utilização, sem marcas d'água e sem nível premium. Anúncios discretos são o que mantém o CoolPDF grátis para todos.",
      },
      {
        question: 'Preciso de criar uma conta ou me cadastrar?',
        answer:
          'Não. O CoolPDF nunca pede uma conta, um endereço de e-mail ou qualquer informação pessoal. Abra o site e comece a trabalhar — é só isso.',
      },
      {
        question: 'Os meus ficheiros são enviados para os vossos servidores?',
        answer:
          'Não. O CoolPDF processa cada ficheiro localmente no seu navegador usando WebAssembly. Os seus ficheiros nunca saem do seu dispositivo — não há uploads de todo, porque não existe nenhum servidor capaz de os receber.',
      },
      {
        question: 'O CoolPDF consegue ver, armazenar ou aceder aos meus documentos?',
        answer:
          'Não. Não existe backend, por isso não temos qualquer capacidade técnica de ver, armazenar ou aceder aos seus ficheiros. Pode verificar por si próprio: abra as ferramentas de desenvolvedor do navegador (F12) e observe a aba Rede enquanto utiliza uma ferramenta — zero uploads de ficheiros. O nosso código também é open source, por isso qualquer pessoa pode auditá-lo.',
      },
      {
        question: 'O CoolPDF funciona offline?',
        answer:
          'Sim. Depois de uma página carregar, todas as ferramentas funcionam inteiramente no seu dispositivo, por isso continuam a trabalhar mesmo que se desligue da internet. A colocação completa do site em cache para uso offline, através de um service worker, está no nosso roteiro.',
      },
      {
        question: 'É seguro processar documentos confidenciais com o CoolPDF?',
        answer:
          'Sim. Como os ficheiros são processados localmente e nunca saem do seu dispositivo, o CoolPDF é adequado para contratos, registos médicos e demonstrações financeiras. Todo o código é open source sob a licença AGPL-3.0, por isso investigadores de segurança podem auditar exatamente o que acontece a um ficheiro.',
      },
      {
        question: 'Como é que o CoolPDF ganha dinheiro?',
        answer:
          'Apresentamos anúncios servidos pelo Google AdSense. A publicidade é a nossa única fonte de receita e é o que permite que todas as ferramentas continuem grátis, sem limites de utilização.',
      },
      {
        question: 'Que navegadores são suportados?',
        answer:
          'O CoolPDF funciona nas versões atuais do Chrome, Edge, Firefox e Safari. Qualquer navegador moderno com suporte para WebAssembly — o que, na prática, significa todos eles — consegue executar todas as ferramentas.',
      },
      {
        question: 'O CoolPDF é open source?',
        answer:
          'Sim. O CoolPDF é publicado sob a GNU Affero General Public License v3.0 (AGPL-3.0). O código-fonte completo está disponível no GitHub, e as contribuições são bem-vindas.',
      },
      {
        question: 'Que ferramentas de PDF o CoolPDF oferece?',
        answer:
          "O CoolPDF oferece doze ferramentas: Juntar PDF, Dividir PDF, Compactar PDF, Girar PDF, Organizar PDF, PDF para JPG, JPG para PDF, Proteger PDF, Desbloquear PDF, Marca d'água PDF, Números de página e PDF para Markdown. Todas funcionam localmente no seu navegador.",
      },
    ],
  },
  factSummary:
    'O CoolPDF é um conjunto gratuito de ferramentas de PDF baseado no navegador. Ao contrário das ferramentas de PDF online tradicionais, o CoolPDF processa todos os ficheiros localmente no dispositivo do utilizador usando WebAssembly — os ficheiros nunca são enviados para nenhum servidor. As ferramentas não exigem conta, e-mail nem cadastro e são completamente grátis, sem limites de utilização. Isto torna o CoolPDF adequado para documentos confidenciais, como contratos, registos médicos e demonstrações financeiras.',
  toolUi: {
    privacyNote:
      'Os seus ficheiros são processados localmente no seu navegador — nada é carregado.',
    dropPdfs: 'Largue os ficheiros PDF aqui, ou clique para procurar',
    dropImages: 'Largue imagens JPG ou PNG aqui, ou clique para procurar',
    moveUp: 'Mover para cima',
    moveDown: 'Mover para baixo',
    remove: 'Remover',
    processing: 'A processar…',
    download: 'Descarregar',
    readyTitle: 'O seu ficheiro está pronto',
    errors: {
      onlyPdf: 'Apenas ficheiros PDF são suportados.',
      onlyImages: 'Apenas imagens JPG e PNG são suportadas.',
      tooManyFiles: 'Pode adicionar no máximo {max} ficheiros.',
      fileTooLarge: '“{name}” é demasiado grande — o limite é de {max} MB por ficheiro.',
      minFiles: 'Adicione pelo menos {min} ficheiros.',
      encrypted: 'Este PDF está protegido por palavra-passe e não pode ser processado aqui.',
      corrupted: 'Não foi possível ler este ficheiro como um PDF válido.',
      invalidRange: 'Intervalo de páginas inválido. Use números e hífenes, por exemplo 1-3, 5.',
      rangeOutOfBounds: 'O intervalo de páginas excede o número de páginas do documento.',
      generic: 'Ocorreu um erro ao processar o seu ficheiro. Tente novamente.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'Juntar PDF online grátis — Sem carregamento, sem registo | CoolPDF',
      metaDescription:
        'Combine até 20 PDF num único ficheiro diretamente no seu navegador. Reordene, junte e descarregue — os ficheiros nunca saem do seu dispositivo. Grátis, sem registo.',
      heading: 'Juntar PDF',
      intro:
        'Combine vários documentos PDF num único ficheiro, exatamente na ordem que escolher. A junção é executada inteiramente no seu próprio dispositivo.',
      button: 'Juntar PDF',
      stepsHeading: 'Como juntar ficheiros PDF',
      steps: [
        'Adicione dois ou mais ficheiros PDF arrastando-os para a área de carregamento, ou clique para procurar no seu dispositivo (2–20 ficheiros).',
        'Coloque os ficheiros na ordem pretendida com as setas para cima e para baixo — esta será a ordem das páginas do documento final.',
        'Clique em “Juntar PDF”. Os documentos são combinados localmente, o que normalmente demora apenas alguns segundos.',
        'Descarregue o seu PDF combinado. Os ficheiros originais permanecem intactos no seu dispositivo.',
      ],
      privacyHeading: 'Junte contratos e extratos sem os carregar',
      privacyText:
        'Os PDF que vale a pena juntar são muitas vezes os que menos quer partilhar: contratos assinados, extratos bancários, relatórios médicos, documentos de candidatura. Com uma ferramenta online convencional, cada um desses ficheiros é carregado para um servidor remoto antes de a junção sequer começar. O CoolPDF funciona ao contrário. O código vem para o seu navegador e os ficheiros ficam no seu dispositivo — nada é transmitido, colocado em fila ou armazenado noutro lugar. Isso torna a ferramenta segura num portátil de trabalho, num Wi-Fi público ou com documentos cobertos por um NDA. Também significa que não há quotas artificiais: é o seu computador que faz o trabalho, por isso não há fatura de servidor para lhe passar. Feche o separador e qualquer rasto dos seus documentos desaparece.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Há um limite para quantos PDF posso juntar?',
          answer:
            'Pode juntar entre 2 e 20 ficheiros PDF de uma vez. Cada ficheiro pode ter até 100 MB (50 MB em dispositivos móveis), muito mais do que os documentos do dia a dia precisam.',
        },
        {
          question: 'Juntar altera a qualidade dos meus PDF?',
          answer:
            'Não. As páginas são copiadas para o novo documento exatamente como estão — sem recompressão, sem renderização, sem marcas de água. O texto continua selecionável e as ligações continuam a funcionar.',
        },
        {
          question: 'Os meus ficheiros são carregados para um servidor?',
          answer:
            'Nunca. A junção é executada inteiramente no seu navegador. Pode até desligar-se da internet depois de a página carregar — a ferramenta continua a funcionar.',
        },
      ],
    },
    'split-pdf': {
      metaTitle: 'Dividir PDF online grátis — Extraia páginas localmente | CoolPDF',
      metaDescription:
        'Extraia páginas, divida por intervalos ou corte um PDF a cada N páginas — tudo no seu navegador. Os ficheiros nunca saem do seu dispositivo. Grátis, sem registo, sem marcas de água.',
      heading: 'Dividir PDF',
      intro:
        'Extraia cada página num ficheiro separado, retire intervalos personalizados ou divida um documento em blocos de N páginas. Tudo acontece localmente no seu navegador.',
      button: 'Dividir PDF',
      modeLabel: 'Modo de divisão',
      modeAll: 'Extrair todas as páginas',
      modeRanges: 'Dividir por intervalos',
      modeEveryN: 'Dividir a cada N páginas',
      rangesLabel: 'Intervalos de páginas',
      rangesPlaceholder: 'ex. 1-3, 5-8',
      everyNLabel: 'Páginas por ficheiro',
      stepsHeading: 'Como dividir um PDF',
      steps: [
        'Adicione o PDF que quer dividir arrastando-o para a área de carregamento, ou clique para procurar.',
        'Escolha um modo: cada página separadamente, intervalos personalizados como 1-3, 5-8, ou um bloco a cada N páginas.',
        'Clique em “Dividir PDF”. Cada parte é criada localmente no seu dispositivo em segundos.',
        'Descarregue o resultado — um único PDF se só tiver sido produzida uma parte, caso contrário um arquivo ZIP com todas as partes.',
      ],
      privacyHeading: 'Divida documentos confidenciais sem desvios pela nuvem',
      privacyText:
        'Dividir um PDF serve muitas vezes para partilhar apenas uma parte — uma única fatura de uma exportação de contabilidade, um capítulo de uma digitalização, as páginas relevantes de um contrato. Ironicamente, a maioria das ferramentas online obriga-o primeiro a partilhar o documento inteiro com os servidores delas. O CoolPDF elimina esse desvio por completo: a divisão acontece no separador do seu navegador, na sua própria máquina. O documento é lido, dividido e guardado localmente, e nenhum byte atravessa a rede. É suficientemente seguro para declarações de impostos, processos de RH e documentos jurídicos — e é rápido, porque não há fila de carregamento nem cópia processada para descarregar de outro lugar. Quando fecha o separador, nada fica para trás.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Como extraio apenas algumas páginas?',
          answer:
            'Escolha “Dividir por intervalos” e introduza as páginas de que precisa, por exemplo 1-3, 5-8. Cada intervalo torna-se o seu próprio PDF e todas as partes são descarregadas juntas num ficheiro ZIP.',
        },
        {
          question: 'Dividir reduz a qualidade do meu PDF?',
          answer:
            'Não. As páginas são copiadas inalteradas para os novos documentos — texto, imagens, ligações e formulários ficam exatamente como estavam. Nada é recomprimido nem marcado com marca de água.',
        },
        {
          question: 'Há limite de páginas ou de tamanho de ficheiro?',
          answer:
            'São suportados ficheiros até 100 MB (50 MB em telemóvel), sem limite no número de páginas. Como é o seu próprio dispositivo que faz o trabalho, os documentos muito grandes simplesmente demoram um pouco mais.',
        },
      ],
    },
    'rotate-pdf': {
      metaTitle: 'Girar PDF online grátis — Rode páginas localmente | CoolPDF',
      metaDescription:
        'Rode todas as páginas ou apenas as que escolher em 90°, 180° ou 270° — diretamente no seu navegador. Sem carregamentos, sem registo, sem marcas de água.',
      heading: 'Girar PDF',
      intro:
        'Corrija digitalizações tortas e páginas de cabeça para baixo em segundos. Rode todo o documento ou apenas as páginas selecionadas em 90°, 180° ou 270°.',
      button: 'Girar PDF',
      angleLabel: 'Ângulo de rotação (sentido horário)',
      scopeLabel: 'Aplicar a',
      scopeAll: 'Todas as páginas',
      scopeSelected: 'Apenas as páginas selecionadas',
      pagesLabel: 'Páginas',
      pagesPlaceholder: 'ex. 1, 3, 5-8',
      stepsHeading: 'Como rodar páginas de um PDF',
      steps: [
        'Adicione o PDF que quer corrigir arrastando-o para a área de carregamento, ou clique para procurar.',
        'Escolha um ângulo de rotação — 90°, 180° ou 270° no sentido horário.',
        'Decida se quer rodar todas as páginas ou apenas algumas (por exemplo 1, 3, 5-8) e clique em “Girar PDF”.',
        'Descarregue o PDF rodado. As páginas que não selecionou permanecem exatamente como estavam.',
      ],
      privacyHeading: 'Endireite digitalizações sem as enviar para lado nenhum',
      privacyText:
        'As páginas rodadas vêm normalmente de um scanner ou da câmara do telemóvel: formulários assinados, documentos de identificação, recibos, notas manuscritas. São exatamente os ficheiros que não devem viajar para o servidor de um desconhecido só para ficarem direitos. Com o CoolPDF, a rotação acontece onde o ficheiro já está — no seu navegador. A orientação das páginas é ajustada localmente e o resultado é guardado diretamente no seu dispositivo: sem carregamento, sem cópia num disco remoto e sem política de retenção em que tenha de confiar. A alteração é também permanente e conforme a norma: o documento abre corretamente em qualquer leitor de PDF, em qualquer dispositivo, para quem quer que o receba depois.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Posso rodar apenas algumas páginas?',
          answer:
            'Sim. Escolha “Apenas as páginas selecionadas” e introduza as páginas a rodar, por exemplo 1, 3, 5-8. Todas as outras páginas mantêm a orientação original.',
        },
        {
          question: 'A rotação é permanente?',
          answer:
            'Sim. A rotação é escrita no próprio PDF, por isso as páginas são apresentadas corretamente em todos os leitores de PDF — não apenas naquele que usa para ver o ficheiro.',
        },
        {
          question: 'Rodar afeta o conteúdo das minhas páginas?',
          answer:
            'Não. Apenas a orientação da página muda; o conteúdo permanece intacto. O texto continua nítido, as imagens mantêm a resolução e nada é recomprimido.',
        },
      ],
    },
    'jpg-to-pdf': {
      metaTitle: 'Converter JPG para PDF — Grátis, local, sem carregamento | CoolPDF',
      metaDescription:
        'Transforme imagens JPG e PNG num PDF A4 limpo no seu navegador. Ajustar, preencher ou tamanho original — os ficheiros nunca saem do seu dispositivo. Grátis, sem registo.',
      heading: 'JPG para PDF',
      intro:
        'Converta até 20 imagens JPG ou PNG num único PDF A4 — perfeito para digitalizações, recibos e documentos fotográficos. A conversão é executada inteiramente no seu dispositivo.',
      button: 'Converter para PDF',
      orientationLabel: 'Orientação da página',
      orientationAuto: 'Automática (segue a primeira imagem)',
      orientationPortrait: 'Retrato',
      orientationLandscape: 'Paisagem',
      fitLabel: 'Posicionamento da imagem',
      fitFit: 'Ajustar — imagem inteira visível, com margens',
      fitFill: 'Preencher — cobre a página, corta as margens',
      fitOriginal: 'Original — tamanho natural, centrada',
      stepsHeading: 'Como converter imagens para PDF',
      steps: [
        'Adicione até 20 imagens JPG ou PNG arrastando-as para a área de carregamento, ou clique para procurar.',
        'Escolha a orientação da página: automática segue a proporção da sua primeira imagem, ou force retrato ou paisagem.',
        'Decida como as imagens são posicionadas — ajustadas com margens, a preencher a página ou em tamanho original — e clique em “Converter para PDF”.',
        'Descarregue o seu PDF, com uma imagem por página em formato A4.',
      ],
      privacyHeading: 'Transforme fotos em PDF sem carregar um único píxel',
      privacyText:
        'Fotos e digitalizações tendem a ser pessoais: cópias do passaporte, recibos para os impostos, fotografias de quadros brancos, cartas manuscritas. Um conversor típico carrega cada imagem para um servidor, converte-a lá e devolve-lhe uma ligação de descarga — as suas imagens passam a viver numa infraestrutura que não controla. O CoolPDF faz o mesmo trabalho inteiramente no seu dispositivo. As imagens são lidas pelo seu navegador, paginadas em folhas A4 e guardadas como PDF no seu próprio disco. Nada é carregado, por isso nada pode vazar, ser registado ou acabar num conjunto de dados de treino. Funciona até offline: carregue a página, desligue o Wi-Fi e converta à vontade.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Que formatos de imagem são suportados?',
          answer:
            'Imagens JPG e PNG, até 20 de cada vez. Cada imagem torna-se uma página A4, na ordem em que adicionou os ficheiros.',
        },
        {
          question: 'Qual é a diferença entre Ajustar, Preencher e Original?',
          answer:
            'Ajustar redimensiona a imagem para que fique totalmente visível, com margens. Preencher redimensiona-a para cobrir a página inteira, cortando as margens. Original mantém o tamanho natural da imagem, centrada na página.',
        },
        {
          question: 'As minhas imagens perdem qualidade?',
          answer:
            'Não. As imagens são incorporadas exatamente como estão — sem recompressão. O PDF simplesmente envolve os dados originais da sua imagem: o que vê na imagem é o que obtém no PDF.',
        },
      ],
    },
  },
};
