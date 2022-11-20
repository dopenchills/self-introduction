import * as React from 'react'
import { type Dispatch } from 'react'

type action = {
  type: string,
  payload: undefined
}

type preferenceState = {
  isLightMode: boolean
}

const initialPreferenceState = {
  isLightMode: true
}

const initialContextValue = {
  ...initialPreferenceState,
  dispatch: (() => {}) as Dispatch<action>
}

export const PreferenceContext = React.createContext(initialContextValue)

const Preferences = (props: {children: JSX.Element}): JSX.Element => {
  const [state, dispatch] = React.useReducer(
    // reducer
    (state: preferenceState, action: action): preferenceState => {
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
        default:
          return state
      }
    },
    initialPreferenceState
    )

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

export default Preferences
