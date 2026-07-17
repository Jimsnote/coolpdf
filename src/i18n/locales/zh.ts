export const zh = {
  site: {
    name: 'CoolPDF',
    description: '尊重您隐私的免费 PDF 工具',
  },
  nav: {
    home: '首页',
    tools: '工具',
    about: '关于我们',
    faq: '常见问题',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },
  languageSwitcher: {
    label: '语言',
  },
  footer: {
    pillars: '100% 本地处理 · 文件永不离开您的设备 · 无需注册',
    pagesHeading: '页面',
    about: '关于我们',
    privacy: '隐私政策',
    terms: '服务条款',
    faq: '常见问题',
    github: 'GitHub',
    copyright: '© {year} CoolPDF。保留所有权利。',
  },
  common: {
    comingSoon: '即将推出',
  },
  home: {
    metaTitle: '免费 PDF 工具，尊重您的隐私 | CoolPDF',
    metaDescription:
      '在浏览器中直接合并、拆分、压缩和保护 PDF。100% 本地处理——无需上传、无需注册、永久免费。',
    hero: {
      title: '尊重您隐私的免费 PDF 工具',
      subtitle:
        '在浏览器中直接合并、拆分、压缩和保护 PDF。无需上传，无需注册，没有服务器。文件完全在您自己的设备上本地处理——它们从不接触互联网。',
      cta: '浏览全部工具',
    },
    pillars: {
      heading: '不必牺牲隐私的 PDF 工具',
      items: [
        {
          title: '无需上传',
          description:
            '您的文件永不离开您的设备。每个工具都在您的浏览器中本地运行，任何内容都不会被发送到服务器。',
        },
        {
          title: '无需注册',
          description:
            '没有账号，没有邮箱地址，无需等待。打开页面即可立即开始处理。',
        },
        {
          title: '永久免费',
          description:
            '所有工具完全免费，没有使用次数限制，没有水印，也没有付费高级版。',
        },
      ],
    },
    toolsSection: {
      heading: '全部工具',
      subheading: '十二款必备 PDF 工具，每一款都完全在您自己的设备上运行。',
    },
    why: {
      heading: '为什么本地处理很重要',
      paragraphs: [
        '大多数在线 PDF 工具都要求您先把文件上传到他们的服务器，然后才能开始处理。仔细想想，这是一笔奇怪的交易：只是为了旋转一页或合并两份文档，您就得交出文件本身。而 PDF 很少是无足轻重的东西——它们是合同、报税单、病历、银行对账单和身份证件。文件一旦上传，就会经过您无法掌控的基础设施：Web 服务器、任务队列、临时存储、备份系统。您无法验证它何时被真正删除，也不知道在此期间谁能访问它。',
        'CoolPDF 采取了截然相反的做法。我们不是把您的文件送去处理，而是把处理能力送到您的文件身边。现代浏览器的性能非常强大，WebAssembly 让我们能够在浏览器标签页中直接运行工业级 PDF 引擎，速度接近原生。当您使用 CoolPDF 的工具时，文档由您自己的设备读取，由运行在您自己浏览器中的代码完成转换，再保存回您自己的磁盘。在整个过程中，文件的任何一个字节都不会经过网络。',
        '这种设计在每一个关键维度上都更胜一筹。它更私密，因为没有上传，就没有可被拦截或泄露的环节；它更快，因为没有服务器往返传输，也没有排队等待；它更可靠，因为即使网络不稳定，工具也能照常工作；它的运行成本也更低，这正是 CoolPDF 能够真正免费且不设使用限制的原因。',
        '我们认为，文档工具本就应该这样工作。您的文件属于您的设备——而 CoolPDF 所做的，正是让它们留在那里。',
      ],
    },
    proof: {
      heading: '别只听我们说，亲自验证',
      items: [
        {
          title: '断网试试',
          description: '页面加载完成后断开网络连接——所有工具依然可用。',
        },
        {
          title: '观察网络请求',
          description:
            '使用工具时打开开发者工具（F12）→ Network（网络）面板——文件上传数为零。',
        },
        {
          title: '审查代码',
          description:
            '我们的代码以 AGPL-3.0 开源——您可以在 GitHub 上自行审计。',
        },
      ],
    },
  },
  tools: {
    'merge-pdf': {
      name: '合并 PDF',
      description: '按您想要的顺序，将多个 PDF 合并成一个文件。',
    },
    'split-pdf': {
      name: '拆分 PDF',
      description: '提取指定页码范围，或将一个 PDF 拆分为多个独立文档。',
    },
    'compress-pdf': {
      name: '压缩 PDF',
      description: '在保留所需质量的同时，尽可能减小文件体积。',
    },
    'rotate-pdf': {
      name: '旋转 PDF',
      description: '几秒内旋转单个页面或整个文档。',
    },
    'organize-pdf': {
      name: '整理 PDF',
      description: '通过拖放重新排序、删除和调整页面。',
    },
    'pdf-to-jpg': {
      name: 'PDF 转 JPG',
      description: '将 PDF 的每一页转换为高质量 JPG 图片。',
    },
    'jpg-to-pdf': {
      name: 'JPG 转 PDF',
      description: '将 JPG 图片转换为整洁、便于分享的 PDF 文档。',
    },
    'protect-pdf': {
      name: '保护 PDF',
      description: '添加密码加密，保护您的 PDF 隐私。',
    },
    'unlock-pdf': {
      name: '解锁 PDF',
      description: '移除您自己的 PDF 文件上的密码保护。',
    },
    'watermark-pdf': {
      name: 'PDF 加水印',
      description: '在文档的每一页上加盖文字或图片水印。',
    },
    'page-numbers': {
      name: '页码',
      description: '为 PDF 添加页码，位置完全由您决定。',
    },
    'pdf-to-markdown': {
      name: 'PDF 转 Markdown',
      description: '从任意 PDF 中提取干净、结构化的 Markdown。',
    },
  },
  about: {
    metaTitle: '关于我们 | CoolPDF',
    metaDescription:
      'CoolPDF 是一款免费开源的 PDF 工具箱，所有文件都在您的浏览器中本地处理。了解我们为什么选择这样的方式构建它。',
    heading: '关于 CoolPDF',
    sections: [
      {
        title: '我们的使命',
        paragraphs: [
          'CoolPDF 的存在，是为了让日常的 PDF 处理——合并、拆分、压缩、加密保护——对每个人都免费、即时且私密。我们认为，您永远不应该为了方便而交出自己的文档，因此我们打造了这样一套工具箱：文件留在您手中，工具来到您的浏览器里。',
        ],
      },
      {
        title: '为什么我们这样构建',
        paragraphs: [
          '大多数在线 PDF 工具都要求您先把文件上传到服务器，然后才能开始处理。这意味着合同、报税单、身份证件和病历都要经过您无法掌控的基础设施——由别人运营的服务器、队列和备份系统，以及很少有人真正阅读的隐私政策。',
          '现代浏览器已经足够强大，这一切都不再必要。CoolPDF 将工业级 PDF 引擎编译为 WebAssembly，直接在您的设备上运行。文件永远不会离开您的电脑，因为它根本无处可去——CoolPDF 没有任何上传服务器。',
        ],
      },
      {
        title: '别只听我们说',
        paragraphs: [
          '隐私承诺说起来容易、验证起来难，所以我们让 CoolPDF 从设计上就经得起验证：',
        ],
        list: [
          '页面加载完成后断开网络——所有工具依然可用，因为它们不依赖任何服务器。',
          '打开浏览器开发者工具（F12），在使用工具时观察 Network（网络）面板——您会看到文件上传数为零。',
          '阅读源代码。CoolPDF 以 AGPL-3.0 开源，任何人都可以精确审计文件经历了什么。',
        ],
      },
      {
        title: '我们不做什么',
        paragraphs: ['CoolPDF 不做的事情，和它做的事情同样重要：'],
        list: [
          '我们不上传您的文件——没有任何后端可以接收它们。',
          '我们不存储您的文件——关闭标签页，一切痕迹随之消失。',
          '我们不分析您文档的内容。',
          '我们不要求账号、邮箱地址或任何个人信息。',
          '我们不设使用限制，不加水印，也没有付费高级版。',
        ],
      },
      {
        title: '开源',
        paragraphs: [
          'CoolPDF 是自由软件，以 GNU Affero 通用公共许可证 v3.0（AGPL-3.0）发布。完整源代码可在 GitHub 上获取——欢迎查看、审计或参与贡献。',
        ],
      },
      {
        title: '联系我们',
        paragraphs: [
          '有问题、反馈或错误报告？请发送邮件至 support@getcoolpdf.com。邮件通过 Cloudflare Email Routing 投递。',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: '隐私政策 | CoolPDF',
    metaDescription:
      'CoolPDF 在您的浏览器中本地处理所有文件——我们从不接收、存储或访问您的文档。阅读我们的隐私政策。',
    heading: '隐私政策',
    lastUpdated: '最后更新：2026 年 7 月',
    tldr: {
      title: '要点速览',
      items: [
        '您的文件 100% 在您的浏览器中本地处理。我们从不接收、存储，甚至从不接触它们。',
        '没有账号，没有邮箱地址，没有个人信息——永远如此。',
        '我们使用 Cloudflare Web Analytics，这是一款无 Cookie、保护隐私的统计工具。',
        '我们通过 Google AdSense 展示广告来维持 CoolPDF 免费。Google 可能会使用 Cookie 投放个性化广告，您可以选择退出。',
      ],
    },
    sections: [
      {
        title: '1. 您处理的文件',
        paragraphs: [
          '这是我们的核心承诺：所有处理都通过 WebAssembly 和 JavaScript 在您的浏览器中本地完成。您的文件绝不会被传输到我们的服务器、存储在我们的服务器上，也无法被我们的服务器访问。我们在技术上没有能力查看、复制或留存您处理的任何文件——因为根本不存在可以接收文件的后端。关闭浏览器标签页，您文档的所有痕迹即被清除。',
        ],
      },
      {
        title: '2. 我们不收集的信息',
        paragraphs: [
          'CoolPDF 没有账号系统，因此我们不收集邮箱地址、密码或个人资料数据。我们不收集文件元数据，也不保留处理日志——没有后端，这类数据根本无处可去。我们不会索要，也不想要您的个人信息。',
        ],
      },
      {
        title: '3. 统计分析',
        paragraphs: [
          '我们使用 Cloudflare Web Analytics 来了解整体流量情况——例如哪些页面受欢迎、访客大致来自哪里。它不使用 Cookie，不追踪单个用户，也不收集个人数据。它看不到您处理的文件，因为连我们自己都看不到。',
        ],
      },
      {
        title: '4. 广告——Google AdSense',
        paragraphs: [
          'CoolPDF 由 Google AdSense 投放的广告提供资金支持。Google 及其合作伙伴可能会使用 Cookie，根据您的浏览历史投放个性化广告。您可以随时通过 Google Ads Settings（adssettings.google.com）退出个性化广告。来自欧洲经济区和英国的访客在看到任何个性化广告之前，会先看到同意管理提示。详情请参阅 Google 的隐私政策：policies.google.com/privacy。',
        ],
      },
      {
        title: '5. 数据安全与留存',
        paragraphs: [
          '由于我们从不接收您的文件，即使我们的基础设施遭到入侵，也不可能泄露它们——最强大的数据安全，就是我们根本不持有数据。整个网站均通过 HTTPS 提供，所有处理都在您浏览器的沙箱中完成。',
        ],
      },
      {
        title: '6. 本政策的变更',
        paragraphs: [
          '如果我们修改本政策，将在本页面发布更新版本并注明新的日期。重大变更会在网站上显著标出。',
        ],
      },
      {
        title: '7. 联系我们',
        paragraphs: ['对本政策有疑问？请发送邮件至 support@getcoolpdf.com。'],
      },
    ],
  },
  terms: {
    metaTitle: '服务条款 | CoolPDF',
    metaDescription: 'CoolPDF 的服务条款——免费、基于浏览器的 PDF 工具，无需账号，无需上传。',
    heading: '服务条款',
    lastUpdated: '最后更新：2026 年 7 月',
    sections: [
      {
        title: '1. 条款的接受',
        paragraphs: [
          '使用 CoolPDF 即表示您同意本条款。如果您不同意，请不要使用本网站。',
        ],
      },
      {
        title: '2. 服务描述',
        paragraphs: [
          'CoolPDF 提供完全在您的浏览器中运行的免费 PDF 工具。本服务按“现状”和“可用状态”免费提供，无需账号，没有使用限制。',
        ],
      },
      {
        title: '3. 用户责任',
        paragraphs: [
          '您需对自己处理的文件负全部责任，并确保拥有使用这些文件的合法权利。您同意不将 CoolPDF 用于任何非法目的。',
        ],
      },
      {
        title: '4. 知识产权',
        paragraphs: [
          'CoolPDF 源代码以 GNU Affero 通用公共许可证 v3.0（AGPL-3.0）开源。您的文件完全归您所有——我们对您处理的任何内容不主张任何权利。',
        ],
      },
      {
        title: '5. 免责声明',
        paragraphs: [
          'CoolPDF 不提供任何形式的明示或默示担保，包括对适销性、特定用途适用性和不侵权的担保。请务必备份重要文档。',
        ],
      },
      {
        title: '6. 责任限制',
        paragraphs: [
          '在法律允许的最大范围内，CoolPDF 及其贡献者不对因使用本服务而产生的任何间接、附带或后果性损害承担责任。',
        ],
      },
      {
        title: '7. 条款的变更',
        paragraphs: [
          '我们可能会不时更新本条款。最新版本始终发布在本页面，继续使用本网站即表示接受更新后的条款。',
        ],
      },
      {
        title: '8. 联系我们',
        paragraphs: ['对本条款有疑问？请发送邮件至 support@getcoolpdf.com。'],
      },
    ],
  },
  faq: {
    metaTitle: '常见问题 | CoolPDF',
    metaDescription:
      'CoolPDF 真的免费吗？文件会被上传吗？离线能用吗？这里解答关于 CoolPDF 最常见的问题。',
    heading: '常见问题',
    items: [
      {
        question: 'CoolPDF 真的免费吗？',
        answer:
          '真的。所有工具完全免费，没有使用限制，没有水印，也没有付费高级版。正是那些不打扰您的广告，让 CoolPDF 能对所有人保持免费。',
      },
      {
        question: '我需要创建账号或注册吗？',
        answer:
          '不需要。CoolPDF 从不要求账号、邮箱地址或任何个人信息。打开网站即可开始处理——这就是全部的“入门流程”。',
      },
      {
        question: '我的文件会被上传到你们的服务器吗？',
        answer:
          '不会。CoolPDF 使用 WebAssembly 在您的浏览器中本地处理每个文件。您的文件永远不会离开您的设备——根本不存在上传，因为没有任何服务器可以接收它们。',
      },
      {
        question: 'CoolPDF 能看到、存储或访问我的文档吗？',
        answer:
          '不能。没有后端，因此我们在技术上没有能力查看、存储或访问您的文件。您可以亲自验证：打开浏览器开发者工具（F12），在使用工具时观察 Network（网络）面板——文件上传数为零。我们的代码也是开源的，任何人都可以审计。',
      },
      {
        question: 'CoolPDF 离线能用吗？',
        answer:
          '可以。页面加载完成后，每个工具都完全在您的设备上运行，因此即使断开网络连接，工具也能继续工作。通过 Service Worker 实现整站离线缓存已列入我们的路线图。',
      },
      {
        question: '用 CoolPDF 处理机密文档安全吗？',
        answer:
          '安全。由于文件在本地处理、永不离开您的设备，CoolPDF 适合处理合同、病历和财务报表等机密文档。整个代码库以 AGPL-3.0 开源，安全研究人员可以精确审计文件在处理过程中经历了什么。',
      },
      {
        question: 'CoolPDF 如何盈利？',
        answer:
          '我们展示由 Google AdSense 投放的广告。广告是我们唯一的收入来源，也正是它让每个工具都能保持免费且不设使用限制。',
      },
      {
        question: '支持哪些浏览器？',
        answer:
          'CoolPDF 可在当前版本的 Chrome、Edge、Firefox 和 Safari 中使用。任何支持 WebAssembly 的现代浏览器——实际上几乎所有现代浏览器都支持——都能运行全部工具。',
      },
      {
        question: 'CoolPDF 是开源的吗？',
        answer:
          '是的。CoolPDF 以 GNU Affero 通用公共许可证 v3.0（AGPL-3.0）发布。完整源代码可在 GitHub 上获取，欢迎参与贡献。',
      },
      {
        question: 'CoolPDF 提供哪些 PDF 工具？',
        answer:
          'CoolPDF 提供十二款工具：合并 PDF、拆分 PDF、压缩 PDF、旋转 PDF、整理 PDF、PDF 转 JPG、JPG 转 PDF、保护 PDF、解锁 PDF、PDF 加水印、页码和 PDF 转 Markdown。所有工具都在您的浏览器中本地运行。',
      },
    ],
  },
  factSummary:
    'CoolPDF 是一款免费的、基于浏览器的 PDF 工具箱。与传统在线 PDF 工具不同，CoolPDF 使用 WebAssembly 在用户设备上本地处理所有文件——文件绝不会被上传到任何服务器。这些工具无需账号、无需邮箱、无需注册，完全免费且没有使用限制。这使得 CoolPDF 适合处理合同、病历和财务报表等机密文档。',
  toolUi: {
    privacyNote: '您的文件在浏览器本地处理——不会有任何内容被上传。',
    dropPdfs: '将 PDF 文件拖到此处，或点击选择文件',
    dropImages: '将 JPG 或 PNG 图片拖到此处，或点击选择文件',
    moveUp: '上移',
    moveDown: '下移',
    remove: '移除',
    processing: '处理中…',
    download: '下载',
    readyTitle: '您的文件已就绪',
    errors: {
      onlyPdf: '仅支持 PDF 文件。',
      onlyImages: '仅支持 JPG 和 PNG 图片。',
      tooManyFiles: '最多只能添加 {max} 个文件。',
      fileTooLarge: '“{name}”过大——每个文件上限为 {max} MB。',
      minFiles: '请至少添加 {min} 个文件。',
      encrypted: '此 PDF 受密码保护，无法在此处理。',
      corrupted: '无法将此文件读取为有效的 PDF。',
      invalidRange: '页码范围无效。请使用数字和连字符，例如 1-3, 5。',
      rangeOutOfBounds: '页码范围超出了文档的页数。',
      generic: '处理文件时出错，请重试。',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: '合并 PDF 在线免费版——无需上传、无需注册 | CoolPDF',
      metaDescription:
        '在浏览器中直接将最多 20 个 PDF 合并为一个文件。排序、合并、下载——文件永不离开您的设备。免费，无需注册。',
      heading: '合并 PDF',
      intro: '将多个 PDF 文档按您选择的顺序合并为一个文件。合并过程完全在您自己的设备上进行。',
      button: '合并 PDF',
      stepsHeading: '如何合并 PDF 文件',
      steps: [
        '将两个或更多 PDF 文件拖到上传区域，或点击从设备中选择（2–20 个文件）。',
        '使用上移和下移按钮调整文件顺序——这将成为最终文档的页面顺序。',
        '点击“合并 PDF”。文档在本地合并，通常只需几秒钟。',
        '下载合并后的 PDF。原始文件在您的设备上保持原样。',
      ],
      privacyHeading: '不上传，也能合并合同和对账单',
      privacyText:
        '值得合并的 PDF，往往正是您最不想分享的文件：已签署的合同、银行对账单、体检报告、求职材料。使用传统的在线工具时，这些文件中的每一个都要先上传到远程服务器，然后合并才会开始。CoolPDF 反其道而行之：合并代码来到您的浏览器，文件留在您的设备上——没有任何内容被传输、排队或存储到别处。这使得该工具可以安全地用于工作电脑、公共 Wi-Fi，甚至受保密协议约束的文档。这也意味着没有人为的额度限制：工作由您的电脑完成，因此没有服务器成本需要转嫁给您。关闭标签页，您文档的所有痕迹随即消失。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '合并 PDF 的数量有限制吗？',
          answer:
            '一次可以合并 2 到 20 个 PDF 文件。每个文件最大 100 MB（移动设备上为 50 MB），远超日常文档所需。',
        },
        {
          question: '合并会影响 PDF 的质量吗？',
          answer:
            '不会。页面会原样复制到新文档中——不重新压缩、不重新渲染、不加水印。文字仍可选中，链接仍可点击。',
        },
        {
          question: '我的文件会被上传到服务器吗？',
          answer:
            '绝不会。合并完全在您的浏览器中进行。页面加载后您甚至可以断开网络——工具依然可用。',
        },
      ],
    },
    'split-pdf': {
      metaTitle: '拆分 PDF 在线免费版——本地提取页面 | CoolPDF',
      metaDescription:
        '在浏览器中提取页面、按范围拆分，或每 N 页切分一个 PDF。文件永不离开您的设备。免费，无需注册，无水印。',
      heading: '拆分 PDF',
      intro: '将每一页提取为独立文件、按自定义范围拆分，或将文档切成每 N 页一段。一切均在您的浏览器本地完成。',
      button: '拆分 PDF',
      modeLabel: '拆分模式',
      modeAll: '提取所有页面',
      modeRanges: '按范围拆分',
      modeEveryN: '每 N 页拆分',
      rangesLabel: '页码范围',
      rangesPlaceholder: '例如 1-3, 5-8',
      everyNLabel: '每个文件的页数',
      stepsHeading: '如何拆分 PDF',
      steps: [
        '将要拆分的 PDF 拖到上传区域，或点击选择文件。',
        '选择拆分模式：逐页提取、自定义范围（如 1-3, 5-8），或每 N 页一段。',
        '点击“拆分 PDF”。每个部分都会在您的设备上几秒内生成。',
        '下载结果——只产生一个部分时直接下载单个 PDF，否则下载包含所有部分的 ZIP 压缩包。',
      ],
      privacyHeading: '拆分机密文档，无需绕道云端',
      privacyText:
        '拆分 PDF 往往是为了只分享其中一部分——从整本账目中抽出一页发票、从扫描件中取出一章、从合同中取出关键几页。讽刺的是，大多数在线工具都要求您先把整个文档交给它们的服务器。CoolPDF 彻底取消了这条弯路：拆分在您的浏览器标签页中、在您自己的设备上完成。文档在本地被读取、切分并保存，没有任何一个字节经过网络。它足以安全地处理税务资料、人事档案和法律文件；而且速度很快，因为没有上传排队，也不需要从别处下载处理好的副本。关闭标签页，什么都不会留下。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '如何只提取部分页面？',
          answer:
            '选择“按范围拆分”，输入所需页码，例如 1-3, 5-8。每个范围会生成一个独立的 PDF，所有部分会打包成一个 ZIP 文件一起下载。',
        },
        {
          question: '拆分会降低 PDF 的质量吗？',
          answer:
            '不会。页面会原封不动地复制到新文档中——文字、图片、链接和表单都保持原样。不会重新压缩，也不会加水印。',
        },
        {
          question: '页数或文件大小有限制吗？',
          answer:
            '支持最大 100 MB 的文件（移动设备上为 50 MB），页数不限。由于工作由您自己的设备完成，超大文档只是需要稍长一点的时间。',
        },
      ],
    },
    'rotate-pdf': {
      metaTitle: '旋转 PDF 在线免费版——本地旋转页面 | CoolPDF',
      metaDescription:
        '在浏览器中将全部页面或指定页面旋转 90°、180° 或 270°。无需上传、无需注册、无水印。',
      heading: '旋转 PDF',
      intro: '几秒钟内扶正侧躺的扫描件和颠倒的页面。可将整个文档或仅指定页面旋转 90°、180° 或 270°。',
      button: '旋转 PDF',
      angleLabel: '旋转角度（顺时针）',
      scopeLabel: '应用范围',
      scopeAll: '所有页面',
      scopeSelected: '仅指定页面',
      pagesLabel: '页码',
      pagesPlaceholder: '例如 1, 3, 5-8',
      stepsHeading: '如何旋转 PDF 页面',
      steps: [
        '将要处理的 PDF 拖到上传区域，或点击选择文件。',
        '选择旋转角度——顺时针 90°、180° 或 270°。',
        '选择旋转所有页面还是仅指定页面（例如 1, 3, 5-8），然后点击“旋转 PDF”。',
        '下载旋转后的 PDF。未选择的页面保持原样。',
      ],
      privacyHeading: '扶正扫描件，不必发往任何地方',
      privacyText:
        '需要旋转的页面通常来自扫描仪或手机相机：签好字的表格、身份证件、收据、手写笔记。这些恰恰是最不应该仅仅为了扶正就被传到陌生人服务器上的文件。使用 CoolPDF，旋转发生在文件所在之处——您的浏览器里。页面方向在本地调整，结果直接保存回您的设备：没有上传，没有远程磁盘上的副本，也没有需要您被迫相信的留存政策。这一修改是永久且符合标准的，之后无论用哪种 PDF 阅读器、在哪台设备上、发给谁，文档都能正确打开。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '可以只旋转部分页面吗？',
          answer:
            '可以。选择“仅指定页面”，输入要旋转的页码，例如 1, 3, 5-8。其余页面保持原有方向。',
        },
        {
          question: '旋转是永久生效的吗？',
          answer:
            '是的。旋转会写入 PDF 文件本身，因此页面在任何 PDF 阅读器中都能正确显示——而不仅仅是您查看文件所用的那一个。',
        },
        {
          question: '旋转会影响页面内容吗？',
          answer:
            '不会。只有页面方向会改变，内容本身原封不动。文字依然清晰，图片保持原分辨率，不会重新压缩。',
        },
      ],
    },
    'jpg-to-pdf': {
      metaTitle: 'JPG 转 PDF 转换器——免费、本地、无需上传 | CoolPDF',
      metaDescription:
        '在浏览器中将 JPG 和 PNG 图片转换为整洁的 A4 PDF。适应、铺满或原始尺寸——文件永不离开您的设备。免费，无需注册。',
      heading: 'JPG 转 PDF',
      intro: '将最多 20 张 JPG 或 PNG 图片转换为一个 A4 PDF——非常适合扫描件、收据和照片文档。转换完全在您的设备上进行。',
      button: '转换为 PDF',
      orientationLabel: '页面方向',
      orientationAuto: '自动（跟随第一张图片）',
      orientationPortrait: '纵向',
      orientationLandscape: '横向',
      fitLabel: '图片摆放方式',
      fitFit: '适应——完整显示图片，保留边距',
      fitFill: '铺满——铺满页面，裁切边缘',
      fitOriginal: '原始——原始尺寸，居中放置',
      stepsHeading: '如何将图片转换为 PDF',
      steps: [
        '将最多 20 张 JPG 或 PNG 图片拖到上传区域，或点击选择文件。',
        '选择页面方向：自动模式跟随第一张图片的宽高比，或强制纵向、横向。',
        '选择图片摆放方式——适应留白、铺满页面或保持原始尺寸——然后点击“转换为 PDF”。',
        '下载您的 PDF，每张图片占据一个 A4 页面。',
      ],
      privacyHeading: '照片转 PDF，连一个像素都不必上传',
      privacyText:
        '照片和扫描件往往涉及隐私：护照复印件、报税收据、白板照片、手写信件。典型的转换器会把每张图片上传到服务器，在那里转换后给您一个下载链接——您的图片从此活在您无法掌控的基础设施上。CoolPDF 在您的设备上完成同样的工作：图片由您的浏览器读取，排版到 A4 页面上，并以 PDF 形式保存到您自己的磁盘。没有任何上传，因此没有任何内容可能泄露、被记录或被用于训练数据集。它甚至可以离线使用：加载页面，关掉 Wi-Fi，照常转换。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '支持哪些图片格式？',
          answer:
            '支持 JPG 和 PNG 图片，一次最多 20 张。每张图片成为一个 A4 页面，顺序与您添加文件的顺序一致。',
        },
        {
          question: '适应、铺满和原始有什么区别？',
          answer:
            '适应：等比缩放图片，使其完整显示并保留边距；铺满：等比缩放至覆盖整个页面，裁切边缘；原始：保持图片的原始尺寸，居中放置在页面上。',
        },
        {
          question: '图片会损失画质吗？',
          answer:
            '不会。图片会原样嵌入——不做任何重新压缩。PDF 只是包装您的原始图片数据：图片里是什么样子，PDF 里就是什么样子。',
        },
      ],
    },
  },
};
