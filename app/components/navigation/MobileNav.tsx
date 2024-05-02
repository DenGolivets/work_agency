import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

type MobileNavProps = {
  closeNav: () => void;
  nav: boolean;
}

const MobileNav = ({ nav, closeNav }: MobileNavProps) => {

  const navOpenStyle = nav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div className={`${navOpenStyle} transform transition-all duration-500 fixed top-0 bottom-0 right-0 left-0 z-[200] h-[100vh]
    bg-[#6d096b]`}>
      <XMarkIcon

        onClick={closeNav}
        className='w-[3rem] h-[3rem] absolute top-[1.3rem] right-[1.8rem] text-white z-[202] cursor-pointer' 
      />
        <ul className='relative z-[201] space-y-10 flex flex-col items-center justify-center
        h-full'>
          <li className='text-[25px] cursor-pointer text-white hover:text-yellow-500'>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li className='text-[25px] cursor-pointer text-white hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              About
            </Link>
          </li>
          <li className='text-[25px] cursor-pointer text-white hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              Services
            </Link>
          </li>
          <li className='text-[25px] cursor-pointer text-white hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              Customer
            </Link>
          </li>
          <li className='text-[25px] cursor-pointer text-white hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              Blog
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default MobileNav
