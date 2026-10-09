import HeroSection from "./components/homepage/Hero";
import PriceDownSection from "./components/homepage/PriceDown";
import PriceUpSection from "./components/homepage/PriceUp";
import AllProducts from "./components/homepage/Products";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 py-10">
        <HeroSection />
        <PriceUpSection />
        <PriceDownSection />
        <AllProducts />
      </div>
    </>
  );
}
