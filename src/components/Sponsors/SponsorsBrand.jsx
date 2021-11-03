import { useInView } from 'react-intersection-observer'
import { memo, useEffect } from 'react'

const SponsorsBrand = ({ src }) => {
  const { inView, ref, entry } = useInView({ triggerOnce: true })
  useEffect(() => {
    if (inView) entry.target.setAttribute('src', src)
  }, [inView])

  return <img ref={ref} width={50} alt='' className={`w-16 lg:w-24 object-cover`} />
}

export default memo(SponsorsBrand)
