import { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";

import "./CheckoutPage.css";

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

const products = [
  {
    id: 1,
    productName: "abc",
    quantity: 2,
    price: 50,
  },
  {
    id: 2,
    productName: "xyz",
    quantity: 1,
    price: 60,
  },
  {
    id: 3,
    productName: "qwe",
    quantity: 2,
    price: 20,
  },
];

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

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    appartment: "",
    town: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    paymentType: selectedType,
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
    console.log(billingDetails.paymentType);
  };

  const handlePaymentChange = (typeId) => {
    setSelectedType(typeId);
    setBillingDetails((prev) => ({
      ...prev,
      paymentType: typeId,
    }));
  };

  const totalAmount = products.reduce((total, product) => {
    const productAmount = product.quantity * product.price;
    return total + productAmount;
  }, 0);

  const mappedProducts = products.map((product) => {
    const productAmount = product.quantity * product.price;
    return (
      <div key={product.id} className="checkout-page-pricing-header-1">
        <h5>{`${product.productName} * ${product.quantity}`}</h5>
        <h5>${productAmount}</h5>
      </div>
    );
  });

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
            <div className="checkout-page-left-container">
              <h1 className="checkout-page-form-heading">Saved Locations</h1>{" "}
              {savedAddresses.map((el) => (
                <>
                  {" "}
                  <div className="checkout-page-address-card-container">
                    <h2 className="checkout-page-address-heading">{el.name}</h2>
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
              <form className="checkout-page-billing-form-container">
                <h3
                  className="checkout-page-form-add-heading"
                  onClick={() => setShowAddAddress(!showAdd)}
                >
                  Add New Address <TbSquareRoundedPlusFilled />
                </h3>
                {showAdd && (
                  <>
                    <div className="checkout-page-input-container">
                      <label className="checkout-page-form-label">
                        First name *
                      </label>
                      <input
                        type="text"
                        required
                        className="checkout-page-form-input"
                        name="firstName"
                        onChange={handleBillingInputChange}
                        value={billingDetails.firstName}
                      />
                    </div>
                    <div className="checkout-page-input-container">
                      <label className="checkout-page-form-label">
                        Street address *
                      </label>
                      <input
                        required
                        type="text"
                        className="checkout-page-form-input"
                        placeholder="House number and street name"
                        name="streetAddress"
                        onChange={handleBillingInputChange}
                        value={billingDetails.streetAddress}
                      />
                      <input
                        type="text"
                        className="checkout-page-form-input"
                        placeholder="Appartment,suite,unit (optional)"
                        name="appartment"
                        onChange={handleBillingInputChange}
                        value={billingDetails.companyName}
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
                        name="zipCode"
                        onChange={handleBillingInputChange}
                        value={billingDetails.zipCode}
                      />
                    </div>
                    <div className="checkout-page-input-container">
                      <label className="checkout-page-form-label">
                        Phone *
                      </label>
                      <input
                        type="number"
                        name="phoneNumber"
                        required
                        className="checkout-page-form-input"
                        onChange={handleBillingInputChange}
                        value={billingDetails.phoneNumber}
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
                )}

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
              </form>
            </div>
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
                    <h5 className="checkout-page-pricing-label">Subtotal</h5>
                    <h5> ${totalAmount}</h5>
                  </div>
                  <div className="checkout-page-pricing-header-1">
                    <h5 className="checkout-page-pricing-label">Total</h5>
                    <h5 className="checkout-page-pricing-label">
                      ${totalAmount}
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
                <button className="checkout-page-apply-now-button">
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
