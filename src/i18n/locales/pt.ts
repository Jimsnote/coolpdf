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
};
