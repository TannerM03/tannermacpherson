import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Get to know me!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src="old-well.jpg"
              text="Education"
              label="University"
              path="/education"
            />
            <CardItem
              src="techCard.webp"
              text="Technical Skills/Experience"
              label="Tech"
              path="/tech"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src= "leadership.jpeg"
              text="Leadership Experience"
              label="Leader"
              path="/leadership"
            />
            <CardItem
              src="workExperience.jpeg"
              text="Work Experience"
              label="Jobs"
              path="/work"
            />
            <CardItem
              src="SurferBackground.jpg"
              text="Hobbies"
              label="Fun"
              path="/hobbies"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
