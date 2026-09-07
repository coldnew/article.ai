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
