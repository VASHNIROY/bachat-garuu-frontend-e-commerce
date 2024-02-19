import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FeaturedProducts from "./Components/FeaturedProducts";

function App() {
  return (
    <div className="app-container">
      <div className="app-mini-container">
        <FeaturedProducts />
      </div>
    </div>
  );
}

export default App;
