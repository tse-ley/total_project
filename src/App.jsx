import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Commande from './pages/Commande';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/accueil">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/a-propos">À Propos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/commande">Commande</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );

  
}