import React from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import '../Menu.css';

const MenuFormulaires = () => {
  // Sample data for set menus
  const formulaires = [
    {
      id: 'f1',
      name: 'Assiettte Midi 15.90€',
      description: 'Formule déjeuner avec entrée au choix, plat principal et boisson',
      price: 15.90,
      entrees: [
        'Salade verte',
        'Soupe miso',
        'Gyoza (3 pièces)'
      ],
      plats: [
        'Poulet teriyaki',
        'Bœuf sauté',
        'Tofu frit'
      ],
      desserts: [
        'Mochi glacé',
        'Dorayaki',
        'Fruits frais'
      ]
    },
    {
      id: 'f2',
      name: 'Menu Express 18.90€',
      description: 'Formule express avec entrée, plat et dessert au choix',
      price: 18.90,
      entrees: [
        'Salade japonaise',
        'Soupe miso',
        'Gyoza (3 pièces)'
      ],
      plats: [
        'Poulet teriyaki',
        'Bœuf sauté',
        'Saumon grillé'
      ],
      desserts: [
        'Mochi glacé',
        'Dorayaki',
        'Fruits frais'
      ]
    },
    {
      id: 'f3',
      name: 'Menu Dégustation 26.90€',
      description: 'Formule dégustation avec apéritif, entrée, plat et dessert au choix',
      price: 26.90,
      entrees: [
        'Assortiment de sushis (6 pièces)',
        'Tempura de crevettes',
        'Salade de wakame'
      ],
      plats: [
        'Plat du chef',
        'Poisson du jour',
        'Spécialité Hinaton'
      ],
      desserts: [
        'Assortiment de mochis',
        'Crème brûlée au matcha',
        'Glaces japonaises'
      ]
    },
    {
      id: 'f4',
      name: 'Menu Découverte 22.90€',
      description: 'Formule découverte avec entrée, plat et dessert au choix',
      price: 22.90,
      entrees: [
        'Salade de tofu',
        'Gyoza (5 pièces)',
        'Soupe miso spéciale'
      ],
      plats: [
        'Ramen au choix',
        'Donburi au choix',
        'Udon sauté'
      ],
      desserts: [
        'Taiyaki',
        'Anmitsu',
        'Mochi glacé'
      ]
    }
  ];

  // Render a single formulaire card
  const renderFormulaireCard = (formulaire) => {
    return (
      <Card className="formulaire-card mb-4" key={formulaire.id}>
        <Card.Body>
          <Card.Title className="formulaire-title">{formulaire.name}</Card.Title>
          <Card.Text>{formulaire.description}</Card.Text>
          
          <Row className="mt-4">
            <Col md={4}>
              <h5 className="mb-3">ENTRÉES AU CHOIX</h5>
              <ul className="list-unstyled">
                {formulaire.entrees.map((entree, index) => (
                  <li key={`entree-${index}`} className="mb-2">• {entree}</li>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="mb-3">PLATS AU CHOIX</h5>
              <ul className="list-unstyled">
                {formulaire.plats.map((plat, index) => (
                  <li key={`plat-${index}`} className="mb-2">• {plat}</li>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="mb-3">DESSERT AU CHOIX</h5>
              <ul className="list-unstyled">
                {formulaire.desserts.map((dessert, index) => (
                  <li key={`dessert-${index}`} className="mb-2">• {dessert}</li>
                ))}
              </ul>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="text-end">
              <CartButton 
                item={{
                  id: formulaire.id,
                  name: formulaire.name,
                  price: formulaire.price
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Formulaires</h1>

        {/* Navigation Tabs */}
        <Row className="mb-5">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu">Entrées</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menuboisson">Boissons</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menuplats">Plats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active>Formulaires</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menudessert">Desserts</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Formulaires content */}
        <Row>
          <Col>
            {formulaires.map(formulaire => renderFormulaireCard(formulaire))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuFormulaires;