import { lazy, memo, Suspense, useContext } from 'react'
import { motion } from 'framer-motion'
import { Konteks } from '@/context/'
import Layout from '@/layouts/'

const FeatureCard = lazy(() => import('./FeatureCard'))

const Feature = () => {
  const { featureLists } = useContext(Konteks)

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  }

  return (
    <section id='service' className={`relative`}>
      <svg
        className={`absolute right-[-8%] bottom-[-25%] scale-90 sm:scale-100 lg:scale-125 z-[-1]`}
        width={560}
        height={560}
        viewBox='0 0 560 560'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='280' cy='280' r='279' stroke='url(#paint0_linear_13:3)' strokeWidth='2' />
        <defs>
          <linearGradient id='paint0_linear_13:3' x1='0' y1='0' x2='560' y2='560' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#36745D' />
            <stop offset='1' stopColor='#155367' />
          </linearGradient>
        </defs>
      </svg>
      <Layout className={`relative flex items-center justify-center w-full min-h-[90vh]`}>
        <div className={`w-full`}>
          <h3 className={`text-center text-2xl lg:text-4xl font-semibold mb-12 text-[#EEEEEE]`}>
            How can we help your business
          </h3>

          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            className={`flex flex-col lg:flex-row items-center lg:items-stretch justify-center space-y-4 lg:space-y-0 lg:space-x-10`}>
            <Suspense fallback={null}>
              {featureLists.map((data, i) => (
                <FeatureCard {...data} key={i} />
              ))}
            </Suspense>
          </motion.div>
        </div>
      </Layout>
    </section>
  )
}

export default memo(Feature)
