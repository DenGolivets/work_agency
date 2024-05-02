'use client';

import React, { useState } from 'react'
import Navigation from './Navigation'
import MobileNav from './MobileNav'

type Props = {}

const ResponsiveNav = (props: Props) => {

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
  }

  const closeNavHandler = () => {
    setShowNav(false);
  }

  return (
    <div>
      <Navigation openNav={showNavHandler} />
      <MobileNav nav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav