import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; 
import Home from './Pages/Home/Home';
import CardList from './Components/Card/CardList';
import prod from './assets/prod.jpg';

function App() {
  const products = [
    {
      image: prod,
      prodName: 'Product 1',
      prodPrice: 1500,
      availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
    },
    {
      image: prod,
      prodName: 'Product 2',
      prodPrice: 2500,
      availableSizes: ['2XL', 'XL', 'L', 'M', 'S'],
    },
  ];

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CardList data={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
