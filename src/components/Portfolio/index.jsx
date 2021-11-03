import { memo, lazy, Suspense } from 'react'
import Layout from '@/layouts/'

const PortfolioGallery = lazy(() => import('./PortfolioGallery'))

const Portfolio = () => {
  return (
    <div id='portfolio' className={`relative`}>
      <svg
        className={`absolute left-[-8%] bottom-[-25%] scale-50 sm:scale-100 lg:scale-125 z-[-1]`}
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
      <Layout className={`w-full min-h-screen py-16`}>
        <div className={`flex flex-col lg:flex-row justify-between w-full`}>
          <div className={`w-4/5`}>
            <h3 className={`text-2xl lg:text-4xl font-semibold mb-8 text-[#EEEEEE]`}>Outputs from Our Platform</h3>
            <p className={`text-base lg:text-2xl text-[#888888]`}>
              Our platform specialize on helping our clients work process and communication.
              <br /> Below are the products produced using our platform.
            </p>
          </div>
          <div>
            <a href='#' className={`text-lg lg:text-2xl font-semibold mt-6 lg:mt-0 text-[#EEEEEE]`}>
              See more
            </a>
          </div>
        </div>
        <div className={`w-full md:p-12`}>
          <Suspense fallback={null}>
            <PortfolioGallery />
          </Suspense>
        </div>
      </Layout>
    </div>
  )
}

export default memo(Portfolio)
