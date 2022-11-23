import { HTMLMotionProps } from 'framer-motion'

export const BouncyIconProps: HTMLMotionProps<'div'> = {
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
}
