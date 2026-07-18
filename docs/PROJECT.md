# CoolPDF 项目文档（站主运维手册）

> 本文档是 CoolPDF 的完整项目档案：定位、架构、功能、构建部署、SEO/GEO、变现、运维与路线图。
> 面向站主（中文撰写）；面向公众的开发说明见根目录 `README.md`（英文）。

---

## 1. 项目定位

- **名称**：CoolPDF ｜ **域名**：getcoolpdf.com（Cloudflare Registrar，约 $10.44/年，续费同价）
- **定位**：面向海外用户的免费在线 PDF 工具站，**100% 纯浏览器端处理**，无任何后端服务器
- **三支柱卖点**（全站统一话术，SEO/GEO 核心）：
  1. **No Uploads** — Your files never leave your device（文件永不离开设备）
  2. **No Sign-Up** — 免注册、免登录、免邮箱
  3. **Free Forever** — 免费无次数限制
- **变现模式**：Google AdSense（待接入，见第 7 节）
- **许可证**：**AGPL-3.0**（因压缩功能使用 Ghostscript WASM，全仓库开源；`LICENSE` 已就位）
- **语言**：en（根路径）+ de / fr / it / es / pt / zh（前缀路径），共 7 语言
- **无需备案**：域名与托管均在境外（Cloudflare 美国），不涉及中国 ICP

---

## 2. 技术架构

### 2.1 技术栈

| 层 | 技术 |
|---|---|
| 框架 | Next.js 15（App Router，`output: 'export'` 纯静态导出到 `out/`）+ React 19 + TypeScript strict |
| 样式 | Tailwind CSS 3.4（postcss.config.js 为 CommonJS，Windows 兼容） |
| PDF 页面对象操作 | `@cantoo/pdf-lib`（pdf-lib 活跃 fork，MIT；**运行时动态 import 懒加载**，不进首屏） |
| PDF 渲染/文本提取 | `pdfjs-dist` v6（Apache-2.0，懒加载，worker 由 webpack 打包） |
| 压缩 | `@jspawn/ghostscript-wasm` 0.0.2（**AGPL**，wasm 15.4MB，Web Worker 内按需加载） |
| 加密/解密 | `@jspawn/qpdf-wasm` 0.0.2（Apache-2.0，wasm 1.2MB，同 Worker） |
| 打包下载 | jszip |
| 拖拽排序 | @dnd-kit（organize-pdf） |

**关键性能数据**（修复后实测）：全部页面 First Load JS ≈ 103–149KB；pdf-lib（584KB）、pdf.js（428KB）、GS wasm（15.4MB）、qpdf wasm（1.2MB）全部按需加载。

### 2.2 目录结构

```
coolpdf/
├── src/
│   ├── app/
│   │   ├── (en)/                  # route group：英文页面（根路径，<html lang="en">）
│   │   │   ├── layout.tsx / not-found.tsx / page.tsx
│   │   │   ├── about|privacy|terms|faq/page.tsx
│   │   │   └── <12 个工具目录>/page.tsx
│   │   ├── (i18n)/[locale]/       # route group：de/fr/it/es/pt/zh（<html lang={locale}>）
│   │   │   ├── layout.tsx（generateStaticParams + dynamicParams=false）
│   │   │   └── …同构镜像 17 页
│   │   ├── global-not-found.tsx
│   │   ├── sitemap.ts             # 按 tools.ts 的 live 状态派生，119 URL × hreflang 互链
│   │   └── robots.ts              # 放行 AI 爬虫（GPTBot/ClaudeBot/PerplexityBot 等）
│   ├── components/
│   │   ├── layout/                # Header（语言切换器同路径互转）/Footer/SiteShell/AnalyticsScript
│   │   ├── pages/                 # 各页面共享组件（HomePage/AboutPage/…）
│   │   ├── pages/tools/           # ToolPageScaffold（WebApplication+HowTo+FAQPage JSON-LD、步骤、隐私段、FAQ、FactSummary）
│   │   ├── tools/                 # ToolShell/FileDropzone/DownloadCard/EngineStatus + 12 个工具组件
│   │   ├── seo/                   # JsonLd / FactSummary（GEO 定型文案）
│   │   └── ads/                   # AdBanner（env 控制，加载 adsbygoogle.js，未放置）
│   ├── i18n/
│   │   ├── config.ts              # locales / defaultLocale / ogLocales
│   │   └── locales/{en,de,fr,it,es,pt,zh}.ts   # 类型同构字典（tsc 强制校验）
│   ├── lib/
│   │   ├── site.ts                # SITE_URL / GITHUB_URL 等常量（env 可覆盖）
│   │   ├── seo.ts                 # buildAlternates / pageMetadata / localizedPath / OG_IMAGE_URL
│   │   ├── tools.ts               # 12 工具注册表（slug/图标/status/JSON-LD featureList）
│   │   └── pdf/                   # 纯函数处理层（与 React 解耦，Node 可测）
│   │       ├── pdf-lib.ts         # getPdfLib() 懒加载入口
│   │       ├── merge/split/rotate/organize/jpg-to-pdf/watermark/page-numbers/pdf-to-markdown.ts
│   │       ├── page-ranges.ts     # 页码范围解析
│   │       ├── image-orientation.ts # EXIF 方向矫正（createImageBitmap）
│   │       ├── heavy-worker.ts    # Worker 启动/超时/AbortSignal 封装
│   │       ├── compress.ts / protect.ts
│   │       └── pdfjs.ts           # pdf.js 懒加载 helper
│   ├── workers/
│   │   └── pdf-heavy.worker.ts    # GS/qpdf 三任务 Worker；/wasm/manifest.json 解析；Cache Storage 缓存 wasm
│   └── types/
├── scripts/copy-wasm.mjs          # postinstall+prebuild：复制版本化 wasm 到 public/wasm/ + manifest.json
├── public/
│   ├── _headers                   # Cloudflare Pages 安全头（CSP 等，见 4.3）
│   ├── og.png / logo.svg / llms.txt
│   └── wasm/                      # 构建期生成（gitignore）：gs-0.0.2.wasm / qpdf-0.0.2.wasm / manifest.json
├── .nvmrc（22）/ LICENSE（AGPL-3.0）/ .env.example
└── docs/PROJECT.md                # 本文档
```

### 2.3 隐私架构（可验证的"零上传"）

- 全库唯一网络出口：Worker 内 `fetch('/wasm/*.wasm')`（同源静态资源下载）
- 零 localStorage/cookie/sessionStorage；密码仅存 React state，用完即弃；owner 密码 `crypto.randomUUID()` 生成即丢
- `public/_headers` 的 CSP `connect-src 'self'` 在浏览器层**强制**文件不外发（审查 C 全库审计结论：核心声明属实）
- 结果文件 Blob URL + `revokeObjectURL` 清理；关页即无痕迹

---

## 3. 功能清单（12 工具全部上线）

| 工具 | 路由 | 实现 | 要点 |
|---|---|---|---|
| Merge PDF | /merge-pdf | pdf-lib copyPages | 2–20 文件、排序、合计 ≤300MB |
| Split PDF | /split-pdf | pdf-lib | 三模式（全页≤500/范围/每N页）、重名 -2 后缀、多输出打 ZIP |
| Compress PDF | /compress-pdf | **GS WASM** Worker | /screen /ebook /printer 三档；实测 2.4MB→−69%/−83%；页进度条；≤150MB |
| Rotate PDF | /rotate-pdf | pdf-lib setRotation | 90/180/270°、指定页、负角度归一化 |
| Organize Pages | /organize-pdf | pdf.js 缩略图 + dnd-kit + pdf-lib | 拖拽排序/删页/旋转、分批渲染 |
| PDF to JPG | /pdf-to-jpg | pdf.js canvas | 72/150/300 DPI、JPG/PNG、页码范围、≤200 页、iOS 像素上限自动降档 |
| JPG to PDF | /jpg-to-pdf | pdf-lib embed | **EXIF 方向已矫正**、A4、Fit/Fill/Original |
| Protect PDF | /protect-pdf | **qpdf WASM** AES-256 | 7 项权限开关；owner 密码随机丢弃 |
| Unlock PDF | /unlock-pdf | qpdf WASM --decrypt | **支持空密码**（仅限权限类 PDF）；密码错误/未加密/损坏三类文案 |
| Watermark PDF | /watermark-pdf | canvas 文字渲染→PNG→pdf-lib | 文本/图片两种、45° 平铺、**全语言字符支持** |
| Page Numbers | /page-numbers | pdf-lib Helvetica | 6 位置、n / n-of-total、起始页码/起始页 |
| PDF to Markdown | /pdf-to-markdown | pdf.js getTextContent + 启发式 | 标题层级/段落/列表/页眉页脚过滤、扫描件提示 |

**加密 PDF 的错误分类**在所有 WASM 工具均已接通：`encrypted`（七语言文案）/ `wrong-password` / `corrupted` / `not-encrypted`。

已知实现细节：
- qpdf R=6（AES-256）下 `--accessibility=n` 被 qpdf 规范忽略（stderr 警告），UI 保留开关但 FAQ 已说明权限是策略机制非 DRM
- page-numbers 的 `n-of-total` 连接词硬编码英文 "of"（FAQ 已如实描述，可后续本地化）
- 文字水印的 canvas 路径、EXIF 重编码路径未经真机浏览器测试（Node 无法测 DOM），见第 9 节人工验收清单

---

## 4. 构建、部署与运维

### 4.1 本地开发

```bash
npm install        # postinstall 自动生成 public/wasm/
npm run dev        # http://localhost:3000（/de /zh 等前缀可用）
npm run type-check # tsc --noEmit（必须过）
npm run lint       # 必须过
npm run build      # prebuild 再次生成 wasm；输出 out/
npx serve out      # 以产物形态本地预览
```

环境要求：Node 22（`.nvmrc`；`engines: >=20 <23`）、npm。

环境变量（`.env.example`，均为构建期内联，无敏感信息）：

| 变量 | 用途 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 默认 https://getcoolpdf.com |
| `NEXT_PUBLIC_GITHUB_URL` | **发布 GitHub 后必须改为真实仓库地址**（当前占位 https://github.com/coolpdf 是 404，页脚/About/llms.txt 引用它） |
| `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` | Cloudflare Web Analytics token（设置后全站注入 beacon） |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | ca-pub-xxx（设置后 AdBanner 可用，目前未放置广告位） |

### 4.2 部署（Cloudflare Pages）

1. GitHub Desktop → Add `C:\home\coolpdf` → Publish（建议 Public，符合 AGPL 开源卖点）
2. Cloudflare → Workers & Pages → Pages → Connect to Git → 选仓库
3. Framework preset: **Next.js (Static HTML Export)**；Build command `npm run build`；Output `out`
4. Custom domains 绑定 `getcoolpdf.com`（同账号自动 DNS + 自动证书）；顺手绑 `www`
5. 每次 push main 自动部署

部署链路已验证项：postinstall/prebuild 双钩子保证 Pages 构建时 wasm 就位；全部资源根绝对路径，locale 前缀页面无 404；`out/404.html` 就位；构建镜像 Node 22 兼容。

### 4.3 `public/_headers` 安全头

CSP 当前策略：`default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; worker-src 'self' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; ...`

**两个未来必须改的点**（文件内注释也有）：
- 启用 Cloudflare Web Analytics → `connect-src` 加 `cloudflareinsights.com`
- 启用 AdSense → 按 Google 官方清单放宽（pagead2.googlesyndication.com 等 script/img/frame/connect 多项），接入广告时一并处理

### 4.4 升级注意事项

- **jspawn 包升级**：`copy-wasm.mjs` 从安装版本自动生成 `manifest.json`，worker 运行时读取——**不要硬编码 wasm 文件名**；升级后无需改代码，但需验证三工具
- **Node 版本**：锁 22（.nvmrc + engines）；Cloudflare Pages v3 镜像不读 engines，必要时在 Pages 环境变量设 `NODE_VERSION=22`
- **npm audit**：当前 2 个 moderate（postcss 传递依赖，仅构建期，静态导出无暴露面），可接受
- **新增工具流程**：`src/lib/pdf/` 纯函数 → `src/components/tools/` 组件 → `ToolPageScaffold` 加 slug → `(en)/` + `(i18n)/[locale]/` 各加薄路由 → 7 语言字典加 `toolPages` 条目（只增不改）→ `tools.ts` 置 live（sitemap/首页自动生效）→ type-check/lint/build 三件套 → Node 实测核心逻辑
- **翻译修改流程**：只改 `src/i18n/locales/*.ts`；en 是类型源头，改结构先改 en；metaTitle ≤60 字符、metaDescription ≤160 字符（zh title ≤30 汉字）

---

## 5. SEO / GEO 体系

- **hreflang**：每页 7 语言 + x-default 互链，canonical 自指，og:url 一致（修复后 119 页机器校验）
- **html lang**：route groups 双根布局，各语言页面 lang 正确（en/de/fr/it/es/pt/zh）
- **sitemap.xml**：119 URL（5 内容页 + 12 工具页 × 7 语言），无 lastmod（避免构建时间戳失真）
- **robots.txt**：全放行 + 显式 Allow AI 爬虫
- **llms.txt**：12 工具页带 URL 清单 + 核心事实
- **JSON-LD**：首页 WebApplication（featureList 按 locale 本地化、仅 live 工具）+ Organization；每个工具页 WebApplication + HowTo + FAQPage（与可见 FAQ 同源生成，无 Google 处罚风险）；FAQ 页 FAQPage
- **GEO**：每工具页底部 FactSummary 定型事实段（AI 易引用）；内容结构 H1→工具→步骤→隐私段→FAQ
- **meta 规范**：title ≤60 / description ≤160（已全量机器复查）

上线后动作：Search Console + Bing Webmaster 验证（DNS TXT）→ 提交 sitemap → 观察收录。

---

## 6. 多语言说明

- 7 语言字典类型同构（`Record<Locale, Dictionary>` 编译期强制），零遗留英文（审查 B 全量比对确认）
- 术语统一：三支柱固定译法；工具名按各语言搜索习惯（PDF komprimieren / Compresser PDF / Comprimi PDF / Comprimir PDF / Compactar PDF / 压缩 PDF 等）
- 葡语统一欧洲葡语（ficheiro/registo/palavra-passe 体系）
- 中文版定位：服务海外华人，无备案百度基本不收录，不作为流量主力

---

## 7. 变现（AdSense）接入指南

**时机**：全量上线 → 收录稳定（约 4-6 周，Search Console 大部分页面被索引且有展示）→ 再申请。空壳/少内容必拒（Low value content）。

**接入步骤**：
1. AdSense 注册（填真实姓名地址；$10 起 PIN 明信片验证，$100 电汇国内银行卡）
2. 站点验证代码接入根布局（两个 route group 的 layout 都要，或抽共享组件）
3. Pages 环境变量设 `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxx`
4. `public/ads.txt`：`google.com, pub-xxx, DIRECT, f08c47fec0942fa0`
5. 放置 AdBanner（建议：工具区下方、how-to 内容段中部——**绝不挨着工具按钮**）
6. **装 CMP**（GDPR 必须）：CookieYes 免费档等支持 Google Consent Mode v2 的方案
7. **放宽 `_headers` CSP**（见 4.3）
8. 隐私政策改为现在时（当前文本已按"may/planned"写，启用广告后把第 4 节与 FAQ 两条改回进行时，7 语言同步）

红线：不点自己广告、不引导点击、广告位不造成误点。

**统计**：Cloudflare Web Analytics（设 `NEXT_PUBLIC_CF_ANALYTICS_TOKEN`，注意 CSP 放行）+ Search Console/Bing（SEO 数据）+ AdSense 后台（RPM/CTR）。

---

## 8. 审查与修复记录（2026-07）

三路对抗式审查（PDF 逻辑 / SEO-i18n / 构建-隐私）+ 两批修复，全部闭环：

- **P0**：JPG→PDF 不处理 EXIF 方向 → 已加 `image-orientation.ts` 矫正
- **P1**：unlock 空密码死局；compress/protect 加密文件误报"损坏"；Organize reset 缩略图脱节；pdf-to-jpg/split 内存无上限；隐私政策把未实现的 CMP/AdSense 写成现在时 → 全部修复
- **P2（约 20 项）**：84 页 html lang 错误（route groups 重构）；34 title / 45 description 超长（全量裁剪+复查）；pdf-lib 584KB 进首屏（懒加载，降至 ~113KB）；CSP 安全头；wasm 版本 manifest；.nvmrc/engines；sitemap lastmod；og:image；JSON-LD featureList 本地化；FAQPage；德语语法/中文机翻腔/葡语用词；qpdf exit 3 / printErr 分类；旋转负角度归一化；zip 重名；worker 超时与 AbortSignal；Cache Storage 缓存 wasm 等 → 全部修复
- 隐私审计结论：**"文件永不离开设备"属实**（全库网络出口仅 wasm 下载，零存储，密码不出 state）

验证基线：type-check ✓ lint ✓ build ✓（119 页 + sitemap/robots/llms.txt/_headers/og.png/wasm manifest 全部就位）；Node 逻辑测试多轮全过。

**上线前人工验收发现的追加修复（均已回归验证）**：
- 范围输入只认英文逗号 + 处理失败时旧结果卡不清除 → 输入归一化（中文标点/全角字符/尾随逗号容错），9 个工具组件处理开始时统一清空旧结果（`13f6562`）
- **压缩/加解密浏览器端失败**：jspawn 的 Emscripten 构建**忽略 `wasmBinary` 配置**（二进制永远 fetch locateFile 的 URL，在 Worker 中解析为无效路径）→ 改为预取字节生成 blob URL 传给 locateFile（保留下载进度 + Cache Storage），并经 Node 实证（垃圾 wasmBinary 被忽略、wasm 唯一来源为 locateFile URL）；fetchWasm 增加 wasm 魔数校验，中毒缓存自愈

---

## 9. 上线前人工验收清单（浏览器真机，Node 测不了的部分）

`npm run dev` 或 `npx serve out` 后逐项过：

- [ ] 首页 12 张卡片全部可点击，切换 6 种语言页面内容正确
- [ ] merge/split/rotate/jpg-to-pdf 各跑一次（jpg-to-pdf **务必用手机竖拍照片**验证 EXIF）
- [ ] organize-pdf：拖拽排序、删页撤销、旋转后 Reset、导出页序正确
- [ ] pdf-to-jpg：300 DPI 大页面试一次；压缩：三档各一次（首次应见 15MB 加载进度条，第二次秒开=缓存生效）
- [ ] protect/unlock 闭环：加密后无法直接打开 → 用密码解锁成功；空密码解"仅限权限"PDF
- [ ] watermark：**中文文字水印**（canvas 路径）+ 图片水印平铺
- [ ] page-numbers 各位置；pdf-to-markdown 标题层级 + 扫描件提示
- [ ] 断网测试：页面加载后断网，工具仍可用（wasm 已缓存的）
- [ ] DevTools Network：处理文件时**零上传**（自证卖点）
- [ ] /de /zh 等页面 `<html lang>` 正确；分享调试器（X/Facebook）看 og.png 预览

---

## 10. 路线图（后续可选）

**二期功能**（成本低）：Word/Excel → Markdown（mammoth.js / SheetJS）；页码 "of" 本地化；Service Worker 全站离线（FAQ 文案已预留口径）；证件照排版（参考 ipdftoo 的 Konva 方案，海外 Passport Photo 是优质 SEO 词）

**明确不做**：Word/PPT→PDF（浏览器端保真度差）、PDF→Word（无成熟库）、OFD→PDF（中国格式）、发票合并（已砍）

**运营动作**：部署上线 → Search Console 收录 → 内容博客（"iLovePDF alternative privacy" 等对比词）→ 4-6 周后 AdSense → CMP + CSP 放宽 → 按 Search Console 数据补强势语言内容
