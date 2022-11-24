import * as React from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import TopLevelContext from '../src/components/contexts/TopLevel'
import PreferencesContextProvider, { PreferenceContext } from "../src/components/contexts/Preference"

const AllTheProviders = (props: {children: JSX.Element}): JSX.Element => {
  return (
    <TopLevelContext>
      <PreferencesContextProvider>
        <PreferenceContext.Consumer>
          {() => {
            return props.children
          }}
        </PreferenceContext.Consumer>
      </PreferencesContextProvider>
    </TopLevelContext>
  )
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  render(ui, {wrapper: AllTheProviders, ...options})
}

export * from '@testing-library/react'

export {customRender as render}
