import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import ProductList from "./pages/Product/ProductList";
import Cart from "./components/Cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import NotFound from "./components/404Page/NotFound";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Thank from "./pages/ThankYou/thank";
import './App.css';
import { useSelector } from "react-redux";

function App() {
  
  const user = useSelector((state) => state.auth.user) || JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register"  element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<Thank />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
