import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Emplacement pour le logo */}
            <img
              src="/images/logo1.png" // Remplacez par le chemin de votre logo
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="col-md-4">
            {/* Emplacement pour les informations personnelles */}
            <p>BassirouDiagneToubaCouture</p>
            <p>Corniche serigne cheikh, Touba, Senegal</p>
            <p>Email : diagnecouture@gmail.com</p>
            <p>Téléphone : +1 234 567 890</p>
          </div>
          <div className="col-md-4">
            <p><em>Contactez-nous aujourd'hui pour donner vie à vos rêves de mode.</em></p>
            <p>
              <mark>Nous sommes impatients de vous accompagner dans votre voyage de style.</mark>
            </p>
            <h5>A propos du developpeur</h5>
            <p>Email: diagnemodou7199@gmail.com</p>
            <p>Téléphone : +221 78 464 37 40</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
