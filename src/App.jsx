import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* <Routes>
        <Route path="/" Component={HomePage} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
