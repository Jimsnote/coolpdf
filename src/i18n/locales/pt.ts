export const pt = {
  site: {
    name: 'CoolPDF',
    description: 'Ferramentas de PDF gratuitas que respeitam a sua privacidade',
  },
  nav: {
    home: 'Início',
    tools: 'Ferramentas',
    guides: 'Guides',
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
      'Processamento 100% no lado do cliente · Os seus ficheiros nunca saem do seu dispositivo · Sem necessidade de registo',
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
      'Ferramentas de PDF grátis e privadas | CoolPDF',
    metaDescription:
      'Junte, divida, comprima e proteja PDFs diretamente no seu navegador. Processamento 100% local — sem uploads, sem registo, grátis para sempre.',
    hero: {
      title: 'Ferramentas de PDF grátis que respeitam a sua privacidade',
      subtitle:
        'Junte, divida, comprima e proteja PDFs diretamente no seu navegador. Sem uploads. Sem registo. Sem servidores. Os seus ficheiros são processados localmente no seu dispositivo — nunca tocam na internet.',
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
          title: 'Sem registo',
          description:
            'Sem contas, sem endereços de e-mail, sem esperas. Abra a página e comece a trabalhar imediatamente.',
        },
        {
          title: 'Grátis para sempre',
          description:
            "Todas as ferramentas são completamente gratuitas, sem limites de utilização, sem marcas de água e sem nível premium.",
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
        'A maioria das ferramentas de PDF online pede-lhe que envie os seus ficheiros para os respetivos servidores antes de que algo aconteça. É uma troca estranha quando se para para pensar: para rodar uma página ou juntar dois documentos, entrega o ficheiro em si. E os PDFs raramente são triviais — são contratos, declarações de impostos, registos médicos, extratos bancários e documentos de identidade. Depois de enviado, o ficheiro percorre uma infraestrutura que não controla: servidores web, filas, armazenamento temporário, cópias de segurança. Não tem como verificar quando é realmente eliminado, nem quem pode aceder a ele entretanto.',
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
      name: 'Comprimir PDF',
      description: 'Reduza o tamanho do ficheiro mantendo a qualidade de que precisa.',
    },
    'rotate-pdf': {
      name: 'Rodar PDF',
      description: 'Rode páginas individuais ou um documento inteiro em segundos.',
    },
    'organize-pdf': {
      name: 'Organizar PDF',
      description: 'Reordene, elimine e reorganize páginas com arrastar e largar.',
    },
    'remove-pages': {
      name: 'Remover páginas',
      description: 'Elimine as páginas indesejadas de um PDF em poucos cliques.',
    },
    'extract-pages': {
      name: 'Extrair páginas',
      description: 'Guarde as páginas selecionadas de um PDF como novo documento.',
    },
    'reorder-pages': {
      name: 'Reordenar páginas',
      description: 'Arraste as páginas exatamente para a ordem que quiser.',
    },
    'docx-to-markdown': {
      name: 'Word para Markdown',
      description: 'Converta um documento Word em Markdown limpo, pronto para IA.',
    },
    'xlsx-to-markdown': {
      name: 'Excel para Markdown',
      description: 'Transforme folhas de cálculo em tabelas Markdown.',
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
      name: "Marca de água PDF",
      description: 'Aplique texto ou uma imagem sobre todas as páginas do seu documento.',
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
      'O CoolPDF é um conjunto de ferramentas de PDF gratuito e de código aberto que processa todos os ficheiros localmente no seu navegador. Saiba porquê.',
    heading: 'Sobre o CoolPDF',
    sections: [
      {
        title: 'A nossa missão',
        paragraphs: [
          'O CoolPDF existe para tornar o trabalho quotidiano com PDF — juntar, dividir, comprimir, proteger — gratuito, instantâneo e privado para todos. Acreditamos que nunca deve ter de trocar os seus documentos por conveniência, por isso construímos um conjunto de ferramentas em que os ficheiros ficam consigo e as ferramentas vêm até ao seu navegador.',
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
          "Não impomos limites de utilização, marcas de água nem níveis premium.",
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
      'O CoolPDF processa todos os ficheiros localmente no seu navegador — nunca recebemos nem armazenamos os seus documentos. Leia a nossa política de privacidade.',
    heading: 'Política de Privacidade',
    lastUpdated: 'Última atualização: julho de 2026',
    tldr: {
      title: 'Resumo',
      items: [
        'Os seus ficheiros são processados 100% localmente no seu navegador. Nunca os recebemos, armazenamos ou sequer tocamos neles.',
        'Sem conta, sem endereço de e-mail, sem informações pessoais — nunca.',
        'Podemos utilizar o Cloudflare Web Analytics, uma ferramenta de estatísticas sem cookies e respeitadora da privacidade, quando ativada.',
        'Podemos apresentar anúncios do Google AdSense para manter o CoolPDF gratuito. Se os anúncios estiverem ativados, a Google pode usar cookies para anúncios personalizados, e pode desativar isso.',
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
          'Quando ativado, utilizamos o Cloudflare Web Analytics para compreender o tráfego agregado — por exemplo, que páginas são populares e, aproximadamente, de onde vêm os visitantes. Não utiliza cookies, não rastreia utilizadores individuais e não recolhe dados pessoais. Não consegue ver os ficheiros que processa, porque nós também não conseguimos.',
        ],
      },
      {
        title: '4. Publicidade — Google AdSense',
        paragraphs: [
          'O CoolPDF pode apresentar anúncios servidos através do Google AdSense para manter o serviço gratuito. Se a publicidade estiver ativada, a Google e os seus parceiros podem usar cookies para apresentar anúncios personalizados com base no seu histórico de navegação. Pode desativar a publicidade personalizada a qualquer momento em Google Ads Settings (adssettings.google.com). Antes de qualquer publicidade personalizada ser ativada, será apresentado um aviso de gestão de consentimento aos visitantes do EEE e do Reino Unido. Para mais detalhes, consulte a Política de Privacidade da Google em policies.google.com/privacy.',
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
          "Sim. Todas as ferramentas são completamente gratuitas, sem limites de utilização, sem marcas de água e sem nível premium. Se ativados, anúncios discretos são o que mantém o CoolPDF grátis para todos.",
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
          'Podemos apresentar anúncios servidos pelo Google AdSense. A publicidade é a nossa fonte de receita planeada e é o que permite que todas as ferramentas continuem grátis, sem limites de utilização.',
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
          "O CoolPDF oferece doze ferramentas: Juntar PDF, Dividir PDF, Comprimir PDF, Rodar PDF, Organizar PDF, PDF para JPG, JPG para PDF, Proteger PDF, Desbloquear PDF, Marca de água PDF, Números de página e PDF para Markdown. Todas funcionam localmente no seu navegador.",
      },
    ],
  },
  factSummary:
    'O CoolPDF é um conjunto gratuito de ferramentas de PDF baseado no navegador. Ao contrário das ferramentas de PDF online tradicionais, o CoolPDF processa todos os ficheiros localmente no dispositivo do utilizador usando WebAssembly — os ficheiros nunca são enviados para nenhum servidor. As ferramentas não exigem conta, e-mail nem registo e são completamente grátis, sem limites de utilização. Isto torna o CoolPDF adequado para documentos confidenciais, como contratos, registos médicos e demonstrações financeiras.',
  toolUi: {
    privacyNote:
      'Os seus ficheiros são processados localmente no seu navegador — nada é carregado.',
    trustChips: ['Sem carregamentos', 'Funciona localmente', 'Sem registo'],
    dropPdfs: 'Largue os ficheiros PDF aqui, ou clique para procurar',
    dropImages: 'Largue imagens JPG ou PNG aqui, ou clique para procurar',
    dropDocx: 'Largue um documento Word (.docx) aqui, ou clique para procurar',
    dropExcel: 'Largue um livro Excel (.xlsx/.xls) aqui, ou clique para procurar',
    moveUp: 'Mover para cima',
    moveDown: 'Mover para baixo',
    remove: 'Remover',
    processing: 'A processar…',
    download: 'Descarregar',
    readyTitle: 'O seu ficheiro está pronto',
    engineLoading: 'A carregar o motor de PDF…',
    engineLoadingProgress: 'A carregar o motor de PDF… {loaded} de {total} MB',
    engineFirstRun: 'A primeira utilização descarrega cerca de {size} MB; depois disso fica em cache no seu dispositivo.',
    errors: {
      onlyPdf: 'Apenas ficheiros PDF são suportados.',
      onlyImages: 'Apenas imagens JPG e PNG são suportadas.',
      onlyDocx: 'Apenas documentos Word .docx são suportados (o antigo .doc não).',
      onlyExcel: 'Apenas livros Excel (.xlsx/.xls) são suportados.',
      tooManyFiles: 'Pode adicionar no máximo {max} ficheiros.',
      fileTooLarge: '“{name}” é demasiado grande — o limite é de {max} MB por ficheiro.',
      minFiles: 'Adicione pelo menos {min} ficheiros.',
      encrypted: 'Este PDF está protegido por palavra-passe e não pode ser processado aqui.',
      corrupted: 'Não foi possível ler este ficheiro como um PDF válido.',
      invalidRange: 'Intervalo de páginas inválido. Use números e hífenes, por exemplo 1-3, 5.',
      rangeOutOfBounds: 'O intervalo de páginas excede o número de páginas do documento.',
      noPages: 'Pelo menos uma página deve permanecer no documento.',
      wrongPassword: 'A palavra-passe está incorreta. Tente novamente.',
      notEncrypted: 'Este PDF não está protegido por palavra-passe, pelo que não há nada para desbloquear.',
      noText: 'Este PDF parece ser constituído por imagens digitalizadas sem texto extraível.',
      tooManyPages: 'Este documento tem demasiadas páginas para esta ferramenta — o limite é de {max} páginas.',
      filesSkipped: '{count} ficheiro(s) não suportado(s) foram ignorados.',
      totalTooLarge: 'Os ficheiros selecionados são demasiado grandes em conjunto — o limite total é de {max} MB.',
      generic: 'Ocorreu um erro ao processar o seu ficheiro. Tente novamente.',
      corruptedFile:
        'Não foi possível ler este ficheiro — pode estar danificado ou num formato que esta ferramenta não suporta.',
      engineDownload:
        'Não foi possível descarregar o motor PDF (erro de rede). Verifique a sua ligação e tente novamente — nenhum ficheiro foi enviado.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'Juntar PDF online grátis — Sem carregamento | CoolPDF',
      metaDescription:
        'Combine até 20 PDF num único ficheiro diretamente no seu navegador. Reordene, junte e descarregue — os ficheiros nunca saem do seu dispositivo.',
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
      metaTitle: 'Dividir PDF online grátis — Extraia páginas | CoolPDF',
      metaDescription:
        'Extraia páginas, divida por intervalos ou corte um PDF a cada N páginas — tudo no seu navegador. Grátis, sem registo, sem marcas de água.',
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
        'Descarregue o resultado — um único PDF se só tiver sido produzida uma parte, caso contrário um ficheiro ZIP com todas as partes.',
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
      metaTitle: 'Rodar PDF online grátis — Rode páginas localmente | CoolPDF',
      metaDescription:
        'Rode todas as páginas ou apenas as que escolher em 90°, 180° ou 270° — diretamente no seu navegador. Sem carregamentos, sem registo, sem marcas de água.',
      heading: 'Rodar PDF',
      intro:
        'Corrija digitalizações tortas e páginas de cabeça para baixo em segundos. Rode todo o documento ou apenas as páginas selecionadas em 90°, 180° ou 270°.',
      button: 'Rodar PDF',
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
        'Decida se quer rodar todas as páginas ou apenas algumas (por exemplo 1, 3, 5-8) e clique em “Rodar PDF”.',
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
      metaTitle: 'Converter JPG para PDF — Grátis e local | CoolPDF',
      metaDescription:
        'Transforme imagens JPG e PNG num PDF A4 limpo no seu navegador. Ajustar, preencher ou tamanho original — os ficheiros ficam no seu dispositivo.',
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
        'Fotos e digitalizações tendem a ser pessoais: cópias do passaporte, recibos para os impostos, fotografias de quadros brancos, cartas manuscritas. Um conversor típico carrega cada imagem para um servidor, converte-a lá e devolve-lhe uma ligação de transferência — as suas imagens passam a viver numa infraestrutura que não controla. O CoolPDF faz o mesmo trabalho inteiramente no seu dispositivo. As imagens são lidas pelo seu navegador, paginadas em folhas A4 e guardadas como PDF no seu próprio disco. Nada é carregado, por isso nada pode vazar, ser registado ou acabar num conjunto de dados de treino. Funciona até offline: carregue a página, desligue o Wi-Fi e converta à vontade.',
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
    'organize-pdf': {
      metaTitle: 'Organizar páginas PDF online grátis | CoolPDF',
      metaDescription:
        'Reordene páginas de PDF com arrastar e largar, rode ou elimine páginas e descarregue o resultado — tudo no seu navegador. Grátis.',
      heading: 'Organizar páginas PDF',
      intro:
        'Reorganize as páginas com arrastar e largar, rode as que estão tortas e remova as de que não precisa. Uma pré-visualização em tempo real de cada página facilita o trabalho — e tudo acontece no seu dispositivo.',
      button: 'Descarregar PDF organizado',
      loadingPreviews: 'A renderizar as pré-visualizações das páginas…',
      loadMorePreviews: 'Carregar mais pré-visualizações',
      selectAll: 'Selecionar tudo',
      clearSelection: 'Limpar seleção',
      deleteSelected: 'Eliminar selecionadas',
      rotateSelected: 'Rodar selecionadas 90°',
      reset: 'Repor',
      rotatePage: 'Rodar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: '{kept} de {total} páginas serão mantidas',
      stepsHeading: 'Como organizar páginas de um PDF',
      steps: [
        'Adicione o PDF que quer reorganizar arrastando-o para a área de carregamento, ou clique para procurar.',
        'Arraste as miniaturas das páginas para a ordem pretendida — o número em destaque mostra sempre o número da página original.',
        'Rode ou elimine páginas individuais com os botões de cada miniatura, ou selecione várias páginas e utilize a barra de ferramentas. As páginas eliminadas podem ser restauradas com um clique.',
        'Clique em “Descarregar PDF organizado”. O documento reorganizado é montado localmente e guardado no seu dispositivo.',
      ],
      privacyHeading: 'Reorganize documentos confidenciais página a página — em privado',
      privacyText:
        'Reordenar páginas é muitas vezes o último passo antes de um documento sair: trazer a página assinada para a frente de um contrato, remover digitalizações em branco de um ficheiro de impostos, pôr no topo o único capítulo que um cliente pediu. Não são ficheiros que pertençam ao servidor de um desconhecido. O CoolPDF gera as pré-visualizações das páginas e reconstrói o documento inteiramente no seu navegador — o ficheiro é lido do seu próprio disco e o resultado é guardado de volta nele, sem qualquer carregamento pelo meio. Não há fila, não há cópia temporária no armazenamento de terceiros e não há política de retenção em que tenha de confiar. Isso torna a ferramenta segura para processos jurídicos, registos médicos e documentos de RH, mesmo em Wi-Fi público. Feche o separador e nada do seu documento permanece.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Posso anular a eliminação de uma página?',
          answer:
            'Sim. O botão de eliminar apenas marca a página — fica esbatida e pode ser restaurada com mais um clique. As páginas só ficam de fora quando descarrega, e mesmo assim o ficheiro original no seu dispositivo permanece inalterado.',
        },
        {
          question: 'Reorganizar reduz a qualidade do meu PDF?',
          answer:
            'Não. As páginas são copiadas para o novo documento exatamente como estão — sem nova renderização, sem recompressão. O texto continua selecionável, as ligações continuam a funcionar e as rotações são gravadas como metadados de página padrão.',
        },
        {
          question: 'Há um limite de tamanho de ficheiro ou de número de páginas?',
          answer:
            'São suportados ficheiros até 100 MB (50 MB em telemóvel), sem limite de páginas. Em documentos muito longos, as pré-visualizações das páginas são geradas em lotes, para que a ferramenta se mantenha responsiva.',
        },
      ],
    },
    'remove-pages': {
      metaTitle: 'Remover páginas de um PDF grátis online | CoolPDF',
      metaDescription:
        'Elimine as páginas indesejadas de um PDF com um seletor visual — marque, remova, descarregue. 100% no seu navegador, sem carregamentos, sem registo.',
      heading: 'Remover páginas de um PDF',
      intro:
        'Elimine as páginas de que não precisa — digitalizações em branco, anexos a mais, aquela página errada. Cada página mostra uma pré-visualização ao vivo e o documento limpo é reconstruído no seu dispositivo. O ficheiro original permanece intocado.',
      button: 'Remover páginas e descarregar',
      loadingPreviews: 'A renderizar as pré-visualizações das páginas…',
      loadMorePreviews: 'Carregar mais pré-visualizações',
      selectAll: 'Selecionar tudo',
      clearSelection: 'Limpar seleção',
      deleteSelected: 'Eliminar selecionadas',
      rotateSelected: 'Rodar selecionadas 90°',
      reset: 'Repor',
      rotatePage: 'Rodar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: '{kept} de {total} páginas serão mantidas',
      stepsHeading: 'Como remover páginas de um PDF',
      steps: [
        'Adicione o PDF arrastando-o para a área de carregamento, ou clique para procurar — aparece uma pré-visualização de cada página.',
        'Clique no ícone do caixote de cada página que quer remover, ou selecione várias páginas e use «Eliminar selecionadas». Uma página removida fica apenas marcada — clique novamente para a restaurar.',
        'Verifique o contador: mostra quantas das páginas totais serão mantidas no novo documento.',
        'Clique em «Remover páginas e descarregar». O PDF limpo é montado localmente e guardado como removed.pdf.',
      ],
      privacyHeading: 'Retire páginas sensíveis — sem enviar o ficheiro para lado nenhum',
      privacyText:
        'Remover uma página é muitas vezes sobre o que não deve sair das suas mãos: uma página de assinatura, um recibo de salário, um anexo destinado a outro destinatário. Com o CoolPDF o ficheiro nunca sai do seu dispositivo — as páginas são marcadas e o documento é reconstruído inteiramente no seu navegador, sem carregamento e sem cópia temporária num servidor. É seguro para contratos, registos médicos e ficheiros de RH, mesmo em Wi-Fi público.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Posso anular uma página removida?',
          answer:
            'Sim, antes de descarregar. As páginas removidas estão apenas marcadas — esbatidas com um emblema — e mais um clique restaura-as. Após descarregar, o seu ficheiro original no disco permanece inalterado.',
        },
        {
          question: 'Remover páginas reduz a qualidade?',
          answer:
            'Não. As páginas restantes são copiadas exatamente como estão para o novo documento — sem nova renderização e sem recompressão.',
        },
        {
          question: 'Quais são os limites?',
          answer:
            'Ficheiros até 100 MB (50 MB em dispositivos móveis), sem limite de páginas. Os documentos longos carregam as pré-visualizações em lotes para se manterem responsivos.',
        },
      ],
    },
    'extract-pages': {
      metaTitle: 'Extrair páginas de um PDF grátis online | CoolPDF',
      metaDescription:
        'Guarde as páginas selecionadas de um PDF como novo documento — escolha as páginas visualmente e extraia no seu navegador. Sem carregamentos, sem registo.',
      heading: 'Extrair páginas de um PDF',
      intro:
        'Retire exatamente as páginas de que precisa — um capítulo, a página de assinatura, uma única fatura — e guarde-as como novo PDF. Tudo é executado localmente no seu navegador, o documento nunca sai do seu dispositivo.',
      button: 'Extrair páginas selecionadas',
      loadingPreviews: 'A renderizar as pré-visualizações das páginas…',
      loadMorePreviews: 'Carregar mais pré-visualizações',
      selectAll: 'Selecionar tudo',
      clearSelection: 'Limpar seleção',
      deleteSelected: 'Eliminar selecionadas',
      rotateSelected: 'Rodar selecionadas 90°',
      reset: 'Repor',
      rotatePage: 'Rodar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: '{kept} de {total} páginas selecionadas',
      stepsHeading: 'Como extrair páginas de um PDF',
      steps: [
        'Adicione o PDF arrastando-o para a área de carregamento, ou clique para procurar. Aparece uma pré-visualização ao vivo de cada página.',
        'Clique nas miniaturas das páginas que quer extrair — as páginas selecionadas ficam com um contorno realçado e um visto.',
        'Verifique o contador para confirmar quantas páginas estão selecionadas.',
        'Clique em «Extrair páginas selecionadas». As páginas escolhidas são guardadas localmente como novo ficheiro, extracted.pdf.',
      ],
      privacyHeading: 'Partilhe apenas as páginas que quer — em privado',
      privacyText:
        'Extrair é a forma de enviar um capítulo de um relatório ou uma página de um contrato sem expor o resto. O CoolPDF faz a seleção e a reconstrução inteiramente no seu navegador: o ficheiro de origem é lido do seu próprio disco e o novo PDF é escrito de volta nele, sem nada ser carregado entretanto. Sem conta, sem cópia no servidor, sem vestígios depois de fechar o separador.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Posso selecionar páginas de diferentes partes do documento?',
          answer:
            'Sim — clique em qualquer combinação de páginas, em qualquer ordem. O ficheiro extraído mantém as páginas na sua ordem original do documento, e pode arrastar as miniaturas para as reorganizar primeiro.',
        },
        {
          question: 'A extração reduz a qualidade?',
          answer:
            'Não. As páginas são copiadas ao nível do objeto para o novo ficheiro — o texto permanece selecionável e as imagens mantêm a resolução original.',
        },
        {
          question: 'Quais são os limites?',
          answer:
            'Ficheiros até 100 MB (50 MB em dispositivos móveis), sem limite de páginas. As pré-visualizações são renderizadas em lotes para documentos muito longos.',
        },
      ],
    },
    'reorder-pages': {
      metaTitle: 'Reordenar páginas de um PDF grátis online | CoolPDF',
      metaDescription:
        'Reordene as páginas de um PDF arrastando as miniaturas para uma nova ordem — com pré-visualizações ao vivo. 100% no seu navegador, sem carregamentos, sem registo.',
      heading: 'Reordenar páginas de um PDF',
      intro:
        'Arraste as páginas exatamente para a ordem de que precisa — cada página mostra uma pré-visualização ao vivo, para que nada fique fora do lugar. O documento reordenado é montado no seu dispositivo; nada é carregado.',
      button: 'Descarregar PDF reordenado',
      loadingPreviews: 'A renderizar as pré-visualizações das páginas…',
      loadMorePreviews: 'Carregar mais pré-visualizações',
      selectAll: 'Selecionar tudo',
      clearSelection: 'Limpar seleção',
      deleteSelected: 'Eliminar selecionadas',
      rotateSelected: 'Rodar selecionadas 90°',
      reset: 'Repor',
      rotatePage: 'Rodar página 90°',
      deletePage: 'Eliminar página',
      restorePage: 'Restaurar página',
      deletedBadge: 'Eliminada',
      pageLabel: 'Página {n}',
      keptSummary: '{kept} de {total} páginas serão mantidas',
      stepsHeading: 'Como reordenar páginas num PDF',
      steps: [
        'Adicione o PDF arrastando-o para a área de carregamento, ou clique para procurar — aparecem as miniaturas de cada página.',
        'Arraste qualquer miniatura para a sua nova posição; o emblema mostra sempre o número de página original para acompanhar o que mudou.',
        'Opcionalmente rode páginas deitadas ou marque páginas para remoção com os botões em cada miniatura.',
        'Clique em «Descarregar PDF reordenado». O novo documento é criado localmente e guardado como reordered.pdf.',
      ],
      privacyHeading: 'Reorganize documentos confidenciais no seu próprio dispositivo',
      privacyText:
        'Reordenar acontece muitas vezes mesmo antes de um documento sair — mover a página assinada para a frente, reordenar recibos digitalizados, baralhar capítulos. O CoolPDF gera as pré-visualizações e reconstrói o ficheiro inteiramente no seu navegador: nada é carregado, enfileirado ou armazenado num servidor. É seguro para documentos jurídicos, financeiros e médicos, mesmo em Wi-Fi público.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Como sei que a nova ordem está correta?',
          answer:
            'Cada miniatura mostra uma pré-visualização ao vivo mais um emblema com o número de página original, por isso vê sempre de onde vem uma página.',
        },
        {
          question: 'Reordenar reduz a qualidade?',
          answer:
            'Não. As páginas são copiadas inalteradas para o novo documento — sem nova renderização, sem recompressão; as rotações são guardadas como metadados de página padrão.',
        },
        {
          question: 'Quais são os limites?',
          answer:
            'Ficheiros até 100 MB (50 MB em dispositivos móveis), sem limite de páginas. Os documentos muito longos carregam as pré-visualizações em lotes.',
        },
      ],
    },
    'docx-to-markdown': {
      metaTitle: 'Word para Markdown — Grátis e local | CoolPDF',
      metaDescription:
        'Transforme documentos .docx em Markdown limpo para notas, wikis e ferramentas de IA — diretamente no seu navegador. Sem carregamentos, sem registo.',
      heading: 'Word para Markdown',
      intro:
        'Converta documentos .docx em Markdown limpo — títulos, listas, tabelas, negrito e itálico preservados. Perfeito para Obsidian, wikis e assistentes de IA. Tudo é executado no seu dispositivo.',
      button: 'Converter para Markdown',
      stepsHeading: 'Como converter Word para Markdown',
      steps: [
        'Largue o ficheiro .docx na área de carregamento, ou clique para procurar.',
        'Clique em «Converter para Markdown» — a conversão é executada localmente no seu navegador.',
        'Descarregue o ficheiro download.md e cole-o nas suas notas, wikis ou ferramentas de IA.',
      ],
      privacyHeading: 'Os seus documentos ficam no seu dispositivo',
      privacyText:
        'Markdown é muitas vezes a última paragem antes de um documento ir para um assistente de IA ou uma base de conhecimento — e são exatamente os ficheiros que não quer num servidor desconhecido: relatórios internos, rascunhos de contratos, notas de reuniões. O CoolPDF converte inteiramente no seu navegador — sem carregamentos, sem conta e sem vestígios depois de fechar o separador.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Que formatação é preservada?',
          answer:
            'Títulos, listas com marcadores e numeradas, tabelas, negrito, itálico e ligações são convertidos nos seus equivalentes Markdown. Os layouts complexos (caixas de texto, colunas, imagens flutuantes) são simplificados para a ordem de leitura, e as imagens incorporadas não são extraídas.',
        },
        {
          question: 'Funciona com ficheiros .doc?',
          answer:
            'Não — apenas o formato moderno .docx é suportado. Abra os ficheiros .doc antigos no Word ou LibreOffice e guarde-os primeiro como .docx.',
        },
        {
          question: 'Para que serve o Markdown?',
          answer:
            'Obsidian, Notion, wikis, README do GitHub, geradores de sites estáticos, e como entrada limpa para ChatGPT, Claude e outras ferramentas de IA — Markdown é o formato que elas melhor leem.',
        },
      ],
    },
    'xlsx-to-markdown': {
      metaTitle: 'Excel para Markdown — Grátis e local | CoolPDF',
      metaDescription:
        'Converta livros .xlsx em tabelas Markdown — uma secção por folha. Totalmente no seu navegador. Sem carregamentos, sem registo.',
      heading: 'Excel para Markdown',
      intro:
        'Transforme livros Excel em tabelas Markdown limpas — uma secção por folha, prontas para docs, wikis e ferramentas de IA. A conversão é executada inteiramente no seu dispositivo.',
      button: 'Converter para Markdown',
      stepsHeading: 'Como converter Excel para Markdown',
      steps: [
        'Largue o ficheiro .xlsx ou .xls na área de carregamento, ou clique para procurar.',
        'Clique em «Converter para Markdown» — a conversão é executada localmente no seu navegador.',
        'Descarregue o ficheiro download.md com uma tabela Markdown por folha de cálculo.',
      ],
      privacyHeading: 'Os seus números ficam no seu dispositivo',
      privacyText:
        'As folhas de cálculo guardam os números que importam: orçamentos, salários, listas de clientes, modelos financeiros. Convertê-las numa ferramenta online qualquer significa enviar tudo isso para o servidor de outra pessoa. O CoolPDF lê o seu livro e constrói o Markdown inteiramente no seu navegador — nada é carregado, e fechar o separador remove qualquer vestígio.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Como são tratadas as folhas?',
          answer:
            'Cada folha não vazia torna-se uma secção «## Sheet: <nome>» com uma tabela Markdown do GitHub. A primeira linha não vazia torna-se o cabeçalho da tabela.',
        },
        {
          question: 'As fórmulas são convertidas?',
          answer:
            'As células são exportadas com os seus valores calculados tal como guardados no ficheiro, não com as fórmulas em si.',
        },
        {
          question: 'E os ficheiros .xls?',
          answer: 'São suportados tanto os livros modernos .xlsx como os antigos .xls.',
        },
      ],
    },
    'pdf-to-jpg': {
      metaTitle: 'Converter PDF para JPG — Grátis e local | CoolPDF',
      metaDescription:
        'Transforme páginas de PDF em imagens JPG ou PNG a 72, 150 ou 300 DPI — diretamente no seu navegador. Grátis, sem registo.',
      heading: 'PDF para JPG',
      intro:
        'Converta páginas de PDF em imagens JPG ou PNG de alta qualidade. Escolha a resolução e as páginas de que precisa — a conversão é executada inteiramente no seu dispositivo.',
      button: 'Converter para imagens',
      formatLabel: 'Formato de imagem',
      formatJpg: 'JPG — ficheiros mais pequenos',
      formatPng: 'PNG — sem perdas, ficheiros maiores',
      dpiLabel: 'Resolução',
      dpiHint:
        '300 DPI produz imagens muito grandes e pode ser lento e consumir muita memória em documentos longos.',
      dpiReduced:
        'Algumas páginas foram renderizadas com resolução reduzida por excederem o limite de tamanho de canvas do seu dispositivo nos DPI escolhidos.',
      scopeLabel: 'Páginas',
      scopeAll: 'Todas as páginas',
      scopeCustom: 'Páginas selecionadas',
      pagesPlaceholder: 'ex. 1-3, 5',
      renderingProgress: 'A renderizar a página {current} de {total}…',
      stepsHeading: 'Como converter PDF para JPG',
      steps: [
        'Adicione o PDF que quer converter arrastando-o para a área de carregamento, ou clique para procurar.',
        'Escolha o formato de imagem — JPG para ficheiros mais pequenos, PNG para qualidade sem perdas — e a resolução: 72 DPI para uso no ecrã, 150 para documentos, 300 para impressão.',
        'Converta todas as páginas ou introduza um intervalo como 1-3, 5, e clique em “Converter para imagens”.',
        'Descarregue o resultado — uma única imagem se tiver convertido uma página, caso contrário um ficheiro ZIP com uma imagem por página.',
      ],
      privacyHeading: 'Converta páginas em imagens sem entregar o documento',
      privacyText:
        'Transformar um PDF em imagens costuma significar que o documento vai para algum destino visual — uma apresentação, uma aplicação de mensagens, um formulário de carregamento que só aceita imagens. Faturas, certificados e cartas oficiais seguem muitas vezes este caminho. Num conversor online típico, o documento inteiro é primeiro carregado e as imagens voltam de um servidor sobre o qual nada sabe. O CoolPDF renderiza as páginas diretamente no separador do seu navegador, usando a mesma classe de motor de PDF que alimenta os leitores de desktop. O ficheiro nunca atravessa a rede: é lido do seu disco, rasterizado pelo seu dispositivo e guardado de volta nele. Não há nada para interceptar, registar ou divulgar — o que também significa que a ferramenta continua a funcionar num avião, numa fábrica ou em qualquer outro lugar sem ligação.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Que DPI devo escolher?',
          answer:
            '72 DPI corresponde ao tamanho do PDF no ecrã e serve bem para uso na web. 150 DPI é um bom meio-termo para documentos. 300 DPI é qualidade de impressão — nítido, mas as imagens ficam grandes e a renderização demora mais.',
        },
        {
          question: 'Por que recebo um ficheiro ZIP?',
          answer:
            'Cada página do PDF torna-se uma imagem própria. Quando mais do que uma página é convertida, todas as imagens são reunidas num único ficheiro ZIP, para que receba uma única transferência organizada.',
        },
        {
          question: 'Converter para JPG perde qualidade?',
          answer:
            'O JPG usa uma compressão ligeira (92% de qualidade), visualmente indistinguível do original em documentos e fotografias. Escolha PNG se precisar de um resultado sem perdas, perfeito ao píxel.',
        },
      ],
    },
    'compress-pdf': {
      metaTitle: 'Comprimir PDF online grátis — Sem carregamento | CoolPDF',
      metaDescription:
        'Reduza o tamanho de ficheiros PDF com três níveis de qualidade, de 72 a 300 DPI — diretamente no seu navegador. Grátis, sem registo.',
      heading: 'Comprimir PDF',
      intro:
        'Reduza PDFs grandes para uma fração do seu tamanho com três níveis de compressão. O motor de compressão é executado inteiramente no seu próprio dispositivo.',
      button: 'Comprimir PDF',
      levelLabel: 'Nível de compressão',
      levels: {
        extreme: {
          name: 'Extremo',
          description: 'Tamanho mínimo, imagens a 72 DPI — ideal para e-mail e pré-visualizações na web.',
        },
        recommended: {
          name: 'Recomendado',
          description: 'Tamanho e qualidade equilibrados, imagens a 150 DPI — certo para a maioria dos documentos.',
        },
        light: {
          name: 'Ligeiro',
          description: 'Melhor qualidade, imagens a 300 DPI — mantém as páginas prontas para impressão.',
        },
      },
      processingPages: 'A comprimir a página {current} de {total}…',
      stillWorking: 'Ainda a trabalhar — ficheiros grandes podem demorar vários minutos. Mantenha este separador aberto.',
      resultSmaller: '{percent}% mais pequeno',
      resultLarger:
        '{percent}% maior — este PDF já estava bem comprimido. Experimente o nível Ligeiro para manter mais qualidade.',
      stepsHeading: 'Como comprimir um PDF',
      steps: [
        'Adicione o PDF que quer reduzir arrastando-o para a área de carregamento, ou clique para procurar (até 150 MB).',
        'Escolha um nível de compressão: Extremo para o tamanho mínimo, Recomendado para um equilíbrio, ou Ligeiro para qualidade de impressão.',
        'Clique em “Comprimir PDF”. A primeira execução descarrega o motor de compressão uma única vez; depois disso arranca instantaneamente.',
        'Descarregue o PDF comprimido e compare os tamanhos — o ficheiro original permanece intacto no seu dispositivo.',
      ],
      privacyHeading: 'Comprima documentos grandes sem os carregar',
      privacyText:
        'Um PDF que precisa de ser comprimido é normalmente um que está prestes a ser enviado para algum lado — um contrato digitalizado para um advogado, um portefólio para um recrutador, relatórios médicos para uma seguradora. Ironicamente, a maioria dos compressores online obriga-o primeiro a carregar o ficheiro para os seus servidores, pelo que reduzir um documento sensível começa por o entregar. O CoolPDF comprime o documento onde ele já está: dentro do seu navegador, no seu próprio dispositivo. O motor de compressão — o mesmo Ghostscript em que as gráficas confiam há décadas — é compilado para WebAssembly e descarregado para a sua máquina uma única vez. O seu ficheiro é lido do seu disco, reconstruído mais pequeno e guardado de volta nele, sem carregamento, fila ou cópia remota em momento algum. Feche o separador e nada permanece.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Que nível de compressão devo escolher?',
          answer:
            'O “Recomendado” é certo para a maioria dos documentos — equilibra tamanho e legibilidade. Escolha “Extremo” quando tiver de respeitar um limite de anexos de e-mail e cada quilobyte contar, e “Ligeiro” quando o ficheiro for impresso ou ampliado com frequência.',
        },
        {
          question: 'Por que ficou o meu PDF maior em vez de mais pequeno?',
          answer:
            'Alguns PDFs já estão fortemente otimizados — por exemplo, ficheiros gravados por outros compressores. Recodificar as suas imagens pode adicionar bytes em vez de os remover. Nesse caso, fique com o original ou experimente o nível “Ligeiro”, que recomprime de forma menos agressiva.',
        },
        {
          question: 'Por que demora mais a primeira compressão?',
          answer:
            'A primeira execução descarrega o motor de compressão (cerca de 15 MB) para o seu dispositivo. Depois disso fica em cache, pelo que as compressões seguintes arrancam instantaneamente — e funcionam mesmo offline.',
        },
      ],
    },
    'protect-pdf': {
      metaTitle: 'Proteger PDF com palavra-passe grátis — AES-256 | CoolPDF',
      metaDescription:
        'Encripte um PDF com AES-256 e controle as permissões de impressão, cópia e edição — localmente no seu navegador. Sem carregamento, grátis, sem registo.',
      heading: 'Proteger PDF',
      intro:
        'Adicione encriptação por palavra-passe AES-256 ao seu PDF e decida exatamente o que os destinatários podem fazer com ele. Tudo acontece no seu próprio dispositivo.',
      button: 'Proteger PDF',
      passwordLabel: 'Palavra-passe (pelo menos 6 caracteres)',
      confirmLabel: 'Confirmar palavra-passe',
      passwordTooShort: 'A palavra-passe deve ter pelo menos 6 caracteres.',
      passwordMismatch: 'As palavras-passe não coincidem.',
      permissionsHeading: 'Permissões para os destinatários',
      printingLabel: 'Impressão',
      printFull: 'Permitida',
      printLow: 'Apenas em baixa qualidade',
      printNone: 'Não permitida',
      allowCopying: 'Permitir copiar texto e imagens',
      allowModifying: 'Permitir modificar o documento',
      allowAnnotating: 'Permitir comentários e preenchimento de formulários',
      allowAssembling: 'Permitir inserir, rodar e eliminar páginas',
      allowAccessibility: 'Permitir extração de texto para leitores de ecrã',
      stepsHeading: 'Como proteger um PDF',
      steps: [
        'Adicione o PDF que quer proteger arrastando-o para a área de carregamento, ou clique para procurar.',
        'Escolha uma palavra-passe com pelo menos 6 caracteres e introduza-a duas vezes para a confirmar.',
        'Defina as permissões que os destinatários terão depois de abrir o ficheiro — impressão, cópia, edição e mais.',
        'Clique em “Proteger PDF” e descarregue o ficheiro encriptado. Guarde bem a palavra-passe — não há forma de a recuperar.',
      ],
      privacyHeading: 'Encripte documentos sem os revelar — nem a palavra-passe',
      privacyText:
        'Proteger um PDF com palavra-passe é normalmente o último passo antes de enviar algo sensível: um recibo de vencimento para um funcionário, um extrato bancário para um contabilista, um atestado médico para uma seguradora. Usar uma ferramenta baseada em servidor para esse passo final anula o propósito — o original desprotegido viaja pela internet e entrega a palavra-passe escolhida a uma infraestrutura que não controla. O CoolPDF executa a encriptação inteiramente no seu dispositivo. O ficheiro é lido localmente, encriptado com AES-256 dentro do separador do seu navegador e guardado diretamente de volta no seu disco. A palavra-passe que digita nunca atravessa a rede — não há servidor que a possa receber. Isso torna a ferramenta segura para documentos confidenciais, mesmo num portátil de trabalho ou em Wi-Fi público. Quando fecha o separador, o ficheiro e a palavra-passe desaparecem.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Quão forte é a encriptação?',
          answer:
            'O CoolPDF usa AES-256, a encriptação mais forte definida pela norma PDF — o mesmo nível usado por aplicações governamentais e bancárias. Sem a palavra-passe, o conteúdo não pode ser lido.',
        },
        {
          question: 'O que acontece se me esquecer da palavra-passe?',
          answer:
            'Não há opção de recuperação — é esse o propósito de uma encriptação forte. O CoolPDF nunca vê nem guarda a sua palavra-passe, por isso guarde-a num lugar seguro, como um gestor de palavras-passe.',
        },
        {
          question: 'As permissões são respeitadas por todos os leitores de PDF?',
          answer:
            'Os leitores conformes — incluindo o Adobe Acrobat, o Chrome e o macOS Preview — respeitam as restrições de impressão, cópia e edição. São um mecanismo de política e não DRM, por isso encare-as como um pedido forte, não uma garantia.',
        },
      ],
    },
    'unlock-pdf': {
      metaTitle: 'Desbloquear PDF online grátis | CoolPDF',
      metaDescription:
        'Remova a proteção por palavra-passe de PDFs que lhe pertencem, diretamente no seu navegador. Grátis, sem registo.',
      heading: 'Desbloquear PDF',
      intro:
        'Remova a palavra-passe de um PDF que lhe pertence para que abra sem ela. A desencriptação é executada localmente — nem o ficheiro nem a palavra-passe saem do seu dispositivo.',
      legalNote: 'Desbloqueie apenas PDFs que lhe pertencem ou que tem permissão para modificar.',
      passwordLabel: 'Palavra-passe atual (se necessário)',
      button: 'Desbloquear PDF',
      stepsHeading: 'Como desbloquear um PDF',
      steps: [
        'Adicione o PDF protegido por palavra-passe arrastando-o para a área de carregamento, ou clique para procurar.',
        'Introduza a palavra-passe do documento, se necessário.',
        'Clique em “Desbloquear PDF” — a proteção é removida localmente em segundos.',
        'Descarregue o PDF desbloqueado. A partir de agora abre em qualquer leitor sem palavra-passe.',
      ],
      privacyHeading: 'Remova palavras-passe sem entregar o ficheiro',
      privacyText:
        'Desbloquear um PDF é geralmente uma questão de conveniência: um extrato bancário antigo que arquivou com uma palavra-passe que está cansado de digitar, um contrato digitalizado que precisa de juntar ou anotar, um documento que quer voltar a proteger mais tarde com uma palavra-passe melhor. Numa ferramenta online típica, remover essa proteção começa por carregar o ficheiro ainda protegido — e a palavra-passe — para o servidor de um desconhecido. O CoolPDF remove a proteção onde o ficheiro já vive. A desencriptação acontece inteiramente dentro do separador do seu navegador: o documento é lido do seu próprio disco, desbloqueado com a palavra-passe que digita localmente e guardado de volta sem que um único byte atravesse a rede. Não há carregamento para interceptar, não há registo da sua palavra-passe e não fica nenhuma cópia para trás. Fechar o separador apaga todos os vestígios de ambos.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Esqueci-me da palavra-passe. O CoolPDF consegue quebrá-la?',
          answer:
            'Não. O CoolPDF remove a proteção apenas quando sabe a palavra-passe atual — não é uma ferramenta de quebra de palavras-passe, e a encriptação AES-256 não pode realisticamente ser quebrada por tentativas.',
        },
        {
          question: 'É legal desbloquear um PDF?',
          answer:
            'Sim — para documentos que lhe pertencem ou que tem permissão para modificar, como os seus próprios extratos arquivados. Remover a proteção de ficheiros sobre os quais não tem direitos pode violar a lei ou contratos, e é por isso que esta página mostra um aviso.',
        },
        {
          question: 'Desbloquear altera o documento?',
          answer:
            'Não. Apenas a camada de encriptação é removida — cada página, imagem e anotação permanece exatamente como estava no original.',
        },
      ],
    },
    'watermark-pdf': {
      metaTitle: "Adicionar marca de água ao PDF — texto ou imagem | CoolPDF",
      metaDescription:
        "Aplique uma marca de água de texto ou imagem em todas as páginas do seu PDF — em mosaico ou centrada, opacidade ajustável — diretamente no navegador. Grátis.",
      heading: "Marca de água PDF",
      intro:
        "Aplique uma marca de água de texto ou imagem em todas as páginas do seu PDF — em mosaico diagonal ou centrada, com o tamanho, a cor e a opacidade à sua escolha. Tudo é executado no seu próprio dispositivo.",
      button: "Adicionar marca de água",
      typeLabel: "Tipo de marca de água",
      typeText: 'Texto',
      typeImage: 'Imagem (PNG ou JPG)',
      textLabel: "Texto da marca de água",
      textPlaceholder: 'ex. CONFIDENCIAL',
      fontSizeLabel: 'Tamanho da fonte',
      colorLabel: 'Cor do texto',
      opacityLabel: 'Opacidade',
      layoutLabel: 'Posicionamento',
      layoutTile: 'Mosaico — repetida na diagonal em todas as páginas',
      layoutCenter: 'Centrada — uma marca por página',
      scaleLabel: 'Tamanho da imagem (relativo à largura da página)',
      stepsHeading: "Como adicionar uma marca de água a um PDF",
      steps: [
        'Adicione o PDF que quer marcar arrastando-o para a área de carregamento, ou clique para procurar.',
        'Escolha uma marca de texto ou de imagem. Para texto, escreva o conteúdo e escolha o tamanho e a cor; para uma imagem, carregue um PNG ou JPG e defina o tamanho.',
        'Ajuste a opacidade e escolha o posicionamento — mosaico na diagonal em todas as páginas ou uma única marca centrada — e clique em “Adicionar marca de água”.',
        "Descarregue o PDF com marca de água. O ficheiro original permanece intacto no seu dispositivo.",
      ],
      privacyHeading: 'Marque documentos sensíveis sem os enviar',
      privacyText:
        "Aplicar uma marca de água a um PDF é normalmente o último passo antes de partilhar algo sensível: uma minuta de contrato marcada como confidencial, uma pré-visualização de design com o nome do seu estúdio, uma cópia de um documento de identidade que só pode ser usada para um fim. Numa ferramenta online convencional, esse original desprotegido é enviado para um servidor antes sequer de a marca lhe tocar. O CoolPDF funciona ao contrário. As marcas de texto são desenhadas com as fontes do seu próprio dispositivo — é por isso que chinês, árabe ou emojis funcionam tão bem como português —, convertidas em imagem e aplicadas nas páginas diretamente no separador do navegador. As imagens também não viajam. Nada é enviado, posto em fila ou armazenado noutro lugar, o que torna a ferramenta segura para designs inéditos, material sob NDA e documentos pessoais. Feche o separador e qualquer rasto desaparece.",
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: "Posso usar texto em chinês, árabe ou emojis na marca de água?",
          answer:
            'Sim. As marcas de texto são desenhadas com as fontes do seu dispositivo e incorporadas como imagem, por isso qualquer idioma e símbolo funciona — não apenas o alfabeto latino a que os tipos de letra PDF clássicos se limitam.',
        },
        {
          question: 'Qual é a diferença entre mosaico e centrada?',
          answer:
            'O mosaico repete a marca na diagonal por toda a página, o que a torna difícil de recortar — ideal para marcas de confidencialidade. A centrada coloca uma única cópia na diagonal no meio de cada página, com um aspeto mais parecido com um logótipo.',
        },
        {
          question: "Que formatos de imagem posso usar como marca de água?",
          answer:
            'PNG e JPG. O PNG é a melhor escolha para logótipos porque mantém a transparência, pelo que o conteúdo da página permanece visível à volta da sua marca. Use o controlo de tamanho para dimensionar a imagem relativamente à largura da página.',
        },
      ],
    },
    'page-numbers': {
      metaTitle: 'Adicionar números de página ao PDF online grátis | CoolPDF',
      metaDescription:
        'Insira números de página no seu PDF — seis posições, formatos “1 de N”, página inicial à escolha — localmente no seu navegador. Grátis.',
      heading: 'Números de página',
      intro:
        'Adicione números de página ao seu PDF exatamente onde quiser: seis posições, dois formatos e controlo total sobre onde começa a numeração. O processamento acontece inteiramente no seu dispositivo.',
      button: 'Adicionar números de página',
      positionLabel: 'Posição',
      posTopLeft: 'Superior esquerdo',
      posTopCenter: 'Superior centro',
      posTopRight: 'Superior direito',
      posBottomLeft: 'Inferior esquerdo',
      posBottomCenter: 'Inferior centro',
      posBottomRight: 'Inferior direito',
      formatLabel: 'Formato',
      formatN: 'Apenas o número (1, 2, 3…)',
      formatTotal: 'Número e total (1 de N)',
      totalConnector: 'de',
      startNumberLabel: 'Primeiro número',
      startPageLabel: 'Começar a numeração na página',
      fontSizeLabel: 'Tamanho da fonte',
      stepsHeading: 'Como adicionar números de página a um PDF',
      steps: [
        'Adicione o PDF que quer numerar arrastando-o para a área de carregamento, ou clique para procurar.',
        'Escolha uma das seis posições — um canto, ou centrado no topo ou na parte inferior — e o formato: apenas o número, ou número e total.',
        'Se necessário, altere o primeiro número, a página onde começa a numeração e o tamanho da fonte, e clique em “Adicionar números de página”.',
        'Descarregue o PDF numerado. O ficheiro original permanece intacto no seu dispositivo.',
      ],
      privacyHeading: 'Numere documentos finalizados sem os enviar',
      privacyText:
        'Adicionar números de página é muitas vezes o toque final antes de um documento sair: uma tese para a gráfica, um contrato para assinatura, um relatório para a administração. Nessa altura, o ficheiro está normalmente terminado e é confidencial — e, mesmo assim, a maioria das ferramentas online pede primeiro o envio. O CoolPDF insere os números onde o ficheiro já está: no seu próprio dispositivo. O PDF é lido pelo navegador, marcado com os números na posição e no formato escolhidos e guardado diretamente no seu disco. Nada atravessa a rede, pelo que nada pode ser interceptado, registado ou deixado num servidor. Isso torna a ferramenta segura para processos judiciais, registos médicos e relatórios financeiros — e rápida, porque não há fila de envio nem cópia processada para ir buscar a outro lugar. Ao fechar o separador, qualquer rasto do documento desaparece.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'Posso saltar a capa?',
          answer:
            'Sim. Defina “Começar a numeração na página” para 2 (ou uma página posterior) e as primeiras páginas ficam limpas. Combine com “Primeiro número” se a numeração visível deve começar em 1 — ou continue uma sequência existente.',
        },
        {
          question: 'O que mostra o formato “1 de N”?',
          answer:
            'Mostra o número atual e o número total de páginas do documento, por exemplo “3 of 12”. O total conta sempre todas as páginas do ficheiro, incluindo as não numeradas no início.',
        },
        {
          question: 'Os números vão sobrepor-se ao meu conteúdo?',
          answer:
            'Os números são colocados na margem, a 24 pontos da borda. A maioria dos documentos mantém essa área livre, mas se o seu conteúdo chegar até à borda, escolha uma posição no lado oposto ou um tamanho de fonte menor.',
        },
      ],
    },
    'pdf-to-markdown': {
      metaTitle: 'Conversor de PDF para Markdown online grátis | CoolPDF',
      metaDescription:
        'Transforme o texto de um PDF em Markdown limpo — títulos, parágrafos e listas detetados automaticamente — localmente no seu navegador. Grátis.',
      heading: 'PDF para Markdown',
      intro:
        'Transforme o texto do seu PDF em Markdown limpo e estruturado: títulos, parágrafos e listas detetados automaticamente, cabeçalhos e rodapés removidos. A conversão é executada inteiramente no seu navegador.',
      button: 'Converter para Markdown',
      scopeLabel: 'Páginas',
      scopeAll: 'Todas as páginas',
      scopeCustom: 'Apenas páginas selecionadas',
      pagesLabel: 'Páginas',
      pagesPlaceholder: 'ex. 1-3, 5',
      stepsHeading: 'Como converter PDF para Markdown',
      steps: [
        'Adicione o PDF que quer converter arrastando-o para a área de carregamento, ou clique para procurar.',
        'Escolha se quer converter todas as páginas ou apenas um intervalo (por exemplo 1-3, 5).',
        'Clique em “Converter para Markdown” — títulos, parágrafos e listas são detetados automaticamente, e os cabeçalhos e rodapés repetidos são removidos.',
        'Descarregue o ficheiro Markdown e abra-o em qualquer editor, aplicação de notas ou gerador de sites estáticos.',
      ],
      privacyHeading: 'Converta documentos para Markdown sem os enviar',
      privacyText:
        'Converter um PDF para Markdown significa normalmente alimentá-lo numa ferramenta de IA ou num conversor na nuvem — e enviar o documento inteiro no processo. Isso é um problema quando o ficheiro é um rascunho de artigo, um relatório interno ou um contrato que precisa de citar. O CoolPDF faz a extração localmente: um motor de PDF a correr no seu navegador lê a camada de texto, deteta títulos a partir dos tamanhos de fonte, reconstrói parágrafos e listas e entrega-lhe um ficheiro Markdown limpo. O documento nunca sai do seu dispositivo, por isso não há nada para interceptar nem nada armazenado no servidor de terceiros. Funciona até offline — carregue a página, desligue a internet e converta. Ao fechar o separador, tanto o PDF como o Markdown desaparecem.',
      faqHeading: 'Perguntas frequentes',
      faq: [
        {
          question: 'As imagens também são extraídas?',
          answer:
            'Não. O conversor extrai apenas texto — títulos, parágrafos e listas. As imagens incorporadas são ignoradas; exporte separadamente as páginas com muitas figuras, se precisar (a ferramenta PDF para JPG pode ajudar).',
        },
        {
          question: 'Como são detetados os títulos?',
          answer:
            'Pelo tamanho da fonte. O tamanho mais frequente é tratado como corpo de texto; as linhas visivelmente maiores tornam-se títulos — #, ## ou ### consoante a diferença. A deteção é heurística, por isso uma revisão rápida do resultado é sempre boa ideia.',
        },
        {
          question: 'Porque recebo uma mensagem sobre um PDF digitalizado?',
          answer:
            'As digitalizações são fotografias de páginas sem uma camada de texto real, por isso não há nada para extrair. Passe primeiro o ficheiro por software OCR — quando a digitalização tiver uma camada de texto, esta ferramenta poderá convertê-la.',
        },
      ],
    },
  },
};
