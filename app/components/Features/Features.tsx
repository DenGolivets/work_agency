import React from 'react'
import TitleHeading from '../TitleHeading/TitleHeading'
import FeatureCard from './FeatureCard'

const cardData = [
  {
    id: 1,
    img: '/images/icon1.png',
    title: 'Email Subscription',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officia facere vero porro sunt commodi laboriosam.`,
    aosDelay: '200',
  },
  {
    id: 2,
    img: '/images/icon2.png',
    title: 'Confige Subscription',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officia facere vero porro sunt commodi laboriosam.`,
    aosDelay: '400',
  },
  {
    id: 3,
    img: '/images/icon3.png',
    title: 'Secure Subscription',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officia facere vero porro sunt commodi laboriosam.`,
    aosDelay: '600',
  },
  {
    id: 4,
    img: '/images/icon4.png',
    title: 'System Subscription',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officia facere vero porro sunt commodi laboriosam.`,
    aosDelay: '800',
  },
  {
    id: 5,
    img: '/images/icon5.png',
    title: 'Products Subscription',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officia facere vero porro sunt commodi laboriosam.`,
    aosDelay: '1000',
  },
  {
    id: 6,
    img: '/images/icon6.png',
    title: 'Media Subscription',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officia facere vero porro sunt commodi laboriosam.`,
    aosDelay: '1200',
  },
]

type Props = {}

const Features = (props: Props) => {
  return (
    <div className='pt-20 pb-12'>
      <TitleHeading subtitle='Ideal Solution For You' title='Explore Ultimate Features' />
      <div className='pt-20 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6'>
          {cardData.map((card) => {
            return (
              <div 
                data-aos='zoom-in' 
                data-aos-anchor-placement={'top-center' as string}
                data-aos-delay={card.aosDelay}
                key={card.id}
              >
                <FeatureCard 
                  img={card.img}
                  title={card.title}
                  description={card.description}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Features