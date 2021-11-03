import { memo } from 'react'

const Logo = () => {
  return (
    <div className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12`}>
      <img
        src={'https://ik.imagekit.io/mlnzyx/workly/logo_eC4Ttb3kT.png?updatedAt=1635908558120'}
        alt='Work.ly Logo'
        className={`w-full object-cover`}
      />
    </div>
  )
}

export default memo(Logo)
