import * as React from 'react'
import { PreferenceContext } from '../contexts/Preference'

const Tr = (props: {children: JSX.Element | JSX.Element[], className?: string}): JSX.Element => {
  const { isLightMode } = React.useContext(PreferenceContext)
  return (
    <tr className={`${props.className ? props.className : ""} ${isLightMode ? "" : "dark-mode"}`}>{props.children}</tr>
  )
}

export default Tr
