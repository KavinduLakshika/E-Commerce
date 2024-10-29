import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="men" element={<Mens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
