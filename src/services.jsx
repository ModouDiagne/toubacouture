// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Services = () => {
  return (
    <div className="container">
      <section className="page-services">
          <h2 style={{textAlign:"center"}}>Nos Services</h2>
          <div className="row">
            <div className="col-md-4">
              <h3>Créations de vêtements sur mesure pour Homme</h3>
              <p>Des vêtements uniques adaptés à votre style.</p>
              <p>Nous mettons notre passion au service de votre élégance. Chaque pièce est conçue avec soin, alliant savoir-faire traditionnel et tendances modernes.</p>
              <p>Explorez notre collection exclusive de costumes traditionnels, grand mboubous, et accessoires, confectionnés sur mesure pour refléter votre personnalité distinctive.</p>
              <p>Confiez-nous votre vision, et nous la transformerons en une réalité vestimentaire d'exception.</p>
              <p>Rejoignez-nous pour une expérience de shopping personnalisée qui redéfinit le luxe et l'authenticité.</p>
              <p>Parce que votre style mérite d'être unique.</p>
              <p>pour réserver votre consultation sur mesure.</p>
              <div className='text-center'>
                <Link to="/Contact" className="btn btn-secondary ">
                  Contactez-nous
                </Link>
                </div>
            </div>
            <div className="col-md-4">
              <h3>Créations de vêtements sur mesure pour Femme</h3>
              <p>Découvrez l'élégance personnalisée avec nos créations sur mesure pour femmes.</p>
              <p>Chaque pièce est une œuvre d'art, conçue pour accentuer votre beauté naturelle et souligner votre style distinctif.</p>
              <p>Nous croyons en la puissance de la personnalisation. Notre équipe de couturiers talentueux est dédiée à transformer vos idées en pièces vestimentaires uniques qui vous ressemblent.</p>
              <p>Explorez notre collection de robes de soirée, tenues professionnelles, et vêtements décontractés, chacun créé avec une attention méticuleuse aux détails.</p>
              <p>Parce que chaque femme mérite de se sentir exceptionnelle, nous offrons des consultations personnalisées pour comprendre vos besoins et désirs uniques.</p>
              <p>Plongez dans le monde de la mode sur mesure et découvrez la joie de porter des vêtements qui sont faits exclusivement pour vous.</p>
              <p> pour réserver votre consultation sur mesure et commencez votre voyage vers l'élégance sur mesure.</p>
              <div className='text-center'>
                <Link to="/Contact" className="btn btn-secondary ">
                  Contactez-nous
                </Link>
                </div>
              </div>
              <div className="col-md-4">
                <h3>Conseils personnalisés en matière de style</h3>
                <p>Explorez votre style unique avec nos conseils personnalisés.</p>
                <p>À Conseils Personnalisés, nous comprenons que votre style est une expression individuelle de votre personnalité. Notre équipe dévouée est là pour vous guider dans la découverte et l'amplification de votre style distinctif.</p>
                <p>Que vous cherchiez à affiner votre garde-robe, à vous préparer pour une occasion spéciale, ou à explorer de nouvelles tendances, nos experts en style sont prêts à vous accompagner à chaque étape.</p>
                <p>Nous croyons que la confiance en soi commence par le choix de vêtements qui reflètent votre authenticité. Avec des conseils personnalisés, vous pouvez créer une garde-robe qui vous fait vous sentir confiant(e) et bien dans votre peau.</p>
                <p>Contactez-nous dès aujourd'hui pour réserver une séance de conseils personnalisés et commencez votre voyage vers une expression de style qui est vraiment la vôtre.</p>
                <div className='text-center'>
                  <Link to="/Contact" className="btn btn-secondary">
                    Contactez-nous
                  </Link>
                </div>
              </div>

            {/* Ajoutez d'autres services selon vos besoins */}
          </div>
      </section>
      {/* Ajoutez d'autres services selon vos besoins */}

      {/* Bouton de retour à la page d'accueil ou au catalogue */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Retour à l'Accueil
        </Link>
      </div>
    </div>
  );
};

export default Services;
