import React, { Component } from 'react';
import lowerBanner from '../img/lowerBanner.jpg'
import Grid from '@material-ui/core/Grid';
import NavBar from './navbar'
import OfferCard from './OfferCard'
import amazon from '../img/amazon.png'
import flipkart from '../img/flipkart.jpg'
import compare from '../img/compare.png'
import myntra from '../img/myntra.png'
import snapdeal from '../img/snapdeal.png'
class LowerBanner extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{margin:'3%'}}>
                <img src={lowerBanner} style={{width:'100%'}}></img>
        <div style={{paddingTop:25}}>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Amazon"offers="Electronics Sale"image={amazon}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Flipkart"offers="Best of Clothing"image={flipkart}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Snapdeal"offers="90% Clearance Sale"image={snapdeal}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="ShopClues"offers="50% Flat Discount"image={amazon}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Myntra"offers="Discount on Games"image={myntra}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Compare" offers="Compare Things"image={compare}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Sheln" offers="Discount on Shoes"image={flipkart}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Club Factory" offers="Black Friday Sale"image={snapdeal}/>
        </Grid>
        <Grid item xs={3} sm={3}>
        <OfferCard name="Alibaba" offers="50% Flat Discount" image={compare}/>
        </Grid>
      </Grid>
    </div>    
            </div>
         );
    }
}
 
export default LowerBanner;