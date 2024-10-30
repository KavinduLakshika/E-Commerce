import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';
import Formalwear from './Pages/Mens/MensWear/Formalwear';
import InnerWear from './Pages/Mens/MensWear/InnerWear';
import CasualWear from './Pages/Mens/MensWear/CasualWear';
import ActiveWear from './Pages/Mens/MensWear/ActiveWear';
import Accessories from './Pages/Mens/MensWear/Accessories';
import Women from './Pages/Women/Women';
import Product from './Components/product/product';

function App() {
  const productData = {
    title: 'White Print Cotton Shirt',
    description:
      'This shirt features a timeless white base color, perfectly complemented by a beautiful print design that adds a touch of sophistication and whimsy. The print is carefully crafted to create a unique visual narrative that is both striking and understated, making it perfect for everyday wear or as a stylish addition to your formal attire.',
    price: 3760.00,
    images: [
      '../src/assets/prod.webp',
      '../src/assets/IMG-20221017-WA0043.jpg',
      '../src/assets/prod.webp',
      '../src/assets/IMG-20221017-WA0043.jpg',
    ],
    sizes: ['2XL', 'XL', 'L', 'M', 'S'],
    colors: ['Multi Color'],
  };

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

          <Route path="/women" element={<Women />} />

          <Route path="/product" element={<Product {...productData} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
