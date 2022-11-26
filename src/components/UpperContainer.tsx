import * as React from "react"

import MyConciseIntroduction from "./MyConciseIntroduction"
import PreferenceIconList from "./PreferenceIconList"

import "./UpperContainer.scss"

const UpperContainer = (): JSX.Element => {
  return (
    <header id="upper-container">
      <MyConciseIntroduction className="flex-item" />
      <PreferenceIconList className="flex-item" />
    </header>
  )
}

export default UpperContainer
