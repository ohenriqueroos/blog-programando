import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return ( 
    <div className="container">
      <h5>&lt;blog-programando/&gt;</h5>
      <div className="nav-buttons">
        <button className="btn-secondary">Entrar</button>
        <button>Criar conta</button>
      </div>
    </div>
   );
}
 
export default Navbar;