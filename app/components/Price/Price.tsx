import React from 'react'
import PricingCard from '../ui/PricingCard'
import TitleHeading from '../TitleHeading/TitleHeading'
import { PricingCardData } from '@/app/data/PriceData';

type Props = {}

const pricingCards: PricingCardData[] = [
  {
    title: 'Standart',
    subtitle: 'Propose For New Clients',
    price: 79.99,
    currency: '$',
    period: 'per month',
    aosDelay: '0',
    dataAos: 'fade-right',
    features: [
      'Full Access Library', 
      'Multiple User',
      'Refund Policy',
      '24/7 Support',
    ],
    isNew: true,
    redColorTitle: false,
    icons: {
      'Full Access Library': 'cross', 
      'Multiple User': 'cross',
      'Refund Policy': 'check',
      '24/7 Support': 'check',
    },
  },
  {
    title: 'Premium',
    subtitle: 'Package For Regular Customers',
    price: 139.99,
    currency: '$',
    period: 'per month',
    aosDelay: '400',
    dataAos: 'zoom-out',
    features: [
      'Full Access Library', 
      'Multiple User',
      'Refund Policy',
      '24/7 Support',
    ],
    isNew: false,
    redColorTitle: false,
    icons: {
      'Full Access Library': 'cross', 
      'Multiple User': 'check',
      'Refund Policy': 'check',
      '24/7 Support': 'check',
    },
  },
  {
    title: 'Ultimate',
    subtitle: 'Propose For Professional Business',
    price: 219.99,
    currency: '$',
    period: 'per month',
    aosDelay: '200',
    dataAos: 'fade-left',
    features: [
      'Full Access Library', 
      'Multiple User',
      'Refund Policy',
      '24/7 Support',
    ],
    isNew: false,
    redColorTitle: true,
    icons: {
      'Full Access Library': 'check', 
      'Multiple User': 'check',
      'Refund Policy': 'check',
      '24/7 Support': 'check',
    },
  },
  
];

const Price = (props: Props) => {
  return (
    <div className='pt-20 pb-12 relative z-0'>
      <TitleHeading title='Deal For Your Business' subtitle='Meet our pricing plan that suit you' />
      <div className='items-center w-[80%] mx-auto pt-24 gap-8 lg:gap-0 grid-cols-1
      md:grid-cols-2 lg:grid-cols-3'>
        <div className='lg:flex grid items-center justify-center space-y-12 lg:space-y-0 lg:gap-20'>
          {pricingCards.map((card, index) => (
            <div
              data-aos-anchor-placement='top-center'
              data-aos={card.dataAos}
              data-aos-delay={card.aosDelay}
              key={index}
            >
              <PricingCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Price