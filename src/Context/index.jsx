import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const baseUrl = import.meta.env.VITE_BASE_URL;

export const AppProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [cartCount, setCartCount] = useState();
  const [featuredProductsList, setFeaturedProductsList] = useState([]);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

  const dashboardBodyData = {
    vendor_id: "4d513d3d",
    user_id: "27",
    dashboard_type: "ecommerce",
  };

  const cartBody = {
    vendor_id: "4d513d3d",
    user_id: "27",
    cart_type: "ecommerce",
  };

  const dashboardFormData = new FormData();

  Object.entries(dashboardBodyData).forEach(([key, value]) => {
    dashboardFormData.append(key, value);
  });

  const cartformData = new FormData();

  Object.entries(cartBody).forEach(([key, value]) => {
    cartformData.append(key, value);
  });

  useEffect(() => {
    const FetchCartCountdata = async (cartformData) => {
      const api = `${baseUrl}getCartCount`;
      const options = {
        method: "POST",
        body: cartformData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        const count = data.data.count;
        setCartCount(count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchCartCountdata(cartformData);
  }, []);

  useEffect(() => {
    const FetchCategorydata = async (dashboardFormData) => {
      const api = `${baseUrl}dashboard`;
      const options = {
        method: "POST",
        body: dashboardFormData,
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
    FetchCategorydata(dashboardFormData);
  }, []);

  useEffect(() => {
    const FetchFeaturedProductsdata = async (dashboardFormData) => {
      const api = `${baseUrl}dashboard`;
      const options = {
        method: "POST",
        body: dashboardFormData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        const featuredProducts = data.data.filter(
          (each) => each.type === "product"
        );

        setFeaturedProductsList(featuredProducts[0].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchFeaturedProductsdata(dashboardFormData);
  }, []);

  useEffect(() => {
    const FetchRecentlyViewdata = async (dashboardFormData) => {
      const api = `${baseUrl}dashboard`;
      const options = {
        method: "POST",
        body: dashboardFormData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        const recentlyViewedProductsList = data.data.filter(
          (each) => each.type === "recently_viewed"
        );

        setRecentlyViewedProducts(recentlyViewedProductsList[0].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchRecentlyViewdata(dashboardFormData);
  }, []);

  AppProvider.propTypes = {
    children: PropTypes.node,
  };

  return (
    <AppContext.Provider
      value={{ categoryList, cartCount, featuredProductsList ,recentlyViewedProducts}}
    >
      {children}
    </AppContext.Provider>
  );
};
