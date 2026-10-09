import { IAllProducts } from "@/types/type";
import Link from "next/link";

const ProductCard = ({ product }: { product: IAllProducts }) => {
  return (
    <div>
      <Link key={product.id} href="">
        <div className="bg-white rounded-2xl space-y-4 border border-gray-200 hover:border-[#05893e] hover:shadow p-4">
          <div className="flex gap-3 items-center">
            <span className="p-2 bg-[#f0f5f0] rounded-2xl text-3xl">
              {product.image}
            </span>
            <div>
              <h3 className="text-[16px] font-semibold text-[#1D271F]">
                {product.nameBn}
              </h3>
              <span>প্রতি {product.unit}</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-[#1D271F]">আজকের দাম</h4>
            <div className="flex gap-5 justify-between items-center">
              <h3 className="text-[#1D271F] text-xl font-bold">
                {product.today}{" "}
                <span className="text-sm font-normal ">টাকা</span>
              </h3>
              <div className="bg-[#F0F5F0] py-2 px-3 rounded-full flex gap-2">
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
