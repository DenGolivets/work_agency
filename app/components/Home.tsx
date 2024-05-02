'use client'

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import Supporter from './Supporter/Supporter'
import { TracingBeam } from './ui/tracing-beam'
import Price from './Price/Price'
import SupportTeam from './SupportTeam/SupportTeam'
import Company from './Company/Company'
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {}

const Home = (props: Props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  },[]);
  

  return (
    
    <div>
      <TracingBeam>
        <Hero />
        <Features />
        <Supporter />
        <Price />
        <SupportTeam />
        <Company />
      </TracingBeam>
    </div>
    
  )
}

export default Home