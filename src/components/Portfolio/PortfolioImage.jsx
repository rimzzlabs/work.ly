import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { memo, useEffect } from 'react'

const PlatformImage = ({ src, className, alt }) => {
  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  })

  const controls = useAnimation()
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  useEffect(() => {
    if (inView) {
      entry.target.setAttribute('src', src)
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.img
      variants={variants}
      initial='hidden'
      animate={controls}
      ref={ref}
      src={'https://ik.imagekit.io/mlnzyx/workly/placeholder_rnL-LjANV.svg?updatedAt=1635908695765'}
      alt={alt}
      className={className}
    />
  )
}

export default memo(PlatformImage)
