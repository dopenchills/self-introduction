import * as React from "react"

// icons
import { FaRegMoon } from "@react-icons/all-files/fa/FaRegMoon";
import { FaRegSun } from "@react-icons/all-files/fa/FaRegSun";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { GiHamburgerMenu } from'@react-icons/all-files/gi/GiHamburgerMenu'

// context
import { PreferenceContext } from "./contexts/Preference";
import { MenuContext } from "./contexts/Menu";

import './PreferenceIconList.scss'


const LightOrDarkModeIcon = (props: {className?: string}): JSX.Element => {
  const { isLightMode, dispatch } = React.useContext(PreferenceContext)

  const onClick = (event: React.MouseEvent): void => {
    if (isLightMode) {
      dispatch({type: "toDarkMode",  payload: undefined})
    } else {
      dispatch({type: "toLightMode", payload: undefined})
    }
  }

  return (
    <li className="preference-icon-item" onClick={onClick}>
      {isLightMode ? <FaRegMoon className="preference-icon" /> : <FaRegSun className="preference-icon" />}
    </li>
  )
}

const HamburgerMenuIcon = (): JSX.Element => {
  const { showMenuPane, dispatch } = React.useContext(MenuContext)
  const onClick = () => {
    if(showMenuPane){
      dispatch({type: "hideMenuPane", payload: ""})
    } else {
      dispatch({type: "showMenuPane", payload: ""})
    }
  }

  return (
    <li className="preference-icon-item hamburger-menu-icon" onClick={onClick}>
      <GiHamburgerMenu className="preference-icon" />
    </li>
  )
}

const PreferenceIconList = (props: {className?: string}): JSX.Element => {
  return (
    <ul className={`preference-icon-list ${props.className}`}>
      <LightOrDarkModeIcon />
      {/* <li className="preference-icon-item"><FaGlobe className="preference-icon" /></li> */}
      <HamburgerMenuIcon />
    </ul>
  )
}

export default PreferenceIconList
