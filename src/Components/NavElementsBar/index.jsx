import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";
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
import CategorySlider from "../CategorySlider/categorySlider.jsx";
import CategoryItem from "../CategoryItem/CategoryItem.jsx";

export const NavElementsBar = () => {
  const [isCategoryTrue, setIsCateogrytrue] = useState(false);

  const [isShowbyCategoryTrue, setShowbyCategoryTrue] = useState(false);

  const { categoryList, localCartCount, serverCartCount } = useAppContext();

  const cartCount = localCartCount + serverCartCount;
  const initialActiveElId =
    categoryList && categoryList.length > 0 ? categoryList[0].category_id : "";

  const [activeElId, setActivedropEle] = useState(initialActiveElId);

  console.log(activeElId, "actsmdvksmd");

  console.log(categoryList, "nbvskmljpewifodvkl");

  const handleMouseMove = (e) => {
    // Get the horizontal and vertical position of the mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the horizontal and vertical position of the container
    const containerX = e.currentTarget.getBoundingClientRect().left;
    const containerY = e.currentTarget.getBoundingClientRect().top;

    // Calculate the distance between the mouse and the container
    const distanceX = mouseX - containerX;
    const distanceY = mouseY - containerY;

    // If the mouse is moving downwards, set isCategoryTrue to true
    if (
      distanceY > 0 &&
      distanceX >= 0 &&
      distanceX <= e.currentTarget.offsetWidth
    ) {
      setIsCateogrytrue(true);
    } else {
      // Otherwise, set isCategoryTrue to false
      setIsCateogrytrue(false);
    }
  };
  function showCategoriesDropdown() {
    return (
      <SlideDown
        className="nav-dropdown-main-container"
        onMouseLeave={() => setIsCateogrytrue(false)}
      >
        <Scrollbars style={{ width: 300, height: 480 }}>
          <ul className="nav-dropdown-ul-container">
            {categoryList.map((each) => {
              console.log(activeElId, "active Id");
              return (
                <li
                  key={each.category_id}
                  onClick={() => setActivedropEle(each.category_id)}
                  className={`${
                    activeElId === each.category_id
                      ? "nav-dropdown-li-active"
                      : ""
                  }`}
                >
                  {each.name}
                </li>
              );
            })}
          </ul>
        </Scrollbars>
        <div className="nav-dropdown-side-container">
          <CategoryItem categoryId={activeElId} />
        </div>
      </SlideDown>
    );
  }

  function showCategoryCarousel() {
    return (
      <SlideDown
        className="nav-dropdown-shop-by-container"
        onMouseLeave={() => setShowbyCategoryTrue(false)}
      >
        <CategorySlider />
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
            onMouseLeave={handleMouseMove}
            onMouseEnter={() => setIsCateogrytrue(true)}
          >
            <RxHamburgerMenu />
            All Categories
          </button>
          <ul className="nav-ele-bar-ul-container">
            <li className="nav-ele-bar-li-ele">Home</li>
            <li className="nav-ele-bar-li-ele">Shop By Brand</li>
            <li
              className="nav-ele-bar-li-ele"
              onClick={() => showCategoryCarousel(!isCategoryTrue)}
              onMouseEnter={() => setShowbyCategoryTrue(true)}
            >
              Shop By Category
            </li>
            <li className="nav-ele-bar-li-ele">Blog</li>
            <li className="nav-ele-bar-li-ele">Shop</li>
            <li className="nav-ele-bar-li-ele">Elements</li>
            <li className="nav-ele-bar-li-ele">Features</li>
          </ul>
          <ul className="nav-ele-bar-icons-ul-container">
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
      {isShowbyCategoryTrue && showCategoryCarousel()}
    </>
  );
};

export default NavElementsBar;
