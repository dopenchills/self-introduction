import * as React from "react"
import Home from "./contents/Home"
import About from "./contents/About"

const ContentsContainer = (props: {className?: string}): JSX.Element => {
  return (
    <main className={`contents-container ${props.className}`}>
      <Home />
      <About />
    </main>
  )
}

export default ContentsContainer
