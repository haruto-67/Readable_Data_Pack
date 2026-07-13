# リーダブル・データパック

**〜 良いデータパックの書き方 完全ガイド 〜**

『リーダブルコード』のようなコーディング作法本の「Minecraftデータパック版」。
コミュニティの規約(Smithed Conventions / MC Datapacks Conventions / Gamemode 4 標準 /
Bookshelf コントリビューションガイド / IMP-Doc / Minecraft Wiki 最適化チュートリアル 等)と、
GitHub上の著名データパックの実践から「こう書かれたデータパックは読みやすく、壊れにくく、速い」
というルールをまとめたガイドです。

対象バージョン: **Java Edition 1.21.x**(1.20.2以降のマクロ対応を前提)

## 📗 Web版(こちらで読むのがおすすめ)

### → https://haruto-67.github.io/Readable_Data_Pack/

全17章を読みやすい単位でページ分割し、サイドバー・章内目次・前後ページナビ付きで読めます。
スマホ表示・ダークモードにも対応しています。

| ページ | 内容 |
|---|---|
| [ホーム](https://haruto-67.github.io/Readable_Data_Pack/) | 概要・一番大事な原則・目次 |
| [第1章 命名規則](https://haruto-67.github.io/Readable_Data_Pack/naming.html) | lower_snake_case、objective・タグ・storage等の命名 |
| [第2〜3章 名前空間とディレクトリ構造](https://haruto-67.github.io/Readable_Data_Pack/structure.html) | 名前空間の設計、レイヤー分割、1ファイル1責務 |
| [第4〜5章 コメントと実行文脈](https://haruto-67.github.io/Readable_Data_Pack/context.html) | ヘッダコメント、IMP-Doc、@s中心主義 |
| [第6章 マクロ関数の設計 ★](https://haruto-67.github.io/Readable_Data_Pack/macros.html) | 本ガイドの目玉。命名・引数規約・隔離・セキュリティ |
| [第7〜8章 変数管理と制御構造](https://haruto-67.github.io/Readable_Data_Pack/variables.html) | scoreboard/storageの使い分け、return、ループ、イベント駆動 |
| [第9〜10章 パフォーマンスと互換性](https://haruto-67.github.io/Readable_Data_Pack/performance.html) | セレクタ最適化、NBT回避、複数パック共存 |
| [第11〜13章 運用・配布・ツール](https://haruto-67.github.io/Readable_Data_Pack/operations.html) | load/tick/install/uninstall、pack.mcmeta、開発環境・CI |
| [第14〜15章 テストとアンチパターン](https://haruto-67.github.io/Readable_Data_Pack/testing.html) | debug常設、アサーション、アンチパターン14選 |
| [第16〜17章 チェックリストと参考文献](https://haruto-67.github.io/Readable_Data_Pack/checklist.html) | 提出前セルフチェック、一次ソース一覧 |

## リポジトリ構成

```
├── リーダブル・データパック.md   # 原稿(Markdown版・全文)
└── docs/                        # Web版(GitHub Pages で公開)
    ├── index.html               # ホーム
    ├── *.html                   # 各章ページ
    ├── style.css                # 共通スタイル(レスポンシブ・ダークモード)
    └── site.js                  # サイドバー・前後ナビの生成
```

Web版は `docs/` を編集して push すると、GitHub Pages により1〜2分で自動反映されます。
ナビゲーション(サイドバー・前後ページ)は `docs/site.js` 内のページ定義から生成されるため、
ページを追加・改名する場合はそこも更新してください。
