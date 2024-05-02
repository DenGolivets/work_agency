import Image from 'next/image'
import React, { useState } from 'react'
import CardButton from '../Buttons/CardButton';
import { ButtonProvider } from '@/app/context/ButtonContext';

type FeatureCardProps = {
  img: string;
  title: string;
  description: string;
}

const FeatureCard = ({ img, title, description }: FeatureCardProps) => {
  return (
    <div className='text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300
    cursor-pointer hover:scale-105'>
      <Image 
        src={img}
        alt='icon'
        width={70}
        height={70}
        className='mx-auto'
      />
      <h1 className='text-xl mt-6 font-medium text-[#02073e]'>
        {title}
      </h1>
      <p className='mt-4 text-black opacity-90 text-[15px]'>
        {description}
      </p>
      <div className='mt-6'>
        <ButtonProvider>
          <CardButton />
        </ButtonProvider>
      </div>
    </div>
  )
}

export default FeatureCard