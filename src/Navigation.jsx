// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css'; // Assurez-vous que le chemin vers le fichier CSS est correct

const Navigation = () => {
  return (
    <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-lg-12 fixed-top">
          <div className="container-fluid">
            {/* Logo ou Nom de l'atelier */}
          
            <Link className="navbar-brand col-12 col-lg-2" to="/">
              BassirouDiagneToubaCouture
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Liens du menu à droite */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/apropos">
                    À Propos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/galerie">
                    Galerie
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
    </div>
  );
};

export default Navigation;
