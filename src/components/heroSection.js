import React, { Component } from 'react';
import heroBanner from '../img/heroBanner.jpg'
class HeroSection extends Component {
    state = {  }
    render() { 
        return ( 
       
                            <div className="heroSection">
              <img src={heroBanner}style={{width:'100%'}} ></img>
              <hr style={{border:' 10px solid black',margin:0}}></hr>
            </div>
         );
    }
}
 
export default HeroSection;