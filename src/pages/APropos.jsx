import React from 'react';
import restaurantImage from '../assets/kitchen.jpg';
import spiceImage from '../assets/momo.jpg';
import thaliPlatterImage from '../assets/thali1.jpg';
import momoImage from '../assets/momo.jpg';
import curryImage from '../assets/thali2.jpg';
import templeInteriorImage from '../assets/temple.jpg';

const About = () => {
  return (
    <div className="min-vh-100 d-flex flex-column ">
     

      {/* Hero Section */}
      <div className="position-relative">
        <img 
          src={thaliPlatterImage} 
          alt="Assortiment de plats népalais" 
          className="w-100 object-fit-cover" 
          style={{ height: '24rem' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold">À Propos de Nous</h1>
          <p className="lead">Découvrez notre histoire et notre passion pour la cuisine népalaise</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5">
        {/* Know Us Section */}
        <section className="mb-5">
          <h2 className="fs-2 fw-bold text-dark mb-4 text-center">NOUS CONNAÎTRE</h2>
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img 
                src={restaurantImage} 
                alt="Notre restaurant" 
                className="rounded img-fluid shadow"
              />
            </div>
            <div className="col-md-6">
              <p className="text-secondary mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-secondary mb-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p className="text-secondary">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </section>

        {/* View at Sagarmatha Section */}
        <section className="mb-5">
          <h2 className="fs-2 fw-bold text-dark mb-4 text-center">VUE AU SAGARMATHA</h2>
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <p className="text-secondary mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-secondary">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
            </div>
            <div className="col-md-6">
              <img 
                src={templeInteriorImage} 
                alt="Vue au Sagarmatha" 
                className="rounded img-fluid shadow"
              />
            </div>
          </div>
        </section>

        {/* Enjoy the Ambiance Section */}
        <section className="mb-5">
          <h2 className="fs-2 fw-bold text-dark mb-4 text-center">PROFITEZ DE L'AMBIANCE</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 bg-dark bg-opacity-10">
                <img 
                  src={curryImage} 
                  alt="Cuisine népalaise" 
                  className="card-img-top" 
                  style={{ height: '16rem', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text text-secondary">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-dark bg-opacity-10">
                <img 
                  src={restaurantImage} 
                  alt="Ambiance du restaurant" 
                  className="card-img-top" 
                  style={{ height: '16rem', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text text-secondary">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-dark bg-opacity-10">
                <img 
                  src={templeInteriorImage} 
                  alt="Décorations traditionnelles" 
                  className="card-img-top" 
                  style={{ height: '16rem', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text text-secondary">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Cuisine Section */}
        <section>
          <h2 className="fs-2 fw-bold text-dark mb-4 text-center">NOTRE CUISINE</h2>
          <p className="text-secondary text-center mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="row row-cols-2 row-cols-md-4 g-3">
            <div className="col">
              <img 
                src={momoImage} 
                alt="Momos" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col">
              <img 
                src={thaliPlatterImage} 
                alt="Thali" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col">
              <img 
                src={curryImage} 
                alt="Curry" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col">
              <img 
                src={spiceImage} 
                alt="Épices" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-dark text-white fw-bold">
              Voir Menu
            </button>
          </div>
        </section>
      </div>

    </div>
  );
};

export default About;
