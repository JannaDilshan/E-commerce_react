import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
