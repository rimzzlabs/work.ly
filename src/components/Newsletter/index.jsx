import { lazy, memo, Suspense } from 'react'
import Layout from '@/layouts/'

const NewsletterInput = lazy(() => import('./NewsletterInput'))

const Newsletter = () => {
  return (
    <Layout
      className={`flex items-center justify-center w-full h-[50vh] bg-gradient-to-r from-[#00FFD1] via-[#27D7D7] to-[#3FE8FF]`}>
      <div>
        <h3 className={`text-center text-2xl lg:text-4xl font-semibold mb-3 lg:mb-4 text-[#000909]`}>
          Subscribe to our newsletter
        </h3>
        <p className={`text-center text-base lg:text-xl mb-[5vh] lg:mb-[10vh] text-[#000909]`}>
          Get notification about tips, new feature and exclusive promo just for you.
        </p>
        <div className={`flex items-center justify-center w-full`}>
          <Suspense fallback={null}>
            <NewsletterInput />
          </Suspense>
        </div>
      </div>
    </Layout>
  )
}

export default memo(Newsletter)
