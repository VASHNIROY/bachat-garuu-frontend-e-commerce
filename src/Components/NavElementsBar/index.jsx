import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Scrollbars } from "react-custom-scrollbars";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { useAppContext } from "../../Context/index.jsx";

export const NavElementsBar = () => {
  const [isCategoryTrue, setIsCateogrytrue] = useState(false);
  const [activedropEle, setActivedropEle] = useState("");

  const { categoryList } = useAppContext();

  const { cartCount } = useAppContext();

  function showCategoriesDropdown() {
    return (
      <SlideDown
        className="nav-dropdown-main-container"
        onMouseLeave={() => setIsCateogrytrue(false)}
      >
        <Scrollbars style={{ width: 300, height: 480 }}>
          <ul className="nav-dropdown-ul-container">
            {categoryList.map((each) => (
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
                  <Badge badgeContent={4} color="primary">
                    <FaRegHeart className="nav-ele-bar-icon" />
                  </Badge>
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Cart">
                <IconButton>
                  <Badge badgeContent={cartCount} color="primary">
                    <RiShoppingCart2Line className="nav-ele-bar-icon" />
                  </Badge>
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
