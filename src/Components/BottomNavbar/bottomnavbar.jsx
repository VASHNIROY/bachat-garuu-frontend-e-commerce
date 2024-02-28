import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import Badge from "@mui/material/Badge";

import "./bottomnav.css";
import { useAppContext } from "../../Context";

const bottonNavIcons = [
  {
    id: 1,
    icon: <CiHome className="bottom-nav-icon-size" />,
    name: "Home",
  },
  { id: 2, icon: <CiUser className="bottom-nav-icon-size" />, name: "User" },
  {
    id: 3,
    icon: <CiShoppingCart className="bottom-nav-icon-size" />,
    name: "Cart",
  },
  {
    id: 4,
    icon: <CiHeart className="bottom-nav-icon-size" />,
    name: "Wishlist",
  },
  {
    id: 5,
    icon: <IoIosGitCompare className="bottom-nav-icon-size" />,
    name: "Compare",
  },
];

export default function SimpleBottomNavigation() {
  const [bottomNaviconActive, setBottomNaviconActive] = useState("Home");
  const { cartCount } = useAppContext();

  return (
    <div className="bottomnav-main-container">
      <ul className="bottomnav-ul-container">
        {bottonNavIcons.map((each) => {
          const bottomNavClassName =
            bottomNaviconActive === each.name
              ? "bottom-nav-icons-container-active"
              : "bottom-nav-icons-container";

          return (
            <li
              key={each.id}
              className={`bottom-nav-icons-container ${bottomNavClassName}`}
              onClick={() => setBottomNaviconActive(each.name)}
            >
              {each.name === "Cart" ? (
                <>
                  <Badge badgeContent={cartCount} color="primary">
                    {each.icon}
                  </Badge>
                  {bottomNaviconActive === each.name && (
                    <p className="bottomnav-icon-label">{each.name}</p>
                  )}
                </>
              ) : (
                <>
                  {" "}
                  {each.icon}
                  {bottomNaviconActive === each.name && (
                    <p className="bottomnav-icon-label">{each.name}</p>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
