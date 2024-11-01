import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';
import Cart from './Pages/Cart/Cart';

import Women from './Pages/Women/Women';
import Product from './Components/Product/Product';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Sign/SignUp';
import Profile from './Pages/Profile/Profile';
import NavBar from './Components/NavBar/NavBar';
import CheckOut from './Pages/Check out/CheckOut';

function App() {
  const productData = {
    title: 'White Print Cotton Shirt',
    description:
      'This shirt features a timeless white base color, perfectly complemented by a beautiful print design that adds a touch of sophistication and whimsy. The print is carefully crafted to create a unique visual narrative that is both striking and understated, making it perfect for everyday wear or as a stylish addition to your formal attire.',
    price: 3760.00,
    images: [
      '../src/assets/prod.webp',
      '../src/assets/prod 2.webp',
      '../src/assets/prod3.webp',
    ],
    sizes: ['2XL', 'XL', 'L', 'M', 'S'],
    colors: ['Multi Color'],
    maxQuantity:5
  };

  return (
    <BrowserRouter>
      <div className="m-3">
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/men" element={<Mens />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women" element={<Women />} />


          <Route path="/product" element={<Product {...productData} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
