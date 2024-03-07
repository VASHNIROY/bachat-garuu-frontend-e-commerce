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
import Wishlist from "./Pages/Wishlist";
import AboutUs from "./Pages/AboutUs";

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
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
        {isMobileScreen && <SimpleBottomNavigation />}
      </AppProvider>
    </div>
  );
}

export default App;
