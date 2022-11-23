import * as React from "react"
import { PreferenceContext } from "./contexts/Preference"
import Home from "./contents/Home"
import Skills from "./contents/Skills"
import Career from "./contents/Career"
import Portfolio from "./contents/Portfolio"
import "./ContentsContainer.scss"
import { MenuContext } from "./contexts/Menu"


const ContentsContainer = (props: {className?: string}): JSX.Element => {
  const { isLightMode } = React.useContext(PreferenceContext)
  const { selected, hovered } = React.useContext(MenuContext)
  const menuOptionValue = selected || "home"
  const contentsMap = new Map<string, JSX.Element>([
    ["home", <Home />],
    ["skills", <Skills />],
    ["career", <Career />],
    ["portfolio", <Portfolio />],
  ])

  const renderedValue = contentsMap.has(hovered) ? hovered : menuOptionValue

  return (
    <main className={`contents-container ${props.className} ${isLightMode ? "" : "dark-mode"}`}>
      {contentsMap.get(renderedValue)}
    </main>
  )
}

export default ContentsContainer
