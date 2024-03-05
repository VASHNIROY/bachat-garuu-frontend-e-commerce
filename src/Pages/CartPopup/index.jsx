import "./index.css";
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
              <p>quantity: 1*20</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p>SubTotal : $20</p>
        <div>
          <button>View Cart</button>
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};
export default CartPopup;
