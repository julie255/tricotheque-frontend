import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Accueil from './pages/Accueil';
import Galerie from './composants/Galerie';
import Apropos from './pages/Apropos';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Publication from './pages/Publication';
import Contact from './composants/Contact';
import Detailscreation from './pages/Detailscreation';
import Communaute from './composants/Communaute';
import { Provider } from './components/ui/provider';
import Rechercher from './pages/Rechercher';
// import FormulaireCommande from './composants/FormulaireCommande';
// import Suivi from './pages/Suivi';
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galerie/:id" element={<Detailscreation />} />
          <Route path="/communaute" element={<Communaute />} />
          <Route path="/rechercher" element={<Rechercher />} />
          {/* <Route path="/commande" element={<FormulaireCommande id="123" />} />
          <Route path="/suivi" element={<Suivi />} />
          <Route path="/" element={<Galerie />} /> */}


        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
