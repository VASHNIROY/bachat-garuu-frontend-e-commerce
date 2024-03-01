import React from "react";
import Slider from "react-slick";
import BasicCard from "../BasicCard/basiccard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
  console.log("fetchedFeatureProducts", featuredProductsList);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 2,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          rows: 2,
          slidePerRow: 1,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
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
          <Link to={`/product/${item.id}`} key={item.id}>
            {" "}
            <BasicCard item={item} key={item.id} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
