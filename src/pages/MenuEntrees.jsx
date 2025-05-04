import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuEntrees = () => {
  // Sample data for entrees
  const entreesSimples = [
    {
      id: 'e1',
      name: 'Salade Verte',
      description: 'Salade fraîche avec vinaigrette maison',
      price: 5.5,
      image: '/src/assets/entree1.jpg'
    },
    {
      id: 'e2',
      name: 'Soupe Miso',
      description: 'Soupe traditionnelle japonaise au miso et tofu',
      price: 6.5,
      image: '/src/assets/entree2.jpg'
    },
    {
      id: 'e3',
      name: 'Gyoza',
      description: 'Raviolis japonais grillés (5 pièces)',
      price: 7.5,
      image: '/src/assets/entree3.jpg'
    },
    {
      id: 'e4',
      name: 'Edamame',
      description: 'Fèves de soja vapeur avec sel de mer',
      price: 5.5,
      image: '/src/assets/entree4.jpg'
    }
  ];

  const entreesSpecialesSushis = [
    {
      id: 'es1',
      name: 'Entrée/Souper Saladés et Brioches',
      description: 'Salade fraîche et brioches vapeur',
      price: 9.5,
      image: '/src/assets/entree_special1.jpg'
    },
    {
      id: 'es2',
      name: 'Tempura Mix',
      description: 'Assortiment de légumes et crevettes en tempura',
      price: 12.0,
      image: '/src/assets/entree_special2.jpg'
    },
    {
      id: 'es3',
      name: 'Tartare de Saumon',
      description: 'Saumon frais coupé en dés avec avocat et sauce spéciale',
      price: 13.5,
      image: '/src/assets/entree_special3.jpg'
    }
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Entrées</h1>

        {/* Menu Navigation */}
        <Row className="mb-4">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/entrees" active>Entrées</Nav.Link>
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
                  <Nav.Link as={Link} to="/menu/desserts">Dessert</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Entrees Simples */}
        <MenuSection title="Entrées Simples" items={entreesSimples} />

        {/* Entrees Speciales */}
        <MenuSection title="Entrée Spécialités/Sushis" items={entreesSpecialesSushis} />
      </Container>
    </div>
  );
};

export default MenuEntrees;