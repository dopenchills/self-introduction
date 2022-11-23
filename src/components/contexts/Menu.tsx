import * as React from 'react'
import { type Dispatch } from 'react'

type action = {
  type: string,
  payload: string
}

type menuState = {
  selected: string,
  hovered: string
}

const initialMenuState = {
  selected: "home",
  hovered: ""
}

const initialContextValue = {
  ...initialMenuState,
  dispatch: (() => {}) as Dispatch<action>
}

const menuReducer = (state: menuState, action: action): menuState => {
  switch (action.type) {
    case 'hovered':
      return {
        ...state,
        hovered: action.payload
      }
    case 'selected':
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state  
  }
}

export const MenuContext = React.createContext(initialContextValue)

const MenuContextProvider = (props: {children: JSX.Element}): JSX.Element => {
  const [state, dispatch] = React.useReducer(menuReducer, initialMenuState)

  const contextValue = {
    ...state,
    dispatch: dispatch
  }

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  )

}

export default MenuContextProvider
