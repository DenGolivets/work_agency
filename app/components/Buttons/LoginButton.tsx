import React from 'react'

type LoginButtonProps = {
  text: string;
  className: string;
}

const LoginButton = ({ text, className }: LoginButtonProps) => {
  return (
    <button className={`${className} rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group
    relative hover:bg-gradient-to-r text-white hover:ring-2
    hover:ring-offset-2 transition-all ease-out duration-300`}>
      <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12
      group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease-in-out'></span>
      <span className='relative'>
        {text}
      </span>
    </button>
  )
}

export default LoginButton