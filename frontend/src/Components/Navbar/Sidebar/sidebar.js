import { useState } from "react";
import "./sidebar.css";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ isMenuopen, setMenuOpen }) => {
  const [isMenuItem, setMenuItem] = useState("menu");
  const handleMenuChange = () => {
    setMenuOpen(false);
  };

  function MenuList() {
    return (
      <ul className="menu-ul-list">
        {" "}
        <li className="menu-list-items-li">
          <p className="">Home</p>
          <MdKeyboardArrowRight />
        </li>
        <p>
          Inner Pages
          <MdKeyboardArrowRight />
        </p>
        <p>
          Blog
          <MdKeyboardArrowRight />
        </p>
        <p>
          Shop
          <MdKeyboardArrowRight />
        </p>
      </ul>
    );
  }

  function ShopList() {
    return (
      <ul>
        {" "}
        <h1 className="heding">Shop</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </ul>
    );
  }

  console.log(isMenuItem);

  return (
    isMenuopen && (
      <div className="sidebar-main-container">
        <IoMdClose className="sidebar-close-icon" onClick={handleMenuChange} />
        <ul className="sidebar-menu-bar">
          <li
            className={`sidebar-menu-items ${
              isMenuItem === "menu" ? "sidebar-menu-items-active" : ""
            }`}
            onClick={() => setMenuItem("menu")}
          >
            Menu
          </li>
          <li
            className={`sidebar-menu-items ${
              isMenuItem === "shop" ? "sidebar-menu-items-active" : ""
            }`}
            onClick={() => setMenuItem("shop")}
          >
            Shop
          </li>
        </ul>
        {isMenuItem === "menu" ? MenuList() : ShopList()}
      </div>
    )
  );
};

export default Sidebar;
