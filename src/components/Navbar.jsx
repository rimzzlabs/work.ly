import { memo } from 'react'

const NavLink = ({ children, href }) => (
  <a href={href} className={`text-xs sm:text-sm uppercase font-medium hover:underline hover:text-green-500`}>
    {children}
  </a>
)

const Navbar = () => {
  return (
    <nav className={`flex items-center space-x-3 lg:space-x-6`}>
      <NavLink href='#service'>service</NavLink>
      <NavLink href='#portfolio'>portfolio</NavLink>
      <NavLink href='#about'>about us</NavLink>
    </nav>
  )
}

export default memo(Navbar)
