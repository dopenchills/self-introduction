import * as React from "react"
import { motion } from "framer-motion"
import { RegularAfterLoadProps } from "../../constants/FramerMotion"
import './Contents.scss'

const Contents = (props: {children: JSX.Element}): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current != null){
      ref.current.scrollIntoView()
    }
  })

  return (
    <motion.div {...RegularAfterLoadProps} ref={ref} >
      {props.children}
    </motion.div>
  )
}

export default Contents
