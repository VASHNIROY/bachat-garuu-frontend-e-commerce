import { Link } from "react-router-dom";

import "./Profiledropdown.css";

export default function Profiledropdown() {
  return (
    <div className="profileContainer">
      <ul className="profileListContainer">
        <Link
          to="/orderlist"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <li>My Orders</li>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/wishlist">
          <li>WishList</li>
        </Link>
        <li>Gift Cards</li>
        <li>Rewards</li>
      </ul>
    </div>
  );
}
