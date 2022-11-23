import * as React from "react"
import { motion } from "framer-motion"

const AnimatedContents = (props: {children: JSX.Element}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        delay: 0.3,
        duration: 0.3
      }}
    >
      {props.children}
    </motion.div>
  )
}

export default AnimatedContents
