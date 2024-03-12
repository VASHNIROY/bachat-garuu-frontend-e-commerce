import React from "react";
import Slider from "react-slick";
import BasicCard from "../BasicCard/basiccard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredproducts.css";
import { useAppContext } from "../../Context/index.jsx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", right: 0 }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", left: 0 }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default function FeaturedProducts() {
  const slider = React.useRef(null);

  const { featuredProductsList } = useAppContext();

  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 2,

    responsive: [
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          rows: 2,
          slidePerRow: 1,
        },
      },

      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // const products = [
  //   {
  //     id: 1,
  //     category: "Supplements, Vitamins",
  //     name: "Vitamin C 500mg Sugarless Tab",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product42-300x300.jpg",
  //     price: "$16.00 - $35.00",
  //     rating: 2,
  //   },
  //   {
  //     id: 2,
  //     category: "Personal Care",
  //     name: "Enterosgel Tube",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product29-300x300.jpg",
  //     price: "$41.95",
  //     rating: "",
  //   },
  //   {
  //     id: 3,
  //     category: "Sports Nutrition",
  //     name: "Protein Chocolate Flake",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product47-300x300.jpg",
  //     price: "$54.95",
  //     rating: 5,
  //   },
  //   {
  //     id: 4,
  //     category: "Medicines",
  //     name: "Advil Minis Liquid Cap X 90",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product13-300x300.jpg",
  //     price: "$22.00",
  //     rating: "",
  //   },
  //   {
  //     id: 5,
  //     category: "Home",
  //     name: "Thar's Antiseptic Ointment",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product4-300x300.jpg",
  //     price: "$9.95",
  //     rating: 4,
  //   },
  //   {
  //     id: 6,
  //     category: "Baby",
  //     name: "MooGoo Baby & Child Cradle",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product22-300x300.jpg",
  //     price: "$16.50",
  //     rating: 4,
  //   },
  //   {
  //     id: 7,
  //     category: "Health Topics",
  //     name: "Insulin Lispo Kwilpen",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product74-300x300.jpg",
  //     price: "$18.88 - $32.88",
  //     rating: 3,
  //   },
  //   {
  //     id: 8,
  //     category: "Baby",
  //     name: "Promethazine",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product1-300x300.jpg",
  //     price: "$22.00",
  //     originalPrice: "$31.95",
  //     rating: "",
  //   },
  //   {
  //     id: 9,
  //     category: "Herbs",
  //     name: "Otrivin Breathe Clean Natural",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product50-300x300.jpg",
  //     price: "$12.95",
  //     rating: 5,
  //   },
  //   {
  //     id: 10,
  //     category: "Herbs",
  //     name: "Elastoplast Sensitive XXL",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product47-300x300.jpg",
  //     price: "$7.11",
  //     originalPrice: "$8.50",
  //     rating: 5,
  //   },
  //   {
  //     id: 11,
  //     category: "Supplements, Vitamins",
  //     name: "Own Vitamin B1 250mg Tab X 75",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product8-300x300.jpg",
  //     price: "$15.50",
  //     rating: "",
  //   },
  //   {
  //     id: 12,
  //     category: "Personal Care",
  //     name: "More like this Martin &",
  //     image:
  //       "https://enovathemes.com/propharm/wp-content/uploads/product44-300x300.jpg",
  //     price: "$6.95",
  //     rating: 5,
  //   },
  // ];

  // const uniqueProducts = Array.from(
  //   new Set(products.map((product) => product.id))
  // ).map((id) => {
  //   return products.find((product) => product.id === id);
  // });

  return (
    <div style={{ width: "100%", padding: "0 9% 0 9%" }}>
      <h1 className="product-curosal-heading">Featured Products</h1>
      <div className="feature-curosal-arrow-button">
        <button
          className="feature-curosal-arrow-right"
          onClick={() => slider?.current?.slickPrev()}
        >
          <IoIosArrowBack className="feature-curosal-arrow" />
        </button>
        <button
          style={{ marginLeft: 10 }}
          className="feature-curosal-arrow-right"
          onClick={() => slider?.current?.slickNext()}
        >
          <IoIosArrowForward className="feature-curosal-arrow" />
        </button>
      </div>
      <Slider ref={slider} {...settings}>
        {featuredProductsList.map((item) => (
          <BasicCard item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
