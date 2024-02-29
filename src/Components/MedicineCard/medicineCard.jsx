import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
import "./medicinecard.css";

function MedicineCard() {
  const medicines = [
    {
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product42-300x300.jpg",
      category: "Supplements,Vitamins",
      name: "Vitamin C 500mg Sugarless Tab",
      price: "$16.00-$35.00",
      rating: 3,
    },
    {
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product19-300x300.jpg",
      category: "Supplements,Vitamins",
      name: "Vitamin D3 (1000IU) Cap X",
      price: "$30.00-$40.00",
      rating: 4,
    },
    {
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product8-300x300.jpg",
      category: "Supplements,Vitamins",
      name: "Own Vitamin B1 250mg Tab X 75",
      price: "$15.50",
      rating: "",
    },
    {
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product9-300x300.jpg",
      category: "Supplements",
      name: "Spring Leaf Liver Detox",
      price: "$22.00",
      originalPrice: "$31.95",
      rating: 5,
    },
    {
      image:
        "https://enovathemes.com/propharm/wp-content/uploads/product20-300x300.jpg",
      category: "Protein",
      name: "Amazonia Raw Protein Slim &",
      stars: 5,
      price: "$33.50",
      originalPrice: "$37.50",
      rating: 5,
    },
  ];

  return (
    <>
      <div className="medicines-categories-container">
        <h1 className="medicines-categories-heading">Popular Categories</h1>
        <div className="medicines-categories-button-container">
          <button className="medicines-categories-button">Suplements</button>
          <button className="medicines-categories-button">Medicines</button>
          <button className="medicines-categories-button">Herbs</button>
        </div>
      </div>
      <div className="medicines-card-main-container">
      <div className="medicines-cards-mini-container">
        {medicines.map((medicine, index) => (
          <div
            className="medicines-cards-main-category-container"
            style={{ height: "490px", width: "275px" }}
            key={index}
          >
            <div className="medicines-cards-sub-category-container">
              <div className="medicines-cards-new-buttons">
                {index === 1 && (
                  <button
                    className="medicines-cards-button"
                    style={{ background: "#c047ef", left: "80px" }}
                  >
                    New
                  </button>
                )}
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

            <div className="medicines-cards-image-container ">
              <img
                className="medicines-cards-image"
                style={{ height: "250px", width: "250px" }}
                src={medicine.image}
                alt=""
              />
            </div>

            <h5 className="medicines-cards-heading">{medicine.category}</h5>
            <h2
              className="medicines-cards-paragraph"
            >
              {medicine.name}
            </h2>
            <Rating size={25} initialValue={medicine.rating} />
            <p className="medicines-cards-price">
              {medicine.originalPrice && (
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  {medicine.originalPrice}
                </span>
              )}{" "}
              {medicine.price}
            </p>
            <button className="medicines-cards-cart-button mb-0">
              {" "}
              <MdOutlineShoppingCart />
              Select Options{" "}
            </button>
          </div>
        ))}
      </div>
      </div>
      
    </>
  );
}

export default MedicineCard;
