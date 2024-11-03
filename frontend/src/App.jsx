import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';
import Cart from './Pages/Cart/Cart';
import Women from './Pages/Women/Women';
import Product from './Components/Product/Product';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Sign/SignUp';
import Profile from './Pages/Profile/Profile';
import CheckOut from './Pages/Check out/CheckOut';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <div className="m-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women" element={<Women />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
      </div>
      <Routes>
        <Route path='/sidebar' element={<SideBar />} />
        <Route path='/dash' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
