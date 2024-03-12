import { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import Cookies from "js-cookie";
import "./CheckoutPage.css";
import { useAppContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const typesOfTransfer = [
  {
    id: 1,
    title: "Direct bank transfer",
    desc: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    id: 2,
    title: "Check payments",
    desc: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    id: 3,
    title: "Cash on delivery",
    desc: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
];

// const products = [
//   {
//     id: 1,
//     productName: "abc",
//     quantity: 2,
//     price: 50,
//   },
//   {
//     id: 2,
//     productName: "xyz",
//     quantity: 1,
//     price: 60,
//   },
//   {
//     id: 3,
//     productName: "qwe",
//     quantity: 2,
//     price: 20,
//   },
// ];

const addressBody = {
  vendor_id: "4d544d3d",
  user_id: "1",
};

const baseUrl = import.meta.env.VITE_BASE_URL;

function CheckoutPage() {
  const [selectedType, setSelectedType] = useState(typesOfTransfer[0].id);
  const [enterCoupon, setEnterCoupon] = useState(false);

  const [showAdd, setShowAddAddress] = useState(false);

  const [savedAddresses, setAddresses] = useState([]);

  const { cartDetails } = useAppContext();
  const navigate = useNavigate();
  const userid = Cookies.get("userid");

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    mobile_no: "",
    address: "",
    street_address: "",
    house_no: "",
    pincode: "",
    address_type: "",
    state: "",
    city: "",
    email: "",
  });

  const getAllAddress = async () => {
    const addressData = new FormData();

    Object.entries(addressBody).forEach(([key, value]) => {
      addressData.append(key, value);
    });

    const api = `${baseUrl}getAddress`;
    const options = {
      method: "POST",
      body: addressData,
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();
      setAddresses(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAddress();
  }, []);

  const handleBillingInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (typeId) => {
    setSelectedType(typeId);
    setBillingDetails((prev) => ({
      ...prev,
      paymentType: typeId,
    }));
  };

  // const totalAmount = products.reduce((total, product) => {
  //   const productAmount = product.quantity * product.price;
  //   return total + productAmount;
  // }, 0);

  const mappedProducts = cartDetails.data.map((product) => {
    const truncatedTitle =
      product.title.length > 20
        ? `${product.title.slice(0, 20)}...`
        : product.title;
    const productAmount = product.qty * product.unit_sales_price;
    return (
      <div key={product.id} className="checkout-page-pricing-header-1">
        <h5>{`${truncatedTitle} * ${product.qty}`}</h5>
        <h5>${productAmount}</h5>
      </div>
    );
  });

  const postAddress = async (e) => {
    e.preventDefault();
    const addaddressformData = new FormData();
    Object.entries(billingDetails).forEach(([key, value]) => {
      addaddressformData.append(key, value);
    });

    addaddressformData.append("user_id", "1");
    addaddressformData.append("vendor_id", "4d544d3d");
    const api = `${baseUrl}addAddress`;
    const options = {
      method: "POST",
      body: addaddressformData,
    };
    console.log("billingDetails", addaddressformData);

    try {
      const response = await fetch(api, options);
      const data = await response.json();
      setBillingDetails("");
      console.log(data);
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
  //     const response = await fetch(`${process.env}/postsubcriptionid`, options);
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

  const handlePayment = async () => {
    try {
      const orderUrl = `${baseUrl}/addSalesDetails`;

      const orderbodydata = {
        vendor_id: "4d513d3d",
        user_id: userid,
        address_id: 25,
        payment_mode: "online",
        order_from: "web",
        delivery_type: "1",
        cart_type: "ecommerce",
      };

      const placeOrderFormData = new FormData();

      Object.entries(orderbodydata).forEach(([key, value]) => {
        placeOrderFormData.append(key, value);
      });
      const { data } = await axios.post(orderUrl, placeOrderFormData);
      console.log(data, "first data console");
      console.log(data.data, "payment data");
      // initPayment(data.data, id);
    } catch (error) {
      console.log(error);
    }
  };

  const chechUserLogin = () => {
    console.log("userid", typeof userid);
    console.log(userid);
    if (userid === undefined || userid === "undefined" || userid == null) {
      console.log("User is not logged in. Redirecting to login page.");
      navigate("/login");
    } else {
      console.log("User is logged in. Proceeding with payment.");
      handlePayment();
    }
  };

  return (
    <>
      <div className="checkout-page-main-container">
        <div className="checkout-page-sub-container">
          <div className="checkout-page-top-container">
            <div className="checkout-page-coupon-apply-container">
              {" "}
              <p className="checkout-page-first-para">
                <BsFillInfoCircleFill className="checkout-page-info-icon" />{" "}
                <span className="checkout-page-question">Have a coupon?</span>
                <span
                  className="checkout-page-enter-coupon"
                  onClick={() => setEnterCoupon(!enterCoupon)}
                >
                  Click here to enter your code{" "}
                </span>
              </p>
            </div>
            {enterCoupon && (
              <div className="checkout-page-coupon-code-container">
                <p className="checkout-page-coupon-label">
                  If you have a coupon code, please apply it below
                </p>
                <div className="checkout-page-apply-coupon-container">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className="checkout-page-input"
                  />
                  <button className="checkout-page-apply-now-button">
                    Apply Coupon
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="checkout-page-bottom-container">
            {!userid ? (
              <div style={{ width: "80%" }}>
                <h1>Please Login To Place Order</h1>
                <button
                  className="checkout-page-apply-now-button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="checkout-page-left-container">
                <h1 className="checkout-page-form-heading">Saved Locations</h1>{" "}
                {savedAddresses.map((el) => (
                  <>
                    {" "}
                    <div className="checkout-page-address-card-container">
                      <h2 className="checkout-page-address-heading">
                        {el.name}
                      </h2>
                      <p className="checkout-page-address-para">
                        {el.house_no}, {el.street_address}, {el.address_type},
                        {el.address}, {el.pincode}
                      </p>
                      <p className="checkout-page-address-mbl-no">
                        {el.mobile_no}
                      </p>
                      {el.is_primary && (
                        <p className="checkout-is-primary">Primary</p>
                      )}
                    </div>
                  </>
                ))}
                <h3
                  className="checkout-page-form-add-heading"
                  onClick={() => setShowAddAddress(!showAdd)}
                >
                  Add New Address <TbSquareRoundedPlusFilled />
                </h3>
                {showAdd && (
                  <form
                    className="checkout-page-billing-form-container"
                    onSubmit={postAddress}
                  >
                    <>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          First name *
                        </label>
                        <input
                          type="text"
                          required
                          className="checkout-page-form-input"
                          name="name"
                          onChange={handleBillingInputChange}
                          value={billingDetails.name}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          Mobile No*
                        </label>
                        <input
                          type="number"
                          required
                          className="checkout-page-form-input"
                          name="mobile_no"
                          onChange={handleBillingInputChange}
                          value={billingDetails.mobile_no}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          Address *
                        </label>
                        <input
                          required
                          type="text"
                          className="checkout-page-form-input"
                          placeholder="House number and street name"
                          name="address"
                          onChange={handleBillingInputChange}
                          value={billingDetails.address}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          className="checkout-page-form-input"
                          placeholder="Appartment,suite,unit (optional)"
                          name="street_address"
                          onChange={handleBillingInputChange}
                          value={billingDetails.street_address}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          required
                          className="checkout-page-form-input"
                          name="pincode"
                          onChange={handleBillingInputChange}
                          value={billingDetails.pincode}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          House No *
                        </label>
                        <input
                          type="text"
                          required
                          className="checkout-page-form-input"
                          name="house_no"
                          onChange={handleBillingInputChange}
                          value={billingDetails.house_no}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          Address Type *
                        </label>
                        <input
                          type="text"
                          required
                          className="checkout-page-form-input"
                          name="address_type"
                          onChange={handleBillingInputChange}
                          value={billingDetails.address_type}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          State *
                        </label>
                        <input
                          type="text"
                          required
                          className="checkout-page-form-input"
                          name="state"
                          onChange={handleBillingInputChange}
                          value={billingDetails.state}
                        />
                      </div>

                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          className="checkout-page-form-input"
                          onChange={handleBillingInputChange}
                          value={billingDetails.city}
                        />
                      </div>
                      <div className="checkout-page-input-container">
                        <label className="checkout-page-form-label">
                          Email address*
                        </label>
                        <input
                          type="email"
                          required
                          className="checkout-page-form-input"
                          name="email"
                          onChange={handleBillingInputChange}
                          value={billingDetails.email}
                        />
                      </div>
                    </>

                    {/* <div className="checkout-page-input-container">
              <label className="checkout-page-form-label">
                Town / city *
              </label>
              <input
                type="text"
                required
                className="checkout-page-form-input"
                name="town"
                onChange={handleBillingInputChange}
                value={billingDetails.town}
              />
            </div> */}
                    {/* <div className="checkout-page-input-container">
              <label className="checkout-page-form-label">State *</label>
              <select
                required
                className="checkout-page-form-select"
                name="state"
                onChange={handleBillingInputChange}
                value={billingDetails.state}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div> */}
                    {/* <div className="checkout-page-input-container">
              <label className="checkout-page-form-label">
                Country / Region *
              </label>
              <select
                required
                className="checkout-page-form-select"
                name="country"
                onChange={handleBillingInputChange}
                value={billingDetails.country}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div> */}
                    <div>
                      <button
                        className="checkout-page-apply-now-button"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
            <div className="checkout-page-right-container">
              <h2 className="checkout-page-form-heading ">Your Order</h2>
              <div className="checkout-page-pricing-container">
                <div className="checkout-page-pricing-header">
                  <h5 className="checkout-page-pricing-label">Product</h5>
                  <h5 className="checkout-page-pricing-label">Subtotal</h5>
                </div>
                <div className="checkout-page-items-container">
                  {mappedProducts}

                  <div className="checkout-page-pricing-header-1">
                    <h5 className="checkout-page-pricing-label">Total</h5>
                    <h5> ${cartDetails.total_mrp}</h5>
                  </div>
                  <div className="checkout-page-pricing-header-1">
                    <h5 className="checkout-page-pricing-label">Discount</h5>
                    <h5> -${cartDetails.total_discount}</h5>
                  </div>
                  <div className="checkout-page-pricing-header-1">
                    <h5 className="checkout-page-pricing-label">Total</h5>
                    <h5 className="checkout-page-pricing-label">
                      ${cartDetails.total_price}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="checkout-page-types-of-transaction-container">
                {typesOfTransfer.map((type) => (
                  <div key={type.id} className="checkout-page-type-container">
                    <input
                      type="radio"
                      checked={selectedType === type.id}
                      onChange={() => handlePaymentChange(type.id)}
                    />
                    <span className="checkout-page-type-price-title">
                      {type.title}
                    </span>
                    {selectedType === type.id && (
                      <p className="checkout-page-type-price-desc">
                        {type.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="checkout-page-coupon-label">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <div className="checkout-page-button-container">
                <button
                  className="checkout-page-apply-now-button"
                  onClick={() => chechUserLogin()}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
