import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';

function App() {
  return (
    <BrowserRouter>
    <div className="m-3">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="men" element={<Mens />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
