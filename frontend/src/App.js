import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FeaturedProducts from "./Components/FeaturedProducts";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
      <div className="app-container">
        <Navbar />
        {/* <FeaturedProducts /> */}
      </div>
  );
}

export default App;
