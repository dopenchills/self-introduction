import * as React from "react"
import { FaRegMoon } from "@react-icons/all-files/fa/FaRegMoon";
import { FaRegSun } from "@react-icons/all-files/fa/FaRegSun";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import './PreferenceIconList.scss'
import { PreferenceContext } from "./Preferences";


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

const PreferenceIconList = (props: {className?: string}): JSX.Element => {
  return (
    <ul className={`preference-icon-list ${props.className}`}>
      <LightOrDarkModeIcon />
      {/* <li className="preference-icon-item"><FaGlobe className="preference-icon" /></li> */}
    </ul>
  )
}

export default PreferenceIconList
