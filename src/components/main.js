import React from 'react';
import NavBar from './navbar'
import HeroSection from './heroSection'
import LowerBanner from './lowerBanner'
export default function FullWidthGrid() {
  return (
      <React.Fragment>
          <NavBar/>
        <HeroSection/>
        <LowerBanner/>
        </React.Fragment>
  );
}
