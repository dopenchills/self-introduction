import * as React from "react"
import './MyConciseIntroduction.scss'

const MyConciseIntroduction = (props: {className?: string}): JSX.Element => {
  return (
    <div className={`my-concise-introduction ${props.className}`}>
      <h1 className="my-full-name">Ryo Sakaguchi</h1>
      <p className="my-title">Web developer</p>
    </div>
  )
}

export default MyConciseIntroduction
