import { memo, lazy, Suspense } from 'react'

const PlatformImage = lazy(() => import('./PortfolioImage'))

const PlatformGallery = () => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 md:grid-flow-col items-stretch justify-items-center gap-6 mt-12 lg:mt-24 w-full`}>
      <Suspense fallback={null}>
        <PlatformImage
          src={'https://ik.imagekit.io/mlnzyx/workly/image-1_f0Gg2z9zYVm.png?updatedAt=1635908552807'}
          alt=''
          className={`object-cover md:row-span-2 w-full`}
        />
        <PlatformImage
          src={'https://ik.imagekit.io/mlnzyx/workly/image-2_uaRqS-HQO0S.png?updatedAt=1635908554911'}
          alt=''
          className={`object-cover md:col-span-1`}
        />
        <PlatformImage
          src={'https://ik.imagekit.io/mlnzyx/workly/image-3_MJ9S-hpFE0.png?updatedAt=1635908556362'}
          alt=''
          className={`object-cover md:row-span-1`}
        />
        <PlatformImage
          src={'https://ik.imagekit.io/mlnzyx/workly/image-4_ObI5FTCXF.png?updatedAt=1635908555827'}
          alt=''
          className={`object-cover md:row-span-2 w-full`}
        />
      </Suspense>
    </div>
  )
}

export default memo(PlatformGallery)
