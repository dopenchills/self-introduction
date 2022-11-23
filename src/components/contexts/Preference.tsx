import * as React from 'react'
import { type Dispatch } from 'react'

type action = {
  type: string,
  payload: undefined
}

type preferenceState = {
  isLightMode: boolean,
  showMenuPane: boolean,
}

const initialPreferenceState = {
  isLightMode: true,
  showMenuPane: false
}

const initialContextValue = {
  ...initialPreferenceState,
  dispatch: (() => {}) as Dispatch<action>
}

const preferenceReducer = (state: preferenceState, action: action): preferenceState => {
  switch (action.type) {
    case 'toDarkMode':
      return {
        ...state,
        isLightMode: false
      }
    case 'toLightMode':
      return {
        ...state,
        isLightMode: true
      }
    case 'showMenuPane':
      return {
        ...state,
        showMenuPane: true
      }
    case 'hideMenuPane':
      console.log("hide")
      return {
        ...state,
        showMenuPane: false
      }
    default:
      return state
  }
}

export const PreferenceContext = React.createContext(initialContextValue)

const PreferencesContextProvider = (props: {children: JSX.Element}): JSX.Element => {
  const [state, dispatch] = React.useReducer(preferenceReducer, initialPreferenceState)

    const contextValue = {
      ...state,
      dispatch: dispatch
    }
  return (
    <PreferenceContext.Provider value={contextValue}>
      {props.children}
    </PreferenceContext.Provider>
  )
}

export default PreferencesContextProvider
