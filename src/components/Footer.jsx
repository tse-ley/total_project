import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Logo and Info */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <img src={logo} alt="Restaurant Logo" style={{ height: '50px' }} className="me-3" />
            <div>
              <p className="mb-1">Heures: 12:00 - 23:00</p>
              <p className="mb-0">Adresse: 123 Rue Example, Ville</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-facebook fs-4" aria-hidden="true"></i>
              <span className="visually-hidden">Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-twitter fs-4" aria-hidden="true"></i>
              <span className="visually-hidden">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-instagram fs-4" aria-hidden="true"></i>
              <span className="visually-hidden">Instagram</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <p className="mb-0">© 2025 Sagarmatha. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
