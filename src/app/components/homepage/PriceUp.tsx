import { allProducts } from "@/lib/api";
import { IAllProducts } from "@/types/type";
import ProductCard from "../shared/ProductCard";

const PriceUpSection = async () => {
  const products = await allProducts();
  const priceUpProducts = products.filter(
    (product: IAllProducts) => product.change.dir === "up",
  );
  console.log(priceUpProducts, "products price up");

  return (
    <div className="py-10">
      <h2 className="text-lg sm:text-xl text-[#1D271F] font-bold">
        <span className="text-red-500 pr-2">▲</span>আজ দাম বাড়ছে
      </h2>
      <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {priceUpProducts.slice(0, 8).map((product: IAllProducts) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceUpSection;
