import FeaturedProducts from "../Components/FeaturedProducts/featuredproducts";
import Layout from "../Components/Layout/layout";
import MedicineCard from "../Components/MedicineCard/medicineCard";
import Curosal from "../Components/MoreToLove/moretolove";
import SellingProducts from "../Components/SellingProducts/sellingproducts";
import NewSeltterBanner from "../Components/NewSeltterBanner";
import CategorySlider from "../Components/CategorySlider/categorySlider";

const HomePage = () => {
  return (
    <>
      <FeaturedProducts />
      <CategorySlider />
      <Layout title={"ALl Products - Best offers "}>
        <SellingProducts />
        <NewSeltterBanner />
        <MedicineCard />
        <Curosal />
      </Layout>
    </>
  );
};

export default HomePage;
