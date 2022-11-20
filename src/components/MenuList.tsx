import * as React from "react"
import './MenuList.scss'

const MenuOption = (props: {className?: string, name?: string, value: string, label?: string}): JSX.Element => {
  const name  = props.name   || "menu"
  const label = props.label  || props.value
  const id    = `${name}-${props.value}`
  return (
    <div className={`menu-option ${props.className}`}>
      <input type="radio" name={name} value={props.value} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

const MenuList = (props: {className?: string}): JSX.Element => {
  return (
    <div className={`menu-list ${props.className}`}>
      <MenuOption className="flex-item" name="menu" value="home" label="HOME" />
      <MenuOption className="flex-item" name="menu" value="skills" label="SKILLS" />
      <MenuOption className="flex-item" name="menu" value="career" label="CAREER" />
      <MenuOption className="flex-item" name="menu" value="portfolio" label="PORTFOLIO" />
      <MenuOption className="flex-item" name="menu" value="about" label="ABOUT" />
    </div>
  )
}

export default MenuList
