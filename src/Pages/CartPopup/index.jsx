import "./index.css";

import { HiMiniXMark } from "react-icons/hi2";

const CartPopup = () => {
  const cartList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return (
    <div className="cart-pop-up-main-container">
      <div className="cart-pop-up-list-container">
        {cartList.map((each) => (
          <div key={each.id} className="cart-pop-up-list-card">
            <div className="cart-pop-up-image-container">
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/product42.jpg"
                alt=""
                className="cart-pop-up-image"
              />
            </div>

            <div>
              <div className="cart-pop-up-heading">
                <p className="cart-pop-up-heading-hidden">
                  Vitamin D3 (1000IU) Cap X, Vitamin D3 (1000IU) Cap X, Vitamin
                  D3 (1000IU) Cap X
                </p>
              </div>
              <p className="cart-pop-up-quantity-text">quantity: 1*20</p>
            </div>
            <p>
              <HiMiniXMark className="cart-pop-up-cancel-icon" />
            </p>
          </div>
        ))}
      </div>
      <div className="cart-pop-up-subtotal-container">
        <p className="cart-pop-up-sub-total-text">SubTotal : $20</p>
        <div className="cart-pop-up-button-container">
          <button className="cart-pop-up-page-button">View Cart</button>
          <button className="cart-pop-up-page-button">Check out</button>
        </div>
      </div>
    </div>
  );
};
export default CartPopup;
