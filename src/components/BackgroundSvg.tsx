import * as React from "react"
import Background from '-!svg-react-loader?name=Background!../assets/Background.svg'
import CloudBig from '-!svg-react-loader?name=Background!../assets/CloudBig.svg'
import CloudMedium from '-!svg-react-loader?name=Background!../assets/CloudMedium.svg'
import CloudSmall from '-!svg-react-loader?name=Background!../assets/CloudSmall.svg'
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

  return (
    <div className={`background-div ${props.className}`}>
      <CloudBig className="cloud cloud-big" width={300} height={100} style={{top: Math.random() / 2 * windowSize.height}} />
      <CloudMedium className="cloud cloud-medium" width={200} height={100} style={{top: Math.random() / 2 * windowSize.height}}  />
      <CloudSmall className="cloud cloud-small" width={100} height={100} style={{top: Math.random() / 2 * windowSize.height}}  />
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
