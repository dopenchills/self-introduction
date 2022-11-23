import * as React from "react"
import { PreferenceContext } from "./contexts/Preference"
import { MenuContext } from "./contexts/Menu"
import './MenuList.scss'

const MenuOption = (
  props: {
    className?: string,
    name?: string,
    value: string,
    label?: string,
    checked?: boolean,
  }): JSX.Element => {
  const { dispatch } = React.useContext(MenuContext)

  const name                  = props.name   || "menu"
  const label                 = props.label  || props.value
  const id                    = `${name}-${props.value}`

  const onMouseEnter = () => {
    dispatch({type: "hovered", payload: props.value})
  }
  const onMouseLeave = () => {
    dispatch({type: "hovered", payload: ""})
  }
  return (
    <div className={`menu-option ${props.className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <input type="radio" name={name} value={props.value} id={id} checked={props.checked} readOnly={true} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

const MenuList = (
  props: {
    className?: string,
    value?: string,
  }): JSX.Element => {
    const { selected, dispatch } = React.useContext(MenuContext)
  const menuOptionValues = [
    "home",
    "skills",
    "career",
    "portfolio",
  ]

  const onMenuListChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: "selected", payload: event.target.value})
  }

  const menuOptions = menuOptionValues.map(value => {
    if (value === selected) {
      return <MenuOption key={value} className="flex-item" name="menu" value={value} label={value.toUpperCase()} checked={true} />
    }
    return <MenuOption key={value} className="flex-item" name="menu" value={value} label={value.toUpperCase()} checked={false} />
  })

  return (
    <div className={`menu-list ${props.className}`} onChange={onMenuListChange}>
      {menuOptions}
    </div>
  )
}

export default MenuList
