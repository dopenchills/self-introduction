import * as React from "react"
import { PreferenceContext } from "./Preferences"
import './MenuList.scss'

const MenuOption = (
  props: {
    className?: string,
    name?: string,
    value: string,
    label?: string,
    checked?: boolean,
    onHoverStart: (value: string) => void,
    onHoverEnd: () => void
  }): JSX.Element => {
  const { isLightMode } = React.useContext(PreferenceContext)
  const name                  = props.name   || "menu"
  const label                 = props.label  || props.value
  const id                    = `${name}-${props.value}`

  const onMouseEnter = () => {
    props.onHoverStart(props.value)
  }
  const onMouseLeave = () => {
    props.onHoverEnd()
  }
  return (
    <div className={`menu-option ${props.className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <input type="radio" name={name} value={props.value} id={id} checked={props.checked} readOnly={true} />
      <label htmlFor={id} className={`${isLightMode ? "" : "dark-mode"}`}>{label}</label>
    </div>
  )
}

const MenuList = (
  props: {
    className?: string,
    value?: string,
    onMenuListChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onMenuOptionHovered: (optionValue: string) => void
  }): JSX.Element => {
  const checkedValue = props.value || "home"
  const menuOptionValues = [
    "home",
    "skills",
    "career",
    "portfolio",
  ]

  const onHoverStart = (value: string): void => {
    props.onMenuOptionHovered(value)
  }
  const onHoverEnd = (): void => {
    props.onMenuOptionHovered("")
  }
  
  const menuOptions = menuOptionValues.map(value => {
    if (value === checkedValue) {
      return <MenuOption key={value} className="flex-item" name="menu" value={value} label={value.toUpperCase()} checked={true} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} />
    }
    return <MenuOption key={value} className="flex-item" name="menu" value={value} label={value.toUpperCase()} checked={false}  onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} />

  })

  return (
    <div className={`menu-list ${props.className}`} onChange={props.onMenuListChange}>
      {menuOptions}
    </div>
  )
}

export default MenuList
