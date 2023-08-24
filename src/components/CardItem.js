import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/img-8.jpg';
import img2 from '../images/BeachBackground.jpg';
import img3 from '../images/SurferBackground.jpg';
import img4 from '../images/old-well.jpg';
import img5 from '../images/img-2.jpg';
import img6 from  '../images/leadership.jpeg';
import img7 from  '../images/techCard.webp';
import img8 from  '../images/workExperience.jpeg';



function CardItem(props) {
  return (
    <li className="cards_item">
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img src={getImageSource(props.src)} alt="Travel" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}

// Helper function to get the correct image source based on the provided image name
function getImageSource(imageName) {
  switch (imageName) {
    case 'img-8.jpg':
      return img1;
    case 'BeachBackground.jpg':
      return img2;
    case 'SurferBackground.jpg':
      return img3;
    case 'old-well.jpg':
      return img4;
    case 'img-2.jpg':
      return img5;
    case 'leadership.jpeg':
        return img6;
    case 'techCard.webp':
        return img7;
    case 'workExperience.jpeg':
        return img8;
    default:
      return '';
  }
}

export default CardItem;
