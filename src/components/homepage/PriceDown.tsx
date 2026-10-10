import { allProducts } from "@/lib/api";
import { IAllProducts } from "@/types/type";
import ProductCard from "../shared/ProductCard";

const PriceDownSection = async () => {
  const products = await allProducts();
  const priceDownProducts = products.filter(
    (product: IAllProducts) => product.change.dir === "down",
  );

  return (
    <div className="pb-10">
      <h2
        className="text-lg md:text-xl text-[#1D271F] font-bold"
        spellCheck={false}
      >
        <span className="text-[#1A9951] pr-2">▼</span>আজ দাম কমেছে
      </h2>
      <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-3">
        {priceDownProducts.slice(0, 8).map((product: IAllProducts) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceDownSection;
