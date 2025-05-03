import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Accueil';
import About from './pages/APropos';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Order from './pages/Commande';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<  Order />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;