---
key: "portfolio-self-introduction"
date: "2022-11-24"
title: "自己紹介サイト"
---

この自己紹介サイトを制作いたしました。

### こだわった点

#### Webサイトのパフォーマンス

-   React.jsを採用し、DOM要素を素早く更新できるようにしました
-   Gatsby.jsを採用し、初回読み込み速度の向上を狙いました

#### アクセシビリティ

-   [Web Content Accessibility Guidelines (WCAG) 2](https://www.w3.org/TR/WCAG20/#:~:text=1.4.3%20Contrast%20(Minimum)%3A%20The%20visual%20presentation%20of%20text%20and%20images%20of%20text%20has%20a%20contrast%20ratio%20of%20at%20least%204.5%3A1%2C%20except%20for%20the%20following%3A%20(Level%20AA))をもとに文字色を選びました
-   FunkifyというGoogle Chromeの拡張機能を用い、アクセシビリティに関する問題をテストしました

#### ユーザエクスペリエンス

ユーザが心地よく感じられるように心がけました。

-   統一感のある色づかい
-   優しい自然を感じられる背景
-   丸みのあるコンポーネント
-   適度な速度のトランジション
        - ダークモードへの切り替え速度
        - 画面の切り替わりの速度

### 楽しかった点

#### HTML, JavaScript, TypeScriptの体系的な勉強

体系的な勉強をすることにより、今まで何となく書いていたコードを正しく理解できるようになりました。

以下の資料を用いて勉強しました。

-   [HTML elements reference - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
-   [JavaScript Guide - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
-   [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### 大変だった点

#### 読みやすいデザインの探索

自分でCSSを設定すると不格好になってしまい、デザインの難しさを感じました。

フォントサイズを小さくするとオシャレに見えるのですが読みづらく、 フォントサイズを大きくすると多少読みやすくなるものの、不格好になってしまいます。

自分が読みやすいと思う既存のサイト([notion.so](https://notion.so/)や[note.com](https://note.com/))を分析することで改善していきました。

#### CSSのデバッグ

思った通りにCSSが書けずに苦労しました。 そもそもCSSのプロパティをあまり知らなかったので、検索もデバッグも効率的にできませんでした。 今後はCSSに関する知識をつけていきたいと考えています。

### 使用した技術

#### Gatsby.js

以下の理由からGatsby.jsを採用しました。

-   React.jsをベースにしているため
    -   素早いレンダリングができる
    -   コンポーネント単位で、関心に基づいてコードを分離できる
    -   最も人気のあるライブラリであり、不明点を解消しやすい
-   Static Site Generationにより、React.jsよりも初回読み込み時の速度を高めることができるため

実際に使ってみて、Gatsby.jsはデフォルトの機能やプラグインが充実していることに気づきました。画像の最適化、faviconの設定、OGタグの設定などがとても簡単でした。React.jsを直接扱うよりも楽だと思います。

#### TypeScript

以下の理由からTypeScriptを採用しました。

-   IDEの恩恵を受けることができるため
    -   コードを書いた瞬間に型に関するエラーが検知される
    -   コード補完が効きやすい
-   バックエンドも同一の言語で書くことができるため

#### SCSS

以下の理由からSCSSを採用しました。

-   ネストを使って読みやすく書ける
-   モジュールを使うことでコードを共通化できる
-   学習コストが低い

#### その他使用技術

-   AWS S3: 静的サイトのホスティング
-   AWS Route 53: ドメインの登録・DNSレコードの管理
