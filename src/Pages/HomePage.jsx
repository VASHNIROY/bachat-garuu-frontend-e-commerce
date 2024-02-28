import FeaturedProducts from "../Components/FeaturedProducts/featuredproducts";
import MedicineCard from "../Components/MedicineCard/medicineCard";
import Curosal from "../Components/MoreToLove/moretolove";
import SellingProducts from "../Components/SellingProducts/sellingproducts";
import NewSeltterBanner from "../Components/NewSeltterBanner";

const HomePage = () => {
  return (
    <>
      <FeaturedProducts />
      <SellingProducts />
      <NewSeltterBanner />
      <MedicineCard />
      <Curosal />
    </>
  );
};

export default HomePage;
