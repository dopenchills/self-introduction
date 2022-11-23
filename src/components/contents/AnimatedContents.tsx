import * as React from "react"
import { motion } from "framer-motion"
import { RegularAfterLoadProps } from "../../constants/FramerMotion"

const AnimatedContents = (props: {children: JSX.Element}): JSX.Element => {
  return (
    <motion.div {...RegularAfterLoadProps} >
      {props.children}
    </motion.div>
  )
}

export default AnimatedContents
