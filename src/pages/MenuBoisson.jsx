import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import MenuSection from '../components/MenuSection'; // Adjust path as needed

const MenuBoisson = () => {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  // Test data (replace with your arrays after confirming it works)
  const boissonsClassiques = [
    {
      id: 'b1',
      name: 'Coca-Cola',
      description: 'Classique soda américain (33cl)',
      price: 3.50,
      image: '/images/coca-cola.jpg', // Optional
    },
    {
      id: 'b2',
      name: 'Pepsi',
      description: 'Soda rafraîchissant (33cl)',
      price: 3.50,
      image: '/images/pepsi.jpg', // Optional
    },
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Boissons</h1>

        {/* Navigation Tabs */}
        <Row className="mb-5">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu">Entrées</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active>Boissons</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menuplats">Plats</Nav.Link>
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

        {/* Menu Section */}
        <MenuSection
          title="Boissons Classiques"
          items={boissonsClassiques.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
          }))}
        />
        {/* Add other sections here if needed */}
      </Container>
    </div>
  );
};

export default MenuBoisson;