import { memo } from 'react'
import { IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoTwitch } from 'react-icons/io5'

const FooterAddrInfo = () => {
  const footerIconClass = 'text-2xl transition text-[#47F1DA] hover:text-gray-50'
  return (
    <div className={`w-full lg:pl-20 mb-8 lg:mb-0`}>
      <div>
        <img
          src={'https://ik.imagekit.io/mlnzyx/workly/logo_eC4Ttb3kT.png?updatedAt=1635908558120'}
          width={48}
          height={48}
          alt=''
          className={`w-10 h-10 lg:w-12 lg:h-12 object-cover`}
        />
        <h3 className={`font-semibold mt-2 mb-4 text-[#ECF1F4]`}>Work.ly</h3>
        <p className={`max-w-xs text-[#ECF1F4]`}>Jl. Nyi Ageng Serang no 51B Sleman Yogyakarta</p>
      </div>
      <div className='flex items-center space-x-4 mt-6 md:mt-12'>
        <a href='#'>
          <IoLogoLinkedin className={footerIconClass} />
        </a>
        <a href='#'>
          <IoLogoFacebook className={footerIconClass} />
        </a>
        <a href='#'>
          <IoLogoTwitter className={footerIconClass} />
        </a>
        <a href='#'>
          <IoLogoTwitch className={footerIconClass} />
        </a>
      </div>
    </div>
  )
}

export default memo(FooterAddrInfo)
