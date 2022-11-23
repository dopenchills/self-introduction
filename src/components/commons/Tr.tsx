import * as React from 'react'
import { PreferenceContext } from '../contexts/Preference'

const Tr = (props: {children: JSX.Element | JSX.Element[], className?: string}): JSX.Element => {
  return (
    <tr className={`${props.className ? props.className : ""}`}>{props.children}</tr>
  )
}

export default Tr
