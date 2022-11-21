import * as React from "react"
import MenuList from "./MenuList"
import ContentsContainer from "./ContentsContainer"


const LowerContainer = (): JSX.Element => {
  const [menuOptionValue, setMenuOptionValue] = React.useState("home")
  const [hoveredOptionValue, setHoveredOptionValue] = React.useState("")

  const onMenuListChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMenuOptionValue(event.target.value)
  }

  const onMenuOptionHovered = (optionValue: string): void => {
    setHoveredOptionValue(optionValue)
  }

  const renderedOptionValue = hoveredOptionValue === "" ? menuOptionValue : hoveredOptionValue

  return (
    <div id="lower-container">
      <ContentsContainer className="flex-item-main" menuOptionValue={renderedOptionValue} />
      <MenuList className="flex-item-menu" value={menuOptionValue} onMenuListChange={onMenuListChange} onMenuOptionHovered={onMenuOptionHovered} />
    </div>
  )
}

export default LowerContainer
