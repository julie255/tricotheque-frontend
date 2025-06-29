import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Accueil from './pages/Accueil';
import Galerie from './composants/Galerie';
import Apropos from './pages/Apropos';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Publication from './pages/Publication';
import { Provider } from './components/ui/provider';


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
      </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
