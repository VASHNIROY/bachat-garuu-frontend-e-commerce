import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
