import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';  // Assurez-vous que le chemin d'importation est correct
import Home from './Home';
import APropos from './apropos';
import Services from './services';
import Galerie from './Galerie';
import Contact from './Contact';

const App = () => (
  <Router>
    <div>
     <Navigation/>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/apropos' element={<APropos/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/Galerie' element={<Galerie/>} />
          <Route path='/Contact' element={<Contact/>} />
          {/* Ajoutez d'autres routes pour vos différentes pages */}
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;
