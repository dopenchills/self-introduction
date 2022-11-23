import * as React from "react"
import MenuContextProvider, {MenuContext} from "./Menu"

const TopLevelContext = (props: {children: JSX.Element}): JSX.Element => {
  return (
    <MenuContextProvider>
      <MenuContext.Consumer>
        {() => {
          return props.children
        }}
      </MenuContext.Consumer>
    </MenuContextProvider>
  )
}

export default TopLevelContext
