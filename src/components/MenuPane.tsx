import * as React from 'react'
import MenuList from './MenuList'
import { MenuContext } from './contexts/Menu'
import { motion, AnimatePresence } from 'framer-motion'
import { GoX } from'@react-icons/all-files/go/GoX'
import './MenuPane.scss'
import { BouncyIconProps } from '../constants/FramerMotion'


const MenuPane = (props: {className?: string}): JSX.Element => {
  const { showMenuPane, dispatch } = React.useContext(MenuContext)

  const onClickTransparent = () => {
    dispatch({type: 'hideMenuPane', payload: ""})
  }

  return (
    <AnimatePresence>
    {
      showMenuPane && 
        <motion.div
          key="menupane"
          className={`menu-pane ${props.className ? props.className : ""}`}
          initial={{ translateX: "10%", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: "10%", opacity: 0 }}
          transition={{
            type: "linear",
            duration: 0.5
          }}
        >
        <div className='menu-pane-transparent' onClick={onClickTransparent}></div>
        <div className='menu'>
          <motion.div
            key="gox"
            {...BouncyIconProps}
            className="x-menu-pane"
          >
            <GoX className="preference-icon" onClick={() => dispatch({type: "hideMenuPane", payload: ""})} />
          </motion.div>
          <MenuList />
        </div>
      </motion.div>
    }
    </AnimatePresence>
  )
}

export default MenuPane
