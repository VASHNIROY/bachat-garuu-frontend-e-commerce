import { useState } from "react";
import "./ProductViewdetail.css";
import { Rating } from "react-simple-star-rating";
import { FiShoppingCart } from "react-icons/fi";
import {
  FaRegHeart,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
  FaTelegramPlane,
  FaCheck,
} from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { LuRepeat2, LuMail } from "react-icons/lu";
import { BiSolidDiscount } from "react-icons/bi";
import Slider from "react-slick";
import { useAppContext } from "../../Context";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import BasicCard from "../BasicCard/basiccard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    category: "Supplements, Vitamins",
    name: "Vitamin C 500mg Sugarless Tab",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product42-300x300.jpg",
    price: "$16.00 - $35.00",
    rating: 2,
  },
  {
    id: 2,
    category: "Personal Care",
    name: "Enterosgel Tube",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product29-300x300.jpg",
    price: "$41.95",
    rating: "",
  },
  {
    id: 3,
    category: "Sports Nutrition",
    name: "Protein Chocolate Flake",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product47-300x300.jpg",
    price: "$54.95",
    rating: 5,
  },
  {
    id: 4,
    category: "Medicines",
    name: "Advil Minis Liquid Cap X 90",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product13-300x300.jpg",
    price: "$22.00",
    rating: "",
  },
];

const bannerImages = [
  {
    id: 5,
    category: "Home",
    name: "Thar's Antiseptic Ointment",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product4-300x300.jpg",
    price: "$9.95",
    rating: 4,
  },
  {
    id: 6,
    category: "Baby",
    name: "MooGoo Baby & Child Cradle",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product22-300x300.jpg",
    price: "$16.50",
    rating: 4,
  },
  {
    id: 7,
    category: "Health Topics",
    name: "Insulin Lispo Kwilpen",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product74-300x300.jpg",
    price: "$18.88 - $32.88",
    rating: 3,
  },
  {
    id: 8,
    category: "Baby",
    name: "Promethazine",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product1-300x300.jpg",
    price: "$22.00",
    originalPrice: "$31.95",
    rating: "",
  },
];

const moreToLove = [
  {
    id: 5,
    category: "Home",
    name: "Thar's Antiseptic Ointment",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product4-300x300.jpg",
    price: "$9.95",
    rating: 4,
  },
  {
    id: 6,
    category: "Baby",
    name: "MooGoo Baby & Child Cradle",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product22-300x300.jpg",
    price: "$16.50",
    rating: 4,
  },
  {
    id: 7,
    category: "Health Topics",
    name: "Insulin Lispo Kwilpen",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product74-300x300.jpg",
    price: "$18.88 - $32.88",
    rating: 3,
  },
  {
    id: 8,
    category: "Baby",
    name: "Promethazine",
    image:
      "https://enovathemes.com/propharm/wp-content/uploads/product1-300x300.jpg",
    price: "$22.00",
    originalPrice: "$31.95",
    rating: "",
  },
];

const ProductViewdetail = () => {
  const [selectedProduct, setProduct] = useState(products[0]);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const [selectActive, setSelectActive] = useState("des");

  const { setproductid, productData } = useAppContext();
  const { id } = useParams();

  const { productDetails, similarProducts } = productData;

  console.log("productDetails", productDetails);

  useEffect(() => {
    setproductid(id);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  return (
    <div className="product-view-detail-main-container">
      <div className="product-view-detail-sub-container">
        <div className="product-view-detail-left-side-container">
          <div className="product-view-detail-first-container">
            <div className="product-view-detail-view-container">
              <div className="product-view-detail-save-container">
                <p className="product-view-detail-save-text">Save $5</p>
              </div>
              <div className="product-view-detail-big-img-container">
                <img
                  className="product-view-big-image"
                  src={productDetails.home_image}
                />
              </div>
              <div className="product-view-detail-products-images-container">
                {productDetails &&
                  productDetails.gallery_image &&
                  productDetails.gallery_image.map((each) => (
                    <>
                      {" "}
                      <img
                        className={`product-view-detail-products-image ${
                          each === selectedProduct ? "active" : ""
                        }`}
                        src={each.image}
                        alt="name"
                        onClick={() => setProduct(each)}
                      />
                    </>
                  ))}
              </div>
            </div>
            <div className="product-view-detail-container">
              <div className="product-view-details-first-container">
                <h1 className="product-view-detail-heading">
                  Vitamin D3 (1000IU) Cap X
                </h1>
                <div className="product-view-detail-review-container">
                  {" "}
                  <Rating size={20} initialValue={3.2} />{" "}
                  <p className="product-view-detail-review">
                    {" "}
                    (3 customer reviews)
                  </p>
                </div>
              </div>
              <hr />
              <div className="product-view-details-second-container">
                <ul className="product-view-detail-un-order-list">
                  <li className="product-view-detail-li">
                    {" "}
                    <FaCheck className="product-view-detail-check" />3 cleaning
                    programs
                  </li>
                  <li className="product-view-detail-li">
                    {" "}
                    <FaCheck className="product-view-detail-check" />
                    Digital display
                  </li>
                  <li className="product-view-detail-li">
                    <FaCheck className="product-view-detail-check" /> Memory for
                    1 user
                  </li>
                </ul>
              </div>
              <hr />
              <div className="product-view-details-third-container">
                <h2 className="product-view-detail-price">$30.00 – $40.00</h2>
              </div>
              <div className="product-view-details-four-container">
                <div className="product-add-to-cart-container">
                  <div className="product-add-button-container">
                    <button
                      className="product-add-button"
                      onClick={() => setNumberOfProducts(numberOfProducts - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={numberOfProducts}
                      className="product-view-detail-input"
                    />
                    <button
                      className="product-add-button"
                      onClick={() => setNumberOfProducts(numberOfProducts + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="product-add-to-cart-button">
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button className="product-buy-now-button">
                    <FiShoppingCart /> Buy now
                  </button>
                </div>
                <div className="product-add-to-categories-container">
                  <p className="product-view-details-category">
                    {" "}
                    <FaRegHeart /> Add to wishlist
                  </p>

                  <p className="product-view-details-category">
                    <LuRepeat2 /> Add to compare
                  </p>
                  <p className="product-view-details-category">
                    <LuMail /> Ask about product
                  </p>
                </div>
                <div className="product-discount-banner">
                  <BiSolidDiscount className="discount-icon" /> Add 15 products
                  to cart and get 10$ discount
                </div>
                <div className="product-view-detail-icons-container">
                  <button className="product-view-detail-icon-button-f">
                    <FaFacebookF />
                  </button>
                  <button className="product-view-detail-icon-button-l">
                    <FaLinkedinIn />
                  </button>
                  <button className="product-view-detail-icon-button-p">
                    <FaPinterestP />
                  </button>
                  <button className="product-view-detail-icon-button-w">
                    <FaWhatsapp />
                  </button>
                  <button className="product-view-detail-icon-button-t">
                    <FaTelegramPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-view-detail-bottom-container">
            <div className="product-view-detail-about-container">
              <div className="product-view-detals-select-buttons">
                <button
                  className={`product-view-detail-select-button ${
                    selectActive === "des" && "select-active"
                  }`}
                  onClick={() => setSelectActive("des")}
                >
                  Description
                </button>
                <button
                  className={`product-view-detail-select-button ${
                    selectActive === "add" && "select-active"
                  }`}
                  onClick={() => setSelectActive("add")}
                >
                  Additional Information
                </button>
              </div>
              {selectActive === "des" ? (
                <div className="product-view-detail-description-container">
                  <p className="product-view-detail-description-para">
                    {/* But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. To take a trivial example, which of us ever
                    undertakes laborious physical exercise, except to obtain
                    some advantage from it? But who has any right to find fault
                    with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that
                    produces no resultant pleasure? On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment, so blinded by desire. */}
                    {productDetails.description}
                  </p>
                </div>
              ) : (
                <div className="product-view-detail-additional-information">
                  <table className="product-additionl-details-table">
                    <thead>
                      {" "}
                      <th></th>
                      <th></th>
                    </thead>

                    <tbody>
                      <tr className="product-additional-details-table-row">
                        <td className="product-additional-details-left-heading">
                          brand
                        </td>
                        <td className="product-additional-details-right-heading">
                          {productDetails.brand_name}
                        </td>
                      </tr>
                      <tr className="product-additional-details-table-row">
                        <td className="product-additional-details-left-heading">
                          Form
                        </td>
                        <td className="product-additional-details-right-heading">
                          Ornal Granules
                        </td>
                      </tr>
                      <tr className="product-additional-details-table-row">
                        <td className="product-additional-details-left-heading">
                          Militers
                        </td>
                        <td className="product-additional-details-right-heading">
                          500
                        </td>
                      </tr>
                      <tr className="product-additional-details-table-row">
                        <td className="product-additional-details-left-heading">
                          Frequency
                        </td>
                        <td className="product-additional-details-right-heading">
                          Individual
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="product-view-detail-right-side-container">
          <div className="product-view-detail-banner-first-container">
            <Slider {...settings}>
              {bannerImages.map((item) => (
                <BasicCard item={item} key={item.id} />
              ))}
            </Slider>
          </div>

          {/* <div className="product-view-detail-tab-banners-container">
            {bannerImages.map((el) => (
              <BasicCard item={el} key={el.id} />
            ))}
          </div> */}

          <div className="product-view-detail-mirror-banner-container">
            <img
              src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_3.png"
              alt="banner"
            />
            <div className="product-view-detail-banner-text-container">
              <p className="product-view-detail-banner-para">
                Pyridoxine Vitamin B6
              </p>
              <h2 className="product-view-detail-banner-head">
                Vitamins & Supplements
              </h2>
              <button className="product-view-detail-banner-button">
                View more <FaGreaterThan size={12} />
              </button>
            </div>
          </div>

          <div className="product-view-detail-more-to-love-main-container">
            <h2 className="product-view-detail-more-to-love-heading">
              More To Love
            </h2>
            <div className="product-view-detail-more-to-love-container">
              {" "}
              {moreToLove.map((el) => (
                <div
                  className="poduct-view-detail-more-to-love-card-container"
                  key={el.id}
                >
                  <img
                    className="product-more-to-love-image"
                    src={el.image}
                    alt={el.name}
                  />
                  <h1 className="product-more-to-love-heading">{el.name}</h1>
                  <h3 className="product-more-to-love-category">
                    {el.category}
                  </h3>
                  <p className="product-more-to-love-price">{el.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="product-view-detail-mirror-banner-container-2">
            <img
              src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_4.png"
              alt="banner"
            />
            <div className="product-view-detail-banner-text-container">
              <p className="product-view-detail-banner-para">
                Pyridoxine Vitamin B6
              </p>
              <h2 className="product-view-detail-banner-head">
                Vitamins & Supplements
              </h2>
              <button className="product-view-detail-banner-button-2">
                Shop now <FaGreaterThan size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewdetail;
