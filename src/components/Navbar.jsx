import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/image.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md shadow-sm" style={{ backgroundColor: '#F8C78B' }}>
      <div className="container">
        <Link to="accueil" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Restaurant Logo" height="48" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Accueil" className="nav-link fw-bold " onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link fw-bold " onClick={() => setIsMenuOpen(false)}>
                À Propos
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Menu" className="nav-link fw-bold " onClick={() => setIsMenuOpen(false)}>
                Menu
              </Link>
            </li>

            {/*<li className="nav-item">
              <Link to="/reservation" className="nav-link fw-bold " onClick={() => setIsMenuOpen(false)}>
                Reservation
              </Link>
            </li>*/}

            <li className="nav-item">
              <Link to="/commande" className="nav-link fw-bold " onClick={() => setIsMenuOpen(false)}>
                Commande
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link fw-bold " onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;