import * as React from "react"
import './MenuList.scss'

const MenuOption = (props: {className?: string, name?: string, value: string, label?: string, checked?: boolean}): JSX.Element => {
  const name  = props.name   || "menu"
  const label = props.label  || props.value
  const id    = `${name}-${props.value}`
  return (
    <div className={`menu-option ${props.className}`}>
      <input type="radio" name={name} value={props.value} id={id} checked={props.checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

const MenuList = (props: {className?: string, value?: string, onMenuListChange: (event: React.ChangeEvent<HTMLInputElement>) => void}): JSX.Element => {
  const checkedValue = props.value || "home"
  const menuOptionValues = [
    "home",
    "skills",
    "career",
    "portfolio",
    "about"
  ]
  const menuOptions = menuOptionValues.map(value => {
    if (value === checkedValue) {
      return <MenuOption className="flex-item" name="menu" value={value} label={value.toUpperCase()} checked={true} />
    }
    return <MenuOption className="flex-item" name="menu" value={value} label={value.toUpperCase()} />

  })

  return (
    <div className={`menu-list ${props.className}`} onChange={props.onMenuListChange}>
      {menuOptions}
    </div>
  )
}

export default MenuList
