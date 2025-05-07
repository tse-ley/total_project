import React from 'react';
import { Link } from 'react-router-dom';
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
          <h1 className="display-4 fw-bold text-white">À Propos de Nous</h1>
          <p className="display-7"></p>
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
              <p className="text-secondary text-dark mb-3">
              Plongez dans une expérience himalayenne authentique au cœur de Paris. Notre restaurant puise son essence directement dans les traditions culinaires du Népal, du Tibet et de l'Inde du Nord. Nos chefs, originaires de ces régions montagneuses, maîtrisent des recettes transmises de génération en génération et préparent chaque plat avec des épices importées directement de l'Himalaya.

Nous sélectionnons rigoureusement nos ingrédients : des légumes et fruits frais du marché aux viandes de première qualité, tout est choisi pour respecter l'authenticité de notre cuisine. Notre cuisine moderne est spécialement conçue pour préserver la qualité et les arômes de chaque ingrédient, tandis que nos dégustations régulières garantissent l'excellence constante de nos plats.




              </p>
              <p className="text-secondary text-dark mb-3">
              À Sagarmatha, nous ne servons pas simplement des repas - nous créons des souvenirs culinaires inoubliables, où chaque bouchée vous transporte au pied des plus hauts sommets du monde.
              </p>
              <p className="text-secondary text-dark mb-3">
              Bien plus qu'un restaurant, une véritable immersion dans l'âme de l'Himalaya.
              </p>
            </div>
          </div>
        </section>

        {/* View at Sagarmatha Section */}
        <section className="mb-5">
          <h2 className="fs-2 fw-bold text-dark mb-4 text-center">VUE SUR L'HIMALAYA</h2>
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <p className="text-secondary text-dark mb-3">
              Chez Sagarmatha, nous vous offrons bien plus qu'un repas - une véritable évasion au cœur des montagnes sacrées. Notre décor vous transporte dans l'atmosphère envoûtante de l'Himalaya avec ses moulins à prières tournants, ses tentures colorées et ses motifs traditionnels népalais.
              </p>
              <p className="text-secondary text-dark mb-3">
              Asseyez-vous dans notre salle principale et laissez-vous envelopper par les parfums d'épices torréfiées et de gingembre frais, tandis que nos fenêtres vous dévoilent une vue imprenable sur... le toit de Paris ! Une touche d'humour pour cette escapade dépaysante où l'esprit de Katmandou rencontre le charme parisien.
              </p>
              <p className="text-secondary text-dark mb-3">
              "Ici, chaque détail est pensé pour vous faire voyager - des murs ornés de thangkas aux mélodies discrètes de flûtes himalayennes qui accompagnent votre dîner."
              </p>
              <p className="text-secondary fw-bold text-dark mb-3"> Prêts pour l'ascension culinaire ? Votre table au pied de l'Everest vous attend... sans besoin de passeport !</p>
            </div>
            <div className="col-md-5">
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
              <div className="card h-100 bg-warning bg-opacity-10">
                <img 
                  src={curryImage} 
                  alt="Cuisine népalaise" 
                  className="card-img-top" 
                  style={{ height: '16rem', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text text-dark text-secondary">
                  Laissez-vous envoûter par l'atmosphère unique du Sagarmatha, où chaque détail a été pensé pour éveiller vos sens.
                  </p>
                  <p className="card-text text-dark text-secondary">
                  Dans notre salle aux couleurs chaudes de l'Himalaya, bercé par les mélodies traditionnelles népalaise et le doux cliquetis des moulins à prières, vous plongerez dans une expérience sensorielle complète.
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
                  <p className="card-text  text-dark text-secondary">
                  Les senteurs envoûtantes des épices torréfiées se mêlent à la vapeur parfumée des momos qui s'échappe de notre cuisine ouverte, créant une ambiance vivante et conviviale.
                  </p>
                  <p className="card-text  text-dark text-secondary">
                  Nos nappes aux motifs traditionnels, les lumières tamisées et les objets artisanaux ramenés du Népal composent un décor authentique où il fait bon s'attarder.
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
                  <p className="card-text text-dark text-secondary">
                  Que ce soit pour un dîner romantique, une sortie entre amis ou un repas familial, l'esprit chaleureux de l'Himalaya vous accompagnera tout au long de votre expérience culinaire.
                  </p>
                  <p className="card-text text-dark text-secondary">
                  "Ici, le temps semble suspendu le temps d'un repas, le temps d'un voyage..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Cuisine Section */}
        <section>
          <h2 className="fs-2 fw-bold text-dark mb-4 text-center">NOTRE CUISINE</h2>
          <p className="text-secondary text-dark text-center mb-4">
          Nous importons nos épices directement des contreforts de l'Himalaya et sélectionnons nos viandes et légumes avec la même rigueur que pour notre propre table. Notre cuisine ouverte vous invite à découvrir la chorégraphie de nos chefs, véritable spectacle vivant où l'art culinaire se dévoile.

"Une cuisine sans artifice, où seul compte l'authenticité des saveurs et la générosité des portions."

Le saviez-vous ? Notre four tandoor, fabriqué sur mesure au Népal, atteint les 480°C pour donner à nos pains naan cette texture inimitable !

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
          <Link 
            to="/menu" 
            className="btn btn-dark text-white fw-bold px-4" 
            style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}
          >
            Voir le menu
          </Link>
          </div>
        </section>
      </div>

    </div>
  );
};

export default About;
