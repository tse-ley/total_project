import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row mb-3">
          {/* Logo */}
          <div className="col-md-3 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <img src={logo} alt="Restaurant Logo" style={{ height: '50px' }} />
          </div>

          {/* Opening Hours */}
          <div className="col-md-3 mb-3 mb-md-0 text-center text-md-start">
            <h5 className="fs-6 mb-2 text-white">Heures d'ouverture</h5>
            <p className="mb-1 small text-white">Mardi - Dimanche : 12H - 14h30</p>
            <p className="mb-1 small text-white">Mardi - Jeudi : 18H30 - 23H</p>
            <p className="mb-0 small text-white">Vendredi - Dimanche : 18H30 - 23H30</p>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 mb-3 mb-md-0 d-flex flex-column align-items-center">
            <h5 className="fs-6 mb-2 text-white">Suivez-nous</h5>
            <div className="d-flex">
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
          </div>

          {/* Address */}
          <div className="col-md-3 mb-3 mb-md-0 text-center text-md-end">
            <h5 className="fs-6 mb-2 text-white">Adresse</h5>
            <p className="mb-0 small text-white">2 Rue François Mouthon, 75015 Paris</p>
          </div>
        </div>

        {/* Copyright - Always at bottom */}
        <div className="row">
          <div className="col-12 text-center border-top pt-3">
            <p className="mb-0 text-white">© 2025 Sagarmatha. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;