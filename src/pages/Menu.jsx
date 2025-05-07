import React from 'react';
import { Container, Row, Col, Nav, Tab, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import '../Menu.css'; 
import specialite1 from '../assets/momo.jpg';
import specialite2 from '../assets/momo2.jpg';
import specialite3 from '../assets/thali1.jpg';

const Menu = () => {
  const { addToCart } = useCart(); 

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
    },
    {
      id: 's4',
      name: 'Spécialité 4',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    },
    {
      id: 's5',
      name: 'Spécialité 5',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    },
    {
      id: 's5',
      name: 'Spécialité 6',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    }
  ];

  // Entrees data from MenuEntrees.jsx
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

  // Function to render menu items
  const renderMenuItems = (items) => {
    return (
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
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
                  <button
                    className="btn btn-sm add-to-cart"
                    onClick={() => addToCart(item)} // Add item to cart
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title mb-5">Le Goût de Sagarmatha</h1>
        
        {/* Featured Items */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Nos plats populaires</h3>
            <Carousel indicators={false} interval={null}>
              {specialites.reduce((rows, item, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(item);
                return rows;
              }, []).map((row, rowIndex) => (
                <Carousel.Item key={rowIndex}>
                  <Row>
                    {row.map((item) => (
                      <Col md={4} key={item.id}>
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
                              <button
                                className="btn btn-sm add-to-cart"
                                onClick={() => addToCart(item)} // Add item to cart
                              >
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
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
                  <Nav.Link active>Entrées</Nav.Link>
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
                  <Nav.Link as={Link} to="/menudessert">Desserts</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Entrées Simples Section */}
        <Row className="mb-5">
          <Col>
            <h3 className="section-title mb-4">Entrées Simples</h3>
            {renderMenuItems(entreesSimples)}
          </Col>
        </Row>

        {/* Entrées Spéciales/Sushis Section */}
        <Row className="mb-5">
          <Col>
            <h3 className="section-title mb-4">Entrée Spécialités/Sushis</h3>
            {renderMenuItems(entreesSpecialesSushis)}
          </Col>
        </Row>

        
      </Container>
    </div>
  );
};

export default Menu;