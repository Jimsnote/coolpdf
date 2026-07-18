# CoolPDF 后续工作清单

> 站主跟踪用。技术细节见 `docs/PROJECT.md`，AI 协作上下文见根目录 `AGENTS.md`。
> 状态标记：`[ ]` 未开始 / `[~]` 进行中 / `[x]` 完成

## 一、上线运营（按时间顺序）

- [x] 部署上线（Workers Static Assets + wrangler.jsonc）
- [x] www → 主域名 301 统一（CNAME + 已有 Redirect）
- [x] Cloudflare Web Analytics 开启
- [ ] Google Search Console 验证（设置 → 域名属性 → DNS TXT 记录）并提交 sitemap.xml
- [ ] Bing Webmaster Tools 验证并提交 sitemap
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
- [ ] 隐私政策 AdSense/CMP 条款从"将来时"改为"进行时"（7 语言同步）
- [ ] 红线自查：不点自己广告、不引导点击、广告位不造成误点

## 二、二期功能（按优先级）

- [ ] Word(docx) → Markdown（mammoth.js，纯浏览器成熟方案）
- [ ] Excel(xlsx) → Markdown（SheetJS）
- [ ] Service Worker 全站离线缓存（FAQ 已按"路线图"口径描述，实现后改文案）
- [ ] 证件照/护照照排版工具（Konva 画布 + 300DPI 输出；Passport Photo 是高价值 SEO 词；可参考 C:\home\icreate\ipdftoo 的 IDPhotoEditor 实现思路）
- [ ] page-numbers 的 `n-of-total` 连接词本地化（当前硬编码英文 "of"）
- [ ] 对比/榜单内容页（"iLovePDF alternative privacy" 等 GEO 关键词博客文）

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
