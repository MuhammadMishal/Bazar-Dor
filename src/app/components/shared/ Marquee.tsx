import { allProducts } from "@/lib/api";
import { IAllProducts } from "@/types/type";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const MarqueeProducts = async () => {
  const products = await allProducts();
  console.log(products, "products");

  return (
    <div className="py-1.5 border-y border-gray-200">
      <Marquee className="flex gap-5" speed={80} pauseOnHover={true}>
        {products.map((product: IAllProducts) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="flex items-center gap-1.5 px-2 text-xs hover:underline sm:px-3 sm:text-sm">
              <span>{product.image}</span>
              <span>{product.nameBn}</span>
              <span>
                {product.today} টাকা/{product.unit}
              </span>
              <span
                className={`${product.change.dir === "up" ? "text-green-500" : "text-red-500"}`}
              >{`${product.change.dir === "up" ? "⮝" : "⮟"}`}</span>
              <span
                className={`${product.change.dir === "up" ? "text-green-500" : "text-red-500"}`}
              >
                {product.change.pct}%
              </span>
              <span className="px-2">•</span>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeProducts;
