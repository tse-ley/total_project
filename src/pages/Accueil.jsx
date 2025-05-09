import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.JPG';
import momoImage from '../assets/momo.jpg'; 
import thaliImage from '../assets/thali1.jpg'; 
import templeImage from '../assets/temple.jpg';
import spiceImage from '../assets/IMG_3859.JPG';
import crevetteImage from '../assets/IMG_3844.JPG';
import rotiImage from '../assets/IMG_3858.JPG';
import curryImage from '../assets/IMG_3849.JPG';
import '../index.css'; // Import your CSS file

const Home = () => {
  const [guestCount, setGuestCount] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleReservation = (e) => {
    e.preventDefault();
    alert(`Réservation pour ${guestCount} personnes le ${date} à ${time}`);
  };

  return (
    <div className=" bg-opacity-10 d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <div className="position-relative mb-5">
        <img 
          src={heroImage} 
          alt="Délicieux plats népalais" 
          className="w-100" 
          style={{ height: '28rem', objectFit: 'cover' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white p-4" style={{ backgroundColor: '', borderRadius: '8px', width: '80%', maxWidth: '800px' }}>
          <h1 className="display-4 text-white fw-bold mb-3">
            Bienvenue au Restaurant Sagarmatha
          </h1>
          <p className="fs-5 text-white mb-4">
            Découvrez les saveurs authentiques du Népal
          </p>
          <Link 
            to="/menu" 
            className="btn btn-dark text-white fw-bold px-4 py-2" 
            style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}
          >
            Explorer le Menu
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Intro Section */}
        <section className="mb-5 text-center">
          <h2 className="h3 fw-bold mb-3" style={{ color: 'var(--accent-color)' }}>
            Saveurs d'Altitude : L'Héritage Culinaire du Toit du Monde
          </h2>
          <p className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>
            Bienvenue dans notre cuisine de l'Himalaya – fait maison, fait avec cœur.
          </p>
          <p className="mb-3" style={{ color: 'var(--text-color)', maxWidth: '900px', margin: '0 auto' }}>
            Voyagez au cœur des saveurs authentiques de l'Himalaya avec Sagarmatha, premier restaurant népalais de Paris. Notre carte vous invite à explorer une riche diversité culinaire, mêlant les traditions du Népal, du Tibet et de l'Inde du Nord, le tout préparé "comme à la maison".
          </p>
        </section>

        {/* Temple Section */}
        <section className="row align-items-center mb-5 py-4">
          <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
            <h2 className="h3 fw-bold mb-3" style={{ color: 'var(--accent-color)' }}>
              Découvrez notre Culture
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-color)' }}>
              Chez Sagarmatha, nous ne servons pas que des plats – nous partageons une histoire. Inspirés par l'esprit d'hospitalité himalayenne, chaque détail, des moulins à prières aux arômes des épices torréfiées, célèbre un patrimoine culinaire transmis depuis des générations.
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
              style={{ height: '18rem', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </section>

        {/* Menu Preview */}
        <section className="mb-5 py-4">
          <h2 className="h3 fw-bold mb-4 text-center" style={{ color: 'var(--accent-color)' }} >Nos Spécialités</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-opacity-25 p-4 rounded shadow h-100" style={{ backgroundColor: 'var(--border-color)' }}>
                <img 
                  src={momoImage} 
                  alt="Momos" 
                  className="img-fluid rounded mb-3"
                  style={{ height: '12rem', objectFit: 'cover', width: '100%' }}
                />
                <h3 className="fw-bold h5 mb-2">Momos Traditionnels</h3>
                <p className="fw-bold mb-2">Raviolis népalais farcis et cuits à la vapeur</p>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  Plongez dans l'essence même de la street-food himalayenne avec nos Momos, véritables trésors de la cuisine népalaise. Ces délicats raviolis faits maison, enveloppés dans une pâte tendre et farcis de viande savoureuse ou de légumes frais, sont sublimés par une vapeur douce qui préserve toute leur authenticité. Servis avec notre chutney maison – un équilibre parfait d'épices, de tomates et de coriandre – chaque bouchée vous transporte dans les ruelles animées de Katmandou.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-opacity-25 p-4 rounded shadow h-100" style={{ backgroundColor: 'var(--border-color)' }}>
                <img 
                  src={thaliImage} 
                  alt="Thali" 
                  className="img-fluid rounded mb-3"
                  style={{ height: '12rem', objectFit: 'cover', width: '100%' }}
                />
                <h3 className="fw-bold h5 mb-2">Thali Népalais</h3>
                <p className="fw-bold mb-2">Laissez-vous emporter par l'authentique expérience culinaire népalaise avec notre plateau traditionnel.</p>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  Ce repas complet et équilibré vous propose un savoureux Dal Bhat (lentilles parfumées), un curry de légumes frais du marché, un tarkari (sauté de saison), des achar (pickles maison épicés), accompagnés de riz basmati ou de roti tout juste sorti du four tandoor. Le tout est servi dans de véritables bols en laiton pour rester fidèle à la tradition, avec une touche de yaourt frais pour équilibrer les saveurs. Un véritable voyage gastronomique qui capture l'essence même de l'hospitalité népalaise.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-opacity-25 p-4 rounded shadow h-100" style={{ backgroundColor: 'var(--border-color)' }}>
                <div className="row g-2 mb-3">
                  {[spiceImage, crevetteImage, rotiImage, curryImage].map((img, idx) => (
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
                <h3 className="fw-bold h5 mb-2">Le goût de l'authenticité</h3>
                <p className="fw-bold mb-2">Des recettes transmises de génération en génération, préparées avec des produits frais pour vous offrir l'authenticité d'un repas himalayen.</p>
                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                  Découvrez notre menu complet, une invitation à voyager à travers les saveurs authentiques de l'Himalaya. De nos fameux Momos traditionnels aux réconfortants Thali Népalais, chaque plat raconte une histoire. Laissez-vous tenter par nos curries maison longuement mijotés, nos grillades Tandoori marinées 24h, ou notre incontournable Butter Chicken onctueux.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link 
              to="/menu" 
              className="btn btn-dark text-white fw-bold px-5 py-2" 
              style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}
            >
              Explorer le Menu
            </Link>
          </div>
        </section>

        {/* Reservation */}
        <section className="bg-opacity-25 p-5 rounded shadow mt-5" style={{ backgroundColor: 'var(--border-color)' }}>
          <h2 className="h3 fw-bold text-center mb-4">Réservez une table</h2>
          <form onSubmit={handleReservation} className="px-md-5">
            <div className="row g-4">
              <div className="col-md-4">
                <label className="form-label fw-bold text-dark">Nombre de convives</label>
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
                <label className="form-label fw-bold text-dark">Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold text-dark">Heure</label>
                <input 
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-12 text-center mt-4">
                <button type="submit" className="btn btn-dark text-white fw-bold px-5 py-2" style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}>
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