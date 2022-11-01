import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TopNews from './components/TopNews';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <TopNews />
      </>
    </div>
  );
}

export default App;
