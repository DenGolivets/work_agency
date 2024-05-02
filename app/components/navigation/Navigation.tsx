import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

type NavigationProps = {
  openNav: () => void;
}

const Navigation = ({ openNav }: NavigationProps) => {



  return (
    <div className='h-[12vh] bg-white shadow-md'>
      <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
        <Image
          src='/images/logo.svg'
          alt=''
          width={100}
          height={100}
          className='h-28 w-28 text-red-500 md:h-36 md:w-40'
        />

        <ul className='hidden lg:flex items-center space-x-10'>
          <li className='text-[17px] cursor-pointer text-red-500'>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              About
            </Link>
          </li>
          <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              Services
            </Link>
          </li>
          <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              Customer
            </Link>
          </li>
          <li className='text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200'>
            <Link href='/'>
              Blog
            </Link>
          </li>
        </ul>

        <div className='flex items-center space-x-2 md:space-x-5'>
          <LoginButton 
            text='Login'
            className='bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400'
          />
          <LoginButton 
            text='Sign Up'
            className='bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400'
          />
          <Bars3BottomRightIcon 
            onClick={openNav}
            className='w-[2rem] h-[2rem] lg:hidden cursor-pointer text-slate-900' 
          />
        </div>
      </div>
    </div>
  )
}

export default Navigation
