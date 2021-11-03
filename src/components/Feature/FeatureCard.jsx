import { motion, useAnimation } from 'framer-motion'
import { lazy, memo, Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Cog = lazy(() => import('@/svg/Cog'))
const Rocket = lazy(() => import('@/svg/Rocket'))
const Search = lazy(() => import('@/svg/Search'))

const FeatureCard = ({ title, para }) => {
  const rocket = 'Work fast, done fast'
  const search = 'Work out the details'
  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: title === rocket ? 0 : title === search ? 0.15 : 0.3,
        type: 'spring',
        stiffness: 220,
        damping: 20,
      },
    },
  }

  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={controls}
      initial='hidden'
      className={`max-w-[404px] p-6 md:p-8 rounded-xl bg-[#0A0F16]`}>
      <div className={`flex items-center w-full h-12`}>
        <div
          className={`flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full  ${
            title === rocket ? 'bg-[#1F1F33]' : title === search ? 'bg-[#162523]' : 'bg-[#2E331F]'
          }`}>
          <Suspense fallback={null}>{title === rocket ? <Rocket /> : title === search ? <Search /> : <Cog />}</Suspense>
        </div>
      </div>

      <div className={`w-full mt-8`}>
        <h4 className={`font-semibold text-lg lg:text-2xl mb-4 text-[#EEEEEE]`}>{title}</h4>
        <p className={`text-sm sm:text-base text-[#888888] mr-10`}>{para}</p>
      </div>
    </motion.div>
  )
}

export default memo(FeatureCard)
