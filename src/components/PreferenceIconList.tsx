import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const PreferenceIconList = (props: {className?: string}): JSX.Element => {
  return (
    <ul className={`preference-icon-list ${props.className}`}>
      <li className="preference-icon">icon</li>
      <li className="preference-icon">icon</li>
    </ul>
  )
}

export default PreferenceIconList
