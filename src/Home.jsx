// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import APropos from './apropos';
import './index.css';
import CreationCarousel from './HomeCarousel';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">      
        <div className='container'>
          <div className="row">
          <h1 className="page-header col-md-10"><strong>Bassirou Diagne, Maître Tailleur</strong></h1>
          <div className='col-md-2'>
                  <img src="/images/logo1.png" alt="Tailleur" className="img-fluid float-end logo1 smaller-logo" />
              </div>
                <h3 style={{textAlign:'center'}} className='hero-h3'>Créations sur mesure avec passion</h3>
             
         </div>
        
        </div>
        <div className='row'> 
              <div className='col-md-12 container-fluid'>
                   <img src="/images/image_a.jpg" alt="Tailleur" className="img-fluid float-end image1" />
              </div>
           </div>
      </section>
             
      
      <div className='trait-separation'>

      </div>
      {/* À propos */}
      <section className="about">
  <div className="container">
    <h2 style={{textAlign:"center"}}>À Propos de Nous</h2>
    <p>
      Bienvenue chez Bassirou Diagne, Maître Tailleur. Nous sommes passionnés par l'art
      intemporel de la couture sur mesure. Avec des décennies d'expérience, nous
      sommes dévoués à créer des vêtements uniques qui célèbrent l'individualité et
      reflètent l'élégance intemporelle.
    </p>
    <p>
      Notre atelier, situé à Touba, Sénégal, est bien plus qu'un lieu de couture. C'est
      un espace où la tradition rencontre la créativité, où chaque point raconte une
      histoire. Nous croyons en l'importance de la qualité, du savoir-faire et de la
      personnalisation, offrant à chaque client une expérience unique.
    </p>
    <div className='text-center'>
    <Link to="/apropos" className="btn btn-secondary ">
      En savoir plus sur Nous
    </Link>
    </div>
  </div>
</section>
     
     <div className='trait-separation'>
</div>
      {/* Nos Services */}
      <section className="services">
        <div className="container">
        <section className="row">
        <h2 style={{textAlign:"center"}}>Nos Services</h2>
                <aside className="col-sm-12">
                    <section>
                        
                            <ul className="list-unstyled" style={{textAlign:"center"}}>
                                <li>Créations de vêtements sur mesure</li>
                                <li>Conseils personnalisés en matière de style</li>
                                <li>Modes broderie</li>
                                <li>Toutes les formes de coutures</li>
                                <li>Couture haute couture</li>
                                <li>Création de costumes traditionnels</li>
                                <li>Broderie artisanale</li>
                                <li>Couture pour événements spéciaux (mariages, soirées, etc.)</li>
                                <li>Conception de costumes théâtraux</li>
                                <li>Restauration de vêtements anciens</li>
                                <li>Création d'accessoires assortis</li>
                            </ul>
                    </section>
                    </aside>
                    </section>
                    </div>
            {/* Ajoutez d'autres services selon vos besoins */}
            <div className='text-center'>
              <Link to="/services" className="btn btn-secondary ">
                  Découvrir nos services
              </Link>
            </div>
      </section>

      <div className='trait-separation'></div>
      {/* Mettez en avant les Produits */}
      <section className='creation'>
         <CreationCarousel/>
         <div className='text-center'>
            <Link to="/Galerie" className="btn btn-secondary ">
              Allez vers Galerie
            </Link>
        </div>
    </section>

    <div className='trait-separation'></div>  
    <section className='contact'>
      <Contact/>
    </section>

    <div className='trait-separation'></div>  
    <section className='footer'>
      <Footer/>
    </section>
    </div>
  );
};

export default Home;
