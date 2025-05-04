import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const CartButton = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <Button 
      variant="outline-primary" 
      size="sm" 
      className="add-to-cart"
      onClick={() => addToCart(item)}
    >
      Ajouter au panier
    </Button>
  );
};

export default CartButton;