import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MenuCard from './MenuCard';

const MenuSection = ({ title, items }) => {
  return (
    <Container className="menu-section my-4">
      <Row>
        <Col>
          <h3 className="section-title mb-4">{title}</h3>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <MenuCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuSection;