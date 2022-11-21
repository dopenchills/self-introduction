import * as React from "react"

const Portfolio = (): JSX.Element => {
  return (
    <article>
      <section>
        <h2>自己紹介サイト (本サイト)</h2>
        <p>
          概要
        </p>
        <h3>こだわった点</h3>
        <ul>
          <li>Performance</li>
          <li>Accessibility</li>
          <li>Fun to use</li>
        </ul>
        <p>
        </p>
        <h3>大変だった点</h3>
        <p>
          <ul>
            <li>フロントエンドの知識が少なく、勉強に時間がかかった点</li>
          </ul>
        </p>
        <h3>使用した技術</h3>
        <ul>
          <li>TypeScript</li>
          <li>Gatsby.js</li>
        </ul>
      </section>
    </article>
  )
}

export default Portfolio
