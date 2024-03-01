import FeaturedProducts from "../Components/FeaturedProducts/featuredproducts";
import Layout from "../Components/Layout/layout";
import MedicineCard from "../Components/MedicineCard/medicineCard";
import SellingProducts from "../Components/SellingProducts/sellingproducts";
import NewSeltterBanner from "../Components/NewSeltterBanner";
import OfferCards from "../Components/OfferCards";
import CategorySlider from "../Components/CategorySlider/categorySlider";
import SponsoredProducts from "../Components/SponsoredProducts/sponsoredProducts";
import AdvertBanner from "../Components/AdvertisingBanner/advertBanner";
import BannerCarousel from "../Components/BannerCarousel/bannerCarousel";
import { CartSampleBtn } from "../Components/CartSampleBtn/cartsample";
const HomePage = () => {
  return (
    <>
      <CartSampleBtn />
      <AdvertBanner />
      <BannerCarousel />
      <FeaturedProducts />
      <CategorySlider />
      <Layout title={"ALl Products - Best offers "}>
        <NewSeltterBanner />
        <MedicineCard />
        <SponsoredProducts />
        <OfferCards />
        <SellingProducts />
      </Layout>
    </>
  );
};

export default HomePage;
