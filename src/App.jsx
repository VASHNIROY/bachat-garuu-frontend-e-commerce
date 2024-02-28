import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import { createContext, useEffect, useState } from "react";
import ContactUs from "./Pages/ContactUs";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const context = createContext();

function App() {
  const [categoryList, setCategoryList] = useState([]);

  const bodyData = {
    vendor_id: "4d513d3d",
    user_id: "27",
    dashboard_type: "ecommerce",
  };

  const formData = new FormData();

  Object.entries(bodyData).forEach(([key, value]) => {
    formData.append(key, value);
  });

  useEffect(() => {
    const Fetchdata = async (formData) => {
      const api = `${baseUrl}dashboard`;
      console.log("formData", formData);
      const options = {
        method: "POST",
        body: formData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();
        const categorysList = data.data.filter(
          (each) => each.type === "category_list"
        );

        setCategoryList(categorysList[0].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    Fetchdata(formData);
  }, []);

  console.log(categoryList);

  return (
    <div className="app-container">
      <context.Provider value={categoryList}>
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </context.Provider>
    </div>
  );
}

export default App;
