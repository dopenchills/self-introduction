import * as React from "react"
import './Skills.scss'

type Skill = {
  name: string | JSX.Element,
  year_including_hobby: string,
  year_including_intern: string,
  products: string[]
}

type SkillGroups = {
  name: string,
  skills: Skill[]
}[]

const Skills = (): JSX.Element => {
  const skillGroups: SkillGroups = [
    {
      name: "バックエンド",
      skills: [
        {
          name: "Python",
          year_including_hobby: "5年",
          year_including_intern: "1年",
          products: ["Webアプリ", "機械学習"]
        },
        {
          name: "Django",
          year_including_hobby: "6ヶ月",
          year_including_intern: "6ヶ月",
          products: ["Webアプリ"]
        },
        {
          name: "Ruby",
          year_including_hobby: "6ヶ月",
          year_including_intern: "6ヶ月",
          products: ["業務上の調査"]
        },
        {
          name: "Ruby on Rails",
          year_including_hobby: "6ヶ月",
          year_including_intern: "6ヶ月",
          products: ["業務上の調査"]
        },
        {
          name: "Java, R",
          year_including_hobby: "6ヶ月",
          year_including_intern: "0",
          products: ["大学の課題"]
        }
      ]
    },
    {
      name: "フロントエンド",
      skills: [
          {
            name: <>HTML, CSS, Java<wbr/>Script</>,
            year_including_hobby: "4年",
            year_including_intern: "1年",
            products: ["Webサイト制作"]
          },
          {
            name: <>Type<wbr/>Script</>,
            year_including_hobby: "1ヶ月",
            year_including_intern: "0",
            products: ["Webサイト制作"]
          },
          {
            name: "React",
            year_including_hobby: "1ヶ月",
            year_including_intern: "0",
            products: ["Webサイト制作"]
          },
          {
            name: "Gatsby",
            year_including_hobby: "1ヶ月",
            year_including_intern: "0",
            products: ["Webサイト制作"]
          },
      ]
    },
    {
      name: "データベース",
      skills: [
        {
          name: "MySQL",
          year_including_hobby: "6ヶ月",
          year_including_intern: "6ヶ月",
          products: ["業務上の調査"]
        },
        {
          name: <>Postgre<wbr/>SQL</>,
          year_including_hobby: "6ヶ月",
          year_including_intern: "6ヶ月",
          products: ["Webアプリ"]
        }    
      ]
    },
    {
      name: "インフラ",
      skills: [
        {
          name: "Amazon Web Services",
          year_including_hobby: "1年",
          year_including_intern: "0",
          products: ["Alexa Skills (Lambda)", "LINE BOT (Lambda)", "バッチ処理 (Lambda, ECS)"]
        }
      ]
    },
    {
      name: "その他",
      skills: [
        {
          name: "Git",
          year_including_hobby: "1.5年",
          year_including_intern: "1.5年",
          products: ["個人開発"]
        },
        {
          name: "Docker",
          year_including_hobby: "1年",
          year_including_intern: "6ヶ月",
          products: ["開発環境構築", "LambdaやECS上の処理"]
        }
      ]
    }
  ]
  return (
    <article className="skills">  
      {
        skillGroups.map((skillgroup, skillgroupIndex) => {
        return (
          <div key={skillgroupIndex}>
            <h2>{skillgroup.name}</h2>
            <table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>

              <thead>
                <tr className="header">
                  <th scope="col"></th>
                  <th className="align-right" scope="col">経験<sup>*1</sup></th>
                  <th className="align-right" scope="col">経験<sup>*2</sup></th>
                  <th scope="col">用途</th>
                </tr>
              </thead>

              <tbody>
                {
                  skillgroup.skills.map((skill, skillIndex) => {
                    return (
                      <tr key={skillIndex}>
                        <th scope="row" className="skill-name">{skill.name}</th>
                        <td className="align-right">{skill.year_including_hobby}</td>
                        <td className="align-right">{skill.year_including_intern}</td>
                        <td>{skill.products.map((product, productIndex) => {
                          return (
                              <span className="product-item" key={productIndex}>{product}{productIndex !== skill.products.length ? <br /> : null}</span>
                          )
                        })}</td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
            <span style={{fontSize: "0.5em"}}>*1: 個人開発<br />*2: 実務とインターン期間の合算</span>
          </div>
        )
      })
    }
    </article>
  )
}

export default Skills
