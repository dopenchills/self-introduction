import * as React from "react"
import { FaRegMoon } from "@react-icons/all-files/fa/FaRegMoon";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import './PreferenceIconList.scss'

const PreferenceIconList = (props: {className?: string}): JSX.Element => {
  return (
    <ul className={`preference-icon-list ${props.className}`}>
      <li className="preference-icon-item"><FaRegMoon className="preference-icon" /></li>
      <li className="preference-icon-item"><FaGlobe className="preference-icon" /></li>
    </ul>
  )
}

export default PreferenceIconList
