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
- 對 article.ai 的改寫建議

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

來源是 X 貼文時，不用 X widgets.js（需載入外部 JS，離線不可見）。一律用站內靜態卡片還原＋本地頭像，文字、時間、數據逐字核對：

- 頭像：下載 `..._normal` 圖到 `public/articles/<slug>/`，顯示 **40×40 圓形**（X 本尊尺寸）。
- 卡片結構：header（頭像＋粗體名＋認證徽章＋灰色 handle 行）→ 內文 17px → 時間列（`9:02 PM · Aug 28, 2026 · 2.2M Views`，瀏覽數粗體黑字）→ 圖示操作列（回覆／轉發／喜歡／瀏覽數＋書籤／分享，用 SVG 線條 icon，灰色 `#536471`）→ 灰色小字原文連結。
- 認證徽章：金勾僅限確認的企業帳號、藍勾僅限確認的個人帳號；**不確定就省略，不亂標**。
- 只還原可核對的數字；X 本來不顯示書籤數，書籤只留圖示、不編數字。
- 卡片下方一律加 `<small class="figure-caption">`：註明是靜態還原，並附繁體譯文。
- 版式範本：以 `src/content/articles/uber-software-factory-analysis.mdx` 內的卡片為準，後續直接沿用，不得各篇自創版式。

## 成文為 repo 文章時的規範

分析完若要收進 article.ai，遵守以下慣例：

- frontmatter 欄位：title、description、publishedAt、topic、sourceType、sourceUrl、authors、venue、tags、readTime、evidence、featured、sourceCount、accent（照抄既有文章的鍵名）。
- 圖片放 `public/articles/<slug>/`，引用路徑寫 `/article.ai/articles/<slug>/...`；每張圖下方加 `<small class="figure-caption">`；技術圖優先自繪 SVG，不引用外部 CDN（斷鏈風險）。
- MDX 地雷：內文不可出現 `<` 緊接數字或中文標點（例如 `<3 m`），會被當成 JSX 解析失敗；用 backtick 包起來或改寫。
- 證據等級：單一公司自述或單則貼文，evidence 只能給「中」或「探索中」，並在內文明確標註未支撐處。
- 寫完跑 `npm run build`，確認新頁面生成且首頁 index 有收錄。
