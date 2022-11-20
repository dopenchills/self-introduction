import * as React from "react"
import { CSSTransition } from "react-transition-group"
import { useRef } from 'react';

// svg
import Background from '-!svg-react-loader?name=Background!../assets/Background.svg'
import CloudBig from '-!svg-react-loader?name=Background!../assets/CloudBig.svg'
import CloudMedium from '-!svg-react-loader?name=Background!../assets/CloudMedium.svg'
import CloudSmall from '-!svg-react-loader?name=Background!../assets/CloudSmall.svg'

// scss
import './BackgroundSvg.scss'


const BackgroundSvg = (props: {className?: string}): JSX.Element => {
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

  // for animation
  const nodeRef = useRef(null)
  const [inProp, setInProp] = React.useState(false)
  React.useEffect(() => {
    setInProp(true)
  }, [])
  return (
    <div className={`background-div ${props.className}`}>
      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={{appear: 0, enter: 10000, exit: 0}} classNames="cloud"
        onEntered={() => {setTimeout(() => {setInProp(false)}, 10000)}}
        onExited={() => {setTimeout(() => {setInProp(true), 10})}}
        unmountOnExit
      >
        <div className="cloud cloud-big" ref={nodeRef} style={{top: 50}}>
          <CloudBig width={300} height={100} />
        </div>
      </CSSTransition>
      <CloudMedium className="cloud cloud-medium" width={200} height={100} style={{top: 100}}  />
      <CloudSmall className="cloud cloud-small" width={100} height={100} style={{top: 200}}  />
      <Background
        className="background-svg"
        width={windowSize.width}
        height={svgRenderHeight}
        style={{top: verticalOffset}}
      />
    </div>
  )
}

export default BackgroundSvg
