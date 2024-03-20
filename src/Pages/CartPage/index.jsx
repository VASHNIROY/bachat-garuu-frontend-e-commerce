import NotFound from "../../Components/NotFound/NotFound";
import { useAppContext } from "../../Context";
import "./index.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import EmptyaCart from "../../Utils/emptycart.jpg";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

// import { axios } from "axios";
// const logo = "";
const baseUrl = import.meta.env.VITE_BASE_URL;

function CartPage() {
  const { cartDetails, FetchCartDetails } = useAppContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = async () => {
    setIsLoading(true);
    await FetchCartDetails();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCartbtn = async (id) => {
    const userid = Cookies.get("userid");

    const productDetails = cartDetails.data.filter((el) => el.id === id);
    console.log(productDetails);

    const addToCartBody = {
      vendor_id: "4d544d3d",
      user_id: userid,
      product_id: productDetails[0].product_id,
      unit: productDetails[0].unit,
      unit_id: productDetails[0].unit_id,
      unit_value: productDetails[0].unit_value,
      type: "add",
      product_type: productDetails[0].product_type,
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
      fetchCart();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeFromCart = async (id) => {
    const userid = Cookies.get("userid");

    const productDetails = cartDetails.data.filter((el) => el.id === id);
    console.log(productDetails);

    const addToCartBody = {
      vendor_id: "4d544d3d",
      user_id: userid,
      product_id: productDetails[0].product_id,
      unit: productDetails[0].unit,
      unit_id: productDetails[0].unit_id,
      unit_value: productDetails[0].unit_value,
      type: "remove",
      product_type: productDetails[0].product_type,
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
      fetchCart();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const success = async (packageId) => {
  //   try {
  //     const options = {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         packageId: packageId,
  //         organizationId: organizationId,
  //       }),
  //     };
  //     const response = await fetch(
  //       `${process.env}/postsubcriptionid`,
  //       options
  //     );
  //     const data = await response.json();
  //     if (response.ok === true) {
  //       Toast.fire({
  //         icon: "success",
  //         title: data.message,
  //       });
  //       navigate("/login");
  //     } else {
  //       Toast.fire({
  //         icon: "error",
  //         title: data.message,
  //       });
  //     }
  //   } catch {
  //     console.log("error");
  //   }
  // };
  // console.log(process.env.REACT_APP_PAYMENT_KEY);

  // const initPayment = (data, packageId) => {
  //   console.log("init payment called");
  //   const options = {
  //     key: import.meta.env.REACT_APP_PAYMENT_KEY,
  //     // key: "rzp_test_BSbNIdfoV3nkDf",
  //     amount: data.amount,
  //     currency: data.currency,
  //     name: "XpenseFlow",
  //     description: "Payment for XpenseFlow",
  //     image: { logo },
  //     order_id: data.id,
  //     handler: async (response) => {
  //       console.log(response, "response before callin verify api");
  //       try {
  //         const verifyUrl = `${baseUrl}/paymentverify`;
  //         const { data1 } = await axios.post(verifyUrl, {
  //           ...response,
  //           amount: data.amount,
  //           // packageId: packageId,
  //           // organizationId: organizationId,
  //         });
  //         console.log(data1);
  //         await success(packageId);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };

  // const handlePayment = async (id, price) => {
  //   console.log("handle called", price);
  //   try {
  //     const orderUrl = `${baseUrl}/orders`;
  //     const { data } = await axios.post(orderUrl, {
  //       amount: parseInt(price),
  //     });
  //     console.log(data, "first data console");
  //     console.log(data.data, "payment data");
  //     initPayment(data.data, id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {isLoading ? (
        <Loader value={80} />
      ) : cartDetails && cartDetails.data && cartDetails.data.length > 0 ? (
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
                    <button
                      className="quantity-button"
                      onClick={() => removeFromCart(each.id)}
                    >
                      -
                    </button>{" "}
                    {each.qty}
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
                      <button
                        className="quantity-button"
                        onClick={() => removeFromCart(each.id)}
                      >
                        -
                      </button>{" "}
                      {each.qty}{" "}
                      <button
                        className="quantity-button"
                        onClick={() => addToCartbtn(each.id)}
                      >
                        +
                      </button>
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
                <p className="m-0">Total</p>
                <p className="m-0">{cartDetails.total_mrp}</p>
              </div>
              <div className="cart-page-amount-flex">
                <p className="m-0">Discount</p>
                <p className="m-0">-{cartDetails.total_discount}</p>
              </div>
              <div className="cart-page-amount-flex">
                <p className="m-0">Subtotal</p>
                <p className="m-0">{cartDetails.sub_total}</p>
              </div>
              <br />
              <div className="cart-page-button-container">
                <button
                  className="cart-page-proceed-button"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to checkout
                </button>
                <button
                  className="cart-page-continue-button"
                  onClick={() => navigate("/")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound
          image={EmptyaCart}
          title={"Your Cart is Empty"}
          buttonText={"Explore Products"}
        />
      )}
    </>
  );
}

export default CartPage;
