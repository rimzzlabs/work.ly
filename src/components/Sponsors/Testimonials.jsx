import { useInView } from 'react-intersection-observer'
import { memo, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

const Testimonials = () => {
  const { inView, ref, entry } = useInView({ triggerOnce: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      entry.target.setAttribute(
        'src',
        'https://ik.imagekit.io/mlnzyx/workly/reviewer_6mNz987S-BD.jpg?updatedAt=1635908698841',
      )
      controls.start('visible')
      entry.target.classList.remove('blur-md')
    }
  }, [controls, inView])

  return (
    <div
      className={`flex flex-col lg:flex-row items-center w-full pb-8 lg:py-40 mt-14 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-24`}>
      <div className={`xl:w-[50%]`}>
        <motion.img
          variants={variants}
          initial='hidden'
          animate={controls}
          ref={ref}
          src={'https://ik.imagekit.io/mlnzyx/workly/placeholder_rnL-LjANV.svg?updatedAt=1635908695765'}
          width={360}
          alt=''
          className={`w-96 lg:w-full object-cover rounded-2xl blur-md`}
        />
      </div>
      <div className={`w-full`}>
        <p className={`text-base lg:text-xl mb-8 text-[#EEEEEE]`}>
          Since I used Work.ly, now I can have a decent workflow.
          <br /> There are also some improvements that are felt by my fellow workers.
          <br />I am very happy using this platform and I recommend Work.ly to all of you guys!
        </p>
        <h4 className={`text-lg lg:text-2xl font-semibold mb-2 text-[#EEEEEE]`}>John Doe</h4>
        <span className={`text-base lg:text-xl text-[#666666]`}>Sharp Indonesia</span>
      </div>
    </div>
  )
}

export default memo(Testimonials)
