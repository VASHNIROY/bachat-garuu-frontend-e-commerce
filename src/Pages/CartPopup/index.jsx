import { useNavigate } from "react-router-dom";
import "./index.css";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { useAppContext } from "../../Context";

const CartPopup = () => {
  const { cartDetails } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="cart-pop-up-main-container">
      <div className="cart-pop-up-list-container">
        {cartDetails.data.map((each) => (
          <div key={each.id} className="cart-pop-up-list-card">
            <div className="cart-pop-up-image-container">
              <img src={each.home_image} alt="" className="cart-pop-up-image" />
            </div>

            <div>
              <div className="cart-pop-up-heading">
                <p className="cart-pop-up-heading-hidden">{each.name}</p>
              </div>
              <p className="cart-pop-up-quantity-text">
                quantity: {each.qty} * {each.unit_sales_price}
              </p>
            </div>
            <p>
              <HiMiniXMark className="cart-pop-up-cancel-icon" />
            </p>
          </div>
        ))}
      </div>
      <div className="cart-pop-up-subtotal-container">
        <p className="cart-pop-up-sub-total-text">
          SubTotal : {cartDetails.sub_total}
        </p>
        <div className="cart-pop-up-button-container">
          <button
            className="cart-pop-up-page-button"
            onClick={() => navigate("/cart")}
          >
            View Cart
          </button>
          <Link to="/cart">
            <button
              className="cart-pop-up-page-button"
              onClick={() => navigate("/checkout")}
            >
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CartPopup;
