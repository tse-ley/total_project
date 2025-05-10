import { Link } from 'react-router-dom';
import logo from '../assets/logo/image.jpg';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-md-3 mb-3 mb-md-0 d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-md-start">
            <img src={logo} alt="Restaurant Logo" style={{ height: '50px' }} />
            <p className="mt-2 mb-0 text-white lead text-center text-md-start" style={{ fontSize: '0.9rem', maxWidth: '250px' }}>
              Sagarmatha : Une Odyssée des Sens au Cœur de l'Himalaya
            </p>
          </div>
          
          {/* Opening Hours */}
          <div className="col-md-3 mb-3 mb-md-0 text-center text-md-start">
            <h5 className="fs-6 mb-2 text-white fw-bold">Heures d'ouverture</h5>
            <div className="d-flex flex-column gap-1">
              <p className="mb-0 small text-white">Mardi - Samedi :<br />12H - 14H30 / 18H30 - 23H</p>
              <p className="mb-0 small text-white">Vendredi - Dimanche :<br />12H - 14H30 / 18H30 - 23H15</p>
              <p className="mb-0 small text-white">Lundi : Fermé</p>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="col-md-3 mb-3 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <h5 className="fs-6 mb-2 text-white fw-bold">Suivez-nous</h5>
            <div className="d-flex mt-1">
              <a href="https://www.facebook.com/sagarmatha75015/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white me-3">
                <i className="bi bi-facebook fs-4" aria-hidden="true"></i>
                <span className="visually-hidden">Facebook</span>
              </a>
              <a href="https://www.tiktok.com/@sagarmatharestaurant1" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white me-3">
                <i className="bi bi-tiktok fs-4" aria-hidden="true"></i>
                <span className="visually-hidden">TikTok</span>
              </a>
              <a href="https://www.instagram.com/sagarmatha75015/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-white">
                <i className="bi bi-instagram fs-4" aria-hidden="true"></i>
                <span className="visually-hidden">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Address */}
          <div className="col-md-3 text-center text-md-start">
            <h5 className="fs-6 mb-2 text-white fw-bold">Adresse</h5>
            <p className="mb-0 small text-white">2 Rue François Mouthon, 75015 Paris</p>
          </div>
        </div>
        
        {/* Copyright - Always at bottom */}
        <div className="row">
          <div className="col-12 text-center border-top mt-3 pt-3">
            <p className="mb-0 text-white">© 2025 Sagarmatha. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;