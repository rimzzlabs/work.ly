import { memo } from 'react'

const FooterGroup = ({ title, items }) => {
  return (
    <div>
      <h4 className={`font-bold text-sm sm:text-base mb-4 text-[#ECF1F4]`}>{title}</h4>
      <div className={`flex flex-col space-y-2`}>
        {items.map((item, i) => (
          <a href='#' key={i} className={`text-xs sm:text-sm hover:underline text-[#ecf1f4c7]`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default memo(FooterGroup)
