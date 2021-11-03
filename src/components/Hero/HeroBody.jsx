import { memo } from 'react'

const HeroBody = () => {
  return (
    <div className={`w-full lg:max-w-[55%] z-[1]`}>
      <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-semibold mb-4 lg:mb-8 leading-tight text-[#EEEEEE]`}>
        One platform to
        <br /> boost your business
      </h1>
      <p className={`font-medium sm:text-lg mb-8 lg:mb-16 text-[#90BCB7]`}>
        Learn how to manage your business effieciently with a platform trusted by global leaders.
      </p>
      <a
        href='#service'
        className={`flex items-center justify-center w-32 lg:w-40 h-10 lg:h-12 rounded-md bg-[#EEEEEE] text-[#082D28]`}>
        Get Started
      </a>
    </div>
  )
}

export default memo(HeroBody)
