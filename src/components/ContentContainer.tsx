import * as React from "react"
import Home from "./contents/Home"

const ContentContainer = (props: {className?: string}): JSX.Element => {
  return (
    <main className={`content-container ${props.className}`}>
      <Home />
    </main>
  )
}

export default ContentContainer
