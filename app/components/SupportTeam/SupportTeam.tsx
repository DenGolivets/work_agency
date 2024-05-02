import Image from 'next/image'
import React from 'react'
import SupportTeamImage from './../../../public/images/supportteam.png'

type Props = {}

const SupportTeam = (props: Props) => {
  return (
    <div className='pt-28 pb-12'>
      <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div 
          data-aos='fade-right' 
          data-aos-anchor-placement='top-center'
          className='flex flex-col'>
          <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-4 font-bold text-[#02073e] 
          leading-10 md:leading-[4rem]'>
            Do you need help? Our support team ready to help you
          </h1>
          <p className='text-gray-900 opacity-90 text-[17px] mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maxime ipsam, delectus 
            voluptatum cumque iusto in esse tempora quaerat commodi.Minus maxime ipsam, delectus 
            voluptatum cumque iusto in esse tempora quaerat commodi.
          </p>
          <div className='flex items-center space-x-6 mt-8'>
            <Image src='/images/Emailsupport.png' alt='' width={100} height={100} />
            <div>
              <h1 className='text-lg text-gray-900 font-medium mb-2'>
                Email client support
              </h1>
              <p className='md:w-[70%] w-[90%] text-base text-black opacity-85'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, explicabo!
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-11 mt-8'>
            <Image src='/images/Liveticket.png' alt='' width={80} height={80} />
            <div>
              <h1 className='text-lg text-gray-900 font-medium mb-2'>
                Live ticket support
              </h1>
              <p className='md:w-[70%] w-[90%] text-base text-black opacity-85'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, explicabo!
              </p>
            </div>
          </div>
        </div>

        <div 
          data-aos='fade-left' 
          data-aos-anchor-placement='top-center'
          className='ml-0 lg:ml-20 flex items-center justify-center'>
          <Image src={SupportTeamImage} alt='' className='w-[500px] h-[600px]' />
        </div>
      </div>
    </div>
  )
}

export default SupportTeam