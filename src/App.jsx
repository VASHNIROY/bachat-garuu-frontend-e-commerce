import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import SimpleBottomNavigation from "./Components/BottomNavbar/bottomnavbar";
import { AppProvider } from "./Context";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const isMobileScreen = useMediaQuery("(max-width: 1250px)");

  return (
    <div className="app-container">
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
        {isMobileScreen && <SimpleBottomNavigation />}
      </AppProvider>
    </div>
  );
}

export default App;
