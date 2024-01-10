import './App.css';
import { Home } from './components/Home';
import { Arts } from './components/Arts';
import { Exhibitions } from './components/Exhibitions';
import { ArtList } from './components/ArtList';
import { Layout } from './Layout';
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
          <Route path="/artlist" element={<ArtList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
