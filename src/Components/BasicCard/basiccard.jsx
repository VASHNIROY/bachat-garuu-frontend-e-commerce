import "./basiccard.css";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

// import { Rating } from "react-simple-star-rating";
import "../MedicineCard/medicinecard.css";

function BasicCard(item) {
  const items = item.item;
  return (
    <div className="medicines-cards-mini-container">
      <div
        key={items.id}
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
            <FaRegHeart />
          </div>
        </div>
        <div className="medicines-cards-image-container">
          <img
            className="medicines-cards-image"
            style={{ height: "250px", width: "250px" }}
            src={items.home_image}
            alt={items.home_image}
          />
        </div>
        <div className="p-2">
          {/* <h5 className="medicines-cards-heading">{items.category}</h5> */}
          <h2 className="medicines-cards-paragraph" style={{ width: "200px" }}>
            {items.name}
          </h2>
          {/* <Rating size={25} initialValue={items.rating} /> */}
          <p className="medicines-cards-price">
            {items.unit_mrp && (
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {items.unit_mrp}
              </span>
            )}{" "}
            {items.unit_sales_price}
          </p>
          <button className="medicines-cards-cart-button">
            {" "}
            <MdOutlineShoppingCart />
            Select Options{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicCard;
