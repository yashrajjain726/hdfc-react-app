import React, { Component } from 'react';
import lowerBanner from '../img/lowerBanner.jpg'
import Grid from '@material-ui/core/Grid';
import OfferCard from './OfferCard'

class LowerBanner extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{margin:'4%'}}>
                <img src={lowerBanner} style={{width:'100%'}}></img>
        <div style={{paddingTop:25}}>
          <OfferCard/>
    </div>    
            </div>
         );
    }
}
 
export default LowerBanner;