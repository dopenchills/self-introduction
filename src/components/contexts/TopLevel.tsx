import * as React from "react"
import { motion } from 'framer-motion'
import MenuContextProvider, { MenuContext } from "./Menu"
import { RegularAfterLoadProps } from "../../constants/FramerMotion"


const TopLevelContext = (props: {children: JSX.Element}): JSX.Element => {
  return (
    <MenuContextProvider>
      <MenuContext.Consumer>
        {() => {
          return (
              <motion.div
                {...RegularAfterLoadProps}
              >
                {props.children}
              </motion.div>
            )
        }}
      </MenuContext.Consumer>
    </MenuContextProvider>
  )
}

export default TopLevelContext
