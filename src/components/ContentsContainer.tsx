import * as React from "react"
import Home from "./contents/Home"

const ContentsContainer = (props: {className?: string}): JSX.Element => {
  return (
    <main className={`contents-container ${props.className}`}>
      <Home />
    </main>
  )
}

export default ContentsContainer
