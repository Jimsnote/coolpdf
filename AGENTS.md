# CoolPDF — AI Agent 项目指南

> 本文档面向 AI 编程助手。阅读本文档前，请默认你对本项目一无所知。
> 它的作用是让你在不重读全部历史的情况下，安全、正确地延续开发。
> 站主运维手册见 `docs/PROJECT.md`（中文），任务清单见 `docs/TODO.md`。

---

## 1. 项目一句话

CoolPDF 是面向海外用户的**纯浏览器端 PDF 工具站**（类 ilovepdf.com），**零后端**：全部 12 个工具的处理都在浏览器（JS/WASM/Web Worker）完成。核心卖点三支柱：**No Uploads（文件永不离开设备）/ No Sign-Up / Free Forever**。变现目标 Google AdSense（未接入，接入清单见 `docs/TODO.md`）。

- **线上**：https://getcoolpdf.com（Cloudflare Workers Static Assets，www 已 301 到主域）
- **仓库**：https://github.com/Jimsnote/coolpdf（Public，**AGPL-3.0**——因压缩用 Ghostscript WASM）
- **域名**：Cloudflare Registrar，~$10.44/年

## 2. 技术栈与硬约束

- Next.js 15（App Router，`output: 'export'` 静态导出到 `out/`）+ React 19 + TypeScript **strict** + Tailwind 3.4
- Node 22（`.nvmrc` + `engines: >=20 <23`，勿升级换大版本）
- 8 语言 i18n：**en 在根路径（无前缀），de/fr/it/es/pt/zh/ja 在 `[locale]` 前缀下**；route groups 双根布局 `src/app/(en)/` 与 `src/app/(i18n)/[locale]/`（各带 `<html lang>`）
- 核心库：`@cantoo/pdf-lib`（页面对象操作，**必须经 `src/lib/pdf/pdf-lib.ts` 的 `getPdfLib()` 动态 import，禁止静态 import 进首屏**）、`pdfjs-dist` v6（渲染/文本提取，懒加载经 `src/lib/pdf/pdfjs.ts`）、`@jspawn/ghostscript-wasm` + `@jspawn/qpdf-wasm`（Worker 内）、`heic-to/csp`（HEIC 解码，**LGPL-3.0**，libheif wasm 内嵌、blob URL 起 Worker，零 eval 过 CSP，懒加载）、jszip、@dnd-kit
- 部署：`wrangler.jsonc`（assets → ./out）+ Deploy command `npx wrangler deploy`；`public/_headers`（CSP）；`scripts/copy-wasm.mjs`（postinstall+prebuild 生成 `public/wasm/` 与 manifest.json，该目录 gitignore）

## 3. 血泪教训（改动相关代码前必读）

1. **jspawn 的 Emscripten 构建忽略 `wasmBinary` 配置**——二进制永远 `fetch(locateFile 的 URL)`。正确做法：预取字节（带进度 + Cache Storage）→ 生成 blob URL → 传给 `locateFile`（见 `src/workers/pdf-heavy.worker.ts` 的 `engineBlobUrl()`）。不要回退到传 wasmBinary。
2. **CSP 每加一个浏览器能力都要同步审**：内联 hydration 脚本要求 `script-src 'unsafe-inline'`（否则全站白屏，React 无法水合）；wasm blob 加载要求 `connect-src` 含 `blob:`。隐私强制点是 `connect-src 'self' blob:`（禁止数据外发），它不可再放宽（AdSense/Analytics 除外，见 _headers 注释）。
3. **范围输入已做归一化**（`src/lib/pdf/page-ranges.ts`）：中文逗号/顿号/分号、全角破折号/数字、尾随逗号容错。不要绕过 `normalizeRangeInput`。
4. **工具组件处理开始时必须 `setResult(null)`**：否则处理失败后旧结果卡残留，用户会下载到上一个任务的文件（真实事故）。
5. **jpg-to-pdf 的 EXIF 方向**：必须经 `src/lib/pdf/image-orientation.ts` 矫正，否则手机竖拍照片侧躺 90°。
6. **route groups 重构过**：路由文件只存在于 `(en)/` 和 `(i18n)/[locale]/`；`src/app/` 根下只剩 sitemap.ts/robots.ts/global-not-found.tsx/icon。移动页面目录后 dev server 必须重启（缓存路由清单）。
7. **sitemap.ts/robots.ts 需 `export const dynamic = 'force-static'`**（Next 15 静态导出要求）。
8. **TS 5.7+ 的 `Uint8Array` 不能直接赋给 `BlobPart`**——统一用 `src/components/tools/blob.ts` 的 `pdfBlob()`。
9. **Windows + Node 22 特有**：postcss.config.js 必须 CommonJS；不用 next/font/google（用系统字体栈）；Node 下跑 pdf.js 测试需 DOMMatrix 等 polyfill（仅测试环境）。
10. **Cloudflare 控制台已无独立 Pages 流程**（并入 Workers）：没有 `wrangler.jsonc` 时 wrangler 会自动套 OpenNext 全栈适配器，静态导出项目必崩。`wrangler.jsonc` 不可删。

## 4. 代码结构速查

```
src/
├── app/(en)/            # 英文页（根路径）：layout/not-found + 5 内容页 + 19 工具页
├── app/(i18n)/[locale]/ # 其他 7 语言镜像（generateStaticParams，dynamicParams=false）
├── app/sitemap.ts       # 由 tools.ts 的 live 工具派生，勿硬编码；无 lastmod（刻意）
├── app/robots.ts        # 放行 AI 爬虫（GPTBot/ClaudeBot/PerplexityBot 等）
├── components/
│   ├── layout/          # Header（语言切换器同路径互转）/Footer/SiteShell/AnalyticsScript
│   ├── pages/           # 页面共享组件（路由文件只做薄封装）
│   ├── pages/tools/ToolPageScaffold.tsx  # 工具页骨架（SEO 内容 + 三层 JSON-LD）
│   ├── tools/           # ToolShell/FileDropzone/DownloadCard/EngineStatus + 12 工具组件
│   ├── seo/             # JsonLd / FactSummary（GEO 定型文案）
│   └── ads/AdBanner.tsx # 未放置；env 控制
├── i18n/locales/*.ts    # 8 语言字典，**en 是 Dictionary 类型源头，必须同构**（tsc 强制）
├── lib/site.ts          # SITE_URL / GITHUB_URL（env 可覆盖）
├── lib/seo.ts           # buildAlternates / pageMetadata / localizedPath / OG_IMAGE_URL
├── lib/tools.ts         # 19 工具注册表（slug/图标/status）
├── lib/guides/          # 教程内容系统（仅英文）：types.ts + index.ts 注册表 + 每篇一个 <slug>.ts 数据文件
└── lib/pdf/             # 纯函数处理层（与 React 解耦，Node 可测）
```

**教程（Guides）系统**：教程页在 `src/app/(en)/guides/`（仅英文，无 hreflang），由 `src/components/pages/guides/GuidePage.tsx` 渲染数据文件。新增教程：在 `src/lib/guides/` 加数据文件（结构见 `how-to-merge-pdf.ts` exemplar，正文链接用 `[label](/path/)` 语法）→ 在 `index.ts` 注册（sitemap/索引页/工具页互链自动生效）。截图由 `scripts/capture-guide-images.mjs`（+ `*-fix.mjs`）用 Playwright 对 `out/` 实拍生成，存 `public/guides/<slug>/`；改图后必须核对数据文件里的 alt 与画面一致。

## 5. 工作约定

- **新增工具**：`lib/pdf/` 纯函数 → `components/tools/` 组件 → ToolPageScaffold 加 slug → `(en)/` + `(i18n)/[locale]/` 各加薄路由 → 8 语言字典加 `toolPages` 条目（**只增不改既有 key**）→ `tools.ts` 置 live → 验证 → Node 实测核心逻辑
- **i18n**：先改 en.ts（类型源头），其余 7 语言同步；metaTitle ≤60 字符、metaDescription ≤160、zh title ≤30 汉字、ja title ≤35 全角字符；术语表见各字典既有译法（三支柱固定）。**新工具允许英文先行**：其余语言插英文占位保证同构（heic-to-pdf 首例），翻译作为独立后续任务
- **验证三件套**（提交前必跑）：`npm run type-check` / `npm run lint` / `npm run build`
- **测试**：无测试框架；核心逻辑用临时 Node 脚本实测（用后删除）。CJS 模式编译（`tsc --module commonjs`）再 require，避免 ESM 路径坑
- **git**：main 分支，英文 commit message；用户已授权本地 commit；**push 前必须经用户确认**（GitHub Desktop 由用户操作）
- **许可**：AGPL-3.0；新增第三方依赖时核对许可证（优先 MIT/Apache；GPL 系引入即传染）

## 6. 环境变量（均构建期内联，无敏感信息）

`NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_GITHUB_URL`（默认 https://github.com/Jimsnote/coolpdf）/ `NEXT_PUBLIC_CF_ANALYTICS_TOKEN`（Cloudflare 控制台自动注入已开，此变量未用）/ `NEXT_PUBLIC_ADSENSE_CLIENT`（未启用）

## 7. 当前状态与下一步

- 已完成：M1-M4 工具全量（现 19 个，heic-to-pdf 为英文先行版）+ 8 语言 + SEO/GEO 基建；三路对抗审查 + 两批修复闭环；上线；www 统一；压缩/保护/解锁生产实测通过
- 进行中/待办：`docs/TODO.md`（Search Console 提交 → 养收录 → AdSense；二期：Word/Excel→Markdown、Service Worker 离线、证件照排版）
- 已知限制：文字水印 canvas 路径、EXIF 重编码路径未经 Node 测试（浏览器已人工验收）；qpdf AES-256 下 accessibility 权限不生效（规范行为，FAQ 已说明）
