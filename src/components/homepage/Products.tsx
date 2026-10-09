/* cspell:disable */

import { allProducts } from "@/lib/api";
import { IAllProducts } from "@/types/type";
import ProductCard from "../shared/ProductCard";

const AllProducts = async () => {
  const products = await allProducts();
  const totalProducts = products.length;

  return (
    <div className="w-full">
      <h2 className="text-lg md:text-xl text-[#1D271F] font-bold">সব পণ্য</h2>
      <p className="text-xs md:text-sm text-[#1D271F] py-3">
        মোট {totalProducts}টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product: IAllProducts) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

/* cspell:enable */

export default AllProducts;
