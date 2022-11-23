import * as React from "react"
import { CSSTransition } from "react-transition-group"
import { useRef } from 'react';

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
  const animatedCloudItems = [
    {
      id: "cloud-big",
      className: "cloud cloud-big",
      style: {top: 100},
      element: isLightMode ? <CloudBig width={300} height={100} /> : <CloudBigDark width={300} height={100} />,
      nodeRef: useRef(null),
      inState: React.useState(false),
      timeout: {enter: 240000, exit: 10}
    },
    {
      id: "cloud-medium",
      className: "cloud cloud-medium",
      style: {top: 100},
      element: isLightMode ? <CloudMedium width={200} height={100} /> : <CloudMediumDark width={200} height={100} />,
      nodeRef: useRef(null),
      inState: React.useState(false),
      timeout: {enter: 480000, exit: 10}
    },
    {
      id: "cloud-small",
      className: "cloud cloud-small",
      style: {top: 150},
      element: isLightMode ? <CloudSmall width={50} height={50} /> : <CloudSmallDark width={50} height={50} />,
      nodeRef: useRef(null),
      inState: React.useState(false),
      timeout: {enter: 960000, exit: 10}
    }
  ]

  React.useEffect(() => {
    animatedCloudItems.map(item => {
      const setIn = item.inState[1]
      setIn(true)
    })
  }, [])

  return (
    <>
      {
        animatedCloudItems.map(({id, className, style, element, nodeRef, inState, timeout}) => {
          const isIn  = inState[0]
          const setIn = inState[1]
          return (
            <CSSTransition
              key={id}
              nodeRef={nodeRef}
              timeout={{enter: timeout.enter, exit: timeout.exit}}
              classNames="cloud"
              onEntered={() => {setTimeout(() => {setIn(false)}, 100)}}
              onExited={()  => {setTimeout(() => {setIn(true)},  100)}}
              in={isIn}
              mountOnEnter
              unmountOnExit
            >
              <div className={className} style={style} ref={nodeRef}>
                {element}
              </div>
            </CSSTransition>
          )
        })
      }
    </>
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
  return (
    <div className={`background-div ${props.className}`}>
      <Clouds />
      <ObjectsOnGround />
    </div>
  )
}

export default BackgroundSvg
