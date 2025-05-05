import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuDessert = () => {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  const desserts = [
    {
      id: 'd1',
      name: 'Gulab Jamun',
      description: 'Boules de lait sucrées trempées dans du sirop',
      price: 5.99,
      image: '/images/gulab-jamun.jpg',
    },
    {
      id: 'd2',
      name: 'Kheer',
      description: 'Riz au lait traditionnel népalais',
      price: 4.99,
      image: '/images/kheer.jpg',
    },
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Desserts</h1>

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
                  <Nav.Link as={Link} to="/menuformulaire">Formulaires</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active>Desserts</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Menu Section */}
        <MenuSection
          title="Desserts"
          items={desserts.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
          }))}
        />
      </Container>
    </div>
  );
};

export default MenuDessert;