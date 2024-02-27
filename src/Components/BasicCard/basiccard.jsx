import "./basiccard.css";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
import "../MedicineCard/medicinecard.css";

function BasicCard(item) {
  const items = item.item;
  console.log(items);
  return (
    <div className="medicines-cards-mini-container">
      <div
        key={items.id}
        className="medicines-cards-main-category-container"
        style={{ height: "490px", width: "230px" }}
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
          <div className="medicines-cards-icons">
            <IoIosGitCompare />
          </div>
          <div className="medicines-cards-icons">
            <IoSearchOutline />
          </div>
        </div>
        <div className="medicines-cards-image-container">
          <img
            className="medicines-cards-image"
            style={{ height: "250px", width: "250px" }}
            src={items.image}
            alt={items.name}
          />
        </div>
        <div className="p-2">
          <h5 className="medicines-cards-heading">{items.category}</h5>
          <h2 className="medicines-cards-paragraph" style={{ width: "120px" }}>
            {items.name}
          </h2>
          <Rating size={25} initialValue={items.rating} />
          <p className="medicines-cards-price">
            {items.originalPrice && (
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {items.originalPrice}
              </span>
            )}{" "}
            {items.price}
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
