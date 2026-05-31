import { motion } from 'framer-motion'

/**
 * Scroll-reveal wrapper.
 * direction: 'left' | 'right' | 'up' (default)
 */
export default function Reveal({ children, direction = 'up', delay = 0, className }) {
  const offset = direction === 'left' ? -60 : direction === 'right' ? 60 : 0
  const yOffset = direction === 'up' ? 40 : 0

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
