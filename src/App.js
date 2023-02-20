import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css';
import HomeHeader from './components/home-components/HomeHeader';
import DiscoverPets from './components/home-components/DiscoverPets';
import AdoptionResources from './components/home-components/AdoptionResources';
import Birds from './components/bird-components/Birds';
import Cats from './components/cat-components/Cats';
import Dogs from './components/dog-components/Dogs';
import Contact from './components/form-components/Contact';
import Confirmation from './components/form-components/Confirmation';
import Sitemap from './components/sitemap-components/Sitemap';
import Footer from './Footer';

function App() {
  return (
    <main>
      <section>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeHeader />} exact />
          </Routes>
          <Routes>
            <Route path="/" element={<DiscoverPets />} exact />
          </Routes>
          <Routes>
            <Route path="/" element={<AdoptionResources />} exact />
          </Routes>
          <Routes>
            <Route path="/Cats" element={<Cats />} exact />
          </Routes>
          <Routes>
            <Route path="/Dogs" element={<Dogs />} exact />
          </Routes>
          <Routes>
            <Route path="/Birds" element={<Birds />} exact />
          </Routes>
          <Routes>
            <Route path="/Contact" element={<Contact />} exact />
          </Routes>
          <Routes>
            <Route path="/Confirmation" element={<Confirmation />} exact />
          </Routes>
          <Routes>
            <Route path="/Sitemap" element={<Sitemap />} exact />
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
