---
name: article-workflow-analysis
description: "Use when the user gives a long Zhihu/Medium/blog post about reading papers, academic skills, research workflows, Claude Code skills, or asks to turn such a post into a reusable repo-local skill or article.ai analysis. Also use when the output must be Traditional Chinese and must separate claims, evidence, inference, and actionable steps."
---

# 文章工作流分析

你要把這類長文當成「流程設計文件」來讀，而不是單純摘要。

先做四件事：

1. 先判斷文章主題是「讀論文工具鏈、研究流程、技能編排、知識管理」中的哪一種。
2. 把文章拆成可重用模組：來源發現、是否值得讀、精讀、抽取資料、找空白、寫作、回覆、週報。
3. 區分四種內容：原文明說、從原文可直接推出、你的合理推斷、仍未被支撐的主張。
4. 全程只用繁體中文；如果來源是簡體中文，先轉成繁體再整理。
5. 引用或總結時要直接標明來源文章的名稱或站點，不要只寫「原文」或「這篇」。例如要寫成「《XXXX》這篇文章指出……」。

輸出時要固定包含這些部分：

- 一句話結論
- 這篇文章真正解決的問題
- 流程拆解
- 哪些步驟適合做成 skill 或自動化
- 風險與盲點

如果文章屬於技術／工程／系統程式內容，預設要附上至少一項可視化佐證，例如：

- 原文截圖
- 圖表
- 架構圖
- 指令或 assembly 截圖

沒有圖就要明說來源沒有可用視覺材料，或目前無法取得；不要只輸出純文字長文，因為那不算完整的技術文章分析。

如果文章在講「如何把多個 skill 串成流水線」，你要額外輸出：

- 建議的 repo-local skill 名稱
- 觸發詞
- 最小可用職責
- 與現有 skill 的分工邊界

不要把作者的宣傳語當成事實。不要把工具名稱當成方法本身。不要省略不確定性。

## X 貼文來源：靜態卡片嵌入規範

來源是 X 貼文時，不用 X widgets.js（需載入外部 JS，離線不可見）。一律用站內 `XPostCard` 元件（`src/components/XPostCard.astro`，對標 stock 的 `XPostCard` 版式），文字、時間、數據逐字核對：

```mdx
import XPostCard from '../../components/XPostCard.astro';

<XPostCard author="Ming" handle="@tslaming" avatar="/article.ai/articles/<slug>/xxx-avatar.jpg" timestamp="2:07 AM · Sep 6, 2026" views="3.8K" replies="2" reposts="31" likes="5" sourceUrl="https://x.com/..." mediaUrl="" mediaAlt="">
<p><strong>標題段（如有）</strong></p>
<p>內文段落逐字還原……</p>
</XPostCard>
```

- 頭像：下載 `..._normal` 圖到 `public/articles/<slug>/`，以 `avatar` 傳入，顯示 **40×40 圓形**（X 本尊尺寸）；拿不到頭像就省略，元件會用首字佔位圓代替。
- 認證徽章：`verified="gold"` 僅限確認的企業帳號、`verified="blue"` 僅限確認的個人帳號；**不確定就省略，不亂標**。
- 只還原可核對的數字；缺的指標直接省略該 prop（元件只渲染有傳的）；X 本來不顯示書籤數，書籤只留圖示、不編數字。
- 卡片下方一律加 `<small class="figure-caption">`：註明是靜態還原，並附繁體譯文。
- 內文一律用乾淨 `<p>`，不得寫內聯 `style`；需要附圖時用 `mediaUrl`（本地存檔圖，外部圖床一律先存到 `public/articles/<slug>/`）。
- 版式以元件為準，不得各篇自創版式。

## 成文為 repo 文章時的規範

分析完若要收進 article.ai，遵守以下慣例：

- frontmatter 欄位：title、description、publishedAt、topic、sourceType、sourceUrl、authors、venue、tags、readTime、evidence、featured、sourceCount、accent（照抄既有文章的鍵名）。
- 圖片放 `public/articles/<slug>/`，引用路徑寫 `/article.ai/articles/<slug>/...`；每張圖下方加 `<small class="figure-caption">`；技術圖優先自繪 SVG，不引用外部 CDN（斷鏈風險）。
- MDX 地雷：內文不可出現 `<` 緊接數字或中文標點（例如 `<3 m`），會被當成 JSX 解析失敗；用 backtick 包起來或改寫。
- 證據等級：單一公司自述或單則貼文，evidence 只能給「中」或「探索中」，並在內文明確標註未支撐處。
- 寫完跑 `npm run build`，確認新頁面生成且首頁 index 有收錄。
