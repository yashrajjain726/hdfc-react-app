import React from 'react';
import NavBar from './navbar'
import HeroSection from './heroSection'
import LowerBanner from './lowerBanner'
import BottomNavigationComponent from './bottomNavigationComponent'
import OfferCard from './OfferCard'

export default function FullWidthGrid() {
  return (
      <React.Fragment>
          <NavBar/>
        <HeroSection/>
        <LowerBanner/>
        {/* <BottomNavigationComponent/> */}
        </React.Fragment>
  );
}
