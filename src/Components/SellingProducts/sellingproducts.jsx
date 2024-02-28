import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";

import "../MedicineCard/medicinecard.css";

function SellingProducts() {
  const products = [
    {
      id: 1,
      category: "Protein",
      name: "Nutren Diabetes Vanilla",
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product66-300x300.jpg",
      price: "$34.50",
      rating: "",
    },
    {
      id: 2,
      category: "Supplements",
      name: "Protein Supplies Australia Colostrum",
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product67-300x300.jpg",
      price: "$24.18",
      originalPrice: "$35.95",
      rating: "",
    },
    {
      id: 3,
      category: "Protein",
      name: "Tropeaka Lean Protine Salted",
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product61-300x300.jpg",
      price: "$34.15",
      originalPrice: "$41.95",
      rating: "",
    },
    {
      id: 4,
      category: "Protein",
      name: "FatBlaster Keto-Fit Whey",
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product80-300x300.jpg",
      price: "$23.95",
      rating: "",
    },
    {
      id: 5,
      category: "Supplements, Vitamins",
      name: "Vitamin c 500mg Sugarless Tab",
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product42-300x300.jpg",
      price: "$16.00-$35.00",
      rating: 3,
    },
  ];

  return (
    <>
      <div className="medicines-categories-container">
        <h1 className="medicines-categories-heading">
          Best Selling Products in
        </h1>
        <div className="medicines-categories-button-container">
          <button className="medicines-categories-button">Supplements</button>
          <button className="medicines-categories-button">Medicines</button>
          <button className="medicines-categories-button">Herbs</button>
        </div>
      </div>
      <div className="medicines-cards-mini-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="medicines-cards-main-category-container"
            style={{ height: "490px", width:"275px" }}
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
                src={product.image}
                alt={product.name}
              />
            </div>
            <h5 className="medicines-cards-heading">{product.category}</h5>
            <h2
              className="medicines-cards-paragraph"
            >
              {product.name}
            </h2>
            <Rating size={25} initialValue={product.rating} />
            <p className="medicines-cards-price">
              {product.originalPrice && (
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  {product.originalPrice}
                </span>
              )}{" "}
              {product.price}
            </p>
            <button className="medicines-cards-cart-button">
              {" "}
              <MdOutlineShoppingCart />
              Select Options{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default SellingProducts;
