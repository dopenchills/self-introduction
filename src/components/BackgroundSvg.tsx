import * as React from "react"
import Background from '-!svg-react-loader?name=Background!../assets/Background.svg'


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
    <Background
      className={`background-svg ${props.className}`}
      width={windowSize.width}
      height={svgRenderHeight}
      style={{top: verticalOffset}}
    />
  )
}

export default BackgroundSvg
