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

  const platsBiryani = [
    {
      id: 'b1',
      name: 'Biryani Légumes',
      description: "Le royal biryani est un plat traditionnelle Indien préparé avec du riz basmati parfumé, différentes épices, des raisins sec, des noix de cajou, dans une sauce curry avec légumes.",
      price: 14.90,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'b2',
      name: 'Biryani Poulet',
      description: "Le royal biryani est un plat traditionnelle Indien préparé avec du riz basmati parfumé, différentes épices, des raisins sec, des noix de cajou, dans une sauce curry avec poulet.",
      price: 15.50,
      image: '/images/momo.jpg',
    },
    {
      id: 'b3',
      name: 'Biryani Agneau ',
      description: "Le royal biryani est un plat traditionnelle Indien préparé avec du riz basmati parfumé, différentes épices, des raisins sec, des noix de cajou, dans une sauce curry avec agneau.",
      price: 17.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'b4',
      name: 'Biryani Crevettes',
      description: "Le royal biryani est un plat traditionnelle Indien préparé avec du riz basmati parfumé, différentes épices, des raisins sec, des noix de cajou, dans une sauce curry avec crevettes.",
      price: 17.90,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'b5',
      name: 'Biryani Maison',
      description: "Le royal biryani est un plat traditionnelle Indien préparé avec du riz basmati parfumé, différentes épices, des raisins sec, des noix de cajou, dans une sauce curry avec agneau, poulet et crevettes.",
      price: 19.00,
      image: '/images/dal-bhat.jpg',
    }
    
  ];

  const legumesAccompagnements = [
    {
      id: 'l1',
      name: 'Palak Panir',
      description: "Curry d'épinards haché dans des cubes de formages fait maison et crème fraîche",
      price: 11.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'l2',
      name: 'Aloo Matar',
      description: "Pommes de terre et petits pois avec sauce curry",
      price: 11.50,
      image: '/images/momo.jpg',
    },
    {
      id: 'l3',
      name: 'Daal ',
      description: "Curry de lentilles aromatisé avec ail, gingembre et coriandre",
      price: 10.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'l4',
      name: 'Baigan Bharta',
      description: "Fondue de caviar d'aubergines mijotée et parfumée avec épices",
      price: 12.00,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'l5',
      name: 'Saag',
      description: "Curry d'épinards avec herbes et épices",
      price: 11.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'l6',
      name: 'Yogi Tarkari',
      description: "Curry de légumes variés assaisonnés puis sautés avec des épices",
      price: 11.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'l7',
      name: 'Daal Palak',
      description: "Lentilles mijotées et épinards",
      price: 11.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'l8',
      name: 'Vegetable Korma',
      description: "Mélanges de légumes avec sauce aux noix de cajou, pistaches, amandes et crème fraîche",
      price: 12.50,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'l9',
      name: 'Butter Panir Masala',
      description: "Fromage maison préparé avec sauce tomate et noix de cajou",
      price: 13.00,
      image: '/images/dal-bhat.jpg',
    }
     
  ];

  const rizAccompangnements = [
    {
      id: 'r1',
      name: 'Riz Nature',
      description: "Riz Basmati parfumée au vapeur.",
      price: 4.0,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'r2',
      name: 'Matar Pulao',
      description: "Riz Basmati au safran sauté avec petits pois",
      price: 5.0,
      image: '/images/momo.jpg',
    },
    {
      id: 'r3',
      name: 'Kashmiri Pulao',
      description: "Riz Basmati parfumée avec des fruits secs",
      price: 5.0,
      image: '/images/dal-bhat.jpg',
    },
    {
      id: 'r4',
      name: 'Jeera Rice',
      description: "Riz Basmati sauté au cumin",
      price: 5.0,
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
        <MenuSection
                          title="Plats Biryani"
                          items={platsBiryani.map((item) => ({
                            ...item,
                            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
                          }))}
                        /><MenuSection
                        title="Plats Biryani"
                        items={platsBiryani.map((item) => ({
                          ...item,
                          onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
                        }))}
                      />
        <MenuSection
                          title="Legumes Accompagnements"
                          items={legumesAccompagnements.map((item) => ({
                            ...item,
                            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
                          }))}
                        />
        <MenuSection
                          title="Riz Accompagnements"
                          items={rizAccompangnements.map((item) => ({
                            ...item,
                            onAddToCart: () => addToCart(item), // Pass addToCart to MenuSection
                          }))}
                        />
        
      </Container>
    </div>
  );
};

export default MenuPlats;