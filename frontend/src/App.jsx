import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';
import Formalwear from './Pages/Mens/MensWear/Formalwear';
import InnerWear from './Pages/Mens/MensWear/InnerWear';
import CasualWear from './Pages/Mens/MensWear/CasualWear';
import ActiveWear from './Pages/Mens/MensWear/ActiveWear';
import Accessories from './Pages/Mens/MensWear/Accessories';
import Cart from './Pages/Cart/Cart';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="m-3">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/men" element={<Mens />} />
        <Route path="/formalwear" element={<Formalwear />} />
        <Route path="/innerWear" element={<InnerWear />} />
        <Route path="/casualWear" element={<CasualWear />} />
        <Route path="/activeWear" element={<ActiveWear />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
