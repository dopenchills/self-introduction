import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.scss'

// components
import LowerContainer from "../components/LowerContainer"
import UpperContainer from "../components/UpperContainer"
import Preferences, { PreferenceContext } from "../components/Preferences"
import BackgroundSvg from "../components/BackgroundSvg"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Preferences>
      <PreferenceContext.Consumer>
        { ({ isLightMode }) => {
          return (
            <div id="display" className={`${isLightMode ? "" : "dark-mode"}`}>
            <div id="whole-container">
              <UpperContainer />
              <LowerContainer />
            </div>
            <BackgroundSvg className="background" />
          </div>    
          )
        }
        }
      </PreferenceContext.Consumer>
    </Preferences>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ryo Sakaguchi</title>
