import * as React from 'react'
import MenuList from './MenuList'
import './MenuPane.scss'
import { PreferenceContext } from './Preferences'

const MenuPane = (props: {className?: string}): JSX.Element => {
  const { dispatch, showMenuPane } = React.useContext(PreferenceContext)
  const onClickTransparent = () => {
    dispatch({type: 'hideMenuPane', payload: undefined})
  }

  return (
    <div className={`menu-pane ${props.className ? props.className : ""} ${showMenuPane ? "" : "hide"}`}>
      <div className='menu-pane-transparent' onClick={onClickTransparent}></div>
      <MenuList className='menu'/>
    </div>
  )
}

export default MenuPane
