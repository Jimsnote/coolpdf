# CoolPDF 后续工作清单

> 站主跟踪用。技术细节见 `docs/PROJECT.md`，AI 协作上下文见根目录 `AGENTS.md`。
> 状态标记：`[ ]` 未开始 / `[~]` 进行中 / `[x]` 完成

## 一、上线运营（按时间顺序）

- [x] 部署上线（Workers Static Assets + wrangler.jsonc）
- [x] www → 主域名 301 统一（CNAME + 已有 Redirect）
- [x] Cloudflare Web Analytics 开启
- [x] Google Search Console 验证（设置 → 域名属性 → DNS TXT 记录）并提交 sitemap.xml
- [x] Bing Webmaster Tools 验证并提交 sitemap
- [ ] 上线后 1 周：检查收录（Search Console「覆盖率」）、确认无抓取错误
- [ ] 上线后 2-4 周：观察关键词展示数据，记录表现好的语言/工具页
- [ ] 上线后 4-6 周：申请 Google AdSense（清单见下）
- [ ] AdSense 审核通过后：放广告位（工具区下方 + 内容段中部，远离工具按钮）

### AdSense 接入清单（届时逐项做）

- [ ] AdSense 账号注册/审核（真实姓名地址；$10 PIN 明信片验证；$100 电汇）
- [ ] 验证代码接入两个根布局（(en)/(i18n)）
- [ ] Pages 环境变量设 `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxx`
- [ ] `public/ads.txt` 添加授权行
- [ ] `public/_headers` CSP 按 Google 官方清单放宽（docs/PROJECT.md 4.3）
- [ ] 装 CMP（CookieYes 免费档，支持 Consent Mode v2）
- [ ] 隐私政策 AdSense/CMP 条款从"将来时"改为"进行时"（8 语言同步）
- [ ] 红线自查：不点自己广告、不引导点击、广告位不造成误点

## 二、二期功能（按优先级，2026-07 竞品分析后重排）

### 第一批 · 快赢包
- [x] organize 拆 3 个独立页：remove-pages / extract-pages / reorder-pages。**方案**：`OrganizePdfTool` 加 `preset` 属性（三 URL 共享同一组件与逻辑，只变路由/metadata/H1/文案，不重写工具）；字典走精简模板（复用共享 toolUi key，每页只加 meta+intro+4步骤+短隐私段+3FAQ）；reorder-pages 链现有 organize 教程，remove/extract 的专属教程延后到第三批补（ToolPageScaffold 未命中教程时不渲染链接卡，无影响）；slug 用 remove-pages，title 覆盖 Delete 变体
- [x] 工具页 H1 下加信任 chips 行（No upload / Runs locally / No sign-up）
- [x] page-numbers 的 `n-of-total` 连接词本地化（当前硬编码英文 "of"）

### 第二批 · Markdown 护城河（竞品都没有）
- [x] Word(docx) → Markdown（mammoth.js + turndown，纯浏览器；Node 实测标题/加粗/列表/表格全对）
- [x] Excel(xlsx) → Markdown（SheetJS，每工作表一个 Markdown 表格节）

### 第三批 · 功能补词 + 内容
- [x] extract-images-from-pdf（pdf.js operatorList 提取原图；v6 机制：注册回调→渲染触发解析→ImageBitmap 收割）
- [x] compare 页 ×3（coolpdf-vs-ilovepdf / vs-smallpdf / vs-sejda；对比表 + "对手强项"诚实栏 + Fact checked + 来源 + FAQ schema）
- [x] 榜单文 1 篇（"5 PDF Tools That Don't Upload Your Files"，GEO 高频引用源）
- [x] remove/extract 专属教程 2 篇（第一批拆页的配套教程）

### 第四批 · 中等功能
- [x] heic-to-pdf（iPhone 照片直转 PDF，heic2any 类解码库 → 实际用 heic-to/csp 1.5.2（libheif 1.22.2，LGPL-3.0，blob Worker 解码零 eval 过 CSP）；复用 jpg-to-pdf 的 orientation/fit 管线，英文版先行）
- [ ] heic-to-pdf 其余 7 语言翻译补全（当前英文占位，type-check 已保证结构同构）
- [ ] sign-pdf（canvas 手绘签名 + pdf-lib 嵌入）

### 第五批 · 大件二选一（届时按数据拍板）
- [ ] 证件照/护照照排版（Konva 画布 + 300DPI；"passport photo" 词量极大；可参考 C:\home\icreate\ipdftoo 的 IDPhotoEditor 实现思路）
- [ ] OCR PDF（tesseract.js WASM；可打通"扫描件 → Markdown"独家链路）

### 暂缓
- [~] Service Worker 全站离线缓存（SEO 零收益 + 工程风险：17MB wasm 预缓存/版本失效/旧内容过期；FAQ 现有措辞够用，实现后再改文案）

## 三、已知小项（不紧急，择机处理）

- [ ] npm audit 2 个 moderate（postcss 传递依赖，仅构建期，静态导出无暴露面，等上游修复）
- [ ] protect-pdf 的"无障碍提取"开关在 AES-256 下不生效（qpdf/PDF 规范行为，FAQ 已说明）
- [ ] 翻译母语级校对（德/法/西/葡/意 各语言工具页通读一遍，当前为 AI 翻译 + 术语统一）
- [ ] 工具页在真实移动设备上过一遍（iOS Safari 重点：canvas 上限、内存限制）

## 四、例行维护

- [ ] 每月：依赖小版本更新（`npm outdated`），更新后跑三件套（type-check/lint/build）+ 核心工具冒烟
- [ ] jspawn 包升级后：验证 compress/protect/unlock 三工具（wasm 文件名由 manifest 自动跟随，勿硬编码）
- [ ] Cloudflare 构建镜像 Node 版本漂移检查（仓库已锁 Node 22：.nvmrc + engines）
- [ ] 域名续费提醒：getcoolpdf.com 每年 ~$10.44（Cloudflare Registrar 自动续费，留意扣款失败）
