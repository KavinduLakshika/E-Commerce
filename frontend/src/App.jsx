import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';
import Formalwear from './Pages/Mens/MensWear/Formalwear';
import InnerWear from './Pages/Mens/MensWear/InnerWear';
import CasualWear from './Pages/Mens/MensWear/CasualWear';
import ActiveWear from './Pages/Mens/MensWear/ActiveWear';
import Accessories from './Pages/Mens/MensWear/Accessories';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/men" element={<Mens />} />
        <Route path="/formalwear" element={<Formalwear />} />
        <Route path="/innerWear" element={<InnerWear />} />
        <Route path="/casualWear" element={<CasualWear />} />
        <Route path="/activeWear" element={<ActiveWear />} />
        <Route path="/accessories" element={<Accessories />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
