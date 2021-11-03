import { memo } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header
      className={`absolute left-0 top-[60px] w-full lg:max-w-[55%] h-14 flex items-center justify-between px-8 lg:px-20 space-x-4 z-[1]`}>
      <Logo />
      <Navbar />
    </header>
  )
}

export default memo(Header)
