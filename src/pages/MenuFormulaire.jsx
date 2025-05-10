import React from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import '../Menu.css';

const MenuFormulaires = () => {
  // set menus
  const formulaires = [
    {
      id: 'f1',
      name: 'Assiette Midi 13,90€',
      description: 'Avec Riz Basmati (Uniquement le midi, sauf week-end et jours fériés)',
      price: 13.90,
      entrees: [
        'Légumes Mixtes',
        'Daal'
      ],
      plats: [
        'Poulet Tikka ou Poulet Tandoori au choix',
        'Beignets Mix ',
        'Samosa Légumes'
      ],
      desserts: [
        'Dessert Gâteau Maison'
      ]
    },
    {
      id: 'f2',
      name: 'Menu Express 14,90€',
      description: "Entrées + Plats ou Plats (servi avec du riz basmati) + Dessert au choix (Uniquement le midi, sauf week-end et jours fériés)",
      price: 14.90,
      entrees: [
        'Poulet Tandoori (Cuisse de poulet marinée aux épices et grillés au four Tandoor)',
        'Vegetable Samosa (Friands farcis aux légumes et épices)',
        'Soupe Tibétaine (Potage à la tomates fraîches, oeufs et coriandre)',
        'Salade Népalaise (Concombres, Tomates, Carottes, Champignons noir et sauce sésame)'
      ],
      plats: [
        "Poulet au Curry (Filet de poulet avec une sauce traditionnelle indienne)",
        "Agneau Curry( Des cubes de Gigo d'agneau avec une sauce traditionnelle Indienne)",
        "Fish Masala (Poisson, tomates, poivrons aux épices de l'Himalaya)",
        "Daal Palak (Lentilles mijotées et épinards)"
      ],
      desserts: [
        'Dessert de chef (Yaourt maison avec une boule de Pâtisserie)',
        'Suji Halwa (Gâteau indien à la semoule ou Mango Ice-Cream)',
        'Mango Ice cream (Glace vanille avec un coulis de mangue)'
      ]
    },
    {
      id: 'f3',
      name: 'Menu Découverte 23,90€',
      description: 'Formule découverte avec entrée, plat (servi avec du riz basmati sauf raviolis) et dessert au choix (Uniquement le midi, sauf week-end et jours fériés)',
      price: 23.90,
      entrees: [
        "Seekh Kebab (Brochette d'agneau haché coriandre et épices)",
        'Motrak (Raviolis sautés aux légumes ou viande )',
        "Kukhura ko Sekuwa (Morceaux de poulet cuit et mélangé avec des épices de l'Himalaya)",
        "Daal soupe(Potage aux lentilles à la façon Indienne)"
      ],
      plats: [
        'Poulet Saag (Filet de poulet mélange avec des épinards, des épices et coriandre fraîche)',
        "Agneau Vindaloo (Des cubes de gigot d'agneau avec pommes de terre et épices)",
        "Raviolis Népalais (Raviolis à la viande ou aux légumes cuites à la vapeur)",
        "Palak Panir (Curry d'épinards haché dans des cubes de formages fait maison et crème fraîche)"
      ],
      desserts: [
        'Sho Maison(Yaourt maison avec khabshe et miel)',
        "Sorbets et Glace (Deux boules aux choix Mangue, Fruits de la Passion, Citron, Vanille, Chocolat et Noix de coco)",
        "Suji Halwa (Gâteau indien à la semoule)"
      ]
    },
    {
      id: 'f4',
      name: 'Menu Dégustation 28,90 €',
      description: "Formule dégustation avec entrée (Servis avec Nan nature / Nan Garlic / Nan fromage ou Nan Maison), plat et dessert au choix",
      price: 28.90,
      entrees: [
        'Poulet Tikka (Morceaux de poulet marinée et grillées au four Tandoor)',
        "Khasi ko Chhoila (Gigot d'agneau désossé marinée aux poivrons, ail, gingembre, oignons et épices et grillé a four Tandoor)",
        "Shabaleb (Chaussons fourrés à la viande)",
        "Baigan Bharta (Fondue de caviar d'aubergines crème fraîche)"
      ],
      plats: [
        "Crevettes au Curry (Crevettes décortiquées avec une sauce traditionnelle indienne ) ",
        "Agneau Saag (Des cubes de gigot d'agneau mélange avec des épinards, des épices et coriandre fraîche)",
        "Butter Chicken (Poulet mariné et grillé puis cuit dans la sauce au beurre, crème fraîche, et noix de cajou)",
        "Shamdre (Filet de poulet ou boeuf et légumes sautes avec riz au sauce soja et oeufs comme omelette)"
      ],
      desserts: [
        'à la carte'
      ]
    }
  ];
  
  // Render a single formulaire card
  // Helper function to format menu items with descriptions
  const formatMenuItem = (item) => {
    const parts = item.split(/\(([^)]+)\)/);
    if (parts.length === 1) return item;
    
    return (
      <>
        {parts[0]}
        {parts[1] && <span className="menu-description">({parts[1]})</span>}
      </>
    );
  };

  const renderFormulaireCard = (formulaire) => {
    return (
      <Card className="formulaire-card mb-4" key={formulaire.id}>
        <Card.Body>
          <Card.Title className="formulaire-title">{formulaire.name}</Card.Title>
          <Card.Text>{formulaire.description}</Card.Text>
          
          <Row className="mt-4">
            <Col md={4}>
              <h5 className="mb-3">ENTRÉES AU CHOIX</h5>
              <ul className="list-unstyled">
                {formulaire.entrees.map((entree, index) => (
                  <li key={`entree-${index}`} className="mb-2">• {formatMenuItem(entree)}</li>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="mb-3">PLATS AU CHOIX</h5>
              <ul className="list-unstyled">
                {formulaire.plats.map((plat, index) => (
                  <li key={`plat-${index}`} className="mb-2">• {formatMenuItem(plat)}</li>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="mb-3">DESSERT AU CHOIX</h5>
              <ul className="list-unstyled">
                {formulaire.desserts.map((dessert, index) => (
                  <li key={`dessert-${index}`} className="mb-2">• {formatMenuItem(dessert)}</li>
                ))}
              </ul>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="text-end">
              <CartButton 
                item={{
                  id: formulaire.id,
                  name: formulaire.name,
                  price: formulaire.price
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Formulaires</h1>

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
                  <Nav.Link active>Formulaires</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menudessert">Desserts</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Formulaires content */}
        <Row>
          <Col>
            {formulaires.map(formulaire => renderFormulaireCard(formulaire))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuFormulaires;
