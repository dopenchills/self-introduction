import * as React from "react"
import MenuList from "./MenuList"
import ContentsContainer from "./ContentsContainer"
import './LowerContainer.scss'

const LowerContainer = (): JSX.Element => {

  return (
    <div id="lower-container">
      <ContentsContainer className="flex-item-main" />
      <MenuList className="flex-item-menu" />
    </div>
  )
}

export default LowerContainer
