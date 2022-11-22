import * as React from "react"
import Home from "./contents/Home"
import Skills from "./contents/Skills"
import Career from "./contents/Career"
import Portfolio from "./contents/Portfolio"
import "./ContentsContainer.scss"


const ContentsContainer = (props: {className?: string, menuOptionValue?: string}): JSX.Element => {
  const menuOptionValue = props.menuOptionValue || "home"
  const contentsMap = new Map<string, JSX.Element>([
    ["home", <Home />],
    ["skills", <Skills />],
    ["career", <Career />],
    ["portfolio", <Portfolio />],
  ])

  return (
    <main className={`contents-container ${props.className}`}>
      {contentsMap.get(menuOptionValue)}
    </main>
  )
}

export default ContentsContainer
