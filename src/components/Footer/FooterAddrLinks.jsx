import { Konteks } from '@/context/'
import { lazy, memo, Suspense, useContext } from 'react'

const FooterGroup = lazy(() => import('./FooterGroup'))

const FooterAddrLinks = () => {
  const { footerDatas: datas } = useContext(Konteks)

  return (
    <div className={`flex w-full justify-center lg:justify-start space-x-8 md:space-x-16`}>
      <Suspense fallback={null}>
        {datas.map(({ title, items }, i) => (
          <FooterGroup key={i} title={title} items={items} />
        ))}
      </Suspense>
    </div>
  )
}

export default memo(FooterAddrLinks)
