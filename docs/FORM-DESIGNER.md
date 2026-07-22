# PDF 表单设计器（form-designer）立项调研

> 立项设计文档。状态：**调研完成，待拍板开工**（与 sign-pdf、证件照、OCR 的先后由站主定）。
> 调研日期：2026-07-21；技术可行性已用 Node PoC 实测验证（脚本用后已删）。

---

## 1. 一句话

让用户在浏览器里**给现有 PDF 叠加可填写表单字段**（文本框/复选框/单选/下拉），导出为标准 AcroForm PDF——收信人用 Acrobat、浏览器、macOS 预览都能直接填写。

## 2. 可行性结论：可行，且 PDF 层几乎零成本

`@cantoo/pdf-lib`（现有依赖）原生支持 AcroForm 字段创建，**无需引入新的重型库**。PoC 实测记录：

- 6 种字段创建成功：单行文本、多行文本（`enableMultiline`）、复选框、单选组（`createRadioGroup` + 多 widget）、下拉框、列表框；必填标记 `enableRequired()` 可用
- 保存 → 重开 → `getFields()` 枚举回路完整（名称/类型/坐标全对）
- **关键路径**：往现有 2 页 PDF 追加文本框字段，重开验证字段存在 ✓（这就是"上传表单 → 加字段 → 导出"的核心链路）
- 产物纯矢量、极小（整份 7.6KB）

真正的工作量在**设计器 UI**（交互复杂度超过 organize-pdf，是全站最重的组件之一）。

## 3. 产品形态与分期

| 形态 | 说明 | 分期 |
|---|---|---|
| **A. 给现有 PDF 加字段** | 上传扫描件/Word 导出表单 → 拖放字段 → 导出可填写 PDF | **v1（本立项）** |
| **C. 在线填写已有表单** | 上传可填写 PDF → 浏览器内填值 → 导出；与 A 共享字段读取管线 | v2（A 的顺带延伸） |
| **B. 从零设计表单** | 空白页 + 静态文本/线条/图片 + 字段，完整排版编辑器 | v3 以后（工作量数倍于 A，暂缓） |

### v1 范围（建议）

- 字段类型：单行文本、多行文本、复选框、单选组、下拉框（列表框可 v1.1）
- 多页支持：左侧页面缩略图切换，字段可放任意页
- 字段操作：拖拽移动、8 向 resize、属性面板（字段名、必填、字号、下拉/单选选项编辑）、删除、复制（v1.1）
- 导出：`fillable.pdf`

## 4. v1 技术方案

### 数据模型与 lib 层（Node 可测）

```ts
// src/lib/pdf/form-fields.ts —— 纯函数，Node 可测
interface FieldSpec {
  type: 'text' | 'multiline' | 'checkbox' | 'radio' | 'dropdown';
  page: number;               // 0-based
  rect: { x: number; y: number; width: number; height: number }; // PDF pt
  name: string;               // 唯一；radio 组共享组名
  required: boolean;
  options?: string[];         // radio / dropdown
  fontSize?: number;          // text
}
addFormFieldsToPdf(pdfBytes: Uint8Array, specs: FieldSpec[]): Promise<Uint8Array>
```

测试：Node 断言字段数/类型/坐标/选项/必填标记（pdf-lib 在 Node 全功能可用，无浏览器依赖）。

### 设计器 UI（`src/components/tools/FormDesignerTool.tsx`）

- pdf.js 渲染当前页为背景（`src/lib/pdf/pdfjs.ts` 懒加载现成）
- 字段 = 页面上绝对定位的 div：pointer events 拖拽 + resize 手柄（**不引新依赖**；dnd-kit 是排序语义，不适合自由拖拽）
- 屏幕 px ↔ PDF pt 换算：pdf.js viewport scale（organize-pdf 已有同款经验）
- 左侧页缩略图栏（复用 organize 的渲染思路）、右侧属性面板
- 字段名自动生成 `text_1`、`checkbox_2`…，防重校验（pdf-lib 要求唯一；radio 组共享组名是设计如此）

### 页面/字典/注册

按标准新工具流程（见 AGENTS.md §5）；slug 建议 `pdf-form-creator`（对标关键词）或 `fillable-pdf`，开工时定。允许英文先行、7 语言占位后补（heic-to-pdf 已跑通该流程）。

## 5. 已知坑与对策

1. **fork API 差异**：cantoo 版外观刷新是 `updateFieldAppearances()`（非上游 `updateAppearances`）——PoC 已确认。
2. **CJK 默认值**：pdf-lib 生成外观仅 WinAnsi；字段默认值/占位文本含中文会抛错。对策：v1 不设默认值；v2 填写功能需要时嵌自定义字体（NotoSans 子集）或置 `NeedAppearances=true` 让查看器自行生成外观。
3. **XFA 表单**：老式 XML 表单 pdf-lib 不支持 → 上传时检测并友好报错（字典加专用错误 key）。
4. **数字签名字段**：pdf-lib 能力外，不做、不承诺（签名需求由 sign-pdf 覆盖手绘/拍照图片签名）。
5. **加密 PDF**：走现有 `classifyPdfError` 友好报错管线，无需新逻辑。
6. **内存**：表单设计只读页渲染 + 矢量字段，无大图驻留，沿用 100MB/50MB 上限即可。

## 6. 竞品与 SEO

- **iLovePDF / Smallpdf 无此功能**；niche 现属 PDFescape、pdfFiller（全是上传派）——与"本地处理"定位天然互补，差异化逻辑同 docx/xlsx→Markdown。
- 高意图关键词：create fillable pdf (free) / pdf form creator / make pdf fillable / add form fields to pdf。
- 页面结构（steps/privacyText/FAQ/三层 JSON-LD）全量复用 ToolPageScaffold。

## 7. 工作量粗估

- lib 纯函数 + Node 测试：~0.5 天
- 设计器 UI（渲染/拖拽/resize/属性面板/多页）：全站最重组件，~2-3× organize-pdf 交互量
- 字典 + 路由 + 验证 + 文档：标准流程
- **整体：大件，单独成批，不与其他功能混做**

## 8. 待站主拍板

- 与 sign-pdf（快赢、小活）、证件照排版、OCR 的先后顺序
- slug 定名（`pdf-form-creator` vs `fillable-pdf`）
- v1 字段类型是否含列表框
