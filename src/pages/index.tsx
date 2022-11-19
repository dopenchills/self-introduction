import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.scss'

import MyConciseIntroduction from "../components/MyConciseIntroduction"
import PreferenceIconList from "../components/PreferenceIconList"

const UpperContainer = (): JSX.Element => {
  return (
    <header id="upper-container">
      <MyConciseIntroduction className="flex-item" />
      <PreferenceIconList className="flex-item" />
    </header>
  )
}

const LowerContainer = (): JSX.Element => {
  return (
    <div id="lower-container">
      <main className="flex-item-main">
        content-container
      </main>
      <div className="flex-item-menu">
        menu-list
      </div>
    </div>
  )
}

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
