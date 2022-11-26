import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./Home.scss"

const Home = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query HomeArticleQuery {
      markdownRemark(frontmatter: {key: {eq: "Home"}}) {
        html
        tableOfContents(
          maxDepth: 3
        )
      }
    }
  `)
  const { html } = data.markdownRemark
  return (
    <article className="home">
      <StaticImage
        src="../../images/profile-image.jpeg"
        alt="my profile image"
        quality={100}
        width={300}
        height={300}
        className="profile-image"
        placeholder="blurred"
      />
      <div dangerouslySetInnerHTML={{ __html: html}}></div>
    </article>
  )
}

export default Home
