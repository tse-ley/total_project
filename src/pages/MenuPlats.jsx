import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuPlats = () => {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  const platsTraditionnels = [
    {
      id: 'p1',
      name: 'Dal Bhat',
      description: 'Plat traditionnel népalais avec riz et lentilles',
      price: 12.99,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'p2',
      name: 'Momo',
      description: 'Raviolis népalais farcis et cuits à la vapeur',
      price: 9.99,
      image: '/images/momo.jpg',
    },
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Plats</h1>

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
                  <Nav.Link active>Plats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menuformulaire">Formulaires</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menudessert">Desserts</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        <MenuSection
          title="Plats Traditionnels"
          items={platsTraditionnels.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
          }))}
        />
      </Container>
    </div>
  );
};

export default MenuPlats;