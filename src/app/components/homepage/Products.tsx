import { allProducts } from "@/lib/api";
import { IAllProducts } from "@/types/type";
import ProductCard from "../shared/ProductCard";

const AllProducts = async () => {
  const products = await allProducts();

  return (
    <div className="">
      <h2 className="text-xl text-[#1D271F] font-bold">সব পণ্য</h2>
      <p className="text-sm text-[#1D271F] py-3">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
      <div className="grid grid-cols-3 gap-4 py-5">
        {products.map((product: IAllProducts) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
