import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../index.css';
import mapImage from '../assets/maps.png';

const Contact = () => {
  return (
    <Container fluid className="py-4 flex-grow-1">
        <Row className="justify-content-center">
          <Col md={10}>
            <Row>
              {/* Left Side - Contact Information */}
              <Col md={5} className="mb-4">
                <h5 className="mb-4">Find us at</h5>
                <div className="d-flex align-items-start mb-2">
                  <i className="bi bi-geo-alt me-2 mt-1"></i>
                  <p>2 Rue François Mouthon, 75015 Paris</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <i className="bi bi-telephone me-2 mt-1"></i>
                  <p>Phone: <a href="tel:+33904260113" className="text-dark">+33 904260113</a></p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-clock me-2 mt-1"></i>
                  <p>Hours: 12:00-11:00pm</p>
                </div>
                
                {/* Map Image */}
                <div className="mt-3">
                  <img 
                    src={mapImage} 
                    alt="Restaurant Location Map" 
                    className="img-fluid border"
                    style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
              </Col>
              
              {/* Right Side - Contact Form */}
              <Col md={7}>
                <div className="bg-white p-4 rounded">
                  <h6 className="text-center mb-3">--Feedback / Complaints</h6>
                  <h5 className="text-center mb-4">REACH US</h5>
                  
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        style={{ backgroundColor: '#F8F9FA' }}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        style={{ backgroundColor: '#F8F9FA' }}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Subject" 
                        style={{ backgroundColor: '#F8F9FA' }}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Message" 
                        style={{ backgroundColor: '#F8F9FA' }}
                      />
                    </Form.Group>
                    
                    <div className="d-flex justify-content-center">
                      <Button 
                        variant="dark" 
                        type="submit" 
                        className="px-4"
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default Contact;