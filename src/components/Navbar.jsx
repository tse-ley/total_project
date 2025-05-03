import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-warning shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
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
              <Link to="/" className="nav-link text-dark" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/a-propos" className="nav-link text-dark" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link text-dark" onClick={() => setIsMenuOpen(false)}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reservation" className="nav-link text-dark" onClick={() => setIsMenuOpen(false)}>
                Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/commercia" className="nav-link text-dark" onClick={() => setIsMenuOpen(false)}>
                Commercia
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark" onClick={() => setIsMenuOpen(false)}>
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
