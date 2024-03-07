import "./index.css";

import { HiMiniXMark } from "react-icons/hi2";

const Wishlist = () => {
  const cartList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <div className="wish-list-main-container">
      <h1 className="wish-list-main-heading">My Wishlist</h1>
      <div className="wish-list-list-container">
        {cartList.map((each) => (
          <div key={each.id} className="wish-list-list-card">
            <div className="wish-list-image-container">
              <img
                src="https://ecom.taxoguru.com/image/product/PRO23-112.jpeg"
                alt=""
                className="wish-list-image"
              />
            </div>

            <div>
              <div className="wish-list-heading">
                <p className="wish-list-heading-hidden">
                  Vitamin D3 (1000IU) Cap X, Vitamin D3 (1000IU) Cap X, Vitamin
                  D3 (1000IU) Cap X
                </p>
                <div className="wish-list-flex">
                  <p className="wish-list-price">Price : $20</p>
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
