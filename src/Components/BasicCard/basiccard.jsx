/* eslint-disable react/prop-types */
import "./basiccard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

// import { Rating } from "react-simple-star-rating";
import "../MedicineCard/medicinecard.css";
import { useAppContext } from "../../Context";

const BasicCard = ({ item, addWishClicked }) => {
  const { addToWishlist, fetchWishlist } = useAppContext();
  const { id, wishlist_status, home_image, name, unit_mrp, unit_sales_price } =
    item;

  const addToWish = async () => {
    addToWishlist(id);

    addWishClicked();
    console.log(wishlist_status, "wishlist status ");
    fetchWishlist();
  };

  return (
    <div className="medicines-cards-mini-container">
      <div
        key={id}
        className="medicines-cards-main-category-container"
        style={{ height: "490px", width: "275px" }}
      >
        <div className="medicines-cards-sub-category-container">
          <div className="medicines-cards-new-buttons">
            <button className="medicines-cards-button">Sales</button>
          </div>
        </div>
        <div className="medicines-cards-icons-container">
          <div className="medicines-cards-icons">
            {wishlist_status === 1 ? (
              <FaHeart color="#ef233c" onClick={() => addToWish()} />
            ) : (
              <FaRegHeart onClick={() => addToWish()} />
            )}
          </div>
        </div>
        <div className="medicines-cards-image-container">
          <img
            className="medicines-cards-image"
            style={{ height: "250px", width: "250px" }}
            src={home_image}
            alt={home_image}
          />
        </div>
        <Link className="basic-card-link" to={`/product/${id}`} key={id}>
          <div className="p-2">
            {/* <h5 className="medicines-cards-heading">{items.category}</h5> */}
            <h2
              className="medicines-cards-paragraph"
              style={{ width: "200px" }}
            >
              {name}
            </h2>
            {/* <Rating size={25} initialValue={items.rating} /> */}
            <p className="medicines-cards-price">
              {unit_mrp && (
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  {unit_mrp}
                </span>
              )}{" "}
              {unit_sales_price}
            </p>
            <button className="medicines-cards-cart-button">
              {" "}
              <MdOutlineShoppingCart />
              Select Options{" "}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BasicCard;
