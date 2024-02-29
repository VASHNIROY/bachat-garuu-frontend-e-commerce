// import { Rating } from "react-simple-star-rating";
import "./sponsoredProducts.css";
import { useAppContext } from "../../Context";

function SponsoredProducts() {
  // const carouselItems = [

  const { sponsoredProducts } = useAppContext();
  console.log("sponsoredProducts", sponsoredProducts);
  return (
    <div className="medicine-curosal-main-container">
      <div className="medicine-curosal-mini-container">
        <h1 className="medicine-curosal-main-heading">Sponsored Products</h1>
        <div className="medicine-curosal-sub-container">
          {sponsoredProducts.map((item) => (
            <div
              key={item.brand_id}
              className="medicine-cursoal-row1-container"
            >
              <img
                src={item.home_image}
                alt={item.name}
                className="medcine-cursal-image"
              />
              <div className="medicine-curosal-content-container">
                {/* <Rating size={25} initialValue={item.rating} /> */}
                <h5 className="medicine-curosal-heading">{item.name}</h5>
                <p className="medicine-curosal-price">
                  <span
                    style={{ textDecoration: "line-through", color: "gray" }}
                  >
                    {item.unit_mrp}
                  </span>{" "}
                  {item.unit_sales_price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SponsoredProducts;
