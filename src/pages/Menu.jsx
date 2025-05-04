import React from 'react';
import { Container, Row, Col, Nav, Tab, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Menu.css'; // Import your CSS file for styling

// Import sample images
import specialite1 from '../assets/momo.jpg';
import specialite2 from '../assets/momo2.jpg';
import specialite3 from '../assets/thali1.jpg';

const Menu = () => {
  // Sample specialties for the carousel
  const specialites = [
    {
      id: 's1',
      name: 'Spécialité 1',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 14.95,
      image: specialite1
    },
    {
      id: 's2',
      name: 'Spécialité 2',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 16.95,
      image: specialite2
    },
    {
      id: 's3',
      name: 'Spécialité 3',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    }
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title mb-5">The taste of Sagemusha</h1>

        {/* Specialites Carousel */}
        <h2 className="specialites-title">Spécialités</h2>
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Carousel className="specialites-carousel">
              {[0, 3, 6].map((startIndex, idx) => (
                <Carousel.Item key={idx}>
                  <Row>
                    {[0, 1, 2].map((offset) => {
                      const specialite = specialites[(startIndex + offset) % specialites.length];
                      return (
                        <Col md={4} key={specialite.id}>
                          <div className="menu-item mb-3">
                            <img 
                              src={specialite.image} 
                              alt={specialite.name} 
                              className="menu-item-image w-100"
                            />
                            <div className="p-3">
                              <h5>{specialite.name}</h5>
                              <p className="menu-description small">{specialite.description}</p>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="menu-price">{specialite.price.toFixed(2)} €</span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Menu Categories */}
        <Row className="mb-5">
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
                  <Nav.Link as={Link} to="/menu/desserts">Dessert</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Featured Items */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Nos plats populaires</h3>
            <Row xs={1} md={3} className="g-4">
              {specialites.map((item) => (
                <Col key={item.id}>
                  <div className="menu-item">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="menu-item-image w-100"
                    />
                    <div className="p-3">
                      <h5>{item.name}</h5>
                      <p className="menu-description small">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="menu-price">{item.price.toFixed(2)} €</span>
                        <button className="btn btn-sm add-to-cart">Ajouter au panier</button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="text-center my-5">
          <Col>
            <p className="text-muted">Lorem ipsum</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;