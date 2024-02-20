import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FeaturedProducts from "./Components/FeaturedProducts";
import Navbar from "./Components/Navbar/navbar";
import SearchPopup from "./Components/Navbar/searchpopup/searchPopup";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* <FeaturedProducts /> */}
    </div>
  );
}

export default App;
