import * as React from "react"
import Tr from "../commons/Tr"
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
            <Tr>
              <th>年月</th>
              <th></th>
              <th></th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <td>2019年11月</td>
              <td>株式会社CAMI&Co. (インターン)</td>
              <td>入社</td>
            </Tr>
            <Tr>
              <td>2020年7月</td>
              <td>株式会社CAMI&Co. (インターン)</td>
              <td>退職</td>
            </Tr>
            <Tr>
              <td>2022年4月</td>
              <td>楽天グループ株式会社 入社</td>
              <td>入社</td>
            </Tr>
            <Tr>
              <td>2022年11月</td>
              <td>楽天グループ株式会社 退職</td>
              <td>退職</td>
            </Tr>
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
            <Tr>
              <th>年月</th>
              <th></th>
              <th></th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <td>2012年4月</td>
              <td>神奈川県立横浜翠嵐高等学校 普通科</td>
              <td>入学</td>
            </Tr>
            <Tr>
              <td>2015年3月</td>
              <td>神奈川県立横浜翠嵐高等学校 普通科</td>
              <td>卒業</td>
            </Tr>
            <Tr>
              <td>2015年4月</td>
              <td>私立国際基督教大学 教養学部 アーツサイエンス学科</td>
              <td>入学</td>
            </Tr>
            <Tr>
              <td></td>
              <td>2018年9月から2019年5月までオランダ王国ティルブルフ大学にて交換留学</td>
            </Tr>
            <Tr>
              <td>2020年3月</td>
              <td>私立国際基督教大学 教養学部 アーツサイエンス学科</td>
              <td>卒業</td>
            </Tr>
            <Tr>
              <td>2020年4月</td>
              <td>国立電気通信大学 情報理工学研究科 機械知能システム学専攻</td>
              <td>入学</td>
            </Tr>
            <Tr>
              <td>2022年3月</td>
              <td>国立電気通信大学 情報理工学研究科 機械知能システム学専攻</td>
              <td>卒業</td>
            </Tr>
          </tbody>
        </table>
      </section>
    </article>
  )
}

export default Career
