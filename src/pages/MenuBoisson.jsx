import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import MenuSection from '../components/MenuSection'; // Adjust path as needed

const MenuBoisson = () => {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  
  const cocktailsAvecAlcool = [
    {
      id: 'ca1',
      name: 'Piña Colada',
      description: 'Rhum blanc, rhum ambré, jus d\'ananas, lait de coco (25cl)',
      price: 8.00,
      image: '/images/pina-colada.jpg', // Optional
    },
    {
      id: 'ca2',
      name: 'Cocktail Maison',
      description: 'Rhum agricole, Gin, Vodka, Mabilas, jus d\'orange et Mangue (25cl)',
      price: 8.00,
      image: '/images/cocktail-maison.jpg', // Optional
    },
    {
      id: 'ca3',
      name: 'Tequila Sunrise',
      description: 'Tequila, jus d\'orange, sirop de grenadine (25cl)',
      price: 8.00,
      image: '/images/tequila-sunrise.jpg', // Optional
    },
    {
      id: 'ca4',
      name: 'Mojito',
      description: 'Rhum cubain, jus de citron vert, menthe, eau gazeuse, sirop de sucre de canne (25cl)',
      price: 8.00,
      image: '/images/mojito.jpg', // Optional
    },
  ];
  
  const cocktailsSansAlcool = [
    {
      id: 'csa1',
      name: 'Diabolo',
      description: 'Au choix : Fraise, menthe, citron, grenadine (25cl)',
      price: 5.00,
      image: '/images/diabolo.jpg', // Optional
    },
    {
      id: 'csa2',
      name: 'Rainbow Cooler',
      description: 'Jus d\'ananas, jus de fruits de la passion, jus d\'orange, sirop de grenadine (25cl)',
      price: 6.50,
      image: '/images/rainbow-cooler.jpg', // Optional
    },
    {
      id: 'csa3',
      name: 'Bora Bora',
      description: 'Jus d\'ananas, jus de fruit de la passion, sirop de grenadine, jus de citron (25cl)',
      price: 6.50,
      image: '/images/bora-bora.jpg', // Optional
    },
    {
      id: 'csa4',
      name: 'Virgin Pina Colada',
      description: 'Jus d\'ananas, lait de coco (25cl)',
      price: 6.50,
      image: '/images/virgin-pina-colada.jpg', // Optional
    },
    {
      id: 'csa5',
      name: 'Virgin Mojito',
      description: 'Citron vert, menthe, eau gazeuse, menthe (25cl)',
      price: 6.50,
      image: '/images/virgin-mojito.jpg', // Optional
    },
    {
      id: 'csa6',
      name: 'Cocktail Maison',
      description: 'Jus de mangue pêche, jus de fruit pressé (25cl)',
      price: 6.50,
      image: '/images/cocktail-maison-sans-alcool.jpg', // Optional
    },
  ];
  
  const aperitifs = [
    {
      id: 'ap1',
      name: 'Kir Cassis/Mûre/Framboise',
      description: '(12cl)',
      price: 5.00,
      image: '/images/kir.jpg', // Optional
    },
    {
      id: 'ap2',
      name: 'Kir Royal et Coupe de Champagne',
      description: '(12cl)',
      price: 8.00,
      image: '/images/kir-royal.jpg', // Optional
    },
    {
      id: 'ap3',
      name: 'Martini Rouge/Blanc/Campari',
      description: '(7cl)',
      price: 6.00,
      image: '/images/martini.jpg', // Optional
    },
    {
      id: 'ap4',
      name: 'Martini Gin',
      description: '(10cl)',
      price: 6.50,
      image: '/images/martini-gin.jpg', // Optional
    },
    {
      id: 'ap5',
      name: 'Américano',
      description: '(10cl)',
      price: 7.00,
      image: '/images/americano.jpg', // Optional
    },
    {
      id: 'ap6',
      name: 'Ricard ou Pastis',
      description: '(4cl)',
      price: 6.00,
      image: '/images/pastis.jpg', // Optional
    },
    {
      id: 'ap7',
      name: 'Whisky Johnnie Walker Red Label ou J&B',
      description: '(5cl)',
      price: 6.50,
      image: '/images/jw-red.jpg', // Optional
    },
    {
      id: 'ap8',
      name: 'Whisky Johnnie Walker Black Label',
      description: '(5cl)',
      price: 8.00,
      image: '/images/jw-black.jpg', // Optional
    },
    {
      id: 'ap9',
      name: 'Whisky Jack Daniel\'s',
      description: '(5cl)',
      price: 7.00,
      image: '/images/jack-daniels.jpg', // Optional
    },
    {
      id: 'ap10',
      name: 'Whisky Chivas Regal',
      description: '(5cl)',
      price: 8.00,
      image: '/images/chivas.jpg', // Optional
    },
    {
      id: 'ap11',
      name: 'Whisky Népalais OldDarbar',
      description: '(5cl)',
      price: 8.00,
      image: '/images/olddarbar.jpg', // Optional
    },
    {
      id: 'ap12',
      name: 'Rhum Népalais Khukri',
      description: '(5cl)',
      price: 7.50,
      image: '/images/khukri.jpg', // Optional
    },
  ];
  
  const boissonsFraiches = [
    {
      id: 'bf1',
      name: 'Coca cola/ Coca cola Zero/Oasis',
      description: '(33cl)',
      price: 4.00,
      image: '/images/coca.jpg', // Optional
    },
    {
      id: 'bf2',
      name: 'Jus de fruits: Orange/Abricot/Mangue/Ananas/Pomme',
      description: '(25cl)',
      price: 4.00,
      image: '/images/jus-fruits.jpg', // Optional
    },
    {
      id: 'bf3',
      name: 'Lassi salé',
      description: '(35cl)',
      price: 4.00,
      image: '/images/lassi-sale.jpg', // Optional
    },
    {
      id: 'bf4',
      name: 'Lassi sucré',
      description: '(35cl)',
      price: 4.50,
      image: '/images/lassi-sucre.jpg', // Optional
    },
    {
      id: 'bf5',
      name: 'Lassila la rose',
      description: '(35cl)',
      price: 5.50,
      image: '/images/lassi-rose.jpg', // Optional
    },
    {
      id: 'bf6',
      name: 'Lassi à la Mangue',
      description: '(35cl)',
      price: 5.50,
      image: '/images/lassi-mangue.jpg', // Optional
    },
    {
      id: 'bf7',
      name: 'Nimbu Pani',
      description: '(25cl)',
      price: 5.00,
      image: '/images/nimbu-pani.jpg', // Optional
    },
    {
      id: 'bf8',
      name: 'Perrier',
      description: '(33cl)',
      price: 4.00,
      image: '/images/perrier.jpg', // Optional
    },
    {
      id: 'bf9',
      name: 'Schweppes/Sprite/Fanta',
      description: '(25cl)',
      price: 4.00,
      image: '/images/sodas.jpg', // Optional
    },
  ];
  
  const bieres = [
    {
      id: 'bi1',
      name: 'Bière Népalaise',
      description: '(33cl)',
      price: 6.00,
      image: '/images/biere-nepalaise.jpg', // Optional
    },
    {
      id: 'bi2',
      name: 'Bière Indienne',
      description: '(33cl)',
      price: 6.00,
      image: '/images/biere-indienne.jpg', // Optional
    },
    {
      id: 'bi3',
      name: 'Bière Heineken',
      description: '(33cl)',
      price: 4.50,
      image: '/images/heineken.jpg', // Optional
    },
  ];
  
  const eaux = [
    {
      id: 'e1',
      name: 'Évian ou San Pellegrino',
      description: '(100cl)',
      price: 6.00,
      image: '/images/eau-grande.jpg', // Optional
    },
    {
      id: 'e2',
      name: 'Évian ou San Pellegrino',
      description: '(50cl)',
      price: 4.00,
      image: '/images/eau-petite.jpg', // Optional
    },
  ];
  
  const boissonsChaudesThes = [
    {
      id: 'bc1',
      name: 'Café',
      description: '',
      price: 2.50,
      image: '/images/cafe.jpg', // Optional
    },
    {
      id: 'bc2',
      name: 'Café Crème',
      description: '',
      price: 4.50,
      image: '/images/cafe-creme.jpg', // Optional
    },
    {
      id: 'bc3',
      name: 'Thé Vert/Thé Jasmin/Thé Darjeeling',
      description: '',
      price: 4.00,
      image: '/images/the-classique.jpg', // Optional
    },
    {
      id: 'bc4',
      name: 'Thé Darjeeling avec Cardamum',
      description: '',
      price: 4.50,
      image: '/images/the-cardamum.jpg', // Optional
    },
    {
      id: 'bc5',
      name: 'Thé senteur Kathmandu',
      description: '',
      price: 4.50,
      image: '/images/the-kathmandu.jpg', // Optional
    },
    {
      id: 'bc6',
      name: 'Thé Moine de Tibet',
      description: '',
      price: 4.50,
      image: '/images/the-tibet.jpg', // Optional
    },
    {
      id: 'bc7',
      name: 'Thé Tibétain au lait salé avec du beurre',
      description: '',
      price: 4.50,
      image: '/images/the-tibetain.jpg', // Optional
    },
    {
      id: 'bc8',
      name: 'Thé au lait Népalais avec du gingembre',
      description: '',
      price: 4.50,
      image: '/images/the-gingembre.jpg', // Optional
    },
    {
      id: 'bc9',
      name: 'Thé indien épices au lait(Massala Chaya)',
      description: '',
      price: 4.50,
      image: '/images/chai-massala.jpg', // Optional
    },
  ];

  const vinsRouges = [
    // BORDEAUX
    {
      id: 'vr1',
      name: 'Bordeaux supérieur AOP',
      description: 'Château de Goélane (75cl)',
      price: 23.50,
      image: '/images/bordeaux-superieur.jpg', // Optional
      category: 'BORDEAUX',
      optionalSize: {
        size: '37,5cl',
        price: 16.50
      }
    },
    {
      id: 'vr2',
      name: 'Médoc AOP',
      description: 'Château Tour Prignac (75cl)',
      price: 32.90,
      image: '/images/medoc.jpg', // Optional
      category: 'BORDEAUX',
      optionalSize: {
        size: '37,5cl',
        price: 21.00
      }
    },
    {
      id: 'vr3',
      name: 'Lalande de Pomerol AOP',
      description: 'Château des Treilles l\'Embarre (75cl)',
      price: 34.50,
      image: '/images/lalande-pomerol.jpg', // Optional
      category: 'BORDEAUX'
    },
    {
      id: 'vr4',
      name: 'Graves AOP',
      description: 'Château Ferrande (75cl)',
      price: 41.00,
      image: '/images/graves.jpg', // Optional
      category: 'BORDEAUX'
    },
    {
      id: 'vr5',
      name: 'Saint-Émilion Grand Cru AOP',
      description: 'La Croix de Montlabert (75cl)',
      price: 43.00,
      image: '/images/saint-emilion.jpg', // Optional
      category: 'BORDEAUX'
    },
    {
      id: 'vr6',
      name: 'Margaux AOP',
      description: 'La Petite de la Tour de Bessan (75cl)',
      price: 49.00,
      image: '/images/margaux.jpg', // Optional
      category: 'BORDEAUX'
    },
    
    // VALLÉE DU RHÔNE
    {
      id: 'vr7',
      name: 'Côtes-du-Rhône Villages Sainte Cécile AOC',
      description: 'Château le Grand Retour (75cl)',
      price: 20.50,
      image: '/images/cotes-du-rhone.jpg', // Optional
      category: 'VALLÉE DU RHÔNE'
    },
    
    // SUD-OUEST
    {
      id: 'vr8',
      name: 'Buzet AOP',
      description: '(75cl)',
      price: 20.50,
      image: '/images/buzet.jpg', // Optional
      category: 'SUD-OUEST'
    },
    
    // VALLÉE DE LA LOIRE
    {
      id: 'vr9',
      name: 'Saint Nicolas de Bourgueil AOP',
      description: 'Domaine des Oliviers (75cl)',
      price: 23.50,
      image: '/images/saint-nicolas.jpg', // Optional
      category: 'VALLÉE DE LA LOIRE',
      optionalSize: {
        size: '37,5cl',
        price: 16.50
      }
    },
    {
      id: 'vr10',
      name: 'Sancerre AOP',
      description: 'Domaine de Saint Romble - Pente de Maimbray (75cl)',
      price: 36.00,
      image: '/images/sancerre-rouge.jpg', // Optional
      category: 'VALLÉE DE LA LOIRE'
    },
    
    // CRU DU BEAUJOLAIS
    {
      id: 'vr11',
      name: 'Brouilly AOP',
      description: 'Château de la Pierre Jean Loron (75cl)',
      price: 29.50,
      image: '/images/brouilly.jpg', // Optional
      category: 'CRU DU BEAUJOLAIS',
      optionalSize: {
        size: '37,5cl',
        price: 18.50
      }
    },
    
    // BOURGOGNE
    {
      id: 'vr12',
      name: 'Bourgogne AOP Pinot Noir',
      description: 'Lor des Fous Jean Loron (75cl)',
      price: 38.50,
      image: '/images/bourgogne-pinot.jpg', // Optional
      category: 'BOURGOGNE',
      optionalSize: {
        size: '37,5cl',
        price: 26.50
      }
    }
  ];
  
  const vinsRoses = [
    // CÔTES DE PROVENCE
    {
      id: 'vrs1',
      name: 'Château Cavalier – Cuvée Cascadel',
      description: '(75cl)',
      price: 21.00,
      image: '/images/chateau-cavalier.jpg', // Optional
      category: 'CÔTES DE PROVENCE',
      optionalSize: {
        size: '37,5cl',
        price: 17.00
      }
    },
    {
      id: 'vrs2',
      name: 'Bandol AOP',
      description: 'Moulin de la Roque (75cl)',
      price: 33.00,
      image: '/images/bandol.jpg', // Optional
      category: 'CÔTES DE PROVENCE',
      optionalSize: {
        size: '37,5cl',
        price: 20.50
      }
    },
    
    // VALLÉE DU RHÔNE
    {
      id: 'vrs3',
      name: 'Tavel AOP',
      description: 'Château de Manissy Rosé (75cl)',
      price: 28.90,
      image: '/images/tavel.jpg', // Optional
      category: 'VALLÉE DU RHÔNE',
      optionalSize: {
        size: '37,5cl',
        price: 17.90
      }
    }
  ];
  
  const vinsBlancs = [
    // LANGUEDOC-ROUSSILLON
    {
      id: 'vb1',
      name: 'IGP Pays d\'Oc',
      description: 'Paul Mas Viognier (75cl)',
      price: 17.00,
      image: '/images/pays-doc.jpg', // Optional
      category: 'LANGUEDOC-ROUSSILLON',
      optionalSize: {
        size: '37,5cl',
        price: 13.00
      }
    },
    
    // VALLÉE DE LA LOIRE
    {
      id: 'vb2',
      name: 'Muscadet Sèvre et Maine sur Lie AOP',
      description: 'Château de l\'HYvernère (75cl)',
      price: 19.90,
      image: '/images/muscadet.jpg', // Optional
      category: 'VALLÉE DE LA LOIRE',
      optionalSize: {
        size: '37,5cl',
        price: 13.50
      }
    },
    {
      id: 'vb3',
      name: 'Sancerre AOP',
      description: 'Domaine de Saint Romble - Pente de Maimbray (75cl)',
      price: 36.00,
      image: '/images/sancerre-blanc.jpg', // Optional
      category: 'VALLÉE DE LA LOIRE',
      optionalSize: {
        size: '37,5cl',
        price: 22.00
      }
    }
  ];

  const champange = [
    {
      id: 'ch1',
      name: 'Champagne AOP',
      description: 'Brut H.Blin (75cl)',
      price: 52.90,
      image: '/images/champagne.jpg', // Optional
    }
    
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="page-title">Boissons</h1>

        {/* Navigation Tabs */}
        <Row className="mb-5">
          <Col>
            <div className="menu-tabs">
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link as={Link} to="/menu">Entrées</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active>Boissons</Nav.Link>
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

        {/* Menu Section */}
        <MenuSection
          title="Cockails avec Alcool"
          items={cocktailsAvecAlcool.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />
        <MenuSection
          title="Cocktails sans Alcool"
          items={cocktailsSansAlcool.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />
        <MenuSection
          title="Apéritifs"
          items={aperitifs.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
          />

        <MenuSection 
          title="Boissons Fraîches"
          items={boissonsFraiches.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />

        <MenuSection
          title="Bières"
          items={bieres.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />

        <MenuSection
          title="Eaux"
          items={eaux.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />

          <MenuSection
          title="Boissons Chaudes et Thés"
          items={boissonsChaudesThes.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
          />

        <MenuSection
          title="Vins Rouges"
          items={vinsRouges.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />

        <MenuSection
          title="Vins Rosés"
          items={vinsRoses.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />

        <MenuSection
          title="Vins Blancs"
          items={vinsBlancs.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
        />

        <MenuSection
          title="Champagne"
          items={champange.map((item) => ({
            ...item,
            onAddToCart: () => addToCart(item), 
          }))}
          />


        
      </Container>
    </div>
  );
};

export default MenuBoisson;