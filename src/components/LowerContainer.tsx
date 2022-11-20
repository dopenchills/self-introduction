import * as React from "react"
import MenuList from "./MenuList"
import ContentsContainer from "./ContentsContainer"


const LowerContainer = (): JSX.Element => {
  const [menuOptionValue, setMenuOptionValue] = React.useState("home")

  const onMenuListChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMenuOptionValue(event.target.value)
  }

  return (
    <div id="lower-container">
      <ContentsContainer className="flex-item-main" menuOptionValue={menuOptionValue} />
      <MenuList className="flex-item-menu" value={menuOptionValue} onMenuListChange={onMenuListChange}  />
    </div>
  )
}

export default LowerContainer
