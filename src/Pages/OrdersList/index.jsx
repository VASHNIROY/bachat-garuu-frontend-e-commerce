import "./index.css";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const OrdersList = () => {
  const cartList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
        id:3,
    },
    {
        id:4,
    },
  ];

  return (
    <div className="orders-list-main-container">
      <div className="orders-list-mini-container">
        <img className="orders-list-main-image" src="https://ecom.taxoguru.com/image/category/1161896008.png" alt="" />
      <div className="orders-list-container">
        {cartList.map((each) => (
          <div key={each.id} className="orders-list-card">
            <Link to="/ordersdetail/:id">
            <div className="orders-list-image-container">
              <img
                src="https://ecom.taxoguru.com/image/product/PRO88-12.jpeg"
                alt=""
                className="orders-list-image"
              />
            </div>
            </Link>
            <div className="orders-list-heading-container">
              <div className="orders-list-heading">
                <p className="orders-list-heading-hidden">
                Women's Cotton Printed Unstitiched Dress Material 
                </p>
                <p className="orders-list-quantity-text">Color: lightseagreen</p>
                <p className="orders-list-quantity-text">Size: s</p>
                <p className="orders-list-quantity-text">Delivery Charges:Free</p>
              </div>
              <p className="orders-list-quantity-text">Delivered on Mar-16, 2024</p>
            </div>
            <p>
              <HiMiniXMark className="orders-list-cancel-icon" />
            </p>
          </div>
        ))}
      </div>
      </div>
      <p className="orders-list-sub-total-text">SubTotal : $80</p>
    </div>
  );
};
export default OrdersList;
