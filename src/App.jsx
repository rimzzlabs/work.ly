import { AnimatePresence } from 'framer-motion'
import { Suspense, lazy, useContext } from 'react'
import { Konteks } from './context'

const Hero = lazy(() => import('@/components/Hero'))
const Feature = lazy(() => import('./components/Feature'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Footer = lazy(() => import('@/components/Footer'))
const Sponsors = lazy(() => import('@/components/Sponsors'))
const Newsletter = lazy(() => import('@/components/Newsletter'))
const Modal = lazy(() => import('@/components/Modal'))

const App = () => {
  const { state, handleClose } = useContext(Konteks)
  return (
    <main>
      <Suspense fallback={null}>
        <Hero />
        <Feature />
        <Portfolio />
        <Sponsors />
        <Newsletter />
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <AnimatePresence exitBeforeEnter>
          {state.isOpen && (
            <div onClick={handleClose} className={`fixed w-screen h-screen left-0 top-0 bg-gray-900/75`}>
              <div className={`flex items-center justify-center w-full h-full`}>
                <Modal />
              </div>
            </div>
          )}
        </AnimatePresence>
      </Suspense>
    </main>
  )
}

export default App
