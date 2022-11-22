import * as React from "react"
import './Skills.scss'

type Skill = {
  name: string,
  year_including_hobby: number,
  year_including_intern: number,
  product?: string  
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
          year_including_hobby: 5,
          year_including_intern: 1,
          product: "Webアプリ, 機械学習"
        },
        {
          name: "Django",
          year_including_hobby: 0.5,
          year_including_intern: 0.5,
          product: "Webアプリ"
        },
        {
          name: "Ruby",
          year_including_hobby: 0.5,
          year_including_intern: 0.5,
          product: "業務上の調査"
        },
        {
          name: "Ruby on Rails",
          year_including_hobby: 0.5,
          year_including_intern: 0.5,
          product: "業務上の調査"
        },
        {
          name: "Java, R",
          year_including_hobby: 0.5,
          year_including_intern: 0,
          product: "大学の課題"
        }
      ]
    },
    {
      name: "フロントエンド",
      skills: [
          {
            name: "HTML, CSS, JavaScript",
            year_including_hobby: 1.5,
            year_including_intern: 1,
            product: "Webサイト制作"
          },
          {
            name: "TypeScript",
            year_including_hobby: 0.1,
            year_including_intern: 0,
            product: "Webサイト制作"
          },
          {
            name: "React",
            year_including_hobby: 0.1,
            year_including_intern: 0,
            product: "Webサイト制作"
          },
          {
            name: "Gatsby",
            year_including_hobby: 0.1,
            year_including_intern: 0,
            product: "Webサイト制作"
          },
      ]
    },
    {
      name: "データベース",
      skills: [
        {
          name: "MySQL",
          year_including_hobby: 0.5,
          year_including_intern: 0.5,
          product: "業務上の調査"
        },
        {
          name: "PostgreSQL",
          year_including_hobby: 0.5,
          year_including_intern: 0.5,
          product: "Webアプリ"
        }    
      ]
    },
    {
      name: "インフラ",
      skills: [
        {
          name: "Amazon Web Services",
          year_including_hobby: 1,
          year_including_intern: 0,
          product: "Alexa Skills (Lambda), LINE BOT (Lambda), バッチ処理 (Lambda, ECS)"
        }
      ]
    },
    {
      name: "その他",
      skills: [
        {
          name: "Git",
          year_including_hobby: 1.5,
          year_including_intern: 1.5,
          product: "個人開発"
        },
        {
          name: "Docker",
          year_including_hobby: 1,
          year_including_intern: 0.5,
          product: "開発環境構築, LambdaやECS上の処理"
        }
      ]
    }
  ]
  return (
    <article className="skills">  
      {
        skillGroups.map((skillgroup) => {
        return (
          <>
            <h2>{skillgroup.name}</h2>
            <table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>

              <thead>
                <tr className="header">
                  <th scope="col"></th>
                  <th scope="col">経験年数<br /><small>個人開発</small></th>
                  <th scope="col">経験年数<br /><small>インターン<br />実務</small></th>
                  <th scope="col">用途</th>
                </tr>
              </thead>

              <tbody>
                {
                  skillgroup.skills.map((skill, index) => {
                    return (
                      <tr>
                        <th scope="row" className="skill-name">{skill.name}</th>
                        <td>{skill.year_including_hobby}</td>
                        <td>{skill.year_including_intern}</td>
                        <td>{skill.product}</td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
          </>
        )
      })
    }
    </article>
  )
}

export default Skills
