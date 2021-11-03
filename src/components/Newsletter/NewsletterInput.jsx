import { IoMailOutline } from 'react-icons/io5'
import { memo, useContext } from 'react'
import { Konteks } from '@/context/'

const NewsletterInput = () => {
  const { state, handleSubmit, handleOnChange } = useContext(Konteks)
  return (
    <form onSubmit={handleSubmit}>
      <div className={`flex items-center w-full max-w-lg h-12 lg:h-14 rounded-xl bg-white`}>
        <div className={`flex items-center justify-center w-14 lg:w-16 h-full`}>
          <IoMailOutline className={`text-xl lg:text-2xl text-[#569B9B]`} />
        </div>
        <input
          required
          value={state.input}
          onChange={handleOnChange}
          type='email'
          placeholder='Enter your email address'
          className={`w-full h-full pr-2 bg-transparent outline-none placeholder-[#569B9B] text-[#569B9B]`}
        />
        <button
          className={`flex items-center justify-center w-48 h-10 lg:h-12 mr-1 md:mr-2 rounded-xl bg-gradient-to-r from-[#016A6A] to-[#02A6A6]`}>
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default memo(NewsletterInput)
