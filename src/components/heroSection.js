import React, { Component } from 'react';
import heroBanner from '../img/heroBanner.jpg'
class HeroSection extends Component {
    state = {  }
    render() { 
        return ( 
       
                            <div className="heroSection">
              <img src={heroBanner}style={{width:'100%'}} alt="" ></img>
              <hr style={{margin:0,color:'#000000',padding:'10px',backgroundColor:'#000000'}}></hr>
            </div>
         );
    }
}
 
export default HeroSection;