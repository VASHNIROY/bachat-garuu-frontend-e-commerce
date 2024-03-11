import { useAppContext } from "../../Context";
import "./index.css";

import { HiMiniXMark } from "react-icons/hi2";

import { FaRupeeSign } from "react-icons/fa";

const Wishlist = () => {
  const { wishList } = useAppContext();
  console.log(wishList, "wishlist");

  return (
    <div className="wish-list-main-container">
      <h1 className="wish-list-main-heading">My Wishlist</h1>
      <div className="wish-list-list-container">
        {wishList.map((each) => (
          <div key={each.wishlist_id} className="wish-list-list-card">
            <div className="wish-list-image-container">
              <img
                src={each.home_image}
                alt={each.brand_name}
                className="wish-list-image"
              />
            </div>

            <div>
              <div className="wish-list-heading">
                <p className="wish-list-heading-hidden">{each.name}</p>
                <div className="wish-list-flex">
                  <p className="wish-list-price">
                    Price :
                    <span>
                      <FaRupeeSign size={16} />
                    </span>
                    {each.unit_sales_price}
                  </p>
                  <button className="wish-list-page-button">Add to Cart</button>
                </div>
              </div>
            </div>
            <p>
              <HiMiniXMark className="wish-list-cancel-icon" />
            </p>
          </div>
        ))}
      </div>
      {/* <div className="wish-list-subtotal-container">
        <p className="wish-list-sub-total-text">SubTotal : $20</p>
        <div className="wish-list-button-container">
          <button className="wish-list-page-button">View Cart</button>
          <button className="wish-list-page-button">Check out</button>
        </div>
      </div>*/}
    </div>
  );
};
export default Wishlist;
