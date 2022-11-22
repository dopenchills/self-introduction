import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.scss'

// components
import LowerContainer from "../components/LowerContainer"
import UpperContainer from "../components/UpperContainer"
import PreferencesContextProvider, { PreferenceContext } from "../components/contexts/Preference"
import BackgroundSvg from "../components/BackgroundSvg"
import MenuPane from "../components/MenuPane"
import MenuContextProvider, { MenuContext } from "../components/contexts/Menu"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MenuContextProvider>
      <MenuContext.Consumer>
        {() => {
          return (
            <PreferencesContextProvider>
              <PreferenceContext.Consumer>
                { ({ isLightMode }) => {
                  return (
                    <div id="display" className={`${isLightMode ? "" : "dark-mode"}`}>
                    <div id="whole-container">
                      <UpperContainer />
                      <LowerContainer />
                    </div>
                    <BackgroundSvg className="background" />
                    <MenuPane className="menu-pane-index" />
                  </div>    
                  )
                }}
            </PreferenceContext.Consumer>
          </PreferencesContextProvider>
          )
        }}
      </MenuContext.Consumer>
    </MenuContextProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ryo Sakaguchi</title>
