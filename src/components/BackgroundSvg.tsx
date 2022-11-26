import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { PreferenceContext } from "./contexts/Preference";

// svg
import Background from '-!svg-react-loader?name=Background!../assets/Background.svg'
import CloudBig from '-!svg-react-loader?name=Background!../assets/CloudBig.svg'
import CloudMedium from '-!svg-react-loader?name=Background!../assets/CloudMedium.svg'
import CloudSmall from '-!svg-react-loader?name=Background!../assets/CloudSmall.svg'

import BackgroundDark from '-!svg-react-loader?name=Background!../assets/BackgroundDark.svg'
import CloudBigDark from '-!svg-react-loader?name=Background!../assets/CloudBigDark.svg'
import CloudMediumDark from '-!svg-react-loader?name=Background!../assets/CloudMediumDark.svg'
import CloudSmallDark from '-!svg-react-loader?name=Background!../assets/CloudSmallDark.svg'

// scss
import './BackgroundSvg.scss'


const Clouds = (): JSX.Element => {
  const { isLightMode } = React.useContext(PreferenceContext)
  const animatedCloudItems: {id: string, className: string, element: JSX.Element}[] = [
    {
      id: "cloud-big",
      className: "cloud cloud-big",
      element: isLightMode ? <CloudBig width={300} height={100} /> : <CloudBigDark width={300} height={100} />,
    },
    {
      id: "cloud-medium",
      className: "cloud cloud-medium",
      element: isLightMode ? <CloudMedium width={200} height={100} /> : <CloudMediumDark width={200} height={100} />,
    },
    {
      id: "cloud-small",
      className: "cloud cloud-small",
      element: isLightMode ? <CloudSmall width={50} height={50} /> : <CloudSmallDark width={50} height={50} />,
    }
  ]

  return (
    <div>
      {
        animatedCloudItems.map(({id, className, element}) => {
          return (
            <div id={id} key={id} className={className}>
              {element}
            </div>
          )
        })
      }
    </div>
  )
}

const ObjectsOnGround = (): JSX.Element => {
  if (typeof window === 'undefined') {
    return (
      <></>
    )
  }
  const { isLightMode } = React.useContext(PreferenceContext)

  const [windowSize, setWindowSize] = React.useState({width: window.innerWidth, height: window.innerHeight})

  const resize = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight})
  }

  // without debouncing below, it gets too heavy and can't update state
  let timeoutId: NodeJS.Timeout
  addEventListener("resize", () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(resize, 100)
  })

  // change these default width when you replace background svg 
  const svgDefaultWidth  = 2540
  const svgDefaultHeight = 1440
  
  const svgRenderHeight  = svgDefaultHeight * (windowSize.width / svgDefaultWidth)
  const verticalOffsetMargin = 5  // in order to hide white area under the svg
  const verticalOffset   = windowSize.height - svgRenderHeight + verticalOffsetMargin

  const commonProps = {
    className: "background-svg",
    width: windowSize.width,
    height: svgRenderHeight,
    style: {top: verticalOffset}
  }

  return (
    <>
    {
      isLightMode ?
        <Background {...commonProps} /> :
        <BackgroundDark {...commonProps} />
     }
    </>
  )
}

const BackgroundSvg = (props: {className?: string}): JSX.Element => {
  const { isLightMode } = React.useContext(PreferenceContext)

  const leaves = Array(3).fill(
    <div className="falling">
      <StaticImage
        src="../images/Leaf.png"
        alt="leaf"
        className="flipping-leaf"
        placeholder="blurred"
      />
    </div>
  )

  return (
    <div className={`background-div ${props.className}`}>
      <Clouds />
      <ObjectsOnGround />
      { 
        isLightMode &&  
          <div className="leaves">
            {leaves}
          </div>        
      }
    </div>
  )
}

export default BackgroundSvg
