import React from 'react';
import { Card } from 'react-bootstrap';
import CartButton from './CartButton';

const MenuCard = ({ item }) => {
  return (
    <Card className="menu-item mb-4">
      {item.image && (
        <Card.Img variant="top" src={item.image} alt={item.name} className="menu-item-image" />
      )}
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">{item.name}</Card.Title>
          <span className="menu-price">{item.price.toFixed(2)} €</span>
        </div>
        <Card.Text className="menu-description">{item.description}</Card.Text>
        <div className="text-end">
          <CartButton item={item} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;