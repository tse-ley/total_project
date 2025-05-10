import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuDessert = () => {
  const { addToCart } = useCart(); // Use the addToCart function from the context

  const desserts = [
    {
      id: 'd1',
      name: 'Sho Maison',
      description: ' Yaourt maison avec khabshe (Cookie Tibétain) et miel',
      price: 6.0,
      image: '/images/gulab-jamun.jpg',
    },
    {
      id: 'd2',
      name: 'Suji Halwa',
      description: 'Gâteau indien à la semoule',
      price: 6.0,
      image: '/images/kheer.jpg',
    },
    {
      id: 'd3',
      name: 'Gulab Jamun',
      description: 'Pâtisserie indienne fait maison avec sirop rose et miel',
      price: 7.0,
      image: '/images/gulab-jamun.jpg',
    },
    {
      id: 'd4',
      name: 'Sorbets et Glace',
      description: 'Deux boules aux choix : Mangue, Fruits de la Passion, Citron, Vanille, Chocolat et Noix de coco',
      price: 7.0,
      image: '/images/kheer.jpg',
    },
    {
      id: 'd5',
      name: 'Mango Ice-Cream',
      description: 'Glace vanille avec un coulis de mangue',
      price: 7.90,
      image: '/images/gulab-jamun.jpg',
    },
    {
      id: 'd6',
      name: 'Salade de Fruits ',
      description: 'Frais Fruits frais assaisonnés',
      price: 7.90,
      image: '/images/kheer.jpg',
    },
    {
      id: 'd7',
      name: 'Dessert Sagarmatha',
      description: 'Mélange de fruits frais et des fruits secs dans du fromage blanc',
      price: 7.90,
      image: '/images/gulab-jamun.jpg',
    },
    {
      id: 'd8',
      name: 'Kulfi',
      description: 'Glace traditionnelle à la pistache fait maison',
      price: 7.90,
      image: '/images/kheer.jpg',
    },
    {
      id: 'd9',
      name: 'Dessert de chef Yaourt ',
      description: 'maison avec une boule de Pâtisserie',
      price: 7.90,
      image: '/images/gulab-jamun.jpg',
    },
    {
      id: 'd10',
      name: 'Dame Blanche',
      description: '2 boules de vanille, 1 boule chocolat, caramel et chantilly',
      price: 8.90,
      image: '/images/kheer.jpg',
    },
    {
      id: 'd11',
      name: 'Chocolat Liégeois',
      description: 'Chocolat et ses morceaux, vanille intense de madagascar, sauce dessert chocolat et copeaux de chocolat noir',
      price: 8.90,
      image: '/images/gulab-jamun.jpg',
    },
    {
      id: 'd12',
      name: 'Café Liégeois',
      description: 'Café pur arabica, vanille intense de madagascar, sauce dessert chocolat et crème sucrée',
      price: 8.90,
      image: '/images/kheer.jpg',
    },
    {
      id: 'd13',
      name: 'Banana Split',
      description: 'Vanille, fraise, chocolat, sauce dessert chocolat, banane fraîche et chantilly',
      price: 8.90,
      image: '/images/gulab-jamun.jpg',
    }
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Desserts</h1>

        {/* Navigation Tabs */}
        <Row className="mb-5">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu">Entrées</Nav.Link>
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
                  <Nav.Link active>Desserts</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Menu Section */}
        <MenuSection
          title="Desserts"
          items={desserts.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
          }))}
        />
      </Container>
    </div>
  );
};

export default MenuDessert;