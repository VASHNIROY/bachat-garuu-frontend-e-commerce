import { Rating } from "react-simple-star-rating";
import "./moretolove.css";

function Curosal() {
  const carouselItems = [
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product76-300x300.jpg",
      rating: 1,
      title: "Henry Blooms One Night Collagen",
      oldPrice: "$44.00",
      newPrice: "$39.00",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product16-300x300.jpg",
      rating: "",
      title: "Nair Precision Facial Hair Removal ",
      oldPrice: "$5.50",
      newPrice: "$4.40",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product25-300x300.jpg",
      rating: "",
      title: "Musashi 100% Whey Vanilla",
      oldPrice: "$45.95",
      newPrice: "$40.15",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product43-300x300.jpg",
      rating: "",
      title: "Spring Leaf Kids Fish Oil 750mg",
      newPrice: "$24.95",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product73-300x300.jpg",
      rating: "",
      title: "Pain Away Forte+Arthritis Cream",
      oldPrice: "$22.95",
      newPrice: "$20.95",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product54-300x300.jpg",
      rating: "",
      title: "Nature's Goodness Manuka Honey",
      newPrice: "$36.95",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product64-300x300.jpg",
      rating: 5,
      title: "Nordic Naturals Arctic-D Cod Liver Oil",
      oldPrice: "$42.95",
      newPrice: "$36.95",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product44-300x300.jpg",
      rating: 5,
      title: "More like this Martin & Pleasance",
      newPrice: "$6.95",
    },
    {
      imageSrc:
        "https://enovathemes.com/propharm/wp-content/uploads/product32-300x300.jpg",
      rating: 5,
      title: "Nuzest Clean Lean Protein Smooth",
      oldPrice: "$39.95",
      newPrice: "$30.15",
    },
  ];
  return (
    <div className="medicine-curosal-main-container">
      <h1 className="medicine-curosal-main-heading">More To Love</h1>
      <div className="medicine-curosal-sub-container">
        {carouselItems.map((item, index) => (
          <div key={index} className="medicine-cursoal-row1-container">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="medcine-cursal-image"
            />
            <div className="medicine-curosal-content-container">
              <Rating size={25} initialValue={item.rating} />
              <h5 className="medicine-curosal-heading">{item.title}</h5>
              <p className="medicine-curosal-price">
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  {item.oldPrice}
                </span>{" "}
                {item.newPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curosal;
