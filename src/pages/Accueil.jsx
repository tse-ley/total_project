import { useState } from 'react';
import Footer from '../components/Footer';
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
          <h1 className="display-4 fw-bold">Bienvenue au Restaurant Népalais</h1>
          <p className="lead">Découvrez les saveurs authentiques du Népal</p>
          <button className="btn btn-warning text-white fw-bold px-4">Explorer le Menu</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5">
        {/* Intro Section */}
        <section className="mb-5 text-center">
          <h1 className="h3 fw-bold text-warning mb-3">À Propos de Nous</h1>
          <p className="text-muted mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error...
          </p>
          <p className="text-muted">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...
          </p>
        </section>

        {/* Temple Section */}
        <section className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="h4 fw-bold text-warning mb-3">Découvrez notre Culture</h2>
            <p className="text-muted mb-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
            </p>
            <p className="text-muted mb-3">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur...
            </p>
            <button className="btn btn-warning text-white fw-bold">En Savoir Plus</button>
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
          <h2 className="h4 fw-bold text-warning mb-4 text-center">Nos Spécialités</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-warning bg-opacity-25 p-3 rounded shadow-sm h-100">
                <img 
                  src={momoImage} 
                  alt="Momos" 
                  className="img-fluid rounded mb-3"
                  style={{ height: '12rem', objectFit: 'cover', width: '100%' }}
                />
                <p className="fw-bold text-warning">Momos Traditionnels</p>
                <p className="text-muted">Raviolis népalais farcis et cuits à la vapeur</p>
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
                <p className="fw-bold text-warning">Thali Népalais</p>
                <p className="text-muted">Assortiment de plats servis sur un plateau</p>
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
                <p className="fw-bold text-warning">Nos Spécialités</p>
                <p className="text-muted">Découvrez notre menu complet</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-warning text-white fw-bold px-4">Voir le Menu</button>
          </div>
        </section>

        {/* Reservation */}
        <section className="bg-warning bg-opacity-25 p-4 rounded shadow-sm mb-5">
          <h2 className="h4 fw-bold text-warning text-center mb-4">Réservez une table</h2>
          <form onSubmit={handleReservation}>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label text-warning">Nombre de convives</label>
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
                <label className="form-label text-warning">Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label text-warning">Heure</label>
                <input 
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn btn-warning text-white fw-bold px-5">
                  Réserver
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
