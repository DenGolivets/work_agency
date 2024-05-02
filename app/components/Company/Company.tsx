import Image from 'next/image'
import React from 'react'
import CompanyImg from './../../../public/images/customer.png'

type Props = {}

const Company = (props: Props) => {
  return (
    <div 
      data-aos='zoom-in' 
      data-aos-anchor-placement='top-center'
      className='pt-24 pb-12'>
      <h1 className='mb-6 font-bold text-2xl text-center md:text-3xl text-[#02073e]'>
        Company who also worked with us
      </h1>
      <p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-center text-gray-950/80'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae a suscipit, 
        repellat tenetur ab reiciendis porro accusamus saepe tempore corporis illo quae nam accusantium, 
        quibusdam adipisci nostrum totam vero.
      </p>
      <p className='text-center cursor-pointer mt-[1.7rem] font-medium text-blue-600 hover:text-blue-900'>
        Explore Details
      </p>
      <div className='mt-8 text-center w-[80%] mx-auto flex items-center justify-center'>
        <Image src={CompanyImg} alt='' />
      </div>
    </div>
  )
}

export default Company