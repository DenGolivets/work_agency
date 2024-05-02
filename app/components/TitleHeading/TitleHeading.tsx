import React from 'react'

type TitleHeadingProps = {
  title: string;
  subtitle: string;
}

const TitleHeading = ({ title, subtitle }: TitleHeadingProps) => {
  return (
    <div className='text-center p-2'>
      <p className='text-[#0b6cad] md:text-[16px] text-[15px]'>
        {title}
      </p>
      <h1 className='mt-2 font-bold text-[22h1x] md:text-[30px] text-[#02073e]'>
        {subtitle}
      </h1>
    </div>
  )
}

export default TitleHeading