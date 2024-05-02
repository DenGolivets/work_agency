import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='h-[70vh] lg:h-[88vh] sm:h-[85vh] flex items-center flex-col justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
          <div className='col-span-2'>
            <h1
              data-aos='fade-right'
              className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e]
              leading-[2.4rem] md:leading-[4rem]'>
              Exploring Innovative Paths to Cultivate Your Business
            </h1>
            <p 
              data-aos='fade-left' data-aos-delay='200'
              className='md:text-[17px] text-[15px] mb-8 text-black opacity-90 font-normal'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. I
              ncidunt itaque facere alias modi assumenda aut laudantium tempora voluptas in numquam.
            </p>
            <div 
              data-aos='zoom-in' data-aos-delay='400'
              className='flex items-center space-x-4 md:space-x-6'>
              <LoginButton 
                text='Get Started'
                className='bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400'
              />
              <LoginButton 
                text='Explore Features'
                className='bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400'
              />
            </div>
          </div>
            
          <div 
            data-aos='fade-left' data-aos-delay='600'
            className='col-span-3 hidden sm:block ml-40 mt-10'>
            <Image  
              src='/images/Hero.png'
              alt=''
              width={1500}
              height={1500}
              className='lg:w-[900px] lg:h-[550px] sm:h-[450px] md:w-[650px]'
            />
          </div>
      </div>
    </div>
  )
}

export default Hero