import { useState } from "react";
import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categorySlider.css";
import { useAppContext } from "../../Context";

function CategorySlider() {
  const [isHovered, setIsHovered] = useState(false);

  const { categoryList } = useAppContext();

  const settings = {
    dots: false,
    prevArrow: (
      <IoIosArrowBack
        size="40"
        color={isHovered ? "#fff" : "black"}
        className="custom-prev-arrow"
        style={{ transition: "color 0.3s ease" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    ),
    nextArrow: (
      <IoIosArrowForward
        size="40"
        color={isHovered ? "#fff" : "black"}
        className="custom-prev-arrow"
        style={{ transition: "color 0.3s ease" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    ),
    speed: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="slider-main-container">
      <div className="slider-container-2">
        <Slider {...settings}>
          {categoryList.map((slide) => {
            console.log(slide, "helloooooo");
            return (
              <div key={slide.id} className="icon-content-container">
                <img className="icon-slider" src={slide.image} />
                <p>{slide.name}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CategorySlider;
