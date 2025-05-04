import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Accueil';
import About from './pages/APropos';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Order from './pages/Commande';
import MenuEntrees from './pages/MenuEntrees';
import MenuPlats from './pages/MenuPlats';
import MenuDessert from './pages/MenuDessert';
import MenuBoisson from './pages/MenuBoisson';
import MenuFormulaire from './pages/MenuFormulaire';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/commande" element={<  Order />} />
        <Route path="/menu/entrees" element={<MenuEntrees />} />
        <Route path="/menu/plats" element={<MenuPlats />} />
        <Route path="/menu/desserts" element={<MenuDessert />} />
        <Route path="/menu/boissons" element={<MenuBoisson />} />
        <Route path="/menu/formulaire" element={<MenuFormulaire />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;