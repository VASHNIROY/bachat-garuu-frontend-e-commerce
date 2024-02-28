import FeaturedProducts from "../Components/FeaturedProducts/featuredproducts";
import MedicineCard from "../Components/MedicineCard/medicineCard";
import Curosal from "../Components/MoreToLove/moretolove";
import SellingProducts from "../Components/SellingProducts/sellingproducts";

const HomePage = () => {
  return (
    <>
      <FeaturedProducts />
      <SellingProducts />
      <MedicineCard />
      <Curosal />
    </>
  );
};

export default HomePage;
