import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './Pages/Home/Home';
import Mens from './Pages/Mens/Mens';
import Cart from './Pages/Cart/Cart';
import Women from './Pages/Women/Women';
import Product from './Components/Product/Product';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/Sign/SignUp';
import Profile from './Pages/Profile/Profile';
import CheckOut from './Pages/Check out/CheckOut';
import Dashboard from './Pages/Dashboard/Dashboard';
import Add from './Pages/Dashboard/DashboardPages/Add';
import List from './Pages/Dashboard/DashboardPages/List';
import OrderList from './Pages/Dashboard/DashboardPages/OrderList';

import PassOtp from './Pages/Auth/passwordRecovery/PassOtp';
import ReqOtp from './Pages/Auth/passwordRecovery/ReqOtp';
import ResetPassword from './Pages/Auth/passwordRecovery/ResetPassword';

function App() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const [cusImage, setCusImage] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedToken = localStorage.getItem('token');
    const storedStatus = localStorage.getItem('userStatus');
    const storedImage = localStorage.getItem('cusImage');

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedToken) setToken(storedToken);
    if (storedStatus) setUserStatus(storedStatus);
    if (storedImage) setCusImage(storedImage);
  }, []);


  const handleLogin = (name, email, token, cusStatus, image) => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    localStorage.setItem('userStatus', cusStatus);
    localStorage.setItem('cusImage', image)

    setName(name);
    setEmail(email);
    setToken(token);
    setUserStatus(cusStatus);
    setCusImage(image);
  };

  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('userStatus');
    localStorage.removeItem('cusImage');

    setName(null);
    setEmail(null);
    setToken(null);
    setUserStatus(null);
    setCusImage(null);
  };

  return (
    <BrowserRouter>
      <div className="m-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={token ? <Navigate to={userStatus === "inActive" ? "/login" : "/"} replace /> : <Login onLogin={handleLogin} />} />
          <Route path="/signUp" element={token ? <Navigate to="/" replace /> : <SignUp onLogin={handleLogin} />} />

          <Route path="/passOtp" element={<PassOtp />} />
          <Route path="/reqOtp" element={<ReqOtp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

          <Route path="/profile" element={<Profile onLogout={handleLogout} />} />

          <Route path="/men" element={<Mens />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women" element={<Women />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
      </div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add' element={<Add />} />
        <Route path='/list' element={<List />} />
        <Route path='/order_list' element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
