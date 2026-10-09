import { IAllProducts } from "@/types/type";
import Link from "next/link";

const ProductCard = ({ product }: { product: IAllProducts }) => {
  return (
    <div>
      <Link key={product.id} href={`/product/${product.id}`}>
        {" "}
        <div className="space-y-3 rounded-2xl border border-gray-200 bg-white p-3 hover:border-[#05893e] hover:shadow sm:space-y-4 sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="shrink-0 rounded-2xl bg-[#f0f5f0] p-2 text-2xl sm:text-3xl">
              {product.image}
            </span>
            <div className="min-w-0">
              <h3 className="break-words text-sm font-semibold text-[#1D271F] sm:text-base">
                {product.nameBn}
              </h3>
              <span className="text-sm">প্রতি {product.unit}</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-[#1D271F]">আজকের দাম</h4>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-[#1D271F] sm:text-xl">
                {product.today}{" "}
                <span className="text-sm font-normal">টাকা</span>
              </h3>
              <div className="flex shrink-0 items-center gap-2 rounded-full bg-[#F0F5F0] px-2 py-1.5 text-sm sm:px-3 sm:py-2">
                <span
                  className={`${(product.change.dir === "up" && "text-red-500") || (product.change.dir === "down" && "text-green-500")}`}
                >
                  {(product.change.dir === "up" && "▲") ||
                    (product.change.dir === "down" && "▼") ||
                    (product.change.dir === "flat" && "━")}
                </span>
                <span>{product.change.pct}%</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
