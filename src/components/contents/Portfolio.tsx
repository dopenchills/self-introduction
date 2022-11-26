import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Portfolio = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query PortfolioArticleQuery {
      markdownRemark(frontmatter: {key: {eq: "portfolio-self-introduction"}}) {
        frontmatter {
          title
        }
        html
        tableOfContents(
          maxDepth: 3
        )
      }
    }
  `)
  const { title } = data.markdownRemark.frontmatter
  const {html, tableOfContents} = data.markdownRemark
  return (
    <article>
      <h2>{title}</h2>
      <div className="markdown-toc" dangerouslySetInnerHTML={{ __html: tableOfContents}}></div>
      <div dangerouslySetInnerHTML={{ __html: html}}></div>
    </article>
  )
}

export default Portfolio
