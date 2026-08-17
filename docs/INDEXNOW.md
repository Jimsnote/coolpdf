# IndexNow 接入说明

> getcoolpdf.com 已接入 [IndexNow](https://www.indexnow.org/documentation) 协议，可主动向 Bing 等搜索引擎推送新增/更新/删除的 URL，加快收录。
> Cloudflare 的 Crawler Hints 是被动信号（CF 边缘检测到变化才触发），不能替代主动提交；两者可共存，均保持开启即可。

---

## 配置信息

| 项目 | 值 |
|------|-----|
| Host | `getcoolpdf.com`（www 已 301 到主域） |
| Key | `58395c2f24c9698dc16736b1d5933a51` |
| Key 文件（本地） | `public/58395c2f24c9698dc16736b1d5933a51.txt` |
| Key 文件（线上） | `https://getcoolpdf.com/58395c2f24c9698dc16736b1d5933a51.txt` |
| 提交端点 | `https://api.indexnow.org/indexnow`（提交后自动共享给所有参与引擎） |

> key 不是机密——它必须能通过公网 URL 访问，搜索引擎靠抓取该文件验证站点所有权。

---

## 提交 URL

在项目根目录运行：

```bash
# 提交 out/sitemap.xml 中的全部 URL（需先 npm run build）
npm run indexnow

# 只提交指定 URL（页面新增/更新/删除时）
npm run indexnow -- https://getcoolpdf.com/new-tool
```

脚本：`scripts/indexnow-submit.mjs`（零依赖，Node 18+）。

响应码含义：200 提交成功；202 已接收、key 验证待完成（首次提交后稍等重试即可）；403 key 无效（检查 key 文件是否已部署）；422 URL 不属于该 host；429 提交过于频繁。

**注意**：只应提交有变化的 URL，不要无意义地高频重复提交全站。

---

## 部署注意事项

1. key 文件在 `public/` 下，`npm run build` 时随静态导出进入 `out/` 根目录，`npx wrangler deploy` 后自动上线，无需额外操作。
2. 首次部署 key 文件后，运行一次 `npm run indexnow` 全站提交；之后 Bing 站长工具的 IndexNow 提醒会消除。
3. 新增/删除/大改页面后，用显式 URL 参数单独提交对应页面即可。

---

## 更换 key

1. 生成新 key（8–128 位，仅 a-zA-Z0-9 和短横线）：`node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`
2. 用新 key 命名新的 `{key}.txt` 文件（内容为 key 本身），放入 `public/`
3. 删除旧的 key 文件
4. 更新 `scripts/indexnow-submit.mjs` 中的 `KEY` 常量
5. 重新构建部署
