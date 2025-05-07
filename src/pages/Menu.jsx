import React from 'react';
import { Container, Row, Col, Nav, Tab, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import '../Menu.css'; 
import specialite1 from '../assets/momo.jpg';
import specialite2 from '../assets/momo2.jpg';
import specialite3 from '../assets/thali1.jpg';

const Menu = () => {
  const { addToCart } = useCart(); 

  // Sample specialties for the carousel
  const specialites = [
    {
      id: 's1',
      name: 'Spécialité 1',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 14.95,
      image: specialite1
    },
    {
      id: 's2',
      name: 'Spécialité 2',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 16.95,
      image: specialite2
    },
    {
      id: 's3',
      name: 'Spécialité 3',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    },
    {
      id: 's4',
      name: 'Spécialité 4',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    },
    {
      id: 's5',
      name: 'Spécialité 5',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    },
    {
      id: 's5',
      name: 'Spécialité 6',
      description: 'Une description détaillée de notre spécialité avec les ingrédients et la préparation.',
      price: 15.95,
      image: specialite3
    }
  ];

  // Entrees data from MenuEntrees.jsx
  const entreesSimples = [
    {
      id: 'e1',
      name: 'Raita',
      description: 'Crudités émincées au yaourt faitr maison',
      price: 6.50,
      image: '/src/assets/entree1.jpg'
    },
    {
      id: 'e2',
      name: 'Salade Népalaise',
      description: 'Concombres, tomates, carottes et sauce sésame',
      price: 7.0,
      image: '/src/assets/entree2.jpg'
    },
    {
      id: 'e3',
      name: 'Daal Soupe',
      description: 'Potage aux lentilles à la façon Indien',
      price: 7.0,
      image: '/src/assets/entree3.jpg'
    },
    {
      id: 'e4',
      name: 'Soupe Tibétaine',
      description: 'Potage à la tomates fraîches, oeufs et coriandre',
      price: 7.0,
      image: '/src/assets/entree4.jpg'
    },
    {
      id: 'e5',
      name: 'Onion Bhajiya',
      description: "Beignets d'oignons",
      price: 6.90,
      image: '/src/assets/entree4.jpg'
    },
    {
      id: 'e6',
      name: 'Pakora',
      description: "Beignets d'aubergines, oignons et pommes de terre",
      price: 7.50,
      image: '/src/assets/entree4.jpg'
    },
    {
      id: 'e7',
      name: 'Végétable Samosa',
      description: 'Friands farcis aux légumes et épices',
      price: 7.80,
      image: '/src/assets/entree4.jpg'
    },
    {
      id: 'e8',
      name: 'Zingas Pakoras',
      description: 'Beignets de crevettes',
      price: 9.90,
      image: '/src/assets/entree4.jpg'
    },
    {
      id: 'e9',
      name: 'Mixte Entrées',
      description: 'Assortiments de beignets poulet, poisson, crevettes et légumes',
      price: 10.80,
      image: '/src/assets/entree4.jpg'
    }
  ];

  const entreesSpeciales = [
    {
      id: 'es1',
      name: 'Poulet Tandoori',
      description: 'Cuisse de poulet marinée aux épices et grillés au four Tandoori',
      price: 8.80,
      image: '/src/assets/entree_special1.jpg'
    },
    {
      id: 'es2',
      name: 'Poulet Tikka',
      description: 'Morceaux de poulet marinée et grillées au four Tandoor',
      price: 9.50,
      image: '/src/assets/entree_special2.jpg'
    },
    {
      id: 'es3',
      name: 'Kukhura ko Chhoila (Spécialité Népalaise)',
      description: 'Morceaux de poulet désossé marinée aux poivrons, ail, gingembre, oignons et épices et grillé au four Tandoor',
      price: 11.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es4',
      name: 'Kukhura ko Sekuwa (Spécialité Népalaise)',
      description: "Morceaux de poulet cuit et mélangé avec des épices de l'Himalaya",
      price: 11.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es5',
      name: 'Khasi ko Chhoila (Spécialité Népalaise)',
      description: "Gigot d'agneau désossé marinée aux poivrons, ail, gingembre, oignons et épices et grillé au four Tandoor ",
      price: 11.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es6',
      name: ' Khasi ko Sekuwa (Spécialité Népalaise)',
      description: "Gigot d'agneau cuit puis mélangé avec des épices de l'Himalaya",
      price: 11.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es7',
      name: 'Sheek Kebab',
      description: "Brochette d'agneau haché coriandre et épices",
      price: 10.00,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es8',
      name: 'Agneau Tikka',
      description: "Morceaux d'agneau marinés et grillés au four Tandoor",
      price: 11.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es9',
      name: 'Saumon Tikka',
      description: 'Morceaux de saumon frais marinés et grillés au four de Tandoor',
      price: 11.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es10',
      name: 'Gambas Tandoori',
      description: 'Gambas marinés et grillés au four Tandoor',
      price: 21.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'es11',
      name: 'Mix Grill',
      description: 'Gambas, Saumon, Agneau et Poulet marinés et grillés au four Tandoor',
      price: 22.90,
      image: '/src/assets/entree_special3.jpg'
    }

  ];

  const painsMaison = [
    {
      id: 'pm1',
      name: 'Nan Nature',
      description: 'Galette de farine de blé au levain',
      price: 3.50,
      image: '/src/assets/entree_special1.jpg'
    },
    {
      id: 'pm2',
      name: 'Chapatti',
      description: 'Galette de farine de blé complet',
      price: 3.50,
      image: '/src/assets/entree_special2.jpg'
    },
    {
      id: 'pm3',
      name: 'Butter Nan',
      description: 'Galette de farine de blé complet et au beurre',
      price: 4.0,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm4',
      name: 'Cheese Nan',
      description: "Galette de farine de blé au levain, fourré au fromage",
      price: 4.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm5',
      name: 'Garlic Cheese Nan',
      description: "Galette de farine de blé au levain, fourré au fromage et à l'ail ",
      price: 5.0,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm6',
      name: ' Nan Miel Cheese',
      description: "Galette de farine de blé au levain, fourré au fromage et au miel",
      price: 5.0,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm7',
      name: 'Nan Garlic',
      description: "Galette de farine de blé farcie à l'ail",
      price: 4.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm8',
      name: 'Timo',
      description: "Tibétain préparé à la vapeur",
      price: 4.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm9',
      name: 'Keema Nan',
      description: 'Galette de farine de blé au levain, fourré viande hachée',
      price: 5.0,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm10',
      name: 'Nan Maison',
      description: 'Pain maison au fromage, ail, gingembre et coriandre',
      price: 5.0,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm11',
      name: 'Kulcha',
      description: 'Pain traditionnel indien avec pommes de terre, petits pois et épices vertes',
      price: 5.0,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'pm12',
      name: 'Papadam',
      description: 'Galette de lentilles et épices',
      price: 1,
      image: '/src/assets/entree_special3.jpg'
    },
    


  ];

  const entreeTibetian = [
    {
      id: 'et1',
      name: 'Soupe Tibétaine',
      description: "omates fraîche oeufs et coriandre (Entrée)",
      price: 7.00,
      image: '/src/assets/entree_special1.jpg'
    },
    {
      id: 'et2',
      name: 'Motrak',
      description: "Raviolis sautés aux légumes ou viande (Entrée)",
      price: 7.90,
      image: '/src/assets/entree_special2.jpg'
    },
    {
      id: 'et3',
      name: 'Shabaleb',
      description: "Chaussons fourrés à la viande (Entrée)",
      price: 7.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'et4',
      name: 'Tsel MoMo',
      description: "Raviolis aux légumes cuit à la vapeur (Plat)",
      price: 14.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'et5',
      name: 'Sha MoMo',
      description: "Raviolis au boeuf cuit à la vapeur (Plat)",
      price: 15.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'et6',
      name: 'Jhol MoMo',
      description: "Un bouillon aux raviolis avec des épices (Plat)",
      price: 17.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'et7',
      name: 'Chilly MoMo (Spécialité du chef Népalais)',
      description: "avec poivrons, tomates oignons et épices de l'Himalaya (Plat)",
      price: 17.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'et8',
      name: 'Thougnoe (Chaumins)',
      description: "Pâtes et légumes sautées aux soja avec filet de poulet ou boeuf (Plat)",
      price: 16.50,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'et9',
      name: 'Boeuthouk (THUPPA)',
      description: 'UN Bol Tibétain à la base de soupe (bouillon) avec des pâtes, aux légumes et boeuf (Plat)',
      price: 16.90,
      image: '/src/assets/entree_special3.jpg'
    },
    {
      id: 'et10',
      name: 'Shamdre',
      description: 'Filet de poulet ou boeuf et légumes sautes avec riz au sauce soja et oeufs comme omelette (Plat)',
      price: 17.0,
      image: '/src/assets/entree_special3.jpg'
    }

  ];

  // Function to render menu items
  const renderMenuItems = (items) => {
    return (
      <Row xs={1} md={3} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <div className="menu-item">
              <img 
                src={item.image} 
                alt={item.name} 
                className="menu-item-image w-100"
              />
              <div className="p-3">
                <h5>{item.name}</h5>
                <p className="menu-description small">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="menu-price">{item.price.toFixed(2)} €</span>
                  <button
                    className="btn btn-sm add-to-cart"
                    onClick={() => addToCart(item)} // Add item to cart
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title mb-5">Le Goût de Sagarmatha</h1>
        
        {/* Featured Items */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Nos plats populaires</h3>
            <Carousel indicators={false} interval={null}>
              {specialites.reduce((rows, item, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(item);
                return rows;
              }, []).map((row, rowIndex) => (
                <Carousel.Item key={rowIndex}>
                  <Row>
                    {row.map((item) => (
                      <Col md={4} key={item.id}>
                        <div className="menu-item">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="menu-item-image w-100"
                          />
                          <div className="p-3">
                            <h5>{item.name}</h5>
                            <p className="menu-description small">{item.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="menu-price">{item.price.toFixed(2)} €</span>
                              <button
                                className="btn btn-sm add-to-cart"
                                onClick={() => addToCart(item)} // Add item to cart
                              >
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
       
        
        {/* Menu Categories */}
        <Row className="mb-5">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link active>Entrées</Nav.Link>
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
                  <Nav.Link as={Link} to="/menudessert">Desserts</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Entrées Simples Section */}
        <Row className="mb-5">
          <Col>
            <h3 className="section-title fw-bold mb-4">Entrées/ Soupes / Salades et Beignets</h3>
            {renderMenuItems(entreesSimples)}
          </Col>
        </Row>

        {/* Entrées Spéciales */}
        <Row className="mb-5">
          <Col>
            <h3 className="section-title fw-bold
             mb-4">Entrées Spécialités Tandoor</h3>
            {renderMenuItems(entreesSpeciales)}
          </Col>
        </Row>

          {/* Pains Maison */}
          <Row className="mb-5">
          <Col>
            <h3 className="section-title fw-bold
             mb-4">Pains Maison</h3>
            {renderMenuItems(painsMaison)}
          </Col>
        </Row>

        {/* Spécialités Tibétaines Entrée et Plats */}
        <Row className="mb-5">
          <Col>
            <h3 className="section-title fw-bold
             mb-4">Spécialités Tibétaines Entrée et Plats</h3>
            {renderMenuItems(entreeTibetian)}
          </Col>
        </Row>

        
      </Container>
    </div>
  );
};

export default Menu;