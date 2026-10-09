import HeroSection from "../components/homepage/Hero";
import PriceDownSection from "../components/homepage/PriceDown";
import PriceUpSection from "../components/homepage/PriceUp";
import AllProducts from "../components/homepage/Products";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col gap-4 px-4 py-6 sm:gap-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <HeroSection />
        <PriceUpSection />
        <PriceDownSection />
        <AllProducts />
      </div>
    </>
  );
}
