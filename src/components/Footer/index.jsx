import { lazy, memo, Suspense } from 'react'

const FooterAddrLinks = lazy(() => import('./FooterAddrLinks'))
const FooterAddrInfo = lazy(() => import('././FooterAddrInfo'))

const Footer = () => {
  return (
    <footer id='about' className='w-full lg:h-[26rem] bg-gradient-to-br from-black via-black to-[#114E4E]'>
      <div className={`flex flex-col lg:flex-row justify-between items-start py-8 lg:py-16 px-4 sm:px-8 md:px-20 h-[80%]`}>
        <Suspense fallback={null}>
          <FooterAddrInfo />
          <FooterAddrLinks />
        </Suspense>
      </div>
      <div className={`flex items-center justify-center py-4 lg:py-0 h-[20%] border-t border-gray-600`}>
        <span className={`text-sm sm:text-base`}>{new Date().getFullYear()} Work.ly | All rights reserved.</span>
      </div>
    </footer>
  )
}

export default memo(Footer)
