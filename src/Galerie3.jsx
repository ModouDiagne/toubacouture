import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Carousel } from 'react-bootstrap';
import './index.css';

const Galerie = () => {
  const femmesImages = [
    "/images/femmes/image162.jpg", 
        "/images/femmes/image175.jpg", 
        "/images/femmes/image191.jpg", 
        "/images/femmes/image202.jpg", 
        "/images/femmes/image300.jpeg", 
        "/images/femmes/image301.jpeg",
        "/images/femmes/image302.jpeg",
        "/images/femmes/image303.jpeg",
        "/images/femmes/image304.jpeg",
        "/images/femmes/image305.jpeg",
        "/images/femmes/image306.jpeg",
        "/images/femmes/image312.jpeg",
        "/images/femmes/image313.jpeg",
        "/images/femmes/image318.jpeg",
        "/images/femmes/image320.jpeg",
        "/images/femmes/image321.jpeg",
        "/images/femmes/image323.jpeg",
        "/images/femmes/image329.jpeg",
        "/images/femmes/image330.jpeg",
        "/images/femmes/image331.jpeg",
        "/images/femmes/image332.jpeg",
        "/images/femmes/image334.jpeg",
        "/images/femmes/image335.jpeg",
        "/images/femmes/image336.jpeg",
        "/images/femmes/image337.jpeg",
        "/images/femmes/image338.jpeg",
        "/images/femmes/image346.jpeg",
        "/images/femmes/image347.jpeg",
        "/images/femmes/image349.jpeg",
        "/images/femmes/image350.jpeg",
        "/images/femmes/image351.jpeg",
        "/images/femmes/image352.jpeg",
        "/images/femmes/image353.jpeg",
        "/images/femmes/image354.jpeg",
        "/images/femmes/image355.jpeg",
        "/images/femmes/image356.jpeg",
        "/images/femmes/image357.jpeg",
        "/images/femmes/image372.jpeg",
        "/images/femmes/image373.jpeg",
        "/images/femmes/image374.jpeg",
        "/images/femmes/image375.jpeg",
        "/images/femmes/image376.jpeg",
        "/images/femmes/image377.jpeg",
        "/images/femmes/image378.jpeg",
        "/images/femmes/image379.jpeg",
        "/images/femmes/image380.jpeg",
        "/images/femmes/image381.jpg",
        "/images/femmes/image382.jpeg",
        "/images/femmes/image383.jpeg",
        "/images/femmes/image384.jpeg",
        "/images/femmes/image385.jpeg",
        "/images/femmes/image386.jpeg",
        "/images/femmes/image387.jpeg",
        "/images/femmes/image398.jpeg",
        "/images/femmes/image399.jpeg",
        "/images/femmes/image400.jpeg",
        "/images/femmes/image401.jpeg",
        "/images/femmes/image402.jpeg",
        "/images/femmes/image403.jpeg",
        "/images/femmes/image404.jpeg",
        "/images/femmes/image405.jpeg",
        "/images/femmes/image406.jpeg",
        "/images/femmes/image407.jpeg",
        "/images/femmes/image408.jpeg",
        "/images/femmes/image409.jpeg",
        "/images/femmes/image410.jpeg",
        "/images/femmes/image411.jpeg",
        "/images/femmes/image413.jpeg",
        "/images/femmes/image414.jpeg",
        "/images/femmes/image415.jpeg",
        "/images/femmes/image416.jpeg",
        "/images/femmes/image417.jpeg",
        "/images/femmes/image418.jpeg",
        "/images/femmes/image422.jpg",
        "/images/femmes/image423.jpeg",
        "/images/femmes/image424.jpeg",
        "/images/femmes/image426.jpeg",
        "/images/femmes/image427.jpeg",
        "/images/femmes/image428.jpeg",
        "/images/femmes/image429.jpeg",
        "/images/femmes/image430.jpeg",
        "/images/femmes/image1.jpeg",
        "/images/femmes/image2.jpeg"
  ]; // (votre tableau d'images de femmes)
  const hommesImages = [
    "/images/hommes/image172.jpg", 
        "/images/hommes/image177.jpg", 
        "/images/hommes/image186.jpg", 
        "/images/hommes/image13.jpg", 
        "/images/hommes/image161.jpg", 
        "/images/hommes/image167.jpg",
        "/images/hommes/image187.jpg",
        "/images/hommes/image188.jpg",
        "/images/hommes/image189.jpg",
        "/images/hommes/image190.jpg",
        "/images/hommes/image192.jpg",
        "/images/hommes/image193.jpg",
        "/images/hommes/image195.jpg",
        "/images/hommes/image196.jpg",
        "/images/hommes/image198.jpg",
        "/images/hommes/image199.jpg",
        "/images/hommes/image200.jpg",
        "/images/hommes/image201.jpg",
        "/images/hommes/image307.jpeg", 
        "/images/hommes/image308.jpeg", 
        "/images/hommes/image309.jpeg", 
        "/images/hommes/image310.jpeg", 
        "/images/hommes/image314.jpeg", 
        "/images/hommes/image324.jpeg", 
        "/images/hommes/image325.jpeg", 
        "/images/hommes/image326.jpeg", 
        "/images/hommes/image327.jpeg", 
        "/images/hommes/image339.jpeg", 
        "/images/hommes/image340.jpeg", 
        "/images/hommes/image341.jpeg", 
        "/images/hommes/image342.jpeg", 
        "/images/hommes/image343.jpeg", 
        "/images/hommes/image344.jpeg", 
        "/images/hommes/image345.jpeg", 
        "/images/hommes/image358.jpeg", 
        "/images/hommes/image359.jpeg", 
        "/images/hommes/image360.jpeg", 
        "/images/hommes/image361.jpeg", 
        "/images/hommes/image362.jpeg", 
        "/images/hommes/image363.jpeg", 
        "/images/hommes/image364.jpeg", 
        "/images/hommes/image365.jpeg", 
        "/images/hommes/image366.jpeg", 
        "/images/hommes/image367.jpeg", 
        "/images/hommes/image368.jpeg", 
        "/images/hommes/image369.jpeg", 
        "/images/hommes/image370.jpeg", 
        "/images/hommes/image371.jpeg", 
        "/images/hommes/image388.jpg", 
        "/images/hommes/image389.jpeg",
        "/images/hommes/image390.jpeg", 
        "/images/hommes/image391.jpeg", 
        "/images/hommes/image393.jpeg", 
        "/images/hommes/image394.jpeg", 
        "/images/hommes/image395.jpeg",
        "/images/hommes/image396.jpeg", 
        "/images/hommes/image397.jpg"
  ]; // (votre tableau d'images d'hommes)

  // Fonction pour diviser les images en groupes en fonction de la taille de l'écran
  const diviserEnGroupes = (images, colonnes) => {
    const groupes = [];
    for (let i = 0; i < images.length; i += colonnes) {
      groupes.push(images.slice(i, i + colonnes));
    }
    return groupes;
  };

  // Obtenir les groupes d'images pour les femmes et les hommes avec différents nombres de colonnes
  const femmesGroupesMobile = diviserEnGroupes(femmesImages, 2);
  const femmesGroupesTablet = diviserEnGroupes(femmesImages, 3);
  const femmesGroupesDesktop = diviserEnGroupes(femmesImages, 6);

  const hommesGroupesMobile = diviserEnGroupes(hommesImages, 2);
  const hommesGroupesTablet = diviserEnGroupes(hommesImages, 3);
  const hommesGroupesDesktop = diviserEnGroupes(hommesImages, 6);

  return (
    <div className='galerie'>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Galerie</h2>
      <h2 style={{ textAlign: "center" }}>Créez Votre Style Unique</h2>
      <p style={{ textAlign: "center" }}>Parcourez notre catalogue et découvrez la couture qui vous convient.</p>

      <div>
        <h3 style={{ textAlign: "center" }}>Femmes</h3>
        <Carousel>
          {femmesGroupesMobile.map((groupe, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {groupe.map((image, i) => (
                  <img key={i} style={{ width: '45%', height: '200px', margin: '0 5px' }} className="d-block mx-auto rounded" src={image} alt={`Femme ${i + 1}`} />
                ))}
              </div>
            </Carousel.Item>
          ))}
          {femmesGroupesTablet.map((groupe, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {groupe.map((image, i) => (
                  <img key={i} style={{ width: '30%', height: '200px', margin: '0 5px' }} className="d-block mx-auto rounded" src={image} alt={`Femme ${i + 1}`} />
                ))}
              </div>
            </Carousel.Item>
          ))}
          {femmesGroupesDesktop.map((groupe, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {groupe.map((image, i) => (
                  <img key={i} style={{ width: '15%', height: '200px', margin: '0 5px' }} className="d-block mx-auto rounded" src={image} alt={`Femme ${i + 1}`} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h3 style={{ textAlign: "center" }}>Hommes</h3>
        <Carousel>
          {hommesGroupesMobile.map((groupe, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {groupe.map((image, i) => (
                  <img key={i} style={{ width: '45%', height: '200px', margin: '0 5px' }} className="d-block mx-auto rounded" src={image} alt={`Homme ${i + 1}`} />
                ))}
              </div>
            </Carousel.Item>
          ))}
          {hommesGroupesTablet.map((groupe, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {groupe.map((image, i) => (
                  <img key={i} style={{ width: '30%', height: '200px', margin: '0 5px' }} className="d-block mx-auto rounded" src={image} alt={`Homme ${i + 1}`} />
                ))}
              </div>
            </Carousel.Item>
          ))}
          {hommesGroupesDesktop.map((groupe, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {groupe.map((image, i) => (
                  <img key={i} style={{ width: '15%', height: '200px', margin: '0 5px' }} className="d-block mx-auto rounded" src={image} alt={`Homme ${i + 1}`} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Galerie;
