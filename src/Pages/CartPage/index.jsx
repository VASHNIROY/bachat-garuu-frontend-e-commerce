import "./index.css";
import { MdOutlineDeleteOutline } from "react-icons/md";

function CartPage() {
  const cartList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <div className="cart-page-main-container">
      <div className="cart-page-left-container">
        <div className="cart-page-left-container-header">
          <p className="cart-page-image m-0">Image</p>
          <p className="cart-page-product m-0">Product</p>
          <p className="cart-page-price m-0">Price</p>
          <p className="cart-page-quantity m-0">Quantity</p>
          <p className="cart-page-subtotal m-0">Subtotal</p>
          <p className="cart-page-delete m-0">Action</p>
        </div>
        <div className="cart-page-list-container">
          {cartList.map((each) => (
            <div className="cart-page-left-container-values" key={each.id}>
              <div className="cart-page-image">
                <img
                  src="https://enovathemes.com/propharm/wp-content/uploads/product42.jpg"
                  alt=""
                  className="cart-page-image-width"
                />
              </div>

              <p className="cart-page-product m-0">
                Vitamin C 500mg Sugarless Tab X 300 - 250 Vitamin C 500mg
                Sugarless Tab X 300 - 250 Vitamin C 500mg Sugarless Tab X 300 -
                250
              </p>
              <p className="cart-page-price m-0">$16.00</p>
              <div className="cart-page-quantity m-0">
                <button className="quantity-button">-</button> {10}{" "}
                <button className="quantity-button">+</button>
              </div>
              <p className="cart-page-subtotal m-0">$80.00</p>
              <p className="cart-page-delete m-0">
                <MdOutlineDeleteOutline className="cart-page-delete-icon" />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-page-responsive-list-container">
        {cartList.map((each) => (
          <div key={each.id} className="cart-page-responsive-card">
            <div className="cart-image-responsive-image-container">
              <img
                src="https://enovathemes.com/propharm/wp-content/uploads/product42.jpg"
                alt=""
                className="cart-page-responsive-image"
              />
            </div>
            <div>
              <div className="cart-page-responsive-flex">
                <p className="cart-page-responsive-heading">Product:</p>
                <p className="cart-page-responsive-description">
                  Vitamin C 500mg Sugarless Tab X 300 - 250 Vitamin C 500mg
                  Sugarless Tab X 300 - 250 Vitamin C 500mg Sugarless Tab X 300
                  - 250
                </p>
              </div>
              <div className="cart-page-responsive-flex">
                <p className="cart-page-responsive-heading">Price:</p>
                <p className="cart-page-responsive-heading">$20.00</p>
              </div>
              <div className="cart-page-responsive-flex">
                <p className="cart-page-responsive-heading">Quantity:</p>
                <div className="m-0">
                  <button className="quantity-button">-</button> {10}{" "}
                  <button className="quantity-button">+</button>
                </div>
              </div>
              <div className="cart-page-responsive-flex">
                <p className="cart-page-responsive-heading">Subtotal:</p>
                <p className="cart-page-responsive-heading">$20.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-page-right-container">
        <p className="cart-page-total-text">Cart Totals</p>
        <div className="cart-page-amount-display-container">
          <div className="cart-page-amount-flex">
            <p className="m-0">Subtotal</p>
            <p className="m-0">$230.00</p>
          </div>
          <div className="cart-page-amount-flex">
            <p className="m-0">Total</p>
            <p className="m-0">$230.00</p>
          </div>
          <br />
          <div className="cart-page-button-container">
            <button className="cart-page-proceed-button">
              Proceed to checkout
            </button>
            <button className="cart-page-continue-button">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
