import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuPlats = () => {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  const platsPoulet = [
    {
      id: 'p1',
      name: 'Poulet au Curry',
      description: 'Filet de poulet avec une sauce traditionnelle indienne',
      price: 13.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'p2',
      name: 'Poulet Vindaloo',
      description: 'Filet de poulet avec pommes des terre et épices (moyennement relevé)',
      price: 13.90,
      image: '/images/momo.jpg',
    },
    {
      id: 'p3',
      name: 'Poulet Saag',
      description: 'Filet de poulet mélange avec des épinards, des épices et Coriandre fraîche',
      price: 13.90,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'p4',
      name: 'Poulet Madras',
      description: 'Filet de poulet avec des graines de moutarde (plat relevé)',
      price: 13.90,
      image: '/images/momo.jpg',
    },
    {
      id: 'p5',
      name: 'Butter Chicken',
      description: 'Poulet mariné et grillé puis cuit dans la sauce au beurre, crème fraîche, et noix de cajou',
      price: 15.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'p6',
      name: 'Poulet Tikka Masala',
      description: 'Morceaux de poulet marinés et grillé, mélangés avec poivrons, tomates puis sautes dans une sauce avec ognions, gingembre, corriandre et épices',
      price: 15.50,
      image: '/images/momo.jpg',
    },
    {
      id: 'p7',
      name: 'Poulet Korma',
      description: 'Filet de poulet en sauce noix de cajou, raisin et crème fraîche',
      price: 15.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'p8',
      name: 'Chicken Chilly (Spécialité du chef Népalais)',
      description: "Poulet grillés et sauté avec poivrons, oignons, Tomates et épices de l'Himalaya",
      price: 17.90,
      image: '/images/momo.jpg',
    }
  ];

  const platsAgneau = [
    {
      id: 'a1',
      name: 'Agneau Curry',
      description: "Des cubes de Gigot d'agneau avec une sauce traditionnelle Indienne",
      price: 13.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'a2',
      name: 'Agneau Vindaloo',
      description: "Des cubes de gigot d'agneau avec pommes de terre et épices (moyennement relevé)",
      price: 13.90,
      image: '/images/momo.jpg',
    },
    {
      id: 'a3',
      name: 'Agneau Saag',
      description: "Des cubes de gigot d'agneau mélange avec des épinards, des épices et coriandre fraîche",
      price: 13.90,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'a4',
      name: 'Agneau Korma',
      description: "Gigot d'agneau en sauce, noix de cajou, raisin et crème fraîche",
      price: 13.90,
      image: '/images/momo.jpg',
    },
    {
      id: 'a5',
      name: 'Agneau Bharta',
      description: "Des cubes de gigot d'agneau mijoté dans une sauce spéciale au caviar d'aubergines",
      price: 15.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'a6',
      name: 'Agneau Madras',
      description: "Curry de gigot d'agneau avec des graines de moutarde ( plat relevé )",
      price: 15.50,
      image: '/images/momo.jpg',
    },
    {
      id: 'a7',
      name: 'Royal Agneau Jalfrézi (Spécialité du Chef)',
      description: "Gigot d'agneau marinées et Grillés, sauté dans une sauce poivrons, oignons, tomates, gingembre et épices de l'Himalaya",
      price: 15.50,
      image: '/images/dal-bhat.jpg',
    }
  ];

  const platsMer = [
    {
      id: 'm1',
      name: 'Fish Curry',
      description: "Poisson servi avec une sauce traditionnelle indienne",
      price: 13.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'm2',
      name: 'Fish Masala',
      description: "Poisson, tomates, poivrons aux épices l'Himalaya",
      price: 15.50,
      image: '/images/momo.jpg',
    },
    {
      id: 'm3',
      name: 'Fish Bengali',
      description: "Poisson en sauce avec de la menthe, tomates et noix de coco",
      price: 15.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'm4',
      name: 'Jhinga Curry',
      description: "Crevettes décortiquées servi avec une sauce traditionnelle Indienne",
      price: 15.50,
      image: '/images/momo.jpg',
    },
    {
      id: 'm5',
      name: 'Jhinga Masala',
      description: "Crevettes décortiquées tomates, poivrons aux épices verts de l'Himalaya",
      price: 15.90,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'm6',
      name: 'Jhinga Korma',
      description: "Crevettes décortiquées avec raisins sec et noix de cajou, du lait de noix de coco et crème fraîche",
      price: 15.90,
      image: '/images/momo.jpg',
    },
    {
      id: 'm7',
      name: 'Gambas Curry',
      description: "Gambas avec une sauce traditionnelle indienne",
      price: 19.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'm8',
      name: 'Gambas Masala',
      description: "Gambas décortiqués tomates ,poivrons aux épices verts de l'Himalaya",
      price: 21.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'm9',
      name: 'Gambas Maison',
      description: "Gambas grillé et cuite dans du lait de noix de coco aux épices verts de l'Himalaya",
      price: 23.90,
      image: '/images/dal-bhat.jpg',
    }
  ];

  const platsDaalbhat = [
    {
      id: 'd1',
      name: 'Plat Traditionnel Népalais (Végétable)',
      description: "servi avec du riz basmati, curry de lentilles, curry de d'épinards et curry de mix légumes",
      price: 18.90,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'd2',
      name: 'Plat Traditionnel Népalais (Poulet)',
      description: "servi avec du riz basmati, curry de lentilles, curry de d'épinards et curry de filet de poulet",
      price: 19.90,
      image: '/images/momo.jpg',
    },
    {
      id: 'a3',
      name: 'Plat Traditionnel Népalais (Agneau) ',
      description: "servi avec du riz basmati, curry de lentilles, curry de d'épinards et curry d'agneau",
      price: 20.90,
      image: '/images/dal-bhat.jpg',
    }
    
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Plats</h1>

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
                  <Nav.Link active>Plats</Nav.Link>
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

        <MenuSection
          title="Plats Poulet"
          items={platsPoulet.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
          }))}
        />

        <MenuSection
                  title="Plats Agneau"
                  items={platsAgneau.map((item) => ({
                    ...item,
                    onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
                  }))}
                />

        <MenuSection
                          title="Plats Fruits de Mer"
                          items={platsMer.map((item) => ({
                            ...item,
                            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
                          }))}
                        />

        <MenuSection
                          title="Plats Daalbhat (Plat traditionnel Népalais)"
                          items={platsDaalbhat.map((item) => ({
                            ...item,
                            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
                          }))}
                        />
        
      </Container>
    </div>
  );
};

export default MenuPlats;