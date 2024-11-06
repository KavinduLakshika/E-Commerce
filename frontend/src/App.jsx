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
import Dashboard from './Pages/Dashboard/Dashboard';
import Add from './Pages/Dashboard/DashboardPages/Add';
import List from './Pages/Dashboard/DashboardPages/List';
import OrderList from './Pages/Dashboard/DashboardPages/OrderList';
import PassOtp from './Pages/Login/passwordRecovery/PassOtp';
import ReqOtp from './Pages/Login/passwordRecovery/ReqOtp';
import RegOtp from './Pages/Login/passwordRecovery/RegOtp';
import ResetPassword from './Pages/Login/passwordRecovery/ResetPassword';

function App() {

  return (
    <BrowserRouter>
      <div className="m-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women" element={<Women />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkOut" element={<CheckOut />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/passOtp" element={<PassOtp />} />
          <Route path="/reqOtp" element={<ReqOtp />} />
          <Route path="/regOtp" element={<RegOtp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

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
