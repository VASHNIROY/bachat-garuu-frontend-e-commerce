import "./card.css";

function BasicCard({ item }) {
  return (
    <div className="features-carousel-card">
      <div className="featured-carousel-card-img-container">
        <img
          alt="image"
          className="featured-carousel-card-img"
          src={item?.image}
        />
      </div>
      <div className="featured-carousel-card-content-container">
        <div>Card {item.id}</div>
        <div>
          Some quick example text to build on the card title and make up the...
        </div>
      </div>
    </div>
  );
}

export default BasicCard;
