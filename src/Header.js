import React from 'react';
import './Header.css';

const  Header = () =>{
  return(
    <div className="wrapper">
    <header>
       <nav>
          <div className="menu-icon">
             <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
             LOGO
          </div>
          <div className="menu">
             <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Contact</a></li>
             </ul>
             <div className = "text-white text-center mt-5">
              <h3>Hey, I'm</h3>
              <h1 className = "mt-4">Franklin Liu</h1>
             </div>
          </div>
       </nav>
    </header>
 </div>
  );
}

export default Header;