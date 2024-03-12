import "./index.css";
import { HiMiniXMark } from "react-icons/hi2";

const OrdersDetail = () => {
  const cartList = [
    { id: 1 },
  ];

  const calculateDeliveryRange = () => {
    const deliveryDays = 3;
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + deliveryDays));
    return deliveryDate.toLocaleDateString();
  };
  return (
    <div className="orders-list-main-container">
      <div className="orders-list-mini-container">
        <div className="orders-list-container">
          {cartList.map((each) => (
            <div key={each.id} className="orders-list-card">
              <div className="orders-list-image-container">
                <img
                  src="https://ecom.taxoguru.com/image/product/PRO88-12.jpeg"
                  alt=""
                  className="orders-list-image"
                />
              </div>
              <div className="orders-list-heading-container">
                <div className="orders-list-heading">
                  <p className="orders-list-heading-hidden">
                    Women's Cotton Printed Unstitched Dress Material
                  </p>
                  <p className="orders-list-quantity-text">Color: lightseagreen</p>
                <p className="orders-list-quantity-text">Size: s</p>
                <p className="orders-list-quantity-text">Delivery Charges:Free</p>
                </div>
                <p className="orders-list-quantity-text">
                  <input type="range"/>
                  Delivered by {calculateDeliveryRange()}
                </p>
              </div>
              <div className="orders-list-cancel-container">
                <HiMiniXMark className="orders-list-cancel-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="orders-list-sub-total-text">SubTotal : $80</p>
    </div>
  );
};

export default OrdersDetail;



