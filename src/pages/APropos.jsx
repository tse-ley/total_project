// src/pages/About.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import restaurantImage from '../assets/kitchen.jpg'; // Add this image to your assets
import chefImage from '../assets/cover.jpg'; // Add this image to your assets
import spiceImage from '../assets/momo.jpg'; // Add this image to your assets
import thaliPlatterImage from '../assets/thali1.jpg'; // Add this image to your assets
import momoImage from '../assets/momo.jpg'; // Add this image to your assets
import curryImage from '../assets/thali2.jpg'; // Add this image to your assets
import templeInteriorImage from '../assets/temple.jpg'; // Add this image to your assets

const About = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      
      {/* Hero Section with Food Spread Image */}
      <div className="position-relative">
        <img 
          src={thaliPlatterImage} 
          alt="Assortiment de plats népalais" 
          className="w-100 object-fit-cover" 
          style={{ height: '24rem' }}
        />
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Know Us Section */}
        <section className="mb-5">
          <h2 className="fs-2 fw-bold text-warning mb-4 text-center">NOUS CONNAÎTRE</h2>
          
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
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </div>
          </div>
        </section>

        {/* View at Sagarmatha Section */}
        <section className="mb-5">
          <h2 className="fs-2 fw-bold text-warning mb-4 text-center">VUE AU SAGARMATHA</h2>
          
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
          <h2 className="fs-2 fw-bold text-warning mb-4 text-center">PROFITEZ DE L'AMBIANCE</h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 bg-warning bg-opacity-10">
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
              <div className="card h-100 bg-warning bg-opacity-10">
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
              <div className="card h-100 bg-warning bg-opacity-10">
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

        {/* Notre at Sagarmatha Section */}
        <section className="mb-5">
          <h2 className="fs-2 fw-bold text-warning mb-4 text-center">NOTRE AU SAGARMATHA</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <p className="text-secondary mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-secondary">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
            </div>
            
            <div className="col-md-6">
              <p className="text-secondary mb-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
              <p className="text-secondary">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </div>
          </div>
        </section>

        {/* Our Cuisine Section */}
        <section>
          <h2 className="fs-2 fw-bold text-warning mb-4 text-center">NOTRE CUISINE</h2>
          
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
            <div className="col">
              <img 
                src={thaliPlatterImage} 
                alt="Plats traditionnels" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col">
              <img 
                src={momoImage} 
                alt="Spécialités" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col">
              <img 
                src={spiceImage} 
                alt="Ingrédients" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col">
              <img 
                src={curryImage} 
                alt="Saveurs" 
                className="img-fluid rounded shadow" 
                style={{ height: '10rem', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="text-center mt-4">
            <button className="btn btn-warning text-white fw-bold">
              Voir Menu
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
