import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const baseUrl = import.meta.env.VITE_BASE_URL;

export const AppProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [serverCartCount, setServerCartCount] = useState();
  const [localCartCount, setlocalCartCount] = useState(0);
  const [featuredProductsList, setFeaturedProductsList] = useState([]);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  const [sponsoredProducts, setSponsoredProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [bannerData, setBannerData] = useState([]);
  const [cartDetails, setCartDetails] = useState([]);

  const [productData, SetProductDetails] = useState({
    productDetails: {},
    similarProducts: [],
  });

  const dashboardBodyData = {
    vendor_id: "4d513d3d",
    user_id: "27",
    dashboard_type: "ecommerce",
  };

  const cartBodyData = {
    vendor_id: "4d513d3d",
    user_id: "1",
    cart_type: "ecommerce",
  };

  const cartCountBody = {
    vendor_id: "4d544d3d",
    user_id: "1",
    cart_type: "ecommerce",
  };

  const getProductBody = {
    vendor_id: "4d513d3d",
    user_id: "27",
    product_id: productId,
  };
  const FetchProductDetailsData = async () => {
    const productFormData = new FormData();

    Object.entries(getProductBody).forEach(([key, value]) => {
      productFormData.append(key, value);
    });

    const api = `${baseUrl}getProductDetails`;
    const options = {
      method: "POST",
      body: productFormData,
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();

      const productDetails = data.data;

      const similarProducts = data.similar_product;

      SetProductDetails({ productDetails, similarProducts });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const dashboardFormData = new FormData();

  Object.entries(dashboardBodyData).forEach(([key, value]) => {
    dashboardFormData.append(key, value);
  });

  const cartformData = new FormData();

  Object.entries(cartCountBody).forEach(([key, value]) => {
    cartformData.append(key, value);
  });

  const cartDetailsformData = new FormData();

  Object.entries(cartBodyData).forEach(([key, value]) => {
    cartDetailsformData.append(key, value);
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
        setServerCartCount(count);
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

        console.log(categoryList, "context category List");

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

        const setSponsoredProductsList = data.data.filter(
          (each) => each.type === "product1"
        );

        setSponsoredProducts(setSponsoredProductsList[0].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchRecentlyViewdata(dashboardFormData);
  }, []);

  useEffect(() => {
    const FetchCartDetails = async () => {
      const api = `${baseUrl}viewCart`;
      const options = {
        method: "POST",
        body: cartDetailsformData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        setCartDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchCartDetails();
  }, []);

  useEffect(() => {
    const FetchBannerCarouseldata = async (dashboardFormData) => {
      const api = `${baseUrl}dashboard`;
      const options = {
        method: "POST",
        body: dashboardFormData,
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        const bannerData = data.data.filter((each) => each.type === "banner");
        setBannerData(bannerData[0].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchBannerCarouseldata(dashboardFormData);
  }, []);

  useEffect(() => {
    if (productId !== null) {
      FetchProductDetailsData();
    }
  }, [productId]);

  const incrementCartCount = () => {
    setlocalCartCount((prevCount) => prevCount + 1);
  };

  const setproductid = (id) => {
    setProductId(id);
  };

  async function addToCart(props) {
    const addToCartBody = {
      vendor_id: "4d544d3d",
      user_id: "1",
      product_id: productId,
      unit: productData.productDetails.unit_details[0].unit,
      unit_id: productData.productDetails.unit_details[0].unit_id,
      unit_value: productData.productDetails.unit_details[0].unit_value,
      type: props,
      product_type: productData.productDetails.product_type,
      cart_type: "ecommerce",
    };
    console.log("fetching product data ", addToCartBody, "type", props);
    const addToCartformData = new FormData();

    Object.entries(addToCartBody).forEach(([key, value]) => {
      addToCartformData.append(key, value);
    });
    const api = `${baseUrl}addToCart`;
    const options = {
      method: "POST",
      body: addToCartformData,
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  AppProvider.propTypes = {
    children: PropTypes.node,
  };

  return (
    <AppContext.Provider
      value={{
        categoryList,
        serverCartCount,
        featuredProductsList,
        recentlyViewedProducts,
        sponsoredProducts,
        incrementCartCount,
        localCartCount,
        setproductid,
        productData,
        addToCart,
        bannerData,
        cartDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
