import * as React from "react"
import Home from "./contents/Home"
import About from "./contents/About"

const ContentsContainer = (props: {className?: string, menuOptionValue?: string}): JSX.Element => {
  const menuOptionValue = props.menuOptionValue || "home"
  const contentsMap = new Map<string, JSX.Element>([
    ["home", <Home />],
    ["about", <About />],
  ])

  return (
    <main className={`contents-container ${props.className}`}>
      {contentsMap.get(menuOptionValue)}
    </main>
  )
}

export default ContentsContainer
