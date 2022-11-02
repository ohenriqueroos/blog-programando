import React from 'react';
import './TopNews.css';

import Card from './Card';

const TopNews = () => {
  return ( 
    <div className="content">
      <h2>Principais Notícias</h2>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
   );
}
 
export default TopNews;