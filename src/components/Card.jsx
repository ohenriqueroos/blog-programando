import React from 'react';
import './Card.css';

// Import Images
import Exemple from '../img/exemple.jpg';

const Card = () => {
  return ( 
    <div className="container-card">
      <div className="card-picture">
        <img src={Exemple} alt="" />
      </div>
      <div className="card-description">
        <h4>Principal Notícia</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore unde nobis soluta tenetur modi laudantium accusamus quia, reprehenderit ut aut numquam inventore optio nisi quae alias fugit, illum sed.</p>
      </div>
    </div>
   );
}
 
export default Card;