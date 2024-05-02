'use client'

import { useButtonContext } from '@/app/context/ButtonContext';
import Image from 'next/image';
import React, { FC, useState } from 'react'

const CardButton: FC = () => {

  const { isHovered, setIsHovered } = useButtonContext();

  return (
    <div className="mx-auto flex w-[130px] h-[40px] max-w-lg items-center justify-center">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative z-10 flex hover:shadow-[2px_2px_0px_1px_rgba(0,0,0,0.3)] w-full cursor-pointer items-center overflow-hidden 
        rounded-xl border-2 border-gray-200 p-[1.5px] transition-all duration-300 hover:scale-110 delay-75
        ${isHovered ? '-translate-y-4 delay-500 transition duration-500 backdrop-blur-sm' : ''}`}
      >
        <div
          className="animate-rotate absolute inset-0 h-full w-full rounded-full 
          bg-[conic-gradient(#0ea5e9_40deg,transparent_140deg)]"></div>
        <div className="relative flex w-[130px] h-[40px] rounded-[0.60rem] bg-gray-300 items-center 
        justify-center">
          <span className={`transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            Learn More
          </span>
          {isHovered ? (
            <span className='absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ease-in-out opacity-100'>
              <Image src='/images/arrow.gif' alt='' width={30} height={30} className='rounded-full animate-slide' />
            </span>
          ) : (
            <span className='absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-500 ease-in-out opacity-0'>
              <Image src='/images/arrow.gif' alt='' width={30} height={30} className='rounded-full' />
            </span>
          )}
        </div>
      </button>
    </div>
  )
}

export default CardButton