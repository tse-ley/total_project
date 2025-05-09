import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../index.css';

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
                  <i className="bi bi-geo-alt me-2 "></i>
                  <p>2 Rue François Mouthon, 75015 Paris</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <i className="bi bi-telephone me-2 "></i>
                  <p>Phone: <a href="tel:+33145305363" className="text-dark">+33145305363</a></p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-clock me-2 "></i>
                  <p>Hours: 12:00pm - 11:00pm</p>
                </div>
                
                <div className="mt-3 border rounded overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.278824771137!2d2.2978728!3d48.8452089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67011d7ee8c0d%3A0x6d5d6e6b91ad2bc5!2s2%20Rue%20Fran%C3%A7ois%20Mouthon%2C%2075015%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1683563784157!5m2!1sen!2sus"
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
              
              {/* Right Side - Contact Form */}
              <Col md={7}>
                <div className="bg-white p-4 rounded">
                  <h6 className="text-center mb-3">--Retours / Réclamations</h6>
                  <h5 className="text-center mb-4">CONTACTEZ-NOUS</h5>
                  
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