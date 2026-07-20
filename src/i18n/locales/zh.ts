export const zh = {
  site: {
    name: 'CoolPDF',
    description: '尊重您隐私的免费 PDF 工具',
  },
  nav: {
    home: '首页',
    tools: '工具',
    guides: 'Guides',
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
        '在启用时，我们可能会使用 Cloudflare Web Analytics——一款无 Cookie、保护隐私的统计工具。',
        '我们可能会展示 Google AdSense 广告以维持 CoolPDF 免费。如果启用广告，Google 可能会使用 Cookie 投放个性化广告，您可以选择退出。',
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
          '在启用时，我们使用 Cloudflare Web Analytics 来了解整体流量情况——例如哪些页面受欢迎、访客大致来自哪里。它不使用 Cookie，不追踪单个用户，也不收集个人数据。它看不到您处理的文件，因为连我们自己都看不到。',
        ],
      },
      {
        title: '4. 广告——Google AdSense',
        paragraphs: [
          'CoolPDF 可能会展示由 Google AdSense 投放的广告，以维持服务免费。如果启用广告，Google 及其合作伙伴可能会使用 Cookie，根据您的浏览历史投放个性化广告。您可以随时通过 Google Ads Settings（adssettings.google.com）退出个性化广告。在启用任何个性化广告之前，来自欧洲经济区和英国的访客将先看到同意管理提示。详情请参阅 Google 的隐私政策：policies.google.com/privacy。',
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
          '真的。所有工具完全免费，没有使用限制，没有水印，也没有付费高级版。如果启用广告，正是那些不打扰您的广告，让 CoolPDF 能对所有人保持免费。',
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
          '我们可能会展示由 Google AdSense 投放的广告。广告是我们计划的收入来源，也正是它让每个工具都能保持免费且不设使用限制。',
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
    engineLoading: '正在加载 PDF 引擎…',
    engineLoadingProgress: '正在加载 PDF 引擎…已加载 {loaded} MB，共 {total} MB',
    engineFirstRun: '首次使用需下载约 {size} MB，之后会缓存在您的设备上。',
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
      noPages: '文档中至少需保留一页。',
      wrongPassword: '密码不正确，请重试。',
      notEncrypted: '此 PDF 未设置密码保护，无需解锁。',
      noText: '此 PDF 似乎是扫描图片，没有可提取的文本。',
      tooManyPages: '此文档页数过多，超出本工具上限（{max} 页）。',
      filesSkipped: '已跳过 {count} 个不支持的文件。',
      totalTooLarge: '所选文件合计过大——总量上限为 {max} MB。',
      generic: '处理文件时出错，请重试。',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: '免费在线合并 PDF - 无需上传 | CoolPDF',
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
      metaTitle: '免费在线拆分 PDF - 本地提取页面 | CoolPDF',
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
      metaTitle: '免费在线旋转 PDF - 无需上传 | CoolPDF',
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
    'organize-pdf': {
      metaTitle: '免费在线整理 PDF 页面 - 无需上传 | CoolPDF',
      metaDescription:
        '在浏览器中通过拖放重新排序 PDF 页面，旋转或删除页面，并下载整理后的 PDF。无需上传、无需注册。',
      heading: '整理 PDF 页面',
      intro: '通过拖放重新排列页面，扶正侧躺的页面，删除不需要的页面。每一页都有实时预览，操作一目了然——一切都在您的设备上完成。',
      button: '下载整理后的 PDF',
      loadingPreviews: '正在渲染页面预览…',
      loadMorePreviews: '加载更多预览',
      selectAll: '全选',
      clearSelection: '取消选择',
      deleteSelected: '删除所选',
      rotateSelected: '旋转所选 90°',
      reset: '重置',
      rotatePage: '旋转页面 90°',
      deletePage: '删除页面',
      restorePage: '恢复页面',
      deletedBadge: '已删除',
      pageLabel: '第 {n} 页',
      keptSummary: '将保留 {total} 页中的 {kept} 页',
      stepsHeading: '如何整理 PDF 页面',
      steps: [
        '将要整理的 PDF 拖到上传区域，或点击选择文件。',
        '将页面缩略图拖到您想要的顺序——数字角标始终显示原始页码。',
        '使用每个缩略图上的按钮旋转或删除单个页面，也可以选中多个页面后使用工具栏批量操作。已删除的页面可以一键恢复。',
        '点击“下载整理后的 PDF”。重新排列的文档在本地组装完成并保存到您的设备。',
      ],
      privacyHeading: '逐页重组机密文档，全程私密',
      privacyText:
        '调整页面顺序往往是文档发出前的最后一步：把签好字的那一页提到合同最前面、从税务文件中删掉空白扫描页、把客户要的那一章移到开头。这些都不是应该出现在陌生人服务器上的文件。CoolPDF 完全在您的浏览器中渲染页面预览并重建文档——文件从您自己的磁盘读取，结果保存回您自己的磁盘，中间没有任何上传。没有排队，没有别人存储空间里的临时副本，也没有需要您被迫相信的留存政策。这使得该工具可以安全地处理法律文件、病历和人事档案，即使在公共 Wi-Fi 下也不例外。关闭标签页，您的文档什么都不会留下。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '删除的页面可以撤销吗？',
          answer:
            '可以。删除按钮只是标记该页面——它会变暗显示，再点一次即可恢复。只有在下载时页面才会被真正略过，即便如此，您设备上的原始文件也保持不变。',
        },
        {
          question: '重新整理会降低 PDF 的质量吗？',
          answer:
            '不会。页面会原样复制到新文档中——不重新渲染、不重新压缩。文字仍可选中，链接仍可点击，旋转则以标准页面元数据的形式写入。',
        },
        {
          question: '文件大小或页数有限制吗？',
          answer:
            '支持最大 100 MB 的文件（移动设备上为 50 MB），页数不限。对于超长文档，页面预览会分批渲染，因此工具始终保持流畅响应。',
        },
      ],
    },
    'pdf-to-jpg': {
      metaTitle: 'PDF 转 JPG 转换器——免费、本地、无需上传 | CoolPDF',
      metaDescription:
        '在浏览器中将 PDF 页面转换为 72、150 或 300 DPI 的 JPG 或 PNG 图片。文件永不离开您的设备。免费，无需注册。',
      heading: 'PDF 转 JPG',
      intro: '将 PDF 页面转换为高质量的 JPG 或 PNG 图片。分辨率和所需页面都由您选择——转换完全在您的设备上进行。',
      button: '转换为图片',
      formatLabel: '图片格式',
      formatJpg: 'JPG——文件更小',
      formatPng: 'PNG——无损，文件更大',
      dpiLabel: '分辨率',
      dpiHint: '300 DPI 会生成非常大的图片，处理长文档时可能较慢且占用较多内存。',
      dpiReduced: '部分页面已自动降低分辨率渲染，因为在所选 DPI 下超出了您设备的画布尺寸上限。',
      scopeLabel: '页面',
      scopeAll: '所有页面',
      scopeCustom: '指定页面',
      pagesPlaceholder: '例如 1-3, 5',
      renderingProgress: '正在渲染第 {current} 页，共 {total} 页…',
      stepsHeading: '如何将 PDF 转换为 JPG',
      steps: [
        '将要转换的 PDF 拖到上传区域，或点击选择文件。',
        '选择图片格式——JPG 文件更小，PNG 画质无损——以及分辨率：72 DPI 适合屏幕显示，150 适合文档，300 适合打印。',
        '转换所有页面，或输入 1-3, 5 这样的页码范围，然后点击“转换为图片”。',
        '下载结果——只转换一页时直接下载单张图片，否则下载每页一张图片的 ZIP 压缩包。',
      ],
      privacyHeading: '页面转图片，不必交出文档',
      privacyText:
        '把 PDF 转成图片，通常意味着文档要走向某个视觉场景——演示文稿、聊天应用，或只接受图片的上传表单。发票、证书和正式函件常常走这条路。使用典型的在线转换器时，整个文档会被先上传，图片则从一个您一无所知的服务器返回。CoolPDF 直接在您的浏览器标签页中渲染页面，使用的是与桌面阅读器同级别的 PDF 引擎。文件从不经过网络：它从您的磁盘读取，由您的设备光栅化，再保存回您的磁盘。没有任何内容可被拦截、记录或泄露——这也意味着该工具在飞机上、在工厂里，或任何没有网络的地方都能照常工作。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '我该选择哪个 DPI？',
          answer:
            '72 DPI 与 PDF 的屏幕显示尺寸一致，适合网页使用；150 DPI 是文档处理的理想折中；300 DPI 是打印级画质——清晰锐利，但图片会变大，渲染也需要更长时间。',
        },
        {
          question: '为什么我下载的是 ZIP 文件？',
          answer:
            '每个 PDF 页面都会生成一张独立的图片。转换多页时，所有图片会打包成一个 ZIP 压缩包，让您一次整齐地下载。',
        },
        {
          question: '转换为 JPG 会损失画质吗？',
          answer:
            'JPG 使用轻度压缩（92% 质量），对文档和照片而言，肉眼几乎无法区分与原图的差别。如果您需要像素级精确的无损输出，请选择 PNG。',
        },
      ],
    },
    'compress-pdf': {
      metaTitle: '在线免费压缩 PDF——无需上传、无需注册 | CoolPDF',
      metaDescription:
        '在浏览器中以三档画质级别压缩 PDF，分辨率从 72 到 300 DPI。文件永不离开您的设备。免费，无需注册。',
      heading: '压缩 PDF',
      intro: '通过三档压缩级别，将大体积 PDF 缩减到原来的一小部分。压缩引擎完全在您自己的设备上运行。',
      button: '压缩 PDF',
      levelLabel: '压缩级别',
      levels: {
        extreme: {
          name: '极致',
          description: '体积最小，图片为 72 DPI——适合电子邮件和网页预览。',
        },
        recommended: {
          name: '推荐',
          description: '体积与画质均衡，图片为 150 DPI——适合大多数文档。',
        },
        light: {
          name: '轻度',
          description: '画质最佳，图片为 300 DPI——页面保持打印就绪。',
        },
      },
      processingPages: '正在压缩第 {current} 页，共 {total} 页…',
      stillWorking: '仍在处理——大文件可能需要几分钟，请保持此标签页打开。',
      resultSmaller: '缩小了 {percent}%',
      resultLarger: '增大了 {percent}%——此 PDF 本身已经压缩得很好。可尝试“轻度”级别以保留更多画质。',
      stepsHeading: '如何压缩 PDF',
      steps: [
        '将要压缩的 PDF 拖到上传区域，或点击选择文件（最大 150 MB）。',
        '选择压缩级别：“极致”体积最小，“推荐”均衡，“轻度”保持打印画质。',
        '点击“压缩 PDF”。首次运行会下载一次压缩引擎，之后即可瞬间启动。',
        '下载压缩后的 PDF 并对比体积——原始文件在您的设备上保持原样。',
      ],
      privacyHeading: '压缩大型文档，无需上传',
      privacyText:
        '需要压缩的 PDF 通常即将被发往某个地方——发给律师的扫描合同、发给招聘方的作品集、发给保险公司的医疗报告。颇具讽刺意味的是，大多数在线压缩工具都要求您先把文件上传到他们的服务器，于是压缩一份敏感文档的第一步就是把它交出去。CoolPDF 在文档原本所在的位置完成压缩：在您的浏览器里、在您自己的设备上。压缩引擎——正是印刷厂信赖了数十年的 Ghostscript——被编译为 WebAssembly，只需下载到您的设备一次。文件从您的磁盘读取，被重建为更小的体积，再保存回磁盘，全程没有上传、排队或远程副本。关闭标签页，什么也不会留下。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '我该选择哪个压缩级别？',
          answer:
            '“推荐”适合大多数文档——它在体积和可读性之间取得平衡。必须满足电子邮件附件大小限制、每一 KB 都很重要时，选择“极致”；文件需要经常打印或放大查看时，选择“轻度”。',
        },
        {
          question: '为什么我的 PDF 反而变大了？',
          answer:
            '有些 PDF 已经被高度优化——例如由其他压缩工具保存的文件。重新编码其中的图片可能会增加而非减少字节。这种情况下请保留原文件，或尝试压缩力度更温和的“轻度”级别。',
        },
        {
          question: '为什么首次压缩耗时更长？',
          answer:
            '首次运行需要将压缩引擎（约 15 MB）下载到您的设备。之后会缓存起来，以后的压缩都能瞬间启动——甚至可以离线使用。',
        },
      ],
    },
    'protect-pdf': {
      metaTitle: '在线免费为 PDF 添加密码保护——AES-256 | CoolPDF',
      metaDescription:
        '使用 AES-256 加密 PDF，并控制打印、复制和编辑权限——全部在浏览器本地完成。无需上传，免费，无需注册。',
      heading: '保护 PDF',
      intro: '为您的 PDF 添加 AES-256 密码加密，并精确决定接收者可以对它做什么。一切都在您的设备上完成。',
      button: '保护 PDF',
      passwordLabel: '密码（至少 6 个字符）',
      confirmLabel: '确认密码',
      passwordTooShort: '密码长度至少为 6 个字符。',
      passwordMismatch: '两次输入的密码不一致。',
      permissionsHeading: '接收者权限',
      printingLabel: '打印',
      printFull: '允许',
      printLow: '仅允许低质量',
      printNone: '不允许',
      allowCopying: '允许复制文本和图片',
      allowModifying: '允许修改文档',
      allowAnnotating: '允许批注和填写表单',
      allowAssembling: '允许插入、旋转和删除页面',
      allowAccessibility: '允许为屏幕阅读器提取文本',
      stepsHeading: '如何保护 PDF',
      steps: [
        '将要保护的 PDF 拖到上传区域，或点击选择文件。',
        '设置一个至少 6 个字符的密码，并输入两次以确认。',
        '设置接收者打开文件后获得的权限——打印、复制、编辑等。',
        '点击“保护 PDF”并下载加密后的文件。请妥善保管密码——遗忘后无法找回。',
      ],
      privacyHeading: '加密文档，不必泄露文件——也不必泄露密码',
      privacyText:
        '为 PDF 设置密码，通常是发送敏感内容前的最后一步：发给员工的工资单、发给会计的银行对账单、发给保险公司的医疗证明。如果这最后一步使用基于服务器的工具，就违背了初衷——未加密的原始文件会在互联网上传输，您还要把选好的密码交给自己无法掌控的基础设施。CoolPDF 完全在您的设备上完成加密：文件在本地读取，在浏览器标签页内以 AES-256 加密，然后直接保存回您的磁盘。您输入的密码从不经过网络——根本没有服务器能接收到它。因此，即使使用办公电脑或公共 Wi-Fi，处理机密文档也同样安全。关闭标签页后，文件和密码都会消失。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '加密强度如何？',
          answer:
            'CoolPDF 使用 AES-256——PDF 标准定义的最强加密，与政府及银行应用同级。没有密码，内容无法被读取。',
        },
        {
          question: '如果我忘记密码会怎样？',
          answer:
            '没有任何找回方式——这正是强加密的要义。CoolPDF 从不查看或存储您的密码，请将它保存在安全的地方，例如密码管理器。',
        },
        {
          question: '所有 PDF 阅读器都会执行这些权限吗？',
          answer:
            '符合标准的阅读器——包括 Adobe Acrobat、Chrome 和 macOS Preview——都会遵守打印、复制和编辑限制。它们是策略机制而非 DRM，因此请将其视为强有力的约束请求，而非绝对保证。',
        },
      ],
    },
    'unlock-pdf': {
      metaTitle: '在线免费解锁 PDF——本地移除密码 | CoolPDF',
      metaDescription:
        '在浏览器中直接移除您自己的 PDF 的密码保护。无需上传、无需注册、免费——文件永不离开您的设备。',
      heading: '解锁 PDF',
      intro: '移除您自己的 PDF 上的密码，让它无需密码即可打开。解密在本地运行——文件和密码都不会离开您的设备。',
      legalNote: '请仅解锁您拥有或有权修改的 PDF。',
      passwordLabel: '当前密码（如需要）',
      button: '解锁 PDF',
      stepsHeading: '如何解锁 PDF',
      steps: [
        '将受密码保护的 PDF 拖到上传区域，或点击选择文件。',
        '如需要，输入文档的密码。',
        '点击“解锁 PDF”——保护将在本地于数秒内移除。',
        '下载解锁后的 PDF。从此以后，它可以在任何阅读器中无需密码打开。',
      ],
      privacyHeading: '移除密码，不必交出文件',
      privacyText:
        '解锁 PDF 通常是为了方便：一份用密码归档、而您已厌倦反复输入密码的旧银行对账单；一份需要合并或批注的扫描合同；一份想换用更强密码重新保护的文档。使用典型的在线工具时，移除保护的第一步是把仍受保护的文件——连同密码——上传到陌生人的服务器。CoolPDF 则在文件原本所在的位置移除保护：解密完全在您的浏览器标签页内进行，文档从您自己的磁盘读取，用您本地输入的密码解锁，再保存回去，没有任何一个字节经过网络。没有可被拦截的上传，没有您的密码的日志，也没有留下的副本。关闭标签页，两者的痕迹都会消失。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '我忘记了密码，CoolPDF 能破解吗？',
          answer:
            '不能。CoolPDF 只在您知道当前密码的情况下移除保护——它不是密码破解工具，而 AES-256 加密实际上无法靠猜测攻破。',
        },
        {
          question: '解锁 PDF 合法吗？',
          answer:
            '合法——只要文档属于您或您有权修改，例如您自己归档的对账单。移除您无权处理的文件的保护可能违反法律或合同，这正是本页面显示提醒的原因。',
        },
        {
          question: '解锁会改变文档内容吗？',
          answer:
            '不会。移除的只是加密层——每一页、每张图片、每条批注都与原件完全一致。',
        },
      ],
    },
    'watermark-pdf': {
      metaTitle: 'PDF 加水印在线免费工具——文字或图片水印 | CoolPDF',
      metaDescription:
        '在 PDF 每一页上加盖文字或图片水印——平铺或居中，透明度可调——全部在您的浏览器本地完成。无需上传，免费，无需注册。',
      heading: 'PDF 加水印',
      intro:
        '在 PDF 的每一页上加盖文字或图片水印——可斜向平铺或居中，大小、颜色、透明度随您调整。一切都在您的设备上完成。',
      button: '添加水印',
      typeLabel: '水印类型',
      typeText: '文字',
      typeImage: '图片（PNG 或 JPG）',
      textLabel: '水印文字',
      textPlaceholder: '例如：机密',
      fontSizeLabel: '字号',
      colorLabel: '文字颜色',
      opacityLabel: '透明度',
      layoutLabel: '摆放方式',
      layoutTile: '平铺——在每页上斜向重复',
      layoutCenter: '居中——每页一个',
      scaleLabel: '图片大小（相对页宽）',
      stepsHeading: '如何给 PDF 加水印',
      steps: [
        '将要加水印的 PDF 拖到上传区域，或点击选择文件。',
        '选择文字或图片水印。文字水印可输入内容并选择字号和颜色；图片水印则上传 PNG 或 JPG 并设置大小。',
        '调整透明度并选择摆放方式——在每页上斜向平铺或居中单个——然后点击“添加水印”。',
        '下载加好水印的 PDF。原始文件在您的设备上保持不变。',
      ],
      privacyHeading: '为敏感文档加水印，无需上传',
      privacyText:
        '给 PDF 加水印，通常是分享敏感文件前的最后一步：标注“机密”的合同草案、带工作室署名的设计预览、仅限单一用途的证件复印件。使用传统的在线工具，这份尚未保护的原文件会先被上传到服务器，然后才轮得到水印。CoolPDF 正好相反：文字水印用您设备自带的字体绘制——所以中文、阿拉伯文甚至 emoji 都和英文一样好用——转换成图片后，就在您的浏览器标签页里盖到页面上；图片水印同样不会离开您的设备。没有上传、没有排队、没有存到别处，因此处理未发布的设计、保密协议材料和个人文档都很安全。关掉标签页，一切痕迹随之消失。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '水印文字支持中文、阿拉伯文或 emoji 吗？',
          answer:
            '支持。文字水印使用您设备自带的字体绘制并作为图片嵌入，任何语言和符号都可以——不再局限于传统 PDF 字体只支持的拉丁字母。',
        },
        {
          question: '平铺和居中有什么区别？',
          answer:
            '平铺会在整个页面上斜向重复水印，难以被裁掉，适合机密标注；居中则在每页中央放置一个斜向水印，看起来更像 logo。',
        },
        {
          question: '图片水印支持哪些格式？',
          answer:
            'PNG 和 JPG。logo 建议用 PNG，因为它保留透明度，水印周围的内容依然清晰可见。可以用滑块按页面宽度比例调整图片大小。',
        },
      ],
    },
    'page-numbers': {
      metaTitle: 'PDF 加页码在线免费工具 | CoolPDF',
      metaDescription:
        '为 PDF 添加页码——六个位置、“1 of N”格式、起始页自定义——全部在您的浏览器本地完成。无需上传，免费，无需注册。',
      heading: '页码',
      intro:
        '按您的要求为 PDF 添加页码：六个位置、两种格式，并可完全控制从哪一页开始编号。处理过程完全在您的设备上进行。',
      button: '添加页码',
      positionLabel: '位置',
      posTopLeft: '左上',
      posTopCenter: '顶部居中',
      posTopRight: '右上',
      posBottomLeft: '左下',
      posBottomCenter: '底部居中',
      posBottomRight: '右下',
      formatLabel: '格式',
      formatN: '仅页码（1、2、3…）',
      formatTotal: '页码加总页数（1 of N）',
      startNumberLabel: '起始页码',
      startPageLabel: '从第几页开始编号',
      fontSizeLabel: '字号',
      stepsHeading: '如何为 PDF 添加页码',
      steps: [
        '将要加页码的 PDF 拖到上传区域，或点击选择文件。',
        '从六个位置中选择一个——四角之一或顶部、底部居中——并选择格式：仅页码，或页码加总页数。',
        '如有需要，修改起始页码、开始编号的页和字号，然后点击“添加页码”。',
        '下载编好页码的 PDF。原始文件在您的设备上保持不变。',
      ],
      privacyHeading: '为定稿文档编号，无需上传',
      privacyText:
        '加页码往往是文档发出前的最后一步：要打印的论文、待签署的合同、提交董事会的报告。此时的文件通常已定稿且敏感——然而大多数在线工具仍要求您先上传。CoolPDF 在文件所在之处直接编号：您的设备上。PDF 由您的浏览器读取，按您选的位置和格式盖上页码，直接存回您的磁盘。没有任何字节经过网络，自然不会被拦截、记录或遗留在服务器上。因此处理法律文书、病历和财务报告都很安全，而且快——没有上传排队，也没有需要从别处取回的处理副本。关掉标签页，文档的一切痕迹随之消失。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '可以跳过封面页吗？',
          answer:
            '可以。把“从第几页开始编号”设为 2（或更靠后的页），前面的页面就保持干净。还可以配合“起始页码”，让可见编号从 1 开始——或接续已有的编号序列。',
        },
        {
          question: '“1 of N”格式显示什么？',
          answer:
            '显示当前页码和文档总页数，例如“3 of 12”。总页数始终统计文件的全部页面，包括开头未编号的页面。',
        },
        {
          question: '页码会和正文重叠吗？',
          answer:
            '页码位于页边距内，距页面边缘 24 磅。大多数文档这一区域都是空白的；如果您的内容一直排到页面边缘，可以换到对侧的位置，或把字号调小。',
        },
      ],
    },
    'pdf-to-markdown': {
      metaTitle: 'PDF 转 Markdown 在线免费工具 | CoolPDF',
      metaDescription:
        '把 PDF 文本转换为干净的 Markdown——自动识别标题、段落和列表——全部在您的浏览器本地完成。无需上传，免费，无需注册。',
      heading: 'PDF 转 Markdown',
      intro:
        '把 PDF 中的文本转换为干净、结构化的 Markdown——自动识别标题、段落和列表，并移除页眉页脚。转换完全在您的浏览器中进行。',
      button: '转换为 Markdown',
      scopeLabel: '页面范围',
      scopeAll: '全部页面',
      scopeCustom: '仅选定页面',
      pagesLabel: '页面',
      pagesPlaceholder: '例如 1-3, 5',
      stepsHeading: '如何把 PDF 转换为 Markdown',
      steps: [
        '将要转换的 PDF 拖到上传区域，或点击选择文件。',
        '选择转换全部页面，或只转换指定范围（例如 1-3, 5）。',
        '点击“转换为 Markdown”——自动识别标题、段落和列表，并移除重复出现的页眉页脚。',
        '下载 Markdown 文件，可在任意编辑器、笔记应用或静态站点生成器中打开。',
      ],
      privacyHeading: '把文档转成 Markdown，无需上传',
      privacyText:
        '把 PDF 转成 Markdown，通常意味着要把它喂给某个 AI 工具或云端转换器——整个文档也随之被上传。如果文件是论文草稿、内部报告或需要引用的合同，这就是个问题。CoolPDF 在本地完成提取：运行在您浏览器中的 PDF 引擎读取文本层，根据字号分布识别标题，重建段落和列表，最后交给您一份干净的 Markdown 文件。文档从不离开您的设备，没有可拦截的内容，也不会存在别人的服务器上。甚至可以离线使用——加载页面后断网，照样转换。关掉标签页，PDF 和 Markdown 都随之消失。',
      faqHeading: '常见问题',
      faq: [
        {
          question: '图片也会被提取吗？',
          answer:
            '不会。转换器只提取文本——标题、段落和列表。嵌入的图片会被跳过；如需图片，请单独导出图多的页面（可以使用 PDF 转 JPG 工具）。',
        },
        {
          question: '标题是如何识别的？',
          answer:
            '按字号识别。出现次数最多的字号被当作正文；明显更大的行会成为标题——视大出的幅度分为 #、## 或 ###。识别属于启发式规则，建议转换后快速检查一遍结果。',
        },
        {
          question: '为什么提示这是扫描件？',
          answer:
            '扫描件是页面的照片，没有真正的文本层，因此没有可提取的内容。请先用 OCR 软件处理——扫描件有了文本层之后，这个工具就能转换了。',
        },
      ],
    },
  },
};
