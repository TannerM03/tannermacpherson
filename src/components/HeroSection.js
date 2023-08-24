import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
        <h1>Nice to meet you!</h1>
        <p>Welcome to my website, hope you enjoy!</p>
        <div className = "hero-btns">
            <Button to = "/my-goals"
            className = 'btns' 
            buttonStyle = 'btn--outline'
            buttonSize = 'btn--large'>
                MY GOALS
            </Button>
            <Button to = "/fun-facts"
            className = 'btns' 
            buttonStyle = 'btn--primary'
            buttonSize = 'btn--large'>
                FUN FACTS {/*<i className='far fa-play-circle' />*/}
            </Button>
        </div>
    </div>
  )
}

export default HeroSection