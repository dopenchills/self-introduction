import * as React from "react"
import "./Career.scss"

const Career = (): JSX.Element => {
  return (
    <article className="career">
      <section>
        <h2>職歴</h2>
        <table>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2019年11月</td>
              <td>株式会社CAMI&Co.<br /><small>インターン</small></td>
              <td>入社</td>
            </tr>
            <tr>
              <td>2020年7月</td>
              <td>同上</td>
              <td>退職</td>
            </tr>
            <tr>
              <td>2022年4月</td>
              <td>楽天グループ株式会社</td>
              <td>入社</td>
            </tr>
            <tr>
              <td>2022年11月</td>
              <td>同上</td>
              <td>退職</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>学歴</h2>
        <table>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2012年4月</td>
              <td>神奈川県立横浜翠嵐高等学校<br /><small>普通科</small></td>
              <td>入学</td>
            </tr>
            <tr>
              <td>2015年3月</td>
              <td>同上</td>
              <td>卒業</td>
            </tr>
            <tr>
              <td>2015年4月</td>
              <td>私立国際基督教大学<br /><small>教養学部 アーツサイエンス学科</small></td>
              <td>入学</td>
            </tr>
            <tr>
              <td>2020年3月</td>
              <td>同上</td>
              <td>卒業</td>
            </tr>
            <tr>
              <td>2020年4月</td>
              <td>国立電気通信大学<br /><small>情報理工学研究科 機械知能システム学専攻</small></td>
              <td>入学</td>
            </tr>
            <tr>
              <td>2022年3月</td>
              <td>同上</td>
              <td>卒業</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  )
}

export default Career
