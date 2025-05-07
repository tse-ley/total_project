import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-food.jpg';
import momoImage from '../assets/momo.jpg'; 
import thaliImage from '../assets/thali1.jpg'; 
import templeImage from '../assets/temple.jpg'; 

const Home = () => {
  const [guestCount, setGuestCount] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleReservation = (e) => {
    e.preventDefault();
    alert(`Réservation pour ${guestCount} personnes le ${date} à ${time}`);
  };

  return (
    <div className="bg-warning bg-opacity-10 d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <div className="position-relative">
        <img 
          src={heroImage} 
          alt="Délicieux plats népalais" 
          className="w-100" 
          style={{ height: '24rem', objectFit: 'cover' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 text-white fw-bold">
            Bienvenue au Restaurant Népalais
          </h1>
          <p className="display-7 text-white" >
            Découvrez les saveurs authentiques du Népal
          </p>
          <Link 
            to="/menu" 
            className="btn btn-dark text-white fw-bold px-4" 
            style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}
          >
            Explorer le Menu
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5">
        {/* Intro Section */}
        <section className="mb-5 text-center">
          <h1 className="h3 fw-bold mb-3" >
            Sagarmatha
          </h1>
          <p className="text-bold mb-3" style={{ color: 'var(--text-color)' }}>
            Bienvenue dans notre cuisine de l’Himalaya – fait maison, fait avec cœur.
          </p>
          <p className="text-muted mb-3" style={{ color: 'var(--text-color)' }}>
            Voyagez au cœur des saveurs authentiques de l’Himalaya avec Sagarmatha, premier restaurant népalais de Paris. Notre carte vous invite à explorer une riche diversité culinaire, mêlant les traditions du Népal, du Tibet, du Bhoutan et de l’Inde du Nord, le tout préparé "comme à la maison".
          </p>
        </section>

        {/* Temple Section */}
        <section className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="h4 fw-bold mb-3" >
              Découvrez notre Culture
            </h2>
            <p className="text-muted mb-3" style={{ color: 'var(--text-color)' }}>
              Chez Sagarmatha, nous ne servons pas que des plats – nous partageons une histoire. Inspirés par l’esprit d’hospitalité himalayenne, chaque détail, des moulins à prières aux arômes des épices torréfiées, célèbre un patrimoine culinaire transmis depuis des générations.
            </p>
            <Link 
            to="/menu" 
            className="btn btn-dark text-white fw-bold px-4" 
            style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}
          >
            En savoir plus
          </Link>
          </div>
          <div className="col-md-6">
            <img 
              src={templeImage} 
              alt="Temple népalais" 
              className="img-fluid rounded shadow"
              style={{ height: '16rem', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </section>

        {/* Menu Preview */}
        <section className="mb-5">
          <h2 className="h4 fw-bold mb-4 text-center"  >Nos Spécialités</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-warning bg-opacity-25 p-3 rounded shadow-sm h-100">
                <img 
                  src={momoImage} 
                  alt="Momos" 
                  className="img-fluid rounded mb-3"
                  style={{ height: '12rem', objectFit: 'cover', width: '100%' }}
                />
                <p className="fw-bold ">Momos Traditionnels</p>
                <p className="text-muted">Raviolis népalais farcis et cuits à la vapeur</p>
                <p className="text-muted">Plongez dans l’essence même de la street-food himalayenne avec nos Momos, véritables trésors de la cuisine népalaise. Ces délicats raviolis faits maison, enveloppés dans une pâte tendre et farcis de viande savoureuse ou de légumes frais, sont sublimés par une vapeur douce qui préserve toute leur authenticité. Servis avec notre chutney maison 
                \n – un équilibre parfait d’épices, de tomates et de coriandre
                \n – chaque bouchée vous transporte dans les ruelles animées de Katmandou.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-warning bg-opacity-25 p-3 rounded shadow-sm h-100">
                <img 
                  src={thaliImage} 
                  alt="Thali" 
                  className="img-fluid rounded mb-3"
                  style={{ height: '12rem', objectFit: 'cover', width: '100%' }}
                />
                <p className="fw-bold ">Thali Népalais</p>
                <p className="text-muted"> Laissez-vous emporter par l'authentique expérience culinaire népalaise avec notre plateau traditionnel. </p>
                <p className="text-muted"> 
                   Ce repas complet et équilibré vous propose un savoureux Dal Bhat (lentilles parfumées), un curry de légumes frais du marché, un tarkari (sauté de saison), des achar (pickles maison épicés), accompagnés de riz basmati ou de roti tout juste sorti du four tandoor. Le tout est servi dans de véritables bols en laiton pour rester fidèle à la tradition, avec une touche de yaourt frais pour équilibrer les saveurs. Un véritable voyage gastronomique qui capture l'essence même de l'hospitalité népalaise, où chaque élément a été soigneusement sélectionné pour offrir une harmonie parfaite entre textures et arômes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-warning bg-opacity-25 p-3 rounded shadow-sm h-100">
                <div className="row g-2 mb-3">
                  {[momoImage, thaliImage, thaliImage, momoImage].map((img, idx) => (
                    <div className="col-6" key={idx}>
                      <img 
                        src={img} 
                        alt="Cuisine Népalaise" 
                        className="img-fluid rounded"
                        style={{ height: '6rem', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                  ))}
                </div>
                <p className="fw-bold ">Le goût de l'authenticité</p>
                <p className="text-muted">Des recettes transmises de génération en génération, préparées avec des produits frais pour vous offrir l'authenticité d'un repas himalayen.</p>
                <p className="text-muted"> Découvrez notre menu complet, une invitation à voyager à travers les saveurs authentiques de l'Himalaya. De nos fameux Momos traditionnels - raviolis vapeur farcis d'une délicate mixture - au réconfortant Thali Népalais, véritable panorama gastronomique servi sur plateau, chaque plat raconte une histoire. Laissez-vous tenter par nos curries maison longuement mijotés, nos grillades Tandoori marinées 24h, ou notre incontournable Butter Chicken onctueux. Pour une expérience complète, accompagnez votre repas de nos pains Nan artisanaux, tout juste sortis du four. </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link 
              to="/menu" 
              className="btn btn-dark text-white fw-bold px-4" 
              style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}
            >
              Explorer le Menu
            </Link>
          </div>
        </section>

        {/* Reservation */}
        <section className="bg-warning bg-opacity-25 p-4 rounded shadow-sm mb-5">
          <h2 className="h4 fw-bold text-center mb-4" >Réservez une table</h2>
          <form onSubmit={handleReservation}>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label text-dark">Nombre de convives</label>
                <select 
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="form-select"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label text-dark">Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label text-dark">Heure</label>
                <input 
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn btn-dark text-white fw-bold px-5" style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}>
                  Réserver
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Home;
