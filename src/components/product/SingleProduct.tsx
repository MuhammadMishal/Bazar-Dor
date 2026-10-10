import { singleProduct } from "@/lib/api";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  // console.log(productId);

  const product = await singleProduct({ slug: productId });

  // console.log("===============", product);

  const totalMinPrice =
    product?.markets.reduce((acc, current) => acc + current.min, 0) /
    product?.markets.length;
  const totalMaxPrice =
    product?.markets.reduce((acc, current) => acc + current.max, 0) /
    product?.markets.length;
  const ave = ((totalMaxPrice + totalMinPrice) / 2).toFixed(2);

  const minPrice =
    product?.markets?.length > 0
      ? Math.max(...product?.markets.map((market) => market.min))
      : 0;
  const maxPrice =
    product?.markets?.length > 0
      ? Math.max(...product?.markets.map((market) => market.max))
      : 0;

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:gap-5 sm:p-6 md:flex-row md:items-center md:justify-between lg:p-7">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="shrink-0 rounded-2xl bg-[#f0f5f0] p-3 text-4xl sm:p-5 sm:text-6xl">
            {product?.image}
          </span>
          <div className="min-w-0 space-y-1">
            <h2 className="wrap-break-word text-2xl font-bold text-[#1D271F] sm:text-3xl">
              {product?.nameBn}
            </h2>
            <p className="text-sm text-[#1d271fa1]">
              প্রতি {product?.unit} · {product?.categoryNameBn}
            </p>
            <p className="text-sm text-[#1d271fa1]">
              গতকালের তুলনায় আজ দাম
              {product?.change.dir === "up" && (
                <span>
                  <span className="font-semibold"> বেড়েছে</span> ·{" "}
                  {Number(product?.today ?? 0) -
                    Number(product?.yesterday ?? 0)}{" "}
                  টাকা
                </span>
              )}
              {product?.change.dir === "down" && (
                <span>
                  {" "}
                  <span className="font-semibold"> কমেছে</span> ·{" "}
                  {Number(product?.yesterday ?? 0) -
                    Number(product?.today ?? 0)}{" "}
                  টাকা
                </span>
              )}
              {product?.change.dir === "flat" && ` অপরিবর্তিত`}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#f0f5f0] p-4 sm:p-5 md:w-auto md:shrink-0">
          <p>আজকের দাম</p>
          <h2 className="text-2xl font-bold text-[#1D271F] sm:text-3xl">
            {product?.today}
          </h2>
          <p>টাকা / {product?.unit}</p>
          <div className="flex gap-2 items-center">
            <span
              className={`${(product?.change.dir === "up" && "text-red-500") || (product?.change.dir === "down" && "text-green-500")}`}
            >
              {(product?.change.dir === "up" && "▲") ||
                (product?.change.dir === "down" && "▼") ||
                (product?.change.dir === "flat" && "━")}
            </span>
            <span>{product?.change.pct}%</span>
          </div>
        </div>
      </div>

      <div className="my-5 rounded-2xl border border-gray-200 bg-white p-4 sm:my-7 sm:p-6 lg:p-7">
        <h2 className="text-xl font-semibold text-[#1D271F]">
          দামের সারসংক্ষেপ
        </h2>
        <div className="my-5 grid grid-cols-1 items-center gap-3 sm:my-6 sm:grid-cols-2 sm:gap-4 lg:my-7 lg:grid-cols-3 lg:gap-5">
          <div className="space-y-1.5 rounded-2xl border border-gray-200 p-4 sm:p-5">
            <p className="text-sm">সর্বনিম্ন দাম</p>
            <p className="text-[#1A9951]">
              <span className="text-xl font-bold sm:text-2xl">{minPrice}</span>{" "}
              টাকা
            </p>
            <p className="text-sm">সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="space-y-1.5 rounded-2xl border border-gray-200 p-4 sm:p-5">
            <p className="text-sm">সর্বাধিক দাম</p>
            <p className="text-red-500">
              <span className="text-xl font-bold sm:text-2xl">{maxPrice}</span>{" "}
              টাকা
            </p>
            <p className="text-sm">সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="space-y-1.5 rounded-2xl border border-gray-200 p-4 sm:p-5">
            <p className="text-sm">গড় দাম</p>
            <p className="text-[#1A9951]">
              <span className="text-xl font-bold sm:text-2xl">{ave}</span> টাকা
            </p>
            <p className="text-sm">প্রতি {product?.unit}-এর হিসাবে</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-[#1D271F]">
          বাজারভিত্তিক আজকের দাম
        </h2>
        <div>
          <div className="mt-3 w-full overflow-x-auto">
            <table className="table table-zebra min-w-150">
              {/* head */}
              <thead>
                <tr>
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বাধিক</th>
                  <th>গড়</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {product?.markets.map((item, ind) => (
                  <tr key={ind}>
                    <th>{item.market}</th>
                    <td>{item.division}</td>
                    <td>{item.min} টাকা</td>
                    <td>{item.max} টাকা</td>
                    <td className="font-semibold">
                      {(item.min + item.max) / 2} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
