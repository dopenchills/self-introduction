import * as React from "react"

const Portfolio = (): JSX.Element => {
  return (
    <article>
      <section>
        <h2>自己紹介サイト</h2>
        <p>
          現在ご覧の自己紹介サイトを制作いたしました。
        </p>
        <h3>こだわった点</h3>
        <h4>Webサイトのパフォーマンス</h4>
        <ul>
          <li>React.jsでDOMの差分を更新することにより、素早いDOM要素の更新を狙いました</li>
          <li>Gatsby.jsを採用することにより、初回読み込み速度の向上を狙いました</li>
        </ul>
        <h4>アクセシビリティ</h4>
        <ul>
          <li>Web Content Accessibility Guidelines (WCAG) 2をもとに文字が読みやすい色を選びました</li>
          <li>FunkifyというGoogle Chromeの拡張機能を用い、アクセシビリティに関する問題をテストしました</li>
        </ul>
        <h4>ユーザエクスペリエンス</h4>
        <p>ユーザが心地よく感じられるように工夫しました。</p>
        <ul>
          <li>自然を感じられる絵</li>
          <li>形を変えながらゆっくりと流れていく雲</li>
        </ul>
        <h3>楽しかった点</h3>
        <h4>HTML, JavaScript, TypeScriptの体系的な勉強ができたこと</h4>
        <p>
          Webサイトに関する体系的な学習ができたのが楽しかったです。
          今まで何となく書いていたコードを正しく理解できるようになりました。
        </p>
        <p>以下の資料を用いて勉強しました。</p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTML elements reference - HTML: HyperText Markup Language | MDN</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">JavaScript Guide - JavaScript | MDN</a></li>
          <li><a href="https://www.typescriptlang.org/docs/handbook/intro.html">The TypeScript Handbook</a></li>
        </ul>
        <h3>大変だった点</h3>
        <h4>読みやすいデザインを見つけるのに苦労したこと</h4>
        <p>
          自分でCSSを設定すると不格好になってしまい、デザインの難しさを感じました。
        </p>
        <p>
          フォントサイズを小さくするとオシャレに見えるのですが読みづらく、
          フォントサイズを大きくすると多少読みやすくなるものの、不格好になってしまいます。
        </p>
        <p>
          自分が読みやすいと思う既存のサイト(<a href="notion.so">notion.so</a>や<a href="note.com">note.com</a>)を分析することで改善していきました。
        </p>
        <h4>CSSについて調査したりデバッグしたりするのに苦労したこと</h4>
        <p>
          思った通りにCSSが書けずに苦労しました。
          そもそもCSSのプロパティをあまり知らなかったので、検索もデバッグも効率的にできませんでした。
          今後はCSSに関する知識をつけていきたいと考えています。
        </p>
        <h3>使用した技術</h3>
        <h4>Gatsby.js</h4>
        <p>以下の理由からGatsby.jsを採用しました。</p>
        <ul>
          <li>
            以下のような強みのあるReact.jsをベースにしているため
            <ul>
              <li>DOMの差分を更新することにより素早いレンダリングができる</li>
              <li>コンポーネント単位で、関心に基づいてコードを分離できる</li>
              <li>最も人気のあるライブラリであり、不明点を解消しやすい</li>
            </ul>
          </li>
          <li>Static Site Generationにより、React.jsよりも初回読み込み時の速度を高めることができるため</li>
        </ul>
        <h4>TypeScript</h4>
        <p>以下の理由からTypeScriptを採用しました。</p>
        <ul>
          <li>
            以下のようなIDEの恩恵を受けることができるため
            <ul>
              <li>コードを書いた瞬間に型に関するエラーが検知される</li>
              <li>コード補完が効きやすい</li>
            </ul>
          </li>
          <li>
            TypeScriptを学習することで、
            今後フロントエンドとバックエンドを同一の言語で書くことができるようになるため
          </li>
        </ul>
        <h4>SCSS</h4>
        <p>以下の理由からSCSSを採用しました。</p>
        <ul>
          <li>変数やモジュールを使うことができる</li>
          <li>ネストを使ってコンパクトに読みやすく書くことができる</li>
          <li>CSSの延長として書けるため学習コストが低い</li>
        </ul>
        <h4>その他使用技術</h4>
        <ul>
          <li>AWS S3: 静的サイトのホスティング</li>
          <li>AWS Route 53: ドメインの登録・DNSレコードの管理</li>
        </ul>
      </section>
    </article>
  )
}

export default Portfolio
