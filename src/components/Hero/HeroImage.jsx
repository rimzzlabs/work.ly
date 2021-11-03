import { memo } from 'react'

const HeroImage = () => {
  return (
    <div className='hidden lg:block absolute right-0 top-0 h-screen w-1/4 lg:w-2/5 z-0'>
      <img
        src={'https://ik.imagekit.io/mlnzyx/workly/phone-hand_tzxrAI3QAYs.jpg?updatedAt=1635908696495'}
        width={512}
        height={1024}
        alt='holding phone'
        className={`w-full h-full object-cover mix-blend-screen`}
      />
    </div>
  )
}

export default memo(HeroImage)
