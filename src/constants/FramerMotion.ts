import { HTMLMotionProps } from 'framer-motion'

export const BouncyIconProps: HTMLMotionProps<'div'> = {
  whileTap: { scale: 0.7, opacity: 0 },
  transition: {
    type: "tween",
    duration: 0.2
  },
}

export const RegularAfterLoadProps: HTMLMotionProps<'div'> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}
