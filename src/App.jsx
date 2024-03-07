import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import SimpleBottomNavigation from "./Components/BottomNavbar/bottomnavbar";
import { AppProvider } from "./Context";
import { useMediaQuery } from "@material-ui/core";
import ContactUs from "./Pages/ContactusPage/ContactUs";
import ProductViewdetail from "./Components/ProductViewdetail/ProductViewdetail";
import Login from "./Pages/LoginPage";
import ForgotPassword from "./Pages/LoginPage/ForgotPassword";
import CartPage from "./Pages/CartPage";
import AboutUs from "./Pages/AboutUs";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

function App() {
  const isMobileScreen = useMediaQuery("(max-width: 1250px)");

  return (
    <div className="app-container">
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" Component={HomePage} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductViewdetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
        {isMobileScreen && <SimpleBottomNavigation />}
      </AppProvider>
    </div>
  );
}

export default App;
