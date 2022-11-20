import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.scss'

// components
import LowerContainer from "../components/LowerContainer"
import UpperContainer from "../components/UpperContainer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div id="display">
      <div id="whole-container">
        <UpperContainer />
        <LowerContainer />
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ryo Sakaguchi</title>
