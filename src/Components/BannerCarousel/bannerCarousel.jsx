import { useState, useEffect, useMemo } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
//import CustomSlider from '../Slider'; // Import CustomSlider component
import medicine1 from "../../Utils/medicine-box1.png";
import medicine2 from "../../Utils/medicine-box2.png";

import cyrup1 from "../../Utils/cyrup1.png";
import cyrup2 from "../../Utils/cyrup2.png";

import "./bannerCarousel.css";

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const bannerData = useMemo(
    () => [
      {
        bannerImage: [medicine1, medicine2],
        description: "For all your family members",
        title: "Cold&Flu protection",
        overlayColor:
          "https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg",
      },
      {
        bannerImage: [cyrup1, cyrup2],
        description: "pyridoxin vitamin B6",
        title: "Vitamins & Supplements",
        overlayColor:
          "https://enovathemes.com/propharm/wp-content/uploads/slide1_back-3.jpg",
      },
      {
        bannerImage: [medicine1, medicine2],
        description: "For all your family members",
        title: "Cold&Flu protection",
        overlayColor:
          "https://enovathemes.com/propharm/wp-content/uploads/slide4_back.jpg",
      },
      {
        bannerImage: [cyrup1, cyrup2],
        description: "pyridoxin vitamin B6",
        title: "Vitamins & Supplements",
        overlayColor:
          "https://enovathemes.com/propharm/wp-content/uploads/slide6_back.jpg",
      },
    ],
    []
  );

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + bannerData.length) % bannerData.length;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % bannerData.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = document.getElementById("carouselExampleIndicators");
    if (container) {
      container.style.backgroundColor = bannerData[activeIndex].overlayColor;
    }
  }, [activeIndex, bannerData]);

  return (
    <div className="banner-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {bannerData.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {bannerData.map((card, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div
                className="main-banner"
                style={{ backgroundImage: `url(${card.overlayColor})` }}
              >
                <div>
                  <p className="banner-paragraph-content">{card.description}</p>
                  <h2 className="banner-heading-content">{card.title}</h2>
                  <button className="banner-button">
                    Buy it Now{" "}
                    <span>
                      <MdOutlineKeyboardArrowRight />
                    </span>
                  </button>
                </div>
                <div className="banner-images-container">
                  <Fade direction="left">
                    <img
                      src={card.bannerImage[0]}
                      alt=""
                      className="banner-image"
                    />
                  </Fade>
                  <Fade direction="right">
                    <img
                      src={card.bannerImage[1]}
                      alt=""
                      className="banner-image"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Render the CustomSlider component */}
      {/* <CustomSlider /> */}
    </div>
  );
};

export default BannerCarousel;
