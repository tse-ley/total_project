import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import '../Menu.css';

const MenuPlats = () => {
  // Sample data for main courses
  const platsTraditionnels = [
    {
      id: 'p1',
      name: 'Plats Maison',
      description: 'Spécialité du chef avec sauce maison et légumes de saison',
      price: 16.50,
      image: '/src/assets/plat1.jpg'
    },
    {
      id: 'p2',
      name: 'Poulet Teriyaki',
      description: 'Poulet grillé avec sauce teriyaki et légumes sautés',
      price: 15.50,
      image: '/src/assets/plat2.jpg'
    },
    {
      id: 'p3',
      name: 'Boeuf Sauté',
      description: 'Boeuf sauté avec légumes et sauce maison',
      price: 17.50,
      image: '/src/assets/plat3.jpg'
    },
    {
      id: 'p4',
      name: 'Tofu Frit',
      description: 'Tofu frit avec sauce spéciale et légumes',
      price: 14.50,
      image: '/src/assets/plat4.jpg'
    }
  ];

  const specialitesChaud = [
    {
      id: 'sp1',
      name: 'Speciality Chaudon',
      description: 'Plat chaud spécial du chef avec mélange d\'épices exotiques',
      price: 18.90,
      image: '/src/assets/plat_special1.jpg'
    },
    {
      id: 'sp2',
      name: 'Ramen Deluxe',
      description: 'Ramen avec bouillon riche, porc char siu et oeuf mariné',
      price: 16.90,
      image: '/src/assets/plat_special2.jpg'
    },
    {
      id: 'sp3',
      name: 'Udon aux Fruits de Mer',
      description: 'Nouilles udon avec assortiment de fruits de mer et légumes',
      price: 19.50,
      image: '/src/assets/plat_special3.jpg'
    }
  ];

  const specialitesHinaton = [
    {
      id: 'sh1',
      name: 'Specialty Hinaton',
      description: 'Plat spécial avec sauce Hinaton et accompagnements traditionnels',
      price: 22.00,
      image: '/src/assets/plat_hinaton1.jpg'
    },
    {
      id: 'sh2',
      name: 'Chirashi',
      description: 'Bol de riz avec assortiment de poissons crus et légumes',
      price: 24.50,
      image: '/src/assets/plat_hinaton2.jpg'
    },
    {
      id: 'sh3',
      name: 'Hinaton Special',
      description: 'Spécialité exclusive de la maison Hinaton avec ingrédients secrets',
      price: 26.00,
      image: '/src/assets/plat_hinaton3.jpg'
    }
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Plats</h1>

        {/* Menu Navigation */}
        <Row className="mb-4">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/entrees">Entrées</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/boissons">Boissons</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/plats" active>Plats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/formulaires">Formulaires</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu/desserts">Dessert</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Main courses sections */}
        <MenuSection title="Plats Traditionnels" items={platsTraditionnels} />
        <MenuSection title="Speciality Chaudon" items={specialitesChaud} />
        <MenuSection title="Specialty Hinaton" items={specialitesHinaton} />
      </Container>
    </div>
  );
};

export default MenuPlats;