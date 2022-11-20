import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.scss'

// components
import MyConciseIntroduction from "../components/MyConciseIntroduction"
import PreferenceIconList from "../components/PreferenceIconList"
import MenuList from "../components/MenuList"
import ContentsContainer from "../components/ContentsContainer"

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
      <ContentsContainer className="flex-item-main" />
      <MenuList className="flex-item-menu" />
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
