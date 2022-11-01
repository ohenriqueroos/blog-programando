import React from 'react';
import './TopNews.css';

import Card from './Card';

const TopNews = () => {
  return ( 
    <div className="content">
      <h3>Notícias em destaque</h3>
      <div className="content-cards">
        <Card />
      </div>
    </div>
   );
}
 
export default TopNews;