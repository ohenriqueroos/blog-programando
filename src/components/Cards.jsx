import React from 'react';
import './Cards.css';

// Import Image
import Exemple from '../img/exemple.jpg';

const Cards = () => {
  return ( 
    <div className="cards-container">
      <div className="cards-top">
        <div className="card">
          <div className="card-content">
            <div className="card-picrute">
              <img src={Exemple} alt="" />
            </div>
            <div className="card-description">
              <h4>Notícia 2</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita quaerat illo aliquam quod, cupiditate fugiat eos! Maxime, esse aliquam nam doloribus vitae ullam. Error aut ratione iure dolorem quisquam.</p>
            </div>
          </div>
          <div className="access-news">
            <button className="btn-primary">Acessar Notícia</button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-picrute">
              <img src={Exemple} alt="" />
            </div>
            <div className="card-description">
              <h4>Notícia 2</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita quaerat illo aliquam quod, cupiditate fugiat eos! Maxime, esse aliquam nam doloribus vitae ullam. Error aut ratione iure dolorem quisquam.</p>
            </div>
          </div>
          <div className="access-news">
            <button className="btn-primary">Acessar Notícia</button>
          </div>
        </div>
      </div>
      <div className="cards-bottom">
        <div className="card">
          <div className="card-content">
            <div className="card-picrute">
              <img src={Exemple} alt="" />
            </div>
            <div className="card-description">
              <h4>Notícia 2</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita quaerat illo aliquam quod, cupiditate fugiat eos! Maxime, esse aliquam nam doloribus vitae ullam. Error aut ratione iure dolorem quisquam.</p>
            </div>
          </div>
          <div className="access-news">
            <button className="btn-primary">Acessar Notícia</button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Cards;