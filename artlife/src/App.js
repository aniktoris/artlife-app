import './App.css';
import { Home } from './components/Home';
import { Arts } from './components/Arts';
import { Exhibitions } from './components/Exhibitions';
import { FavArtList } from './components/FavArtList';
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArtDetails from './components/ArtDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ArtDetails />} />
          <Route path="/arts" element={<Arts />} />

          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/artlist" element={<FavArtList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
