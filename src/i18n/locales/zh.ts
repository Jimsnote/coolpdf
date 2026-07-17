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
};
