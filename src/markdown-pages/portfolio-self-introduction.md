---
key: "portfolio-self-introduction"
date: "2022-11-24"
title: "自己紹介サイト"
---

現在ご覧の自己紹介サイトを制作いたしました。

### こだわった点

#### Webサイトのパフォーマンス

-   React.jsでDOMの差分を更新することにより、素早いDOM要素の更新を狙いました
-   Gatsby.jsを採用することにより、初回読み込み速度の向上を狙いました

#### アクセシビリティ

-   Web Content Accessibility Guidelines (WCAG) 2をもとに文字が読みやすい色を選びました
-   FunkifyというGoogle Chromeの拡張機能を用い、アクセシビリティに関する問題をテストしました

#### ユーザエクスペリエンス

ユーザが心地よく感じられるように工夫しました。

-   自然を感じられる絵
-   形を変えながらゆっくりと流れていく雲

### 楽しかった点

#### HTML, JavaScript, TypeScriptの体系的な勉強ができたこと

Webサイトに関する体系的な学習ができたのが楽しかったです。 今まで何となく書いていたコードを正しく理解できるようになりました。

以下の資料を用いて勉強しました。

-   [HTML elements reference - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
-   [JavaScript Guide - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
-   [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### 大変だった点

#### 読みやすいデザインを見つけるのに苦労したこと

自分でCSSを設定すると不格好になってしまい、デザインの難しさを感じました。

フォントサイズを小さくするとオシャレに見えるのですが読みづらく、 フォントサイズを大きくすると多少読みやすくなるものの、不格好になってしまいます。

自分が読みやすいと思う既存のサイト([notion.so](https://notion.so/)や[note.com](https://note.com/))を分析することで改善していきました。

#### CSSについて調査したりデバッグしたりするのに苦労したこと

思った通りにCSSが書けずに苦労しました。 そもそもCSSのプロパティをあまり知らなかったので、検索もデバッグも効率的にできませんでした。 今後はCSSに関する知識をつけていきたいと考えています。

### 使用した技術

#### Gatsby.js

以下の理由からGatsby.jsを採用しました。

-   以下のような強みのあるReact.jsをベースにしているため
    -   DOMの差分を更新することにより素早いレンダリングができる
    -   コンポーネント単位で、関心に基づいてコードを分離できる
    -   最も人気のあるライブラリであり、不明点を解消しやすい
-   Static Site Generationにより、React.jsよりも初回読み込み時の速度を高めることができるため

#### TypeScript

以下の理由からTypeScriptを採用しました。

-   以下のようなIDEの恩恵を受けることができるため
    -   コードを書いた瞬間に型に関するエラーが検知される
    -   コード補完が効きやすい
-   TypeScriptを学習することで、 今後フロントエンドとバックエンドを同一の言語で書くことができるようになるため

#### SCSS

以下の理由からSCSSを採用しました。

-   変数やモジュールを使うことができる
-   ネストを使ってコンパクトに読みやすく書くことができる
-   CSSの延長として書けるため学習コストが低い

#### その他使用技術

-   AWS S3: 静的サイトのホスティング
-   AWS Route 53: ドメインの登録・DNSレコードの管理