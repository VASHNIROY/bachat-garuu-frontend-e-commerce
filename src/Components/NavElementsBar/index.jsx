import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Scrollbars } from "react-custom-scrollbars";
import { useState, useEffect } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const categories = [
  { id: 1, name: "clothing" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Kitchen Appliances" },
  { id: 4, name: "New Born" },
  { id: 5, name: "Mobiles" },
  { id: 6, name: "Appliances" },
  { id: 16, name: "Face Scrubs" },
  { id: 17, name: "Face Scrubs" },
  { id: 18, name: "Face Scrubs" },
  { id: 19, name: "Face Scrubs" },
];

const baseUrl = import.meta.env.VITE_BASE_URL;

export const NavElementsBar = () => {
  const [isCategoryTrue, setIsCateogrytrue] = useState(false);
  const [activedropEle, setActivedropEle] = useState("");

  const bodyData = {
    vendor_id: "4d513d3d",
    user_id: "27",
    dashboard_type: "ecommerce",
  };

  const formData = new FormData();

  Object.entries(bodyData).forEach(([key, value]) => {
    formData.append(key, value);
  });

  console.log(formData);

  useEffect(() => {
    const Fetchdata = async (formData) => {
      const api = `${baseUrl}dashboard`;
      console.log("formData", formData);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      };

      try {
        const response = await fetch(api, options);
        console.log("response", response);
        const data = await response.json();
        console.log("jsonData", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    Fetchdata(formData);
  }, [formData]);

  function showCategoriesDropdown() {
    return (
      <SlideDown
        className="nav-dropdown-main-container"
        onMouseLeave={() => setIsCateogrytrue(false)}
      >
        <Scrollbars style={{ width: 300, height: 480 }}>
          <ul className="nav-dropdown-ul-container">
            {categories.map((each) => (
              <li
                key={each.id}
                onClick={() => setActivedropEle(each.name)}
                className={`${
                  activedropEle === each.name ? "nav-dropdown-li-active" : ""
                }`}
              >
                {each.name}
              </li>
            ))}
          </ul>
        </Scrollbars>
        <div className="nav-dropdown-side-container">
          <h1>hello</h1>
        </div>
      </SlideDown>
    );
  }

  return (
    <>
      <div className="navbar-ele">
        <div className="nav-ele-bar-main-container">
          <button
            className={`nav-ele-btn ${
              isCategoryTrue ? "nav-ele-btn-active" : ""
            }`}
            onClick={() => setIsCateogrytrue(!isCategoryTrue)}
            onMouseEnter={() => setIsCateogrytrue(true)}
          >
            <RxHamburgerMenu />
            All Categories
          </button>
          <ul className="nav-ele-bar-ul-container">
            <li className="nav-ele-bar-li-ele">Home</li>
            <li className="nav-ele-bar-li-ele">Shop By Brand</li>
            <li className="nav-ele-bar-li-ele">Shop By Category</li>
            <li className="nav-ele-bar-li-ele">Blog</li>
            <li className="nav-ele-bar-li-ele">Shop</li>
            <li className="nav-ele-bar-li-ele">Elements</li>
            <li className="nav-ele-bar-li-ele">Features</li>
          </ul>
          <ul className="nav-ele-bar-icons-ul-container">
            <li>
              <Tooltip title="Compare">
                <IconButton>
                  <FaCodeCompare className="nav-ele-bar-icon" />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Wishlist">
                <IconButton>
                  <FaRegHeart className="nav-ele-bar-icon" />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Cart">
                <IconButton>
                  <RiShoppingCart2Line className="nav-ele-bar-icon" />
                </IconButton>
              </Tooltip>
            </li>
          </ul>
        </div>
        <hr className="navbar-ele-hr-line" />
      </div>

      {isCategoryTrue && showCategoriesDropdown()}
    </>
  );
};

export default NavElementsBar;
