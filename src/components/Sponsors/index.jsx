import { memo, lazy, Suspense } from 'react'
import Layout from '@/layouts/'

const SponsorsBrand = lazy(() => import('./SponsorsBrand'))
const Testimonials = lazy(() => import('./Testimonials'))
const datas = [
  'https://ik.imagekit.io/mlnzyx/workly/bni__5qLhsNEx.png?updatedAt=1635908549817',
  'https://ik.imagekit.io/mlnzyx/workly/kao_v2oSNx_KI.png?updatedAt=1635908556289',
  'https://ik.imagekit.io/mlnzyx/workly/tix-id_X_cGnro3o.png?updatedAt=1635908697653',
  'https://ik.imagekit.io/mlnzyx/workly/dentsu_5qL_0Ukrp.png?updatedAt=1635908551560',
  'https://ik.imagekit.io/mlnzyx/workly/sharp_st-IxaiGO.png?updatedAt=1635912174857',
  'https://ik.imagekit.io/mlnzyx/workly/sharp_st-IxaiGO.png?updatedAt=1635912174857',
]

const Sponsors = () => {
  return (
    <Layout>
      <div>
        <h3 className={`text-center text-2xl lg:text-4xl font-semibold mb-12 text-[#EEEEEE]`}>
          Trusted by over 400 global leading companies
        </h3>
        <div id='sponsors' className={`flex items-center justify-center space-x-8 overflow-x-auto`}>
          <Suspense fallback={null}>
            {datas.map((item, i) => (
              <SponsorsBrand src={item} key={i} />
            ))}
          </Suspense>
        </div>
      </div>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
    </Layout>
  )
}

export default memo(Sponsors)
