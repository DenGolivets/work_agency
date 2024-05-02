'use client'

import { CheckIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

type Props = {}

const Supporter = (props: Props) => {

  const { ref, inView } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div className='pt-20 pb-12'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <div 
          data-aos='fade-right'
          data-aos-anchor-placement='top-center'
          className='order-2 lg:order-1'>
          <Image 
            src='/images/SupportMain.png'
            alt='customer'
            width={500}
            height={500}
          />
        </div>
        <div ref={ref} className='order-1 lg:order-2'>
            <h1 
              data-aos='fade-left'
              data-aos-anchor-placement='top-center'
              data-aos-delay='200'
              className='text-xl md:text-2xl lg:text-3xl text-[#02073e] font-bold leading-8 md:leading-10'>
              Providing exceptional customer support is our core commitment, ensuring complete satisfaction 
              for every <span className='inline-flex items-center'>client
              <Image src='/images/24support.png' alt='' width={30} height={30} className='ml-4 mb-1 mr-1'/>.</span>
            </h1>
            <p 
              data-aos='fade-right'
              data-aos-anchor-placement='top-center'
              data-aos-delay='400'
              className='mt-6 mb-6 text-black opacity-90 text-sm md:text-base'>
            &#39;&#39;Unwavering commitment to exceptional customer support ensures complete satisfaction 
            for each individual, fostering trust and loyalty in our services within 24/7.&#39;&#39;
            </p>
            <div
              data-aos='fade-up'
              data-aos-anchor-placement='top-center'
              data-aos-delay='800'>
              <div className='flex items-center mb-4 space-x-3'>
                <CheckIcon className='w-6 h-6 text-red-600' />
                <p className='text-lg text-[#02073e] font-medium'>Technical Services</p>
              </div>
              <div className='flex items-center mb-4 space-x-3'>
                <CheckIcon className='w-6 h-6 text-red-600' />
                <p className='text-lg text-[#02073e] font-medium'>Application Development</p>
              </div>
              <div className='flex items-center mb-4 space-x-3'>
                <CheckIcon className='w-6 h-6 text-red-600' />
                <p className='text-lg text-[#02073e] font-medium'>
                {inView ? (
                  <CountUp end={40} duration={6} className='text-black font-semibold text-2xl' />
                ) : (
                  '0'
                )}
                  <span className='text-black font-semibold text-lg'>(k)</span>&nbsp;
                  Created
                </p>
              </div>
              <div className='flex items-center mb-4 space-x-3'>
                <CheckIcon className='w-6 h-6 text-red-600' />
                <p className='text-lg text-[#02073e] font-medium'>
                {inView ? (
                  <CountUp end={900} duration={9} className='text-black font-semibold text-2xl' />
                ) : (
                  '0'
                )}
                  <span className='text-black font-semibold text-lg'>+</span>&nbsp;
                  Specialists
                </p>
              </div>
              <div className='flex items-center mb-4 space-x-3'>
                <CheckIcon className='w-6 h-6 text-red-600' />
                <p className='text-lg text-[#02073e] font-medium'>IT and Technology</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Supporter