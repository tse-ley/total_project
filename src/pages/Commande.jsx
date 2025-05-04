import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import chickenMenuImage from '../assets/momo.jpg'; // You'll need to add this image

const Commande = () => {
  // Sample basket items (in a real app these would come from state management)
  const [basketItems, setBasketItems] = useState([
    { id: 1, name: 'Chicken Menu', price: 12, quantity: 1, spicy: true },
    { id: 2, name: 'Chicken Menu', price: 9, quantity: 1, spicy: true },
    { id: 3, name: 'Chicken Menu', price: 12, quantity: 1, spicy: true },
    { id: 4, name: 'Chicken Menu', price: 12, quantity: 1, spicy: true },
  ]);

  // Calculate total
  const totalAmount = basketItems.reduce((total, item) => total + item.price, 0);

  // Handle item removal
  const removeItem = (id) => {
    setBasketItems(basketItems.filter(item => item.id !== id));
  };

  return (
    <Container fluid className="py-4 flex-grow-1" style={{ backgroundColor: '#F8C78B', minHeight: '100vh' }}>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row>
              {/* Left Side - Basket */}
              <Col md={7} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Body>
                    <h5 className="mb-4">Your basket</h5>
                    
                    {basketItems.map((item) => (
                      <div key={item.id} className="mb-4">
                        <Row className="align-items-center">
                          <Col xs={3}>
                            <img 
                              src={chickenMenuImage} 
                              alt={item.name} 
                              className="img-fluid rounded"
                              style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                            />
                          </Col>
                          <Col xs={5}>
                            <p className="mb-0 fw-bold">{item.name}</p>
                            <small>Qty: {item.quantity}</small><br />
                            <small className="text-muted">with {item.spicy ? 'spicy' : 'mild'}</small>
                          </Col>
                          <Col xs={2} className="text-end">
                            <p className="mb-0">${item.price}</p>
                          </Col>
                          <Col xs={2} className="text-end">
                            <Button 
                              variant="link" 
                              className="p-0 text-dark"
                              onClick={() => removeItem(item.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </Col>
                        </Row>
                        <hr className="mt-3" />
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
              
              {/* Right Side - Order Summary */}
              <Col md={5}>
                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <h5 className="mb-3">To Proceed.</h5>
                    
                    <ListGroup variant="flush">
                      {basketItems.map((item, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                          <span>{item.name}</span>
                          <span>${item.price}</span>
                        </ListGroup.Item>
                      ))}
                      
                      <ListGroup.Item className="d-flex justify-content-between align-items-center border-top mt-2 px-0 pt-3">
                        <strong>Total</strong>
                        <strong>${totalAmount}</strong>
                      </ListGroup.Item>
                    </ListGroup>
                    
                    <div className="d-grid mt-4">
                      <Button 
                        variant="dark" 
                        size="lg" 
                        className="rounded-1"
                      >
                        Valider
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default Commande;