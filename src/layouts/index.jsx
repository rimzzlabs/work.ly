const Layout = ({ children, className = '' }) => {
  return <div className={`px-4 sm:px-8 md:px-20 ${className}`}>{children}</div>
}

export default Layout
