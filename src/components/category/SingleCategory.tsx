import ProductCard from "@/components/shared/ProductCard";
import { getProductsByCategoryId, singleCategory } from "@/lib/api";
import { IAllProducts } from "@/types/type";
import CategorySortSelect from "./CategorySort";

const SingleCategoryPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ categoryId: string }>;
  searchParams?: Promise<{ sort?: string }>;
}) => {
  const { categoryId } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  console.log(resolvedSearchParams, "resolvedSearchParams");
  const selectedSort = resolvedSearchParams.sort ?? "default";

  const category = await singleCategory({
    slug: categoryId,
  });

  let products = await getProductsByCategoryId(categoryId);

  if (selectedSort === "price_desc") {
    products = [...products].sort((a, b) => (b.today ?? 0) - (a.today ?? 0));
  }

  if (selectedSort === "price_asc") {
    products = [...products].sort((a, b) => (a.today ?? 0) - (b.today ?? 0));
  }

  return (
    <div className="px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-4 sm:p-6 lg:p-7">
        <span className="shrink-0 text-3xl sm:text-4xl lg:text-5xl">
          {category.icon}
        </span>
        <div className="min-w-0 space-y-1">
          <h2 className="wrap-break-word text-xl font-bold text-[#1D271F] sm:text-2xl lg:text-[2rem]">
            {category.nameBn}
          </h2>
          <p className="text-sm text-[#1d271fa2] sm:text-base lg:text-lg">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 pt-5 sm:flex-row sm:items-center sm:pt-7 lg:pt-8">
        <h2 className="text-sm text-[#1d271fa1] sm:text-base lg:text-lg">
          মোট {products.length}টি পণ্য দেখানো হচ্ছে
        </h2>

        <CategorySortSelect initialSort={selectedSort} />
      </div>

      <div className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: IAllProducts) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryPage;
