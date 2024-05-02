import { PricingCardData } from '@/app/data/PriceData'
import Image from 'next/image'
import React from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid'

const PricingCard = ({ title, icons, subtitle, price, currency, period, features, isNew, redColorTitle }: PricingCardData) => {

  const getIconComponent = (key: string) => {
    const iconType = icons?.[key];
    switch (iconType) {
      case 'check':
        return <CheckIcon className='h-5 w-5 text-green-600' />;
      case 'cross':
        return <XMarkIcon className='h-5 w-5 text-red-600' />;
      default:
        return null;
    }
  };

  return (

    <div className="group relative w-[80] h-[600px] z-10 flex max-w-lg
    items-center rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 transition 
    duration-500 hover:scale-110 delay-75 backdrop-blur-sm hover:shadow-2xl">
      <div className='w-[313px] h-[593px]'>
      <div className='flex h-full rounded-[20px] px-[40px] w-full items-center justify-center 
      bg-[#F3F4F6]'>
      {/* <!-- Label --> */}
      {isNew && (
        <div className='absolute -top-4 -right-2 flex h-[90px] w-[90px] items-center justify-center z-20'>
          <Image src='/images/NewPrice.png' alt='' width={200} height={200} />
        </div>
      )}
      {/* <!-- Card Container --> */}
      <div className="flex relative w-full flex-col items-center justify-center gap-[15px] tracking-[0.2px]">
      {/* <!-- Title --> */}
        <div className='h-[150px] flex flex-col items-center justify-center'>
          {redColorTitle ? (
            <div className='text-red-600 text-[36px] font-bold leading-[32px] mb-10'>
              {title}
            </div> 
          ):(
            <h1 className="text-[30px] font-bold leading-[32px] mb-10 text-black">
              {title}
            </h1>
          )}
          {/* <!-- Subtitle --> */}
          <div className='max-h-[40px]'>
            <h2 className="text-center text-lg text-black font-normal underline">
              *{subtitle}*
            </h2>
          </div>
        </div>
        {/* <!-- Price --> */}
        <div className="my-0 flex justify-between px-5 font-semibold text-black">
          <div className="my-1 text-[60px]">
            {price}
          </div>
          <div className="ml-3 flex flex-col">
          <div className="mt-3 text-[24px] font-bold text-red-500">
            {currency}
          </div>
          <div className="text-[20px]">
            {period}
          </div>
        </div>
      </div>
      {/* <!-- CTA Button --> */}
      <button className="mb-1 w-full rounded-[20px] bg-gray-300/50 px-[40px] py-[15px] font-sans text-[18px] 
      text-xl font-semibold text-black hover:bg-gray-200 hover:shadow-md border-1 transition
      duration-300">
        Choose Plan
      </button>
      {/* <!-- Features --> */}
      <div className="flex w-full flex-col items-center justify-center gap-4 pt-4">
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex w-full items-center justify-start gap-[8px]">
              {getIconComponent(feature)}
              <p className="text-[14px] font-medium text-black">
                {feature}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default PricingCard