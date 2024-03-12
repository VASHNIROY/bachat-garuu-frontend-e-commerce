import { useAppContext } from "../../Context";
import "./index.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import  axios  from "axios";
const logo = "";
const baseUrl = import.meta.env.VITE_BASE_URL;

function CartPage() {
  const { cartDetails } = useAppContext();
  const { setproductid, productData } = useAppContext();
  const navigate = useNavigate();

  const addToCartbtn = async (id) => {
    setproductid(id);

    const { productDetails } = productData;
    console.log("fetching product data ", productData);

    const addToCartBody = {
      vendor_id: "4d544d3d",
      user_id: "1",
      product_id: productDetails.productId,
      unit: productData.productDetails.unit_details[0].unit,
      unit_id: productData.productDetails.unit_details[0].unit_id,
      unit_value: productData.productDetails.unit_details[0].unit_value,
      type: "add",
      product_type: productData.productDetails.product_type,
      cart_type: "ecommerce",
    };

    const addToCartformData = new FormData();

    Object.entries(addToCartBody).forEach(([key, value]) => {
      addToCartformData.append(key, value);
    });
    const api = `${baseUrl}addToCart`;
    const options = {
      method: "POST",
      body: addToCartformData,
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  if (cartDetails && cartDetails.data && cartDetails.data.length > 0) {
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
            {cartDetails.data.map((each) => (
              <div className="cart-page-left-container-values" key={each.id}>
                <div className="cart-page-image">
                  <img
                    src={each.home_image}
                    alt=""
                    className="cart-page-image-width"
                  />
                </div>

                <p className="cart-page-product m-0">{each.name}</p>
                <p className="cart-page-price m-0">{each.unit_sales_price}</p>
                <div className="cart-page-quantity m-0">
                  <button className="quantity-button">-</button> {each.qty}
                  <button
                    className="quantity-button"
                    onClick={() => addToCartbtn(each.id)}
                  >
                    +
                  </button>
                </div>
                <p className="cart-page-subtotal m-0">
                  {" "}
                  {`${each.qty * each.unit_sales_price}`}
                </p>
                <p className="cart-page-delete m-0">
                  <MdOutlineDeleteOutline className="cart-page-delete-icon" />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-page-responsive-list-container">
          {cartDetails.data.map((each) => (
            <div key={each.id} className="cart-page-responsive-card">
              <div className="cart-image-responsive-image-container">
                <img
                  src={each.home_image}
                  alt=""
                  className="cart-page-responsive-image"
                />
              </div>
              <div>
                <div className="cart-page-responsive-flex">
                  <p className="cart-page-responsive-heading">Product:</p>
                  <p className="cart-page-responsive-description">
                    {each.name}
                  </p>
                </div>
                <div className="cart-page-responsive-flex">
                  <p className="cart-page-responsive-heading">Price:</p>
                  <p className="cart-page-responsive-heading">
                    {each.unit_sales_price}
                  </p>
                </div>
                <div className="cart-page-responsive-flex">
                  <p className="cart-page-responsive-heading">Quantity:</p>
                  <div className="m-0">
                    <button className="quantity-button">-</button> {each.qty}{" "}
                    <button className="quantity-button">+</button>
                  </div>
                </div>
                <div className="cart-page-responsive-flex">
                  <p className="cart-page-responsive-heading">Subtotal:</p>
                  <p className="cart-page-responsive-heading">
                    {`${each.qty * each.unit_sales_price}`}
                  </p>
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
              <p className="m-0">{cartDetails.sub_total}</p>
            </div>
            <div className="cart-page-amount-flex">
              <p className="m-0">Total</p>
              <p className="m-0">{cartDetails.total_mrp}</p>
            </div>
            <br />
            <div className="cart-page-button-container">
              <button
                className="cart-page-proceed-button"
                onClick={() => navigate("/checkout")}
              >
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

  return null;
}

export default CartPage;
