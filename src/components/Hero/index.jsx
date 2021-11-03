import { lazy, Suspense, memo } from 'react'

const Header = lazy(() => import('../Header'))
const HeroBody = lazy(() => import('./HeroBody'))
const HeroImage = lazy(() => import('./HeroImage'))

const Hero = () => {
  return (
    <section
      className={`relative flex items-center w-full min-h-screen px-8 lg:pl-20 lg:px-0 bg-gradient-to-br from-[#114E4E] via-black to-black`}>
      <Suspense fallback={null}>
        <Header />
        <HeroBody />
        <HeroImage />
      </Suspense>
    </section>
  )
}

export default memo(Hero)
