import * as React from "react"
import { MenuContext } from "./contexts/Menu"
import { motion } from "framer-motion"

// contents
import Home from "./contents/Home"
import Skills from "./contents/Skills"
import Career from "./contents/Career"
import Portfolio from "./contents/Portfolio"

// constants
import { RegularAfterLoadProps } from "../constants/FramerMotion"

import "./ContentsContainer.scss"


const ContentsContainer = (props: {className?: string}): JSX.Element => {
  const { selected, hovered } = React.useContext(MenuContext)
  const contentsMap = new Map<string, JSX.Element>([
    ["home", <Home />],
    ["skills", <Skills />],
    ["career", <Career />],
    ["portfolio", <Portfolio />],
  ])

  const renderedValue = contentsMap.has(hovered) ? hovered : selected

  return (
    <main className={`contents-container ${props.className}`}>
      <div data-rendered={
        /* used to re-render to trigger animation */
        renderedValue
      }>
        <motion.div {...RegularAfterLoadProps}>
          {contentsMap.get(renderedValue)}
        </motion.div>
      </div>
    </main>
  )
}

export default ContentsContainer
