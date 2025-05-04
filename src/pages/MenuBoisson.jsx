import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuBoissons = () => {
  // Sample data for drinks
  const boissonsClassiques = [
    {
      id: 'b1',
      name: 'Coca-Cola',
      description: 'Classique soda américain (33cl)',
      price: 3.50,
    },
    {
      id: 'b2',
      name: 'Eau minérale',
      description: 'Eau minérale plate ou gazeuse (50cl)',
      price: 3.00,
    },
    {
      id: 'b3',
      name: 'Jus d\'orange',
      description: 'Jus d\'orange pressé frais (25cl)',
      price: 4.50,
    },
    {
      id: 'b4',
      name: 'Limonade',
      description: 'Limonade maison (33cl)',
      price: 4.00,
    }
  ];

  const boissonsThes = [
    {
      id: 'bt1',
      name: 'Thé vert japonais',
      description: 'Thé vert traditionnel japonais',
      price: 4.00,
    },
    {
      id: 'bt2',
      name: 'Thé au jasmin',
      description: 'Thé parfumé aux fleurs de jasmin',
      price: 4.50,
    },
    {
      id: 'bt3',
      name: 'Matcha latte',
      description: 'Boisson à base de matcha et de lait',
      price: 5.50,
    },
    {
      id: 'bt4',
      name: 'Hojicha',
      description: 'Thé vert japonais torréfié',
      price: 4.50,
    }
  ];

  const cocktails = [
    {
      id: 'c1',
      name: 'Saké Mojito',
      description: 'Cocktail à base de saké, menthe fraîche et citron vert',
      price: 8.50,
    },
    {
      id: 'c2',
      name: 'Whisky Japonais',
      description: 'Whisky japonais premium servi sur glace',
      price: 9.50,
    },
    {
      id: 'c3',
      name: 'Yuzu Fizz',
      description: 'Cocktail pétillant au yuzu et vodka',
      price: 8.00,
    },
    {
      id: 'c4',
      name: 'Saké Tonic',
      description: 'Saké avec tonic et citron',
      price: 7.50,
    }
  ];

  const sakeBieres = [
    {
      id: 's1',
      name: 'Saké chaud',
      description: 'Saké traditionnel servi chaud (15cl)',
      price: 6.50,
    },
    {
      id: 's2',
      name: 'Saké froid premium',
      description: 'Saké premium servi froid (15cl)',
      price: 8.00,
    },
    {
      id: 's3',
      name: 'Bière Asahi',
      description: 'Bière japonaise (33cl)',
      price: 5.50,
    },
    {
      id: 's4',
      name: 'Bière Kirin',
      description: 'Bière japonaise légère (33cl)',
      price: 5.50,
    }
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Boissons</h1>

        {/* Menu Navigation */}
        <Row className="mb-4">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/entrees">Entrées</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/boissons" active>Boissons</Nav.Link>
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

        {/* Drinks sections */}
        <MenuSection title="Boissons Classiques" items={boissonsClassiques} />
        <MenuSection title="Thés" items={boissonsThes} />
        <MenuSection title="Cocktails" items={cocktails} />
        <MenuSection title="Saké & Bières" items={sakeBieres} />
      </Container>
    </div>
  );
};

export default MenuBoissons;