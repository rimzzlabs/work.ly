import { useContext } from 'react'
import { Konteks } from '../context'
import { BiX } from 'react-icons/bi'
import Rocket from '@/svg/Rocket'
import { motion } from 'framer-motion'

const Modal = () => {
  const { state, handleClose } = useContext(Konteks)
  const variants = {
    hidden: { opacity: 0, y: -150, scale: 0.975 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'tween' } },
    exit: { opacity: 0, y: 150, scale: 0.975, transition: { type: 'tween' } },
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants}
      onClick={(e) => e.stopPropagation()}
      className={`relative flex items-center justify-center h-96 w-96 p-8 rounded-xl bg-white`}>
      <BiX className={`absolute right-4 top-4 cursor-pointer text-xl text-gray-900`} onClick={handleClose} />
      <div>
        <div className={`flex justify-center mb-4`}>
          <Rocket />
        </div>
        <h3 className={`text-center font-semibold text-lg sm:text-xl lg:text-2xl text-gray-800`}>Thank You!</h3>
        <p className={`text-base lg:text-lg mb-4 text-gray-700`}>
          To confirm, check your email, and from now on you will not be miss any update about our services.
        </p>
        <p className={`text-xs sm:text-sm mb-4 text-gray-700/90`}>
          You have been subscribed to our newsletter with email address: {state.input}
        </p>
        <button onClick={handleClose} className={`text-sm sm:text-base px-6 py-2 rounded-xl bg-green-600 text-white`}>
          Got it!
        </button>
      </div>
    </motion.div>
  )
}

export default Modal
