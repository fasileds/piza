import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Orders from "./pages/orders/Orders";
import LogIn from "./pages/login/LogIn";
import Detailes from "./pages/detatile/Detailes";
import AdminOrders from "./pages/adminPages/adminOrders/AdminOrders";
import Role from "./pages/adminPages/role/Role";
import User from "./pages/adminPages/user/User";
import AddMnue from "./pages/adminPages/addMnue/AddMnue";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myOrders" element={<Orders />} />
          <Route path="/detaile" element={<Detailes />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/roles" element={<Role />} />
          <Route path="/admin/users" element={<User />} />
          <Route path="/admin/addMnue" element={<AddMnue />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
