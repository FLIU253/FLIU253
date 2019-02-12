import React from 'react';
import './Footer.css';

const Footer = () =>{
  return(
    <div>
      <footer className="footer">
      <h1 className="pt-4">CONTACT</h1>
        <div className="container">
        <div className="row p-5">
        <div className="col-3"></div>
        <div className="col-6">
        <a href="/"><i className="fab fa-facebook-square fa-3x p-3"></i></a>
        <a href="/"><i className="fab fa-instagram fa-3x p-3"></i></a>
        <a href="/"><i className="fab fa-linkedin fa-3x p-3"></i></a>
        <a href="/"><i className="fab fa-github-square fa-3x p-3"></i></a>
        <a href="/"><i className="fas fa-envelope-square fa-3x p-3"></i></a>
        </div>
        <div className="col-3"></div>
        </div>
        </div>
      </footer>
      <div className="copyright">
      <div className="footer-copyright text-center py-3 copy-text p-4">Franklin Liu © 2018 Copyright
    </div>
      </div>
    </div>
  );
}

export default Footer;