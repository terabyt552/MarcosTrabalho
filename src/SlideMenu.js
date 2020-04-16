import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideMenu.css'

import   slide1 from './Assets/img/slide1.png'
import   slide2 from './Assets/img/slide2.png'
import   slide3 from './Assets/img/slide3.png'



 
const properties = {
    duration: 3000,
    transitionDuration: 700,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }}

 

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
          <div>
            <img src={slide1} alt="slide1" className="img"/>
           
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img src={slide2} alt="slide2" className="img"/>
            
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img src={slide3} alt="slide3" className="img"/>
            
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;