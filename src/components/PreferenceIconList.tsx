import * as React from "react"
import { FaRegMoon } from "@react-icons/all-files/fa/FaRegMoon";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

const PreferenceIconList = (props: {className?: string}): JSX.Element => {
  return (
    <ul className={`preference-icon-list ${props.className}`}>
      <li className="preference-icon"><FaRegMoon /></li>
      <li className="preference-icon"><FaGlobe /></li>
    </ul>
  )
}

export default PreferenceIconList
