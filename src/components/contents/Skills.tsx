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
      name: "言語",
      skills: [
          {
            name: "Python",
            year_including_hobby: 5,
            year_including_intern: 1,
            product: "Webアプリ, 機械学習, スクレイピング"
          },
          {
            name: "Ruby",
            year_including_hobby: 0.5,
            year_including_intern: 0.5,
            product: "業務上の調査"
          },
          {
            name: "JavaScript",
            year_including_hobby: 1,
            year_including_intern: 1,
            product: "Webアプリ, Alexa Skills"
          },
          {
            name: "TypeScript",
            year_including_hobby: 0.1,
            year_including_intern: 0,
            product: "本Webサイト"
          },
      ]
    },
    {
      name: "FW",
      skills: [
        {
          name: "Django",
          year_including_hobby: 0.5,
          year_including_intern: 0.5,
          product: "Webアプリ"
        },
        {
          name: "Ruby on Rails",
          year_including_hobby: 0.5,
          year_including_intern: 0.5,
          product: "業務上の調査"
        }    
      ]
    },
    {
      name: "DB",
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
          name: "AWS lambda",
          year_including_hobby: 1,
          year_including_intern: 0,
          product: "Alexa Skills, LINE BOT, バッチ処理"
        }
      ]
    },
    {
      name: "ツール",
      skills: [
        {
          name: "Git",
          year_including_hobby: 1.5,
          year_including_intern: 1.5,
          product: "個人開発"
        }    
      ]
    }
  ]
  return (
    <article>  
      {
        skillGroups.map((skillgroup) => {
        return (
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
                      {
                        index == 0 ? 
                          <th scope="rowgroup"
                            rowSpan={skillgroup.skills.length}
                            className="skill-kind"
                            >
                              {skillgroup.name}
                          </th> : 
                          null
                      }
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
        )
      })
    }
    </article>
  )
}

export default Skills
