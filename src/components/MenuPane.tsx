import * as React from 'react'
import MenuList from './MenuList'
import './MenuPane.scss'
import { MenuContext } from './contexts/Menu'

const MenuPane = (props: {className?: string}): JSX.Element => {
  const { showMenuPane, dispatch } = React.useContext(MenuContext)
  if (!showMenuPane) {
    return <></>
  }

  const onClickTransparent = () => {
    dispatch({type: 'hideMenuPane', payload: ""})
  }

  return (
    <div className={`menu-pane ${props.className ? props.className : ""}`}>
      <div className='menu-pane-transparent' onClick={onClickTransparent}></div>
      <MenuList className='menu'/>
    </div>
  )
}

export default MenuPane
