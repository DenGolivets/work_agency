import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pt-12 pb-12'>
      <div className='w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start'>
        {/* Section 1 */}
        <div className='md:mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-900 font-semibold mb-6'>Company</h1>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>About</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Affiliate</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Careers & Culture</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Blog</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Press</p>
        </div>
        {/* Section 2 */}
        <div className='md:mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-900 font-semibold mb-6'>My Account</h1>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Press inquiries</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Social Media</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Directories</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Images</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Permission</p>
        </div>
        {/* Section 3 */}
        <div className='md:mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-900 font-semibold mb-6'>Our Information</h1>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Return Policies</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Privacy Policy</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Terms & Conditions</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>RoadMap</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Store Hours</p>
        </div>
        {/* Section 4 */}
        <div className='md:mx-auto mx-0'>
          <h1 className='text-[17px] text-gray-900 font-semibold mb-6'>About Us</h1>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Support Center</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Customer Support</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>About Us</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Copyright</p>
          <p className='text-black/80 mb-4 text-base cursor-pointer hover:text-yellow-600'>Popular Compaign</p>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-4 text-base opacity-75'>
        Copyright &copy; 2024 by Den Holivets
      </div>
    </div>
  )
}

export default Footer