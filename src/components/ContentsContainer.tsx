import * as React from "react"
import { PreferenceContext } from "./Preferences"
import Home from "./contents/Home"
import Skills from "./contents/Skills"
import Career from "./contents/Career"
import Portfolio from "./contents/Portfolio"
import "./ContentsContainer.scss"


const ContentsContainer = (props: {className?: string, menuOptionValue?: string}): JSX.Element => {
  const { isLightMode } = React.useContext(PreferenceContext)
  const menuOptionValue = props.menuOptionValue || "home"
  const contentsMap = new Map<string, JSX.Element>([
    ["home", <Home />],
    ["skills", <Skills />],
    ["career", <Career />],
    ["portfolio", <Portfolio />],
  ])

  return (
    <main className={`contents-container ${props.className} ${isLightMode ? "" : "dark-mode"}`}>
      {contentsMap.get(menuOptionValue)}
    </main>
  )
}

export default ContentsContainer
