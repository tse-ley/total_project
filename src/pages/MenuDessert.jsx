import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuDesserts = () => {
  // Sample data for desserts
  const desserts = [
    {
      id: 'd1',
      name: 'Mochi Glacé',
      description: 'Pâtisserie japonaise à base de riz gluant fourré de crème glacée (3 pièces)',
      price: 6.50,
      image: '/src/assets/dessert1.jpg'
    },
    {
      id: 'd2',
      name: 'Dorayaki',
      description: 'Pâtisserie japonaise composée de deux pancakes fourrés à la pâte de haricot rouge',
      price: 5.50,
      image: '/src/assets/dessert2.jpg'
    },
    {
      id: 'd3',
      name: 'Crème Brûlée au Thé Matcha',
      description: 'Crème brûlée parfumée au thé matcha avec caramel croustillant',
      price: 7.00,
      image: '/src/assets/dessert3.jpg'
    },
    {
      id: 'd4',
      name: 'Taiyaki',
      description: 'Gâteau japonais en forme de poisson fourré à la crème pâtissière',
      price: 5.00,
      image: '/src/assets/dessert4.jpg'
    }
  ];

  const dessertsAuChoix = [
    {
      id: 'dc1',
      name: 'Dessert au Choix',
      description: 'Choisissez parmi notre sélection de desserts du jour',
      price: 6.50,
      image: '/src/assets/dessert_choice1.jpg'
    },
    {
      id: 'dc2',
      name: 'Assortiment de Mochis',
      description: 'Assortiment de mochis avec différentes saveurs (5 pièces)',
      price: 8.00,
      image: '/src/assets/dessert_choice2.jpg'
    },
    {
      id: 'dc3',
      name: 'Fruits Frais de Saison',
      description: 'Sélection de fruits frais de saison avec coulis de fruits rouges',
      price: 6.00,
      image: '/src/assets/dessert_choice3.jpg'
    }
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Desserts</h1>

        {/* Menu Navigation */}
        <Row className="mb-4">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/entrees">Entrées</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/boissons">Boissons</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/plats">Plats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/formulaires">Formulaires</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/desserts" active>Dessert</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Desserts sections */}
        <MenuSection title="Desserts" items={desserts} />
        <MenuSection title="Dessert au Choix" items={dessertsAuChoix} />
      </Container>
    </div>
  );
};

export default MenuDesserts;