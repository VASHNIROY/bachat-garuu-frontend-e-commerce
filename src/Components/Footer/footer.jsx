import "./footer.css";
import { useMediaQuery } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1250px)");
  return (
    <div
      className={`${
        isMobileScreen ? "mbl-footer-main-contaier" : "footer-main-contaier"
      }`}
    >
      <div className="footer-address-help-container">
        <div className="footer-address-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mbl-footer-logo"
            viewBox="0 0 197.4 44.93"
          >
            <path
              d="M67.07 9.52a7.39 7.39 0 0 1 5.39 2.17 7.13 7.13 0 0 1 2.2 5.31 7.12 7.12 0 0 1-2.19 5.26 7.39 7.39 0 0 1-5.39 2.17h-3.26v6.83h-5V9.52Zm0 10.23a2.46 2.46 0 0 0 1.93-.81 3 3 0 0 0 0-4 2.46 2.46 0 0 0-1.93-.72h-3.25v5.58Zm14.26-1.27a3.81 3.81 0 0 1 1.76-2.26 5.53 5.53 0 0 1 2.9-.79v5.27a4.66 4.66 0 0 0-3.18.57 3.14 3.14 0 0 0-1.47 3v7h-4.66V15.72h4.65ZM101 29.28a8.2 8.2 0 1 1 2.43-5.81 7.88 7.88 0 0 1-2.43 5.81Zm-8.37-3.18a3.67 3.67 0 0 0 5.08 0 3.56 3.56 0 0 0 1-2.63 3.57 3.57 0 0 0-1-2.63 3.67 3.67 0 0 0-5.08 0 3.57 3.57 0 0 0-1 2.63 3.56 3.56 0 0 0 1 2.64Zm22.66-10.82a6.85 6.85 0 0 1 5.24 2.37 8.3 8.3 0 0 1 2.17 5.81 8.3 8.3 0 0 1-2.17 5.81 6.85 6.85 0 0 1-5.24 2.37 5.79 5.79 0 0 1-4.62-1.89v7.67H106v-21.7h4.65v1.5a5.79 5.79 0 0 1 4.6-1.93Zm-3.62 10.94a3.94 3.94 0 0 0 5.3 0 3.69 3.69 0 0 0 1-2.76 3.69 3.69 0 0 0-1-2.76 3.94 3.94 0 0 0-5.3 0 3.7 3.7 0 0 0-1 2.76 3.7 3.7 0 0 0 1 2.76Zm22.71-10.94a5.54 5.54 0 0 1 4.14 1.72 6.47 6.47 0 0 1 1.66 4.71v9.52h-4.65v-8.84a2.76 2.76 0 0 0-.76-2.09 2.69 2.69 0 0 0-1.94-.73 2.79 2.79 0 0 0-2.11.81 3.32 3.32 0 0 0-.77 2.39v8.45h-4.65V9.52h4.7v7.7a5.14 5.14 0 0 1 4.42-1.93Zm20.24.43h4.65v15.51h-4.65v-1.46a5.79 5.79 0 0 1-4.62 1.89 6.85 6.85 0 0 1-5.24-2.37 8.3 8.3 0 0 1-2.17-5.81 8.3 8.3 0 0 1 2.17-5.81 6.85 6.85 0 0 1 5.24-2.37 5.79 5.79 0 0 1 4.62 1.93Zm-6.36 10.51a4 4 0 0 0 5.33 0 3.73 3.73 0 0 0 1-2.76 3.73 3.73 0 0 0-1-2.76 4 4 0 0 0-5.33 0 3.73 3.73 0 0 0-1 2.76 3.73 3.73 0 0 0 1 2.76Zm19.06-7.75a3.81 3.81 0 0 1 1.76-2.25 5.52 5.52 0 0 1 2.9-.79v5.27a4.66 4.66 0 0 0-3.18.57 3.14 3.14 0 0 0-1.47 3v7h-4.65V15.72h4.65Zm24.18-3.19a5.54 5.54 0 0 1 4.28 1.72 6.62 6.62 0 0 1 1.61 4.67v9.52h-4.65v-9.08a2.8 2.8 0 0 0-.57-1.86 2 2 0 0 0-1.66-.68 2.18 2.18 0 0 0-1.78.78 3.28 3.28 0 0 0-.63 2.14v8.73h-4.65v-9.11a2.8 2.8 0 0 0-.57-1.86 2 2 0 0 0-1.66-.68 2.18 2.18 0 0 0-1.78.78 3.28 3.28 0 0 0-.63 2.14v8.73h-4.65v-15.5h4.65v1.43a4.66 4.66 0 0 1 4.19-1.86 4.56 4.56 0 0 1 4.06 2 5.09 5.09 0 0 1 4.45-2Z"
              style={{ fill: "#184363" }}
            ></path>
            <path
              d="M40.4 14.37h-7.64V6.72A6.72 6.72 0 0 0 26 0h-4.9a6.73 6.73 0 0 0-6.73 6.72v7.64H6.72A6.72 6.72 0 0 0 0 21.08V26a6.73 6.73 0 0 0 6.72 6.73h7.65c0 4.31-.5 7.25-2.14 10.17a1.39 1.39 0 0 0 1.53 2c5.32-1.23 15.48-4.53 19-12.2h7.65a6.72 6.72 0 0 0 6.72-6.7v-4.9a6.73 6.73 0 0 0-6.72-6.73Zm-18.64 15a2.31 2.31 0 0 1-1.64-.68l-4.47-4.47a2.32 2.32 0 0 1 3.28-3.28l2.83 2.83 6.43-6.43a2.32 2.32 0 0 1 3.28 3.28l-8.07 8.07a2.31 2.31 0 0 1-1.64.65Z"
              style={{ fill: "#15a9e3" }}
            ></path>
          </svg>
          <div className="">
            <p>70 Washington Square South,</p>
            <p>New York, NY 10012, United States</p>
          </div>
          <div className="footer-social-icons-container">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <hr className="footer-hr-line" />
        <div className="footer-help-main-container">
          <div className="footer-vertical-line"></div>

          <div className="footer-help-container">
            <p className="footer-side-headings">Need help</p>
            <h5
              className="footer-side-headings"
              style={{
                fontWeight: "bold",
                marginTop: "6%",
                marginBottom: "10%",
              }}
            >
              9876 788 - HGGGY -888
            </h5>
            <span>Monday - Friday: 9:00 - 20:00</span>
            <p>Saturday: 9:00 - 15:00</p>
            <div className="footer-mail-contianer">
              <CiMail />
              <p style={{ margin: 0, marginLeft: "10px" }}>
                inbox@ecommerce.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-info-acc-hr-line" />
      <div className="footer-info-acc-container">
        <div className="footer-info-acc-mini-container">
          <p className="footer-side-headings">Information</p>
          <ul className="footer-info-acc-ul-container">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Sales</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-info-acc-mini-container">
          <p className="footer-side-headings">Account</p>
          <ul className="footer-info-acc-ul-container">
            <li>Dashboard</li>
            <li>My Orders</li>
            <li>Account Details</li>
            <li>Returns</li>
            <li>Wishlist</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;