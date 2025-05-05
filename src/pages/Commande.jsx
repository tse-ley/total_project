import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext'; // Import useCart

const Commande = () => {
  const { cartItems, removeFromCart, getCartTotal } = useCart(); // Use CartContext functions

  return (
    <div className="commande-container">
      <Container>
        <h1 className="page-title mb-5">Votre Commande</h1>

        {cartItems.length === 0 ? (
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="text-center shadow-sm p-5">
                <Card.Body>
                  <i className="bi bi-cart-x" style={{ fontSize: '3rem', color: '#6c757d' }}></i>
                  <h4 className="mt-3">Votre panier est vide</h4>
                  <p className="text-muted">Ajoutez des articles depuis le menu pour commencer votre commande.</p>
                  <Button variant="outline-dark" href="/menu" className="mt-3">
                    Voir le Menu
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            {/* Cart Items */}
            <Col md={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5 className="mb-4">Articles dans votre panier</h5>
                  <ListGroup variant="flush">
                    {cartItems.map((item) => (
                      <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-0">{item.name}</h6>
                          <small className="text-muted">{item.description}</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="me-3">{item.quantity} × {item.price.toFixed(2)} €</span>
                          <Button
                            variant="link"
                            className="text-danger p-0"
                            onClick={() => removeFromCart(item.id)} // Remove item from cart
                          >
                            <i className="bi bi-trash"></i>
                          </Button>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Order Summary */}
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5 className="mb-3">Résumé de la commande</h5>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      <span>Total</span>
                      <strong>{getCartTotal().toFixed(2)} €</strong>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="d-grid mt-4">
                    <Button variant="dark" size="lg" className="rounded-1">
                      Passer la commande
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Commande;