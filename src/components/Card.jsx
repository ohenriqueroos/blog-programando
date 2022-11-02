import React from 'react';
import './Card.css';

// Import Images
import Exemple from '../img/exemple.jpg';
import Avatar from '../img/avatar.svg';

const Card = () => {
  return ( 
    <div className="card-container">
      <div className="card-picture">
        <img src={Exemple} alt="" />
      </div>
      <div className="card-content">
        <div className="user-content">
          <div className="user-info">
            <img src={Avatar} alt="" />
            <p>@ohenriqueroos</p>
          </div>
          <div className="user-follow">
            <button className="btn-secondary">Seguir</button>
          </div>
        </div>
        <div className="post-preview">
          <h4>Título</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus ipsa ex mollitia pariatur, fugit doloremque veniam odit ut neque esse explicabo ducimus dolorum quidem saepe error dignissimos, quis assumenda?</p>
        </div>
        <div className="post-link">
          <button>Acessar notícia</button>
        </div>
      </div>
    </div>
   );
}
 
export default Card;