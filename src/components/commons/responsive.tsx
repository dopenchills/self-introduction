import { isMobile } from 'react-device-detect';

type onMouseEnterPropsReturn = {
  onMouseEnter?: () => void
}

export const onMouseEnterProps = (onMouseEnter: () => void): onMouseEnterPropsReturn => {
  if (isMobile) {
    return {}
  }
  return { onMouseEnter: onMouseEnter }
}

type onMouseLeavePropsReturn = {
  onMouseLeave?: () => void
}

export const onMouseLeaveProps = (onMouseLeave: () => void): onMouseLeavePropsReturn => {
  if (isMobile) {
    return {}
  }
  return { onMouseLeave: onMouseLeave }
}

